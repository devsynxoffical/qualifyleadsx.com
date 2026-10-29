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
  CalendarCheck,
  Clock,
  MessageSquare,
  Bot,
  Filter,
  Check,
  PhoneCall,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Appointment Setting With AI Follow-Up and Speed to Lead - QualifiedLeadsX",
  },
  description:
    "Automated appointment setting system with sub-5-minute speed to lead. Turn cold inquiries into pre-qualified, high-ticket sales calls. Book your demo.",
  keywords: [
    "appointment setting",
    "speed to lead",
    "b2b appointment setting",
    "automated appointment setting",
    "appointment setter agency",
    "ai appointment setting",
    "lead qualification system",
    "high ticket sales calls",
  ],
  alternates: {
    canonical: "/appointment-setting",
  },
  openGraph: {
    title: "Appointment Setting With AI Follow-Up and Speed to Lead - QualifiedLeadsX",
    description:
      "Automated appointment setting system with sub-5-minute speed to lead. Turn cold inquiries into pre-qualified, high-ticket sales calls.",
    url: `${site.url}/appointment-setting`,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/images/blog/vsl-funnel-blueprint.jpg`,
        width: 1200,
        height: 630,
        alt: "Appointment Setting With AI Follow-Up and Speed to Lead - QualifiedLeadsX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointment Setting With AI Follow-Up and Speed to Lead - QualifiedLeadsX",
    description:
      "Automated appointment setting system with sub-5-minute speed to lead. Turn cold inquiries into pre-qualified, high-ticket sales calls.",
  },
};

const appointmentFaqs = [
  {
    q: "How does automated appointment setting compare to hiring human appointment setters?",
    a: "Human appointment setters cost between $3,500 and $5,500 per month in base salary plus commissions, suffer from fatigue, take sick days, and frequently experience 30-to-90 minute response delays. Our automated system executes sub-3-minute speed to lead 24/7 across WhatsApp, SMS, and email with zero payroll overhead, achieving 2.8x higher appointment booking velocity without commission churn.",
  },
  {
    q: "Why is speed to lead critical for high-ticket client acquisition?",
    a: "Empirical sales studies prove that responding to an inbound lead within 5 minutes makes you 21 times more likely to qualify and book that prospect compared to waiting 30 minutes. After 5 minutes, lead attention decays by 80%. Our automated speed-to-lead protocol triggers instant two-way conversational confirmation before competitor agencies even open their email notifications.",
  },
  {
    q: "How do you filter out low-budget leads and tire-kickers?",
    a: "We never provide open calendar booking links. Prospects must pass through an automated 4-tier conditional qualification gate verifying monthly revenue, business model, and investment capital ($5,000+ liquid capital requirement). Underqualified prospects are politely routed to low-ticket training assets, protecting your sales closers' time.",
  },
  {
    q: "What CRM and calendar platforms does this appointment setting system integrate with?",
    a: "Our architecture integrates natively with GoHighLevel, HubSpot, Salesforce, Calendly, Close CRM, and Zapier/Make webhooks. Leads flow directly into your existing sales pipeline with custom tags, lead source attribution, and qualification score cards.",
  },
  {
    q: "How does this system achieve an 88%+ sales call show-up rate?",
    a: "Most agencies suffer from 40–50% calendar no-shows because they send generic automated emails that go to spam. We deploy an omnichannel pre-call indoctrination sequence via WhatsApp and SMS: prospects receive short video case studies, 1-click attendance confirmation, and an interactive prep workbook that builds authority prior to the call.",
  },
];

export default function AppointmentSettingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automated B2B Appointment Setting & Speed-to-Lead Follow-Up",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.png`,
    },
    serviceType: "B2B Appointment Setting & Automated Qualification",
    description:
      "Done-for-you automated appointment setting engine with sub-5-minute speed to lead, conditional qualification filtration, and pre-call video indoctrination.",
    areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "High-Ticket Appointment Setting Infrastructure",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sub-5-Minute Speed-to-Lead Automated Workflow",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "4-Tier Conditional Lead Qualification Gate",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Omnichannel WhatsApp & SMS Indoctrination Architecture",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: appointmentFaqs.map((faq) => ({
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
          { name: "Appointment Setting", url: "/appointment-setting" },
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
            <Flame className="w-4 h-4 text-lime" />
            <span>High-Velocity Pipeline Automation</span>
          </div>

          {/* Primary Keyword H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
            Automated <span className="text-lime">Appointment Setting</span> With Sub-5-Minute Speed To Lead
          </h1>

          {/* Subtitle with Secondary Keyword */}
          <p className="mt-6 text-lg sm:text-2xl text-mist max-w-3xl mx-auto leading-relaxed font-normal">
            Replace unreliable human setter teams with an automated pipeline that engages inquiries in under 3 minutes, qualifies liquid capital, and books 30–50 ready-to-close sales calls every month.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={site.bookCallUrl} variant="primary" size="lg" className="shadow-[0_0_40px_rgba(201,242,107,0.35)]">
              Book Architecture Walkthrough
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Verified Show-Up Benchmarks
            </Button>
          </div>

          {/* AEO Fast Answer Direct Summary Box */}
          <div className="mt-12 rounded-2xl border-2 border-lime/40 bg-panel/85 p-6 sm:p-8 backdrop-blur-md max-w-3xl mx-auto text-left shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-lime animate-pulse" />
              <span>AEO Executive Summary: How It Works</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-mist">
              <strong>QualifiedLeadsX™</strong> installs an automated B2B <strong>appointment setting</strong> infrastructure engineered for high-ticket coaches, consultants, and growth agencies. Combining 4-tier conditional qualification surveys with sub-5-minute multichannel <strong>speed to lead</strong> across WhatsApp, SMS, and email, our system eliminates tire-kickers and books 30–50 sales-ready appointments every month with an 88%+ show-up rate.
            </p>
          </div>
        </div>
      </section>

      {/* Telemetry Bar */}
      <section className="py-8 bg-panel border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">&lt; 3 Min</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Average Speed to Lead</div>
            </div>
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">88.3%</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Call Show-Up Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">58.1%</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Lead Qualification Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-ink/40 border border-line/40">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-lime">$0</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-mist">Human Setter Overhead</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Speed To Lead Reality Section */}
      <section className="py-16 sm:py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              THE MATHEMATICS OF CONVERSION
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Why 5 Minutes Decides A $10,000+ High-Ticket Deal
            </h2>
            <p className="mt-3 text-base text-mist">
              Every minute of delay after an inbound inquiry is submitted drastically reduces your conversion velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-line bg-panel p-7 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-base mb-4">
                  21x
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Qualification Multiplier
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Contacting a prospect within 5 minutes results in a 21x increase in lead qualification compared to waiting 30 minutes.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                Harvard Business Review Benchmark
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-7 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-base mb-4">
                  391%
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Conversion Lift
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Immediate sub-3-minute omnichannel follow-up delivers a 391% higher close rate compared to standard industry 24-hour response lag.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                Velocify Lead Management Study
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-7 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold text-base mb-4">
                  88%+
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Show-Up Rate Lock
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Our automated WhatsApp speed-to-lead protocol secures instant calendar confirmation, slashing sales call no-shows to under 12%.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-line/50 text-xs font-mono text-lime font-medium">
                QualifiedLeadsX™ Verified Client Average
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Tier Qualification Filter Breakdown */}
      <section className="py-16 sm:py-24 bg-panel border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              THE TIRE-KICKER ELIMINATOR
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              The 4-Tier Conditional Lead Qualification Gate
            </h2>
            <p className="mt-3 text-base text-mist">
              How our appointment setting architecture protects your calendar from unqualified leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-lime font-bold mb-2">Gate 01</div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Revenue Threshold
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Filters by current monthly revenue brackets (&lt;$10K, $10K–$30K, $30K–$100K+). Businesses below minimum threshold are filtered out.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-dim">
                Eliminates Hobbyists
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-lime font-bold mb-2">Gate 02</div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Bottleneck Audit
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Pinpoints the exact pain point (Lead Volume, Qualification, Closing Rate, or Team Capacity) before the prospect speaks with your closer.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-dim">
                Pre-Call Intelligence
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-lime font-bold mb-2">Gate 03</div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Liquid Capital Gate
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Explicit confirmation that the prospect has minimum investment capital ($5,000+) ready to deploy within 14 days of the strategy session.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-dim">
                Capital Verification
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-ink/60 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-lime font-bold mb-2">Gate 04</div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Dynamic Routing
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal">
                  Qualified buyers unlock VIP closer calendar slots. Unqualified inquiries are redirected to self-paced low-ticket training materials.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-xs font-mono text-dim">
                Automatic Segmentation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal SEO Interlink Banner */}
      <section className="py-12 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-lime/30 bg-panel/70 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                COMPATIBLE SERVICE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                Pair With Our Performance Meta Ads Agency Service
              </h3>
              <p className="text-sm text-mist mt-2 max-w-2xl">
                Drive high-intent executive traffic into your automated appointment setting engine with our broad Meta creative buying machine.
              </p>
            </div>
            <Link
              href="/meta-ads-agency"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-lime text-ink hover:brightness-110 transition-all shrink-0 shadow-[0_0_20px_rgba(201,242,107,0.3)]"
            >
              <span>Explore Meta Ads Agency</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Speed-to-Lead & Qualification Blueprints */}
      <section className="py-16 sm:py-20 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">
                AUTOMATION & CLOSING BLUEPRINTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1.5 tracking-tight">
                Recommended Qualification & Speed-to-Lead Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-mist hover:text-lime transition-colors shrink-0"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/blog/ai-whatsapp-lead-nurture-pipeline-high-ticket"
              className="group flex flex-col justify-between rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-lime/40 hover:bg-elevated hover:-translate-y-1"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-lime font-semibold">
                  Speed-To-Lead Architecture
                </span>
                <h3 className="text-base font-bold font-heading text-white mt-2 group-hover:text-lime transition-colors leading-snug">
                  Automated WhatsApp Nurture & Sub-60s Follow-Up
                </h3>
                <p className="text-xs text-mist mt-2 leading-relaxed line-clamp-3">
                  Why 98% open rates on WhatsApp outperform email follow-up and how automated touchpoints guarantee 85%+ show-up rates.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-line/40 flex items-center justify-between text-xs font-mono text-lime">
                <span>Read Protocol</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/blog/automated-lead-qualification-system-high-ticket"
              className="group flex flex-col justify-between rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-lime/40 hover:bg-elevated hover:-translate-y-1"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-lime font-semibold">
                  Lead Filtration
                </span>
                <h3 className="text-base font-bold font-heading text-white mt-2 group-hover:text-lime transition-colors leading-snug">
                  Automated Filters to Eliminate Unqualified Sales Calls
                </h3>
                <p className="text-xs text-mist mt-2 leading-relaxed line-clamp-3">
                  The exact conditional logic questions, deposit mechanisms, and pre-call sequences that protect your sales closers.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-line/40 flex items-center justify-between text-xs font-mono text-lime">
                <span>Read Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/blog/high-ticket-sales-training-framework"
              className="group flex flex-col justify-between rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-lime/40 hover:bg-elevated hover:-translate-y-1"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-lime font-semibold">
                  Sales Conversion
                </span>
                <h3 className="text-base font-bold font-heading text-white mt-2 group-hover:text-lime transition-colors leading-snug">
                  The Closer & Qualification Framework That Doubles Win Rates
                </h3>
                <p className="text-xs text-mist mt-2 leading-relaxed line-clamp-3">
                  Discover the pre-call indoctrination architecture and objection handling matrix that turns booked calls into closed revenue.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-line/40 flex items-center justify-between text-xs font-mono text-lime">
                <span>Read Framework</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-ink border-t border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-3">
              <HelpCircle className="w-4 h-4 text-lime" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Frequently Asked Questions About Appointment Setting
            </h2>
            <p className="mt-3 text-base text-mist">
              Insights into our speed-to-lead automation, qualification surveys, and calendar integration.
            </p>
          </div>

          <div className="space-y-4">
            {appointmentFaqs.map((faq, i) => (
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
        eyebrow="Done-For-You Appointment Setting Installation"
        title={
          <>
            Ready to install a sub-5-minute{" "}
            <em className="font-semibold not-italic text-lime">appointment setting engine into your business?</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
