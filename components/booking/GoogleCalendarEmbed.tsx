"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, CalendarDays, Mail, Video } from "lucide-react";
import type { GoogleCalendarBooking } from "@/lib/google-calendar";
import { BookingSteps } from "@/components/booking/BookingSteps";
import { CalendarFrame } from "@/components/booking/CalendarFrame";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface Props {
  booking: GoogleCalendarBooking;
  /** Visitor's first name from step 1. */
  firstName?: string;
  /** Visitor's email from step 1, shown so they use the same one in Google's form. */
  email?: string;
}

/**
 * Step 2 of booking: the Google Calendar appointment schedule, framed in the
 * site's own card style. Google's page itself cannot be restyled (it is a
 * cross-origin frame), so it sits inside the dark card as an inset panel.
 */
export function GoogleCalendarEmbed({ booking, firstName, email }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // The form is replaced in place; bring step 2 into view so mobile visitors
  // don't land halfway down the calendar.
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div ref={ref} className="panel scroll-mt-28 rounded-3xl border-line-strong p-4 sm:p-6">
      <div className="px-2 pt-2 sm:px-2">
        <BookingSteps current={2} />
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-fog sm:text-[1.7rem]">
          {firstName ? (
            <>
              Thanks {firstName}, <span className="text-gradient-lime">now pick your time</span>
            </>
          ) : (
            <>
              Great, <span className="text-gradient-lime">now pick your time</span>
            </>
          )}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-mist">
          <li className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-lime" />
            Free 30-minute strategy call
          </li>
          <li className="flex items-center gap-1.5">
            <Video className="h-3.5 w-3.5 text-lime" />
            Google Meet link in your invite
          </li>
          {email && (
            <li className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-lime" />
              Book with <span className="font-semibold text-fog">{email}</span>
            </li>
          )}
        </ul>
      </div>

      <CalendarFrame booking={booking} className="mt-5" />

      <div className="mt-5 flex flex-col items-center justify-between gap-3 px-2 pb-1 text-xs text-dim sm:flex-row">
        <a
          href={booking.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-mist underline-offset-4 hover:text-lime hover:underline"
        >
          Calendar not loading? Open it in a new tab
          <ArrowUpRight className="h-3 w-3" />
        </a>
        <WhatsAppLink
          name={firstName}
          placement="booking_step_2"
          className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Prefer WhatsApp? Message us
        </WhatsAppLink>
      </div>
    </div>
  );
}
