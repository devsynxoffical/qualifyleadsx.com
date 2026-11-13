import type { Metadata } from "next";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Executive Coaching Clients | QualifiedLeadsX",
  description:
    "Predictable client acquisition for executive coaches and leadership advisors. Reach C-suite and VP buyers for $10K–$50K engagements.",
  alternates: {
    canonical: `${site.url}/for/executive-coaches`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Executive Coaching Clients | QualifiedLeadsX",
    description:
      "Client acquisition for executive coaches & leadership advisors. Connect with C-suite leaders for $10K–$50K engagements.",
    url: `${site.url}/for/executive-coaches`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Do C-suite executives and enterprise leaders really click on social ads?",
    a: "Yes. C-suite leaders, founders, and VPs spend substantial personal time on Facebook and Instagram outside corporate firewalls. When presented with authoritative, intellectually compelling frameworks that address executive burnout, team alignment, or board management, they engage and book calls.",
  },
  {
    q: "How do you frame high-ticket executive coaching offers ($15K–$50K)?",
    a: "We structure messaging around strategic ROI, enterprise enterprise leadership scale, and confidential advisor positioning rather than generic self-improvement. We pair this with white-paper VSLs and private executive briefing decks.",
  },
  {
    q: "What is the typical sales cycle length for executive coaching?",
    a: "Executive coaching sales cycles typically range from 14 to 30 days. For self-funded founder/CEO buyers, closing often happens within 2 discovery conversations.",
  },
  {
    q: "Can this system integrate with corporate procurement pathways?",
    a: "Yes. Our CRM workflows provide pre-built enterprise pitch assets, board-approval one-pagers, and corporate vendor documentation to accelerate budget approval.",
  },
];

export default function ExecutiveCoachesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/executive-coaches#service`,
        name: "Client Acquisition for Executive Coaches",
        description:
          "High-touch client acquisition infrastructure connecting leadership advisors and executive coaches with enterprise executives and venture-backed founders.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Executive Coaching Client Acquisition",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/executive-coaches#faq`,
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
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/for" },
          { name: "Executive Coaches", url: "/for/executive-coaches" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-ink min-h-screen text-fog">
        <section className="relative pt-20 pb-16 border-b border-line overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <span className="text-lime text-xs font-mono tracking-widest uppercase">
              Leadership & Enterprise Advisory
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Executive Coaching Clients
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                To acquire <strong>executive coaching clients ($10K–$50K retainers)</strong>, we deploy executive-grade thought-leadership video campaigns that reach C-level decision-makers. Backed by private executive briefings and white-glove appointment concierge, this system books 12 to 25 qualified leadership consultations monthly.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">15–25</div>
                <div className="text-xs text-fog mt-1">C-Suite Inquiries / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$18K</div>
                <div className="text-xs text-fog mt-1">Average Contract Value</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">86%</div>
                <div className="text-xs text-fog mt-1">Consultation Attendance Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">5.2x</div>
                <div className="text-xs text-fog mt-1">First-Year Return on Ad Spend</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Build Executive Advisory Funnel
              </Link>
              <Link
                href="/benchmarks/close-rate"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                High-Ticket Close Rate Benchmarks →
              </Link>
            </div>
          </div>
        </section>

        <ProofStack variant="full" />

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                  <h3 className="text-lg font-semibold text-paper mb-2">{f.q}</h3>
                  <p className="text-fog text-sm sm:text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
