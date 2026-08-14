"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Section, SectionHeading } from "@/components/ui/Section";
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
        "group relative h-full overflow-hidden rounded-[26px] border border-lime/10 bg-[#040a06]/80 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-lime/25 hover:bg-[#060f09]/90 hover:shadow-[0_8px_30px_-10px_rgba(201,242,107,0.15)] sm:p-8",
        className
      )}
    >
      {/* faint internal grid noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* cursor spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(201,242,107,0.08), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}

const revealVariants = {
  hidden: { y: 60, scale: 0.96, opacity: 0, filter: "blur(8px)" },
  visible: { y: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
};

export function Different() {
  const [featured, ...rest] = differentiators;
  const FeaturedIcon = featured.icon;
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <Section id="different" className="relative overflow-hidden bg-[#040c07]" container={false}>
      {/* Background aurora blobs & grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-lime/[0.04] blur-[140px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,242,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,242,107,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-x relative z-10" ref={sectionRef}>
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
