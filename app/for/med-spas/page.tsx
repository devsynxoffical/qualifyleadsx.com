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
  Activity,
  Sparkles,
  ShieldCheck,
  Zap,
  PhoneCall,
  CalendarCheck,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Med Spa Lead Generation & High-Ticket Booking Agency",
  description:
    "Predictable Med Spa lead generation and consultation booking. Fill your treatment calendar with $3K–$10K package clients using Meta Ads and speed to lead.",
  keywords: [
    "med spa lead generation",
    "medspa marketing agency",
    "aesthetic clinic lead generation",
    "med spa appointment setting",
    "meta ads for med spas",
    "cosmetic clinic marketing",
  ],
  alternates: {
    canonical: "/for/med-spas",
  },
  openGraph: {
    title: "Med Spa Lead Generation & High-Ticket Booking Agency",
    description:
      "Predictable Med Spa lead generation and consultation booking. Fill your treatment calendar with $3K–$10K package clients.",
    url: `${site.url}/for/med-spas`,
    type: "website",
  },
};

const pillars = [
  {
    icon: Sparkles,
    title: "High-Ticket Treatment Package Framing",
    description:
      "Instead of advertising single discounted units that attract bargain-hunters, we package full transformation protocols (body contouring, facial rejuvenation, laser series) valued at $2,500 to $8,000+.",
  },
  {
    icon: Zap,
    title: "Geo-Targeted Algorithmic Meta Campaigns",
    description:
      "We deploy direct-response video hooks and patient case transformations within a 15-to-25-mile radius of your clinic to capture high-net-worth local clientele.",
  },
  {
    icon: PhoneCall,
    title: "Sub-3-Minute Automated Speed to Lead",
    description:
      "Inbound aesthetic inquiries are immediately texted and engaged within 180 seconds, answering procedure questions and locking in consultation slots before interest cools.",
  },
  {
    icon: CalendarCheck,
    title: "Consultation Deposit Collection Protocol",
    description:
      "We integrate automated refundable reservation deposits ($50–$100) during scheduling, eliminating no-shows and pushing consultation show rates past 85%.",
  },
];

const faqs = [
  {
    q: "What is Med Spa lead generation?",
    a: "Med Spa lead generation is the acquisition system of attracting, qualifying, and booking local patients into high-ticket aesthetic procedures (such as body contouring, laser treatments, and injectables packages priced between $1,500 and $10,000+). QualifiedLeadsX pairs localized Meta Ads with sub-5-minute conversational SMS appointment setting, reducing patient no-shows and driving proven multi-six-figure growth.",
  },
  {
    q: "Do you have verified proof in the Med Spa industry?",
    a: "Yes. In one of our most cited client breakdowns, we helped a specialized MedSpa marketing partner generate $639,000 in sales within 60 days, closing 178 high-ticket clinic clients while maintaining over 1,100 active conversations.",
  },
  {
    q: "How do you eliminate no-shows for aesthetic consultations?",
    a: "We deploy a three-stage commitment protocol: (1) Instant SMS response within 180 seconds, (2) Optional refundable consultation deposits, and (3) Automated WhatsApp & SMS preparation reminders containing procedure videos and clinic directions.",
  },
  {
    q: "What ad spend is recommended for a local Med Spa?",
    a: "We recommend a minimum Meta advertising spend of $2,000 to $3,500 per month. This allows the campaign to generate 40 to 70 consultation inquiries and lock in 25 to 40 attended clinic consultations monthly.",
  },
];

export default function MedSpasPage() {
  const pageUrl = `${site.url}/for/med-spas`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Med Spa Lead Generation & Patient Acquisition",
        serviceType: "Aesthetic Clinic Client Acquisition",
        description:
          "Predictable Med Spa lead generation and consultation booking. Fill your treatment calendar with $3K–$10K package clients using Meta Ads and speed to lead.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "MedSpa Acquisition Engine Sprint",
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
          { name: "Industries", url: "/for" },
          { name: "Med Spas", url: "/for/med-spas" },
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
              High-Ticket Patient Pipeline
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            Med Spa Lead Generation: Predictable{" "}
            <span className="text-gradient-lime">High-Ticket Treatment Bookings</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop competing on cheap discounted units. We build a premium patient acquisition engine that fills your treatment calendar with $2,500 to $10,000+ package clients using localized Meta Ads and sub-5-minute speed to lead.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is Med Spa lead generation?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              Med Spa lead generation is the acquisition system of attracting, qualifying, and booking local patients into high-ticket aesthetic procedures (such as body contouring, laser treatments, and injectables packages priced between $1,500 and $10,000+). QualifiedLeadsX pairs localized Meta Ads with sub-5-minute conversational SMS appointment setting, reducing patient no-shows and driving proven multi-six-figure growth.
            </p>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              CLINIC ACQUISITION INFRASTRUCTURE
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              How We Scale Aesthetic Practices
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Our four-part framework ensures high-net-worth local patients commit to booked consultations and show up prepared to invest.
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

      {/* Real Proof Banner */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            DOCUMENTED MEDSPA PROOF
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            $639,000 Generated in 60 Days: MedSpa Case Study
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Review how our acquisition system closed 178 high-ticket clinic clients with 1,116 active conversations in single two-month sprint.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies#DZc5twGlC0M"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              View $639K Case Study Breakdown
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/for"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Browse All Industries
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
              MEDSPA FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions About MedSpa Lead Gen
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
        eyebrow="FILL YOUR CLINIC CALENDAR"
        title={
          <>
            Scale your Med Spa with guaranteed consultation appointments on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

