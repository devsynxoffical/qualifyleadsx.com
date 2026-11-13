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
  title: "Recruitment Agency Leads | QualifiedLeadsX",
  description:
    "Client acquisition for executive search & staffing firms. Book hiring managers and HR directors with open requisitions for $15K–$40K placement contracts.",
  alternates: {
    canonical: `${site.url}/for/recruitment-agencies`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Recruitment Agency Leads | QualifiedLeadsX",
    description:
      "Client acquisition for executive search & staffing firms. Book hiring managers with open requisitions.",
    url: `${site.url}/for/recruitment-agencies`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you identify companies with active hiring budgets?",
    a: "We track companies experiencing high headcount growth, venture funding announcements, and open job board requisitions on LinkedIn and Indeed, then deliver targeted executive-level pain messaging via Meta and LinkedIn ad networks.",
  },
  {
    q: "Does this system target candidates or corporate client accounts?",
    a: "This system is 100% focused on corporate client business development (signing exclusive contingency and retained search contracts with VP/C-suite decision makers), not candidate job applications.",
  },
  {
    q: "What is the average placement fee of client accounts booked?",
    a: "Our recruitment agency partners typically service technical, executive, and healthcare niches with average placement fees ranging from $15,000 to $40,000+ per hire.",
  },
  {
    q: "How does this compare to traditional cold email outreach for recruiters?",
    a: "Cold recruitment email suffers from severe spam filtering and recruiter fatigue. High-value authority ads establish credibility and proof before the prospect even speaks with your business development team, doubling contract win rates.",
  },
];

export default function RecruitmentAgenciesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/recruitment-agencies#service`,
        name: "Client Business Development for Recruitment & Search Firms",
        description:
          "Targeted corporate client acquisition engine connecting executive search and specialized staffing agencies with hiring executives holding open search requisitions.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Staffing Agency Client Acquisition",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/recruitment-agencies#faq`,
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
          { name: "Recruitment Agencies", url: "/for/recruitment-agencies" },
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
              Executive Search & Staffing Business Development
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Recruitment Agency Leads
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                To generate <strong>retained and contingency search clients for recruitment agencies</strong>, we target hiring managers and VPs struggling with urgent talent bottlenecks. By presenting specialized placement track records and speed-to-hire benchmarks, this engine books 15 to 30 corporate client consultations monthly.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">15–30</div>
                <div className="text-xs text-fog mt-1">Corporate Client Calls / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$22K</div>
                <div className="text-xs text-fog mt-1">Average Search Retainer Fee</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">83%</div>
                <div className="text-xs text-fog mt-1">Client Consultation Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">5.4x</div>
                <div className="text-xs text-fog mt-1">Recruitment Fee ROAS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Sign More Search Retainers
              </Link>
              <Link
                href="/for/b2b-services"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                B2B Services Methodology →
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

