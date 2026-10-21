"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  MotionOfferIcon,
  MotionMessagingIcon,
  MotionMetaAdsIcon,
  MotionCreativesIcon,
  MotionLandingIcon,
  MotionFunnelIcon,
  MotionCrmIcon,
  MotionAiIcon,
  MotionEmailIcon,
  MotionQualificationIcon,
  MotionCalendarIcon,
  MotionOptimizationIcon,
} from "@/components/ui/MotionIcons";

const features = [
  { icon: MotionOfferIcon, title: "Offer Positioning", body: "Your offer packaged to stand out from competitors." },
  { icon: MotionMessagingIcon, title: "Messaging Strategy", body: "A clear message that speaks to your ideal client." },
  { icon: MotionMetaAdsIcon, title: "Meta Ads", body: "Campaigns launched, managed & optimised daily." },
  { icon: MotionCreativesIcon, title: "Ad Creatives", body: "Scroll-stopping creatives for premium buyers." },
  { icon: MotionLandingIcon, title: "Landing Pages", body: "High-converting pages built around your offer." },
  { icon: MotionFunnelIcon, title: "Complete Sales Funnel", body: "First click to booked appointment, end to end." },
  { icon: MotionCrmIcon, title: "CRM Setup", body: "Every lead organised in one clean pipeline." },
  { icon: MotionAiIcon, title: "AI Automations", body: "AI-driven nurture that runs around the clock." },
  { icon: MotionEmailIcon, title: "Email Sequences", body: "Automated follow-up that sells while you sleep." },
  { icon: MotionQualificationIcon, title: "Lead Qualification", body: "Multi-validation filtering before leads hit your calendar." },
  { icon: MotionCalendarIcon, title: "Calendar Booking", body: "A booking flow synced directly to your calendar." },
  { icon: MotionOptimizationIcon, title: "Ongoing Optimisation", body: "Daily tweaks and scaling decisions from real data." },
];

export function EverythingIncluded() {
  return (
    <Section id="included" className="bg-ink relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,242,107,0.06),transparent)]" />

      <SectionHeading
        eyebrow="Everything included"
        title={
          <>
            Here&apos;s everything{" "}
            <em className="font-semibold not-italic text-lime">we build for you.</em>
          </>
        }
        subtitle="No à-la-carte pricing, no 'upsell after the fact'. When you plug into the QualifiedLeadsX™ system, the entire engine comes included."
      />

      <Reveal y={20} delay={0.05}>
        <div className="relative z-10 mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {features.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col gap-4 bg-panel p-6 transition-colors duration-300 hover:bg-elevated sm:p-7"
              >
                {/* subtle lime glow corner on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime/[0.10] blur-2xl" />
                </div>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink/60 text-lime transition-all duration-300 group-hover:border-lime/40 group-hover:bg-lime/10">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-fog">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-dim">{s.body}</p>
                </div>

                {/* animated bottom-line accent */}
                <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
