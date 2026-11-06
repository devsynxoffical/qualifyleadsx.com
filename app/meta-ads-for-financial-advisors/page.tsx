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
  title: "Facebook Ads for Financial Advisors | QLX",
  description:
    "FINRA & SEC compliant Facebook and Instagram ads for wealth managers and RIAs. Attract pre-retirees and HNW clients with $500K+ investable assets.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-financial-advisors`,
  },
  openGraph: {
    title: "Facebook Ads for Financial Advisors | QLX",
    description:
      "Compliant Facebook and Instagram ads for wealth managers and RIAs. Attract clients with $500K+ investable assets.",
    url: `${site.url}/meta-ads-for-financial-advisors`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you ensure ads comply with SEC Marketing Rule (Rule 206(4)-1) and FINRA?",
    a: "We adhere strictly to SEC and FINRA advertising regulations. We avoid prohibited promissory returns, feature appropriate risk disclaimers, archive all ad variations for audit compliance, and submit materials to your Chief Compliance Officer (CCO) prior to campaign launch.",
  },
  {
    q: "How do you target individuals with over $500,000 in investable assets?",
    a: "Meta does not permit direct income or net-worth targeting. Instead, we use sophisticated algorithmic self-selection: content addressing complex tax optimization, Roth conversion thresholds, 401(k) rollover strategies, and real estate liquidity events that appeal exclusively to high-net-worth investors.",
  },
  {
    q: "What is the average cost per booked financial planning consultation?",
    a: "Qualified discovery consultations with pre-retirees and HNW families average between $220 and $380, yielding substantial ROI given the recurring annual advisory fee structure (typically 1% AUM).",
  },
  {
    q: "Can this system integrate with financial CRM tools like Wealthbox or Redtail?",
    a: "Yes. Inbound inquiries sync seamlessly to Wealthbox, Redtail, or Salesforce Financial Services Cloud with automated compliance logging and appointment calendar sync.",
  },
];

export default function MetaAdsForFinancialAdvisorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-financial-advisors#service`,
        name: "Meta & Facebook Ads for Financial Advisors & Wealth Managers",
        description:
          "Compliant digital marketing and client acquisition funnels connecting fiduciary RIAs and wealth advisory firms with high-net-worth pre-retirees.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Financial Advisor Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-financial-advisors#faq`,
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
          { name: "Meta Ads for Financial Advisors", url: "/meta-ads-for-financial-advisors" },
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
              Fiduciary Wealth Management Growth
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Financial Advisors
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for financial advisors</strong> generate HNW client consultations ($500K–$5M+ AUM) through educational tax planning and retirement roadmaps that comply with SEC and FINRA rules. By engaging pre-retirees via educational VSL funnels, advisors book 15 to 25 qualified consultations monthly.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">SEC & FINRA Compliant</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$500K+</div>
                <div className="text-xs text-fog mt-1">Target Investable Asset Tier</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">85%</div>
                <div className="text-xs text-fog mt-1">Discovery Call Attendance Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$18M+</div>
                <div className="text-xs text-fog mt-1">New AUM Pipeline Added / Yr</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Grow Your Wealth Practice
              </Link>
              <Link
                href="/for/financial-advisors"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Advisory Solutions Suite →
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

