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
  title: "Facebook Ads for Med Spas | QualifiedLeadsX",
  description:
    "High-ticket aesthetic consultations for medical spas & plastic surgeons. Scale injectables, body contouring, and laser packages with sub-45s speed to lead.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-med-spas`,
  },
  openGraph: {
    title: "Facebook Ads for Med Spas | QualifiedLeadsX",
    description:
      "High-ticket aesthetic consultations for medical spas & plastic surgeons. Verified $639K patient revenue case study.",
    url: `${site.url}/meta-ads-for-med-spas`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why do cheap $49 Botox discount ads fail med spas?",
    a: "Heavy discounting attracts low-loyalty bargain hunters who rarely buy high-margin body contouring or laser treatments. We engineer high-ticket treatment bundle campaigns ($1,800–$4,500) focused on lasting outcomes, attracting affluent patients who rebook for years.",
  },
  {
    q: "How do you achieve 80%+ consultation show rates for med spas?",
    a: "We deploy automated sub-45-second phone and SMS response, pre-consultation treatment preparation guides, and collect a nominal $50 fully-refundable consultation deposit that filters out casual no-shows.",
  },
  {
    q: "What was the result of your verified medical spa case study?",
    a: "For a medical spa practice, our Meta ad system and speed-to-lead triage generated $639,000 in collected treatment revenue within 90 days at an average cost per qualified booked patient consultation of $52.",
  },
  {
    q: "How do you navigate Meta's healthcare ad policies for aesthetics?",
    a: "We avoid prohibited before-and-after body close-ups and personal attribute callouts. Instead, we showcase provider artistry, clinic ambiance, treatment demonstrations, and patient testimonial videos.",
  },
];

export default function MetaAdsForMedSpasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-med-spas#service`,
        name: "Meta & Facebook Ads for Medical Spas & Aesthetics",
        description:
          "High-ticket patient acquisition and sub-45-second front desk automation for medical spas, dermatologists, and aesthetic clinics.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Aesthetic Clinic Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-med-spas#faq`,
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
          { name: "Meta Ads for Med Spas", url: "/meta-ads-for-med-spas" },
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
              Aesthetic Practice & Clinic Patient Acquisition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Med Spas
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for med spas</strong> fill clinical schedules with premium aesthetic patients ($1,500–$5,000 treatment packages) by targeting affluent local women and men with provider-led outcome videos. Backed by sub-45-second front-desk automation, clinics achieve 82%+ consultation attendance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">$639K</div>
                <div className="text-xs text-fog mt-1">Verified Case Revenue Generated</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;45s</div>
                <div className="text-xs text-fog mt-1">Patient Inquiry Response Time</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82%</div>
                <div className="text-xs text-fog mt-1">Confirmed In-Clinic Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">6.1x</div>
                <div className="text-xs text-fog mt-1">Average Clinic Cash ROAS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Med Spa Practice
              </Link>
              <Link
                href="/for/med-spas"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect $639K Med Spa Case Study →
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

