"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { nav, navCta, site } from "@/lib/site";
import { scrollToId } from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/utils";

const mastermindSublinks = [
  {
    title: "Mastermind Hub",
    desc: "8-Figure private collective & membership",
    href: "/mastermind",
    isExternal: false,
  },
  {
    title: "Audience Segmentation",
    desc: "Higher-quality calls at lower CPL",
    href: "/mastermind/audience-segmentation",
    isExternal: false,
  },
  {
    title: "Hidden Facebook Interest",
    desc: "The framework behind 300–500 calls",
    href: "/mastermind/hidden-facebook-interest",
    isExternal: false,
  },
];

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
  const [mastermindDropdown, setMastermindDropdown] = useState(false);
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
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      scrollToId(href);
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
              if (item.label === "Mastermind") {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setMastermindDropdown(true)}
                    onMouseLeave={() => setMastermindDropdown(false)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => go(e, item.href)}
                      className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-mist transition-colors hover:text-fog"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-lime" />
                    </a>

                    {/* Mastermind Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 transition-all duration-300 z-50",
                        mastermindDropdown
                          ? "pointer-events-auto opacity-100 translate-y-0"
                          : "pointer-events-none opacity-0 translate-y-2"
                      )}
                    >
                      {/* Invisible hover bridge to prevent cursor gap */}
                      <div className="relative rounded-2xl border border-lime/20 bg-[#050e08]/95 p-3 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] before:absolute before:inset-x-0 before:-top-3 before:h-3">
                      <div className="space-y-1">
                        {mastermindSublinks.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            target={sub.isExternal ? "_blank" : undefined}
                            rel={sub.isExternal ? "noopener noreferrer" : undefined}
                            className="group/sub flex flex-col rounded-xl p-3 text-left transition-colors hover:bg-lime/10"
                          >
                            <div className="flex items-center justify-between text-xs font-bold text-white group-hover/sub:text-lime">
                              <span>{sub.title}</span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-lime opacity-70 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5" />
                            </div>
                            <span className="mt-1 text-[11px] text-mist/70 leading-snug">{sub.desc}</span>
                          </a>
                        ))}
                      </div>
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
          <div className="flex items-center gap-3">
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--color-lime)] sm:inline-flex"
              data-cursor="book"
            >
              {navCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-fog lg:hidden"
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
        <div className="mt-24 flex flex-1 flex-col justify-between px-6 pb-10 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={cn(
                    "block border-b border-line py-3 text-3xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                >
                  {item.label}
                </a>

                {/* Mobile Mastermind Sublinks */}
                {item.label === "Mastermind" && (
                  <div className="pl-4 py-2 space-y-2 border-b border-line">
                    {mastermindSublinks.map((sub) => (
                      <a
                        key={sub.title}
                        href={sub.href}
                        target={sub.isExternal ? "_blank" : undefined}
                        rel={sub.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between text-sm text-mist hover:text-lime py-1"
                      >
                        <span>{sub.title}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-lime" />
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
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
