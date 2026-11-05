import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Home Improvement Leads | QualifiedLeadsX",
  description:
    "Exclusive homeowner lead generation for roofing, solar, HVAC, and kitchen remodeling contractors. Pre-set in-home estimates with verified property owners.",
  alternates: {
    canonical: `${site.url}/for/home-improvement`,
  },
  openGraph: {
    title: "Home Improvement Leads | QualifiedLeadsX",
    description:
      "Exclusive homeowner lead generation for roofing, HVAC, and remodeling contractors. Pre-set in-home estimates.",
    url: `${site.url}/for/home-improvement`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Are your home improvement leads shared with competing contractors?",
    a: "No. Unlike HomeAdvisor or Angi where leads are sold to 5-8 competing contractors simultaneously, our campaigns run exclusively in your company's ad account. Every appointment belongs 100% to your sales reps.",
  },
  {
    q: "How do you verify homeowner status and budget?",
    a: "Our multi-step qualification funnel cross-references property ownership, roof age/project scope, and household budget ($10,000 to $50,000+). Renters and unfinanced inquiries are automatically disqualified.",
  },
  {
    q: "What is the average cost per confirmed in-home estimate?",
    a: "Across our contractor partners, confirmed sit-down estimate costs range from $85 to $165 for roofing and HVAC, and $140 to $220 for major kitchen/bathroom remodels.",
  },
  {
    q: "How do you protect show rates for evening and weekend appointments?",
    a: "Our automated dispatch workflow sends 24-hour and 2-hour SMS reminder pings, complete with the estimator's photo, licensing credentials, and past local project photos to ensure both decision-makers are present.",
  },
];

export default function HomeImprovementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/home-improvement#service`,
        name: "Home Improvement Contractor Lead Generation",
        description:
          "Exclusive homeowner appointment setting and paid Meta/Google campaigns for high-ticket roofing, solar, HVAC, and remodeling companies.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Contractor Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/home-improvement#faq`,
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
          { name: "Home Improvement", url: "/for/home-improvement" },
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
              High-Ticket Residential Contracting
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Home Improvement Leads
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Exclusive home improvement leads</strong> generate confirmed in-home sales estimates for contractors specializing in \$10K–\$50K+ projects (roofing, remodeling, HVAC). By replacing shared lead brokers with proprietary Meta ad funnels and phone confirmation triage, contractors secure 80%+ estimate sit rates.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">100%</div>
                <div className="text-xs text-fog mt-1">Exclusive Homeowner Leads</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">82%</div>
                <div className="text-xs text-fog mt-1">In-Home Sit Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">$18.5K</div>
                <div className="text-xs text-fog mt-1">Average Contract Value</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">5.8x</div>
                <div className="text-xs text-fog mt-1">Contractor Cash ROAS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Book Your Territory Exclusivity
              </Link>
              <Link
                href="/tools/cac-calculator"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Model Job Profitability & CAC →
              </Link>
            </div>
          </div>
        </section>

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
