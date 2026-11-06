import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import { WEBSITE_ID, publisherOrg } from "@/lib/schema";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  Zap,
  PhoneCall,
  Video,
  MessageSquare,
  Cpu,
  Users2,
  Target,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "High Ticket Lead Generation Services - QualifiedLeadsX",
  description:
    "Explore done-for-you high ticket lead generation services. From Meta ads to speed-to-lead appointment setting, scale past $100K+/mo with 30-50 booked calls.",
  keywords: [
    "high ticket lead generation services",
    "b2b lead generation services",
    "client acquisition services",
    "meta ads agency",
    "appointment setting service",
    "high ticket sales funnel",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "High Ticket Lead Generation Services - QualifiedLeadsX",
    description:
      "Explore done-for-you high ticket lead generation services. Meta ads, VSL funnels, and sub-5-minute AI appointment setting.",
    url: `${site.url}/services`,
    type: "website",
  },
};

const serviceOfferings = [
  {
    title: "Meta Ads Agency",
    keyword: "meta ads agency",
    href: "/meta-ads-agency",
    icon: Target,
    badge: "Core Service",
    description:
      "Algorithmic broad targeting and direct-response creative testing across Facebook and Instagram to lower client acquisition cost for $3K–$25K offers.",
    metrics: "Over $50M+ spend managed · Sub-$150 cost per booked call",
  },
  {
    title: "Appointment Setting System",
    keyword: "appointment setting service",
    href: "/appointment-setting",
    icon: PhoneCall,
    badge: "Speed to Lead",
    description:
      "Sub-5-minute multichannel automated follow-up across SMS, email, and WhatsApp combined with human setters to lock 30–50 qualified calls monthly.",
    metrics: "88%+ show-up rate · Instant qualification filtration",
  },
  {
    title: "Lead Generation Agency",
    keyword: "lead generation agency",
    href: "/lead-generation-agency",
    icon: Layers,
    badge: "Full-Funnel",
    description:
      "Full-funnel client acquisition infrastructure from high-converting VSL scripting to CRM lead routing and closing pipeline optimization.",
    metrics: "125+ verified case studies · 90-day performance commitment",
  },
  {
    title: "High-Ticket Lead Generation",
    keyword: "high ticket lead generation",
    href: "/high-ticket-lead-generation",
    icon: TrendingUp,
    badge: "Enterprise & High-Ticket",
    description:
      "Bespoke acquisition funnels built specifically for premium consultancies, high-ticket coaching programs, and $5K–$20K retainer digital agencies.",
    metrics: "Zero tire-kickers · Strict capital qualification gates",
  },
  {
    title: "Speed to Lead Automation",
    keyword: "ai speed to lead",
    href: "/speed-to-lead",
    icon: Zap,
    badge: "Sub-5-Minute",
    description:
      "AI-driven lead qualification routing that engages inbound high-intent prospects within 180 seconds when buyer readiness is at its mathematical peak.",
    metrics: "391% higher close probability within first 5 minutes",
  },
  {
    title: "VSL Funnel Architecture",
    keyword: "vsl funnel agency",
    href: "/vsl-funnels",
    icon: Video,
    badge: "Direct-Response",
    description:
      "Psychology-driven 12-minute video sales letters that dismantle objections, build undeniable authority, and pre-sell prospects before they speak to you.",
    metrics: "$150M+ in collective revenue scaled via VSL funnels",
  },
  {
    title: "WhatsApp Lead Nurturing",
    keyword: "whatsapp lead nurturing",
    href: "/whatsapp-lead-nurture",
    icon: MessageSquare,
    badge: "High Open-Rate",
    description:
      "Automated WhatsApp conversational sequences delivering 95%+ open rates, warm conversational booking prompts, and pre-call preparation materials.",
    metrics: "95%+ open rates · 40% reduction in sales call no-shows",
  },
  {
    title: "CRM & Show-Rate Automation",
    keyword: "crm automation for coaches",
    href: "/crm-automation",
    icon: Cpu,
    badge: "Infrastructure",
    description:
      "Seamless pipeline syncing across HubSpot, GoHighLevel, and custom CRMs with calendar confirmation nudges, case study drips, and intake surveys.",
    metrics: "Multi-touch SMS & email calendar reminders",
  },
  {
    title: "Outsourced Sales Closers",
    keyword: "outsourced sales closers",
    href: "/outsourced-sales-closers",
    icon: Users2,
    badge: "Closing Teams",
    description:
      "Trained commission-based remote sales closers integrated directly into your calendar to convert high-ticket qualified strategy calls into collected cash.",
    metrics: "25%–35% average high-ticket offer closing rate",
  },
  {
    title: "B2B Lead Generation",
    keyword: "b2b lead generation agency",
    href: "/b2b-lead-generation",
    icon: Sparkles,
    badge: "B2B Pipeline",
    description:
      "Scalable commercial client acquisition for technology firms, professional service practices, and enterprise service providers looking for predictable deal flow.",
    metrics: "Multi-channel targeting · B2B buying committee engagement",
  },
];

const faqs = [
  {
    q: "What are high ticket lead generation services?",
    a: "High ticket lead generation services are end-to-end client acquisition systems engineered specifically for businesses selling services priced between $3,000 and $25,000+. Unlike high-volume lead generators, high-ticket services focus on lead qualification, prospect positioning via VSLs, and rapid speed to lead so only sales-ready decision-makers reach your calendar.",
  },
  {
    q: "How does QualifiedLeadsX ensure high lead quality?",
    a: "We deploy a mandatory 4-tier qualification gate directly on the funnel. Prospects must verify liquid investment capacity ($5,000+), describe their primary business challenge, and agree to attendance criteria before picking a time on your calendar. Low-intent leads and tire-kickers are routed out automatically.",
  },
  {
    q: "What ad spend budget is required to launch?",
    a: "We recommend a minimum paid advertising budget of $2,000 to $3,000 per month dedicated to Meta Ads (Facebook & Instagram). This gives Meta's algorithmic bidding engine enough conversion data to exit the learning phase within 14 days and produce 30 to 50 qualified appointments monthly.",
  },
  {
    q: "How fast can these acquisition services be installed?",
    a: "Our done-for-you sprint spans 14 to 21 business days. During this timeframe, we script and produce your VSL funnel assets, configure CRM automation, test initial creative batches, and launch live campaigns backed by our 90-day double revenue performance milestone.",
  },
  {
    q: "What industries benefit most from your lead generation?",
    a: "Our acquisition services specialize in high-ticket coaches, digital agency owners, B2B consultants, MedSpas, commercial service contractors, and SaaS founders who close deals worth $3,000 or higher.",
  },
];

export default function ServicesHubPage() {
  const pageUrl = `${site.url}/services`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "High Ticket Lead Generation Services - QualifiedLeadsX",
        description:
          "Explore done-for-you high ticket lead generation services. From Meta ads to speed-to-lead appointment setting, scale past $100K+/mo with 30-50 booked calls.",
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
      <BreadcrumbJsonLd items={[{ name: "Services", url: "/services" }]} />
      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Done-For-You Acquisition Engine
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            High Ticket Lead Generation Services for{" "}
            <span className="text-gradient-lime">$3K–$25K Offers</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop relying on sporadic organic referrals and broken cold outreach. We install, manage, and guarantee a comprehensive client acquisition engine that fills your calendar with 30 to 50 sales-ready appointments every month.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What are high ticket lead generation services?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              High ticket lead generation services install end-to-end client acquisition engines designed specifically for offers priced between $3,000 and $25,000+. Unlike low-ticket volume marketing, our systems combine direct-response Meta media buying, 12-minute VSL funnels, conditional qualification gating, and sub-5-minute appointment setting to deliver pre-sold, qualified decision-makers directly onto your sales calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
                COMPLETE SERVICE DIRECTORY
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-fog">
                Specialized Systems We Build & Manage
              </h2>
            </div>
            <p className="text-sm text-mist max-w-md">
              Each module integrates seamlessly into your acquisition infrastructure to maximize pipeline velocity and cash collected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceOfferings.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.href}
                  className="group relative rounded-2xl border border-line bg-ink/70 p-7 transition-all duration-300 hover:border-lime/50 hover:bg-elevated/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 border border-lime/20 text-lime">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-line bg-panel text-mist">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-fog group-hover:text-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-mist leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-line/60 flex items-center justify-between">
                    <span className="font-mono text-xs text-dim">
                      {service.metrics}
                    </span>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-lime hover:text-mint group-hover:translate-x-0.5 transition-all"
                    >
                      Explore Service
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof & Authority Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            PROVEN TRACK RECORD
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Over $150M+ in Scaled Client Revenue
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Every service we deliver is tested on real capital. Review 125+ documented client case studies, live Meta Ads ad account dashboards, and verified cash collection records.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-line bg-panel/60">
              <span className="font-mono text-3xl font-bold text-lime">$150M+</span>
              <p className="text-xs uppercase font-mono text-mist mt-1">Client Revenue</p>
            </div>
            <div className="p-5 rounded-2xl border border-line bg-panel/60">
              <span className="font-mono text-3xl font-bold text-lime">125+</span>
              <p className="text-xs uppercase font-mono text-mist mt-1">Case Studies</p>
            </div>
            <div className="p-5 rounded-2xl border border-line bg-panel/60">
              <span className="font-mono text-3xl font-bold text-lime">&lt;5 Min</span>
              <p className="text-xs uppercase font-mono text-mist mt-1">Speed to Lead</p>
            </div>
            <div className="p-5 rounded-2xl border border-line bg-panel/60">
              <span className="font-mono text-3xl font-bold text-lime">90 Days</span>
              <p className="text-xs uppercase font-mono text-mist mt-1">Performance Guarantee</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              View Verified Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProofStack variant="compact" />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              GOT QUESTIONS?
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions About Our Services
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
        eyebrow="READY TO SCALE?"
        title={
          <>
            Install our high ticket acquisition system and fill your{" "}
            <em className="font-semibold not-italic text-lime">calendar this month</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

