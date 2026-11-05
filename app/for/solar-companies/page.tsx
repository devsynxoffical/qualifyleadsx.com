import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Solar Appointment Setting | QualifiedLeadsX",
  description:
    "Exclusive qualified solar appointments with verified homeowners. Credit-checked ($650+ FICO), electric bill qualified ($150+/mo), with 80%+ sit rates.",
  alternates: {
    canonical: `${site.url}/for/solar-companies`,
  },
  openGraph: {
    title: "Solar Appointment Setting | QualifiedLeadsX",
    description:
      "Exclusive qualified solar appointments with verified homeowners. Credit-checked ($650+ FICO) and electric bill qualified.",
    url: `${site.url}/for/solar-companies`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you pre-qualify solar prospects before booking appointments?",
    a: "Every homeowner is screened on three mandatory criteria: single-family homeownership (verified via county records API), average electric bill exceeding $150/month, and estimated credit score of 650+ for PPA/loan financing approval.",
  },
  {
    q: "Do you use misleading 'Free Solar / Government Handout' ads?",
    a: "Never. Misleading bait ads attract low-income renters, ruin brand reputation, and produce 20% sit rates. We market truthful utility bill reduction, inflation hedges, and net metering savings to attract creditworthy, proud homeowners.",
  },
  {
    q: "What is your average appointment sit rate for solar sales reps?",
    a: "Our setter-confirmed sit rate averages 76% to 82%, supported by pre-appointment satellite roof layout photos and automated 2-hour dispatch confirmation calls.",
  },
  {
    q: "What is the typical cost per qualified solar sit?",
    a: "Depending on utility territory and net metering policy (NEM 3.0 vs 1-to-1 credit states), cost per qualified sit-down ranges from $120 to $220.",
  },
];

export default function SolarCompaniesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/solar-companies#service`,
        name: "Residential Solar Appointment Setting",
        description:
          "Exclusive homeowner appointment generation for residential solar EPCs, dealers, and installation teams across tier-1 utility markets.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Solar Appointment Setting",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/solar-companies#faq`,
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
          { name: "Solar Companies", url: "/for/solar-companies" },
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
              Residential Clean Energy Sales Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Solar Appointment Setting
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Solar appointment setting</strong> pairs honest utility rate hedge advertising with strict qualification (credit 650+, electric bill \$150+/mo, single-family homeowner) before booking in-home or virtual consultations. This eliminates wasted rep drive-time and maintains sit rates above 78%.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">79.4%</div>
                <div className="text-xs text-fog mt-1">Confirmed Sit Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$150+/mo</div>
                <div className="text-xs text-fog mt-1">Min Electric Bill Filter</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">650+</div>
                <div className="text-xs text-fog mt-1">Homeowner FICO Pre-Check</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Exclusive To Your Territory</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Solar Sales Team
              </Link>
              <Link
                href="/appointment-setting"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Appointment Setting Infrastructure →
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
