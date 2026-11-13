import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site, defaultOgImage } from "@/lib/site";
import { WEBSITE_ID, publisherOrg, orgRef, TIER1_MARKETS } from "@/lib/schema";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Building2,
  Target,
  Zap,
  PhoneCall,
  Layers,
  FileCheck,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Lead Generation for Consultancies & B2B Service Firms",
  description:
    "Predictable B2B service lead generation for IT firms, consultancies, and commercial contractors. Book 30–50 qualified high-ticket client calls monthly.",
  keywords: [
    "b2b service lead generation",
    "b2b lead generation services",
    "commercial client acquisition",
    "lead generation for b2b companies",
    "b2b appointment setting",
    "high ticket b2b leads",
  ],
  alternates: {
    canonical: "/for/b2b-services",
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Lead Generation for Consultancies & B2B Service Firms",
    description:
      "Predictable B2B service lead generation for IT firms, consultancies, and commercial contractors. Book 30–50 qualified calls monthly.",
    url: `${site.url}/for/b2b-services`,
    type: "website",
  },
};

const valuePillars = [
  {
    icon: Target,
    title: "B2B Buying Committee Direct-Response",
    description:
      "We cut through corporate bureaucracy by crafting direct-response VSL messaging that addresses both executive financial priorities and operational department heads.",
  },
  {
    icon: Zap,
    title: "Multi-Touch Algorithmic Paid Traffic",
    description:
      "Rather than burning cash on slow cold email domains, we target enterprise decision-makers across Meta and LinkedIn with authoritative video case studies.",
  },
  {
    icon: PhoneCall,
    title: "Sub-5-Minute Speed to Lead Follow-Up",
    description:
      "When a B2B decision-maker requests information, our automated multi-channel routing and phone setters engage them within 180 seconds, securing 85%+ show rates.",
  },
  {
    icon: ShieldCheck,
    title: "Strict 4-Tier Commercial Qualification",
    description:
      "We enforce rigorous budget and timeline intake gates. Your sales executives only meet with companies doing $1M+ in revenue with verified capital allocation.",
  },
];

const faqs = [
  {
    q: "How does B2B service lead generation differ from consumer marketing?",
    a: "B2B service lead generation involves longer sales cycles, multiple stakeholders, and higher contract values ($10,000 to $100,000+). Our systems pre-sell the entire buying committee using 12-minute VSL assets, economic ROI calculators, and strict qualification intake forms before calls are booked.",
  },
  {
    q: "Why do you use Meta Ads instead of LinkedIn for B2B services?",
    a: "LinkedIn CPMs have skyrocketed to $90–$140, whereas Meta Ads offer broad algorithmic targeting at $25–$45 CPMs. B2B founders, CEOs, and executives spend 45+ minutes daily on Instagram and Facebook, allowing us to generate qualified B2B appointments at a fraction of the cost.",
  },
  {
    q: "What types of B2B service companies do you partner with?",
    a: "We work with IT managed service providers (MSPs), commercial engineering consultancies, specialized staffing agencies, corporate training firms, and commercial facilities contractors selling high-ticket retainers.",
  },
  {
    q: "What is your typical cost per qualified B2B strategy call?",
    a: "Depending on contract size and target vertical, qualified commercial discovery calls typically range between $120 and $240 per booked call, generating extraordinary front-end ROAS on $10K+ deals.",
  },
  {
    q: "Do you offer a performance guarantee on B2B lead generation?",
    a: "Yes. QualifiedLeadsX provides a written 90-day double revenue performance milestone. If we do not meet agreed pipeline targets, we work at no management fee until we do.",
  },
];

export default function B2bServicesPage() {
  const pageUrl = `${site.url}/for/b2b-services`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "B2B Service Lead Generation",
        serviceType: "Commercial B2B Client Acquisition",
        description:
          "Predictable B2B service lead generation for IT firms, consultancies, and commercial contractors. Book 30–50 qualified high-ticket client calls monthly.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "B2B Client Acquisition Sprint",
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
          { name: "B2B Services", url: "/for/b2b-services" },
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
              Commercial Acquisition Infrastructure
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            B2B Service Lead Generation for{" "}
            <span className="text-gradient-lime">High-Ticket Commercial Contracts</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop relying on word-of-mouth and inconsistent cold outreach. We engineer a predictable inbound acquisition system that books 30 to 50 sales-ready commercial appointments directly on your calendar every month.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is B2B service lead generation?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              B2B service lead generation is the process of identifying, nurturing, and booking qualified corporate decision-makers into sales conversations for professional services priced between $5,000 and $50,000+. At QualifiedLeadsX, our system combines direct-response Meta Ads, 12-minute executive VSLs, and sub-5-minute appointment setting to consistently generate pipeline for commercial contractors and consultancies.
            </p>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              HOW WE SCALE B2B PROVIDERS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Engineered For High-Value Commercial Deals
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Our infrastructure is purpose-built to navigate B2B sales cycles and deliver decision-makers with real capital authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePillars.map((pillar) => {
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
            PROVEN IN B2B
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Over $150M+ In Verified High-Ticket Revenue
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Review actual client breakdowns, recorded revenue dashboards, and ad spend records from B2B companies using our acquisition engine.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              View 125+ Verified Case Studies
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
              B2B SERVICE FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions About B2B Lead Gen
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
        eyebrow="SCALE YOUR B2B PIPELINE"
        title={
          <>
            Stop waiting for referrals. Book your{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute B2B growth audit</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

