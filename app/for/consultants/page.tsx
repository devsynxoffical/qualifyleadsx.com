import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
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
  title: "Client Acquisition Pipeline for B2B Consultants | QualifiedLeadsX™",
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
            <div className="rounded-2xl border border-line bg-panel p-8">
              <BarChart3 className="w-8 h-8 text-lime mb-4" />
              <h4 className="text-xl font-bold text-fog mb-2">Authority VSL & Whitepaper</h4>
              <p className="text-sm text-mist leading-relaxed">
                We craft an executive-grade 12-minute strategic presentation that breaks down your proprietary corporate solution and financial impact.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-8">
              <ShieldCheck className="w-8 h-8 text-lime mb-4" />
              <h4 className="text-xl font-bold text-fog mb-2">Enterprise Lead Gate</h4>
              <p className="text-sm text-mist leading-relaxed">
                Filter applicants by annual turnover ($1M–$50M+), team size, and immediate readiness to deploy advisory budgets.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-8">
              <TrendingUp className="w-8 h-8 text-lime mb-4" />
              <h4 className="text-xl font-bold text-fog mb-2">Pre-Call Proof Dossier</h4>
              <p className="text-sm text-mist leading-relaxed">
                Automated multi-channel briefings sent via WhatsApp and email that educate stakeholders and compress the sales cycle from months to days.
              </p>
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
