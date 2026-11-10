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
  title: "Appointment Setting for Agencies | QualifiedLeadsX",
  description:
    "Scale agency retainers ($3K–$15K/mo) with dedicated appointment setters. Sub-5-minute speed to lead, qualified discovery calls and 82%+ show rates.",
  alternates: {
    canonical: `${site.url}/appointment-setting-for-agencies`,
  },
  openGraph: {
    title: "Appointment Setting for Agencies | QualifiedLeadsX",
    description:
      "Scale agency retainers ($3K–$15K/mo) with dedicated appointment setters. Sub-5-minute speed to lead.",
    url: `${site.url}/appointment-setting-for-agencies`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do your setters qualify marketing agency prospects?",
    a: "Our setters ask mandatory qualification questions regarding monthly advertising budget (minimum $5K/mo spend), current customer acquisition bottlenecks, and decision-maker status before booking calls.",
  },
  {
    q: "How many qualified calls can an agency expect per month?",
    a: "An agency running optimized Meta ad campaigns typically books 25 to 50 qualified discovery consultations per month with our embedded setter team.",
  },
  {
    q: "Do you handle inbound speed to lead across weekends?",
    a: "Yes. Our multi-agent coverage operates 7 days a week, ensuring inbound leads received on Friday evening or Sunday morning are engaged within 5 minutes.",
  },
  {
    q: "How do setters prevent low-budget businesses from wasting agency time?",
    a: "Leads that do not meet your revenue or budget thresholds are routed to automated email nurture or low-ticket resources, protecting agency executive time for qualified deals.",
  },
];

export default function AppointmentSettingForAgenciesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/appointment-setting-for-agencies#service`,
        name: "Appointment Setting for Marketing & Creative Agencies",
        description:
          "Turnkey appointment setting teams and CRM qualification infrastructure for digital agencies selling high-ticket monthly retainers.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Agency Appointment Setting",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/appointment-setting-for-agencies#faq`,
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
          { name: "Appointment Setting for Agencies", url: "/appointment-setting-for-agencies" },
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
              Agency Retainer Pipeline Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Appointment Setting for Agencies
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Appointment setting for agencies</strong> places trained sales setters into your CRM to engage inbound leads within 5 minutes, verify monthly marketing budgets ($5K+/mo), and book 25 to 50 qualified discovery calls monthly. This protects founder billable time and lifts calendar show rates to 82%+.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">25–50</div>
                <div className="text-xs text-fog mt-1">Qualified Retainer Calls / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;5 Mins</div>
                <div className="text-xs text-fog mt-1">Inbound Response Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82%</div>
                <div className="text-xs text-fog mt-1">Agency Calendar Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$6.5K/mo</div>
                <div className="text-xs text-fog mt-1">Average Closed Retainer</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Deploy Agency Setters
              </Link>
              <Link
                href="/for/agencies"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Agency Growth Solutions →
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

