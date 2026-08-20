"use client";

import { useRef, useState } from "react";
import { Play, Volume2, VolumeX, Clock, GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { trainingVideos } from "@/lib/media";

type CardProps = (typeof trainingVideos)[number];

function TrainingCard({ video, index }: { video: CardProps; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  const togglePlay = () => {
    if (video.youtubeId) {
      setPlaying(true);
      return;
    }
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
    <Reveal y={36} delay={index * 0.08}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel transition-colors duration-500 hover:border-line-strong">
        <div className="relative aspect-video overflow-hidden bg-ink">
          {video.youtubeId ? (
            playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${video.title} training video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={video.poster || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={`${video.title} cover`}
                  className="h-full w-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={`Play ${video.title} video`}
                  className="absolute inset-0 flex items-center justify-center bg-ink/30 backdrop-blur-[1px] transition-all group-hover:bg-ink/10"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-lime/40 bg-lime/20 text-lime shadow-[0_0_20px_rgba(201,242,107,0.3)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </span>
                </button>
              </div>
            )
          ) : (
            <>
              <video
                ref={videoRef}
                src={video.src}
                poster={video.poster}
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onLoadedData={() => setReady(true)}
                aria-label={`${video.title} training video`}
              />

              {!ready && (
                <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-line-strong border-t-lime" />
                </div>
              )}

              {/* bottom fade for controls readability */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />

              {/* play / pause overlay */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-ink/60 text-fog backdrop-blur-md transition-all duration-300 hover:text-lime ${
                    playing ? "scale-90 opacity-0" : "scale-100 opacity-100"
                  }`}
                >
                  <Play className="ml-0.5 h-6 w-6" />
                </span>
              </button>

              {/* mute toggle */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-ink/60 text-mist backdrop-blur-md transition-colors hover:text-lime"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </>
          )}

          {/* duration chip */}
          {video.duration && (
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-ink/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-fog backdrop-blur-md">
              <Clock className="h-3 w-3 text-lime" />
              {video.duration}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between p-5">
          <div className="flex flex-col gap-2.5">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-lime">
              <GraduationCap className="h-3.5 w-3.5" />
              {video.label}
            </span>
            <h3 className="text-base font-semibold tracking-tight text-fog">{video.title}</h3>
            <p className="text-sm leading-relaxed text-mist">{video.description}</p>
          </div>

          {video.link && (
            <div className="mt-5 pt-3 border-t border-line/60">
              <Link
                href={video.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-lime transition-all hover:translate-x-1"
              >
                Watch Mastermind Breakdown
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Training() {
  return (
    <Section id="training" className="bg-ink">
      <SectionHeading
        eyebrow="Training library"
        title={
          <>
            Learn the system.{" "}
            <em className="font-semibold not-italic text-lime">Own every result.</em>
          </>
        }
        subtitle="Short, practical training videos that teach you the exact plays, scripts and upgrades behind your client acquisition system."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {trainingVideos.map((v, i) => (
          <TrainingCard key={v.youtubeId || v.src} video={v} index={i} />
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-dim">
          Training is included with every install - new lessons added as we roll out upgrades to
          the system.
        </p>
      </Reveal>
    </Section>
  );
}

