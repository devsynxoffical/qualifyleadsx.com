import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import { WEBSITE_ID, publisherOrg } from "@/lib/schema";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  DollarSign,
  PieChart,
  Percent,
  CheckCircle2,
  Table,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Cost Per Booked Call Benchmarks 2026 - QualifiedLeadsX",
  description:
    "Verified 2026 cost per booked call benchmarks by offer size ($3K to $25K) from $50M+ in managed Meta ad spend. Compare your acquisition costs today.",
  keywords: [
    "cost per booked call",
    "cost per call benchmarks",
    "b2b cost per booked call",
    "high ticket cost per call",
    "facebook ads cost per call",
    "appointment cost benchmarks",
  ],
  alternates: {
    canonical: "/benchmarks/cost-per-booked-call",
  },
  openGraph: {
    title: "Cost Per Booked Call Benchmarks 2026 - QualifiedLeadsX",
    description:
      "Verified 2026 cost per booked call data across $3K, $5K, $10K, and $25K offer tiers based on $50M+ in managed Meta ad spend.",
    url: `${site.url}/benchmarks/cost-per-booked-call`,
    type: "website",
  },
};

const tierBenchmarks = [
  {
    tier: "$3,000 – $4,500 Offer",
    avgCost: "$95 – $130",
    showRate: "86.2%",
    closeRate: "26.4%",
    expectedRoas: "6.2x – 8.5x",
    notes: "High conversion velocity, rapid 14-day sales cycles.",
  },
  {
    tier: "$5,000 – $7,500 Offer",
    avgCost: "$120 – $165",
    showRate: "88.4%",
    closeRate: "24.1%",
    expectedRoas: "5.5x – 7.2x",
    notes: "Standard high-ticket coaching & agency sweet spot.",
  },
  {
    tier: "$10,000 – $15,000 Offer",
    avgCost: "$175 – $240",
    showRate: "84.5%",
    closeRate: "21.8%",
    expectedRoas: "4.8x – 6.5x",
    notes: "Requires 2-call closing framework and case studies.",
  },
  {
    tier: "$20,000+ Enterprise Contract",
    avgCost: "$240 – $380",
    showRate: "82.0%",
    closeRate: "18.5%",
    expectedRoas: "4.2x – 5.8x",
    notes: "Longer multi-stakeholder corporate evaluation cycles.",
  },
];

const faqs = [
  {
    q: "What is an acceptable cost per booked call in 2026?",
    a: "Across more than $50M+ in managed Meta ad spend, the 2026 average cost per qualified booked call for high-ticket offers ($3,000–$25,000) ranges between $90 and $180. Cost per call varies by offer tier: $3,000 offers average $95–$130, $5,000 offers average $120–$160, and $10,000+ enterprise consulting offers average $180–$280 per attended call.",
  },
  {
    q: "How does offer price influence cost per booked call?",
    a: "Higher ticket offers require stricter intake qualification friction (e.g. proof of $50K+ revenue or $10K+ liquid capital). While this increases cost per form submission slightly, it dramatically increases close rates, producing superior net profit per closed client.",
  },
  {
    q: "Why do some agencies report $30 booked calls?",
    a: "Unqualified $30 booked calls typically result from zero-friction native Meta lead forms with no VSL or qualification survey. Over 70% of these leads fail to attend or have zero budget. QualifiedLeadsX focuses exclusively on pre-sold, qualified appointments that actually convert into collected revenue.",
  },
  {
    q: "Can I cite these benchmarks?",
    a: "Yes. All data points are free to cite with proper attribution to QualifiedLeadsX™ (https://www.qualifiedleadsx.com/benchmarks/cost-per-booked-call).",
  },
];

export default function CostPerBookedCallBenchmarkPage() {
  const pageUrl = `${site.url}/benchmarks/cost-per-booked-call`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        name: "Cost Per Booked Call Benchmarks 2026",
        description:
          "Verified 2026 cost per booked call benchmarks by offer size ($3K to $25K) from $50M+ in managed Meta ad spend.",
        url: pageUrl,
        publisher: publisherOrg,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
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
          { name: "Benchmarks", url: "/benchmarks" },
          { name: "Cost Per Booked Call", url: "/benchmarks/cost-per-booked-call" },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Verified Ad Spend Dataset
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            Cost Per Booked Call Benchmarks 2026:{" "}
            <span className="text-gradient-lime">Data by Offer Size</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Aggregated from over $50M+ in managed Meta advertising spend across 125+ client accounts in 30+ high-ticket industries.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is a good cost per booked call in 2026?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              Across more than $50M+ in managed Meta ad spend, the 2026 average cost per qualified booked call for high-ticket offers ($3,000–$25,000) ranges between $90 and $180. Cost per call varies by offer tier: $3,000 offers average $95–$130, $5,000 offers average $120–$160, and $10,000+ enterprise consulting offers average $180–$280 per attended call.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Data Table */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              OFFER TIER BENCHMARKS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              2026 Cost Per Call Performance Ledger
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Compare your current media acquisition costs against verified industry averages.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-ink/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-panel/90 text-xs font-mono uppercase tracking-wider text-fog">
                  <tr>
                    <th className="px-6 py-4">Offer Tier</th>
                    <th className="px-6 py-4">Avg Cost / Booked Call</th>
                    <th className="px-6 py-4">Avg Show Rate</th>
                    <th className="px-6 py-4">Avg Close Rate</th>
                    <th className="px-6 py-4">Front-End ROAS</th>
                    <th className="px-6 py-4">Dynamics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 font-sans">
                  {tierBenchmarks.map((tier) => (
                    <tr key={tier.tier} className="hover:bg-elevated/40 transition-colors">
                      <td className="px-6 py-4 font-bold text-fog">{tier.tier}</td>
                      <td className="px-6 py-4 font-mono font-bold text-lime text-base">{tier.avgCost}</td>
                      <td className="px-6 py-4 font-mono text-mist">{tier.showRate}</td>
                      <td className="px-6 py-4 font-mono text-mist">{tier.closeRate}</td>
                      <td className="px-6 py-4 font-mono font-bold text-fog">{tier.expectedRoas}</td>
                      <td className="px-6 py-4 text-xs text-mist">{tier.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-line/60 bg-panel/40 px-6 py-3 text-xs text-mist flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>Source: Aggregated from 125+ Meta Ads accounts managed by QualifiedLeadsX.</span>
              <span className="font-mono text-lime font-medium">Updated for Q4 2026</span>
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
              BENCHMARK FAQ
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
        eyebrow="AUDIT YOUR COST PER CALL"
        title={
          <>
            Compare your metrics with an expert on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

