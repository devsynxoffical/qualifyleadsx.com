"use client";

import { useRef } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/lib/data";
import { cn } from "@/lib/utils";

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
        "group relative overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-colors duration-500 hover:border-line-strong",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(201,242,107,0.08), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}

export function Different() {
  return (
    <Section id="different" className="theme-light">
      <SectionHeading
        eyebrow="What makes it different"
        title={
          <>
            Not another agency.{" "}
            <em className="font-semibold not-italic text-lime">A system.</em>
          </>
        }
        subtitle="We don't sell hours or 'strategy decks'. We install a revenue engine that pre-sells your prospects and books your calendar — then back it in writing."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.title} delay={(i % 3) * 0.08} y={36}>
              <SpotlightCard className={cn(i === 0 && "lg:col-span-1")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-fog">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{d.body}</p>
                <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-14 grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-panel lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="relative aspect-[6/5] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full">
          <Image
            src="/images/gif-1.gif"
            alt="AI outbound voice call booking appointments in real time"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
            unoptimized
          />
        </Reveal>
        <Reveal delay={0.12} className="p-8 sm:p-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime">
            <PhoneCall className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-fog">
            An AI rep on the phone while you sleep.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Every booked call is confirmed, reminded and rescheduled by an AI voice agent that
            sounds human. No-shows drop, and your calendar fills while you&apos;re off the clock.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
            {["100% AI follow-up", "86%+ show rate", "24/7 availability"].map((label) => (
              <span key={label} className="flex items-center gap-2 text-xs text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
