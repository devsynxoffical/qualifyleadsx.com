import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/site";
import Link from "next/link";
import { CalendarDays, CheckCircle2, ChevronRight, ClipboardList, ShieldCheck, Timer, Video } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CalendarFrame } from "@/components/booking/CalendarFrame";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { googleCalendarBooking } from "@/lib/google-calendar";

const TITLE = "Pick a Time for Your Free Strategy Call";
const DESCRIPTION =
  "Choose a time for your free 30-minute QualifiedLeadsX strategy call. Live calendar, instant Google Meet invite, no obligation.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | QualifiedLeadsX™` },
  description: DESCRIPTION,
  alternates: { canonical: "/book-your-call/schedule" },
  // Conversion utility page: keep it out of search results, let crawlers follow its links.
  robots: { index: false, follow: true },
  openGraph: {
    images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: "/book-your-call/schedule", type: "website" },
};

const includes = [
  { icon: Timer, text: "Free 30-minute strategy call" },
  { icon: Video, text: "Google Meet link sent instantly" },
  { icon: CalendarDays, text: "Shown in your own time zone" },
  { icon: ShieldCheck, text: "No pressure, no obligation" },
];

const nextSteps = [
  {
    title: "Pick a slot",
    text: "Choose any open time. Google confirms it and emails you the invite with the Meet link.",
  },
  {
    title: "Quick prep",
    text: "Have your offer price, monthly revenue and current ad spend handy. Ballpark numbers are fine.",
  },
  {
    title: "Your roadmap",
    text: "On the call we audit your funnel and show you the exact system we would install for your niche.",
  },
];

export default function SchedulePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Book Your Free Strategy Call", url: "/book-your-call" },
          { name: "Pick a Time", url: "/book-your-call/schedule" },
        ]}
      />
      <Nav />
      <main id="main" className="pt-36 sm:pt-40">
        <section className="container-x pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-dim">
            <Link href="/" className="transition-colors hover:text-lime">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/book-your-call#book" className="transition-colors hover:text-lime">
              Book a Call
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-mist">Pick a Time</span>
          </nav>

          {/*
            Mobile order: heading -> calendar -> details. Desktop: details on the
            left, calendar on the right spanning both rows.
          */}
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.25fr] lg:gap-x-16 lg:gap-y-10">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="eyebrow">Free Strategy Call</p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fog sm:text-5xl">
                Pick a time that <span className="text-gradient-lime">works for you</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-mist sm:text-lg">
                Live availability for your free 30-minute strategy call. Choose a slot and the invite
                lands in your inbox straight away.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {includes.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-mist">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/15">
                      <Icon className="h-4 w-4 text-lime" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="calendar"
              className="scroll-mt-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
            >
              <div className="panel rounded-3xl border-line-strong p-3 sm:p-4">
                {googleCalendarBooking ? (
                  <>
                    <CalendarFrame booking={googleCalendarBooking} heightClass="h-[780px] sm:h-[760px]" />
                    <p className="px-2 pt-3 text-center text-xs text-dim">
                      Calendar not loading?{" "}
                      <a
                        href={googleCalendarBooking.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-mist underline underline-offset-4 hover:text-lime"
                      >
                        Open it in a new tab
                      </a>
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
                    <CalendarDays className="h-10 w-10 text-lime" />
                    <p className="max-w-sm text-sm text-mist">
                      Our live calendar is being updated. Send us your details and we&apos;ll lock in a time
                      with you.
                    </p>
                    <Link
                      href="/book-your-call#book"
                      className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink"
                    >
                      Request your call
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-dim">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl border border-line bg-elevated/50 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-lime/40 bg-lime/10 font-mono text-sm font-bold text-lime">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold tracking-tight text-fog">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-mist">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-line bg-panel p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-fog">
                  <ClipboardList className="h-4 w-4 text-lime" />
                  Prefer to tell us about your business first?
                </p>
                <p className="mt-1.5 text-sm text-mist">
                  Use the{" "}
                  <Link href="/book-your-call#book" className="font-semibold text-lime underline-offset-4 hover:underline">
                    short booking form
                  </Link>{" "}
                  and we&apos;ll come prepared with numbers for your niche, or see{" "}
                  <Link href="/case-studies" className="font-semibold text-lime underline-offset-4 hover:underline">
                    client results
                  </Link>{" "}
                  first.
                </p>
                <WhatsAppLink
                  placement="schedule_page"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Questions first? Message us on WhatsApp
                </WhatsAppLink>
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs text-dim">
                <CheckCircle2 className="h-4 w-4 text-lime" />
                Booked already? Check your inbox for the Google Calendar invite.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
