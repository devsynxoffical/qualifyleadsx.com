"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
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
    <Section id="testimonials" className="bg-ink overflow-hidden">
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

      <Reveal y={40} className="w-full">
        <div className="relative mx-auto mt-12 w-full max-w-[1100px] rounded-[32px] border border-line bg-panel p-4 sm:p-6 shadow-soft md:p-8">
          
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-center">
            
            {/* Left: Video Player */}
            <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-[24px] border border-line-strong bg-black shadow-2xl group cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={currentVideo.src}
                poster={currentVideo.poster}
                playsInline
                controls={isPlaying}
                className={cn(
                  "h-full w-full object-cover transition-opacity duration-700",
                  isPlaying ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                )}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:scale-110 shadow-xl pl-1">
                    <Play className="h-7 w-7 fill-current" />
                  </div>
                </div>
              )}

              {!isPlaying && currentVideo.duration && (
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                  Watch the story · {currentVideo.duration}
                </div>
              )}
            </div>

            {/* Right: Testimonial Details */}
            <div className="flex flex-col justify-center text-left py-4 sm:py-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                — Featured Testimonial
              </span>
              
              <h3 className="mt-8 text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.3] text-fog font-medium italic">
                {currentVideo.quote}
              </h3>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center justify-between border-t border-line/50 pt-8">
                <div>
                  <div className="flex items-center gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-1.5 font-mono text-xs font-bold text-fog">5.0</span>
                  </div>
                  <div className="mt-4 text-lg font-bold text-fog">{currentVideo.name}</div>
                  <div className="mt-1 text-sm text-dim">{currentVideo.role}</div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <button
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink text-fog transition-all hover:border-lime hover:text-lime"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink text-fog transition-all hover:border-lime hover:text-lime"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Progress Indicators */}
          <div className="mt-6 flex justify-center gap-2 sm:mt-10">
            {testimonialVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  idx === currentIndex ? "w-8 bg-lime" : "w-2 bg-line-strong hover:bg-mist"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </Reveal>
      
      <Reveal delay={0.2}>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-dim">
          Every result above is from a real engagement. Your results depend on your offer, market
          and follow-through — which is exactly what we run for you.
        </p>
      </Reveal>
    </Section>
  );
}
