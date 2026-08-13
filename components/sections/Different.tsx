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

        <div className="mt-16 flex flex-col gap-8 lg:gap-10">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} y={40} delay={0.1}>
                <SpotlightCard className="p-8 text-center sm:p-12 lg:p-16">
                  <div className="flex flex-col items-center justify-center gap-6">
                    {/* Icon */}
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-lime/25 bg-lime/[0.08] sm:h-24 sm:w-24">
                      <Icon className="h-10 w-10 text-lime sm:h-12 sm:w-12" strokeWidth={1.5} />
                      <span className="absolute inset-0 animate-ping rounded-3xl bg-lime/10 [animation-duration:3s]" />
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-center max-w-4xl">
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
                        0{i + 1}{i === 0 && " — Core Differentiator"}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-balance">
                        {d.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
                        {d.body}
                      </p>
                    </div>
                  </div>

                  {/* bottom shine line */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
