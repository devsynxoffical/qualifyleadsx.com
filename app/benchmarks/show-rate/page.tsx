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
  Timer,
  TrendingUp,
  Percent,
  CheckCircle2,
  Table,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Appointment Show Rate Benchmarks 2026 - QualifiedLeadsX",
  description:
    "Verified 2026 appointment show rate benchmarks by industry and channel. See how sub-5-minute speed to lead increases show rates to 88%+ consistently.",
  keywords: [
    "appointment show rate benchmarks",
    "sales call show rate",
    "b2b show rate benchmarks",
    "how to increase show rate",
    "calendar show up rate",
    "high ticket attendance rate",
  ],
  alternates: {
    canonical: "/benchmarks/show-rate",
  },
  openGraph: {
    title: "Appointment Show Rate Benchmarks 2026 - QualifiedLeadsX",
    description:
      "Verified 2026 appointment show rate data by industry and follow-up channel based on 125+ client accounts.",
    url: `${site.url}/benchmarks/show-rate`,
    type: "website",
  },
};

const channelComparisons = [
  {
    channel: "Email Confirmations Only (Industry Baseline)",
    avgShowRate: "52.4%",
    ghostRate: "47.6%",
    impact: "Emails land in Spam or Promotions folders; zero conversational commitment.",
  },
  {
    channel: "Email + 24hr SMS Reminder",
    avgShowRate: "68.2%",
    ghostRate: "31.8%",
    impact: "Improves recall slightly but fails to establish active conversational buy-in.",
  },
  {
    channel: "Two-Way Conversational SMS (Sub-15 Mins)",
    avgShowRate: "79.1%",
    ghostRate: "20.9%",
    impact: "Requires prospect to text back confirmation, eliminating passive no-shows.",
  },
  {
    channel: "QualifiedLeadsX Full Speed-to-Lead Stack",
    avgShowRate: "88.4%",
    ghostRate: "11.6%",
    impact: "Sub-5-minute SMS, personalized WhatsApp voice memos, and setter intake checks.",
  },
];

const faqs = [
  {
    q: "What is an acceptable appointment show rate for high-ticket sales calls?",
    a: "In 2026, the cross-industry average appointment show rate for high-ticket sales calls is 58.2% when relying on standard email confirmations. However, funnels utilizing sub-5-minute speed-to-lead response, automated conversational SMS, and personalized WhatsApp confirmations achieve an average show rate of 88.4%, reducing wasted ad spend by over 50%.",
  },
  {
    q: "Why do high-ticket prospects ghost sales calls?",
    a: "Prospects ghost calls primarily because of delay and lack of pre-call conviction. If hours pass between their opt-in and confirmation, their initial emotional motivation fades, or they find alternative solutions. Immediate multi-channel engagement locks in their commitment.",
  },
  {
    q: "How does an 88% show rate impact customer acquisition costs?",
    a: "Increasing your show rate from 55% to 88% yields a 60% increase in conducted sales calls from the exact same advertising budget. This effectively cuts your true cost per attended discovery call by more than 37%.",
  },
];

export default function ShowRateBenchmarkPage() {
  const pageUrl = `${site.url}/benchmarks/show-rate`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        name: "Appointment Show Rate Benchmarks 2026",
        description:
          "Verified 2026 appointment show rate benchmarks by industry and channel from $50M+ in managed Meta ad spend.",
        url: pageUrl,
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
      <BreadcrumbJsonLd
        items={[
          { name: "Benchmarks", url: "/benchmarks" },
          { name: "Show Rate Benchmarks", url: "/benchmarks/show-rate" },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Attendance & Pipeline Retention Data
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            Appointment Show Rate Benchmarks 2026:{" "}
            <span className="text-gradient-lime">Channel & Industry Data</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Review how follow-up speed, communication channels, and intake qualification impact sales call attendance rates across 125+ client acquisition campaigns.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              What are realistic appointment show rate benchmarks in 2026?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              In 2026, the cross-industry average appointment show rate for high-ticket sales calls is 58.2% when relying on standard email confirmations. However, funnels utilizing sub-5-minute speed-to-lead response, automated conversational SMS, and personalized WhatsApp confirmations achieve an average show rate of 88.4%, reducing wasted ad spend by over 50%.
            </p>
          </div>
        </div>
      </section>

      {/* Channel Comparison Table */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              CHANNEL EFFICIENCY MATRIX
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-fog">
              Show Rate by Confirmation Protocol
            </h2>
            <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed font-sans">
              Why multi-channel conversational follow-up dramatically outperforms passive calendar notifications.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-ink/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-panel/90 text-xs font-mono uppercase tracking-wider text-fog">
                  <tr>
                    <th className="px-6 py-4">Confirmation Protocol</th>
                    <th className="px-6 py-4">Avg Show Rate</th>
                    <th className="px-6 py-4">Ghost / No-Show Rate</th>
                    <th className="px-6 py-4">Operational Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 font-sans">
                  {channelComparisons.map((item, idx) => (
                    <tr
                      key={item.channel}
                      className={idx === 3 ? "bg-lime/5 border-l-2 border-lime" : "hover:bg-elevated/40 transition-colors"}
                    >
                      <td className="px-6 py-4 font-bold text-fog">{item.channel}</td>
                      <td className="px-6 py-4 font-mono font-bold text-lime text-base">{item.avgShowRate}</td>
                      <td className="px-6 py-4 font-mono text-mist">{item.ghostRate}</td>
                      <td className="px-6 py-4 text-xs text-mist">{item.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-line/60 bg-panel/40 px-6 py-3 text-xs text-mist flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>Source: Aggregated from 125+ client accounts managed by QualifiedLeadsX.</span>
              <span className="font-mono text-lime font-medium">Updated for Q4 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              SHOW RATE FAQ
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
        eyebrow="BOOST YOUR SHOW RATE TO 88%"
        title={
          <>
            Install sub-5-minute speed to lead and eliminate no-shows on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute growth call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}
