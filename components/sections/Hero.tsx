"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  Play,
  Pause,
  BadgeCheck,
  CalendarCheck2,
  TrendingUp,
  ArrowDown,
  Star,
} from "lucide-react";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { scrollToId } from "@/components/providers/SmoothScroll";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ---------------------------------- Headline ---------------------------------- */

type Word =
  | { t: string; kind: "plain" }
  | { t: string; kind: "grad" }
  | { t: string; kind: "accent" };

const WORDS: Word[] = [
  { t: "High-ticket", kind: "plain" },
  { t: "clients.", kind: "plain" },
  { t: "Booked", kind: "grad" },
  { t: "on", kind: "grad" },
  { t: "demand.", kind: "grad" },
  { t: "Guaranteed.", kind: "accent" },
];

function HeroHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll(".hw, .hc"), { y: 0, rotate: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el.querySelectorAll(".hw, .hc"), { yPercent: 120, rotate: 8, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.55, defaults: { ease: EASE.outExpo } });
      const plain = el.querySelectorAll(".hc");
      const blocks = el.querySelectorAll(".hw:not(.hc)");

      tl.to(plain, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.15, stagger: 0.035 })
        .to(
          blocks,
          { yPercent: 0, rotate: 0, opacity: 1, duration: 1.1, stagger: 0.1 },
          "-=1.0"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={ref}
      className="text-balance text-[clamp(2.6rem,7.2vw,6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-fog"
    >
      {WORDS.map((w, wi) => {
        const chars = w.kind === "plain" ? w.t.split("") : null;
        return (
          <span key={wi} className="inline-block overflow-hidden pb-[0.12em] pr-[0.22em] align-top">
            {chars ? (
              <span className="inline-block whitespace-nowrap">
                {chars.map((c, ci) => (
                  <span key={ci} className="hc inline-block will-change-transform">
                    {c}
                  </span>
                ))}
              </span>
            ) : (
              <span
                className={cn(
                  "hw inline-block will-change-transform",
                  w.kind === "grad" && "text-gradient-lime",
                  w.kind === "accent" && "font-semibold not-italic text-lime-soft"
                )}
              >
                {w.t}
              </span>
            )}
          </span>
        );
      })}
    </h1>
  );
}

/* ---------------------------------- Growth chart ---------------------------------- */

function GrowthChart() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    if (prefersReducedMotion()) {
      gsap.set(path, { strokeDashoffset: 0 });
      return;
    }
    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2.4,
      ease: "power2.inOut",
      delay: 1.6,
      scrollTrigger: { trigger: path, start: "top 85%" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <svg viewBox="0 0 240 90" className="h-20 w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9f26b" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c9f26b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 78 C 18 74, 26 60, 40 62 C 54 64, 60 74, 74 70 C 90 66, 96 44, 112 46 C 128 48, 132 62, 146 52 C 160 42, 168 26, 184 28 C 200 30, 208 44, 222 30 C 230 22, 236 18, 240 14"
        stroke="#c9f26b"
        strokeWidth="2.5"
        strokeLinecap="round"
        ref={pathRef}
      />
      <path
        d="M0 80 C 18 76, 26 62, 40 64 C 54 66, 60 76, 74 72 C 90 68, 96 46, 112 48 C 128 50, 132 64, 146 54 C 160 44, 168 28, 184 30 C 200 32, 208 46, 222 32 C 230 24, 236 20, 240 16 L 240 90 L 0 90 Z"
        fill="url(#hero-fill)"
      />
      <circle cx="240" cy="14" r="3.5" fill="#c9f26b" />
    </svg>
  );
}

/* ---------------------------------- VSL player ---------------------------------- */

function VSLPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const waveformRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    if (prefersReducedMotion()) return;
    setPlaying((p) => !p);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setPlaying(false);
          return 100;
        }
        return p + 0.5;
      });
    }, 120);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    const bars = waveformRef.current?.children;
    if (!bars) return;
    if (prefersReducedMotion()) return;
    if (playing) {
      gsap.to(bars, {
        scaleY: () => 0.4 + Math.random() * 0.9,
        duration: 0.5,
        ease: "sine.inOut",
        stagger: { each: 0.06, yoyo: true, repeat: -1 },
      });
    } else {
      gsap.to(bars, { scaleY: 0.35, duration: 0.4 });
    }
  }, [playing]);

  return (
    <div
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] border border-line-strong bg-panel shadow-soft sm:aspect-[4/4.4]"
      data-cursor="play"
    >
      {/* inner gradient + scanlines */}
      <MeshGradient colors={["#0a0c0f", "#16200f", "#0e1f18", "#151020"]} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 3px, rgba(255,255,255,0.4) 3px 4px)" }} />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-lime backdrop-blur">
          <span className={cn("h-1.5 w-1.5 rounded-full", playing ? "bg-rose" : "bg-lime")} />
          {playing ? "Now showing" : "VSL"}
        </span>
        <span className="rounded-full bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mist backdrop-blur">
          {Math.floor(progress)}% qualified
        </span>
      </div>

      {/* center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="relative flex h-20 w-20 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-500 group-hover:scale-105"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-lime/50" />
          {playing ? <Pause className="h-7 w-7" fill="currentColor" /> : <Play className="ml-1 h-7 w-7" fill="currentColor" />}
        </button>
        <div>
          <p className="text-sm font-semibold text-fog">Watch how the system works</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-mist">
            2 min · the exact funnel we install
          </p>
        </div>

        {/* waveform */}
        <div ref={waveformRef} className="flex h-8 items-center gap-[3px]" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] origin-center rounded-full bg-lime/70"
              style={{ height: "100%", transform: "scaleY(0.35)" }}
            />
          ))}
        </div>
      </div>

      {/* progress bar */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-ink/60">
        <div className="h-full bg-gradient-to-r from-lime to-mint transition-[width] duration-200" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

/* ---------------------------------- Floating cards ---------------------------------- */

function FloatingCard({
  className,
  depth,
  children,
}: {
  className?: string;
  depth: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      const mx = e.clientX - window.innerWidth / 2;
      const my = e.clientY - window.innerHeight / 2;
      xTo(mx * depth);
      yTo(my * depth);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [depth]);

  return (
    <div ref={ref} className={cn("absolute will-change-transform", className)} style={{ zIndex: 10 }}>
      <div className="animate-float panel-glass rounded-2xl p-3.5 shadow-soft">{children}</div>
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: EASE.outExpo,
          stagger: 0.12,
          delay: 1.5,
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pb-16 pt-36 sm:pt-44 lg:pb-24 lg:pt-52">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <MeshGradient colors={["#0a0c0f", "#18210f", "#0d2117", "#1c1208"]} />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[46rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,242,107,0.16),transparent)] blur-2xl" />
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-[0.35] mask-fade-b" />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left */}
          <div>
            <div className="hero-fade inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-4 py-1.5">
              <BadgeCheck className="h-4 w-4 text-lime" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
                Done-for-you client acquisition
              </span>
            </div>

            <div className="mt-7">
              <HeroHeadline />
            </div>

            <p className="hero-fade mt-7 max-w-xl text-pretty text-[1rem] leading-relaxed text-mist sm:text-lg">
              We install a done-for-you funnel system for high-ticket coaches, consultants &amp;
              service providers - pre-selling prospects so only{" "}
              <span className="text-fog">qualified buyers reach your calendar</span>. No cold
              outreach. No guessing.
            </p>

            <div className="hero-fade mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={site.bookCallUrl} size="xl" icon="up-right" ariaLabel="Book your free strategy call">
                Book Your Free Strategy Call
              </Button>
              <Button href="#results" variant="outline" size="xl" icon="arrow" onClick={() => scrollToId("#results")}>
                See client results
              </Button>
            </div>

            {/* Trust badges */}
            <div className="hero-fade mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["DA", "ED", "CH", "AL"].map((ini, i) => (
                    <span
                      key={ini}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink text-[10px] font-bold text-ink"
                      style={{
                        background: ["#c9f26b", "#9b8bff", "#5ef2c2", "#ffc857"][i],
                      }}
                    >
                      {ini}
                    </span>
                  ))}
                </div>
                <p className="text-xs leading-tight text-dim">
                  <span className="font-semibold text-fog">128+ clients</span>
                  <br />
                  trust the system
                </p>
              </div>
              <div className="hidden h-8 w-px bg-line sm:block" />
              <div className="flex items-center gap-2 text-xs text-dim">
                <Star className="h-4 w-4 fill-amber text-amber" />
                <span>
                  <span className="font-semibold text-fog">4.9/5</span> average client rating
                </span>
              </div>
              <div className="hidden h-8 w-px bg-line sm:block" />
              <div className="flex items-center gap-2 text-xs text-dim">
                <BadgeCheck className="h-4 w-4 text-lime" />
                <span>
                  <span className="font-semibold text-fog">90-day</span> written guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(155,139,255,0.14),transparent)] blur-2xl" />

              <VSLPlayer />

              <FloatingCard className="hidden sm:block -left-4 top-14 w-[11.5rem] sm:-left-10" depth={0.03}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet/20 text-violet">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-dim">ROAS</p>
                    <p className="font-mono text-lg font-bold text-fog">9.4x</p>
                  </div>
                </div>
                <GrowthChart />
              </FloatingCard>

              <FloatingCard className="hidden sm:block -right-3 top-40 w-44 sm:-right-8" depth={0.045}>
                <div className="flex items-start gap-2.5">
                  <CalendarCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                  <div>
                    <p className="text-xs font-semibold text-fog">Appointment confirmed</p>
                    <p className="mt-0.5 text-[11px] text-dim">Daniel · 2:30 PM today</p>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/60">
                    <span className="block h-full w-[88%] rounded-full bg-mint" />
                  </span>
                  <span className="font-mono text-[10px] text-mint">88%</span>
                </div>
              </FloatingCard>

              <FloatingCard className="hidden sm:block -left-2 bottom-10 w-44 sm:-left-8" depth={0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-fog">+$4.5K MRR</p>
                    <p className="text-[11px] text-dim">Edgar · Sales coach</p>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-fade mt-20 hidden justify-center lg:flex">
          <div className="flex flex-col items-center gap-3 text-dim">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="relative flex h-10 w-6 justify-center rounded-full border border-line-strong">
              <span className="mt-1.5 h-2 w-1 animate-bounce rounded-full bg-lime" />
            </span>
            <ArrowDown className="h-3.5 w-3.5 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
