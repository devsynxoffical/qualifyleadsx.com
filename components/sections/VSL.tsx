"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

interface VSLProps {
  videoId?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  hideHeading?: boolean;
}

export function VSL({
  videoId = "e5za2tPu7ZI",
  eyebrow = "Watch the system",
  title = (
    <>
      See exactly how{" "}
      <em className="font-semibold not-italic text-lime">we build your pipeline.</em>
    </>
  ),
  subtitle = "A short breakdown of the QualifiedLeadsX™ client acquisition system, the exact steps we install for you, and what a fully booked calendar looks like.",
  hideHeading = false,
}: VSLProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Section id="vsl" className="relative overflow-hidden bg-[#040c07]">
      {/* Background aurora blur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.04] blur-[150px]" />
      </div>

      <div className="container-x relative z-10">
        {!hideHeading && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
        )}

        <Reveal>
          {/* ── Top VSL Announcement Strip ── */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-lime/30 bg-lime/10 px-5 py-2 font-mono text-xs font-bold text-lime shadow-[0_0_20px_rgba(201,242,107,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
              VSL SYSTEM BREAKDOWN · 100% FREE MASTERCLASS
            </div>
          </div>

          {/* ── Video Player Frame ── */}
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-lime/20 bg-[#050e08] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            {/* Top Masking Strip — Hides YouTube Title & Channel Bar */}
            <div className="pointer-events-none absolute top-0 inset-x-0 z-20 h-16 sm:h-20 bg-gradient-to-b from-[#040c07] via-[#040c07]/95 to-transparent flex items-start justify-between px-6 pt-4">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-lime">
                <ShieldCheck className="h-4 w-4 text-lime" />
                QualifiedLeadsX™ System Breakdown
              </div>
            </div>

            {/* YouTube Embed Container — Natural fit without zoom distortion */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3&disablekb=0&enablejsapi=1`}
                  title="QualifiedLeadsX Video Sales Letter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                /* Click-to-Play Cover Overlay */
                <div className="relative h-full w-full">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="QualifiedLeadsX VSL Cover"
                    className="h-full w-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-black/25" />

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video sales letter"
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 cursor-pointer"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-full border border-lime/40 bg-lime/20 text-lime shadow-[0_0_40px_rgba(201,242,107,0.4)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24"
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-lime/30 [animation-duration:2.5s]" />
                      <Play className="ml-1 h-9 w-9 fill-current" />
                    </motion.span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-black/80 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:border-lime hover:text-lime">
                      <Clock className="h-4 w-4 text-lime" />
                      Watch Full System Breakdown
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Accent Shine */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
          </div>
        </Reveal>

        {/* ── Call to Action below Video ── */}
        <Reveal delay={0.12}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 text-center">
            <p className="text-sm leading-relaxed text-mist">
              Still have questions after watching? Get every answer on a free strategy call.
            </p>
            <a
              href={site.bookCallUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink shadow-[0_0_40px_-10px_var(--color-lime)] transition-all duration-300 hover:scale-105 hover:bg-lime-soft"
            >
              Book Your Free Strategy Call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
