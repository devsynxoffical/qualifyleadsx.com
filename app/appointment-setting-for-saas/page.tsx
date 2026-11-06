import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Appointment Setting for SaaS | QualifiedLeadsX",
  description:
    "Turnkey inbound SDR appointment setting for B2B SaaS. Sub-5-minute demo qualification, CRM routing, and 85%+ show rates for Account Executives.",
  alternates: {
    canonical: `${site.url}/appointment-setting-for-saas`,
  },
  openGraph: {
    title: "Appointment Setting for SaaS | QualifiedLeadsX",
    description:
      "Turnkey inbound SDR appointment setting for B2B SaaS. Sub-5-minute demo qualification and 85%+ show rates.",
    url: `${site.url}/appointment-setting-for-saas`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How does your outsourced SDR team qualify software leads?",
    a: "Our SDRs apply BANT and MEDDIC qualification frameworks, verifying tech stack compatibility, seat license count (minimum 10+ users), immediate purchasing timeline, and executive budget authority.",
  },
  {
    q: "How fast do your SDRs contact inbound demo requests?",
    a: "Within 180 seconds. Inbound software buyers testing alternatives respond best when contacted while actively researching; our sub-3-minute triage triples completed demo show rates.",
  },
  {
    q: "Can your SDRs integrate with our HubSpot or Salesforce CRM?",
    a: "Yes. Our team works directly within your HubSpot, Salesforce, or Close CRM, updating deal stages, logging call recordings, and routing qualified meetings to designated Account Executives.",
  },
  {
    q: "What is the typical ramp-up period for a SaaS setter team?",
    a: "Our SDRs complete product onboarding, competitive positioning drills, and live call calibration within 7 to 10 days of project kickoff.",
  },
];

export default function AppointmentSettingForSaasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/appointment-setting-for-saas#service`,
        name: "Inbound SDR & Appointment Setting for SaaS",
        description:
          "Turnkey inbound SDR teams and speed-to-lead qualification infrastructure booking sales-qualified software demos for B2B SaaS Account Executives.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "SaaS Sales Development",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/appointment-setting-for-saas#faq`,
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
          { name: "Appointment Setting for SaaS", url: "/appointment-setting-for-saas" },
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
              Sales Qualified Demo Pipeline
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Appointment Setting for SaaS
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Appointment setting for SaaS</strong> deploys specialized inbound SDRs who contact trial users and demo requests within 3 minutes, qualify technical fit and seat count, and book qualified product demonstrations for Account Executives. This accelerates pipeline velocity and drives show rates above 85%.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">&lt;3 Mins</div>
                <div className="text-xs text-fog mt-1">Inbound SDR Triage Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">85%</div>
                <div className="text-xs text-fog mt-1">Completed Demo Attendance</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">40–70</div>
                <div className="text-xs text-fog mt-1">Qualified Demos / Mo / Pod</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">100%</div>
                <div className="text-xs text-fog mt-1">CRM Integrated (HubSpot/SF)</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Deploy SaaS SDR Team
              </Link>
              <Link
                href="/for/saas"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                SaaS Enterprise Playbook →
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

