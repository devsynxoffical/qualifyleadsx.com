import { site } from "@/lib/site";
import routeLastmod from "@/lib/route-lastmod.json";

const lastmod = routeLastmod as Record<string, string>;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

const abs = (url: string) => (url.startsWith("http") ? url : `${site.url}${url}`);

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  // The @id matches the `breadcrumb` reference in webPageNode (`${pageUrl}#breadcrumb`),
  // so Google merges them instead of reporting an empty, second BreadcrumbList.
  const last = items[items.length - 1];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${last ? abs(last.url) : site.url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: abs(item.url),
      })),
    ],
  };

  // 26 Nov 2026 (GEO): every page states when it was last changed. The date is the page's real
  // last git change (lib/route-lastmod.json). Same @id as webPageNode, so Google merges the two.
  const path = last ? abs(last.url).replace(site.url, "") || "/" : "/";
  const modified = lastmod[path] ?? (path.startsWith("/case-studies/") ? lastmod["/case-studies/*"] : undefined);
  const page = modified
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${site.url}${path === "/" ? "" : path}#webpage`,
        url: `${site.url}${path === "/" ? "" : path}`,
        name: last?.name ?? site.name,
        dateModified: modified.slice(0, 10),
        breadcrumb: { "@id": schema["@id"] },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {page ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
      ) : null}
    </>
  );
}
