"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CursorState = "default" | "hover" | "view" | "play" | "book" | "drag" | "text";

const CURSOR_LABELS: Partial<Record<CursorState, string>> = {
  view: "View",
  play: "Play",
  book: "Book",
  drag: "Drag",
};

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches || prefersReducedMotion()) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");
    return () => {
      document.body.classList.remove("has-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const xTo = gsap.quickTo(dotRef.current, "x", { duration: 0.18, ease: "power3.out" });
    const yTo = gsap.quickTo(dotRef.current, "y", { duration: 0.18, ease: "power3.out" });
    const rxTo = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3.out" });
    const ryTo = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      rxTo(e.clientX);
      ryTo(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-cursor='play']")) return setState("play");
      if (t.closest("[data-cursor='view']")) return setState("view");
      if (t.closest("[data-cursor='book']")) return setState("book");
      if (t.closest("[data-cursor='drag']")) return setState("drag");
      if (t.closest("[data-cursor='text']")) return setState("text");
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        return setState("hover");
      }
      setState("default");
    };

    const downHandler = () => {
      gsap.to(ringRef.current, { scale: 0.8, duration: 0.25 });
    };
    const upHandler = () => {
      gsap.to(ringRef.current, { scale: 1, duration: 0.35, ease: "back.out(2)" });
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", downHandler);
    window.addEventListener("mouseup", upHandler);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", downHandler);
      window.removeEventListener("mouseup", upHandler);
    };
  }, [enabled]);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const isLabel = state === "view" || state === "play" || state === "book" || state === "drag";
    const scale = isLabel ? 3.4 : state === "hover" ? 1.8 : state === "text" ? 0.6 : 1;

    gsap.to(ring, { scale, duration: 0.4, ease: "expo.out" });
    gsap.to(dotRef.current, { opacity: isLabel || state === "text" ? 0 : 1, duration: 0.2 });
    gsap.fromTo(
      labelRef.current,
      { opacity: 0, scale: 0.6, y: 6 },
      {
        opacity: isLabel ? 1 : 0,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "expo.out",
        overwrite: "auto",
      }
    );
  }, [state]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className={cn(
          "absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center",
          "rounded-full border border-lime/50 bg-lime/5 backdrop-blur-[2px]",
          state === "hover" && "bg-lime/10"
        )}
      >
        <span
          ref={labelRef}
          className="font-mono text-[10px] font-semibold uppercase tracking-widest text-lime opacity-0"
        >
          {state ? CURSOR_LABELS[state] : ""}
        </span>
      </div>
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime"
      />
    </div>
  );
}
