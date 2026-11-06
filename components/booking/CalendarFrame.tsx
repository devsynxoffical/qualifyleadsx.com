"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, Loader2 } from "lucide-react";
import type { GoogleCalendarBooking } from "@/lib/google-calendar";

interface Props {
  booking: GoogleCalendarBooking;
  /** Tailwind height classes for the frame. */
  heightClass?: string;
  className?: string;
}

/**
 * The Google Calendar appointment schedule itself, inset as a white panel.
 * Shared by booking step 2 and the standalone /book-your-call/schedule page.
 */
export function CalendarFrame({
  booking,
  heightClass = "h-[760px] sm:h-[700px]",
  className = "",
}: Props) {
  const [loaded, setLoaded] = useState(false);

  if (!booking.embedUrl) {
    return (
      <div
        className={`flex flex-col items-center gap-4 rounded-2xl border border-line-strong bg-elevated/60 px-6 py-12 text-center ${className}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime/15">
          <CalendarDays className="h-7 w-7 text-lime" />
        </span>
        <a
          href={booking.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-[1rem] font-bold text-ink transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--color-lime)]"
        >
          Choose your call time
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line-strong bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)] ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-elevated text-sm text-mist">
          <Loader2 className="h-6 w-6 animate-spin text-lime" />
          Loading available times…
        </div>
      )}
      <iframe
        src={booking.embedUrl}
        title="Book your free strategy call on Google Calendar"
        className={`relative block w-full border-0 ${heightClass}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
