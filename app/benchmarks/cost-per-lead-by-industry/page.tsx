import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Cost Per Lead by Industry 2026 Benchmarks | QLX",
  description:
    "Cost per lead by industry in 2026. Real CPL benchmarks across B2B SaaS, med spas, real estate, financial advising, and coaching based on $50M+ ad spend.",
  alternates: {
    canonical: `${site.url}/benchmarks/cost-per-lead-by-industry`,
  },
  openGraph: {
    title: "Cost Per Lead by Industry 2026 Benchmarks | QLX",
    description:
      "Real CPL benchmarks across B2B SaaS, med spas, real estate, and high-ticket coaching based on $50M+ spend.",
    url: `${site.url}/benchmarks/cost-per-lead-by-industry`,
    siteName: site.name,
    type: "article",
  },
};

const cplData = [
  { industry: "B2B SaaS (Demo Requests)", cpl: "$85 – $190", bookedCall: "$240 – $480", targetCac: "$1,800 – $4,200" },
  { industry: "High-Ticket Coaching", cpl: "$32 – $68", bookedCall: "$140 – $260", targetCac: "$800 – $2,100" },
  { industry: "Executive Consulting", cpl: "$45 – $95", bookedCall: "$180 – $340", targetCac: "$1,200 – $3,500" },
  { industry: "Financial Advisors / Wealth Mgmt", cpl: "$90 – $210", bookedCall: "$280 – $550", targetCac: "$2,200 – $5,000" },
  { industry: "Med Spas & Aesthetics", cpl: "$24 – $52", bookedCall: "$65 – $135", targetCac: "$250 – $650" },
  { industry: "Real Estate Wholesaling & Investing", cpl: "$75 – $180", bookedCall: "$220 – $460", targetCac: "$2,500 – $6,000" },
  { industry: "Commercial B2B Services", cpl: "$60 – $140", bookedCall: "$210 – $390", targetCac: "$1,500 – $4,000" },
  { industry: "Legal & High-Stakes Litigation", cpl: "$110 – $280", bookedCall: "$320 – $680", targetCac: "$3,000 – $8,500" },
  { industry: "Solar & High-Ticket Renewable", cpl: "$45 – $95", bookedCall: "$130 – $240", targetCac: "$900 – $2,200" },
];

const faqs = [
  {
    q: "What is considered a good cost per lead (CPL) for high-ticket services?",
    a: "For high-ticket offers ($3,000 to $25,000), a healthy CPL ranges between $35 and $95 on Meta Ads. However, CPL alone is a vanity metric; the critical indicator is Cost Per Qualified Booked Call ($140–$280).",
  },
  {
    q: "Why do financial advising and legal have much higher CPLs?",
    a: "Finance and legal face strict regulatory compliance, Special Ad Category restrictions on Meta, and higher consumer scrutiny. However, high customer lifetime value ($10,000–$50,000+) makes higher CPLs highly profitable.",
  },
  {
    q: "How can businesses lower their CPL on Meta Ads?",
    a: "The most effective levers are: direct-response video hooks calling out pain points, broad targeting with AI Advantage+, lead forms with dynamic friction questions, and interactive VSL funnels.",
  },
  {
    q: "What dataset are these 2026 CPL benchmarks derived from?",
    a: "These benchmarks are calculated from over $50,000,000 in direct client ad spend across 125+ client accounts managed by QualifiedLeadsX between 2024 and 2026.",
  },
];

export default function CplByIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${site.url}/benchmarks/cost-per-lead-by-industry#dataset`,
        name: "Cost Per Lead by Industry 2026 High-Ticket Benchmarks",
        description:
          "Empirical benchmark data measuring average Cost Per Lead (CPL) and Cost Per Booked Call across 9 high-ticket service verticals based on $50M+ Meta ad spend.",
        creator: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/benchmarks/cost-per-lead-by-industry#faq`,
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
          { name: "Benchmarks", url: "/benchmarks" },
          { name: "CPL by Industry", url: "/benchmarks/cost-per-lead-by-industry" },
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
              $50M+ Ad Spend Empirical Study
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Cost Per Lead by Industry 2026
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                In 2026, the <strong>average cost per lead (CPL) across high-ticket industries ranges from $24 to $280</strong>. Med spas experience the lowest CPL ($24–$52), high-ticket coaching averages $32–$68, B2B SaaS averages $85–$190, and financial advisory averages $90–$210 based on analysis of over $50M in Meta ad spend.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/tools/cac-calculator"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Benchmark Your CAC Now
              </Link>
              <Link
                href="/benchmarks/cost-per-booked-call"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Cost Per Booked Call Benchmarks →
              </Link>
            </div>
          </div>
        </section>

        {/* Data Table */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              2026 High-Ticket CPL & Booked Call Benchmarks
            </h2>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper/5 text-paper border-b border-line">
                  <tr>
                    <th className="p-4 font-semibold">Industry Vertical</th>
                    <th className="p-4 font-semibold text-lime">Avg Cost Per Lead (CPL)</th>
                    <th className="p-4 font-semibold">Avg Cost Per Booked Call</th>
                    <th className="p-4 font-semibold">Healthy Target CAC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {cplData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/[0.02] transition">
                      <td className="p-4 font-medium text-paper">{row.industry}</td>
                      <td className="p-4 text-lime font-mono">{row.cpl}</td>
                      <td className="p-4 text-paper font-mono">{row.bookedCall}</td>
                      <td className="p-4 text-fog font-mono">{row.targetCac}</td>
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
