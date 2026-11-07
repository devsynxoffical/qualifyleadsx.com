#!/usr/bin/env node
/**
 * Writes lib/route-lastmod.json: the date each static route's source last
 * changed in git. The sitemap uses it for honest <lastmod> values instead of
 * stamping every URL with "today" (Google learns to ignore lastmod when it
 * changes without the content changing).
 *
 * Run after content changes and commit the result:
 *   npm run seo:lastmod
 *
 * A route's date is the newest commit touching its page directory (page.tsx,
 * layout.tsx) or a shared data file it renders from.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP = "app";
const git = (...paths) =>
  execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], { encoding: "utf8" }).trim();

// Shared data that page content comes from
const DATA = {
  "/case-studies": ["lib/case-studies-data.ts"],
  "/glossary": ["lib/glossary-data.ts"],
  "/blog": ["lib/blog-data.ts"],
};

function* pageDirs(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (!statSync(p).isDirectory()) continue;
    if (entry.startsWith("[") || entry.startsWith("(") || entry.startsWith("_")) continue;
    try {
      statSync(join(p, "page.tsx"));
      yield p;
    } catch {
      /* no page in this folder */
    }
    yield* pageDirs(p);
  }
}

const out = { "/": git("app/page.tsx", "components/sections") };
for (const dir of pageDirs(APP)) {
  const route = "/" + relative(APP, dir).split(sep).join("/");
  const extra = DATA[route] ?? [];
  const d = git(dir, ...extra);
  if (d) out[route] = d;
}
// Dynamic case study pages share one template and data file
out["/case-studies/*"] = git("app/case-studies/[slug]", "lib/case-studies-data.ts");

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync("lib/route-lastmod.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(`wrote lib/route-lastmod.json (${Object.keys(sorted).length} routes)`);
