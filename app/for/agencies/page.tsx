import type { Metadata } from "next";
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
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Layers,
  Sparkles,
  HelpCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Acquisition System for Digital & Marketing Agencies",
  description:
    "Scale your agency past $100K/month with predictable inbound sales calls. We install a done-for-you VSL funnel and Meta ads machine to book high-ticket agency retainers.",
  keywords: [
    "client acquisition for agencies",
    "agency lead generation system",
    "how to get agency clients",
    "digital agency client acquisition",
    "scale marketing agency to 100k",
  ],
  alternates: {
    canonical: "/for/agencies",
  },
  openGraph: {
    title: "Client Acquisition System for Digital & Marketing Agencies | QualifiedLeadsX™",
    description:
      "Install a high-converting client acquisition funnel for marketing, software, and creative agencies. Book 35–60 qualified retainer calls every month.",
    url: "/for/agencies",
    type: "website",
  },
};

const agencyFaqs = [
  {
    q: "We are an agency ourselves—why not just run ads internally?",
    a: "Most agencies are trapped working in their business rather than on it. Delivering for clients eats your creative bandwidth. We provide the dedicated operational focus, vetted $150M+ VSL frameworks, and proprietary lead qualification filters so you don't waste 6 months in internal trial-and-error.",
  },
  {
    q: "Will this work if we sell specialized services like Web3, SEO, or custom software dev?",
    a: "Yes. The core mechanism of the VSL funnel is translating specialized, technical services into clear commercial outcomes (revenue, efficiency, CAC reduction) that non-technical CEOs and CMOs gladly pay premium retainers for.",
  },
  {
    q: "How does this prevent commoditization and price haggling?",
    a: "A VSL positions your agency around a proprietary, branded mechanism rather than a generic deliverable (e.g. 'Custom Growth Engine' vs 'We do Facebook Ads'). When prospects view you as a strategic category-of-one partner, price shopping evaporates.",
  },
  {
    q: "What monthly retainer size does this system best support?",
    a: "The system is optimized for monthly agency retainers ranging from $3,000/mo to $25,000/mo+, as well as enterprise project fees exceeding $15,000.",
  },
];

export default function AgenciesLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Agency Client Acquisition System",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    serviceType: "Digital Agency Growth & Client Acquisition",
    description:
      "Done-for-you client acquisition funnels and appointment generation for digital, marketing, software, and creative agencies.",
    areaServed: "Global",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: agencyFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Industries", url: "/#different" },
          { name: "Agencies", url: "/for/agencies" },
        ]}
      />

      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-lime/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-lime mb-6">
            <Layers className="w-4 h-4 text-lime" />
            <span>Built For Marketing, Software & Creative Agencies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-fog max-w-4xl mx-auto leading-[1.1]">
            Scale Your Agency Retainers Past{" "}
            <span className="text-gradient-lime font-extrabold">$100K/Month Predictably</span>
          </h1>

          <p className="mt-6 text-lg sm:text-2xl text-mist max-w-3xl mx-auto leading-relaxed">
            Stop relying on word-of-mouth or burnt-out cold email scrapers. We install a battle-tested inbound VSL funnel that delivers 35–60 qualified retainer sales appointments every month.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book-your-call" variant="primary" size="xl">
              Book Your Agency Growth Strategy Call
            </Button>
            <Button href="/case-studies" variant="outline" size="xl">
              See Agency Scaling Case Studies
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">35–60</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Retainer Calls / Mo</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fog">$5K–$25K</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Monthly Retainer Size</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">84%+</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Show-Up Rate</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fog">21 Days</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Turnkey Installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-base/60 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">
              The Agency Trap vs Scalable Growth
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-heading text-fog">
              Why 90% of Agencies Get Stuck at the $30K–$50K/Month Ceiling
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl border border-rose/30 bg-panel/80 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-rose font-mono text-sm uppercase tracking-wider font-bold mb-6">
                <XCircle className="w-5 h-5" />
                <span>The Commodity Agency Trap</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-mist">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Constantly buying secondary domains as Google & Microsoft kill cold email outreach.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Selling commoditized deliverables (ads, SEO, design) and competing on price.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Losing a $5K client and scrambling in panic to replace the churn.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Founder stuck doing all sales calls, fulfillment, and prospecting simultaneously.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-lime/50 bg-panel p-8 sm:p-10 shadow-[0_0_60px_-15px_rgba(201,242,107,0.12)]">
              <div className="flex items-center gap-3 text-lime font-mono text-sm uppercase tracking-wider font-bold mb-6">
                <CheckCircle2 className="w-5 h-5" />
                <span>The QualifiedLeadsX™ Inbound Machine</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-fog">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>A distinct proprietary mechanism that commands $5K–$25K/mo retainers easily.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Automated inbound paid traffic on Meta generating pre-sold executive interest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Application filter screening out budget-conscious micro-businesses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Predictable revenue scaling to $100K–$300K/month with stable margins.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Architecture Breakdown */}
      <section className="py-20 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">
              The Agency Solution
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-heading text-fog">
              What We Build & Install for Your Agency
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-panel p-8">
              <Zap className="w-8 h-8 text-lime mb-4" />
              <h4 className="text-xl font-bold text-fog mb-2">Proprietary Offer Repositioning</h4>
              <p className="text-sm text-mist leading-relaxed">
                We transform commoditized services into high-margin commercial solutions that solve a painful board-level problem for corporate clients.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-8">
              <Layers className="w-8 h-8 text-lime mb-4" />
              <h4 className="text-xl font-bold text-fog mb-2">Cinematic VSL & Case Study Funnel</h4>
              <p className="text-sm text-mist leading-relaxed">
                A custom-built, ultra-fast landing page featuring your best client proof, workflow demonstrations, and conversion-engineered video scripts.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-8">
              <TrendingUp className="w-8 h-8 text-lime mb-4" />
              <h4 className="text-xl font-bold text-fog mb-2">Broad Meta Ads Engine</h4>
              <p className="text-sm text-mist leading-relaxed">
                Targeted direct response video creative tested and scaled to deliver consistent $80–$150 qualified discovery appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-base/50 border-t border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-3">
              <HelpCircle className="w-4 h-4 text-lime" />
              <span>Agency Growth FAQs</span>
            </div>
            <h3 className="text-3xl font-bold font-heading text-fog">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {agencyFaqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-fog mb-2">{faq.q}</h4>
                <p className="text-sm sm:text-base text-mist leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Scale Your Agency"
        title={
          <>
            Install a predictable retainer acquisition system{" "}
            <em className="font-semibold not-italic text-lime">in under 21 days.</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
