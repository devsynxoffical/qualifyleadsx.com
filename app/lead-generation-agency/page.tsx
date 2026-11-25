import type { Metadata } from "next";
import Link from "next/link";
import { cityPages, statePages } from "@/lib/locations";
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
  Target,
  ShieldCheck,
  Zap,
  PhoneCall,
  Video,
  BarChart3,
  Layers,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";
import { DeepDive } from "@/components/sections/DeepDive";
import { leadGenAgencyDeepDive } from "@/lib/deep-dive-content";

export const metadata: Metadata = {
  title: "Customer Acquisition Agency for High-Ticket B2B: Done-for-You",
  description:
    "Done-for-you customer acquisition agency: Meta ads, VSL funnels and AI appointment setting that book 30–50 qualified sales calls a month. 90-day guarantee.",
  keywords: [
    "customer acquisition agency",
    "customer acquisition agencies",
    "customer acquisition systems",
    "qualified lead generation services",
    "lead generation agency",
    "b2b lead generation agency",
    "high ticket lead generation agency",
    "done for you lead generation agency",
    "appointment setting agency",
    "client acquisition agency",
  ],
  alternates: {
    canonical: "/lead-generation-agency",
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Customer Acquisition Agency for High-Ticket B2B: Done-for-You | QualifiedLeadsX™",
    description:
      "Premier customer acquisition agency installing done-for-you VSL funnels, Meta Ads, and AI appointment setting. 30–50 qualified calls monthly.",
    url: `${site.url}/lead-generation-agency`,
    type: "website",
  },
};

const processSteps = [
  {
    step: "01",
    title: "High-Ticket Offer & Unit Economics Audit",
    description:
      "We deconstruct your offer pricing, margins, sales close rates, and customer lifetime value to engineer a funnel with front-end cash flow profitability.",
  },
  {
    step: "02",
    title: "12-Minute Direct-Response VSL Funnel",
    description:
      "We script, design, and develop a conversion-engineered Video Sales Letter funnel that systematically pre-sells prospects before they ever speak with your team.",
  },
  {
    step: "03",
    title: "Algorithmic Meta Ads Media Buying",
    description:
      "We launch broad-targeted creative testing on Facebook and Instagram, deploying dynamic creative batches to consistently lower cost per lead and cost per call.",
  },
  {
    step: "04",
    title: "Sub-5-Minute Speed-to-Lead Appointment Setting",
    description:
      "Inbound inquiries are instantly engaged within 180 seconds via automated multi-channel SMS, email, and human appointment setters, locking in 85%+ show rates.",
  },
  {
    step: "05",
    title: "Strict 4-Tier Qualification Friction Gate",
    description:
      "Tire-kickers and low-intent leads without liquid investment capital ($5,000+) are automatically filtered out, ensuring your sales calendar is 100% qualified.",
  },
  {
    step: "06",
    title: "Closing Optimization & Sprint Scaling",
    description:
      "We review call recordings, refine sales friction points, and scale ad budgets aggressively backed by our 90-day double revenue performance commitment.",
  },
];

const faqs = [
  {
    q: "Why do businesses choose customer acquisition agencies over traditional lead gen agencies?",
    a: "Traditional lead generation agencies focus on cheap lead volume—delivering low-intent form fills or cold scraped emails that waste your sales team's hours. Modern customer acquisition agencies engineer end-to-end buyer systems: combining high-converting VSL funnels, broad Meta ad buying, strict financial qualification surveys, and sub-3-minute speed-to-lead nurture to deliver closed revenue rather than vanity metrics.",
  },
  {
    q: "What are qualified lead generation services and how do they work?",
    a: "Qualified lead generation services are performance marketing systems that filter inbound prospects before they can access your calendar. Instead of open booking links, prospects must verify decision-making authority, liquid capital ($5,000+ investment readiness), and specific pain points. This ensures every conversation on your calendar is with a vetted, sales-ready buyer.",
  },
  {
    q: "What makes QualifiedLeadsX different from other lead generation agencies?",
    a: "Most lead generation agencies scrape cold email lists or hand you raw, unverified contact spreadsheets with zero intent. QualifiedLeadsX builds a comprehensive inbound acquisition engine: we produce high-retention 12-minute VSL assets, manage broad-targeted Meta Ads, enforce strict 4-tier intake qualification surveys, and activate sub-5-minute speed-to-lead setters.",
  },
  {
    q: "How many qualified sales appointments can I expect each month?",
    a: "It depends on the offer, market and budget, so we do not promise a fixed number of calls. Published campaigns booked appointments for $4.81 to $45 each, and our appointment setting system averages an 88.3% call show-up rate.",
  },
  {
    q: "What is your pricing model for lead generation services?",
    a: "We operate on a transparent hybrid model combining a baseline sprint setup fee with performance bonuses tied to verified qualified calls and closed revenue. Furthermore, we back our engagements with a 90-day written double revenue guarantee.",
  },
  {
    q: "What is the minimum offer price required to work together?",
    a: "Our systems are engineered specifically for high-ticket service offers priced between $3,000 and $25,000+ (coaching programs, agency retainers, consulting agreements, and commercial services).",
  },
  {
    q: "How quickly does the client acquisition system go live?",
    a: "Our done-for-you sprint spans 14 to 21 business days from kickoff to live ad delivery, VSL deployment, and initial qualified calls appearing on your sales calendar.",
  },
  ...leadGenAgencyDeepDive.faqs,
];

export default function LeadGenAgencyPage() {
  const pageUrl = `${site.url}/lead-generation-agency`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Done-For-You Lead Generation Agency",
        serviceType: "B2B Lead Generation & Client Acquisition",
        description:
          "Premier lead generation agency installing done-for-you VSL funnels, Meta Ads, and AI appointment setting. Get 30–50 qualified calls guaranteed.",
        url: pageUrl,
        provider: orgRef,
        areaServed: TIER1_MARKETS.map((name) => ({ "@type": "Country", name })),
        offers: {
          "@type": "Offer",
          name: "High-Ticket Client Acquisition Sprint",
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
        items={[{ name: "Lead Generation Agency", url: "/lead-generation-agency" }]}
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
              Done-For-You Pipeline Engine
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            Customer Acquisition Agency for{" "}
            <span className="text-gradient-lime">High-Ticket B2B & Coaches</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            We install, manage, and scale complete client acquisition funnels that book qualified sales calls, with published campaigns booking appointments for $4.81 to $45 each. From Meta media buying to sub-5-minute appointment setting, everything is done for you.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              Quick answer
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What does a modern lead generation agency do?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              A modern lead generation agency engineers end-to-end client acquisition pipelines rather than delivering raw unverified spreadsheets. At QualifiedLeadsX, we manage algorithmic broad-targeted Meta Ads, construct 12-minute VSL funnels, deploy strict 4-tier qualification surveys, and activate sub-5-minute appointment setters that book sales-ready discovery calls directly on your calendar.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Implementation Process */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              OUR PROVEN METHODOLOGY
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              How Our Lead Generation System Works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              We eliminate vendor fragmentation by engineering every asset required to take cold prospects from curiosity to pre-sold sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-line bg-ink/70 p-7 transition-all hover:border-lime/40 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-lime block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-fog mb-3">{step.title}</h3>
                  <p className="text-sm text-mist leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Revenue Proof Section */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            PROVEN TRACK RECORD
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            $150M+ In Scaled Client Revenue Across 30+ Niches
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Every lead generation claim we make is backed by real ad account spends, recorded cash collections, and verified client video breakdowns.
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
              Review All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProofStack variant="full" />

      <DeepDive content={leadGenAgencyDeepDive} />

      {/* 25 Nov 2026 (City Page Plan): US hub, "lead generation companies near me", links down to every city and state page. */}
      <section className="py-16 sm:py-20 border-t border-line">
        <div className="container-x max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-fog">Lead generation companies near me: cities we serve</h2>
          <p className="mt-4 max-w-3xl text-mist leading-relaxed">
            Looking for a lead generation company near you? QualifiedLeadsX works remotely with service businesses across the United States, so you get the same system wherever you are: ads targeted to your service area, every lead qualified and contacted within minutes, and appointments booked in your time zone. These pages show the local market numbers and the published results closest to each city.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[...statePages, ...cityPages].length > 0 && (
              <>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-dim">States</p>
                  <ul className="mt-3 space-y-2">
                    {statePages.map((l) => (
                      <li key={l.slug}><Link href={`/lead-generation-agency/${l.slug}`} className="text-lime underline-offset-2 hover:underline">Lead generation agency in {l.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-dim">Cities</p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {cityPages.map((l) => (
                      <li key={l.slug}><Link href={`/lead-generation-agency/${l.slug}`} className="text-lime underline-offset-2 hover:underline">{l.name}, {l.region}</Link></li>
                    ))}
                  </ul>
                </div>
              </>
            )}
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
              Frequently Asked Questions About Our Agency
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
        eyebrow="FILL YOUR PIPELINE"
        title={
          <>
            Stop chasing leads. Start speaking with buyers on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute strategy call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

