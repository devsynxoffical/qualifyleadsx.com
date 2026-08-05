"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Industries() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Section id="industries" className="bg-ink">
      <SectionHeading
        eyebrow="Industries we serve"
        title={
          <>
            If you sell high-ticket,{" "}
            <em className="font-semibold not-italic text-lime">we scale it.</em>
          </>
        }
        subtitle="The QualifiedLeadsX™ system is engineered per niche. Same engine, different fuel — hover a niche to see the result it produces."
      />

      <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.title} delay={(i % 5) * 0.05} y={24}>
              <article
                className="group relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-6 transition-all duration-500 hover:-translate-y-1 hover:border-lime/30 hover:bg-elevated hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/[0.1] blur-3xl" />
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink/60 text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[11px] text-dim/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fog">{ind.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-mist">{ind.body}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                    <div>
                      <p className="font-mono text-xl font-bold text-lime">{ind.metric}</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-dim">
                        {ind.metricLabel}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 text-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime"
                      )}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
