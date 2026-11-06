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
  Timer,
  Calculator,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  PhoneOff,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export default function ShowRateCalculatorPage() {
  const [bookedCalls, setBookedCalls] = useState<number>(40);
  const [currentShowRate, setCurrentShowRate] = useState<number>(60);
  const [offerPrice, setOfferPrice] = useState<number>(5000);
  const [closeRate, setCloseRate] = useState<number>(25);

  const currentShows = Math.floor(bookedCalls * (currentShowRate / 100));
  const currentDeals = Math.floor(currentShows * (closeRate / 100));
  const currentRevenue = currentDeals * offerPrice;

  // Optimized benchmark (88% QualifiedLeadsX client average)
  const optimizedShowRate = 88;
  const optimizedShows = Math.floor(bookedCalls * (optimizedShowRate / 100));
  const optimizedDeals = Math.floor(optimizedShows * (closeRate / 100));
  const optimizedRevenue = optimizedDeals * offerPrice;

  const lostMonthlyRevenue = Math.max(0, optimizedRevenue - currentRevenue);
  const lostAnnualRevenue = lostMonthlyRevenue * 12;
  const missedCallsMonthly = bookedCalls - currentShows;

  const faqs = [
    {
      q: "What is an acceptable appointment show rate for high-ticket sales?",
      a: "For high-ticket sales calls ($3,000 to $25,000 offers), an acceptable appointment show rate is 80% to 90%. While industry averages hover around 50%–60% due to reliance on passive email notifications, QualifiedLeadsX partners average 88.4% by deploying sub-5-minute automated SMS and WhatsApp confirmations.",
    },
    {
      q: "How does the Show Rate Calculator determine lost revenue?",
      a: "The calculator compares your current show rate against our verified 88% client benchmark. It multiplies missed sales conversations by your closing rate and average contract value, calculating the exact dollar amount slipping through your pipeline each month.",
    },
    {
      q: "What is the fastest way to increase appointment show rates?",
      a: "Deploying multi-channel speed to lead: (1) Send an instant conversational SMS within 180 seconds of booking, (2) Deliver an automated personalized WhatsApp voice prompt, and (3) Provide a concise 2-minute pre-call case study video for prospects to review.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Appointment Show Rate & Lost Revenue Calculator - QualifiedLeadsX",
        url: `${site.url}/tools/show-rate-calculator`,
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
          { name: "Show Rate Calculator", url: "/tools/show-rate-calculator" },
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
              Pipeline Leak Analysis
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            Appointment Show Rate &{" "}
            <span className="text-gradient-lime">Lost Revenue Calculator</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            Discover how much gross revenue ghosted sales calls are costing your agency or coaching business—and model the financial upside of reaching an 88%+ show rate.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO)
            </span>
            <h2 className="mt-1 text-lg font-bold text-fog">
              What is an Appointment Show Rate Calculator?
            </h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              An appointment show rate calculator measures the percentage of scheduled sales calls that prospects actually attend (Attended Calls / Total Scheduled Calls). It also models the exact dollar value of lost pipeline revenue resulting from ghosted calls and demonstrates how increasing show rates from 55% to 85%+ immediately boosts closed revenue.
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
                Pipeline Parameters
              </h2>

              {/* Monthly Booked Calls */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Monthly Booked Calls</span>
                  <span className="text-lime font-bold">{bookedCalls} calls</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={bookedCalls}
                  onChange={(e) => setBookedCalls(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Current Show Rate */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Current Show-Up Rate (%)</span>
                  <span className="text-lime font-bold">{currentShowRate}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="90"
                  step="1"
                  value={currentShowRate}
                  onChange={(e) => setCurrentShowRate(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

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
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-lime" />
                  REVENUE LEAKAGE REPORT
                </span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">
                    Estimated Lost Revenue Monthly
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">
                    ${lostMonthlyRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-dim block mt-1">
                    ${lostAnnualRevenue.toLocaleString()} / year in missed contracts
                  </span>
                </div>

                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Ghosted Calls Each Month:</span>
                    <span className="font-mono font-bold text-fog">{missedCallsMonthly} no-shows</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Current Monthly Cash:</span>
                    <span className="font-mono font-bold text-fog">${currentRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Revenue at 88% Show Rate:</span>
                    <span className="font-mono font-bold text-lime">${optimizedRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Additional Deals Won:</span>
                    <span className="font-mono font-bold text-lime">
                      +{Math.max(0, optimizedDeals - currentDeals)} deals / mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/speed-to-lead"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Plug This Leak With Speed to Lead
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/benchmarks/show-rate"
                  className="w-full text-center block text-xs text-mist hover:text-lime mt-3"
                >
                  View 2026 Show Rate Benchmarks &rarr;
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
              SHOW RATE FAQ
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
        eyebrow="RECOVER LOST SALES CALLS"
        title={
          <>
            Stop losing 40% of your calendar to no-shows. Book your{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

