"use client";

import { ArrowUpRight, Users, Zap, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const communityStats = [
  { icon: Users, value: "350+", label: "Active Members" },
  { icon: Zap, value: "Daily", label: "Strategy Drops" },
  { icon: TrendingUp, value: "Live", label: "Campaign Data" },
];

export function Community() {
  return (
    <Section id="community" className="relative overflow-hidden bg-[#040c07]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-lime/[0.05] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,242,107,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,242,107,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Private community"
          title={
            <>
              See What&apos;s Working.{" "}
              <em className="font-semibold not-italic text-lime">In Real Time.</em>
            </>
          }
          subtitle="Join the private QualifiedLeadsX Community for Agency Owners, High-Ticket Coaches & Service Providers where we share real campaigns, client wins, strategies, tests, and what's working right now."
        />

        {/* Stats row */}
        <Reveal y={24}>
          <div className="mx-auto mt-10 flex max-w-xl justify-center gap-10 sm:gap-16">
            {communityStats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.08] text-lime shadow-[0_0_20px_rgba(201,242,107,0.1)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-2 text-2xl font-bold text-white sm:text-3xl">{s.value}</span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-mist/70">{s.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.12}>
          <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-4 text-center">
            <p className="text-sm leading-relaxed text-mist">
              Free to join. Updated daily with real results, strategies and what&apos;s working right now across 30+ niches.
            </p>
            <a
              href="https://www.facebook.com/groups/qualifiedleadsx"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-9 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_rgba(201,242,107,0.5)] transition-all duration-300 hover:scale-105 hover:bg-lime-soft hover:shadow-[0_0_70px_-10px_rgba(201,242,107,0.6)]"
            >
              Join the Community - It&apos;s Free
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/60">
              Facebook Group · Free Access
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
