import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allSitemapEntries } from "@/lib/sitemap-entries";

/**
 * Sitemap split by page type (Site Growth Playbook, STEP 5):
 *   /sitemap.xml            sitemap index
 *   /sitemap-core.xml       home, services, hubs, comparisons, proof, company
 *   /sitemap-industries.xml /for/[industry] and /[service]-for-[industry]
 *   /sitemap-locations.xml  location pages (none yet; listed only when they exist)
 *   /sitemap-content.xml    blog, glossary, free tools and benchmarks
 */
export type SitemapType = "core" | "industries" | "locations" | "content";
export const SITEMAP_TYPES: SitemapType[] = ["core", "industries", "locations", "content"];

export function typeOf(path: string): SitemapType {
  const first = path.split("/")[1] ?? "";
  if (first === "locations") return "locations";
  if (first === "for" || first.includes("-for-")) return "industries";
  if (["blog", "glossary", "tools", "benchmarks"].includes(first)) return "content";
  return "core";
}

const pathOf = (url: string) => url.replace(site.url, "") || "/";

export function entriesFor(type: SitemapType) {
  return allSitemapEntries().filter((e) => typeOf(pathOf(e.url)) === type);
}

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const day = (d: MetadataRoute.Sitemap[number]["lastModified"]) =>
  d ? new Date(d).toISOString().slice(0, 10) : undefined;

const xmlResponse = (body: string) =>
  new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });

export function urlsetResponse(type: SitemapType) {
  const urls = entriesFor(type)
    .map((e) => {
      const lm = day(e.lastModified);
      const imgs = (e.images ?? [])
        .map((i) => `<image:image><image:loc>${esc(i)}</image:loc></image:image>`)
        .join("");
      return `<url><loc>${esc(e.url)}</loc>${lm ? `<lastmod>${lm}</lastmod>` : ""}${imgs}</url>`;
    })
    .join("\n");
  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
  );
}

export function indexResponse() {
  const items = SITEMAP_TYPES.map((type) => ({ type, entries: entriesFor(type) }))
    .filter((s) => s.entries.length > 0)
    .map(({ type, entries }) => {
      const newest = entries.map((e) => day(e.lastModified)).filter(Boolean).sort().pop();
      return `<sitemap><loc>${site.url}/sitemap-${type}.xml</loc>${newest ? `<lastmod>${newest}</lastmod>` : ""}</sitemap>`;
    })
    .join("\n");
  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`,
  );
}
