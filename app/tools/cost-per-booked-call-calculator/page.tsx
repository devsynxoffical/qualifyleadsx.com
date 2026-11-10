"use client";

import { useState } from "react";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import {
  Calculator,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Percent,
  CheckCircle2,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export default function CostPerBookedCallCalculatorPage() {
  const [offerPrice, setOfferPrice] = useState<number>(5000);
  const [targetMargin, setTargetMargin] = useState<number>(60);
  const [showRate, setShowRate] = useState<number>(85);
  const [closeRate, setCloseRate] = useState<number>(25);

  const effectiveConversionPerBookedCall = (showRate / 100) * (closeRate / 100);
  const callsPerDeal = effectiveConversionPerBookedCall > 0 ? (1 / effectiveConversionPerBookedCall).toFixed(1) : "0";
  const revenuePerBookedCall = Math.round(offerPrice * effectiveConversionPerBookedCall);
  const breakEvenCostPerCall = revenuePerBookedCall;
  const allowableCostPerCall = Math.round(breakEvenCostPerCall * (1 - targetMargin / 100));

  const faqs = [
    {
      q: "What is an acceptable cost per booked call for high-ticket offers?",
      a: "For offers priced between $3,000 and $10,000+, a cost per booked call of $90 to $180 is typical in 2026. If your show rate is 85% and close rate is 25%, each booked call is worth approximately $1,062 in expected revenue, meaning a $150 cost per call delivers massive front-end margins.",
    },
    {
      q: "How does the Cost Per Booked Call Calculator work?",
      a: "The calculator multiplies your appointment show rate by your closing rate to determine your conversion probability per booked call. It then divides your offer price by the required calls to establish your break-even cost per call, and factors in your target profit margin to calculate your maximum allowable ad spend per booking.",
    },
    {
      q: "How can I reduce my cost per booked call?",
      a: "To lower cost per call: (1) Deploy broad creative testing on Meta Ads to lower click costs, (2) Upgrade to a 12-minute VSL funnel that pre-sells your mechanism, and (3) Optimize intake forms so only high-intent buyers reach your calendar.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Cost Per Booked Call Calculator - QualifiedLeadsX",
        url: `${site.url}/tools/cost-per-booked-call-calculator`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", url: "/tools" },
          { name: "Cost Per Booked Call Calculator", url: "/tools/cost-per-booked-call-calculator" },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Interactive Funnel Modeling
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            Cost Per Booked Call{" "}
            <span className="text-gradient-lime">Acquisition Calculator</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            Determine your maximum allowable cost per sales appointment and break-even thresholds based on offer pricing, show rate, and closing rate.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-1 text-lg font-bold text-fog">
              What is a Cost Per Booked Call Calculator?
            </h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              A cost per booked call calculator models how much ad spend your business can afford to invest per scheduled sales appointment while maintaining target profit margins. By factoring in your offer price, appointment show rate, and sales close rate, it calculates your exact break-even cost per call and recommended target cost per call.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Workspace */}
      <section className="py-12 sm:py-16 border-t border-line bg-panel/30">
        <div className="container-x max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6 rounded-2xl border border-line bg-ink/80 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-fog flex items-center gap-2">
                <Calculator className="h-5 w-5 text-lime" />
                Input Funnel Variables
              </h2>

              {/* Offer Price */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Core Offer Price ($)</span>
                  <span className="text-lime font-bold">${offerPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="25000"
                  step="250"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Target Profit Margin */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Desired Front-End Margin (%)</span>
                  <span className="text-lime font-bold">{targetMargin}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="85"
                  step="5"
                  value={targetMargin}
                  onChange={(e) => setTargetMargin(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Show Rate */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Expected Show-Up Rate (%)</span>
                  <span className="text-lime font-bold">{showRate}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="95"
                  step="1"
                  value={showRate}
                  onChange={(e) => setShowRate(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Close Rate */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Sales Call Close Rate (%)</span>
                  <span className="text-lime font-bold">{closeRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>
            </div>

            {/* Output Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-lime/40 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                  ALLOWABLE TARGETS
                </span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">
                    Target Cost Per Booked Call ({targetMargin}% Margin)
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">
                    ${allowableCostPerCall}
                  </span>
                  <span className="text-xs text-dim block mt-1">
                    Maximum break-even cost: ${breakEvenCostPerCall}/call
                  </span>
                </div>

                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Expected Revenue Per Call:</span>
                    <span className="font-mono font-bold text-lime">${revenuePerBookedCall}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Booked Calls Per Closed Client:</span>
                    <span className="font-mono font-bold text-fog">{callsPerDeal} calls</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Estimated Front-End Net Profit:</span>
                    <span className="font-mono font-bold text-lime">
                      ${Math.round(offerPrice * (targetMargin / 100)).toLocaleString()} / deal
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/book-your-call#book"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Audit My Cost Per Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/benchmarks/cost-per-booked-call"
                  className="w-full text-center block text-xs text-mist hover:text-lime mt-3"
                >
                  View 2026 Cost Per Booked Call Benchmarks &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProofStack variant="compact" />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              CALCULATOR FAQ
            </span>
            <h2 className="mt-2 text-3xl font-bold text-fog">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-line bg-ink/70"
              >
                <h3 className="text-lg font-bold text-fog mb-2">{faq.q}</h3>
                <p className="text-sm text-mist leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        compact={false}
        eyebrow="LOWER YOUR COST PER CALL"
        title={
          <>
            Scale your acquisition with guaranteed qualified calls on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

