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
  DollarSign,
  ShieldCheck,
  Building,
  Target,
  Zap,
  PhoneCall,
  Scale,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: { absolute: "Lead Generation for Financial Advisors | QualifiedLeadsX" },
  description:
    "Compliant lead generation for financial advisors. We qualify prospects by investable assets and book meetings with people who fit your minimums.",
  keywords: [
    "lead generation for financial advisors",
    "financial advisor leads",
    "wealth management lead generation",
    "high net worth client acquisition",
    "fiduciary lead generation",
    "meta ads for wealth managers",
  ],
  alternates: {
    canonical: "/for/financial-advisors",
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Lead Generation for Financial Advisors | QualifiedLeadsX",
    description:
      "Compliant lead generation for financial advisors. We qualify prospects by investable assets and book meetings with people who fit your minimums.",
    url: `${site.url}/for/financial-advisors`,
    type: "website",
  },
};

const pillars = [
  {
    icon: Scale,
    title: "FINRA & SEC Compliant Educational Framing",
    description:
      "We avoid hype and promissory claims. Our educational funnels focus on tax-efficient wealth distribution, estate continuity, and retirement transition frameworks.",
  },
  {
    icon: DollarSign,
    title: "High-Net-Worth Asset Qualification Filter",
    description:
      "Intake friction surveys filter prospects by investable liquid assets ($250K, $500K, $1M+), ensuring advisors only spend time with viable wealth management clients.",
  },
  {
    icon: Target,
    title: "Algorithmic Demographic & Interest Targeting",
    description:
      "We target mature demographic cohorts (Ages 45–68) approaching retirement milestones, business exit transitions, and liquidity events across Meta platforms.",
  },
  {
    icon: PhoneCall,
    title: "White-Glove Speed-to-Lead Concierge",
    description:
      "Inbound inquiries receive immediate, professional executive confirmation via SMS and scheduled concierge outreach, building early trust and protecting your show rate.",
  },
];

const faqs = [
  {
    q: "How do financial advisors get new clients?",
    a: "The main channels are referrals, seminars, content and paid ads with a qualification funnel. Paid ads with asset-based qualification give the most predictable flow of new meetings.",
  },
  {
    q: "What is the best lead generation for financial advisors?",
    a: "A system that filters by investable assets before booking. It costs more per lead than broad campaigns but saves hours of meetings with prospects below your minimum.",
  },
  {
    q: "Is paid lead generation compliant for advisors?",
    a: "It can be. All ads and pages are written without performance claims and go through your compliance team before anything goes live.",
  },
  {
    q: "Can you target high net worth prospects?",
    a: "Yes. The qualification survey filters by investable assets, for example $500,000 or more, and only qualifying prospects reach your calendar.",
  },
  {
    q: "Do you guarantee results for advisors?",
    a: "Yes, the same 90-day written guarantee applies, with terms agreed before launch.",
  },
];

export default function FinancialAdvisorsPage() {
  const pageUrl = `${site.url}/for/financial-advisors`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Financial Advisor Lead Generation & Client Acquisition",
        serviceType: "Wealth Management Client Acquisition",
        description:
          "Compliant lead generation for financial advisors. We qualify prospects by investable assets and book meetings with people who fit your minimums.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "Wealth Advisor Acquisition Sprint",
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
          { name: "Financial Advisors", url: "/for/financial-advisors" },
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
              Compliant AUM Scaling Infrastructure
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            <span className="text-gradient-lime">Lead Generation for Financial Advisors</span>: Qualified Prospect Meetings
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop relying on cold seminars or low-intent lead vendors. We build educational acquisition funnels that qualify prospects on investable assets before they book a discovery call on your calendar, and we tell you on the strategy call what volume is realistic for your market.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is compliant lead generation for financial advisors?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              Compliant lead generation means ads and landing pages that follow your firm&apos;s compliance rules: no performance promises, approved wording and clear disclosures. We submit every asset for your compliance review before launch.
            </p>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              COMPLIANT ACQUISITION ARCHITECTURE
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Engineered For Fiduciary Wealth Advisors
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Prospects answer a short survey on investable assets ($250K, $500K or $1M+), goals and timing. Only those who meet your minimums are booked, so you spend meetings with people you can actually serve. The same{" "}
              <Link href="/appointment-setting" className="text-lime underline-offset-2 hover:underline">appointment setting</Link>{" "}
              system runs our{" "}
              <Link href="/" className="text-lime underline-offset-2 hover:underline">done-for-you lead generation</Link>.
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

      {/* Cross-Link Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            PROVEN TRACK RECORD
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Explore Cross-Industry Case Studies
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We do not have a published financial advisor case study yet, so here are campaigns with the same high-ticket, call-based sale: 453 med spa appointments that became 247 clients, and 10 luxury real estate buyer appointments in 24 hours. Selling insurance too? See{" "}
            <Link href="/for/insurance-agencies" className="text-lime underline-offset-2 hover:underline">lead generation for insurance agents</Link>.
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
              FINANCIAL ADVISOR FAQ
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
        eyebrow="SCALE YOUR AUM"
        title={
          <>
            Fill your calendar with high-net-worth consultations on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

