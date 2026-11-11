"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { relatedGroupsFor } from "@/lib/related-links";

/**
 * Page-specific related links (Site Growth Playbook, STEP 4), shown inside the
 * footer as a "Related to this page" row in the same style as the footer
 * columns. Links are chosen from the page type in lib/related-links.ts.
 * Rendered during SSR (usePathname works on the server), so the links are in
 * the HTML that crawlers receive.
 */
export function RelatedLinks() {
  const pathname = usePathname() || "/";
  const groups = (relatedGroupsFor(pathname) ?? []).filter((g) => g.links.length > 0);
  if (groups.length === 0) return null;
  return (
    <nav id="related-pages" aria-labelledby="related-pages-title" className="border-t border-line py-10">
      <h2 id="related-pages-title" className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
        Related to this page
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 sm:mt-4 sm:block sm:space-y-2.5">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mist transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
