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
  hidden: { y: 36, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const categoryLabels = [
  "Core Differentiator",
  "Qualification & Filtering",
  "Automation & Nurturing",
  "100% Asset Ownership",
  "Revenue & ROAS Focus",
  "Risk Reversal Guarantee",
  "Dedicated Partnership",
];

export function Different() {
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

      <div className="container-x relative z-10">
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
          subtitle="Unlike traditional marketing agencies, we handle every step of your customer journey - from attracting the right prospects, to qualifying them, to nurturing them, to getting them booked onto your calendar."
        />

        {/* ── All 7 Differentiator Cards (Unified Design) ── */}
        <div className="mt-12 flex flex-col gap-6 sm:gap-8">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            const category = categoryLabels[i] || "System Component";

            return (
              <motion.div
                key={d.title}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                <SpotlightCard className="p-8 sm:p-12 lg:p-14">
                  {/* Pill Badge */}
                  <div className="absolute right-6 top-6 flex h-8 w-16 items-center justify-center rounded-full border border-lime/20 bg-black/40 font-mono text-xs font-bold text-lime shadow-[0_0_15px_rgba(201,242,107,0.1)] transition-colors duration-500 group-hover:border-lime/40 group-hover:bg-black/60 group-hover:text-lime-soft sm:right-8 sm:top-8">
                    0{i + 1}
                  </div>

                  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
                    {/* Icon Container */}
                    <div className="shrink-0 self-start lg:self-center">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-lime/20 bg-lime/[0.06] shadow-[inset_0_0_20px_rgba(201,242,107,0.05)] transition-transform duration-500 group-hover:scale-[1.05] group-hover:rotate-[4deg] group-hover:border-lime/40 group-hover:bg-lime/[0.1] sm:h-24 sm:w-24">
                        {/* Pulsing background glow behind icon */}
                        <span className="absolute inset-0 animate-pulse rounded-2xl bg-lime/10 [animation-duration:3s]" />
                        <Icon className="relative z-10 h-10 w-10 text-lime sm:h-12 sm:w-12" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pr-12 lg:pr-16">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lime sm:text-xs">
                        0{i + 1} - {category}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-balance">
                        {d.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
