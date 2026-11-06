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
  Calculator,
  TrendingUp,
  DollarSign,
  Percent,
  Timer,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Free Lead Generation Calculators & Tools - QualifiedLeadsX",
  description:
    "Free interactive high-ticket lead generation calculators: CAC, ROAS, cost per booked call, show rate, and LTV models. Model your acquisition pipeline today.",
  keywords: [
    "free lead generation calculators",
    "cac calculator",
    "roas calculator",
    "cost per booked call calculator",
    "show rate calculator",
    "ltv to cac ratio calculator",
  ],
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free Lead Generation Calculators & Tools - QualifiedLeadsX",
    description:
      "Interactive calculators to model high-ticket client acquisition costs, ad spend break-even, and appointment funnels.",
    url: `${site.url}/tools`,
    type: "website",
  },
};

const toolList = [
  {
    title: "Customer Acquisition Cost (CAC) Calculator",
    keyword: "cac calculator",
    href: "/tools/cac-calculator",
    icon: DollarSign,
    badge: "Core Financial Tool",
    description:
      "Calculate your true blended CAC including media spend, appointment setter commissions, and tech overhead to establish required offer price points.",
    formula: "Total Acquisition Cost / Total Customers Acquired",
  },
  {
    title: "High-Ticket ROAS & Break-Even Calculator",
    keyword: "roas calculator",
    href: "/tools/roas-calculator",
    icon: TrendingUp,
    badge: "Media Buying",
    description:
      "Model how changes in close rate, appointment show rate, and offer pricing directly impact front-end return on ad spend and gross cash collected.",
    formula: "(Closed Revenue - Ad Spend) / Ad Spend",
  },
  {
    title: "Cost Per Booked Call Calculator",
    keyword: "cost per booked call calculator",
    href: "/tools/cost-per-booked-call-calculator",
    icon: Calculator,
    badge: "Funnel Conversion",
    description:
      "Determine your maximum allowable cost per strategy session based on target profit margins, salesperson commission, and sales cycle duration.",
    formula: "Ad Spend / Total Scheduled Calls",
  },
  {
    title: "Appointment Show Rate & Lost Revenue Calculator",
    keyword: "show rate calculator",
    href: "/tools/show-rate-calculator",
    icon: Timer,
    badge: "Sales Ops",
    description:
      "Calculate exact revenue lost to ghosted sales calls and model how sub-5-minute speed to lead and WhatsApp confirmations recover lost pipeline.",
    formula: "(Attended Calls / Scheduled Calls) * 100",
  },
  {
    title: "LTV-to-CAC Ratio Calculator",
    keyword: "ltv to cac ratio calculator",
    href: "/tools/ltv-cac-calculator",
    icon: Percent,
    badge: "Enterprise Valuation",
    description:
      "Assess the sustainability and enterprise valuation of your agency or coaching business by evaluating your 12-month customer lifetime value.",
    formula: "Customer Lifetime Value (LTV) / Blended CAC",
  },
  {
    title: "High-Ticket Lead Scoring Template",
    keyword: "lead scoring template",
    href: "/tools/lead-scoring-template",
    icon: FileSpreadsheet,
    badge: "Downloadable Asset",
    description:
      "Our battle-tested 4-tier intake scoring rubric used across 125+ client accounts to route VIP buyers to senior closers and filter tire-kickers.",
    formula: "Multi-Tier Friction Scoring Rubric",
  },
];

const faqs = [
  {
    q: "Why are high-ticket acquisition calculations different from e-commerce?",
    a: "E-commerce calculates transactional ROAS on immediate purchase carts. High-ticket B2B client acquisition operates with non-linear multi-stage sales funnels: ad click to lead, lead to booked call, call to show, and show to closed contract. Measuring each bottleneck separately is required to optimize unit economics.",
  },
  {
    q: "What is an ideal LTV:CAC ratio for high-ticket service businesses?",
    a: "An LTV:CAC ratio of 3:1 is considered the minimum healthy threshold for scaling. Top-performing agencies and coaching programs with backend retainers and upsells frequently operate at 5:1 or higher.",
  },
  {
    q: "Are these calculators free to use?",
    a: "Yes. All calculation engines and models are 100% free with no email gating or software subscriptions required.",
  },
];

export default function ToolsHubPage() {
  const pageUrl = `${site.url}/tools`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Free Lead Generation Calculators & Tools - QualifiedLeadsX",
        description:
          "Free interactive high-ticket lead generation calculators: CAC, ROAS, cost per booked call, show rate, and LTV models.",
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
      <BreadcrumbJsonLd items={[{ name: "Tools & Calculators", url: "/tools" }]} />
      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              100% Free · Interactive Financial Models
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            Free Lead Generation Calculators &{" "}
            <span className="text-gradient-lime">Acquisition Modeling Tools</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Model your unit economics before spending marketing dollars. Calculate your break-even ad spend, maximum allowable cost per call, and appointment show-rate revenue leaks with our interactive tools.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What are the most important lead generation calculators for high-ticket businesses?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              High-ticket businesses require five core calculation models: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Cost Per Booked Call, Appointment Show Rate, and LTV-to-CAC Ratio. These financial calculators allow operators to forecast breakeven ad spend, pinpoint pipeline leaks, and identify required close rates before spending marketing capital.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
                INTERACTIVE SUITE
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-fog">
                Choose a Calculator
              </h2>
            </div>
            <p className="text-sm text-mist max-w-md">
              Each tool provides instant mathematical projections and industry benchmarks based on verified performance data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolList.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.href}
                  className="group relative rounded-2xl border border-line bg-ink/70 p-7 transition-all duration-300 hover:border-lime/50 hover:bg-elevated/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 border border-lime/20 text-lime">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-line bg-panel text-mist">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-fog group-hover:text-lime transition-colors">
                      {tool.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-mist leading-relaxed font-sans">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-line/60">
                    <span className="font-mono text-[11px] text-dim block mb-3">
                      Logic: {tool.formula}
                    </span>
                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-lime hover:text-mint group-hover:translate-x-0.5 transition-all"
                    >
                      Open Calculator
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
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
            NEXT STEPS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Ready to Build a Pipeline That Hits These Numbers?
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Modeling is only half the battle. Explore our proven services and benchmarks to see how we install these systems for clients.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/benchmarks"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Review 2026 Industry Benchmarks
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              Explore Done-For-You Services
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
              TOOLS FAQ
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
        eyebrow="AUDIT YOUR MODEL"
        title={
          <>
            Let us review your unit economics on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

