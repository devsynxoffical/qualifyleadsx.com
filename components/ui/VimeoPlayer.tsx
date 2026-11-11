"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-play Vimeo embed. Shows a local poster until the visitor presses
 * play, so the Vimeo player scripts don't load with the page.
 */
export function VimeoPlayer({
  videoId,
  title,
  poster,
  durationLabel,
}: {
  videoId: string;
  title: string;
  poster: string;
  durationLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] border border-lime/25 bg-black shadow-[0_30px_80px_-30px_rgba(201,242,107,0.35)]">
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_60px_rgba(201,242,107,0.55)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
            <Play className="ml-1 h-8 w-8 fill-current sm:h-10 sm:w-10" />
          </span>
          {durationLabel && (
            <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 font-mono text-xs text-fog">
              {durationLabel}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
