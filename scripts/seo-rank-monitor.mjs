#!/usr/bin/env node
/**
 * Rank monitor (read-only, Google Search Console). Run every 12 hours by the
 * scheduled SEO session.
 *
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/key.json node scripts/seo-rank-monitor.mjs
 *
 * Each run saves a snapshot of every page, every query and every page+query
 * pair for the last 7 days (position, clicks, impressions, CTR) to
 * reports/rank-snapshots/<timestamp>.json, compares it with the previous
 * snapshot, and writes reports/rank-monitor-latest.md:
 *   - totals now vs previous run
 *   - queries that moved 3+ positions up or down
 *   - new and lost queries
 *   - pages: impressions, clicks and position change
 *   - striking distance (positions 4–20) with the page that ranks
 * It also appends one row per run to reports/rank-monitor.csv.
 *
 * Note: Search Console data lags 1–3 days, so two runs 12 hours apart can
 * show the same data. The report says so when the latest day has not moved.
 */
import { readFileSync, writeFileSync, existsSync, appendFileSync, mkdirSync, readdirSync } from "node:fs";
import { createSign } from "node:crypto";

const SITE = "https://www.qualifiedleadsx.com/";
const DIR = "reports/rank-snapshots";
const MD = "reports/rank-monitor-latest.md";
const CSV = "reports/rank-monitor.csv";
const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!keyPath) {
  console.error("Set GOOGLE_APPLICATION_CREDENTIALS to the service-account key file.");
  process.exit(1);
}
const creds = JSON.parse(readFileSync(keyPath, "utf8"));
const b64 = (s) => Buffer.from(s).toString("base64url");

async function token() {
  const now = Math.floor(Date.now() / 1000);
  const h = b64(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const p = b64(JSON.stringify({ iss: creds.client_email, scope: "https://www.googleapis.com/auth/webmasters.readonly", aud: creds.token_uri, iat: now, exp: now + 3600 }));
  const sig = createSign("RSA-SHA256").update(`${h}.${p}`).sign(creds.private_key, "base64url");
  const r = await fetch(creds.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${h}.${p}.${sig}` }),
  });
  const j = await r.json();
  if (!j.access_token) throw new Error("token: " + JSON.stringify(j));
  return j.access_token;
}
const T = await token();
async function query(startDate, endDate, dimensions) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${T}`, "Content-Type": "application/json" },
    body: JSON.stringify({ startDate, endDate, dimensions, rowLimit: 25000, dataState: "all" }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`GSC ${r.status}: ${JSON.stringify(j)}`);
  return j.rows ?? [];
}

const iso = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => iso(new Date(Date.now() - n * 864e5));
const path = (u) => u.replace(/^https?:\/\/[^/]+/, "") || "/";
const r1 = (n) => Math.round(n * 10) / 10;
const pack = (rows, key) => Object.fromEntries(rows.map((r) => [key(r), { c: r.clicks, i: r.impressions, p: r1(r.position) }]));

const daily = await query(daysAgo(30), iso(new Date()), ["date"]);
const lastDay = daily.at(-1)?.keys[0] ?? "none";
const from = daysAgo(7);
const to = iso(new Date());
const [q, p, pq] = await Promise.all([query(from, to, ["query"]), query(from, to, ["page"]), query(from, to, ["page", "query"])]);
const snap = {
  takenAt: new Date().toISOString(),
  window: { from, to },
  lastDay,
  totals: { clicks: p.reduce((a, r) => a + r.clicks, 0), impressions: p.reduce((a, r) => a + r.impressions, 0), pages: p.length, queries: q.length },
  queries: pack(q, (r) => r.keys[0]),
  pages: pack(p, (r) => path(r.keys[0])),
  pairs: pack(pq, (r) => `${path(r.keys[0])}\t${r.keys[1]}`),
};

mkdirSync(DIR, { recursive: true });
const prevFile = readdirSync(DIR).filter((f) => f.endsWith(".json")).sort().at(-1);
const prev = prevFile ? JSON.parse(readFileSync(`${DIR}/${prevFile}`, "utf8")) : null;
writeFileSync(`${DIR}/${snap.takenAt.replace(/[:.]/g, "-")}.json`, JSON.stringify(snap));

const pageFor = (query) => {
  let best = null;
  for (const [k, v] of Object.entries(snap.pairs)) {
    const [pg, qq] = k.split("\t");
    if (qq === query && (!best || v.i > best.v.i)) best = { pg, v };
  }
  return best?.pg ?? "?";
};
const avgPos = (m) => {
  const vals = Object.values(m);
  const imp = vals.reduce((a, v) => a + v.i, 0);
  return imp ? r1(vals.reduce((a, v) => a + v.p * v.i, 0) / imp) : 0;
};

const L = [];
L.push(`# Rank monitor: ${snap.takenAt.slice(0, 16).replace("T", " ")} UTC`);
L.push("");
L.push(`Window: last 7 days (${from} to ${to}); latest day with data: ${lastDay}. Source: Google Search Console.`);
const t = snap.totals;
const tp = prev?.totals;
const d = (a, b) => (b === undefined ? "" : ` (${a - b >= 0 ? "+" : ""}${a - b})`);
L.push("");
L.push(`| Metric | Now | Change vs previous run |`);
L.push(`|---|---|---|`);
L.push(`| Clicks (7d) | ${t.clicks} | ${tp ? d(t.clicks, tp.clicks) : "first run"} |`);
L.push(`| Impressions (7d) | ${t.impressions} | ${tp ? d(t.impressions, tp.impressions) : ""} |`);
L.push(`| Pages with impressions | ${t.pages} | ${tp ? d(t.pages, tp.pages) : ""} |`);
L.push(`| Queries | ${t.queries} | ${tp ? d(t.queries, tp.queries) : ""} |`);
L.push(`| Avg position (impression-weighted) | ${avgPos(snap.pages)} | ${prev ? `was ${avgPos(prev.pages)}` : ""} |`);
if (prev && prev.lastDay === lastDay) L.push("", `_Search Console has not added a new day since the previous run (${lastDay}), so changes below come only from late-arriving data._`);

if (prev) {
  const moved = [];
  for (const [k, v] of Object.entries(snap.queries)) {
    const o = prev.queries[k];
    if (o && Math.abs(o.p - v.p) >= 3) moved.push({ k, from: o.p, to: v.p, i: v.i });
  }
  const up = moved.filter((m) => m.to < m.from).sort((a, b) => b.from - b.to - (a.from - a.to));
  const down = moved.filter((m) => m.to > m.from).sort((a, b) => b.to - b.from - (a.to - a.from));
  L.push("", `## Queries moving up (${up.length})`);
  for (const m of up.slice(0, 25)) L.push(`- **${m.k}**: ${m.from} → ${m.to} (${m.i} impr) on ${pageFor(m.k)}`);
  L.push("", `## Queries moving down (${down.length})`);
  for (const m of down.slice(0, 25)) L.push(`- **${m.k}**: ${m.from} → ${m.to} (${m.i} impr) on ${pageFor(m.k)}`);
  const fresh = Object.keys(snap.queries).filter((k) => !prev.queries[k]);
  const lost = Object.keys(prev.queries).filter((k) => !snap.queries[k]);
  L.push("", `## New queries (${fresh.length})`);
  for (const k of fresh.sort((a, b) => snap.queries[b].i - snap.queries[a].i).slice(0, 25)) L.push(`- ${k}: pos ${snap.queries[k].p}, ${snap.queries[k].i} impr on ${pageFor(k)}`);
  L.push("", `## Lost queries (${lost.length})`);
  for (const k of lost.slice(0, 25)) L.push(`- ${k} (was pos ${prev.queries[k].p})`);
}

L.push("", "## Pages", "", "| Page | Impr | Clicks | Pos | Δ pos |", "|---|---|---|---|---|");
for (const [k, v] of Object.entries(snap.pages).sort((a, b) => b[1].i - a[1].i).slice(0, 40)) {
  const o = prev?.pages[k];
  L.push(`| ${k} | ${v.i}${o ? d(v.i, o.i) : ""} | ${v.c} | ${v.p} | ${o ? r1(o.p - v.p) : "new"} |`);
}
L.push("", "## Striking distance (positions 4–20)");
const sd = Object.entries(snap.pairs).filter(([, v]) => v.p >= 4 && v.p <= 20).sort((a, b) => b[1].i - a[1].i);
for (const [k, v] of sd.slice(0, 25)) {
  const [pg, qq] = k.split("\t");
  L.push(`- **${qq}**: pos ${v.p}, ${v.i} impr, ${v.c} clicks → ${pg}`);
}
L.push("", `Δ pos is positive when the page moved up. Previous snapshot: ${prevFile ?? "none"}.`);
writeFileSync(MD, L.join("\n") + "\n");

const header = "taken_at,last_day,clicks_7d,impressions_7d,pages,queries,avg_position\n";
if (!existsSync(CSV)) writeFileSync(CSV, header);
appendFileSync(CSV, [snap.takenAt, lastDay, t.clicks, t.impressions, t.pages, t.queries, avgPos(snap.pages)].join(",") + "\n");
console.log(L.join("\n"));
