#!/usr/bin/env node
/**
 * Daily SEO tracking from Google Search Console (read-only).
 *
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/key.json node scripts/seo-daily.mjs
 *
 * Appends one row per run to reports/seo-tracking.csv:
 *   run_date, last_full_day, day_impr, day_clicks, 7d_impr, 7d_clicks, 7d_ctr,
 *   7d_avg_pos, 28d_impr, 28d_clicks, pages_28d, queries_28d,
 *   page1_queries_28d, new_queries
 * and prints queries seen for the first time since the previous run
 * (stored in reports/seo-known-queries.json), plus striking-distance
 * queries (positions 5–20) to work on next.
 */
import { readFileSync, writeFileSync, existsSync, appendFileSync } from "node:fs";
import { createSign } from "node:crypto";

const SITE = "https://www.qualifiedleadsx.com/";
const CSV = "reports/seo-tracking.csv";
const KNOWN = "reports/seo-known-queries.json";
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
    body: JSON.stringify({ startDate, endDate, dimensions, rowLimit: 5000, dataState: "all" }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`GSC ${r.status}: ${JSON.stringify(j)}`);
  return j.rows ?? [];
}

const iso = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => iso(new Date(Date.now() - n * 864e5));
const today = iso(new Date());

const daily = await query(daysAgo(30), today, ["date"]);
// Search Console data lags; the newest day is usually partial, so report the
// latest day with data and treat the 7-day window as ending there.
const lastDay = daily.at(-1)?.keys[0] ?? daysAgo(2);
const sum = (rows, k) => rows.reduce((a, r) => a + r[k], 0);
const last7 = daily.slice(-7);
const impr7 = sum(last7, "impressions");
const clicks7 = sum(last7, "clicks");
const pos7 = impr7 ? last7.reduce((a, r) => a + r.position * r.impressions, 0) / impr7 : 0;

const start28 = daysAgo(28);
const pages = await query(start28, today, ["page"]);
const queries = await query(start28, today, ["query"]);
const pageQuery = await query(start28, today, ["query", "page"]);

const known = existsSync(KNOWN) ? new Set(JSON.parse(readFileSync(KNOWN, "utf8"))) : new Set();
const firstRun = known.size === 0;
const fresh = queries.filter((r) => !known.has(r.keys[0]));
queries.forEach((r) => known.add(r.keys[0]));
writeFileSync(KNOWN, JSON.stringify([...known].sort(), null, 1));

const page1 = queries.filter((r) => r.position <= 10).length;
const header = "run_date,last_full_day,day_impr,day_clicks,7d_impr,7d_clicks,7d_ctr,7d_avg_pos,28d_impr,28d_clicks,pages_28d,queries_28d,page1_queries_28d,new_queries\n";
if (!existsSync(CSV)) writeFileSync(CSV, header);
const lastRow = daily.at(-1) ?? { impressions: 0, clicks: 0 };
const row = [
  today, lastDay, lastRow.impressions, lastRow.clicks, impr7, clicks7,
  impr7 ? (clicks7 / impr7 * 100).toFixed(2) : "0", pos7.toFixed(1),
  sum(pages, "impressions"), sum(pages, "clicks"), pages.length, queries.length, page1,
  firstRun ? "" : fresh.length,
];
appendFileSync(CSV, row.join(",") + "\n");

const path = (u) => u.replace(SITE.slice(0, -1), "") || "/";
console.log(`Search Console, ${SITE}`);
console.log(`  latest day ${lastDay}: ${lastRow.impressions} impressions, ${lastRow.clicks} clicks`);
console.log(`  last 7 days: ${impr7} impressions, ${clicks7} clicks, CTR ${row[6]}%, avg position ${row[7]}`);
console.log(`  last 28 days: ${row[8]} impressions, ${row[9]} clicks, ${pages.length} pages, ${queries.length} queries, ${page1} on page 1`);
if (!firstRun) {
  console.log(`\nNew queries since last run (${fresh.length}):`);
  for (const r of fresh.sort((a, b) => b.impressions - a.impressions).slice(0, 40)) {
    const pg = pageQuery.find((x) => x.keys[0] === r.keys[0]);
    console.log(`  ${String(r.impressions).padStart(3)} impr  pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}  ->  ${pg ? path(pg.keys[1]) : "?"}`);
  }
}
console.log("\nStriking distance (positions 5–20), work these next:");
for (const r of pageQuery.filter((x) => x.position >= 5 && x.position <= 20).sort((a, b) => b.impressions - a.impressions).slice(0, 20)) {
  console.log(`  ${String(r.impressions).padStart(3)} impr  pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}  ->  ${path(r.keys[1])}`);
}
console.log(`\nAppended to ${CSV}`);
