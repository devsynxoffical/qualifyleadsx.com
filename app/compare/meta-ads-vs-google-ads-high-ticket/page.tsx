import type { Metadata } from "next";
import { PageByline } from "@/components/seo/PageByline";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Meta Ads vs Google Ads for High-Ticket Offers",
  description:
    "Meta Ads vs Google Ads for coaches & consultants. Compare CAC, intent vs disruption, volume, and how to scale $5K+ offers in 2026.",
  alternates: {
    canonical: `${site.url}/compare/meta-ads-vs-google-ads-high-ticket`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Meta Ads vs Google Ads for High-Ticket Offers",
    description:
      "Meta Ads vs Google Ads for coaches & consultants. Compare CAC, intent vs disruption, and volume.",
    url: `${site.url}/compare/meta-ads-vs-google-ads-high-ticket`,
    siteName: site.name,
    type: "article",
  },
};

const comparisonTable = [
  {
    feature: "Audience Mindset",
    meta: "Passive / Problem-Aware (Disruption)",
    google: "Active High-Intent (Search Demand)",
  },
  {
    feature: "Cost Per Booked Call",
    meta: "$140 – $280 average",
    google: "$220 – $480 average (higher CPCs)",
  },
  {
    feature: "Scale Potential",
    meta: "Virtually uncapped with broad creative",
    google: "Capped by monthly search volume",
  },
  {
    feature: "Creative Format",
    meta: "Direct-response video, VSL, visual proof",
    google: "Search text ads, Performance Max",
  },
  {
    feature: "Speed to Validation",
    meta: "3 to 7 days with Advantage+ bidding",
    google: "14 to 30 days due to search intent ramp",
  },
  {
    feature: "Best Offer Alignment",
    meta: "Coaching, mastermind, B2B consulting",
    google: "Emergency legal, urgent software search",
  },
];

const faqs = [
  {
    q: "Which platform provides cheaper booked calls: Meta or Google?",
    a: "Meta Ads typically delivers booked calls 30% to 45% cheaper ($140–$280) compared to Google Search ($220–$480) for high-ticket coaching and consulting. Google CPCs in finance, legal, and business consulting often exceed $25–$65 per click.",
  },
  {
    q: "When should a high-ticket business choose Google Ads over Meta?",
    a: "Choose Google Ads when your market has active search queries with commercial urgency (e.g., 'HIPAA compliance audit service' or 'tax litigation attorney'). If people aren't searching for your specific category name, Meta Ads creates demand faster.",
  },
  {
    q: "What is the optimal hybrid strategy using both channels?",
    a: "Use Meta Ads (Facebook & Instagram) to generate mass problem awareness and initial opt-ins via VSLs, then capture high-intent brand search queries and execute YouTube retargeting through Google Ads.",
  },
  {
    q: "How does creative testing differ between Meta and Google?",
    a: "Meta requires continuous creative iteration (3-5 fresh UGC/founder-led video concepts weekly) to combat ad fatigue, whereas Google Search prioritizes headline testing, negative keywords, and landing page quality score.",
  },
  {
    q: "Can I start with Meta ads and add Google later?",
    a: "Yes, and for most high-ticket offers that is the usual order. Meta creates demand from people who match your buyer but are not searching yet, which is where most volume is. Once you know which offer and message convert, Google search ads can capture people actively looking for the service.",
  },
];

export default function MetaVsGoogleAdsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/compare/meta-ads-vs-google-ads-high-ticket#article`,
        headline: "Meta Ads vs Google Ads for High-Ticket Offers (2026 Comparison)",
        description:
          "In-depth breakdown of Meta Ads versus Google Ads for high-ticket coaches, consultants, and agencies. Benchmarks, CAC, intent differences, and hybrid tactics.",
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
        "@id": `${site.url}/compare/meta-ads-vs-google-ads-high-ticket#faq`,
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
          { name: "Meta Ads vs Google Ads", url: "/compare/meta-ads-vs-google-ads-high-ticket" },
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
              Paid Traffic Architecture Breakdown
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Meta Ads vs Google Ads for High-Ticket
            </h1>
            <PageByline path={"/compare/meta-ads-vs-google-ads-high-ticket"} className="mb-6" />

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                For high-ticket offers ($3K–$25K), <strong>Meta Ads outperforms Google Ads in scale and cost per booked call</strong> ($140–$280 on Meta vs $220–$480 on Google). While Google captures existing search intent, Meta generates new demand through visual proof and VSL funnels, allowing businesses to scale predictably without waiting for search queries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/meta-ads-agency"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Explore Meta Ads Management
              </Link>
              <Link
                href="/tools/roas-calculator"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Model Your Channel ROAS →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Head-to-Head Comparison Matrix
            </h2>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper/5 text-paper border-b border-line">
                  <tr>
                    <th className="p-4 font-semibold">Evaluation Metric</th>
                    <th className="p-4 font-semibold text-lime">Meta Ads (Facebook & IG)</th>
                    <th className="p-4 font-semibold">Google Ads (Search & PMax)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/[0.02] transition">
                      <td className="p-4 font-medium text-paper">{row.feature}</td>
                      <td className="p-4 text-paper">{row.meta}</td>
                      <td className="p-4 text-fog">{row.google}</td>
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
