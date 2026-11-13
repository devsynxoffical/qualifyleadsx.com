import type { Metadata } from "next";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Meta Ads CPM Benchmarks 2026 | QualifiedLeadsX",
  description:
    "Facebook & Instagram Ads CPM benchmarks for 2026. Real cost per thousand impressions data across seasons, niches, and creative formats from $50M+ spend.",
  alternates: {
    canonical: `${site.url}/benchmarks/meta-ads-cpm`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Meta Ads CPM Benchmarks 2026 | QualifiedLeadsX",
    description:
      "Facebook & Instagram Ads CPM benchmarks for 2026 across seasons, niches, and creative formats.",
    url: `${site.url}/benchmarks/meta-ads-cpm`,
    siteName: site.name,
    type: "article",
  },
};

const monthlyCpm = [
  { quarter: "Q1 (Jan – Mar)", cpm: "$18.40 – $24.80", insight: "Post-holiday advertiser drop-off; optimal time to scale lead generation." },
  { quarter: "Q2 (Apr – Jun)", cpm: "$22.50 – $31.20", insight: "Steady conversion costs; strong B2B procurement budget deployment." },
  { quarter: "Q3 (Jul – Sep)", cpm: "$24.10 – $34.50", insight: "Summer auction dip in August, followed by sharp September surge." },
  { quarter: "Q4 (Oct – Dec)", cpm: "$36.80 – $54.20", insight: "E-commerce BFCM bidding surge drives up auction CPMs by 40-70%." },
];

const faqs = [
  {
    q: "What is the average Meta Ads CPM in 2026 for high-ticket services?",
    a: "The average CPM on Facebook and Instagram for US/UK/CA tier-1 markets ranges between $22 and $36 during Q1–Q3, spiking to $45–$55+ during Q4 holiday competition.",
  },
  {
    q: "Why do CPMs increase dramatically in November and December?",
    a: "Direct-to-consumer e-commerce brands pour hundreds of millions into Meta Ads auctions for Black Friday and Cyber Monday, congesting the auction and raising baseline ad delivery costs across all sectors.",
  },
  {
    q: "How can B2B and high-ticket coaches lower their CPMs?",
    a: "CPMs decrease when your ad creative scores high user engagement. Using high-hook-rate video assets, avoiding clickbait penalties, maintaining clean post feedback scores, and using broad Advantage+ audience targeting reduces auction penalties.",
  },
  {
    q: "Does a higher CPM always mean higher cost per booked call?",
    a: "Not necessarily. In targeted professional niches (like executive coaching or commercial B2B), a higher CPM of $45 can still generate a lower cost per acquisition if the message resonance and lead qualification rate are exceptionally high.",
  },
];

export default function MetaAdsCpmPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${site.url}/benchmarks/meta-ads-cpm#dataset`,
        name: "Meta Ads CPM Benchmarks 2026",
        description:
          "Quarterly and vertical cost per mille (CPM) benchmarks for Facebook & Instagram ad auctions based on $50M+ in empirical campaign spend.",
        creator: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/benchmarks/meta-ads-cpm#faq`,
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
          { name: "Meta Ads CPM", url: "/benchmarks/meta-ads-cpm" },
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
              Auction Pricing & Seasonality Index
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Meta Ads CPM Benchmarks 2026
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                In 2026, <strong>Meta Ads CPMs for high-ticket lead generation average $24.50 across Tier-1 markets</strong> (US, UK, Canada, Australia). Pricing fluctuates predictably from Q1 lows ($18.40) to Q4 retail auction peaks ($54.20). Broad Advantage+ targeting paired with 3-second hook testing reduces effective CPMs by 28%.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/meta-ads-agency"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Meta Ad Campaigns
              </Link>
              <Link
                href="/tools/roas-calculator"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Model Expected CPM & ROAS →
              </Link>
            </div>
          </div>
        </section>

        {/* Seasonality Breakdown */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Quarterly CPM Auction Dynamics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {monthlyCpm.map((item, idx) => (
                <div key={idx} className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-paper font-semibold text-base">{item.quarter}</h3>
                    <span className="text-lime font-mono font-bold">{item.cpm}</span>
                  </div>
                  <p className="text-fog text-sm leading-relaxed">{item.insight}</p>
                </div>
              ))}
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
