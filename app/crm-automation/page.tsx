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
  title: "CRM Automation for Coaches | QualifiedLeadsX",
  description:
    "End pipeline drop-off with bespoke CRM automation for high-ticket coaches. Automated reminders, 80%+ show rates, and full attribution tracking.",
  alternates: {
    canonical: `${site.url}/crm-automation`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "CRM Automation for Coaches | QualifiedLeadsX",
    description:
      "End pipeline drop-off with bespoke CRM automation for high-ticket coaches. Automated reminders, 80%+ show rates, and tracking.",
    url: `${site.url}/crm-automation`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Which CRM platforms do you build automation for?",
    a: "We architect custom automated pipelines primarily on GoHighLevel (GHL), HubSpot, ActiveCampaign, and ClickFunnels, integrating directly with Calendly, Stripe, and Meta Conversions API.",
  },
  {
    q: "How does CRM automation improve appointment show rates?",
    a: "We deploy multi-touch omnichannel reminder workflows across SMS, email, and WhatsApp at 24 hours, 2 hours, and 15 minutes before the call, coupled with dynamic pre-call homework assets that increase show rates from 55% to 80%+.",
  },
  {
    q: "Can this automation handle lead scoring and routing?",
    a: "Yes. Inbound responses are automatically scored based on revenue, timeline, and company size. Leads scoring over your qualification threshold are immediately routed to senior closers via round-robin calendar assignment.",
  },
  {
    q: "Does your system pass offline conversion data back to Meta?",
    a: "Yes. Every deal stage change (Call Held, Deal Qualified, Closed-Won) triggers a server-side webhook back into Meta CAPI and Google Ads offline conversion tracking to train the ad algorithm on closed revenue.",
  },
];

export default function CRMAutomationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/crm-automation#service`,
        name: "CRM Automation for Coaches & Consultancies",
        description:
          "End-to-end sales pipeline automation, omnichannel show-rate workflows, and closed-loop revenue attribution for high-ticket coaching businesses.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Sales Systems & CRM Automation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/crm-automation#faq`,
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
          { name: "CRM Automation", url: "/crm-automation" },
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
              Revenue Operations & Pipeline Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              CRM Automation for Coaches
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>CRM automation for coaches</strong> is a standardized system of sales pipelines, instant lead alerts, multi-channel reminder sequences, and post-call nurture workflows. It eliminates manual lead tracking, lifts appointment show rates above 80%, and automatically synchronizes closed deals back to Meta CAPI for precise ad optimization.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82.4%</div>
                <div className="text-xs text-fog mt-1">Average Show-Up Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">0 mins</div>
                <div className="text-xs text-fog mt-1">Manual Data Entry Required</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Offline CAPI Attribution</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">+$2.1M</div>
                <div className="text-xs text-fog mt-1">Recovered Pipeline Revenue</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Automate Your Coaching CRM
              </Link>
              <Link
                href="/tools/show-rate-calculator"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Calculate Show Rate Impact →
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              The 5 Pillars of Our High-Ticket Coaching CRM Setup
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <div className="text-lime font-mono text-xs uppercase mb-2">Pillar 1</div>
                <h3 className="text-paper font-semibold mb-2">Show-Rate Guard System</h3>
                <p className="text-sm text-fog leading-relaxed">
                  Omnichannel triggers across SMS, email, and WhatsApp deliver pre-call assets, video case proofs, and personalized calendar confirmations to guarantee prospective clients show up prepared.
                </p>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <div className="text-lime font-mono text-xs uppercase mb-2">Pillar 2</div>
                <h3 className="text-paper font-semibold mb-2">Automated Lead Qualification</h3>
                <p className="text-sm text-fog leading-relaxed">
                  Real-time scoring classifies inbound applicants as Hot, Warm, or Disqualified. Hot buyers receive instant SMS callback notifications, while low-budget leads are routed to low-ticket self-serve funnels.
                </p>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <div className="text-lime font-mono text-xs uppercase mb-2">Pillar 3</div>
                <h3 className="text-paper font-semibold mb-2">Closed-Loop Ad Attribution</h3>
                <p className="text-sm text-fog leading-relaxed">
                  Never optimize Meta ads on cheap lead volume. When your sales closer moves a pipeline deal to &apos;Closed-Won&apos;, server-side webhooks push verified cash revenue back to Meta Ads Manager.
                </p>
              </div>
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
