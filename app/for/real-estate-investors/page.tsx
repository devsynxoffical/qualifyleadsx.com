import type { Metadata } from "next";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";
import { DeepDive } from "@/components/sections/DeepDive";
import { realEstateInvestorsDeepDive } from "@/lib/deep-dive-content";

export const metadata: Metadata = {
  title: "Buy Motivated Seller Leads: Off-Market Real Estate Deals",
  description:
    "Stop buying recycled shared lists. Generate exclusive motivated seller leads and high-equity purchase contracts. Sub-90s triage and $32K+ average deal spreads.",
  keywords: [
    "buy motivated seller leads",
    "real estate investor leads",
    "off market property leads",
    "motivated seller leads for wholesalers",
    "direct to seller marketing",
    "real estate acquisition funnel",
  ],
  alternates: {
    canonical: `${site.url}/for/real-estate-investors`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Buy Motivated Seller Leads: Off-Market Real Estate Deals",
    description:
      "Stop buying recycled shared lists. Generate exclusive off-market motivated seller leads and high-equity contracts. Sub-90s triage and $32K+ average spreads.",
    url: `${site.url}/for/real-estate-investors`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why should real estate investors stop buying shared motivated seller leads?",
    a: "Third-party lead vendors resell the exact same 'motivated seller' lists to 10–25 competing wholesalers and flippers simultaneously. By the time you call, the distressed homeowner has been spammed with dozen aggressive offers. Our proprietary inbound acquisition engine builds your own brand-owned pipeline where 100% of motivated seller inquiries are exclusive to your acquisitions team.",
  },
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
  ...realEstateInvestorsDeepDive.faqs,
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
              Buy Motivated Seller Leads &amp; Off-Market Contracts
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                Rather than buying recycled shared lists from third-party lead brokers, we engineer a <strong>done-for-you acquisition machine to buy and generate exclusive motivated seller leads</strong> directly from Meta and paid social. Paired with sub-90-second phone triage, our system filters for high home equity, urgent timelines (probate, foreclosure, tax liens, landlord fatigue), and books sales-ready acquisition discovery calls at $180–$350 per qualified call.
              </p>
            </div>

            {/* Shared Lists vs Exclusive Acquisition Comparison */}
            <div className="my-10 rounded-2xl border border-line bg-paper/[0.02] p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-paper mb-4">
                Why Buying Shared Lists Fails vs. Proprietary Direct-to-Seller Funnels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5">
                  <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-bold mb-2">
                    Traditional &quot;Buy Leads&quot; Broker Model
                  </div>
                  <ul className="space-y-2 text-sm text-fog/80">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>Resold to 10–25 competing local wholesalers simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>85%+ phone dial fatigue; angry homeowners bombarded by calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>Compressed deal margins and race-to-the-bottom assignment fees</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-lime/30 bg-lime/[0.04] p-5">
                  <div className="text-lime font-mono text-xs uppercase tracking-wider font-bold mb-2">
                    QualifiedLeadsX™ Dedicated Pipeline
                  </div>
                  <ul className="space-y-2 text-sm text-paper">
                    <li className="flex items-start gap-2">
                      <span className="text-lime font-bold shrink-0">✓</span>
                      <span>100% exclusive inbound inquiries; zero competing investors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lime font-bold shrink-0">✓</span>
                      <span>Sub-90s automated phone &amp; SMS triage while seller is at peak intent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lime font-bold shrink-0">✓</span>
                      <span>Average wholesale assignment spread of $32,000+ per closed contract</span>
                    </li>
                  </ul>
                </div>
              </div>
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

        <DeepDive content={realEstateInvestorsDeepDive} />

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
