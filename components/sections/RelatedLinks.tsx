"use client";

import { usePathname } from "next/navigation";
import { relatedGroupsFor } from "@/lib/related-links";
import { LinkGroups } from "@/components/sections/LinkGroups";

/**
 * Related-links block shown above the footer on every page (Site Growth
 * Playbook, STEP 4). Links are chosen from the page type in lib/related-links.ts.
 * Rendered during SSR (usePathname works on the server), so the links are in
 * the HTML that crawlers receive.
 */
export function RelatedLinks() {
  const pathname = usePathname() || "/";
  const groups = relatedGroupsFor(pathname);
  if (!groups || groups.length === 0) return null;
  return <LinkGroups id="related-pages" eyebrow="Keep exploring" title="Related pages" groups={groups} />;
}
