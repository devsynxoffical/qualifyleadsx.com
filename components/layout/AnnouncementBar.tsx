"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
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
      className="relative z-[70] h-10"
      role="region"
      aria-label="Announcement"
    >
      <a
        href={site.bookCallUrl}
        className="group flex h-full w-full items-center justify-center gap-2.5 bg-lime px-4 text-[12px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-lime-soft sm:text-[13px]"
        data-cursor="book"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ink/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
        </span>
        <span className="hidden sm:inline">Now onboarding new clients —</span>
        <span className="inline">Spots are extremely limited</span>
        <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
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
