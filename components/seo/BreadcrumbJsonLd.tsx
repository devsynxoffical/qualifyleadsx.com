import { site } from "@/lib/site";

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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
