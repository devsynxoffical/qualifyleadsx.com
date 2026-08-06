"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, navCta, site } from "@/lib/site";
import { scrollToId } from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="group flex items-center" aria-label="QualifiedLeadsX home">
      <span className="relative h-8 w-[76px] sm:h-9 sm:w-[86px]">
        <Image
          src="/images/qualified-leadsx.webp"
          alt="QualifiedLeadsX"
          fill
          sizes="(min-width: 640px) 86px, 76px"
          className="object-contain brightness-0 invert"
          priority
        />
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);
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
    e.preventDefault();
    setOpen(false);
    if (href.startsWith("#")) {
      scrollToId(href);
    } else {
      window.location.href = href;
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
            {nav.map((item) => (
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
            ))}
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
        <div className="mt-24 flex flex-1 flex-col justify-between px-6 pb-10">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={cn(
                    "block border-b border-line py-4 text-4xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              "flex flex-col gap-4 transition-all delay-500 duration-700",
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
