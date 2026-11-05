import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Law Firm Lead Generation | QualifiedLeadsX",
  description:
    "High-intent case consultations for personal injury, commercial litigation, and estate planning law firms. Compliant ads and sub-3-minute client intake.",
  alternates: {
    canonical: `${site.url}/for/law-firms`,
  },
  openGraph: {
    title: "Law Firm Lead Generation | QualifiedLeadsX",
    description:
      "High-intent case consultations for personal injury, commercial litigation, and estate planning law firms.",
    url: `${site.url}/for/law-firms`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you ensure law firm ads comply with state bar advertising ethics?",
    a: "We adhere strictly to ABA Model Rules 7.1 through 7.3 and state-specific bar requirements. We avoid unauthorized guarantees, include mandatory attorney advertising disclaimers, and ensure all messaging reflects factual case capabilities without creating unjustified expectations.",
  },
  {
    q: "Which legal practice areas benefit most from your intake systems?",
    a: "Our intake engines perform best in high-damages personal injury, commercial contract litigation, estate planning/probate, employment law, and high-net-worth divorce cases.",
  },
  {
    q: "Why is sub-3-minute intake critical for law firm lead generation?",
    a: "Legal consumers facing urgent issues typically call the first firm that responds. Contacting an inquiring claimant within 3 minutes increases case retention rates by over 300% compared to firms that follow up hours later.",
  },
  {
    q: "What is the average cost per retained legal client?",
    a: "Cost per signed retainer varies by practice area: $450–$950 for estate planning packages, and $1,800–$4,200 for contested commercial litigation or qualified personal injury contingency retainers.",
  },
];

export default function LawFirmsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/law-firms#service`,
        name: "Law Firm Client Intake & Lead Generation",
        description:
          "Bar-compliant paid acquisition and sub-3-minute legal intake concierge for boutique and mid-sized law firms seeking high-damages cases.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Legal Client Acquisition",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/law-firms#faq`,
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
          { name: "Law Firms", url: "/for/law-firms" },
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
              Legal Intake & High-Damages Case Acquisition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Law Firm Lead Generation
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Law firm lead generation</strong> requires bar-compliant paid media campaigns coupled with sub-3-minute intake response times. By screening claimants on incident severity, liability, and insurance coverage before attorney handoff, our system signs 15 to 35 high-value retainers monthly while protecting attorney billable hours.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">&lt;3 mins</div>
                <div className="text-xs text-fog mt-1">Average Intake Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">100%</div>
                <div className="text-xs text-fog mt-1">State Bar Ethics Compliant</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">3.8x</div>
                <div className="text-xs text-fog mt-1">Retainer Pipeline Growth</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">84%</div>
                <div className="text-xs text-fog mt-1">Initial Consultation Show Rate</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Retain More High-Value Cases
              </Link>
              <Link
                href="/benchmarks/cost-per-lead-by-industry"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect Legal CPL Benchmarks →
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
