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
  Target,
  ShieldCheck,
  Zap,
  PhoneCall,
  Video,
  DollarSign,
  Filter,
} from "lucide-react";

export const metadata: Metadata = {
  title: "High Ticket Lead Generation for $3K–$25K Offers",
  description:
    "Done-for-you high ticket lead generation for consultants, coaches, and agencies. Get 30–50 pre-sold, qualified sales calls monthly with verified proof.",
  keywords: [
    "high ticket lead generation",
    "high ticket client acquisition",
    "high ticket sales funnel",
    "b2b high ticket lead generation",
    "lead qualification funnel",
    "meta ads for high ticket",
  ],
  alternates: {
    canonical: "/high-ticket-lead-generation",
  },
  openGraph: {
    title: "High Ticket Lead Generation for $3K–$25K Offers",
    description:
      "Done-for-you high ticket lead generation for consultants, coaches, and agencies. 30–50 qualified calls monthly.",
    url: `${site.url}/high-ticket-lead-generation`,
    type: "website",
  },
};

const pillars = [
  {
    icon: Video,
    title: "12-Minute Pre-Selling VSL Funnel",
    description:
      "High-ticket prospects do not buy from cold forms or blind calendar links. We engineer concise Video Sales Letters that deconstruct their bottleneck, establish category authority, and pre-sell your offer mechanism before the call.",
  },
  {
    icon: Filter,
    title: "Multi-Tier Capital Qualification Gate",
    description:
      "We install strict conditional logic surveys requiring prospects to confirm liquid capital ($5,000+), operational business stage, and attendance criteria. Unqualified tire-kickers are routed away automatically.",
  },
  {
    icon: Target,
    title: "Algorithmic Broad Meta Media Buying",
    description:
      "Instead of wasting ad budget on saturated, narrow interest groups, our creative-as-targeting architecture uses direct-response video hooks on Meta to find high-net-worth buyers at low auction CPMs.",
  },
  {
    icon: PhoneCall,
    title: "Sub-5-Minute Speed to Lead Routing",
    description:
      "The second an inquiry qualifies, automated SMS, WhatsApp, and phone appointment setters contact them within 180 seconds, lifting baseline calendar attendance rates to 85%+.",
  },
];

const faqs = [
  {
    q: "What defines high ticket lead generation?",
    a: "High ticket lead generation is client acquisition engineered specifically for offers priced between $3,000 and $25,000+. Unlike mass-volume lead gen, it prioritizes prospect qualification, positioning authority, and pre-call conviction so sales teams only speak with ready-to-invest decision-makers.",
  },
  {
    q: "Why do low-ticket lead generation tactics fail for high-ticket offers?",
    a: "Low-ticket tactics rely on instant lead forms and impulse buying triggers that generate unvetted names and emails. High-ticket purchases involve considered risk and capital commitment; they require an educational asset like a 12-minute VSL to build trust before an appointment is booked.",
  },
  {
    q: "What is an acceptable cost per booked call for a $5,000 high-ticket offer?",
    a: "In 2026, an acquisition cost between $100 and $180 per qualified booked call is typical. At an 85% show-up rate and a 25% close rate, you close one client every 5 booked calls ($750 total media spend), resulting in an exceptional 6.6x front-end ROAS.",
  },
  {
    q: "Do you guarantee high-ticket client acquisition results?",
    a: "Yes. QualifiedLeadsX provides a written 90-day double revenue performance milestone. If we fail to deliver agreed qualified pipeline targets, we continue operating your campaigns at zero management fee until we do.",
  },
  {
    q: "How many qualified calls can my team handle monthly?",
    a: "Our scalable infrastructure is calibrated to your sales capacity, typically delivering between 30 and 50 qualified appointments per month per closer.",
  },
];

export default function HighTicketLeadGenPage() {
  const pageUrl = `${site.url}/high-ticket-lead-generation`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "High Ticket Lead Generation System",
        serviceType: "High Ticket Client Acquisition",
        description:
          "Done-for-you high ticket lead generation for consultants, coaches, and agencies. Get 30–50 pre-sold, qualified sales calls monthly with verified proof.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "High Ticket Acquisition Sprint",
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
          { name: "High Ticket Lead Generation", url: "/high-ticket-lead-generation" },
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
              Premium Deal Flow Architecture
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            High Ticket Lead Generation for{" "}
            <span className="text-gradient-lime">$3,000 to $25,000+ Offers</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop speaking with tire-kickers who can&apos;t afford your services. We install an end-to-end client acquisition engine that pre-sells, qualifies, and books 30 to 50 ready-to-invest prospects directly onto your calendar.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is high ticket lead generation?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              High ticket lead generation is client acquisition engineered specifically for offers priced between $3,000 and $25,000+. Unlike mass-volume lead gen, it prioritizes prospect qualification, positioning authority, and pre-call conviction so sales teams only speak with ready-to-invest decision-makers. QualifiedLeadsX combines 12-minute VSL funnels, broad Meta Ads, and sub-5-minute appointment setting to scale high-ticket providers past $100K+/month.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              THE 4 CONVERSION PILLARS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              How We Engineer High-Ticket Pipeline
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Every touchpoint is designed to eliminate sales resistance and establish deep commercial authority before the call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-line bg-ink/70 p-8 transition-all hover:border-lime/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 border border-lime/20 text-lime mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-fog mb-3">{pillar.title}</h3>
                  <p className="text-sm text-mist leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Revenue Proof Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            PROVEN RESULTS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            $150M+ In High-Ticket Client Revenue Generated
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Review 125+ documented client breakdowns, live Meta Ads ad accounts, and Stripe collection records across 30+ high-ticket industries.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              Explore 125+ Verified Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              COMMON QUESTIONS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions About High Ticket Lead Gen
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
        eyebrow="FILL YOUR CALENDAR"
        title={
          <>
            Install our high ticket acquisition engine on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute strategy call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}
