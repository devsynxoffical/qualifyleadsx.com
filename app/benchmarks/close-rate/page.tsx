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
  title: "High Ticket Close Rate Benchmarks 2026 | QLX",
  description:
    "High-ticket close rate benchmarks for 2026. Real data comparing cold inbound vs setter-qualified calls across $3K, $10K, and $25K+ offers.",
  alternates: {
    canonical: `${site.url}/benchmarks/close-rate`,
  },
  openGraph: {
    title: "High Ticket Close Rate Benchmarks 2026 | QLX",
    description:
      "High-ticket close rate benchmarks for 2026 across $3K, $10K, and $25K+ offers from 125+ client accounts.",
    url: `${site.url}/benchmarks/close-rate`,
    siteName: site.name,
    type: "article",
  },
};

const closeRateData = [
  { tier: "$3,000 – $5,000", coldLead: "12% – 16%", setterQualified: "28% – 36%", topPerformer: "42%" },
  { tier: "$5,000 – $10,000", coldLead: "9% – 14%", setterQualified: "24% – 31%", topPerformer: "38%" },
  { tier: "$10,000 – $25,000", coldLead: "6% – 10%", setterQualified: "19% – 26%", topPerformer: "32%" },
  { tier: "$25,000+ Enterprise", coldLead: "4% – 7%", setterQualified: "15% – 22%", topPerformer: "28%" },
];

const faqs = [
  {
    q: "What is a good close rate for high-ticket sales calls?",
    a: "On pre-qualified sales calls (where budget, decision-maker status, and timeline are verified by a setter), a healthy closing rate is 22% to 28%. When taking unvetted calendar bookings, close rates drop below 10-12% due to unqualified prospects and no-shows.",
  },
  {
    q: "How does pre-call qualification increase closing percentages?",
    a: "Setter qualification filters out uncapitalized leads before they touch the closer's calendar and delivers targeted pre-call assets (VSL, case studies, proof decks). Prospects enter the call already sold on the mechanism.",
  },
  {
    q: "How many sales calls does a high-ticket closer need to take per day?",
    a: "Full-time closers perform best at 3 to 5 qualified 45-minute calls per day (15–25 calls/week). Exceeding 5 calls leads to decision fatigue, diminished empathy, and reduced closing conversion.",
  },
  {
    q: "What is the single biggest cause of low high-ticket close rates?",
    a: "The number one cause is selling on the first call to someone who has never consumed your proof content. Requiring prospects to watch a 10-minute VSL before booking increases close rates by up to 12 percentage points.",
  },
];

export default function HighTicketCloseRatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${site.url}/benchmarks/close-rate#dataset`,
        name: "High Ticket Sales Close Rate Benchmarks 2026",
        description:
          "Empirical study comparing cold calendar leads versus setter-qualified discovery calls across multiple deal sizes from $3K to $25K+.",
        creator: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/benchmarks/close-rate#faq`,
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
          { name: "Close Rate", url: "/benchmarks/close-rate" },
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
              Sales Performance Analytics
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              High Ticket Close Rate Benchmarks
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                The <strong>average high-ticket close rate for setter-qualified calls is 24% to 31%</strong> on offers between $3,000 and $10,000. In contrast, unvetted calendar bookings close at only 9% to 14%. Pre-call qualification and VSL homework double closing efficiency and save over 15 hours of closer time weekly.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/outsourced-sales-closers"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Hire Vetted Sales Closers
              </Link>
              <Link
                href="/tools/cost-per-booked-call-calculator"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Model Close Rate Economics →
              </Link>
            </div>
          </div>
        </section>

        {/* Benchmarks Table */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Close Rates by Offer Tier: Cold vs Setter-Qualified
            </h2>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper/5 text-paper border-b border-line">
                  <tr>
                    <th className="p-4 font-semibold">Offer Price Tier</th>
                    <th className="p-4 font-semibold">Unvetted Cold Leads</th>
                    <th className="p-4 font-semibold text-lime">Setter-Qualified Calls</th>
                    <th className="p-4 font-semibold">Top Decile Closers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {closeRateData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/[0.02] transition">
                      <td className="p-4 font-medium text-paper">{row.tier}</td>
                      <td className="p-4 text-fog font-mono">{row.coldLead}</td>
                      <td className="p-4 text-lime font-mono font-bold">{row.setterQualified}</td>
                      <td className="p-4 text-paper font-mono">{row.topPerformer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ProofStack variant="compact" />

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
