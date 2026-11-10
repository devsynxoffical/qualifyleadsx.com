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
  DollarSign,
  Calculator,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export default function CacCalculatorPage() {
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [toolCost, setToolCost] = useState<number>(500);
  const [teamCost, setTeamCost] = useState<number>(2000);
  const [customers, setCustomers] = useState<number>(8);
  const [offerPrice, setOfferPrice] = useState<number>(4500);

  const totalCost = adSpend + toolCost + teamCost;
  const blendedCac = customers > 0 ? Math.round(totalCost / customers) : 0;
  const mediaCac = customers > 0 ? Math.round(adSpend / customers) : 0;
  const totalRevenue = customers * offerPrice;
  const profit = totalRevenue - totalCost;
  const roas = adSpend > 0 ? (totalRevenue / adSpend).toFixed(2) : "0";
  const cacPercentage = offerPrice > 0 ? ((blendedCac / offerPrice) * 100).toFixed(1) : "0";

  const faqs = [
    {
      q: "What is Customer Acquisition Cost (CAC)?",
      a: "Customer Acquisition Cost (CAC) is the total marketing and sales expenditure required to acquire a single paying customer. It includes paid advertising spend, software tools, CRM subscriptions, and sales team commissions divided by total customers acquired in a given period.",
    },
    {
      q: "What is a good CAC for high-ticket coaching or consulting?",
      a: "In high-ticket client acquisition ($3,000 to $10,000+ offers), an acceptable blended CAC is generally 15% to 25% of your front-end contract value. For example, spending $750 to acquire a $5,000 client yields an extraordinary 6.6x return.",
    },
    {
      q: "What is the difference between Pure Media CAC and Blended CAC?",
      a: "Pure Media CAC only measures ad spend per closed client (Ad Spend / Customers). Blended CAC (Fully-Loaded) includes appointment setter salaries, closer commissions, and CRM software, giving you a complete picture of net margins.",
    },
    {
      q: "How can I lower my Customer Acquisition Cost?",
      a: "To lower CAC without reducing ad spend: (1) Increase appointment show rate with sub-5-minute speed to lead, (2) Deploy a 12-minute VSL to pre-sell prospects before sales calls, and (3) Use broad algorithmic Meta Ads targeting to lower cost per lead.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Customer Acquisition Cost (CAC) Calculator - QualifiedLeadsX",
        url: `${site.url}/tools/cac-calculator`,
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
          { name: "CAC Calculator", url: "/tools/cac-calculator" },
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
              Interactive Financial Tool
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-fog leading-[1.1]">
            Customer Acquisition Cost (CAC) Calculator for{" "}
            <span className="text-gradient-lime">High-Ticket Offers</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-2xl mx-auto">
            Calculate your true blended customer acquisition cost and evaluate front-end margins against verified industry benchmarks.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-elevated/80 p-6 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-1 text-lg font-bold text-fog">
              What is Customer Acquisition Cost (CAC)?
            </h2>
            <p className="mt-2 text-sm text-mist leading-relaxed font-sans">
              Customer Acquisition Cost (CAC) is the total marketing and sales expenditure required to acquire a single paying customer. It includes paid advertising spend, software tools, CRM subscriptions, and sales team commissions divided by total customers acquired in a given period. High-ticket offers ($3K–$25K) typically aim for a CAC between 15% and 25% of contract value.
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
                Input Your Economics
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
                  <span className="text-mist">Core Offer Price ($)</span>
                  <span className="text-lime font-bold">${offerPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="250"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Customers Closed */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">New Customers Closed / Mo</span>
                  <span className="text-lime font-bold">{customers} clients</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={customers}
                  onChange={(e) => setCustomers(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Sales Team & Commission Cost */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Sales Team / Closer / Setter Cost ($)</span>
                  <span className="text-lime font-bold">${teamCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="250"
                  value={teamCost}
                  onChange={(e) => setTeamCost(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>

              {/* Tooling & CRM Cost */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">Software & Tech Stack ($)</span>
                  <span className="text-lime font-bold">${toolCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={toolCost}
                  onChange={(e) => setToolCost(Number(e.target.value))}
                  className="w-full accent-lime cursor-pointer"
                />
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-lime/40 bg-elevated/70 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                  LIVE MODEL RESULTS
                </span>
                <div className="mt-4 mb-6">
                  <span className="text-xs text-mist uppercase font-mono block">
                    Fully-Loaded Blended CAC
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">
                    ${blendedCac.toLocaleString()}
                  </span>
                  <span className="text-xs text-dim block mt-1">
                    {cacPercentage}% of ${offerPrice.toLocaleString()} offer price
                  </span>
                </div>

                <div className="space-y-3.5 border-t border-line/60 pt-5 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-mist">Pure Media CAC (Ad Spend Only):</span>
                    <span className="font-mono font-bold text-fog">${mediaCac.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Total Monthly Gross Revenue:</span>
                    <span className="font-mono font-bold text-lime">${totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Estimated Front-End ROAS:</span>
                    <span className="font-mono font-bold text-fog">{roas}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mist">Net Front-End Cash Profit:</span>
                    <span className="font-mono font-bold text-lime">${profit.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-line/60">
                <Link
                  href="/book-your-call#book"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-3 px-4 text-sm font-bold text-ink hover:bg-mint transition-colors"
                >
                  Audit My Acquisition System
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/benchmarks"
                  className="w-full text-center block text-xs text-mist hover:text-lime mt-3"
                >
                  View 2026 High-Ticket Benchmarks &rarr;
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
              CAC EXPLAINED
            </span>
            <h2 className="mt-2 text-3xl font-bold text-fog">
              Frequently Asked Questions About CAC
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
        eyebrow="READY TO LOWER YOUR CAC?"
        title={
          <>
            Scale your acquisition with guaranteed qualified calls on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute strategy call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

