"use client";

import { Check, ArrowUpRight, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "meta-ads",
    badge: "Ads Scaling",
    name: "Meta Ads Management",
    price: "$849",
    period: "/month",
    tagline: "For clients who want us to produce high-converting ad creatives, write direct-response copy, and scale their Meta Ads daily.",
    cta: "Book Free Strategy Call",
    featured: true,
    features: [
      "Full Meta Ads Campaign Management",
      "Scroll-Stopping Ad Creative Creation",
      "Direct-Response Ad Copywriting",
      "Hyper-Targeted Market & Audience Segmentation",
      "Daily Creative Testing & Scaling",
      "Pixel & Custom Conversion Tracking",
      "Heatmap & ROAS Performance Optimization",
    ],
  },
  {
    id: "full-service",
    badge: "Most Popular",
    name: "Full-Service Growth",
    price: "$2,499",
    period: "/month",
    tagline: "For clients who want us to build, launch, and scale the complete done-for-you client acquisition ecosystem.",
    cta: "Book Free Strategy Call",
    featured: true,
    features: [
      "Everything in Meta Ads Management",
      "Custom 3–5 Page High-Converting Funnel",
      "24/7 AI Automations & Follow-Up Workflows",
      "Automated Email & SMS Nurture Sequences",
      "Unlimited Ad Creatives & Variations (40–100+)",
      "Multi-Validation Lead Qualification System",
      "CRM Pipeline Integration & Direct Calendar Booking",
      "Continuous Conversion & ROAS Optimization",
    ],
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="relative overflow-hidden bg-[#040c07]">
      {/* Aurora glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-lime/[0.07] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.05] blur-[110px]" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Simple, transparent pricing"
          title={
            <>
              Two ways to{" "}
              <em className="font-semibold not-italic text-lime">plug into the system.</em>
            </>
          }
          subtitle="No hidden fees. No long-term lock-ins. Pick the plan that matches where you are right now."
        />

        <Reveal y={36} className="mt-14">
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-500",
                  plan.featured
                    ? "border-lime/40 bg-white/[0.04] shadow-[0_0_80px_-20px_rgba(201,242,107,0.25)] ring-1 ring-lime/20"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"
                )}
              >
                {/* Featured shimmer top border */}
                {plan.featured && (
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent" />
                )}

                {/* Badge */}
                <div className="flex items-start justify-between p-8 pb-0">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
                      plan.featured
                        ? "border border-lime/30 bg-lime/10 text-lime"
                        : "border border-white/10 bg-white/[0.05] text-mist"
                    )}
                  >
                    {plan.featured && <Star className="h-3 w-3 fill-current" />}
                    {plan.badge}
                  </span>
                </div>

                {/* Price block */}
                <div className="px-8 pt-6">
                  <h3 className="text-xl font-bold tracking-tight text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span
                      className={cn(
                        "text-5xl font-bold tracking-tight",
                        plan.featured ? "text-lime" : "text-fog"
                      )}
                    >
                      {plan.price}
                    </span>
                    <span className="mb-2 text-base font-medium text-dim">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-mist/80">{plan.tagline}</p>
                </div>

                {/* Divider */}
                <div className="mx-8 mt-6 h-px bg-white/[0.06]" />

                {/* Features */}
                <ul className="flex flex-1 flex-col gap-3 px-8 py-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.featured
                            ? "bg-lime/20 text-lime"
                            : "bg-white/[0.07] text-mist"
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[13px] leading-relaxed text-mist">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <a
                    href={site.bookCallUrl}
                    className={cn(
                      "group flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition-all duration-300",
                      plan.featured
                        ? "bg-lime text-ink shadow-[0_0_40px_-10px_rgba(201,242,107,0.5)] hover:bg-lime-soft hover:shadow-[0_0_60px_-10px_rgba(201,242,107,0.6)] hover:scale-[1.02]"
                        : "border border-white/[0.12] bg-white/[0.05] text-fog hover:border-white/20 hover:bg-white/[0.09]"
                    )}
                  >
                    {plan.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom note */}
        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-lg text-center text-xs leading-relaxed text-dim">
            All plans include onboarding, account setup and a dedicated point of contact.
            Backed by our{" "}
            <span className="font-semibold text-mist">90-day written guarantee</span> - or we
            work for free until we deliver.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
