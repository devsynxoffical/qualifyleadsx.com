#!/usr/bin/env node
/**
 * Builds public/llms-full.txt: brand facts plus clean Markdown of the most useful
 * pages, taken from the prerendered HTML in .next/server/app after `next build`.
 * Runs automatically as `postbuild`; also commit the output so the file exists even
 * if a host skips lifecycle scripts.
 *
 *   npm run build            # runs this afterwards
 *   node scripts/build-llms-full.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SITE = "https://www.qualifiedleadsx.com";
const ROOT = ".next/server/app";

// 30-60 pages that answer buyer questions best (no thin programmatic pages).
const PAGES = [
  "/", "/about", "/about/gaurav-kapoor", "/services",
  "/lead-generation-agency", "/high-ticket-lead-generation", "/b2b-lead-generation", "/meta-ads-agency",
  "/appointment-setting", "/speed-to-lead", "/vsl-funnels", "/whatsapp-lead-nurture", "/crm-automation",
  "/outsourced-sales-closers",
  "/for/agencies", "/for/coaches", "/for/consultants", "/for/b2b-services", "/for/saas", "/for/med-spas",
  "/for/law-firms", "/for/solar-companies", "/for/real-estate-investors", "/for/home-improvement",
  "/benchmarks", "/benchmarks/cost-per-booked-call", "/benchmarks/show-rate", "/benchmarks/cost-per-lead-by-industry",
  "/benchmarks/meta-ads-cpm", "/benchmarks/close-rate",
  "/tools/cost-per-booked-call-calculator", "/tools/meta-ads-budget-calculator", "/tools/cac-calculator",
  "/compare/meta-ads-vs-google-ads-high-ticket", "/compare/done-for-you-vs-done-with-you-lead-generation",
  "/compare/appointment-setter-vs-va", "/compare/qualifiedleadsx-alternatives",
  "/case-studies/b2b-agency-scaling-846k", "/case-studies/med-spa-marketing-agency-639k",
  "/case-studies/nyc-med-spa-rf-microneedling-74k", "/case-studies/florida-hvac-65k-cash-collected",
  "/case-studies/mva-personal-injury-leads-8810", "/case-studies/b2b-technology-agency-71k",
  "/blog/b2b-client-acquisition-cost-cac-benchmarks-2026", "/blog/how-much-does-meta-ads-cost",
  "/blog/how-much-does-a-lead-generation-agency-cost", "/blog/speed-to-lead-statistics-response-time",
  "/blog/buy-qualified-leads-vs-generating-your-own", "/blog/facebook-ads-agency-vs-in-house-media-buyer",
  "/blog/high-ticket-lead-generation-strategies", "/blog/how-to-hire-an-appointment-setter",
  "/blog/facebook-ads-for-hvac-companies", "/blog/cost-per-acquisition-vs-cost-per-lead",
];

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");

function toMarkdown(html) {
  let main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html;
  // Start at the H1: some layouts render the site header inside <main>.
  const h1 = main.search(/<h1\b/i);
  if (h1 > 0) main = main.slice(h1);
  main = main
    .replace(/<header\b[\s\S]*?<\/header>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<svg[\s\S]*?<\/svg>|<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, " ")
    .replace(/<(button|form|iframe|video|canvas)\b[\s\S]*?<\/\1>/gi, " ");
  const md = main
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${t}\n\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${t}\n\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${t}\n\n`)
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/(p|div|section|article|tr|ul|ol|table|blockquote)>/gi, "\n")
    .replace(/<(td|th)[^>]*>/gi, " | ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  return decode(md)
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .filter((l, i, arr) => l && !(l === arr[i - 1]))
    .join("\n")
    .replace(/\n(#+ )/g, "\n\n$1")
    .replace(/\n{3,}/g, "\n\n");
}

// Read the facts from lib/brand-facts.ts (plain Node cannot import TypeScript).
const factsSrc = readFileSync("lib/brand-facts.ts", "utf8");
const pick = (k) => factsSrc.match(new RegExp(`${k}:\\s*\\n?\\s*"([^"]+)"`))?.[1];
const bf = { summary: pick("summary"), icp: pick("icp"), pricing: pick("pricing"), guarantee: pick("guarantee") };

const header = `# QualifiedLeadsX: full content for AI assistants

> ${bf.summary}

- Legal entity: Ecom Expertz LLC, 1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801, USA (registered address)
- Founded: 2022 by Gaurav Kapoor (Founder & Head of Acquisition): ${SITE}/about/gaurav-kapoor
- Who it is for: ${bf.icp}
- Pricing: ${bf.pricing}
- Guarantee: ${bf.guarantee}
- Book a call: ${SITE}/book-your-call
- Contact: hello@qualifiedleadsx.com, WhatsApp +91 96256 95456
- Short index: ${SITE}/llms.txt
- Generated: ${new Date().toISOString().slice(0, 10)} from the live site's server-rendered pages.

`;

let out = header;
let included = 0;
for (const p of PAGES) {
  const file = p === "/" ? `${ROOT}/index.html` : `${ROOT}${p}.html`;
  if (!existsSync(file)) {
    console.warn("missing prerendered page:", p);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? p);
  out += `\n---\n\nURL: ${SITE}${p === "/" ? "" : p}\nTitle: ${title}\n\n${toMarkdown(html)}\n`;
  included++;
}
writeFileSync("public/llms-full.txt", out);
console.log(`wrote public/llms-full.txt: ${included} pages, ${(out.length / 1024).toFixed(0)} KB`);
