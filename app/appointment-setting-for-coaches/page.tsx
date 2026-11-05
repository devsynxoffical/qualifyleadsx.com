import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Appointment Setting for Coaches | QualifiedLeadsX",
  description:
    "Fill coaching calendars with qualified high-ticket clients ($5K–$25K). Omnichannel DM & phone setters, 2-way qualification, and 82%+ show rates.",
  alternates: {
    canonical: `${site.url}/appointment-setting-for-coaches`,
  },
  openGraph: {
    title: "Appointment Setting for Coaches | QualifiedLeadsX",
    description:
      "Fill coaching calendars with qualified high-ticket clients ($5K–$25K). Omnichannel DM & phone setters.",
    url: `${site.url}/appointment-setting-for-coaches`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do your setters handle Instagram DMs, SMS, and WhatsApp?",
    a: "Our setters work within a unified omnichannel CRM inbox. Whether a prospect comments on an ad, replies to a story, or submits a form, setters initiate conversational triage within 60 seconds to qualify budget and readiness before sending a calendar link.",
  },
  {
    q: "What qualification criteria do setters enforce for coaching leads?",
    a: "Setters verify business revenue ($100K–$1M+ annual revenue or personal savings for career coaching), primary pain point urgency, and decision-maker status. Unqualified leads receive free lead magnets rather than taking calendar time.",
  },
  {
    q: "How many qualified sales calls does an appointment setter generate per month?",
    a: "A dedicated setter managing warm paid traffic typically generates 30 to 60 qualified strategy calls per month on the coach's or closer's calendar.",
  },
  {
    q: "How do setters maintain high show rates?",
    a: "Setters send personal video or voice notes upon booking, confirm attendance 2 hours prior, and ensure the prospect has completed required pre-call VSL homework.",
  },
];

export default function AppointmentSettingForCoachesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/appointment-setting-for-coaches#service`,
        name: "Appointment Setting for High-Ticket Coaches",
        description:
          "Dedicated 2-way DM and phone appointment setters booking pre-qualified sales calls for coaches selling $5K–$25K programs.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Coaching Appointment Setting",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/appointment-setting-for-coaches#faq`,
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
          { name: "Appointment Setting for Coaches", url: "/appointment-setting-for-coaches" },
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
              Coaching Discovery Call Concierge
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Appointment Setting for Coaches
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Appointment setting for coaches</strong> embeds trained sales setters into your DM channels, SMS, and WhatsApp to qualify inbound prospects on revenue and intent before booking calls. This eliminates unqualified tire-kickers and delivers 30 to 60 high-ticket discovery calls monthly with 82%+ show rates.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">30–60</div>
                <div className="text-xs text-fog mt-1">Qualified Calls / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;60s</div>
                <div className="text-xs text-fog mt-1">DM & Inbound Response Speed</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82.4%</div>
                <div className="text-xs text-fog mt-1">Calendar Show-Up Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">28%</div>
                <div className="text-xs text-fog mt-1">Closer Closing Rate On Setter Calls</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Hire Dedicated Coaching Setters
              </Link>
              <Link
                href="/for/coaches"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Coaching Growth Systems →
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
