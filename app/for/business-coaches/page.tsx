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
  title: "Clients for Business Coaches | QualifiedLeadsX",
  description:
    "Predictable client acquisition for business coaches. Book 20–40 qualified founder calls every month with paid Meta ads and 2-way appointment setters.",
  alternates: {
    canonical: `${site.url}/for/business-coaches`,
  },
  openGraph: {
    title: "Clients for Business Coaches | QualifiedLeadsX",
    description:
      "Predictable client acquisition for business coaches. Book 20–40 qualified founder calls every month.",
    url: `${site.url}/for/business-coaches`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you target verified business owners on Meta Ads?",
    a: "We combine Meta Advantage+ broad algorithmic targeting with high-intent qualification copy, calling out revenue milestones ($500K to $5M ARR) and specific operational bottlenecks. We also deploy Lookalikes based on existing client lists and custom buyer personas.",
  },
  {
    q: "What is the average cost per booked call for business coaches?",
    a: "Based on our benchmark data across 35+ coaching programs, the average cost per qualified booked call with a business owner ranges from $140 to $240.",
  },
  {
    q: "Do you filter out early-stage founders who cannot afford a $5K+ coaching offer?",
    a: "Yes. Our multi-step qualification funnel and dedicated appointment setters ask mandatory questions regarding annual revenue, team size, and immediate investment readiness before calendar access is granted.",
  },
  {
    q: "How quickly can business coaching campaigns start generating calls?",
    a: "Our clients typically launch within 7 to 10 days of onboarding and begin having qualified discovery calls on their calendar within 48 to 72 hours of campaign activation.",
  },
];

export default function BusinessCoachesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/business-coaches#service`,
        name: "Lead Generation for Business Coaches",
        description:
          "Turnkey client acquisition engine for business coaches, masterminds, and advisory firms to book 20–40 qualified founder appointments monthly.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Coaching Client Acquisition",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/business-coaches#faq`,
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
          { name: "Business Coaches", url: "/for/business-coaches" },
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
              Vertical Focus: Business & Executive Coaching
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Clients for Business Coaches
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                To acquire <strong>high-paying clients for business coaches ($5K–$25K packages)</strong>, we deploy paid Meta direct-response campaigns paired with 10-minute VSL funnels and 2-way setter triage. This system books 20 to 40 qualified founder appointments monthly at an average cost of $140–$240 per call.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">20–40</div>
                <div className="text-xs text-fog mt-1">Booked Founder Calls / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$165</div>
                <div className="text-xs text-fog mt-1">Avg Cost Per Booked Call</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">81.5%</div>
                <div className="text-xs text-fog mt-1">Calendar Show-Up Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">4.8x</div>
                <div className="text-xs text-fog mt-1">Average Cash ROAS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Coaching Practice
              </Link>
              <Link
                href="/case-studies"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                View $846K Coaching Case Study →
              </Link>
            </div>
          </div>
        </section>

        {/* Breakdown */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-6">
              The 3 Reasons Most Business Coaches Struggle to Scale
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-fog text-sm leading-relaxed">
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-paper font-semibold mb-2">Organic Content Exhaustion</h3>
                <p>Posting daily on LinkedIn and Instagram only reaches existing contacts. Paid traffic creates a scalable acquisition pipeline that doesn&apos;t depend on algorithm mood swings.</p>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-paper font-semibold mb-2">Unqualified Tire-Kickers</h3>
                <p>Unfiltered Calendly links attract early-stage dreamers with no budget. Our setter qualification ensures you only speak with businesses generating verified revenue.</p>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-paper font-semibold mb-2">No Show-Rate Protection</h3>
                <p>Industry-standard coaching show rates hover around 50%. Our automated SMS and WhatsApp sequences drive show rates above 80% with pre-call video assets.</p>
              </div>
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
