import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Facebook Ads for SaaS | QualifiedLeadsX",
  description:
    "Scale B2B SaaS demo requests with targeted Facebook & Instagram ads. Product-led video walkthroughs, qualification forms, and sub-$240 completed demos.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-saas`,
  },
  openGraph: {
    title: "Facebook Ads for SaaS | QualifiedLeadsX",
    description:
      "Scale B2B SaaS demo requests with targeted Facebook & Instagram ads. Sub-$240 completed demos.",
    url: `${site.url}/meta-ads-for-saas`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Can B2B software companies really scale on Meta vs LinkedIn?",
    a: "Yes. Meta Ads delivers 60% lower CPMs ($25 vs $75+) than LinkedIn, allowing SaaS brands to test 5x more product-led video hooks and reach technical founders and VP buyers during personal mobile downtime.",
  },
  {
    q: "How do you filter out low-budget freelancers and students?",
    a: "Our interactive demo booking funnel requires business email validation, company employee headcount selection (minimum 10+ employees), and CRM role confirmation before displaying calendar slots.",
  },
  {
    q: "What ad creative works best for B2B SaaS on Facebook?",
    a: "High-contrast UI screen capture videos highlighting a specific workflow problem solved in under 30 seconds consistently outperform generic brand lifestyle ads.",
  },
  {
    q: "What is your average cost per completed SaaS demo?",
    a: "Completed qualified product demos range from $180 to $280 for mid-market SaaS ($5K–$25K ACV), achieving payback periods within 3 to 6 months.",
  },
];

export default function MetaAdsForSaasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-saas#service`,
        name: "Meta & Facebook Ads for B2B SaaS Companies",
        description:
          "Performance paid social advertising and qualified demo request funnels for enterprise and mid-market B2B software companies.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "SaaS Paid Social Management",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-saas#faq`,
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
          { name: "Meta Ads for SaaS", url: "/meta-ads-for-saas" },
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
              B2B Software Demo Pipeline
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for SaaS
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for SaaS</strong> generate qualified software demo requests by deploying product-led UI walkthrough videos and business-email-verified booking funnels. Operating at 60% lower CPMs than LinkedIn, this engine books 30 to 60 sales-qualified demos monthly at $180–$280 per completed demo.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">30–60</div>
                <div className="text-xs text-fog mt-1">Qualified Demos / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$215</div>
                <div className="text-xs text-fog mt-1">Avg Cost Per Completed Demo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">84%</div>
                <div className="text-xs text-fog mt-1">Demo Show-Up Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;5 Mins</div>
                <div className="text-xs text-fog mt-1">Inbound SDR Triage Speed</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your SaaS Demos
              </Link>
              <Link
                href="/for/saas"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                SaaS Growth Playbook →
              </Link>
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
