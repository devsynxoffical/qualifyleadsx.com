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
  Laptop,
  Layers,
  ShieldCheck,
  Target,
  Zap,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B SaaS Lead Generation & Demo Booking Agency",
  description:
    "Predictable B2B SaaS lead generation and demo booking funnels for high-ACV software platforms. Book 30–50 qualified sales demos monthly.",
  keywords: [
    "saas lead generation",
    "b2b saas lead generation",
    "saas demo booking agency",
    "saas appointment setting",
    "enterprise software lead gen",
    "meta ads for saas",
  ],
  alternates: {
    canonical: "/for/saas",
  },
  openGraph: {
    title: "B2B SaaS Lead Generation & Demo Booking Agency",
    description:
      "Predictable B2B SaaS lead generation and demo booking funnels for high-ACV software platforms. Book 30–50 qualified demos monthly.",
    url: `${site.url}/for/saas`,
    type: "website",
  },
};

const pillars = [
  {
    icon: Target,
    title: "Product-Led Direct-Response Creatives",
    description:
      "We replace dry software screenshots with high-retention video creatives demonstrating workflow transformation, feature ROI, and pain elimination within 15 seconds.",
  },
  {
    icon: Laptop,
    title: "Interactive Demo Qualification Gate",
    description:
      "We install conditional qualification friction to ensure your Account Executives only demo to companies with genuine user seats and enterprise buying authority.",
  },
  {
    icon: PhoneCall,
    title: "Sub-5-Minute Speed to Lead Setter Dispatch",
    description:
      "Inbound demo requests are instantly confirmed via automated SMS and live technical setters, driving demo attendance rates to 85%+.",
  },
  {
    icon: ShieldCheck,
    title: "Broad Algorithmic Meta Scaling",
    description:
      "Rather than competing in saturated $120+ CPM LinkedIn auctions, we reach technical decision-makers and founders on Meta at $30 CPMs.",
  },
];

const faqs = [
  {
    q: "What is B2B SaaS lead generation?",
    a: "B2B SaaS lead generation is the strategic acquisition process of identifying, nurturing, and booking qualified software buyers and enterprise procurement committees into product demonstrations and trial activations. QualifiedLeadsX pairs broad algorithmic Meta Ads with sub-5-minute appointment setting to lower demo acquisition costs below $120 for high-ACV platforms.",
  },
  {
    q: "Can Meta Ads effectively generate enterprise SaaS demos?",
    a: "Yes. Technical founders, CTOs, and department heads use Instagram and Facebook daily. By deploying direct-response video hooks that highlight specific software workflows and ROI outcomes, we routinely book high-intent enterprise SaaS demos at a 60% lower CAC than LinkedIn.",
  },
  {
    q: "What ACV (Annual Contract Value) is required for this model?",
    a: "Our client acquisition funnels are engineered for B2B SaaS platforms with annual contract values between $5,000 and $50,000+ (or monthly subscriptions exceeding $500/mo).",
  },
  {
    q: "How many qualified demo bookings are generated monthly?",
    a: "Our standard SaaS acquisition sprint delivers between 30 and 50 qualified sales demos each month with verified attendance tracking.",
  },
  {
    q: "Do you offer a performance guarantee for SaaS companies?",
    a: "Yes. QualifiedLeadsX provides a written 90-day double revenue performance commitment. If agreed pipeline targets are not met, we continue operating your campaigns at zero management fee until they are.",
  },
];

export default function SaasLeadGenPage() {
  const pageUrl = `${site.url}/for/saas`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "B2B SaaS Lead Generation & Demo Setting",
        serviceType: "SaaS Client Acquisition & Demo Booking",
        description:
          "Predictable B2B SaaS lead generation and demo booking funnels for high-ACV software platforms. Book 30–50 qualified sales demos monthly.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "SaaS Demo Pipeline Sprint",
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
          { name: "SaaS", url: "/for/saas" },
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
              Software Acquisition Architecture
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            B2B SaaS Lead Generation &{" "}
            <span className="text-gradient-lime">Enterprise Demo Setting</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop burning venture capital on low-intent freemium signups. We build a high-converting demo booking engine that puts 30 to 50 qualified enterprise software decision-makers on your sales calendar every month.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What is B2B SaaS lead generation?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              B2B SaaS lead generation is the strategic acquisition process of identifying, nurturing, and booking qualified software buyers and enterprise procurement committees into product demonstrations and trial activations. QualifiedLeadsX pairs broad algorithmic Meta Ads with sub-5-minute appointment setting to lower demo acquisition costs below $120 for high-ACV platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              SCALING SOFTWARE SALES
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Engineered For High-ACV SaaS Platforms
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              How we scale trial activations, demo bookings, and pipeline velocity without relying on expensive LinkedIn ads.
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
            PROVEN RESULTS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Explore SaaS & Tech Case Studies
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            See how our acquisition engine scaled AI and tech platforms to consistent enterprise deal flow.
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

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              SAAS FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions About SaaS Lead Gen
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
        eyebrow="FILL YOUR DEMO CALENDAR"
        title={
          <>
            Scale your SaaS pipeline with guaranteed enterprise demos on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

