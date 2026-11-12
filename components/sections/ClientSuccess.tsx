"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, BadgeCheck, CalendarCheck2, ZoomIn, ChevronDown, ArrowUpRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LightboxModal, LightboxItem } from "@/components/ui/LightboxModal";

/** Client result screenshots, compressed to WebP (max 1200px wide) from the originals in /QualifiedScreenshots. */
const qualifiedScreenshots: { file: string; w: number; h: number }[] = [
  { file: "client-result-01.webp", w: 1200, h: 1031 },
  { file: "client-result-02.webp", w: 1200, h: 825 },
  { file: "client-result-03.webp", w: 1200, h: 969 },
  { file: "client-result-04.webp", w: 1080, h: 1136 },
  { file: "client-result-05.webp", w: 1179, h: 1750 },
  { file: "client-result-06.webp", w: 1200, h: 1101 },
  { file: "client-result-07.webp", w: 1200, h: 916 },
  { file: "client-result-08.webp", w: 1200, h: 730 },
  { file: "client-result-09.webp", w: 1200, h: 1137 },
  { file: "client-result-10.webp", w: 1200, h: 1089 },
  { file: "client-result-11.webp", w: 1200, h: 749 },
  { file: "client-result-12.webp", w: 1200, h: 799 },
  { file: "client-result-13.webp", w: 1200, h: 1099 },
  { file: "client-result-14.webp", w: 1200, h: 1060 },
  { file: "client-result-15.webp", w: 1200, h: 946 },
  { file: "client-result-16.webp", w: 1200, h: 891 },
  { file: "client-result-17.webp", w: 1200, h: 735 },
  { file: "client-result-18.webp", w: 1200, h: 1109 },
  { file: "client-result-19.webp", w: 1200, h: 651 },
  { file: "client-result-20.webp", w: 1200, h: 913 },
  { file: "client-result-21.webp", w: 1200, h: 837 },
  { file: "client-result-22.webp", w: 1200, h: 1110 },
  { file: "client-result-23.webp", w: 1200, h: 1024 },
  { file: "client-result-24.webp", w: 1200, h: 1005 },
  { file: "client-result-25.webp", w: 1200, h: 1074 },
  { file: "client-result-26.webp", w: 1200, h: 952 },
  { file: "client-result-27.webp", w: 1200, h: 1080 },
  { file: "client-result-28.webp", w: 1200, h: 1095 },
  { file: "client-result-29.webp", w: 1200, h: 737 },
  { file: "client-result-30.webp", w: 1200, h: 854 },
  { file: "client-result-31.webp", w: 1200, h: 756 },
  { file: "client-result-32.webp", w: 1200, h: 907 },
  { file: "client-result-33.webp", w: 1200, h: 1054 },
  { file: "client-result-34.webp", w: 1200, h: 867 },
  { file: "client-result-35.webp", w: 1200, h: 1078 },
  { file: "client-result-36.webp", w: 1200, h: 833 },
  { file: "client-result-37.webp", w: 1200, h: 1099 },
  { file: "client-result-38.webp", w: 1200, h: 993 },
  { file: "client-result-39.webp", w: 1200, h: 994 },
  { file: "client-result-40.webp", w: 1200, h: 1052 },
  { file: "client-result-41.webp", w: 1200, h: 829 },
  { file: "client-result-42.webp", w: 1200, h: 703 },
  { file: "client-result-43.webp", w: 1200, h: 1106 },
  { file: "client-result-44.webp", w: 1200, h: 887 },
  { file: "client-result-45.webp", w: 1200, h: 1091 },
  { file: "client-result-46.webp", w: 1200, h: 958 },
  { file: "client-result-47.webp", w: 1200, h: 1101 },
  { file: "client-result-48.webp", w: 1200, h: 1094 },
  { file: "client-result-49.webp", w: 1200, h: 1111 },
  { file: "client-result-50.webp", w: 1200, h: 883 },
  { file: "client-result-51.webp", w: 1200, h: 887 },
  { file: "client-result-52.webp", w: 1200, h: 890 },
  { file: "client-result-53.webp", w: 1200, h: 1105 },
  { file: "client-result-54.webp", w: 1200, h: 1077 },
  { file: "client-result-55.webp", w: 1200, h: 1027 },
  { file: "client-result-56.webp", w: 1200, h: 879 },
  { file: "client-result-57.webp", w: 1200, h: 1038 },
  { file: "client-result-58.webp", w: 1200, h: 947 },
  { file: "client-result-59.webp", w: 1200, h: 935 },
  { file: "client-result-60.webp", w: 1200, h: 987 },
];

const workProofs = qualifiedScreenshots.map((shot, i) => ({
  src: `/QualifiedScreenshots/web/${shot.file}`,
  w: shot.w,
  h: shot.h,
  title: `Verified Client Output #${i + 1}`,
}));

export function ClientSuccess({
  eyebrow = "Recognised by client results",
  title,
  subtitle = "Booked calendars, paid invoices, closed deals. Every screenshot below is real client output - not marketing mockups.",
}: { eyebrow?: string; title?: React.ReactNode; subtitle?: string } = {}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);

  const displayedItems = workProofs.slice(0, visibleCount);

  const lightboxItems: LightboxItem[] = workProofs.map((p) => ({
    src: p.src,
    title: p.title,
    subtitle: "QualifiedLeadsX™ Real Client Output",
    badge: "Verified Client Proof",
    w: p.w,
    h: p.h,
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
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                Lead generation results:{" "}
                <em className="font-semibold not-italic text-lime">real client numbers.</em>
              </>
            )
          }
          subtitle={subtitle}
        />

        {/* Larger Masonry Grid (3 Columns on Desktop for Bigger Boxes) */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 sm:gap-6 [&>*]:mb-6">
          {displayedItems.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 3) * 0.05} y={30} className="break-inside-avoid">
              <div
                className="group relative overflow-hidden rounded-3xl border border-lime/25 bg-[#06140b] p-3 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-lime/60 hover:shadow-[0_15px_40px_rgba(201,242,107,0.2)] hover:-translate-y-1.5 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <img
                    src={shot.src}
                    width={shot.w}
                    height={shot.h}
                    decoding="async"
                    alt={`Verified client output screenshot ${i + 1}`}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Clean Hover Zoom Overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_30px_rgba(201,242,107,0.5)] transition-transform duration-300 group-hover:scale-110">
                      <ZoomIn className="h-7 w-7" />
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
                Load More Client Output
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

                {/* Explore all 125+ case studies CTA */}
        <Reveal delay={0.08} className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-8 py-3.5 text-sm font-bold text-lime transition-all duration-300 hover:border-lime/60 hover:bg-lime/20 hover:shadow-[0_0_30px_-5px_rgba(201,242,107,0.3)]"
          >
            Explore all 125+ verified case studies
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

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
