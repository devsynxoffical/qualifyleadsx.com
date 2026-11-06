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
  title: "Insurance Appointment Setting | QualifiedLeadsX",
  description:
    "Exclusive appointment setting for commercial and high-net-worth insurance agencies. Vetted policy reviews, sub-5-minute speed to lead, and verified show rates.",
  alternates: {
    canonical: `${site.url}/for/insurance-agencies`,
  },
  openGraph: {
    title: "Insurance Appointment Setting | QualifiedLeadsX",
    description:
      "Exclusive appointment setting for commercial and high-net-worth insurance agencies. Vetted policy reviews.",
    url: `${site.url}/for/insurance-agencies`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Are the insurance leads exclusive to our agency?",
    a: "100% yes. We do not sell shared aggregator leads. Every campaign is built inside your private Meta ad account and all appointments are placed exclusively on your producers' calendars.",
  },
  {
    q: "Which insurance lines do you generate appointments for?",
    a: "We specialize in high-value commercial P&C (contractors, trucking, cyber liability, workers' comp) and high-net-worth personal lines (Indexed Universal Life, premium annuities, key-person executive coverage).",
  },
  {
    q: "How do you verify prospect interest before setting the call?",
    a: "Our speed-to-lead agents call and text within 3 minutes of form opt-in, confirming the business policy expiration date, current premium expenditure, and dissatisfaction with current broker representation.",
  },
  {
    q: "What is the typical cost per booked commercial insurance appointment?",
    a: "Commercial insurance discovery consultations average between $160 and $320 depending on industry risk class and minimum premium threshold ($15K–$100K+ annual premiums).",
  },
];

export default function InsuranceAgenciesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/insurance-agencies#service`,
        name: "Insurance Appointment Setting Systems",
        description:
          "Exclusive lead generation and appointment setting infrastructure for commercial and high-net-worth insurance brokerages.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Insurance Appointment Setting",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/insurance-agencies#faq`,
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
          { name: "Insurance Agencies", url: "/for/insurance-agencies" },
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
              Commercial & Wealth Risk Advisory
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Insurance Appointment Setting
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Insurance appointment setting</strong> is an exclusive lead generation workflow that qualifies business owners and high-net-worth individuals on policy renewal dates and premium size before booking consultations. By replacing shared vendor leads with exclusive Meta ad funnels, agency producers maintain 78%+ show rates and close larger commercial books of business.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Exclusive Custom Campaigns</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;3 mins</div>
                <div className="text-xs text-fog mt-1">Inbound Response Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">79%</div>
                <div className="text-xs text-fog mt-1">Producer Call Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$25K+</div>
                <div className="text-xs text-fog mt-1">Target Annual Premium Volume</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Book Insurance Growth Session
              </Link>
              <Link
                href="/speed-to-lead"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Speed-to-Lead Capabilities →
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
