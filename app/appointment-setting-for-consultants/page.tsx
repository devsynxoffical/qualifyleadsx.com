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
  title: "Appointment Setting for Consultants | QualifiedLeadsX",
  description:
    "High-touch appointment setting for management & B2B consultants. Book C-suite decision-makers for $15K–$50K+ advisory engagements with 85%+ show rates.",
  alternates: {
    canonical: `${site.url}/appointment-setting-for-consultants`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Appointment Setting for Consultants | QualifiedLeadsX",
    description:
      "High-touch appointment setting for management & B2B consultants. Book C-suite decision-makers for $15K–$50K+ engagements.",
    url: `${site.url}/appointment-setting-for-consultants`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do your setters engage sophisticated enterprise executives without sounding pushy?",
    a: "Our consultant setters are senior SDRs trained in consultative peer-to-peer dialogue. They never use scripted aggressive pitches; instead, they conduct structured operational triage based on industry benchmarks and executive diagnostics.",
  },
  {
    q: "What qualification criteria are verified prior to booking the strategy call?",
    a: "We verify annual corporate revenue ($5M to $100M+), business model compatibility, current operational friction points, and confirmed attendance of key decision-makers.",
  },
  {
    q: "How many qualified consulting discovery calls are generated monthly?",
    a: "A dedicated consulting setter pod typically generates 15 to 30 high-level stakeholder discovery consultations each month.",
  },
  {
    q: "How do you protect show rates with busy corporate leaders?",
    a: "We provide an executive briefing document upon booking, send tailored calendar invites with direct Zoom details, and confirm attendance with a personalized executive email 24 hours prior.",
  },
];

export default function AppointmentSettingForConsultantsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/appointment-setting-for-consultants#service`,
        name: "Appointment Setting for Management & B2B Consultants",
        description:
          "White-glove executive appointment setting and stakeholder qualification for boutique consultancies and fractional leadership firms.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Consulting Appointment Setting",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/appointment-setting-for-consultants#faq`,
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
          { name: "Appointment Setting for Consultants", url: "/appointment-setting-for-consultants" },
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
              Executive Advisory Pipeline Concierge
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Appointment Setting for Consultants
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Appointment setting for consultants</strong> pairs consultative diagnostic triage with white-glove calendar concierge to book C-suite decision-makers for \$15,000–\$50,000+ engagements. Setters verify corporate revenue and operational bottlenecks, securing 15 to 30 executive consultations monthly at 85%+ show rates.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">15–30</div>
                <div className="text-xs text-fog mt-1">C-Suite Consultations / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$25K</div>
                <div className="text-xs text-fog mt-1">Average Contract Retainer</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">85.6%</div>
                <div className="text-xs text-fog mt-1">Executive Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Peer-to-Peer Trained SDRs</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Deploy Consultant Setters
              </Link>
              <Link
                href="/for/consultants"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Consulting Services Hub →
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

