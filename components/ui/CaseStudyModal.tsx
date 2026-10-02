"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Layers,
} from "lucide-react";
import { CaseStudyItem } from "@/lib/case-studies-data";
import { site } from "@/lib/site";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CaseStudyItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function CaseStudyModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: CaseStudyModalProps) {
  const item = items[currentIndex];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
    setIsPlaying(true);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        if (currentIndex < items.length - 1) onNavigate(currentIndex + 1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  if (!isOpen || !item) return null;

  const isVideo = item.type === "video";
  const mediaList = item.mediaFiles && item.mediaFiles.length > 0 ? item.mediaFiles : [item.mediaSrc];
  const currentMedia = mediaList[activeMediaIndex] || item.mediaSrc;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-2 sm:p-4 md:p-6 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-black/95 via-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-lime">
            <BadgeCheck className="h-3.5 w-3.5" />
            Verified Case Study
          </span>
          <span className="hidden sm:inline-block font-mono text-xs text-dim">
            {item.category}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs text-mist/80">
            <span className="text-lime font-bold">{currentIndex + 1}</span> / {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-line bg-panel text-fog transition-all hover:border-lime hover:text-lime hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          aria-label="Previous case study"
          className="absolute left-2 sm:left-4 lg:left-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-line bg-panel/90 text-fog backdrop-blur-md transition-all hover:scale-110 hover:border-lime hover:text-lime shadow-xl"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {currentIndex < items.length - 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          aria-label="Next case study"
          className="absolute right-2 sm:right-4 lg:right-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-line bg-panel/90 text-fog backdrop-blur-md transition-all hover:scale-110 hover:border-lime hover:text-lime shadow-xl"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Main Modal Card */}
      <div
        className="relative flex flex-col lg:flex-row w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl border border-line-strong bg-panel shadow-2xl mt-12 sm:mt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT: Media Player / Viewer */}
        <div className="relative flex-1 bg-ink flex items-center justify-center min-h-[320px] max-h-[50vh] lg:max-h-[80vh] overflow-hidden border-b lg:border-b-0 lg:border-r border-line">
          {isVideo ? (
            <div className="relative h-full w-full flex items-center justify-center bg-black">
              <video
                ref={videoRef}
                key={currentMedia}
                src={currentMedia}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                poster={item.thumbnailSrc}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Play/Pause Overlay */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
              >
                {!isPlaying && (
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-lime/40 bg-ink/80 text-lime backdrop-blur-md shadow-[0_0_30px_rgba(201,242,107,0.4)]">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </div>
                )}
              </button>

              {/* Bottom Video Controls */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/90 to-transparent z-10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-fog hover:text-lime"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-fog hover:text-lime"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-lime">
                  Reel Breakdown
                </span>
              </div>
            </div>
          ) : (
            <div className="relative h-full w-full flex items-center justify-center p-2 sm:p-4 bg-[#050907]">
              <Image
                src={currentMedia}
                alt={item.title}
                width={1200}
                height={1200}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                priority
              />

              {/* Multiple Images Carousel Navigator */}
              {mediaList.length > 1 && (
                <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 z-10">
                  <div className="flex items-center gap-1.5 rounded-full border border-line-strong bg-ink/80 px-3 py-1.5 backdrop-blur-md">
                    <Layers className="h-3.5 w-3.5 text-lime mr-1" />
                    {mediaList.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          activeMediaIndex === idx ? "w-6 bg-lime" : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`View slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT: Detail & Description Panel */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto p-5 sm:p-8 max-h-[45vh] lg:max-h-[80vh] bg-panel">
          <div>
            {/* Category & Verified Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full bg-lime/10 border border-lime/30 px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-lime">
                {item.category}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-mist/70">
                <BadgeCheck className="h-3.5 w-3.5 text-lime" />
                Live Client Output
              </span>
            </div>

            {/* Title / Headline */}
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fog leading-snug">
              {item.title}
            </h3>

            {/* Metrics Grid */}
            {item.metrics && item.metrics.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 rounded-2xl border border-lime/20 bg-[#06140b] p-3 sm:p-4">
                {item.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-mist/70">
                      {m.label}
                    </span>
                    <span className="font-mono text-base sm:text-lg font-bold text-lime">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Full Formatted Description */}
            <div className="mt-5 border-t border-line/60 pt-4">
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-dim mb-2 flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-lime" />
                Case Study Overview & Breakdown
              </h4>
              <div className="text-xs sm:text-sm leading-relaxed text-fog/90 whitespace-pre-wrap font-sans space-y-2 select-text bg-white/[0.02] p-4 rounded-xl border border-white/5 max-h-60 overflow-y-auto">
                {item.description}
              </div>
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[10px] font-mono text-mist"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Actions Bar */}
          <div className="mt-6 pt-4 border-t border-line flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-mist hover:text-lime transition-colors py-2"
            >
              <svg
                className="h-4 w-4 text-pink-500 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>View on Instagram</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>

            <Link
              href={site.bookCallUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-xs sm:text-sm font-bold text-ink transition-all hover:shadow-[0_0_25px_rgba(201,242,107,0.45)] hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Install This System</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
