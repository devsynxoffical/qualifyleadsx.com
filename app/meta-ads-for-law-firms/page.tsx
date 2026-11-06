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
  title: "Facebook Ads for Law Firms | QualifiedLeadsX",
  description:
    "Bar-compliant Facebook & Instagram ads for personal injury, commercial litigation, and estate planning attorneys. Sub-3-minute intake and signed retainers.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-law-firms`,
  },
  openGraph: {
    title: "Facebook Ads for Law Firms | QualifiedLeadsX",
    description:
      "Bar-compliant Facebook ads for personal injury and commercial law firms. Sub-3-minute intake and signed retainers.",
    url: `${site.url}/meta-ads-for-law-firms`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you keep law firm social ads fully compliant with ethics rules?",
    a: "We adhere strictly to ABA Model Rules 7.1–7.3 and state bar advertising requirements. We omit prohibited outcome guarantees, prominently display mandatory attorney advertising disclaimers, and ensure all messaging is grounded in factual legal capabilities.",
  },
  {
    q: "How does Facebook advertising compare to Google PPC for attorneys?",
    a: "Google Search clicks for competitive legal terms (like 'car accident lawyer') often cost $80 to $250+ per click. Facebook Ads disrupts potential claimants with educational consumer rights videos at an 80% lower cost per inquiry, opening a high-margin secondary intake channel.",
  },
  {
    q: "Why is sub-3-minute intake vital for retaining legal cases?",
    a: "Legal claimants typically submit inquiries on multiple firm websites simultaneously. Reaching them within 180 seconds increases signed retainer conversion by over 300% compared to delayed email follow-ups.",
  },
  {
    q: "Can this system integrate with legal practice management CRMs like Clio or Filevine?",
    a: "Yes. Inbound claimant records sync instantly to Clio, Filevine, or Lead Docket via secure webhook integrations, maintaining complete chain-of-custody documentation.",
  },
];

export default function MetaAdsForLawFirmsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-law-firms#service`,
        name: "Meta & Facebook Ads for Law Firms",
        description:
          "Bar-compliant paid social advertising campaigns and sub-3-minute legal intake concierge for personal injury and commercial law practices.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Legal Advertising Management",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-law-firms#faq`,
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
          { name: "Meta Ads for Law Firms", url: "/meta-ads-for-law-firms" },
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
              Legal Intake & High-Damages Case Marketing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Law Firms
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for law firms</strong> sign high-value legal retainers by deploying state-bar-compliant educational video ads and sub-3-minute intake triage. Costing 80% less than Google PPC legal clicks, this system qualifies claimants on liability and damages before routing to attorney calendars.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">State Bar Ethics Compliant</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;3 Mins</div>
                <div className="text-xs text-fog mt-1">Claimant Intake Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">83%</div>
                <div className="text-xs text-fog mt-1">Initial Consultation Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">3.8x</div>
                <div className="text-xs text-fog mt-1">Case Retainer Pipeline Growth</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Sign More High-Value Retainers
              </Link>
              <Link
                href="/for/law-firms"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Law Firm Practice Solutions →
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

