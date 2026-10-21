"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { testimonialVideos } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const currentVideo = testimonialVideos[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
    setIsPlaying(false);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Section id="testimonials" className="relative overflow-hidden bg-[#040c07]">
      <SectionHeading
        eyebrow="Client results"
        title={
          <>
            Hear it from{" "}
            <em className="font-semibold not-italic text-lime">
              our clients.
            </em>
          </>
        }
        subtitle="Real agency owners sharing their actual results with the QualifiedLeadsX system."
      />

      {/* ── Minimalist Testimonial Showcase ── */}
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14 items-center">
          
          {/* Left: Minimal Video Frame */}
          <div 
            className="group relative aspect-[9/16] w-full max-w-[300px] mx-auto overflow-hidden rounded-3xl border border-white/10 bg-black cursor-pointer shadow-2xl transition-all duration-500 hover:border-lime/40"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src={`${currentVideo.src}#t=0.001`}
              preload="metadata"
              playsInline
              className={cn(
                "h-full w-full object-cover transition-opacity duration-500",
                isPlaying ? "opacity-100" : "opacity-85 group-hover:opacity-100"
              )}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-black group-hover:border-lime pl-0.5">
                  <Play className="h-6 w-6 fill-current" />
                </div>
              </div>
            )}

            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md">
                  <Pause className="h-5 w-5" />
                </div>
              </div>
            )}

            {/* Bottom duration label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono font-medium text-white/80">
              <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-md border border-white/10">
                {currentVideo.name}
              </span>
              <span className="rounded-full bg-lime/20 text-lime px-2.5 py-1 backdrop-blur-md border border-lime/30 font-bold">
                {currentVideo.duration}
              </span>
            </div>
          </div>

          {/* Right: Minimalist Typography & Controls */}
          <div className="flex flex-col justify-between min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Monospace Indicator */}
                <div className="flex items-center gap-2 font-mono text-xs text-lime">
                  <span className="font-bold">0{currentIndex + 1}</span>
                  <span className="text-white/30">/</span>
                  <span className="text-white/40">0{testimonialVideos.length}</span>
                </div>

                {/* Quote */}
                <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-white text-pretty">
                  {currentVideo.quote}
                </p>

                {/* Stars + Name + Role */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-1 text-lime">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{currentVideo.name}</h4>
                  <p className="text-sm text-mist">{currentVideo.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Minimal Nav Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex gap-2">
                {testimonialVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      idx === currentIndex ? "w-8 bg-lime" : "w-3 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all hover:border-lime hover:bg-lime hover:text-black"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all hover:border-lime hover:bg-lime hover:text-black"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
