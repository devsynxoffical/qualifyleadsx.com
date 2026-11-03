#!/usr/bin/env node
/**
 * Structured-data validator for the built site.
 *
 * Parses every prerendered HTML page in .next/server/app, extracts JSON-LD,
 * and checks each node against Google's documented REQUIRED and RECOMMENDED
 * properties for the rich result types this site uses. Missing required
 * properties fail the run (exit 1); missing recommended ones are reported.
 *
 * Usage:  npm run build && npm run seo:validate
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";

// Google Search Central rich-result requirements (subset relevant to this site).
const RULES = {
  Organization: { required: ["name", "url"], recommended: ["logo", "sameAs", "description", "address", "contactPoint"] },
  WebSite: { required: ["name", "url"], recommended: ["publisher"] },
  WebPage: { required: ["name", "url"], recommended: ["description", "isPartOf", "primaryImageOfPage", "breadcrumb", "dateModified"] },
  CollectionPage: { required: ["name", "url"], recommended: ["description", "mainEntity", "breadcrumb"] },
  ProfilePage: { required: ["mainEntity"], recommended: ["dateModified", "name"] },
  Person: { required: ["name"], recommended: ["url", "jobTitle", "sameAs", "worksFor", "description"] },
  Article: { required: ["headline", "image", "datePublished", "author"], recommended: ["dateModified", "description", "publisher", "mainEntityOfPage"] },
  BlogPosting: { required: ["headline", "image", "datePublished", "author"], recommended: ["dateModified", "description", "publisher", "mainEntityOfPage", "wordCount", "articleSection"] },
  BreadcrumbList: { required: ["itemListElement"], recommended: [] },
  FAQPage: { required: ["mainEntity"], recommended: [] },
  VideoObject: { required: ["name", "thumbnailUrl", "uploadDate"], recommended: ["description", "duration", "contentUrl", "embedUrl", "publisher"] },
  Service: { required: ["name", "provider"], recommended: ["description", "serviceType", "areaServed", "offers", "url", "image", "audience"] },
  Offer: { required: ["priceCurrency"], recommended: ["availability", "url", "name"] },
  OfferCatalog: { required: ["itemListElement"], recommended: ["name"] },
  ItemList: { required: ["itemListElement"], recommended: ["name"] },
  ListItem: { required: ["position"], recommended: [] },
  Blog: { required: ["name", "url"], recommended: ["publisher", "blogPost"] },
  ImageObject: { required: ["url"], recommended: ["width", "height"] },
  Question: { required: ["name", "acceptedAnswer"], recommended: [] },
  Answer: { required: ["text"], recommended: [] },
  SpeakableSpecification: { required: ["cssSelector"], recommended: [] },
  ReserveAction: { required: ["target"], recommended: ["result"] },
  SiteNavigationElement: { required: ["name", "url"], recommended: ["position"] },
};

function* walkHtml(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) yield* walkHtml(p);
    else if (entry.endsWith(".html") && !entry.startsWith("_")) yield p;
  }
}

function extractJsonLd(html) {
  const out = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try {
      out.push(JSON.parse(m[1]));
    } catch (e) {
      out.push({ __parseError: e.message });
    }
  }
  return out;
}

/** Walk nested nodes; only validate objects that declare a @type and aren't bare references. */
function* nodes(obj, path = "$") {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) yield* nodes(obj[i], `${path}[${i}]`);
    return;
  }
  if (!obj || typeof obj !== "object") return;
  const keys = Object.keys(obj);
  const isRef = keys.length === 1 && keys[0] === "@id";
  if (obj["@type"] && !isRef) yield [obj, path];
  for (const k of keys) {
    if (k.startsWith("@")) continue;
    yield* nodes(obj[k], `${path}.${k}`);
  }
}

const types = (t) => (Array.isArray(t) ? t : [t]);

let requiredMissing = 0;
let recommendedMissing = 0;
let parseErrors = 0;
let pages = 0;
let nodeCount = 0;
const typeTotals = {};
const problems = [];

for (const file of walkHtml(ROOT)) {
  const page = "/" + relative(ROOT, file).replace(/\.html$/, "").replace(/^index$/, "");
  const html = readFileSync(file, "utf8");
  const blocks = extractJsonLd(html);
  if (!blocks.length) continue;
  pages += 1;

  for (const block of blocks) {
    if (block.__parseError) {
      parseErrors += 1;
      problems.push(`PARSE  ${page}: ${block.__parseError}`);
      continue;
    }
    for (const [node, path] of nodes(block)) {
      nodeCount += 1;
      for (const t of types(node["@type"])) {
        typeTotals[t] = (typeTotals[t] ?? 0) + 1;
        const rule = RULES[t];
        if (!rule) continue;
        for (const prop of rule.required) {
          if (node[prop] === undefined || node[prop] === null || node[prop] === "") {
            requiredMissing += 1;
            problems.push(`REQ    ${page}: ${t} at ${path} is missing required "${prop}"`);
          }
        }
        for (const prop of rule.recommended) {
          if (node[prop] === undefined) {
            recommendedMissing += 1;
            problems.push(`REC    ${page}: ${t} at ${path} is missing recommended "${prop}"`);
          }
        }
      }
      // Local image/video references must exist in /public
      for (const key of ["url", "contentUrl", "thumbnailUrl", "logo", "image"]) {
        const v = node[key];
        const vals = Array.isArray(v) ? v : [v];
        for (const val of vals) {
          if (typeof val !== "string") continue;
          const m = val.match(/^https:\/\/www\.qualifiedleadsx\.com(\/[^?#]+\.(?:png|jpe?g|webp|avif|gif|mp4|svg))$/i);
          if (m) {
            try {
              statSync(join("public", m[1]));
            } catch {
              requiredMissing += 1;
              problems.push(`FILE   ${page}: ${t} references missing file ${m[1]}`);
            }
          }
        }
      }
    }
  }
}

const verbose = process.argv.includes("--verbose");
const shown = verbose ? problems : problems.filter((p) => !p.startsWith("REC"));
for (const p of shown) console.log(p);

console.log("\nStructured data summary");
console.log(`  pages scanned:        ${pages}`);
console.log(`  typed nodes checked:  ${nodeCount}`);
console.log(`  node types:           ${Object.entries(typeTotals).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}×${v}`).join(", ")}`);
console.log(`  JSON parse errors:    ${parseErrors}`);
console.log(`  required missing:     ${requiredMissing}`);
console.log(`  recommended missing:  ${recommendedMissing}${verbose ? "" : " (run with --verbose to list)"}`);

if (parseErrors || requiredMissing) {
  console.error("\nFAIL: fix the required-property and file problems above.");
  process.exit(1);
}
console.log("\nPASS: every node has its required properties and every referenced local file exists.");
