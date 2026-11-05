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
  Video,
  Play,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VSL Funnel Agency for High-Ticket Client Acquisition",
  description:
    "Premier VSL funnel agency engineering 12-minute video sales letters that pre-sell $3K–$25K offers. Book 30–50 qualified sales calls every month.",
  keywords: [
    "vsl funnel agency",
    "video sales letter funnel",
    "high ticket vsl funnel",
    "vsl copywriting agency",
    "vsl script framework",
    "client acquisition funnel",
  ],
  alternates: {
    canonical: "/vsl-funnels",
  },
  openGraph: {
    title: "VSL Funnel Agency for High-Ticket Client Acquisition",
    description:
      "Premier VSL funnel agency engineering 12-minute video sales letters that pre-sell $3K–$25K offers. Book 30–50 qualified calls monthly.",
    url: `${site.url}/vsl-funnels`,
    type: "website",
  },
};

const vslStages = [
  {
    step: "01",
    title: "The Disruptive 60-Second Hook",
    description:
      "We immediately capture high-intent attention by exposing the fatal flaw in conventional industry methods and framing your proprietary mechanism.",
  },
  {
    step: "02",
    title: "Systemic Problem Deconstruction",
    description:
      "We explain why your prospect has struggled to scale—shifting blame from their past failures to outdated, fragmented vendor approaches.",
  },
  {
    step: "03",
    title: "The Unique Mechanism Reveal",
    description:
      "We introduce your proprietary client acquisition engine or service system, establishing a distinct category of one that competitors cannot duplicate.",
  },
  {
    step: "04",
    title: "Undeniable Empirical Proof Stack",
    description:
      "We integrate real ad spend dashboards, recorded stripe transactions, and video case studies proving your mechanism produces reliable results.",
  },
  {
    step: "05",
    title: "The High-Ticket Offer Architecture",
    description:
      "We frame your deliverables, timelines, and written performance commitments so prospects clearly understand what working together looks like.",
  },
  {
    step: "06",
    title: "The Conditional Call to Action",
    description:
      "We direct qualified viewers into a strict 4-tier intake survey, filtering out tire-kickers and ensuring only serious decision-makers book appointments.",
  },
];

const faqs = [
  {
    q: "What does a VSL funnel agency do?",
    a: "A VSL (Video Sales Letter) funnel agency scripts, designs, and builds high-converting video-driven sales funnels specifically engineered to pre-sell high-ticket coaching, consulting, and agency services priced from $3,000 to $25,000+. At QualifiedLeadsX, our 12-minute VSL frameworks dismantle buyer objections, prove mechanism validity, and eliminate sales resistance before prospects ever speak with your sales team.",
  },
  {
    q: "Why do 12-minute VSL funnels outperform 60-minute webinars?",
    a: "Modern B2B executives and busy professionals rarely sit through 60-minute pitch-heavy webinars with 20% attendance rates. A concise 12-minute VSL delivers high-density value, achieves 65%+ watch-through rates, and drives immediate action from qualified buyers.",
  },
  {
    q: "Do I need professional studio equipment to record my VSL?",
    a: "No. High-ticket buyers respond to authentic authority and clarity, not Hollywood production. A clean 1080p camera, clear audio microphone, and direct-response slide visual framework consistently outperform over-produced brand films.",
  },
  {
    q: "How does the VSL funnel qualify prospects before booking?",
    a: "Immediately below the VSL video player, we embed a conditional qualification gate. Prospects must answer key intake questions regarding their business revenue, liquid capital, and timeline before calendar slots are revealed.",
  },
  {
    q: "How long does it take to script, build, and launch a VSL funnel?",
    a: "Our complete VSL funnel sprint takes 14 to 21 business days, including market research, scripting, slide deck design, landing page development, and CRM webhook routing.",
  },
];

export default function VslFunnelsPage() {
  const pageUrl = `${site.url}/vsl-funnels`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "VSL Funnel Engineering Agency",
        serviceType: "Video Sales Letter Funnel Architecture",
        description:
          "Premier VSL funnel agency engineering 12-minute video sales letters that pre-sell $3K–$25K offers. Book 30–50 qualified sales calls every month.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "12-Minute VSL Funnel Sprint",
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
          { name: "VSL Funnels", url: "/vsl-funnels" },
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
              Direct-Response Video Architecture
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            VSL Funnel Agency: 12-Minute Pre-Selling for{" "}
            <span className="text-gradient-lime">$3K–$25K Offers</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Stop pitching cold prospects on sales calls. We script, design, and launch psychology-driven 12-minute Video Sales Letter funnels that dismantle objections and pre-sell your mechanism before the call.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What does a VSL funnel agency do?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              A VSL (Video Sales Letter) funnel agency scripts, designs, and builds high-converting video-driven sales funnels specifically engineered to pre-sell high-ticket coaching, consulting, and agency services priced from $3,000 to $25,000+. At QualifiedLeadsX, our 12-minute VSL frameworks dismantle buyer objections, prove mechanism validity, and eliminate sales resistance before prospects ever speak with your sales team.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Stage VSL Framework */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              THE 12-MINUTE VSL BLUEPRINT
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              The Anatomy of a High-Ticket Video Sales Letter
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Every second of the script is engineered to transition cold prospects into committed, educated buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vslStages.map((stage) => (
              <div
                key={stage.step}
                className="rounded-2xl border border-line bg-ink/70 p-7 transition-all hover:border-lime/40 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-lime block mb-4">
                    {stage.step}
                  </span>
                  <h3 className="text-lg font-bold text-fog mb-3">{stage.title}</h3>
                  <p className="text-sm text-mist leading-relaxed font-sans">
                    {stage.description}
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
            $150M+ IN COLLECTIVE PIPELINE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Pair Your VSL With Algorithmic Meta Ads
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A high-converting VSL needs qualified traffic. Discover how our Meta Ads agency drives high-intent buyers into your funnel.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/meta-ads-agency"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              Explore Meta Ads Agency
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog/the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Read VSL Funnel Blueprint Guide
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
              VSL FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions About VSL Funnels
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
        eyebrow="SCRIPT YOUR VSL"
        title={
          <>
            Stop pitching cold prospects. Build your 12-minute VSL on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute strategy call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}
