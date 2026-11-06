import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import { WEBSITE_ID, publisherOrg, orgRef, TIER1_MARKETS } from "@/lib/schema";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  PhoneCall,
  MessageSquare,
  Timer,
  ShieldCheck,
  Bot,
  Activity,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "AI Speed to Lead: Sub-5-Minute Appointment Setting",
  description:
    "Increase sales call booking rates by 391% with AI speed to lead. Sub-5-minute automated SMS, WhatsApp, and setter response for high-ticket funnels.",
  keywords: [
    "ai speed to lead",
    "speed to lead automation",
    "speed to lead appointment setting",
    "lead response time",
    "automated lead follow up",
    "whatsapp speed to lead",
  ],
  alternates: {
    canonical: "/speed-to-lead",
  },
  openGraph: {
    title: "AI Speed to Lead: Sub-5-Minute Appointment Setting",
    description:
      "Engage inbound high-ticket inquiries within 180 seconds. Lift appointment show rates to 88%+ with automated multi-channel speed to lead.",
    url: `${site.url}/speed-to-lead`,
    type: "website",
  },
};

const decayStages = [
  {
    time: "Under 5 Minutes",
    rate: "391% Conversion Boost",
    badge: "The Golden Window",
    desc: "Buyer intent and cognitive presence are at their mathematical peak. Automated SMS, WhatsApp, and setter calls secure immediate confirmation.",
    highlight: true,
  },
  {
    time: "10 to 30 Minutes",
    rate: "4x Probability Drop",
    badge: "Attention Dissipation",
    desc: "Prospects navigate away from your funnel, enter meetings, or check competitor options. Reach rates drop sharply.",
    highlight: false,
  },
  {
    time: "1 to 4 Hours",
    rate: "80% Lead Decay",
    badge: "Cold Lead Status",
    desc: "Leads no longer recall why they opted in. Response rates plummet to sub-15%, forcing expensive manual dial sequences.",
    highlight: false,
  },
  {
    time: "24+ Hours",
    rate: "Zero Advantage",
    badge: "Total Loss",
    desc: "Inquiries are practically cold outbound contacts. Advertising capital is burned with zero conversion leverage.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What is AI speed to lead and why does it matter?",
    a: "AI speed to lead is automated technology infrastructure that connects with inbound marketing inquiries within 180 to 300 seconds across SMS, WhatsApp, email, and live phone dispatch. Academic research proves contacting prospects within 5 minutes results in a 391% higher close probability compared to waiting 30 minutes.",
  },
  {
    q: "How does QualifiedLeadsX implement speed to lead?",
    a: "Our engine triggers multi-channel conversational sequences the moment a lead completes an opt-in or VSL qualification survey. We combine automated two-way SMS, personalized WhatsApp voice prompts, and instant calendar booking alerts routed to trained appointment setters.",
  },
  {
    q: "Does AI speed to lead sound robotic to high-ticket prospects?",
    a: "No. We do not use robotic chatbot scripts. We engineer natural, conversational direct-response prompts that mirror a high-level executive assistant confirming discovery details and offering priority calendar slots.",
  },
  {
    q: "What appointment show rate can I expect with this system?",
    a: "While industry standard show rates hover around 50%–60%, QualifiedLeadsX clients average an 88.4% show-up rate because leads are confirmed instantly while their purchase motivation is fresh.",
  },
  {
    q: "Does speed to lead integrate with my existing CRM?",
    a: "Yes. Our workflows integrate with GoHighLevel, HubSpot, Close, Salesforce, and custom webhooks, ensuring automatic contact syncing and calendar routing.",
  },
];

export default function SpeedToLeadPage() {
  const pageUrl = `${site.url}/speed-to-lead`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "AI Speed to Lead Automation",
        serviceType: "Automated Lead Qualification & Dispatch",
        description:
          "Increase sales call booking rates by 391% with AI speed to lead. Sub-5-minute automated SMS, WhatsApp, and setter response for high-ticket funnels.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "Speed to Lead Infrastructure Sprint",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
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
          { name: "Services", url: "/services" },
          { name: "Speed to Lead", url: "/speed-to-lead" },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Sub-180-Second Response Protocol
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            AI Speed to Lead: Engage Inbound Inquiries in{" "}
            <span className="text-gradient-lime">Sub-5-Minutes</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            The first 300 seconds determine whether an inbound high-ticket prospect books with you or ghosting sets in. We install automated conversational SMS, WhatsApp, and phone routing that increases qualified appointment bookings by 391%.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is AI speed to lead and why does it matter?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              AI speed to lead is automated lead-response infrastructure that engages inbound marketing inquiries within 180 to 300 seconds across SMS, WhatsApp, email, and outbound phone setters. MIT research proves that contacting an inbound lead within 5 minutes results in a 391% increase in conversion rates compared to waiting 30 minutes, drastically cutting client acquisition costs.
            </p>
          </div>
        </div>
      </section>

      {/* The 5-Minute Rule Breakdown */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              THE MATHEMATICS OF RESPONSE TIME
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Why Seconds Matter in High-Ticket Sales
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Every minute of delay after an inbound lead submits their information rapidly deteriorates contact rates, trust, and ultimate close rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {decayStages.map((stage) => (
              <div
                key={stage.time}
                className={`rounded-2xl border p-7 transition-all flex flex-col justify-between ${
                  stage.highlight
                    ? "border-lime bg-elevated/80 shadow-[0_0_30px_-5px_rgba(201,242,107,0.15)]"
                    : "border-line bg-ink/70"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4 inline-block ${
                      stage.highlight
                        ? "border-lime/40 bg-lime/10 text-lime"
                        : "border-line bg-panel text-mist"
                    }`}
                  >
                    {stage.badge}
                  </span>
                  <h3 className="text-lg font-bold text-fog mt-2 mb-1">{stage.time}</h3>
                  <span className="font-mono text-sm font-bold text-lime block mb-3">
                    {stage.rate}
                  </span>
                  <p className="text-xs sm:text-sm text-mist leading-relaxed font-sans">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            88.4% VERIFIED ATTENDANCE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Pair Speed to Lead With Automated Appointment Setting
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Fast response times convert curiosity into booked revenue. Discover how our appointment setting and CRM automation work together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment-setting"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              Explore Appointment Setting
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/benchmarks/show-rate"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              View Show Rate Benchmarks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProofStack variant="full" />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              SPEED TO LEAD FAQ
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
        eyebrow="UPGRADE YOUR RESPONSE TIME"
        title={
          <>
            Stop losing leads to delay. Install sub-5-minute response on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

