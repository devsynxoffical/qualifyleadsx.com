"use client";

import Image from "next/image";
import { BadgeCheck, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type FunnelProof = {
  name: string;
  niche: string;
  result: string;
  costPerAppt: string;
  src: string;
  color: string;
};

const funnelProofs: FunnelProof[] = [
  {
    name: "Charles",
    niche: "Coaching",
    result: "$46K in 5 months",
    costPerAppt: "$12",
    src: "/images/screenshots/Charles.webp",
    color: "#c9f26b",
  },
  {
    name: "Daniel",
    niche: "Coaching",
    result: "$38K in 4 months",
    costPerAppt: "$9",
    src: "/images/screenshots/Daniel.webp",
    color: "#ff7a90",
  },
  {
    name: "Alexander",
    niche: "Consulting",
    result: "$25K+ in new clients",
    costPerAppt: "$11",
    src: "/images/screenshots/Alexander-scaled.webp",
    color: "#9b8bff",
  },
  {
    name: "Henry",
    niche: "Finance",
    result: "31 qualified calls",
    costPerAppt: "$9",
    src: "/images/screenshots/Henry-scaled.webp",
    color: "#5ef2c2",
  },
  {
    name: "Mateo",
    niche: "Real Estate",
    result: "11 deals in 90 days",
    costPerAppt: "$8",
    src: "/images/screenshots/Mateo-scaled.webp",
    color: "#ffc857",
  },
  {
    name: "Jason",
    niche: "Healthcare",
    result: "$18K in new patients",
    costPerAppt: "$6",
    src: "/images/screenshots/Jason-scaled.webp",
    color: "#ff7a90",
  },
  {
    name: "Justin",
    niche: "Education",
    result: "$12K in course sales",
    costPerAppt: "$10",
    src: "/images/screenshots/Justin-scaled.webp",
    color: "#c9f26b",
  },
  {
    name: "Parker",
    niche: "Agencies",
    result: "$32K retainer MRR",
    costPerAppt: "$13",
    src: "/images/screenshots/Parker-scaled.webp",
    color: "#9b8bff",
  },
  {
    name: "Stan",
    niche: "Healthcare",
    result: "$21K new revenue",
    costPerAppt: "$8",
    src: "/images/screenshots/Stan-scaled.webp",
    color: "#5ef2c2",
  },
  {
    name: "Adam",
    niche: "Insurance",
    result: "22 qualified calls",
    costPerAppt: "$7",
    src: "/images/screenshots/Adam-scaled.webp",
    color: "#ffc857",
  },
];

export function FunnelProof() {
  return (
    <Section id="results" className="bg-ink">
      <SectionHeading
        eyebrow="Proof in the funnel"
        title={
          <>
            Here&apos;s how this same funnel has generated{" "}
            <em className="font-semibold not-italic text-lime">OVER $100K+ per month</em> for our
            clients in <em className="font-semibold not-italic text-fog">different niches…</em>
          </>
        }
        subtitle="One system. Ten industries. These are the actual funnels running for clients right now — pre-selling prospects and booking qualified calls before a human ever picks up the phone."
      />

      {/* Stat strip */}
      <Reveal>
        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4">
          {[
            { value: "10", label: "Niches proven" },
            { value: "$100K+", label: "Client months" },
            { value: "$9", label: "Avg. per booked appt" },
            { value: "86%+", label: "Show rate" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 bg-panel px-5 py-7 text-center">
              <span className="font-mono text-2xl font-bold tracking-tight text-fog sm:text-3xl">
                {s.value}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-dim">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Phone screenshot grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {funnelProofs.map((p, i) => (
          <Reveal key={p.name} delay={(i % 5) * 0.06} y={40}>
            <figure className="group relative overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-500 hover:border-line-strong sm:rounded-3xl">
              <div className="relative aspect-[9/19] overflow-hidden bg-ink">
                <Image
                  src={p.src}
                  alt={`${p.name} — ${p.niche} funnel screenshot`}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to top, rgba(2,22,12,0.85), transparent 45%)`,
                  }}
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-line-strong bg-ink/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-fog backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.niche}
                </span>
              </div>
              <figcaption className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-fog">{p.name}</p>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-lime">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Live
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold tracking-tight" style={{ color: p.color }}>
                  {p.result}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-dim">
                  <TrendingUp className="h-3 w-3" />
                  {p.costPerAppt} / booked appt
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Footnote */}
      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-dim">
          Screenshots are from real client funnels installed by QualifiedLeadsX™. Individual results
          vary — every funnel below uses the exact same system we would install for you.
        </p>
      </Reveal>
    </Section>
  );
}
