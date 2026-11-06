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
  TrendingUp,
  Calculator,
  ArrowRight,
  DollarSign,
  PieChart,
  Percent,
} from "lucide-react";

export default function RoasCalculatorPage() {
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [offerPrice, setOfferPrice] = useState<number>(5000);
  const [costPerCall, setCostPerCall] = useState<number>(120);
  const [showRate, setShowRate] = useState<number>(85);
  const [closeRate, setCloseRate] = useState<number>(25);

  const bookedCalls = costPerCall > 0 ? Math.floor(adSpend / costPerCall) : 0;
  const attendedCalls = Math.floor(bookedCalls * (showRate / 100));
  const closedDeals = Math.floor(attendedCalls * (closeRate / 100));
  const grossRevenue = closedDeals * offerPrice;
  const roas = adSpend > 0 ? (grossRevenue / adSpend).toFixed(2) : "0";
  const netProfit = grossRevenue - adSpend;
  const breakEvenDeals = offerPrice > 0 ? Math.ceil(adSpend / offerPrice) : 0;

  const faqs = [
    {
      q: "What is Return on Ad Spend (ROAS)?",
      a: "Return on Ad Spend (ROAS) is a marketing efficiency metric measuring gross revenue generated per dollar spent on advertising. For example, generating $25,000 in client contracts from $5,000 in Meta Ads spend equals a 5.0x ROAS.",
    },
    {
      q: "What is a healthy ROAS for high-ticket client acquisition?",
      a: "For high-ticket offers ($3,000 to $25,000), a front-end ROAS of 3.0x to 5.0x is considered healthy. Because service businesses carry high gross margins (75%–90%), a 4x ROAS produces strong upfront cash flow even before factoring in client retention and lifetime value.",
    },
    {
      q: "How does appointment show rate impact ROAS?",
      a: "Show rate is the most common hidden bottleneck. Increasing your show rate from 55% to 85% via automated WhatsApp and SMS follow-up generates 54% more attended sales conversations from the exact same ad spend, immediately boosting your ROAS by over 50%.",
    },
    {
      q: "What is Break-Even ROAS?",
      a: "Break-Even ROAS represents the exact revenue multiplier required to cover advertising spend and delivery overhead without taking a financial loss. For a $5,000 offer with $5,000 ad spend, closing a single client achieves immediate break-even.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "High-Ticket ROAS & Break-Even Calculator - QualifiedLeadsX",
        url: `${site.url}/tools/roas-calculator`,
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
          { name: "ROAS Calculator", url: "/tools/roas-calculator" },
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
              Interactive Financial Engine
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            High-Ticket ROAS & Break-Even{" "}
            <span className="text-gradient-lime">Acquisition Calculator</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            Model how changes in appointment show rates, close rates, and ad costs impact your front-end revenue and pipeline profitability.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO)
            </span>
            <h2 className="mt-1 text-lg font-bold text-fog">
              What is Return on Ad Spend (ROAS) for High-Ticket Services?
            </h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              Return on Ad Spend (ROAS) in high-ticket client acquisition measures total cash collected divided by paid media spend. Unlike transactional e-commerce, high-ticket funnels for $3,000–$25,000 offers operate with multi-stage conversion rates (cost per call, show rate, close rate), typically yielding between 3.5x and 6.5x front-end ROAS when properly qualified.
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
                Funnel Conversion Variables
              </h2>

              {/* Monthly Ad Spend */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Monthly Ad Spend ($)</span>
                  <span className="text-lime font-bold">${adSpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Offer Price */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Offer Price ($)</span>
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

              {/* Cost Per Booked Call */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Cost Per Booked Call ($)</span>
                  <span className="text-lime font-bold">${costPerCall}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="350"
                  step="5"
                  value={costPerCall}
                  onChange={(e) => setCostPerCall(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Show Rate */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Appointment Show Rate (%)</span>
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

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-lime/40 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                  PROJECTED ROAS & CASH
                </span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">
                    Estimated Front-End ROAS
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">
                    {roas}x
                  </span>
                  <span className="text-xs text-dim block mt-1">
                    ${grossRevenue.toLocaleString()} gross from ${adSpend.toLocaleString()} spend
                  </span>
                </div>

                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Total Booked Calls:</span>
                    <span className="font-mono font-bold text-fog">{bookedCalls} calls</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Attended Calls ({showRate}%):</span>
                    <span className="font-mono font-bold text-fog">{attendedCalls} shows</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Clients Closed ({closeRate}%):</span>
                    <span className="font-mono font-bold text-lime">{closedDeals} closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Net Front-End Cash Profit:</span>
                    <span className="font-mono font-bold text-lime">${netProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Break-Even Requires:</span>
                    <span className="font-mono font-bold text-fog">{breakEvenDeals} deals</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/book-your-call"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Book Free Funnel Strategy Session
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tools/cac-calculator"
                  className="w-full text-center block text-xs text-mist hover:text-lime mt-3"
                >
                  Switch to Customer Acquisition Cost (CAC) Calculator &rarr;
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
              ROAS QUESTIONS
            </span>
            <h2 className="mt-2 text-3xl font-bold text-fog">
              Frequently Asked Questions About ROAS
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
        eyebrow="READY TO MAXIMIZE YOUR ROAS?"
        title={
          <>
            Install our high ticket acquisition system and scale past{" "}
            <em className="font-semibold not-italic text-lime">$100K+/month</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

