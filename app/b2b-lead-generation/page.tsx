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
  Building2,
  Briefcase,
  Layers,
  ShieldCheck,
  Target,
  Zap,
  PhoneCall,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency for High-Ticket Contracts",
  description:
    "Premier B2B lead generation agency building outbound and paid acquisition funnels. Book 30–50 qualified commercial sales appointments every month.",
  keywords: [
    "b2b lead generation agency",
    "b2b lead generation services",
    "b2b sales pipeline agency",
    "b2b appointment setting",
    "commercial lead generation",
    "b2b client acquisition agency",
  ],
  alternates: {
    canonical: "/b2b-lead-generation",
  },
  openGraph: {
    title: "B2B Lead Generation Agency for High-Ticket Contracts",
    description:
      "Premier B2B lead generation agency building outbound and paid acquisition funnels. Book 30–50 qualified appointments monthly.",
    url: `${site.url}/b2b-lead-generation`,
    type: "website",
  },
};

const capabilities = [
  {
    icon: Target,
    title: "Commercial Buying Committee Targeting",
    description:
      "We design multi-stakeholder messaging architectures that address both CFO financial governance and operational department pain points.",
  },
  {
    icon: Zap,
    title: "Algorithmic Paid Social Acquisition",
    description:
      "Instead of burning domain reputations with burnt cold email lists, we intercept enterprise founders and C-suite leaders where they spend downtime—on Meta.",
  },
  {
    icon: PhoneCall,
    title: "Sub-5-Minute Multichannel Dispatch",
    description:
      "When a qualified commercial prospect requests a consultation, our speed-to-lead routing and executive setters engage them within 180 seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Strict 4-Tier Fiscal Qualification",
    description:
      "We filter out startups and unfunded entities. Your calendar is strictly reserved for companies generating $1M+ ARR with verified buying budgets.",
  },
];

const faqs = [
  {
    q: "What does a specialized B2B lead generation agency do?",
    a: "A specialized B2B lead generation agency installs scalable commercial acquisition systems that consistently book qualified corporate decision-makers onto sales calendars. Unlike mass spam email agencies, QualifiedLeadsX combines algorithmic Meta Ads media buying, 12-minute executive VSL funnels, and sub-5-minute appointment setting to generate high-contract B2B appointments ($5,000–$50,000+).",
  },
  {
    q: "Why does Meta Ads work effectively for B2B lead generation?",
    a: "Over 80% of business owners and executives check Instagram and Facebook daily. Because Meta Ads auction CPMs ($25–$45) are a fraction of LinkedIn ($90–$140), broad creative targeting delivers executive discovery sessions at significantly lower customer acquisition costs.",
  },
  {
    q: "What size B2B companies do your clients target?",
    a: "Our clients target mid-market and enterprise accounts ranging from $1M to $50M in annual revenue across professional services, IT, software, and commercial contracting.",
  },
  {
    q: "How many qualified B2B calls are generated each month?",
    a: "Our standard client acquisition sprint delivers between 30 and 50 qualified sales appointments per month, with show-up rates consistently exceeding 85%.",
  },
  {
    q: "Do you offer a performance guarantee on B2B lead gen?",
    a: "Yes. QualifiedLeadsX operates with a 90-day double revenue performance milestone. If agreed pipeline targets are not met, we continue operating campaigns at zero management fee until they are.",
  },
];

export default function B2bLeadGenAgencyPage() {
  const pageUrl = `${site.url}/b2b-lead-generation`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "B2B Lead Generation Agency",
        serviceType: "Enterprise & Commercial Lead Generation",
        description:
          "Premier B2B lead generation agency building outbound and paid acquisition funnels. Book 30–50 qualified commercial sales appointments every month.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "B2B Client Acquisition Engine Sprint",
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
          { name: "B2B Lead Generation", url: "/b2b-lead-generation" },
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
              Predictable Commercial Deal Flow
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            B2B Lead Generation Agency for{" "}
            <span className="text-gradient-lime">High-Ticket Contracts</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop waiting for referrals or hoping cold email open rates recover. We engineer an inbound paid acquisition engine that consistently books 30 to 50 commercial sales appointments on your calendar every month.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What does a specialized B2B lead generation agency do?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              A specialized B2B lead generation agency installs scalable commercial acquisition systems that consistently book qualified corporate decision-makers onto sales calendars. Unlike mass spam email agencies, QualifiedLeadsX combines algorithmic Meta Ads media buying, 12-minute executive VSL funnels, and sub-5-minute appointment setting to generate high-contract B2B appointments ($5,000–$50,000+).
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              CORE CAPABILITIES
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              How We Scale High-Contract B2B Pipeling
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Our infrastructure is engineered specifically for complex buying cycles and high customer lifetime values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-line bg-ink/70 p-8 transition-all hover:border-lime/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 border border-lime/20 text-lime mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-fog mb-3">{cap.title}</h3>
                  <p className="text-sm text-mist leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            $150M+ VERIFIED RESULTS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Review B2B Scaling Case Studies & Benchmarks
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            See how our acquisition engine scales enterprise consultancies, software platforms, and professional service agencies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              Explore 125+ Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/for/b2b-services"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Explore B2B Services Blueprint
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
              B2B LEAD GEN FAQ
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
        eyebrow="SCALE YOUR B2B SALES"
        title={
          <>
            Install a predictable B2B pipeline on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

