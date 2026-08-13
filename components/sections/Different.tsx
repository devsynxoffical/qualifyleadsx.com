"use client";

import { useRef } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ── Spotlight card with cursor-tracked radial glow ── */
function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-lime/30 hover:bg-white/[0.06]",
        className
      )}
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(201,242,107,0.10), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}

const accentColors = [
  "from-lime to-emerald-400",
  "from-sky-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-lime to-teal-400",
];

export function Different() {
  const [featured, ...rest] = differentiators;
  const FeaturedIcon = featured.icon;

  return (
    <Section id="different" className="relative overflow-hidden bg-[#040c07]">
      {/* Background aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-lime/[0.06] blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.05] blur-[100px]" />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,242,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,242,107,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="What makes us different"
          title={
            <>
              We don&apos;t just generate leads… we build a{" "}
              <em className="font-semibold not-italic text-lime">
                complete client acquisition ecosystem.
              </em>
            </>
          }
          subtitle="Unlike traditional marketing agencies, we handle every step of your customer journey — from attracting the right prospects, to qualifying them, to nurturing them, to getting them booked onto your calendar. Everything works together inside one proven system."
        />

        {/* ── Featured card (full width) ── */}
        <Reveal y={36} className="mt-12">
          <SpotlightCard className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
              {/* Left: giant icon with ring */}
              <div className="shrink-0 self-start">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-lime/25 bg-lime/[0.08] sm:h-24 sm:w-24">
                  <FeaturedIcon className="h-10 w-10 text-lime sm:h-12 sm:w-12" strokeWidth={1.5} />
                  {/* pulsing ring */}
                  <span className="absolute inset-0 animate-ping rounded-3xl bg-lime/10 [animation-duration:2.5s]" />
                </div>
              </div>

              {/* Right: text */}
              <div className="flex-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
                  01 — Core Differentiator
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist">
                  {featured.body}
                </p>
              </div>
            </div>

            {/* bottom shine line */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />
          </SpotlightCard>
        </Reveal>

        {/* ── 5-card grid ── */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((d, i) => {
            const Icon = d.icon;
            const gradient = accentColors[(i + 1) % accentColors.length];
            return (
              <Reveal key={d.title} delay={(i % 3) * 0.07} y={32}>
                <SpotlightCard className="h-full p-7">
                  <div className="flex items-start gap-4">
                    {/* numbered icon badge */}
                    <div className="relative shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-lime transition-all duration-500 group-hover:border-lime/30 group-hover:bg-lime/10 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_-6px_rgba(201,242,107,0.25)]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      {/* number badge */}
                      <span
                        className={cn(
                          "absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br text-[9px] font-bold text-white",
                          gradient
                        )}
                      >
                        0{i + 2}
                      </span>
                    </div>

                    <div className="flex-1 pt-0.5">
                      <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-white">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-mist/80">
                        {d.body}
                      </p>
                    </div>
                  </div>

                  {/* hover bottom bar */}
                  <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
