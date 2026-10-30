import type { Metadata } from "next";
import Image from "next/image";
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
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Building2,
  Sparkles,
  HelpCircle,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Acquisition Pipeline for B2B Consultants",
  description:
    "Predictable B2B sales pipeline for strategy, operations, and management consultants. Book 20–40 vetted discovery meetings with C-level executives every month.",
  keywords: [
    "client acquisition for consultants",
    "b2b consulting lead generation",
    "sales pipeline for consultants",
    "consulting business growth",
    "executive appointment setting",
  ],
  alternates: {
    canonical: "/for/consultants",
  },
  openGraph: {
    title: "Client Acquisition Pipeline for B2B Consultants | QualifiedLeadsX™",
    description:
      "Install an enterprise client acquisition funnel for B2B consultants. Book qualified C-level decision-makers without cold email deliverability headaches.",
    url: "/for/consultants",
    type: "website",
  },
};

const consultantFaqs = [
  {
    q: "Can high-ticket corporate consulting really be sold via paid acquisition funnels?",
    a: "Yes. Enterprise executives, VP of Operations, and founders spend significant personal time on digital channels. By positioning your advisory framework with authoritative, data-backed VSLs, you pre-sell corporate buyers before they even speak with your team.",
  },
  {
    q: "How do you ensure discovery calls are booked with actual decision-makers and not junior researchers?",
    a: "Our multi-step qualification architecture explicitly screens for title, company headcount, annual revenue, and purchasing authority. Anyone lacking direct decision-making power is automatically filtered into alternative nurturing sequences.",
  },
  {
    q: "How does this compare to hiring a traditional B2B appointment-setting agency?",
    a: "Traditional SDR agencies rely on spamming thousands of unvetted cold emails from burn domains, damaging your corporate brand and booking defensive, unprimed calls. Our inbound system positions you as the recognized authority, so prospects apply to consult with you.",
  },
  {
    q: "What retainer or project size does this system best support?",
    a: "The QualifiedLeadsX™ consulting engine is engineered for advisory retainers and project engagements ranging from $10,000 to $100,000+.",
  },
];

export default function ConsultantsLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B2B Consulting Client Acquisition System",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    serviceType: "B2B Pipeline & Client Acquisition Funnels",
    description:
      "Automated client acquisition funnels and executive appointment booking for high-ticket consultants and advisory firms.",
    areaServed: "Global",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: consultantFaqs.map((faq) => ({
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
          { name: "Consultants", url: "/for/consultants" },
        ]}
      />

      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-lime/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-lime mb-6">
            <Building2 className="w-4 h-4 text-lime" />
            <span>Built For B2B & Advisory Consultants</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-fog max-w-4xl mx-auto leading-[1.1]">
            Turn Corporate Consulting Into a{" "}
            <span className="text-gradient-lime font-extrabold">Predictable Client Machine</span>
          </h1>

          <p className="mt-6 text-lg sm:text-2xl text-mist max-w-3xl mx-auto leading-relaxed">
            Break free from erratic referral cycles. We install a done-for-you client acquisition pipeline that books 20–40 vetted discovery meetings with C-level executives every month.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book-your-call" variant="primary" size="xl">
              Book Executive Pipeline Strategy Call
            </Button>
            <Button href="/case-studies" variant="outline" size="xl">
              Explore Consultant Case Studies
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">20–40</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">C-Level Calls / Mo</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fog">25–35%</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Close Rate</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">$10K–$100K</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">Engagement Value</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-md">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fog">0 Cold Emails</div>
              <div className="text-xs text-mist mt-1 uppercase font-mono">100% Inbound Intent</div>
            </div>
          </div>

          {/* Enterprise Consulting Funnel Architecture Visual */}
          <div className="mt-14 relative mx-auto max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-panel/60 to-transparent p-2 sm:p-4 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl text-left">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-mist/70 hidden sm:inline-block">b2b-enterprise-consulting-dossier.v2</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-lime font-semibold">
                <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                <span>C-LEVEL PIPELINE ACTIVE</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 relative aspect-[16/9] shadow-inner group">
              <Image
                src="/images2/showreel/shot_09_ad_telemetry.webp"
                alt="B2B consulting client acquisition telemetry and enterprise decision-maker pipeline"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-base/60 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">
              Strategic Comparison
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-heading text-fog">
              The Referral Rollercoaster vs. An Enterprise Acquisition Funnel
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl border border-rose/30 bg-panel/80 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-rose font-mono text-sm uppercase tracking-wider font-bold mb-6">
                <XCircle className="w-5 h-5" />
                <span>The Traditional Consulting Trap</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-mist">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Relying 100% on word-of-mouth referrals with zero predictable control over pipeline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Suffering 3-month dry spells between major advisory projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Pitching to junior managers who lack budget sign-off authority.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>Giving away free consulting advice on 60-minute calls that never close.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-lime/50 bg-panel p-8 sm:p-10 shadow-[0_0_60px_-15px_rgba(201,242,107,0.12)]">
              <div className="flex items-center gap-3 text-lime font-mono text-sm uppercase tracking-wider font-bold mb-6">
                <CheckCircle2 className="w-5 h-5" />
                <span>The QualifiedLeadsX™ Pipeline</span>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-fog">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>High-authority VSL framing your advisory thesis before prospects book.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Rigorous qualification checking company size, budget, and decision rights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Executives show up informed, respectful, and prepared to pay premium fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span>Predictable revenue scaling to $100K–$250K/month with absolute clarity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Architecture */}
      <section className="py-20 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime mb-3">
              Consulting Pipeline Components
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold font-heading text-fog">
              Engineered For High-Dollar Corporate Engagements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-panel p-6 overflow-hidden group hover:border-lime/40 transition-all">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-5 bg-ink/90">
                <Image
                  src="/images2/showreel/shot_06_vsl_player.webp"
                  alt="Enterprise authority video presentation and whitepaper"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                  AUTHORITY ASSET
                </span>
              </div>
              <BarChart3 className="w-7 h-7 text-lime mb-3" />
              <h4 className="text-xl font-bold text-fog mb-2">Authority VSL & Whitepaper</h4>
              <p className="text-sm text-mist leading-relaxed">
                We craft an executive-grade 12-minute strategic presentation that breaks down your proprietary corporate solution and financial impact.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-6 overflow-hidden group hover:border-lime/40 transition-all">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-5 bg-ink/90">
                <Image
                  src="/images2/showreel/shot_18_heimdall.webp"
                  alt="Enterprise lead screening gate"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                  DECISION-MAKER GATE
                </span>
              </div>
              <ShieldCheck className="w-7 h-7 text-lime mb-3" />
              <h4 className="text-xl font-bold text-fog mb-2">Enterprise Lead Gate</h4>
              <p className="text-sm text-mist leading-relaxed">
                Filter applicants by annual turnover ($1M–$50M+), team size, and immediate readiness to deploy advisory budgets.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-6 overflow-hidden group hover:border-lime/40 transition-all">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-line/60 mb-5 bg-ink/90">
                <Image
                  src="/images2/showreel/shot_17_meridian.webp"
                  alt="Pre-call proof dossier and CRM synchronization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-lime font-bold px-2 py-0.5 rounded bg-ink/80 border border-lime/30">
                  PROOF DOSSIER
                </span>
              </div>
              <TrendingUp className="w-7 h-7 text-lime mb-3" />
              <h4 className="text-xl font-bold text-fog mb-2">Pre-Call Proof Dossier</h4>
              <p className="text-sm text-mist leading-relaxed">
                Automated multi-channel briefings sent via WhatsApp and email that educate stakeholders and compress the sales cycle from months to days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Enterprise Consulting Pipeline Snapshot Gallery */}
      <section className="py-20 bg-base/40 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              VERIFIED ENTERPRISE ENGAGEMENTS
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Real Advisory Pipelines. Measurable Enterprise Retainers.
            </h3>
            <p className="mt-3 text-base text-mist">
              Direct pipeline snapshots from management, operations, and financial consultants scaling with QualifiedLeadsX™.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/15-1.webp"
                  alt="Enterprise consulting high ticket contract acquisition"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">STRATEGY ADVISORY</div>
                <div className="text-sm font-semibold text-white mt-0.5">$180,000 Annual Retainer</div>
                <div className="text-xs text-mist/70 mt-1">Direct Enterprise Inbound Call</div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/17.webp"
                  alt="Operations consulting pipeline booking confirmation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">OPERATIONS CONSULTING</div>
                <div className="text-sm font-semibold text-white mt-0.5">28 C-Level Meetings / Mo</div>
                <div className="text-xs text-mist/70 mt-1">Screened for $5M+ Revenue</div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/20.webp"
                  alt="B2B marketing consulting closed sales proof"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">TECH CONSULTING</div>
                <div className="text-sm font-semibold text-white mt-0.5">34% Discovery Close Rate</div>
                <div className="text-xs text-mist/70 mt-1">Pre-Framed Methodology via VSL</div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-panel/70 p-3 hover:border-lime/40 transition-all shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-ink">
                <Image
                  src="/images/client success/12-1.webp"
                  alt="Corporate advisory high ticket client growth"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 px-2">
                <div className="text-xs font-mono text-lime font-bold">FINANCIAL ADVISORY</div>
                <div className="text-sm font-semibold text-white mt-0.5">5.1x ROI on Media Spend</div>
                <div className="text-xs text-mist/70 mt-1">Zero Cold Outreach Dependence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-base/50 border-t border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-3">
              <HelpCircle className="w-4 h-4 text-lime" />
              <span>Consultant FAQs</span>
            </div>
            <h3 className="text-3xl font-bold font-heading text-fog">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {consultantFaqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-fog mb-2">{faq.q}</h4>
                <p className="text-sm sm:text-base text-mist leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Consulting Growth Engine"
        title={
          <>
            Ready to secure enterprise retainers on demand?{" "}
            <em className="font-semibold not-italic text-lime">Book your consultation session.</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
