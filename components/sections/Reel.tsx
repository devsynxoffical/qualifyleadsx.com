"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Reel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

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
    <Section id="reel" className="bg-ink">
      <SectionHeading
        eyebrow="Watch"
        title={
          <>
            The flow never stops.{" "}
            <em className="font-semibold not-italic text-lime">Neither does your pipeline.</em>
          </>
        }
        subtitle="One constant in every install: motion. Prospects are being warmed, qualified and booked into your calendar around the clock - whether you're watching or not."
      />

      <Reveal>
        <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-panel shadow-soft">
          <video
            ref={videoRef}
            src="/videos/sea-storm.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="aspect-video w-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onLoadedData={() => setReady(true)}
            aria-label="Sea storm - the system in motion"
          />

          {/* loading shimmer until video ready */}
          {!ready && (
            <div className="absolute inset-0 flex items-center justify-center bg-ink">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-line-strong border-t-lime" />
            </div>
          )}

          {/* bottom fade for controls readability */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />

          {/* centre play / pause */}
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

          {/* controls bar */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
                Live system reel
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-dim sm:inline">
                AI voice · 24/7 follow-up · auto-booking
              </span>
            </div>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-ink/60 text-mist backdrop-blur-md transition-colors hover:text-lime"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-dim">
          The sea is your pipeline - always moving, never still. The system pre-sells, books and
          confirms while you focus on the close.
        </p>
      </Reveal>
    </Section>
  );
}
