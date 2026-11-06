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
  Timer,
  CheckCircle2,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "High Ticket Marketing Benchmarks 2026 - QualifiedLeadsX",
  description:
    "Verified 2026 high ticket marketing benchmarks: cost per lead, cost per booked call, Meta CPMs, and show rates across 30+ B2B industries from $50M+ ad spend.",
  keywords: [
    "high ticket marketing benchmarks",
    "cost per booked call",
    "b2b lead generation benchmarks",
    "meta ads cpm 2026",
    "high ticket close rate",
    "appointment show rate benchmarks",
  ],
  alternates: {
    canonical: "/benchmarks",
  },
  openGraph: {
    title: "High Ticket Marketing Benchmarks 2026 - QualifiedLeadsX",
    description:
      "Explore real data from $50M+ managed Meta ad spend: cost per call, show rate, close rates, and CAC benchmarks.",
    url: `${site.url}/benchmarks`,
    type: "website",
  },
};

const benchmarkReports = [
  {
    title: "Cost Per Booked Call Benchmarks",
    keyword: "cost per booked call",
    href: "/benchmarks/cost-per-booked-call",
    icon: DollarSign,
    badge: "Most Cited",
    summary:
      "Comprehensive data breakdown of customer acquisition cost per scheduled strategy session across $3K, $5K, $10K, and $25K offer tiers.",
    keyNumber: "$90 – $180",
    keyLabel: "Industry Average Per Call",
  },
  {
    title: "Cost Per Lead by Industry (2026)",
    keyword: "cost per lead by industry 2026",
    href: "/benchmarks/cost-per-lead-by-industry",
    icon: BarChart3,
    badge: "Industry Data",
    summary:
      "Analyzed across 30+ B2B verticals: Meta lead generation costs, opt-in rates, and qualified lead conversion ratios.",
    keyNumber: "$22 – $65",
    keyLabel: "Avg CPL for High-Ticket",
  },
  {
    title: "Appointment Show Rate Benchmarks",
    keyword: "appointment show rate benchmarks",
    href: "/benchmarks/show-rate",
    icon: Timer,
    badge: "Pipeline Efficiency",
    summary:
      "How sub-5-minute speed to lead and automated WhatsApp/SMS sequences transform 55% baseline show-rates into 85%+ attended calls.",
    keyNumber: "88.4%",
    keyLabel: "QualifiedLeadsX Client Avg",
  },
  {
    title: "Meta Ads CPM Benchmarks (2026)",
    keyword: "facebook ads cpm 2026",
    href: "/benchmarks/meta-ads-cpm",
    icon: TrendingUp,
    badge: "Media Buying",
    summary:
      "Quarterly CPM shifts, auction volatility patterns, and broad creative targeting impact on North American and European B2B auctions.",
    keyNumber: "$34.20",
    keyLabel: "Broad B2B Auction CPM",
  },
  {
    title: "High-Ticket Offer Close Rate Data",
    keyword: "high ticket close rate",
    href: "/benchmarks/close-rate",
    icon: Percent,
    badge: "Sales Performance",
    summary:
      "Conversion metrics for 1-call vs 2-call closing frameworks, discovery call qualification standards, and closer commission incentives.",
    keyNumber: "28.6%",
    keyLabel: "Qualified Discovery Close Rate",
  },
  {
    title: "B2B ROAS & CAC Scaling Benchmarks",
    keyword: "b2b roas benchmarks",
    href: "/blog/b2b-roas-benchmarks-qualified-appointment-generation",
    icon: PieChart,
    badge: "ROI & Economics",
    summary:
      "Return on ad spend benchmarks for client acquisition funnels balancing front-end cash collection against backend lifetime customer value.",
    keyNumber: "4.8x",
    keyLabel: "Average Blended Front-End ROAS",
  },
];

const faqs = [
  {
    q: "Where does QualifiedLeadsX source its benchmark data?",
    a: "Our benchmark datasets are aggregated directly from over $50M+ in collective Meta advertising spend managed across 125+ client accounts in 30+ high-ticket industries between 2022 and 2026. Every metric is backed by verified ad account dashboards and CRM tracking ledgers.",
  },
  {
    q: "What is an acceptable cost per booked call for a $5,000 offer?",
    a: "For a $5,000 high-ticket offer, an acquisition cost between $100 and $180 per booked call is mathematically sound. At an 85% show-up rate and a conservative 25% close rate, 5 booked calls ($750 total ad spend) generate one closed deal ($5,000 revenue), resulting in a healthy 6.6x front-end ROAS.",
  },
  {
    q: "Why do most agencies fail to reach an 85%+ show rate?",
    a: "Most agencies rely exclusively on passive calendar email confirmations that land in Spam or Promotions folders. QualifiedLeadsX pairs email with sub-5-minute automated SMS nudges, personalized WhatsApp voice memos, and calendar homework assets to push show rates past 85%.",
  },
  {
    q: "Can I cite these benchmarks in our research or publications?",
    a: "Yes. All data points are free to cite with attribution to QualifiedLeadsX™ (https://www.qualifiedleadsx.com/benchmarks).",
  },
];

export default function BenchmarksHubPage() {
  const pageUrl = `${site.url}/benchmarks`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "High Ticket Marketing Benchmarks 2026 - QualifiedLeadsX",
        description:
          "Verified 2026 high ticket marketing benchmarks: cost per lead, cost per booked call, Meta CPMs, and show rates across 30+ B2B industries.",
        isPartOf: { "@id": WEBSITE_ID },
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
      <BreadcrumbJsonLd items={[{ name: "Benchmarks", url: "/benchmarks" }]} />
      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              $50M+ Spend Analyzed · 2026 Edition
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            High Ticket Marketing Benchmarks 2026:{" "}
            <span className="text-gradient-lime">Cost Per Call, ROAS & CAC</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop guessing your unit economics. Use verified client acquisition data, Meta advertising auction costs, appointment show rates, and sales close rates aggregated from 125+ high-ticket campaigns.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What are realistic high ticket marketing benchmarks in 2026?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              In 2026, high-ticket client acquisition systems for $3,000–$25,000 offers achieve an average cost per lead of $22–$65, cost per qualified booked call of $90–$180, and appointment show rates of 82%–91% when supported by sub-5-minute speed-to-lead automation. High-ticket Meta Ads return an average of 3.8x to 6.4x front-end ROAS.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Datasets Grid */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
                PROPRIETARY DATASETS
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-fog">
                Core Acquisition Benchmarks
              </h2>
            </div>
            <p className="text-sm text-mist max-w-md">
              Explore individual data reports to evaluate how your current acquisition metrics compare against market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benchmarkReports.map((report) => {
              const Icon = report.icon;
              return (
                <div
                  key={report.href}
                  className="group relative rounded-2xl border border-line bg-ink/70 p-7 transition-all duration-300 hover:border-lime/50 hover:bg-elevated/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 border border-lime/20 text-lime">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-line bg-panel text-mist">
                        {report.badge}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="font-mono text-3xl font-bold text-lime block">
                        {report.keyNumber}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-mist">
                        {report.keyLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-fog group-hover:text-lime transition-colors">
                      {report.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-mist leading-relaxed font-sans">
                      {report.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60">
                    <Link
                      href={report.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-lime hover:text-mint group-hover:translate-x-0.5 transition-all"
                    >
                      Read Data Report
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            PRACTICAL APPLICATION
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Calculate Your Custom Acquisition Metrics
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Apply these benchmarks to your offer economics with our suite of free lead generation calculators and financial models.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Explore Free Calculators
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              See How We Hit These Metrics
              <ArrowRight className="h-4 w-4" />
            </Link>
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
        eyebrow="AUDIT YOUR NUMBERS"
        title={
          <>
            Compare your ad metrics with an expert on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

