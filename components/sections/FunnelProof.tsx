"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, TrendingUp, ZoomIn } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LightboxModal, LightboxItem } from "@/components/ui/LightboxModal";

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
    niche: "Solar & Home Services",
    result: "$18K Cash (14X ROI)",
    costPerAppt: "7 New Deals Closed",
    src: "/images/screenshots/Charles.webp",
    color: "#c9f26b",
  },
  {
    name: "Daniel",
    niche: "Solar Installation",
    result: "Calendar Fully Booked",
    costPerAppt: "$1.28 CPL",
    src: "/images/screenshots/Daniel.webp",
    color: "#ff7a90",
  },
  {
    name: "Alexander",
    niche: "Agency Growth",
    result: "$16.5K in Single Day",
    costPerAppt: "8 Sales in 24 Hours",
    src: "/images/screenshots/Alexander-scaled.webp",
    color: "#9b8bff",
  },
  {
    name: "Henry",
    niche: "High-Ticket B2B",
    result: "$105,000 Month",
    costPerAppt: "$80K Cash Collected",
    src: "/images/screenshots/Henry-scaled.webp",
    color: "#5ef2c2",
  },
  {
    name: "Mateo",
    niche: "Sales & Closers",
    result: "$51.2K Cash Collected",
    costPerAppt: "15 New Customers",
    src: "/images/screenshots/Mateo-scaled.webp",
    color: "#ffc857",
  },
  {
    name: "Jason",
    niche: "Roofing Ads",
    result: "725 Qualified Leads",
    costPerAppt: "$18.10 CPL ($13.1K Spend)",
    src: "/images/screenshots/Jason-scaled.webp",
    color: "#ff7a90",
  },
  {
    name: "Justin",
    niche: "Roofing Installs",
    result: "$127,500 Revenue",
    costPerAppt: "63 Days Scale",
    src: "/images/screenshots/Justin-scaled.webp",
    color: "#c9f26b",
  },
  {
    name: "Parker",
    niche: "Meta Ads Scaling",
    result: "295 Verified Leads",
    costPerAppt: "$4.77 CPL",
    src: "/images/screenshots/Parker-scaled.webp",
    color: "#9b8bff",
  },
  {
    name: "Stan",
    niche: "Roofing Agency",
    result: "152 Deals Closed",
    costPerAppt: "$546.1K Pipeline",
    src: "/images/screenshots/Stan-scaled.webp",
    color: "#5ef2c2",
  },
  {
    name: "Adam",
    niche: "Home Services",
    result: "260 Qualified Leads",
    costPerAppt: "$8.44 CPL (15 Days)",
    src: "/images/screenshots/Adam-scaled.webp",
    color: "#ffc857",
  },
];

export function FunnelProof() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxItems: LightboxItem[] = funnelProofs.map((p) => ({
    src: p.src,
    title: `${p.name} - ${p.niche}`,
    subtitle: `${p.result} · ${p.costPerAppt}`,
    badge: "Verified Client Output",
    w: 800,
    h: 1689,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Section id="results" className="bg-ink">
      <SectionHeading
        eyebrow="Real client results"
        title={
          <>
            Don&apos;t take our word for it...{" "}
            <em className="font-semibold not-italic text-lime">see what our clients achieved.</em>
          </>
        }
        subtitle="Revenue screenshots, Meta Ads dashboards, case studies and success stories from funnels we've installed across different niches - the same system, proven over and over."
      />

      {/* Stat strip */}
      <Reveal>
        <div className="mx-auto mb-14 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {[
            { value: "6–8 Figure", label: "Clients Under Our Belt" },
            { value: "30+", label: "Niches Proven" },
            { value: "12+ Years", label: "Experience" },
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
            <figure
              className="group relative overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-500 hover:border-line-strong sm:rounded-3xl cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[9/19] overflow-hidden bg-ink">
                <Image
                  src={p.src}
                  alt={`${p.name} - ${p.niche} funnel screenshot`}
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
                {/* Zoom Icon overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-ink/20 backdrop-blur-[1px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_20px_rgba(201,242,107,0.4)]">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
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
                  <TrendingUp className="h-3 w-3 text-lime" />
                  {p.costPerAppt}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />

      {/* Footnote */}
      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-dim">
          Screenshots are from real client funnels installed by QualifiedLeadsX™. Individual results
          vary - every funnel below uses the exact same system we would install for you.
        </p>
      </Reveal>
    </Section>
  );
}
