"use client";

import Image from "next/image";
import { ShieldCheck, BadgeCheck, CalendarCheck2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type SuccessShot = { src: string; w: number; h: number };

const successShots: SuccessShot[] = [
  { src: "/images/client success/1-1-1-scaled.webp", w: 1920, h: 1089 },
  { src: "/images/client success/2.webp", w: 1340, h: 904 },
  { src: "/images/client success/3.webp", w: 1698, h: 836 },
  { src: "/images/client success/4-1.webp", w: 736, h: 709 },
  { src: "/images/client success/5.webp", w: 885, h: 703 },
  { src: "/images/client success/6-1.webp", w: 1000, h: 628 },
  { src: "/images/client success/7-2.webp", w: 893, h: 729 },
  { src: "/images/client success/8-1.webp", w: 894, h: 719 },
  { src: "/images/client success/9-2.webp", w: 928, h: 704 },
  { src: "/images/client success/10-3.webp", w: 889, h: 709 },
  { src: "/images/client success/11-1.webp", w: 1000, h: 843 },
  { src: "/images/client success/12-1.webp", w: 1000, h: 689 },
  { src: "/images/client success/13-1.webp", w: 1000, h: 743 },
  { src: "/images/client success/14-1.webp", w: 1000, h: 568 },
  { src: "/images/client success/15-1.webp", w: 1000, h: 448 },
  { src: "/images/client success/16.webp", w: 1000, h: 658 },
  { src: "/images/client success/17.webp", w: 1000, h: 624 },
];

export function ClientSuccess() {
  return (
    <Section id="success" className="theme-light">
      <SectionHeading
        eyebrow="Recognised by client results"
        title={
          <>
            We are recognised by{" "}
            <em className="font-semibold not-italic text-lime">the success of our clients.</em>
          </>
        }
        subtitle="Booked calendars, paid invoices, closed deals. Every screenshot below is real client output — not marketing mockups."
      />

      {/* Masonry gallery */}
      <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
        {successShots.map((shot, i) => (
          <Reveal key={shot.src} delay={(i % 3) * 0.07} y={36} className="break-inside-avoid">
            <figure className="group relative overflow-hidden rounded-2xl border border-line bg-panel sm:rounded-3xl">
              <Image
                src={shot.src}
                alt="Verified client success screenshot"
                width={shot.w}
                height={shot.h}
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 45vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-ink/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-white backdrop-blur-md">
                  <BadgeCheck className="h-3 w-3" />
                  Verified
                </span>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Trust strip */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-line bg-panel px-6 py-5">
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
    </Section>
  );
}
