#!/usr/bin/env node
/**
 * Internal link graph + on-page audit over the prerendered build.
 *
 * Checks every HTML page in .next/server/app for:
 *   - broken internal links (href to a route that is not in the build)
 *   - orphan pages (indexable pages with zero inbound internal links)
 *   - low-inbound pages (fewer than MIN_INBOUND inbound links from other pages)
 *   - heading hygiene (exactly one <h1>, no skipped levels h2 -> h4)
 *   - images without alt attributes
 *   - missing or duplicate <title>, missing meta description, missing canonical
 *   - title / description length outside Google's usual display limits
 *
 * Exit code 1 on broken links, orphans, missing h1 or missing alt.
 * Usage: npm run build && npm run seo:links [--verbose]
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";
const SITE = "https://www.qualifiedleadsx.com";
const MIN_INBOUND = 3;
const NOINDEX = new Set(["/privacy", "/terms", "/disclaimer", "/_not-found"]);

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (e.endsWith(".html")) yield p;
  }
}

const pages = new Map(); // route -> html
for (const f of walk(ROOT)) {
  let route = "/" + relative(ROOT, f).replace(/\.html$/, "");
  if (route === "/index") route = "/";
  pages.set(route, readFileSync(f, "utf8"));
}
const routes = new Set(pages.keys());

const norm = (href) => {
  let h = href.trim();
  if (h.startsWith(SITE)) h = h.slice(SITE.length) || "/";
  if (!h.startsWith("/")) return null; // external / mailto / tel / anchors on same page
  h = h.split("#")[0].split("?")[0];
  if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
  return h || "/";
};

const isAsset = (h) =>
  /\.(png|jpe?g|webp|avif|gif|svg|mp4|pdf|xml|txt|ico)$/i.test(h) ||
  h.startsWith("/_next/") ||
  h === "/feed.xml" ||
  h === "/sitemap.xml" ||
  h === "/robots.txt" ||
  h === "/opengraph-image";

const inbound = new Map([...routes].map((r) => [r, new Set()]));
const broken = [];
const onPage = [];

for (const [route, html] of pages) {
  // strip JSON-LD so schema URLs don't count as links
  const body = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
  const hrefs = [...body.matchAll(/<a\b[^>]*?\bhref="([^"]+)"/g)].map((m) => m[1]);
  for (const raw of hrefs) {
    const h = norm(raw);
    if (!h || isAsset(h)) continue;
    if (!routes.has(h)) {
      broken.push(`${route} -> ${raw}`);
      continue;
    }
    if (h !== route) inbound.get(h).add(route);
  }

  if (NOINDEX.has(route)) continue;

  const h1s = (body.match(/<h1\b/g) || []).length;
  if (h1s !== 1) onPage.push(`H1     ${route}: ${h1s} <h1> elements (expected 1)`);

  const levels = [...body.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      onPage.push(`HSKIP  ${route}: heading jumps h${levels[i - 1]} -> h${levels[i]}`);
      break;
    }
  }

  const imgsNoAlt = [...body.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt=/.test(m[0]));
  if (imgsNoAlt.length) onPage.push(`ALT    ${route}: ${imgsNoAlt.length} <img> without alt`);

  const titles = body.match(/<title>([^<]*)<\/title>/g) || [];
  if (titles.length !== 1) onPage.push(`TITLE  ${route}: ${titles.length} <title> tags`);
  const title = titles[0]?.replace(/<\/?title>/g, "") ?? "";
  if (title.length > 65) onPage.push(`TLEN   ${route}: title ${title.length} chars (>65)`);

  const desc = body.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) onPage.push(`DESC   ${route}: missing meta description`);
  else if (desc.length > 165) onPage.push(`DLEN   ${route}: description ${desc.length} chars (>165)`);
  else if (desc.length < 70) onPage.push(`DSHORT ${route}: description ${desc.length} chars (<70)`);

  if (!/<link rel="canonical"/.test(body)) onPage.push(`CANON  ${route}: missing canonical`);
}

const indexable = [...routes].filter((r) => !NOINDEX.has(r));
const orphans = indexable.filter((r) => r !== "/" && inbound.get(r).size === 0);
const low = indexable
  .filter((r) => r !== "/" && inbound.get(r).size > 0 && inbound.get(r).size < MIN_INBOUND)
  .map((r) => `${r} (${inbound.get(r).size})`);

const verbose = process.argv.includes("--verbose");
if (broken.length) console.log("BROKEN internal links:\n  " + [...new Set(broken)].join("\n  "));
if (orphans.length) console.log("ORPHAN pages (no inbound links):\n  " + orphans.join("\n  "));
if (low.length) console.log(`LOW inbound (<${MIN_INBOUND}):\n  ` + low.join("\n  "));
if (onPage.length) console.log("ON-PAGE:\n  " + onPage.join("\n  "));
if (verbose) {
  console.log("\nInbound link counts:");
  for (const r of [...indexable].sort((a, b) => inbound.get(b).size - inbound.get(a).size))
    console.log(`  ${String(inbound.get(r).size).padStart(4)}  ${r}`);
}

console.log("\nLink audit summary");
console.log(`  pages in build:        ${routes.size} (${indexable.length} indexable)`);
console.log(`  broken internal links: ${new Set(broken).size}`);
console.log(`  orphan pages:          ${orphans.length}`);
console.log(`  low-inbound pages:     ${low.length}`);
console.log(`  on-page issues:        ${onPage.length}`);

const hard = broken.length || orphans.length || onPage.some((l) => /^(H1|ALT|TITLE|DESC|CANON)/.test(l));
if (hard) {
  console.error("\nFAIL: fix broken links, orphans and hard on-page issues above.");
  process.exit(1);
}
console.log("\nPASS: no broken links, no orphans, headings/alt/title/description/canonical OK on every indexable page.");
