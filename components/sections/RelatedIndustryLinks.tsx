"use client";

import { usePathname } from "next/navigation";
import { relatedIndustryLinks } from "@/lib/industry-links";
import { LinkGroups } from "@/components/sections/LinkGroups";

/**
 * On /for/x, /meta-ads-for-x and /appointment-setting-for-x pages: link the
 * other service variants for the same industry and five sibling industries.
 * Renders nothing on other pages. Server-rendered on first load (usePathname
 * works during SSR), so the links are in the HTML crawlers receive.
 */
export function RelatedIndustryLinks() {
  const pathname = usePathname() || "/";
  const data = relatedIndustryLinks(pathname);
  if (!data) return null;
  return (
    <LinkGroups
      id="related-industry-pages"
      eyebrow="Related pages"
      title={`More for ${data.industry}`}
      groups={[
        { title: `Services for ${data.industry}`, links: data.same },
        { title: "Other industries we scale", links: [...data.siblings, { href: "/for", label: "All industries" }] },
      ]}
    />
  );
}
