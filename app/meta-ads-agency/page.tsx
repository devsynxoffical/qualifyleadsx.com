import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  HelpCircle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Layers,
  Filter,
  DollarSign,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Meta Ads Agency for Coaches, Agencies and B2B - QualifiedLeadsX",
  },
  description:
    "Elite Meta ads agency scaling high-ticket coaches, consultants, and B2B agencies to $100K+/month. Automated qualification & guaranteed booked calls.",
  keywords: [
    "meta ads agency",
    "facebook ads agency",
    "b2b meta ads",
    "meta advertising agency for coaches",
    "high ticket facebook ads",
    "meta lead generation",
    "facebook ads for b2b agencies",
    "meta creative testing",
  ],
  alternates: {
    canonical: "/meta-ads-agency",
  },
  openGraph: {
    title: "Meta Ads Agency for Coaches, Agencies and B2B - QualifiedLeadsX",
    description:
      "Elite Meta ads agency scaling high-ticket coaches, consultants, and B2B agencies to $100K+/month with predictable booked client calls.",
    url: `${site.url}/meta-ads-agency`,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/images/blog/vsl-funnel-blueprint.jpg`,
        width: 1200,
        height: 630,
        alt: "Meta Ads Agency for Coaches, Agencies and B2B - QualifiedLeadsX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Agency for Coaches, Agencies and B2B - QualifiedLeadsX",
    description:
      "Elite Meta ads agency scaling high-ticket coaches, consultants, and B2B agencies to $100K+/month with predictable booked client calls.",
  },
};

const metaAgencyFaqs = [
  {
    q: "How does your Meta ads agency differ from standard Facebook ads agencies?",
    a: "Traditional Facebook ads agencies rely on outdated narrow interest targeting, generic Canva ad creatives, and native lead forms that produce unresponsive, low-budget tire-kickers. QualifiedLeadsX operates as a performance growth partner: we deploy broad AI algorithmic creative testing, script custom 12-minute VSL assets, and enforce a 4-tier conditional qualification survey so your sales team only speaks with pre-sold buyers who have $5,000+ liquid capital.",
  },
  {
    q: "What ad spend budget is required to work with QualifiedLeadsX?",
    a: "Our clients typically begin with a minimum ad spend budget of $2,000 to $5,000 per month on Meta (Facebook & Instagram). This volume allows the Meta machine-learning algorithm to gather sufficient conversion data, optimize creative variations, and deliver a predictable flow of 25–50 qualified appointments every month.",
  },
  {
    q: "Do Meta ads still work for B2B services, consultants, and high-ticket coaches in 2026?",
    a: "Yes, more effectively than LinkedIn or cold email when executed correctly. Decision-makers, founders, and executives spend 45+ minutes daily on Meta platforms. Because Meta's Andromeda recommendation engine analyzes user behavior rather than just profile titles, our direct-response video creative targets executives with 3.4x lower cost-per-acquisition than LinkedIn ads.",
  },
  {
    q: "How fast can our Meta ads campaign be installed and live?",
    a: "Our full sprint deployment takes between 14 to 21 business days. During this timeframe, we audit your offer positioning, write high-converting VSL scripts, build custom landing pages and tracking infrastructure, configure CRM follow-ups, and launch tested Meta creative batches.",
  },
  {
    q: "Do you offer performance guarantees on Meta ad campaigns?",
    a: "Yes. We back our acquisition system with a clear performance guarantee: if we do not hit your agreed qualified call benchmarks within the initial engagement timeline, our team continues working at zero management fee until the goal is achieved.",
  },
];

export default function MetaAdsAgencyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Performance Meta Ads Agency for High-Ticket B2B & Coaches",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.png`,
    },
    serviceType: "Meta Ads Agency & Paid Social Media Buying",
    description:
      "Full-service Meta ads agency specializing in high-ticket client acquisition, VSL funnels, broad creative testing, and automated lead qualification.",
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Meta Advertising & Client Acquisition Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Broad Creative Meta Ads Architecture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "12-Minute VSL Funnel Production & Deployment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automated Lead Qualification & CRM Booking Pipeline",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: metaAgencyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Services", url: "/meta-ads-agency" },
          { name: "Meta Ads Agency", url: "/meta-ads-agency" },
        ]}
      />

      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-lime/10 blur-[150px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-mint/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-lime mb-6">
            <Sparkles className="w-4 h-4 text-lime" />
            <span>High-Ticket Paid Traffic & Media Buying</span>
          </div>

          {/* Primary Keyword H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
            The <span className="text-lime">Meta Ads Agency</span> For Coaches, Agencies & High-Ticket B2B
          </h1>

          {/* Subtitle with Secondary Keyword */}
          <p className="mt-6 text-lg sm:text-2xl text-mist max-w-3xl mx-auto leading-relaxed font-normal">
            Stop burning budget with average <em>Facebook ads agencies</em> that deliver cheap, unqualified leads. We install an algorithmic creative machine that books 30–50 high-ticket sales calls every month.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={site.bookCallUrl} variant="primary" size="lg" className="shadow-[0_0_40px_rgba(201,242,107,0.35)]">
              Book Your Free Scaling Call
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Verified ROAS Case Studies
            </Button>
          </div>

          {/* AEO Fast Answer Direct Summary Box */}
          <div className="mt-12 rounded-2xl border-2 border-lime/40 bg-panel/85 p-6 sm:p-8 backdrop-blur-md max-w-3xl mx-auto text-left shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-lime animate-pulse" />
              <span>AEO Executive Summary: What We Do</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-mist">
              <strong>QualifiedLeadsX™</strong> is a specialized performance <strong>Meta ads agency</strong> that engineers end-to-end client acquisition systems for high-ticket businesses. We combine algorithmic broad creative testing across Facebook and Instagram with high-converting 12-minute VSL funnels and automated qualification filtration to predictably scale clients beyond $100K+/month.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Metric Proof Bar */}
      <section className="py-8 bg-panel border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">$150M+</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Client Revenue Scaled</div>
            </div>
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">14–18%</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Average Funnel CVR</div>
            </div>
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">88.3%</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Call Show-Up Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">$90–$160</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Blended Cost Per Call</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Typical Facebook Ads Agency vs QualifiedLeadsX */}
      <section className="py-16 sm:py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              THE 2026 META PARADIGM SHIFT
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Why Typical Facebook Ads Agencies Keep Burning Your Cash
            </h2>
            <p className="mt-3 text-base text-mist">
              Media buying has fundamentally changed. Audience stacking is obsolete; creative architecture is the new targeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="rounded-2xl border border-rose-500/30 bg-panel/60 p-7 sm:p-9 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-rose-400 font-mono text-xs uppercase tracking-wider font-bold mb-4">
                <XCircle className="w-5 h-5 text-rose-500" />
                <span>The Outdated Agency Model (Failing)</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-mist font-normal">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Narrow interest hacking:</strong> Micro-targeting cold interests that drive up CPMs by 4x.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Native lead forms:</strong> Cheap 1-click forms packed with fake emails, wrong numbers, and tire-kickers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Open calendar links:</strong> Flooding your closers with unqualified leads who lack investment capital.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Manual follow-up lag:</strong> Taking hours to respond, leading to 50%+ calendar no-show rates.</span>
                </li>
              </ul>
            </div>

            {/* The QualifiedLeadsX Way */}
            <div className="rounded-2xl border-2 border-lime/40 bg-panel p-7 sm:p-9 backdrop-blur-md shadow-[0_0_40px_-15px_rgba(201,242,107,0.2)]">
              <div className="flex items-center gap-2.5 text-lime font-mono text-xs uppercase tracking-wider font-bold mb-4">
                <CheckCircle2 className="w-5 h-5 text-lime" />
                <span>The QualifiedLeadsX™ Meta Engine (Winning)</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-fog font-normal">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span><strong>Broad creative targeting:</strong> Allowing Meta&apos;s machine-learning algorithm to pinpoint actual buyers via hook messaging.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span><strong>12-minute VSL conversion:</strong> Educating and indoctrinating decision-makers before they book.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span><strong>4-tier conditional filters:</strong> Rejecting applicants who lack minimum liquid capital threshold.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span><strong>Omnichannel speed-to-lead:</strong> Instant WhatsApp & SMS confirmation achieving 88%+ show-up rates.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Pillar Meta Ads Management Methodology */}
      <section className="py-16 sm:py-24 bg-panel border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              OUR 4-STAGE ARCHITECTURE
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              How Our Meta Ads Agency Drives Predictable $100K+ Scale
            </h2>
            <p className="mt-3 text-base text-mist">
              A systematic engineering framework developed across 40+ high-ticket client accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between hover:border-lime/40 transition-colors">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Broad Creative Testing
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  We write and test 10+ dynamic video hooks targeting psychological pain points rather than arbitrary demographic segments.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                Target: Sub-$40 CPMs
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between hover:border-lime/40 transition-colors">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  12-Min VSL Funnels
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  We script high-conviction Video Sales Letters that articulate your unique proprietary mechanism with empirical visual flowcharts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                Target: 14–18% Booking CVR
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between hover:border-lime/40 transition-colors">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Conditional Filtering
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Applicants pass through dynamic revenue and liquid capital gates. Underqualified leads are routed to downsell resources automatically.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                Target: 100% Qualified Agendas
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between hover:border-lime/40 transition-colors">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Speed-To-Lead Nurture
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Sub-5-minute automated WhatsApp, SMS, and email confirmation with pre-call indoctrination case videos.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                Target: 88%+ Show-Up Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Editorial Guide Interlink */}
      <section className="py-12 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-lime/30 bg-panel/70 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                RECOMMENDED BLUEPRINT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                Read The 2026 VSL Funnel Architecture Masterclass
              </h3>
              <p className="text-sm text-mist mt-2 max-w-2xl">
                Learn how concise 12-minute Video Sales Letter funnels outconvert traditional 90-minute webinars by 3.4x for high-ticket service offers.
              </p>
            </div>
            <Link
              href="/blog/the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-lime text-ink hover:brightness-110 transition-all shrink-0 shadow-[0_0_20px_rgba(201,242,107,0.3)]"
            >
              <span>Read Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-ink border-t border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-3">
              <HelpCircle className="w-4 h-4 text-lime" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Frequently Asked Questions About Our Meta Ads Service
            </h2>
            <p className="mt-3 text-base text-mist">
              Clear answers regarding pricing, ad spend requirements, and performance guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {metaAgencyFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-panel p-6 sm:p-7 transition-colors hover:border-lime/40"
              >
                <h3 className="text-lg font-bold font-heading text-white mb-2.5">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-mist leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner
        eyebrow="Done-For-You Meta Ads Acquisition"
        title={
          <>
            Ready to install a predictable{" "}
            <em className="font-semibold not-italic text-lime">Meta ads machine into your business?</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
