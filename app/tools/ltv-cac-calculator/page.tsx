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
  Percent,
  Calculator,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

export default function LtvCacCalculatorPage() {
  const [initialDeal, setInitialDeal] = useState<number>(4500);
  const [retentionMonths, setRetentionMonths] = useState<number>(6);
  const [monthlyRetainer, setMonthlyRetainer] = useState<number>(2000);
  const [backendUpsell, setBackendUpsell] = useState<number>(1500);
  const [blendedCac, setBlendedCac] = useState<number>(1200);

  const totalLtv = initialDeal + retentionMonths * monthlyRetainer + backendUpsell;
  const ratio = blendedCac > 0 ? (totalLtv / blendedCac).toFixed(1) : "0";
  const netProfitPerCustomer = totalLtv - blendedCac;

  let healthStatus = "Sustainable";
  let healthColor = "text-lime";
  const numRatio = Number(ratio);
  if (numRatio >= 5.0) {
    healthStatus = "Elite / Rapid Scale Ready";
    healthColor = "text-lime";
  } else if (numRatio >= 3.0) {
    healthStatus = "Healthy / Sustainable Growth";
    healthColor = "text-mint";
  } else if (numRatio >= 1.5) {
    healthStatus = "Moderate Risk / Marginal Unit Economics";
    healthColor = "text-yellow-400";
  } else {
    healthStatus = "High Risk / Negative Cash Flow";
    healthColor = "text-red-400";
  }

  const faqs = [
    {
      q: "What is an ideal LTV to CAC ratio for high-ticket services?",
      a: "For high-ticket agencies, consultancies, and coaches, an LTV:CAC ratio of 3:1 is the minimum healthy standard. Elite operators who install backend retention and continuity programs routinely achieve 5:1 to 8:1 ratios, allowing them to outspend competitors on ad auctions while remaining highly profitable.",
    },
    {
      q: "How does the LTV to CAC Calculator work?",
      a: "The calculator calculates Customer Lifetime Value by summing initial contract revenue, monthly retainer continuity, and backend upsell expansions. It then divides this total LTV by your blended customer acquisition cost (CAC) to determine your economic scaling multiple.",
    },
    {
      q: "How can I improve my LTV:CAC ratio quickly?",
      a: "You can improve your ratio from both sides of the equation: (1) Reduce CAC by installing sub-5-minute speed to lead and direct-response 12-minute VSL funnels, and (2) Increase LTV by structuring 6-month minimum retainers, recurring continuity programs, and high-margin implementation upsells.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "LTV to CAC Ratio Calculator - QualifiedLeadsX",
        url: `${site.url}/tools/ltv-cac-calculator`,
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
          { name: "LTV to CAC Calculator", url: "/tools/ltv-cac-calculator" },
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
              Unit Economics Evaluation
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            LTV to CAC Ratio{" "}
            <span className="text-gradient-lime">Acquisition Calculator</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            Evaluate the financial health, enterprise valuation, and growth sustainability of your high-ticket business with our interactive LTV-to-CAC modeling tool.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO)
            </span>
            <h2 className="mt-1 text-lg font-bold text-fog">
              What is the LTV to CAC ratio and what is an ideal benchmark?
            </h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              The LTV to CAC ratio measures the lifetime gross margin or revenue generated by a customer relative to the cost of acquiring them (Customer Lifetime Value / Customer Acquisition Cost). In high-ticket services, a 3:1 ratio is considered the minimum healthy threshold, while top-tier agencies and consultancies scale at 5:1 or higher.
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
                Input Economics
              </h2>

              {/* Initial Deal Value */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Initial Upfront Contract ($)</span>
                  <span className="text-lime font-bold">${initialDeal.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="25000"
                  step="250"
                  value={initialDeal}
                  onChange={(e) => setInitialDeal(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Average Retention */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Average Retention (Months)</span>
                  <span className="text-lime font-bold">{retentionMonths} months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  step="1"
                  value={retentionMonths}
                  onChange={(e) => setRetentionMonths(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Monthly Retainer */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Monthly Recurring Retainer ($)</span>
                  <span className="text-lime font-bold">${monthlyRetainer.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="250"
                  value={monthlyRetainer}
                  onChange={(e) => setMonthlyRetainer(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Backend Upsell Value */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Average Backend Upsell Value ($)</span>
                  <span className="text-lime font-bold">${backendUpsell.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="250"
                  value={backendUpsell}
                  onChange={(e) => setBackendUpsell(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Blended CAC */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Blended CAC (Cost to Acquire) ($)</span>
                  <span className="text-lime font-bold">${blendedCac.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="8000"
                  step="100"
                  value={blendedCac}
                  onChange={(e) => setBlendedCac(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>
            </div>

            {/* Output Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-lime/40 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                  UNIT ECONOMICS HEALTH
                </span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">
                    LTV : CAC Multiple
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">
                    {ratio} : 1
                  </span>
                  <span className={`text-xs font-bold block mt-1.5 ${healthColor}`}>
                    {healthStatus}
                  </span>
                </div>

                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Total Lifetime Value (LTV):</span>
                    <span className="font-mono font-bold text-lime">${totalLtv.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Blended Acquisition Cost:</span>
                    <span className="font-mono font-bold text-fog">${blendedCac.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Net Profit Per Client:</span>
                    <span className="font-mono font-bold text-lime">
                      ${netProfitPerCustomer.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/book-your-call"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Scale My Acquisition Engine
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tools/cac-calculator"
                  className="w-full text-center block text-xs text-mist hover:text-lime mt-3"
                >
                  Switch to CAC Calculator &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              LTV:CAC FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
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
        eyebrow="ENGINEER 5X UNIT ECONOMICS"
        title={
          <>
            Scale past $100K+/month with guaranteed pipeline on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute strategy call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}
