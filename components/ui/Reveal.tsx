"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  as?: "div" | "section" | "span" | "li" | "p" | "h2" | "h3";
};

/*
 * Performance: one shared IntersectionObserver for every Reveal on the page.
 * Creating a GSAP ScrollTrigger per element measured the layout for each of the
 * ~60 blocks on the homepage during hydration (the "Style & Layout" cost in
 * Lighthouse). The observer fires when the block's top crosses 88% of the
 * viewport, the same point the ScrollTrigger used, and plays the same tween.
 */
type Entry = { play: () => void; once: boolean };
const entries = new WeakMap<Element, Entry>();
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (list) => {
      for (const e of list) {
        if (!e.isIntersecting) continue;
        const entry = entries.get(e.target);
        if (!entry) continue;
        entry.play();
        observer?.unobserve(e.target);
        entries.delete(e.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0 }
  );
  return observer;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  scale = 1,
  duration = 1.1,
  stagger = 0,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const targets = el.children.length > 1 ? el.children : el;
    gsap.set(targets, { opacity: 0, y, x, scale });
    let tween: gsap.core.Tween | null = null;
    const play = () => {
      tween = gsap.to(targets, { opacity: 1, y: 0, x: 0, scale: 1, duration, delay, ease: "expo.out", stagger });
    };
    entries.set(el, { play, once });
    const io = getObserver();
    io.observe(el);

    return () => {
      io.unobserve(el);
      entries.delete(el);
      tween?.kill();
    };
  }, [delay, y, x, scale, duration, stagger, once]);

  return (
    <Tag ref={ref as never} className={cn("will-change-transform", className)}>
      {children}
    </Tag>
  );
}
