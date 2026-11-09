import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProofStack } from "@/components/sections/ProofStack";

export const metadata: Metadata = {
  title: "Course Creator Lead Generation | QualifiedLeadsX",
  description:
    "Scale premium courses and cohort masterminds ($1.5K–$10K) with VSL funnels, webinar remarketing and phone setters that drive steady enrollments.",
  alternates: {
    canonical: `${site.url}/for/course-creators`,
  },
  openGraph: {
    title: "Course Creator Lead Generation | QualifiedLeadsX",
    description:
      "Scale premium courses & cohort masterminds ($1.5K–$10K). High-converting VSL funnels and phone setters.",
    url: `${site.url}/for/course-creators`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why do low-ticket $47 course funnels fail to produce real profit?",
    a: "Customer acquisition costs on Meta have risen. Selling a $47 course requires 10x the conversion volume to break even on ad spend. Transitioning into high-ticket cohorts or VIP implementation tiers ($2,000–$5,000) provides the margin required to scale ad budgets aggressively.",
  },
  {
    q: "Do you recommend automated webinars or 12-minute VSL funnels?",
    a: "For offers between $1,500 and $10,000, 12-to-15-minute direct VSL funnels out-convert 60-minute webinars. Today's buyers want concise proof, clear mechanisms, and an immediate pathway to speak with an advisor rather than sitting through fluff.",
  },
  {
    q: "How do you handle cohort launch deadlines versus evergreen funnels?",
    a: "We architect both evergreen rolling enrollment engines and seasonal launch sprint campaigns. Evergreen funnels maintain steady weekly cash flow, while timed cohorts generate large cash injection spikes.",
  },
  {
    q: "What is the benchmark ROAS for high-ticket course funnels?",
    a: "Our course creator campaigns average 3.5x to 5.5x front-end return on ad spend, with back-end mastermind upsells driving 12-month customer value above $8,500.",
  },
];

export default function CourseCreatorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/course-creators#service`,
        name: "Lead Generation for Course Creators & Cohorts",
        description:
          "Full-funnel client acquisition and enrollment infrastructure for digital education entrepreneurs, course creators, and cohort leaders.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Course Creator Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/course-creators#faq`,
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
          { name: "Course Creators", url: "/for/course-creators" },
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
              Digital Education & Cohort Masterminds
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Course Creator Lead Generation
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                For course creators selling <strong>premium programs ($1,500–$10,000)</strong>, <strong>lead generation requires direct VSL funnels paired with phone enrollment advisors</strong>. This bypasses low-converting checkout pages, yielding 4x higher student conversion and 80%+ show rates for cohort interviews.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">4.2x</div>
                <div className="text-xs text-fog mt-1">Average Front-End ROAS</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$2,800</div>
                <div className="text-xs text-fog mt-1">Average Offer Price Point</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">15 Mins</div>
                <div className="text-xs text-fog mt-1">Average VSL Watch Duration</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">32%</div>
                <div className="text-xs text-fog mt-1">Enrollment Call Close Rate</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Course Enrollments
              </Link>
              <Link
                href="/vsl-funnels"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect High-Ticket VSL Funnels →
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
