import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Done For You vs Done With You Lead Gen | QLX",
  description:
    "Compare Done-For-You (DFY) vs Done-With-You (DWY) lead generation. Economics, time investment, execution risk, and which model scales faster.",
  alternates: {
    canonical: `${site.url}/compare/done-for-you-vs-done-with-you-lead-generation`,
  },
  openGraph: {
    title: "Done For You vs Done With You Lead Gen | QLX",
    description:
      "Compare Done-For-You (DFY) vs Done-With-You (DWY) lead generation. Economics and execution risk.",
    url: `${site.url}/compare/done-for-you-vs-done-with-you-lead-generation`,
    siteName: site.name,
    type: "article",
  },
};

const comparisonTable = [
  {
    feature: "Founder Time Required",
    dfy: "<2 hours/week (Weekly review only)",
    dwy: "15 to 25 hours/week (Building & managing)",
  },
  {
    feature: "Campaign Launch Timeline",
    dfy: "7 to 10 days fully operational",
    dwy: "6 to 12 weeks of course material & learning",
  },
  {
    feature: "Creative & Copy Asset Production",
    dfy: "100% handled by agency team",
    dwy: "Founder must write copy and script videos",
  },
  {
    feature: "Setter & CRM Infrastructure",
    dfy: "Pre-built, connected & managed live",
    dwy: "Founder must troubleshoot Zapier/GHL errors",
  },
  {
    feature: "Performance Accountability",
    dfy: "Agency is measured on booked calls and ROAS",
    dwy: "Accountability falls solely on founder execution",
  },
  {
    feature: "Ideal Annual Revenue",
    dfy: "$250K to $10M+ businesses ready to scale",
    dwy: "Pre-revenue founders with zero budget",
  },
];

const faqs = [
  {
    q: "What is the core difference between DFY and DWY lead generation?",
    a: "Done-For-You (DFY) means an expert team builds, executes, optimizes, and manages your entire ad campaigns, funnels, and appointment setters. Done-With-You (DWY) is coaching or consulting where you are taught how to build it yourself.",
  },
  {
    q: "Why do most founders fail with DWY coaching programs?",
    a: "DWY fails because high-ticket founders are already at operational capacity delivering their service. Adding 20+ hours a week to learn media buying, funnel building, and CRM troubleshooting causes execution fatigue and unfinished campaigns.",
  },
  {
    q: "Is DFY more expensive than DWY programs?",
    a: "While DFY carries agency service retainers or performance fees, its total cost of acquisition is often lower because campaigns launch in 10 days with proven frameworks, eliminating months of wasted ad spend from amateur learning curves.",
  },
  {
    q: "Does QualifiedLeadsX offer DFY or DWY?",
    a: "QualifiedLeadsX operates exclusively as a Done-For-You (DFY) partner. We provide the media buyers, creative editors, CRM engineers, and appointment setting teams to put qualified appointments directly onto your calendar.",
  },
];

export default function DfyVsDwyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/compare/done-for-you-vs-done-with-you-lead-generation#article`,
        headline: "Done-For-You (DFY) vs Done-With-You (DWY) Lead Generation: The Definitive Comparison",
        description:
          "Analyze the trade-offs between hiring a DFY agency vs joining a DWY coaching program for scaling $3K–$25K high-ticket offers.",
        author: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/compare/done-for-you-vs-done-with-you-lead-generation#faq`,
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
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Comparisons", url: "/blog" },
          { name: "DFY vs DWY Lead Gen", url: "/compare/done-for-you-vs-done-with-you-lead-generation" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-ink min-h-screen text-fog">
        <section className="relative pt-20 pb-16 border-b border-line overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <span className="text-lime text-xs font-mono tracking-widest uppercase">
              Operating Model Analysis
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Done For You vs Done With You Lead Generation
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Done-For-You (DFY) lead generation</strong> is optimal for established businesses ($20K+/mo) because specialists handle media buying, copy, CRM tech, and setter qualification with under 2 hours of founder time weekly. <strong>Done-With-You (DWY)</strong> suits early-stage founders with more time than capital, but requires 15–25 hours per week of technical execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/lead-generation-agency"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Explore Full DFY Service
              </Link>
              <Link
                href="/tools/cac-calculator"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Model In-House vs DFY Costs →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              DFY vs DWY Evaluation Breakdown
            </h2>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper/5 text-paper border-b border-line">
                  <tr>
                    <th className="p-4 font-semibold">Factor</th>
                    <th className="p-4 font-semibold text-lime">Done-For-You (DFY Agency)</th>
                    <th className="p-4 font-semibold">Done-With-You (DWY Program)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/[0.02] transition">
                      <td className="p-4 font-medium text-paper">{row.feature}</td>
                      <td className="p-4 text-paper">{row.dfy}</td>
                      <td className="p-4 text-fog">{row.dwy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                  <h3 className="text-lg font-semibold text-paper mb-2">{f.q}</h3>
                  <p className="text-fog text-sm sm:text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
