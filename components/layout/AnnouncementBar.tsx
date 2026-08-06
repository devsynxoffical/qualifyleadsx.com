"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/site";

const STORAGE_KEY = "qlx-announcement-dismissed";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(STORAGE_KEY)) setDismissed(true);
    } catch {
      /* noop */
    }
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setDismissed(true);
  };

  useEffect(() => {
    if (!mounted) return;
    const el = document.getElementById("announcement-bar");
    if (!el) return;
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      el,
      { yPercent: -110 },
      { yPercent: 0, duration: 0.9, ease: "expo.out", delay: 0.4 }
    );
  }, [mounted]);

  if (!mounted) return <div className="h-10" aria-hidden />;
  if (dismissed) return null;

  return (
    <div
      id="announcement-bar"
      className="sticky top-0 z-[70] h-10"
      role="region"
      aria-label="Announcement"
    >
      <a
        href={site.bookCallUrl}
        className="group flex h-full w-full items-center justify-center gap-2.5 bg-lime px-10 text-[10px] font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-lime-soft sm:text-[12px]"
        data-cursor="book"
      >
        <span className="hidden shrink-0 sm:inline">
          ⚠️ This is only for agency owners, coaches, high-ticket service providers &amp; B2B
          founders already generating $10,000+/month.
        </span>
        <span className="shrink-0 sm:hidden">Only for businesses generating $10K+/month.</span>
        <span className="hidden whitespace-nowrap border-l border-ink/25 pl-2.5 text-ink/70 lg:inline">
          If you&apos;re below $10,000/month, this system isn&apos;t the right fit.
        </span>
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/10 hover:text-ink"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
