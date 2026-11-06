"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarDays, Loader2 } from "lucide-react";
import type { GoogleCalendarBooking } from "@/lib/google-calendar";

interface Props {
  booking: GoogleCalendarBooking;
  /** Shown above the calendar, e.g. the prospect's first name. */
  firstName?: string;
}

/**
 * Inline Google Calendar appointment schedule. Google's page handles slot
 * selection, time zones, confirmation emails, reminders and the Meet link.
 */
export function GoogleCalendarEmbed({ booking, firstName }: Props) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // The form is replaced in place; bring step 2 into view so mobile visitors
  // don't land halfway down the calendar.
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div ref={ref} className="panel-glass scroll-mt-28 overflow-hidden rounded-3xl">
      <div className="border-b border-line px-6 py-5 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">Step 2 of 2</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fog">
          {firstName ? `Thanks ${firstName}, now pick your time` : "Now pick your time"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          Choose a slot for your free 30-minute strategy call. You&apos;ll get a calendar invite with the
          Google Meet link straight away.
        </p>
      </div>

      {booking.embedUrl ? (
        <div className="relative bg-white">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-neutral-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading available times…
            </div>
          )}
          <iframe
            src={booking.embedUrl}
            title="Book your free strategy call on Google Calendar"
            className="relative block h-[720px] w-full border-0 sm:h-[640px]"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 px-6 py-12 text-center sm:px-8">
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
      )}

      <p className="border-t border-line px-6 py-4 text-center text-xs text-dim sm:px-8">
        Calendar not loading?{" "}
        <a
          href={booking.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-mist underline underline-offset-4 hover:text-lime"
        >
          Open the booking page in a new tab
        </a>
      </p>
    </div>
  );
}
