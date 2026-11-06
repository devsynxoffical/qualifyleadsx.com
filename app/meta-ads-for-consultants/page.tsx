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
  title: "Facebook Ads for Consultants | QualifiedLeadsX",
  description:
    "Generate high-fee B2B consulting engagements ($10K–$50K+). Bespoke Meta ad funnels, executive white-paper VSLs, and verified C-suite consultations.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-consultants`,
  },
  openGraph: {
    title: "Facebook Ads for Consultants | QualifiedLeadsX",
    description:
      "Generate high-fee B2B consulting engagements ($10K–$50K+). Bespoke Meta ad funnels and executive VSLs.",
    url: `${site.url}/meta-ads-for-consultants`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Can Facebook ads really reach enterprise corporate executives?",
    a: "Yes. Senior executives, VPs, and enterprise decision-makers check personal Facebook and Instagram feeds outside office hours. When targeted with sophisticated diagnostic messaging and ROI breakdowns, they engage at rates comparable to LinkedIn at 60% lower CPMs.",
  },
  {
    q: "How do you position consulting offers to command $20K+ fees?",
    a: "We steer away from generic service checklists and frame your offer around an institutional transformation framework or risk-mitigation protocol, supported by a 12-minute executive briefing VSL.",
  },
  {
    q: "What is the typical cost per consulting consultation?",
    a: "Qualified consulting discovery sessions range from $180 to $340, yielding typical customer acquisition costs of $1,200 to $2,800 on contracts worth $15,000 to $50,000+.",
  },
  {
    q: "How do you pre-qualify consulting prospects before they get on the calendar?",
    a: "Our intake form requires prospects to state company annual revenue, current system bottlenecks, and project timeline before unlocking calendar availability.",
  },
];

export default function MetaAdsForConsultantsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-consultants#service`,
        name: "Meta Ads for Management & B2B Consultants",
        description:
          "Targeted paid social advertising and executive consultation funnels for specialized business consultants, operations advisors, and fractional leaders.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Consultant Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-consultants#faq`,
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
          { name: "Meta Ads for Consultants", url: "/meta-ads-for-consultants" },
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
              B2B Strategic Advisory & Fractional Executive Acquisition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Consultants
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for consultants</strong> secure \$10,000–\$50,000+ corporate engagements by using high-authority diagnostic video assets and executive briefing funnels. Operating at 60% lower CPMs than LinkedIn Ads, this system places 15 to 30 qualified stakeholder consultations monthly directly on your calendar.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">15–30</div>
                <div className="text-xs text-fog mt-1">Qualified Executive Calls / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$24K</div>
                <div className="text-xs text-fog mt-1">Average Contract Retainer</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">84%</div>
                <div className="text-xs text-fog mt-1">Consultation Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">5.4x</div>
                <div className="text-xs text-fog mt-1">Consulting Retainer ROAS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Your Consulting Firm
              </Link>
              <Link
                href="/for/consultants"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Consulting Client Solutions →
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

