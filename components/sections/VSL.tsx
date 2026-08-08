"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function VSL() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.muted = true;
    setMuted(true);
    void v.play().catch(() => undefined);
    setPlaying(true);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <Section id="vsl" className="bg-ink">
      <SectionHeading
        eyebrow="Watch the system"
        title={
          <>
            See exactly how{" "}
            <em className="font-semibold not-italic text-lime">we build your pipeline.</em>
          </>
        }
        subtitle="A short walkthrough of the QualifiedLeadsX™ client acquisition system, the exact steps we install for you and what a fully booked calendar looks like."
      />

      <Reveal>
        <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-panel shadow-soft">
          <video
            ref={videoRef}
            src="/videos/vsl.mp4"
            loop
            playsInline
            preload="auto"
            className="aspect-video w-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onLoadedData={() => setReady(true)}
            aria-label="QualifiedLeadsX video sales letter"
          />

          {/* loading shimmer until video ready */}
          {!ready && (
            <div className="absolute inset-0 flex items-center justify-center bg-ink">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-line-strong border-t-lime" />
            </div>
          )}

          {/* bottom fade for controls readability */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />

          {/* poster / click-to-play */}
          {!started && (
            <button
              type="button"
              onClick={start}
              aria-label="Play video sales letter"
              className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-ink/50 backdrop-blur-[2px] transition-colors hover:bg-ink/40"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex h-24 w-24 items-center justify-center rounded-full border border-lime/40 bg-lime/10 text-lime"
              >
                <span className="absolute inset-0 animate-pulse-ring rounded-full border border-lime/40" />
                <Play className="ml-1 h-9 w-9 fill-current" />
              </motion.span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink/70 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-fog backdrop-blur-md">
                <Clock className="h-3.5 w-3.5 text-lime" />
                Watch the full breakdown
              </span>
            </button>
          )}

          {/* centre play / pause */}
          {started && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
              className="absolute inset-0 flex items-center justify-center bg-transparent"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.9 : 1 }}
                transition={{ duration: 0.25 }}
                className="flex h-20 w-20 items-center justify-center rounded-full border border-line-strong bg-ink/60 text-fog backdrop-blur-md transition-colors hover:text-lime"
              >
                {playing ? <Pause className="h-7 w-7" /> : <Play className="ml-1 h-7 w-7" />}
              </motion.span>
            </button>
          )}

          {/* controls bar */}
          {started && (
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
                Video sales letter
              </span>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-ink/60 text-mist backdrop-blur-md transition-colors hover:text-lime"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mx-auto mt-9 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm leading-relaxed text-dim">
            Still have questions after watching? Get every answer on a free strategy call.
          </p>
          <Button href={site.bookCallUrl} icon="up-right" ariaLabel="Book a free strategy call after watching the VSL">
            Book Your Free Strategy Call
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
