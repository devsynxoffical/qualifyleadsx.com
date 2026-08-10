"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonialVideos } from "@/lib/media";

type CardProps = (typeof testimonialVideos)[number];

function VideoTile({ video }: { video: CardProps }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          void el.play().catch(() => undefined);
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    const next = !muted;
    setMuted(next);
    el.muted = next;
  };

  return (
    <div className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-line bg-panel shadow-soft transition-all duration-500 hover:border-line-strong">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-[9/16] w-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={`${video.name} testimonial video`}
      />

      {/* name badge */}
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-ink/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-fog backdrop-blur-md">
          <Play className="h-2.5 w-2.5 fill-lime text-lime" />
          {video.name}
        </span>
      </div>

      {/* bottom caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent px-4 pb-4 pt-16">
        <p className="text-gradient-lime text-[15px] font-bold leading-snug">{video.result}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
          {video.role}
        </p>
      </div>

      {/* hover play glyph */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100 group-hover:opacity-100"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-ink/50 text-fog opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <Play className="ml-0.5 h-6 w-6 fill-current" />
        </span>
      </div>

      {/* mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Turn sound on" : "Mute"}
        className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-ink/60 text-fog opacity-0 backdrop-blur transition-opacity duration-300 hover:border-lime/50 hover:text-lime group-hover:opacity-100"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-ink">
      <SectionHeading
        eyebrow="Client testimonials"
        title={
          <>
            Hear it from{" "}
            <em className="font-semibold not-italic text-lime">clients who booked out.</em>
          </>
        }
        subtitle="Watch real clients walk through the system we installed — the results, the process and what changed for their business."
      />

      <Reveal>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonialVideos.map((v) => (
            <VideoTile key={v.src} video={v} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-dim">
          Every result above is from a real engagement. Your results depend on your offer, market
          and follow-through — which is exactly what we run for you.
        </p>
      </Reveal>
    </Section>
  );
}
