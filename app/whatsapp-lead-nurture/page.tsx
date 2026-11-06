import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "WhatsApp Lead Nurturing | QualifiedLeadsX",
  description:
    "Convert 42% more booked calls with automated WhatsApp lead nurturing. Sub-60s response times, 98% open rates, and 2-way setter handoff.",
  alternates: {
    canonical: `${site.url}/whatsapp-lead-nurture`,
  },
  openGraph: {
    title: "WhatsApp Lead Nurturing | QualifiedLeadsX",
    description:
      "Convert 42% more booked calls with automated WhatsApp lead nurturing. Sub-60s response times and 98% open rates.",
    url: `${site.url}/whatsapp-lead-nurture`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why is WhatsApp lead nurturing superior to email or SMS?",
    a: "WhatsApp achieves a 98% open rate and 45-60% reply rate compared to email's 18% open rate and SMS carrier filtering. In international high-ticket markets (UK, UAE, Europe, Latin America, Australia), WhatsApp is the default business communication channel.",
  },
  {
    q: "How fast does your automated WhatsApp sequence trigger?",
    a: "Sequences trigger within 45 seconds of opt-in or form submission via Meta Conversions API and CRM webhooks, securing 391% higher qualification conversions during peak buyer intent.",
  },
  {
    q: "Can human appointment setters take over WhatsApp chats?",
    a: "Yes. Our workflow uses AI for sub-60-second immediate acknowledgment, then smoothly routes warm prospects directly into a unified multi-agent inbox where trained appointment setters handle objection handling and call booking.",
  },
  {
    q: "Does WhatsApp allow marketing messages without getting banned?",
    a: "We only use official WhatsApp Business Cloud API with verified Meta Business Manager accounts, opt-in consent compliance, and approved high-engagement message templates.",
  },
];

export default function WhatsAppLeadNurturePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/whatsapp-lead-nurture#service`,
        name: "WhatsApp Lead Nurturing Systems",
        description:
          "Automated conversational WhatsApp funnels, sub-60s response workflows, and human appointment setter handoff for high-ticket offers.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Lead Nurturing & Appointment Setting",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/whatsapp-lead-nurture#faq`,
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
          { name: "WhatsApp Lead Nurture", url: "/whatsapp-lead-nurture" },
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
              Conversational Pipeline Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              WhatsApp Lead Nurturing
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>WhatsApp lead nurturing</strong> is an automated conversational follow-up system that engages inbound leads within 60 seconds on WhatsApp Business API. Delivering 98% open rates and 45%+ reply rates, it pairs AI response speed with human setter routing to increase high-ticket appointment show rates by 35% to 50%.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">98%</div>
                <div className="text-xs text-fog mt-1">Average Message Open Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;45s</div>
                <div className="text-xs text-fog mt-1">Automated Lead Engagement</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">+42%</div>
                <div className="text-xs text-fog mt-1">Booked Call Volume Lift</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">82%</div>
                <div className="text-xs text-fog mt-1">Average Call Show-Up Rate</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Deploy WhatsApp Pipeline
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

        {/* Breakdown Section */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              Why Traditional Email & SMS Nurturing Fails High-Ticket Offers
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-fog text-sm sm:text-base leading-relaxed">
              <div>
                <p className="mb-4">
                  High-ticket prospects buying \$5,000 to \$50,000 services do not wait 12 hours for email drips. Email inboxes are choked with spam filters, promotional tabs, and 18% open rates. Standard SMS faces strict 10DLC carrier blocks and low consumer trust.
                </p>
                <p>
                  WhatsApp is the most intimate direct channel on your prospect&apos;s phone. By meeting high-intent buyers in real-time right after they opt in from Meta ads or Google, you turn cold traffic into conversational relationships within seconds.
                </p>
              </div>
              <div>
                <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                  <h3 className="text-paper font-semibold mb-3">Our 4-Phase WhatsApp Protocol</h3>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li><strong className="text-lime">1. Instant Micro-Greeting:</strong> Sub-45s personalized audio/text welcoming lead by name with context.</li>
                    <li><strong className="text-lime">2. Qualification Micro-Questions:</strong> Quick 2-tap conversational checks to verify budget and timeline.</li>
                    <li><strong className="text-lime">3. Value Drop & Proof Asset:</strong> Video breakdown or 1-page case proof sent straight to chat.</li>
                    <li><strong className="text-lime">4. Setter Calendar Handoff:</strong> Seamless booking link with automatic calendar confirmation and reminder pings.</li>
                  </ul>
                </div>
              </div>
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
