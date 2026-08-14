import type { Metadata } from "next";
import { CalendarDays, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/layout/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with QualifiedLeadsX. Get an audit of your offer and the exact funnel you need to fill your calendar with qualified sales calls.",
  alternates: {
    canonical: "/book-your-call/",
  },
};

const points = [
  {
    icon: Timer,
    title: "Free 30-minute call",
    text: "A focused audit of your current offer, traffic and sales process - not a sales pitch.",
  },
  {
    icon: Sparkles,
    title: "Exact funnel roadmap",
    text: "You'll leave with the precise system we'd build to generate qualified calls in your niche.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure, no obligation",
    text: "If it's not a fit, we'll tell you straight. Either way you walk away with clear next steps.",
  },
];

export default function BookYourCallPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-40">
        <section className="container-x grid gap-14 pb-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Free Strategy Call</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fog sm:text-5xl">
              Let&apos;s build the funnel that fills your{" "}
              <span className="text-gradient-lime">calendar with calls</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-mist sm:text-lg">
              Tell us about your business and we&apos;ll show you the exact same client acquisition
              system that has generated{" "}
              <span className="font-semibold text-fog">$100K+ months</span> across different
              niches - done for you, from funnel to follow-up.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {points.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-line bg-elevated/50 p-5"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15">
                    <Icon className="h-5 w-5 text-lime" />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-semibold tracking-tight text-fog">{title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-dim">
              <CalendarDays className="h-4 w-4 text-lime" />
              Average response time: under one business day
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
