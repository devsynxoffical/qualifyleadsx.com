import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site, defaultOgImage } from "@/lib/site";
import { WEBSITE_ID, publisherOrg } from "@/lib/schema";
import {
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Filter,
  UserCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "High-Ticket Lead Scoring Template & Intake Rubric",
  description:
    "Download our verified 4-tier high-ticket lead scoring template. Filter tire-kickers, route VIP buyers, and protect your sales calendar automatically.",
  keywords: [
    "lead scoring template",
    "high ticket lead qualification",
    "b2b lead qualification rubric",
    "sales intake survey framework",
    "lead routing template",
  ],
  alternates: {
    canonical: "/tools/lead-scoring-template",
  },
  openGraph: {
    images: [defaultOgImage],
    title: "High-Ticket Lead Scoring Template & Intake Rubric",
    description:
      "Battle-tested 4-tier qualification framework to protect sales calendars and route VIP buyers.",
    url: `${site.url}/tools/lead-scoring-template`,
    type: "website",
  },
};

const tiers = [
  {
    tier: "Tier 1: VIP Enterprise Buyer",
    score: "85 – 100 Points",
    badge: "Direct Closer Route",
    criteria:
      "Doing $50K+/mo revenue, $10,000+ liquid capital allocated, immediate 14-day timeline, primary CEO/Founder decision-maker.",
    action: "Instant sub-180-second phone dispatch + calendar booked with Principal Partner.",
    highlight: true,
  },
  {
    tier: "Tier 2: Qualified Growth Client",
    score: "65 – 84 Points",
    badge: "Standard Discovery Route",
    criteria:
      "Doing $15K–$50K/mo revenue, $5,000+ investment capacity, 30-day timeline, sole or partner decision-maker.",
    action: "Standard 30-minute discovery strategy session with assigned senior sales executive.",
    highlight: false,
  },
  {
    tier: "Tier 3: Emerging Pipeline",
    score: "45 – 64 Points",
    badge: "Nurture / Mastermind Route",
    criteria:
      "Doing $5K–$15K/mo revenue, limited capital reserves, requires approval or financing support.",
    action: "Routed to 12-minute VSL training vault and automated weekly nurture sequences.",
    highlight: false,
  },
  {
    tier: "Tier 4: Disqualified / Unfunded",
    score: "Under 45 Points",
    badge: "Automated Disqualification",
    criteria:
      "Pre-revenue, zero liquid capital, seeking free consultation or job opportunities.",
    action: "Calendar access blocked. Redirected to free YouTube training and blog insights.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What is a high-ticket lead scoring template?",
    a: "A high-ticket lead scoring template is an intake qualification framework that evaluates inbound prospects across four primary variables: liquid investment capital, current operational revenue, timeline urgency, and decision-making authority. It automatically assigns point scores to route tier-1 VIP prospects to senior closers while disqualifying or nurturing low-intent tire-kickers.",
  },
  {
    q: "Why is intake friction essential for high-ticket offers?",
    a: "Friction filters for commitment. While low-ticket funnels minimize form fields to collect emails, high-ticket funnels intentionally require prospects to answer 4 to 6 strategic questions. This pre-conditions prospects to take the upcoming sales conversation seriously and ensures closers never waste time with unviable leads.",
  },
  {
    q: "How does this scoring integrate with GoHighLevel or CRMs?",
    a: "Our template uses conditional logic tags. When a prospect submits an intake survey, conditional rules sum their score and tag the contact (e.g. `VIP-Buyer` or `Disqualified-Capital`), instantly triggering custom automated workflows.",
  },
];

export default function LeadScoringTemplatePage() {
  const pageUrl = `${site.url}/tools/lead-scoring-template`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "High-Ticket Lead Scoring Template & Intake Rubric",
        description:
          "Download our verified 4-tier high-ticket lead scoring template. Filter tire-kickers, route VIP buyers, and protect your sales calendar automatically.",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: publisherOrg,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
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
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", url: "/tools" },
          { name: "Lead Scoring Template", url: "/tools/lead-scoring-template" },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Standard Operating Procedure
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            High-Ticket Lead Scoring Template &{" "}
            <span className="text-gradient-lime">Intake Qualification Rubric</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Protect your calendar and eliminate tire-kickers. Deploy our battle-tested 4-tier intake scoring rubric used across 125+ client acquisition funnels.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is a high-ticket lead scoring template?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              A high-ticket lead scoring template is an intake qualification framework that evaluates inbound prospects across four primary variables: liquid investment capital, current operational revenue, timeline urgency, and decision-making authority. It automatically assigns point scores to route tier-1 VIP prospects to senior closers while disqualifying or nurturing low-intent tire-kickers.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Tier Scoring Rubric Table */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              THE QUALIFICATION MATRIX
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              The 4-Tier Automated Routing Rubric
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              How our conditional logic surveys segment inbound leads before they ever reach your sales calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.tier}
                className={`rounded-2xl border p-8 transition-all flex flex-col justify-between ${
                  tier.highlight
                    ? "border-lime bg-elevated/80 shadow-[0_0_30px_-5px_rgba(201,242,107,0.15)]"
                    : "border-line bg-ink/70"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border border-line bg-panel text-mist">
                      {tier.badge}
                    </span>
                    <span className="font-mono text-sm font-bold text-lime">
                      {tier.score}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-fog mt-2 mb-3">{tier.tier}</h3>
                  <div className="space-y-2 text-sm text-mist leading-relaxed font-sans">
                    <p>
                      <strong className="text-fog">Qualification Criteria:</strong> {tier.criteria}
                    </p>
                    <p className="pt-2 border-t border-line/60">
                      <strong className="text-lime">Automated Action:</strong> {tier.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProofStack variant="compact" />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              LEAD SCORING FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-line bg-ink/70"
              >
                <h3 className="text-lg font-bold text-fog mb-2">{faq.q}</h3>
                <p className="text-sm text-mist leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        compact={false}
        eyebrow="INSTALL THIS INTAKE ENGINE"
        title={
          <>
            Stop taking calls with tire-kickers. Install our qualification gate on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute strategy call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

