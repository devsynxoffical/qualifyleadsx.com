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
  title: "Facebook Ads for Coaches | QualifiedLeadsX",
  description:
    "Scale $5K–$25K coaching offers with high-converting Facebook and Instagram ads. Tested creative frameworks, broad Advantage+ scaling, and sub-$180 booked calls.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-coaches`,
  },
  openGraph: {
    title: "Facebook Ads for Coaches | QualifiedLeadsX",
    description:
      "Scale $5K–$25K coaching offers with high-converting Facebook ads and sub-$180 booked calls.",
    url: `${site.url}/meta-ads-for-coaches`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "What ad budget do coaches need to start scaling on Facebook?",
    a: "We recommend a minimum testing budget of $3,000 to $5,000 per month ($100 to $160/day). At this spend level, our algorithm collects sufficient conversion events to optimize Advantage+ audiences within the first 14 days.",
  },
  {
    q: "How do you stop tire-kickers with no money from booking calls?",
    a: "We implement dynamic qualification friction directly into the funnel: mandatory multi-choice income questions, application approval checkpoints, and pre-call homework videos that filter out non-serious inquiries.",
  },
  {
    q: "What creative formats work best for high-ticket coaching on Meta?",
    a: "Founder-led 'Problem-Unpacking' talking head videos (60–90 seconds) and authentic whiteboard diagram breakdowns consistently beat polished studio commercials, generating 40% cheaper booked calls.",
  },
  {
    q: "What is your average ROAS for business coaching campaigns?",
    a: "Our coaching client accounts average 4.2x to 5.8x front-end return on ad spend within 60 days of launch.",
  },
];

export default function MetaAdsForCoachesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-coaches#service`,
        name: "Meta & Facebook Ads Management for Coaches",
        description:
          "Specialized Meta ad buying, creative production, and VSL funnels engineered to scale high-ticket coaching programs to $100K+/month.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Paid Advertising Management",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-coaches#faq`,
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
          { name: "Services", url: "/services" },
          { name: "Meta Ads for Coaches", url: "/meta-ads-for-coaches" },
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
              Paid Social for High-Ticket Mentorship
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Coaches
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for coaches</strong> scale $5,000–$25,000 programs by combining direct-response founder videos, Advantage+ algorithmic broad targeting, and VSL funnels. Delivering booked calls at $140–$220, this system generates qualified discovery calls with buyers pre-sold on your framework.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">$165</div>
                <div className="text-xs text-fog mt-1">Average Cost Per Booked Call</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">4.8x</div>
                <div className="text-xs text-fog mt-1">Average Coaching ROAS</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82%</div>
                <div className="text-xs text-fog mt-1">Calendar Show-Up Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&gt;125</div>
                <div className="text-xs text-fog mt-1">Coaches & Consultants Scaled</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Launch Coaching Meta Ads
              </Link>
              <Link
                href="/case-studies"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Inspect $846K Coaching Case Study →
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

