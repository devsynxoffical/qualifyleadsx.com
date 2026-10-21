"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

export type LightboxItem = {
  src: string;
  title: string;
  subtitle?: string;
  badge?: string;
  w?: number;
  h?: number;
};

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

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

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-lime">
            <BadgeCheck className="h-3.5 w-3.5" />
            {currentItem.badge || "Verified Client Proof"}
          </span>
          <div className="hidden sm:block">
            <h4 className="text-sm font-semibold text-fog">{currentItem.title}</h4>
            {currentItem.subtitle && (
              <p className="text-xs text-mist">{currentItem.subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-mist">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-fog transition-colors hover:border-lime hover:text-lime"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          aria-label="Previous screenshot"
          className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-panel/80 text-fog backdrop-blur-md transition-all hover:scale-110 hover:border-lime hover:text-lime sm:left-8"
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
          aria-label="Next screenshot"
          className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-panel/80 text-fog backdrop-blur-md transition-all hover:scale-110 hover:border-lime hover:text-lime sm:right-8"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-line/40 bg-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentItem.src}
          alt={currentItem.title}
          width={currentItem.w || 1200}
          height={currentItem.h || 800}
          className="max-h-[80vh] w-auto object-contain"
          priority
        />
        {currentItem.subtitle && (
          <div className="border-t border-line bg-panel/90 p-4 text-center sm:hidden">
            <h4 className="text-sm font-semibold text-fog">{currentItem.title}</h4>
            <p className="text-xs text-mist">{currentItem.subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}
