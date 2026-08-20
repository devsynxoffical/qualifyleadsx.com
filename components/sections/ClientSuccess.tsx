"use client";

import { useState } from "react";
import { ShieldCheck, BadgeCheck, CalendarCheck2, ZoomIn, ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LightboxModal, LightboxItem } from "@/components/ui/LightboxModal";

const workProofFiles: string[] = [
  "Screenshot 2026-08-17 at 5.46.06 PM.png",
  "Screenshot 2026-08-17 at 5.54.23 PM.png",
  "Screenshot 2026-08-17 at 5.55.25 PM.png",
  "Screenshot 2026-08-17 at 5.56.26 PM.png",
  "Screenshot 2026-08-17 at 5.57.01 PM.png",
  "Screenshot 2026-08-17 at 5.57.38 PM.png",
  "Screenshot 2026-08-17 at 5.58.17 PM.png",
  "Screenshot 2026-08-17 at 5.59.22 PM.png",
  "Screenshot 2026-08-17 at 5.59.39 PM.png",
  "Screenshot 2026-08-17 at 6.00.34 PM.png",
  "Screenshot 2026-08-17 at 6.01.09 PM.png",
  "Screenshot 2026-08-17 at 6.01.36 PM.png",
  "Screenshot 2026-08-17 at 6.02.06 PM.png",
  "Screenshot 2026-08-17 at 6.02.37 PM.png",
  "Screenshot 2026-08-17 at 6.02.58 PM.png",
  "Screenshot 2026-08-17 at 6.03.13 PM.png",
  "Screenshot 2026-08-17 at 6.03.59 PM.png",
  "Screenshot 2026-08-17 at 6.05.25 PM.png",
  "Screenshot 2026-08-19 at 3.18.50 PM.png",
  "Screenshot 2026-08-19 at 3.19.20 PM.png",
  "Screenshot 2026-08-19 at 3.19.41 PM.png",
  "Screenshot 2026-08-19 at 3.19.55 PM.png",
  "Screenshot 2026-08-19 at 3.20.36 PM.png",
  "Screenshot 2026-08-19 at 3.20.46 PM.png",
  "Screenshot 2026-08-19 at 3.21.03 PM.png",
  "Screenshot 2026-08-19 at 3.21.36 PM.png",
  "Screenshot 2026-08-19 at 3.21.49 PM.png",
  "Screenshot 2026-08-19 at 3.22.11 PM.png",
  "Screenshot 2026-08-19 at 3.22.25 PM.png",
  "Screenshot 2026-08-19 at 3.22.55 PM.png",
  "Screenshot 2026-08-19 at 3.23.19 PM.png",
  "Screenshot 2026-08-19 at 3.23.31 PM.png",
  "Screenshot 2026-08-19 at 3.23.39 PM.png",
  "Screenshot 2026-08-19 at 3.23.57 PM.png",
  "Screenshot 2026-08-19 at 3.24.27 PM.png",
  "Screenshot 2026-08-19 at 3.24.37 PM.png",
  "Screenshot 2026-08-19 at 3.24.48 PM.png",
  "Screenshot 2026-08-19 at 3.25.17 PM.png",
  "Screenshot 2026-08-19 at 3.25.33 PM.png",
  "Screenshot 2026-08-19 at 3.25.49 PM.png",
  "Screenshot 2026-08-19 at 3.26.12 PM.png",
  "Screenshot 2026-08-19 at 3.26.34 PM.png",
  "Screenshot 2026-08-19 at 3.26.47 PM.png",
  "Screenshot 2026-08-19 at 3.27.02 PM.png",
  "Screenshot 2026-08-19 at 3.29.29 PM.png",
  "Screenshot 2026-08-19 at 3.29.45 PM.png",
  "Screenshot 2026-08-19 at 3.29.56 PM.png",
  "Screenshot 2026-08-19 at 3.30.11 PM.png",
  "Screenshot 2026-08-19 at 3.31.27 PM.png",
  "Screenshot 2026-08-19 at 3.31.40 PM.png",
  "Screenshot 2026-08-19 at 3.32.18 PM.png",
  "Screenshot 2026-08-19 at 3.32.34 PM.png",
  "Screenshot 2026-08-19 at 3.32.48 PM.png",
  "Screenshot 2026-08-19 at 3.32.59 PM.png",
  "Screenshot 2026-08-19 at 3.33.08 PM.png",
  "Screenshot 2026-08-19 at 3.33.25 PM.png",
  "Screenshot 2026-08-19 at 4.33.48 PM.png",
  "Screenshot 2026-08-19 at 4.33.58 PM.png",
  "Screenshot 2026-08-19 at 4.34.11 PM.png",
];

const workProofs = workProofFiles.map((file, i) => ({
  src: `/workproof/${file}`,
  title: `Verified Client Output #${i + 1}`,
}));

export function ClientSuccess() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);

  const displayedItems = workProofs.slice(0, visibleCount);

  const lightboxItems: LightboxItem[] = workProofs.map((p) => ({
    src: p.src,
    title: p.title,
    subtitle: "QualifiedLeadsX™ Real Client Output",
    badge: "Verified Client Proof",
    w: 1200,
    h: 1600,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Section id="success" className="bg-[#040c07] border-y border-line relative overflow-hidden">
      {/* Aurora glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-lime/[0.04] blur-[160px]" />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Recognised by client results"
          title={
            <>
              We are recognised by{" "}
              <em className="font-semibold not-italic text-lime">the success of our clients.</em>
            </>
          }
          subtitle="Booked calendars, paid invoices, closed deals. Every screenshot below is real client output - not marketing mockups."
        />

        {/* Clean 5-Column Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-5">
          {displayedItems.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 5) * 0.04} y={30}>
              <div
                className="group relative overflow-hidden rounded-3xl border border-lime/20 bg-[#06120a] p-2 sm:p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-lime/50 hover:shadow-[0_15px_40px_rgba(201,242,107,0.2)] hover:-translate-y-1.5 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black border border-white/10">
                  <img
                    src={shot.src}
                    alt={`Verified client output screenshot ${i + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Clean Hover Zoom Overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_25px_rgba(201,242,107,0.5)] transition-transform duration-300 group-hover:scale-110">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < workProofs.length && (
          <Reveal delay={0.1}>
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 15, workProofs.length))}
                className="group inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-8 py-4 font-mono text-xs font-bold text-lime shadow-[0_0_30px_rgba(201,242,107,0.15)] transition-all hover:border-lime hover:bg-lime hover:text-ink hover:shadow-[0_0_40px_rgba(201,242,107,0.4)]"
              >
                Load More Client Output ({workProofs.length - visibleCount} Remaining)
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        )}

        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={lightboxItems}
          currentIndex={lightboxIndex}
          onNavigate={setLightboxIndex}
        />

        {/* Trust strip */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-line bg-[#06120a] px-6 py-5">
            {[
              { icon: CalendarCheck2, label: "Hundreds of calls booked monthly" },
              { icon: ShieldCheck, label: "Backed by a written guarantee" },
              { icon: BadgeCheck, label: "Verified client proof" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-2 text-xs text-mist">
                <item.icon className="h-4 w-4 text-lime" />
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
