import type { Metadata } from "next";
import { PageByline } from "@/components/seo/PageByline";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";
import { DeepDive } from "@/components/sections/DeepDive";
import { setterVsVaDeepDive } from "@/lib/deep-dive-content";

export const metadata: Metadata = {
  title: "Appointment Setter vs Virtual Assistant (VA): Which to Hire",
  description:
    "Appointment setter vs virtual assistant (VA): compare conversion rates, compensation, qualification skills, and sales impact for high-ticket offers.",
  alternates: {
    canonical: `${site.url}/compare/appointment-setter-vs-va`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Appointment Setter vs Virtual Assistant (VA): Which to Hire",
    description:
      "Appointment setter vs virtual assistant: compare conversion rates, compensation, and sales impact.",
    url: `${site.url}/compare/appointment-setter-vs-va`,
    siteName: site.name,
    type: "article",
  },
};

const comparisonTable = [
  {
    feature: "Primary Mission",
    setter: "Convert conversations into qualified sales calls",
    va: "Execute administrative and repetitive back-office tasks",
  },
  {
    feature: "Skillset Focus",
    setter: "Objection handling, consultative triage, emotional tone",
    va: "Data entry, inbox sorting, calendar scheduling",
  },
  {
    feature: "Compensation Model",
    setter: "Base hourly + performance commission per qualified call",
    va: "Fixed flat hourly rate ($5 to $12/hr)",
  },
  {
    feature: "Show-Up Rate Impact",
    setter: "High (pre-frames calls, audits applications, sends voice notes)",
    va: "Low to neutral (sends generic calendar link only)",
  },
  {
    feature: "Conversation Handling",
    setter: "2-way dynamic messaging (phone, WhatsApp, IG DMs)",
    va: "Static script copy-paste with minimal objection triage",
  },
];

const faqs = [
  {
    q: "Why does hiring a cheap VA to set appointments usually fail?",
    a: "Virtual assistants are administrative generalists, not sales professionals. When an inbound prospect raises hesitation around pricing or timing, a VA copies and pastes standard responses, causing warm buyers to ghost. Dedicated setters understand psychological pacing and consultative triage.",
  },
  {
    q: "What is the typical conversion rate difference between a setter and a VA?",
    a: "Trained appointment setters convert inbound opt-ins to booked qualified calls at 8% to 15%, while generalist VAs convert at only 2% to 4%. Setters also yield 80%+ show rates through custom pre-call engagement.",
  },
  {
    q: "How should an appointment setter be paid?",
    a: "The most effective structure is a modest base hourly rate ($1,000–$2,000/month or $8–$15/hr) plus a $50–$100 bonus for each qualified appointment that actually shows up, aligning incentives with revenue.",
  },
  {
    q: "Can QualifiedLeadsX place and manage appointment setters for us?",
    a: "Yes. QualifiedLeadsX provides fully trained, vetted, and supervised appointment setters embedded into your CRM, managing all speed-to-lead and DM triage without founder management headaches.",
  },
  ...setterVsVaDeepDive.faqs,
];

export default function AppointmentSetterVsVaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/compare/appointment-setter-vs-va#article`,
        headline: "Appointment Setter vs Virtual Assistant (VA): High-Ticket Revenue Comparison",
        description:
          "Detailed operational breakdown of appointment setters versus virtual assistants for booking high-ticket qualified sales calls.",
        author: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/compare/appointment-setter-vs-va#faq`,
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
          { name: "Comparisons", url: "/blog" },
          { name: "Setter vs VA", url: "/compare/appointment-setter-vs-va" },
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
              Sales Team Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Appointment Setter vs Virtual Assistant
            </h1>
            <PageByline path={"/compare/appointment-setter-vs-va"} className="mb-6" />

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                An <strong>appointment setter is a specialized sales professional</strong> trained in consultative qualification, objection handling, and speed-to-lead triage to book sales calls. A <strong>virtual assistant (VA) is an administrative support worker</strong> who executes repetitive tasks. For high-ticket offers, setters convert 3x more calls and protect calendar quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/appointment-setting"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Explore Appointment Setting Systems
              </Link>
              <Link
                href="/speed-to-lead"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Speed-to-Lead Workflows →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Direct Role Comparison Matrix
            </h2>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper/5 text-paper border-b border-line">
                  <tr>
                    <th className="p-4 font-semibold">Evaluation Criteria</th>
                    <th className="p-4 font-semibold text-lime">Appointment Setter</th>
                    <th className="p-4 font-semibold">Virtual Assistant (VA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/[0.02] transition">
                      <td className="p-4 font-medium text-paper">{row.feature}</td>
                      <td className="p-4 text-paper">{row.setter}</td>
                      <td className="p-4 text-fog">{row.va}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <DeepDive content={setterVsVaDeepDive} />

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
