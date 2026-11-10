import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "QualifiedLeadsX Alternatives & Comparison",
  description:
    "An honest comparison of QualifiedLeadsX alternatives for high-ticket lead generation: traditional agencies, cold email shops and in-house hiring.",
  alternates: {
    canonical: `${site.url}/compare/qualifiedleadsx-alternatives`,
  },
  openGraph: {
    title: "QualifiedLeadsX Alternatives & Comparison",
    description:
      "Honest comparison of QualifiedLeadsX alternatives for high-ticket lead generation. Traditional agencies vs QLX.",
    url: `${site.url}/compare/qualifiedleadsx-alternatives`,
    siteName: site.name,
    type: "article",
  },
};

const comparisonTable = [
  {
    category: "Full-Funnel Ownership",
    qlx: "Meta Ads + VSL + Setter Team + CRM",
    traditional: "Media buying only (hands off funnel/sales)",
    coldEmail: "Cold outbound email scrapes only",
    internal: "Requires hiring 4-5 full-time salaries",
  },
  {
    category: "Lead Qualification Standard",
    qlx: "Verified budget ($3K+), revenue & timeline",
    traditional: "Form fills with no conversational verification",
    coldEmail: "Unsolicited cold replies with low trust",
    internal: "Dependent on individual recruiter skill",
  },
  {
    category: "Speed to Lead Protocol",
    qlx: "Sub-5-minute human & AI engagement",
    traditional: "No speed-to-lead service provided",
    coldEmail: "Asynchronous email reply delays",
    internal: "Limited to internal team working hours",
  },
  {
    category: "Verified Track Record",
    qlx: "$150M+ client revenue generated",
    traditional: "Varies; often focused on vanity clicks",
    coldEmail: "Spam domain burn rates",
    internal: "Zero established SOPs at start",
  },
  {
    category: "Financial Risk",
    qlx: "Performance accountability & clear KPIs",
    traditional: "High fixed monthly retainers regardless of calls",
    coldEmail: "Domain reputation risk",
    internal: "High fixed overhead ($25K+/mo in payroll)",
  },
];

const faqs = [
  {
    q: "Why do high-ticket businesses choose QualifiedLeadsX over generalist ad agencies?",
    a: "Traditional ad agencies stop at sending ad traffic to an opt-in page. They don't script VSLs, engineer multi-step qualification funnels, or manage appointment setters. QualifiedLeadsX takes end-to-end responsibility from initial ad impression to qualified prospects showing up on your calendar.",
  },
  {
    q: "How does QualifiedLeadsX compare to cold email lead gen agencies?",
    a: "Cold email relies on unsolicited outbound messages that suffer from deliverability issues, spam filters, and zero brand affinity. QualifiedLeadsX builds inbound demand through paid Meta traffic, where prospects consume 15+ minutes of proof before booking, resulting in far higher close rates.",
  },
  {
    q: "When is building an in-house team better than hiring QualifiedLeadsX?",
    a: "Building in-house makes sense if you generate over $10M ARR, have a dedicated CMO, and can budget $300K+/year for media buyers, copywriters, video editors, and CRM engineers. For companies between $250K and $5M, QualifiedLeadsX deploys an enterprise-grade growth team at a fraction of the cost.",
  },
  {
    q: "What types of companies are NOT a good fit for QualifiedLeadsX?",
    a: "We do not work with low-ticket e-commerce stores, pre-revenue startups without a validated offer, or businesses with products priced below $3,000.",
  },
];

export default function QualifiedLeadsXAlternativesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/compare/qualifiedleadsx-alternatives#article`,
        headline: "QualifiedLeadsX Alternatives: The Complete Guide to High-Ticket Lead Generation Partners",
        description:
          "An objective, transparent evaluation of QualifiedLeadsX compared to traditional ad agencies, outbound cold email agencies, and internal hiring.",
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
        "@id": `${site.url}/compare/qualifiedleadsx-alternatives#faq`,
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
          { name: "QualifiedLeadsX Alternatives", url: "/compare/qualifiedleadsx-alternatives" },
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
              Market Intelligence & Evaluation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              QualifiedLeadsX Alternatives
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                When scaling high-ticket offers ($3K–$25K), the main <strong>QualifiedLeadsX alternatives</strong> are traditional PPC agencies, outbound cold email shops, and in-house growth teams. QualifiedLeadsX differs by delivering an integrated full-funnel model combining paid Meta traffic, custom VSL funnels, sub-5-minute qualification, and dedicated appointment setters under one performance framework.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Schedule Strategy Evaluation
              </Link>
              <Link
                href="/case-studies"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect 125+ Verified Cases →
              </Link>
            </div>
          </div>
        </section>

        {/* Matrix */}
        <section className="py-16 border-b border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Capability Comparison by Solution Type
            </h2>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper/5 text-paper border-b border-line">
                  <tr>
                    <th className="p-4 font-semibold">Capability</th>
                    <th className="p-4 font-semibold text-lime">QualifiedLeadsX</th>
                    <th className="p-4 font-semibold">Traditional PPC Agency</th>
                    <th className="p-4 font-semibold">Cold Email Agency</th>
                    <th className="p-4 font-semibold">Full In-House Team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/[0.02] transition">
                      <td className="p-4 font-medium text-paper">{row.category}</td>
                      <td className="p-4 text-paper font-semibold">{row.qlx}</td>
                      <td className="p-4 text-fog">{row.traditional}</td>
                      <td className="p-4 text-fog">{row.coldEmail}</td>
                      <td className="p-4 text-fog">{row.internal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ProofStack variant="full" />

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
