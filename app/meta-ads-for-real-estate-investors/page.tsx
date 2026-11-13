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
import { realEstateMetaDeepDive } from "@/lib/deep-dive-content";

export const metadata: Metadata = {
  title: "Facebook Ads for Real Estate Investors: Seller Leads",
  description:
    "Direct-to-seller Facebook ads for real estate wholesalers and flippers. Compliant HEC campaigns, sub-90s triage and off-market purchase contracts.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-real-estate-investors`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Facebook Ads for Real Estate Investors: Seller Leads",
    description:
      "Direct-to-seller Facebook ads for real estate wholesalers and flippers. Compliant HEC campaigns.",
    url: `${site.url}/meta-ads-for-real-estate-investors`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you navigate Meta's Housing Special Ad Category (HEC)?",
    a: "Meta restricts age, gender, and zip code targeting for housing ads. We succeed under HEC by building creative assets with clear self-selecting hooks (probate, inherited homes, major foundation issues, tax liens) so the algorithm finds distressed sellers naturally.",
  },
  {
    q: "How does Facebook Ads compare to cold calling and direct mail for motivated sellers?",
    a: "Direct mail response rates have dropped below 0.5% and cold calling faces severe carrier spam flags. Facebook Ads generates inbound sellers who raise their hand voluntarily, resulting in 4x higher contract closing rates.",
  },
  {
    q: "What is the average cost per signed purchase agreement?",
    a: "Across our investor clients, cost per signed contract averages $1,800 to $3,800, generating average assignment fees or equity spreads of $25,000 to $60,000+ per deal.",
  },
  {
    q: "How quickly do your setters call inbound seller leads?",
    a: "Within 90 seconds. Sellers looking for fast cash often request quotes from multiple investors; our sub-90-second speed-to-lead locks in the contract before competitors even see the notification.",
  },
  ...realEstateMetaDeepDive.faqs,
];

export default function MetaAdsForRealEstateInvestorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-real-estate-investors#service`,
        name: "Meta & Facebook Ads for Real Estate Wholesalers & Investors",
        description:
          "Compliant HEC direct-to-seller Facebook advertising campaigns and sub-90-second phone triage for residential real estate acquisitions teams.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Real Estate Seller Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-real-estate-investors#faq`,
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
          { name: "Services", url: "/services" },
          { name: "Meta Ads for Real Estate Investors", url: "/meta-ads-for-real-estate-investors" },
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
              Off-Market Motivated Seller Acquisitions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Real Estate Investors
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for real estate investors</strong> acquire motivated off-market seller contracts by deploying compliant Housing Special Ad Category (HEC) creative with algorithmic self-selection. Paired with sub-90-second phone intake, investors secure purchase agreements at \$1,800–\$3,800 per deal.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">&lt;90s</div>
                <div className="text-xs text-fog mt-1">Inbound Seller Contact Time</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$32K</div>
                <div className="text-xs text-fog mt-1">Average Gross Deal Spread</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Meta HEC Policy Compliant</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">6.4x</div>
                <div className="text-xs text-fog mt-1">Acquisitions ROI Multiple</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Off-Market Contracts
              </Link>
              <Link
                href="/for/real-estate-investors"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Investor Solutions Architecture →
              </Link>
            </div>
          </div>
        </section>

        <DeepDive content={realEstateMetaDeepDive} />

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

