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
  title: "Real Estate Investor Leads | QualifiedLeadsX",
  description:
    "High-equity off-market real estate investor leads and motivated seller contracts. Hyper-targeted Meta ads, instant phone triage, and verified deal spreads.",
  alternates: {
    canonical: `${site.url}/for/real-estate-investors`,
  },
  openGraph: {
    title: "Real Estate Investor Leads | QualifiedLeadsX",
    description:
      "Off-market real estate investor leads and motivated seller contracts. Hyper-targeted Meta ads and instant phone triage.",
    url: `${site.url}/for/real-estate-investors`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you generate motivated seller leads on Meta without getting flagged?",
    a: "Meta classifies housing under Housing Special Ad Category (HEC). We comply fully by using compliant copy focusing on speed, cash convenience, and solving distressed situations (probate, deferred maintenance, landlord fatigue) paired with algorithmic audience self-selection.",
  },
  {
    q: "What is the average cost per off-market contract generated?",
    a: "Across our investor clients, cost per signed off-market purchase agreement ranges from $1,800 to $4,500, yielding average assignment fees or equity spreads of $25,000 to $65,000+.",
  },
  {
    q: "How quickly do your setters contact inbound property inquiries?",
    a: "Within 90 seconds. Distressed homeowners frequently fill out forms on multiple sites; contacting them while they are still holding their smartphone locks in the exclusive consultation before competitors call.",
  },
  {
    q: "Do you filter for property condition and equity?",
    a: "Yes. Our multi-step qualifying funnel captures mortgage status, approximate asking price, repair needs, and timeline to close (under 30 days vs 90+ days) so acquisitions managers focus exclusively on high-margin deals.",
  },
];

export default function RealEstateInvestorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/real-estate-investors#service`,
        name: "Lead Generation for Real Estate Investors & Wholesalers",
        description:
          "Targeted off-market motivated seller lead generation and sub-90-second phone triage for real estate private equity firms, wholesalers, and flippers.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Real Estate Investor Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/real-estate-investors#faq`,
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
          { name: "Industries", url: "/for" },
          { name: "Real Estate Investors", url: "/for/real-estate-investors" },
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
              Off-Market Acquisitions & Private Equity
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Real Estate Investor Leads
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                To generate <strong>off-market real estate investor leads and motivated seller contracts</strong>, we deploy compliant Meta ad funnels paired with sub-90-second phone triage. This filters for high equity, urgent timelines (probate, foreclosure, major repairs), and books qualified acquisition calls at $180–$350 per call.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">&lt;90s</div>
                <div className="text-xs text-fog mt-1">Lead Response Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$32K</div>
                <div className="text-xs text-fog mt-1">Average Gross Deal Spread</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">HEC Policy Compliant Ads</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">6.4x</div>
                <div className="text-xs text-fog mt-1">Acquisition ROI Multiple</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Off-Market Acquisitions
              </Link>
              <Link
                href="/benchmarks/cost-per-lead-by-industry"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect Real Estate CPL Data →
              </Link>
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
