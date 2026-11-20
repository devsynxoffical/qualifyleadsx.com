"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { relatedGroupsFor } from "@/lib/related-links";
import {
  servicesMenu,
  industriesMenu,
  toolsLinks,
  benchmarkLinks,
  guideLinks,
  compareLinks,
  mastermindMenu,
  companyLinks,
  caseStudyLinksMenu,
  profileLinks,
  type MenuLink,
} from "@/lib/menu";

type Menu = { key: string; label: string; columns: { title?: string; links: MenuLink[] }[] };

const BASE_MENUS: Menu[] = [
  { key: "services", label: "Services", columns: [{ links: servicesMenu.all }] },
  { key: "industries", label: "Industries", columns: [{ links: industriesMenu.all }] },
  {
    key: "resources",
    label: "Resources",
    columns: [
      { title: "Free tools", links: toolsLinks },
      { title: "Benchmarks", links: benchmarkLinks },
      { title: "Guides", links: guideLinks },
      { title: "Comparisons", links: compareLinks },
    ],
  },
  { key: "case-studies", label: "Case Studies", columns: [{ links: caseStudyLinksMenu }] },
  { key: "mastermind", label: "Mastermind", columns: [{ links: mastermindMenu.all }] },
  { key: "company", label: "Company", columns: [{ links: companyLinks }] },
  { key: "reviews", label: "Reviews", columns: [{ links: profileLinks }] },
];

function MenuItemLink({ l }: { l: MenuLink }) {
  const cls = "block rounded-lg px-2.5 py-1.5 text-[13px] text-mist transition-colors hover:bg-white/[0.05] hover:text-lime";
  if (l.href.startsWith("http"))
    return (
      <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {l.label}
      </a>
    );
  return (
    <Link href={l.href} className={cls}>
      {l.label}
    </Link>
  );
}

/**
 * Footer menus (20 Nov 2026): one row of compact triggers. Desktop opens a panel
 * on hover (or keyboard focus); touch opens it on tap. Every link is always in
 * the HTML, hidden only visually, so crawlers still follow all of them.
 */
export function FooterMenus() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const related = (relatedGroupsFor(pathname) ?? []).filter((g) => g.links.length > 0);
  const menus: Menu[] = related.length
    ? [...BASE_MENUS, { key: "related", label: "Related to this page", columns: related.map((g) => ({ title: g.title, links: g.links })) }]
    : BASE_MENUS;

  useEffect(() => setOpen(null), [pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <ul className="flex flex-col divide-y divide-line lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-1 lg:divide-y-0">
        {menus.map((m) => {
          const isOpen = open === m.key;
          const wide = m.columns.length > 1;
          return (
            <li
              key={m.key}
              className="relative"
              onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setOpen(m.key)}
              onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setOpen(null)}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : m.key)}
                aria-expanded={isOpen}
                className={cn(
                  "flex w-full items-center justify-between gap-1.5 py-4 text-sm font-medium transition-colors lg:w-auto lg:rounded-full lg:px-4 lg:py-2",
                  isOpen ? "text-lime" : "text-mist hover:text-fog"
                )}
              >
                {m.label}
                <ChevronDown className={cn("h-4 w-4 text-lime transition-transform duration-300 lg:h-3.5 lg:w-3.5", isOpen && "rotate-180")} />
              </button>

              {/* Panel: inline accordion on mobile, popover above the trigger on desktop */}
              <div
                className={cn(
                  "lg:absolute lg:bottom-full lg:left-1/2 lg:z-40 lg:-translate-x-1/2 lg:pb-3 lg:transition-all lg:duration-200",
                  wide ? "lg:w-[760px]" : "lg:w-[300px]",
                  isOpen
                    ? "block lg:pointer-events-auto lg:visible lg:translate-y-0 lg:opacity-100"
                    : "hidden lg:pointer-events-none lg:invisible lg:block lg:translate-y-2 lg:opacity-0"
                )}
              >
                <div className="pb-4 lg:rounded-2xl lg:border lg:border-line-strong lg:bg-ink/95 lg:p-3 lg:shadow-[0_-20px_50px_rgba(0,0,0,0.7)] lg:backdrop-blur-2xl">
                  <div className={cn("grid gap-x-4 gap-y-3", wide && "sm:grid-cols-2 lg:grid-cols-4")}>
                    {m.columns.map((c, i) => (
                      <div key={c.title ?? i}>
                        {c.title && <p className="px-2.5 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">{c.title}</p>}
                        <ul>
                          {c.links.map((l) => (
                            <li key={l.href + l.label}>
                              <MenuItemLink l={l} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
