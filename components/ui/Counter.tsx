"use client";

import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  separator?: boolean;
};

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
  separator = false,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const objRef = useRef({ val: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (v: number) => {
      const fixed = v.toFixed(decimals);
      const [int, dec] = fixed.split(".");
      const intFormatted = separator ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : int;
      return dec ? `${intFormatted}.${dec}` : intFormatted;
    };

    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return;
    }

    const tween = gsap.to(objRef.current, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = format(objRef.current.val);
      },
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, duration, decimals, separator]);

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
