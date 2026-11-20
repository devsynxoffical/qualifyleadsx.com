"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { nav, navCta, site } from "@/lib/site";
import { scrollToId } from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/utils";
import { servicesMenu, industriesMenu, resourcesMenu, mastermindMenu, type MenuGroup } from "@/lib/menu";

// Dropdown content lives in lib/menu.ts (shared with the footer).
const DROPDOWNS: Record<string, { group: MenuGroup; wide?: boolean }> = {
  Services: { group: servicesMenu },
  Industries: { group: industriesMenu, wide: true },
  Resources: { group: resourcesMenu },
  Mastermind: { group: mastermindMenu },
};

function Logo() {
  return (
    <Link href="/" className="group flex items-center" aria-label="QualifiedLeadsX home">
      <span className="flex items-center rounded-full bg-white px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors duration-300 group-hover:bg-white/90 sm:px-3.5 sm:py-2">
        <Image
          src="/images/qualified-leadsx.webp"
          alt="QualifiedLeadsX"
          width={1000}
          height={444}
          priority
          className="h-4 w-auto sm:h-5"
        />
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
    const [barDismissed, setBarDismissed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>("Services");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      setBarDismissed(!!localStorage.getItem("qlx-announcement-dismissed"));
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      const hash = href.startsWith("/#") ? href.slice(1) : href;
      if (pathname === "/") {
        e.preventDefault();
        setOpen(false);
        scrollToId(hash);
      } else {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 z-[60] transition-all duration-500",
          barDismissed ? "top-0" : "top-10"
        )}
      >
        <nav
          className={cn(
            "container-x flex h-16 items-center justify-between transition-all duration-500",
            scrolled && "border-b border-line bg-ink/70 backdrop-blur-xl"
          )}
          aria-label="Main navigation"
        >
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const dd = DROPDOWNS[item.label];
              if (dd) {
                const isOpen = openDropdown === item.label;
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => go(e, item.href)}
                      onFocus={() => setOpenDropdown(item.label)}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-mist transition-colors hover:text-fog"
                    >
                      {item.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 text-lime transition-transform duration-300", isOpen && "rotate-180")} />
                    </a>
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
                        dd.wide ? "w-[520px]" : "w-[360px]",
                        isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                      )}
                    >
                      <div className="rounded-2xl border border-line-strong bg-ink/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                        <ul className={cn("grid gap-0.5", dd.wide && "grid-cols-2")}>
                          {dd.group.featured.map((sub) => (
                            <li key={sub.href}>
                              <a
                                href={sub.href}
                                onClick={() => setOpenDropdown(null)}
                                className="group/sub flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                              >
                                <span>
                                  <span className="block text-sm font-semibold text-fog group-hover/sub:text-lime">{sub.label}</span>
                                  {sub.desc && <span className="mt-0.5 block text-xs leading-snug text-mist">{sub.desc}</span>}
                                </span>
                                <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime opacity-0 transition-opacity group-hover/sub:opacity-100" />
                              </a>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={dd.group.href}
                          onClick={() => setOpenDropdown(null)}
                          className="mt-1 flex items-center justify-between rounded-xl border-t border-line px-3 py-2.5 text-xs font-semibold text-lime hover:bg-lime/[0.06]"
                        >
                          View all {dd.group.title.toLowerCase()}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className="group relative rounded-full px-4 py-2 text-sm font-medium text-mist transition-colors hover:text-fog"
                  >
                    {item.label}
                    <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-lime px-3.5 py-2 text-xs font-bold text-ink transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--color-lime)] sm:px-5 sm:py-2.5 sm:text-sm sm:font-semibold"
              data-cursor="book"
            >
              <span className="hidden xs:inline sm:inline">{navCta.label}</span>
              <span className="xs:hidden sm:hidden">Book Call</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-fog lg:hidden sm:h-10 sm:w-10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-ink/95 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div data-lenis-prevent className="mt-24 flex flex-1 flex-col justify-between px-6 pb-10 overflow-y-auto overscroll-contain">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => {
              const dd = DROPDOWNS[item.label];
              if (dd) {
                const isOpen = mobileOpen === item.label;
                return (
                  <li key={item.href} className="border-b border-line py-2">
                    <div className="flex items-center justify-between py-1">
                      <a href={item.href} onClick={(e) => go(e, item.href)} className="text-2xl font-bold tracking-tight text-fog hover:text-lime">
                        {item.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileOpen(isOpen ? null : item.label)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime"
                        aria-label={`Toggle ${item.label} sublinks`}
                        aria-expanded={isOpen}
                      >
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="mt-2 space-y-1 border-l-2 border-lime/30 py-1 pl-3">
                        {dd.group.featured.map((sub) => (
                          <li key={sub.href}>
                            <a href={sub.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-medium text-fog hover:bg-white/[0.04] hover:text-lime">
                              {sub.label}
                              <ArrowUpRight className="h-4 w-4 text-lime" />
                            </a>
                          </li>
                        ))}
                        <li>
                          <a href={dd.group.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-semibold text-lime">
                            View all {dd.group.title.toLowerCase()} →
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className={cn(
                      "block border-b border-line py-3 text-2xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                      open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}
                    style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className={cn(
              "flex flex-col gap-4 transition-all delay-500 duration-700 mt-6",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-[1rem] font-bold text-ink"
              data-cursor="book"
            >
              {navCta.label}
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <p className="text-center text-xs text-dim">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
