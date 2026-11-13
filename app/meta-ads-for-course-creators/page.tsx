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
  title: "Facebook Ads for Course Creators | QualifiedLeadsX",
  description:
    "Scale premium online courses and masterminds ($2K–$10K). High-converting VSL funnels, webinar remarketing, and phone setters with 4.5x+ ROAS.",
  alternates: {
    canonical: `${site.url}/meta-ads-for-course-creators`,
  },
  openGraph: {
    images: [defaultOgImage],
    title: "Facebook Ads for Course Creators | QualifiedLeadsX",
    description:
      "Scale premium online courses and masterminds ($2K–$10K). High-converting VSL funnels with 4.5x+ ROAS.",
    url: `${site.url}/meta-ads-for-course-creators`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why do low-ticket $27-$97 course ads struggle to produce cash profit?",
    a: "Rising customer acquisition costs on Meta mean low-ticket course sales barely break even on ad spend. Transitioning into a high-ticket cohort or mastermind ($2,500–$5,000) provides the margin required to scale ad budgets profitably.",
  },
  {
    q: "What ad creatives convert best for education entrepreneurs?",
    a: "Short student case breakdowns (UGC style), screen-recorded proof of curriculum systems, and founder-led framework breakdowns that solve one immediate pain point generate the lowest cost per lead.",
  },
  {
    q: "Do you recommend selling via webinars or short VSLs?",
    a: "For offers between $2,000 and $10,000, 12-to-15 minute VSL funnels with an application form consistently beat 60-minute automated webinars in both show-up rates and cost per student.",
  },
  {
    q: "What is your average ROAS on course creator ad campaigns?",
    a: "Our clients average 3.8x to 5.6x front-end return on ad spend within 90 days of launch.",
  },
];

export default function MetaAdsForCourseCreatorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/meta-ads-for-course-creators#service`,
        name: "Meta & Facebook Ads for Course Creators",
        description:
          "Performance Facebook and Instagram ad management for digital educators, cohort founders, and course creators selling $2K–$10K programs.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Course Marketing & Paid Social",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/meta-ads-for-course-creators#faq`,
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
          { name: "Meta Ads for Course Creators", url: "/meta-ads-for-course-creators" },
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
              Digital Education Scaling Engine
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Facebook Ads for Course Creators
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Facebook ads for course creators</strong> scale $2,000–$10,000 programs by steering traffic into 12-minute VSL funnels and advisor enrollment calls. Operating at 4.5x+ ROAS, this model outperforms automated webinars by qualifying students and booking enrollment interviews at $120–$180 per call.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">4.5x</div>
                <div className="text-xs text-fog mt-1">Average Program ROAS</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$2,800</div>
                <div className="text-xs text-fog mt-1">Average Student Tuition</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">81%</div>
                <div className="text-xs text-fog mt-1">Admissions Call Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">15 Mins</div>
                <div className="text-xs text-fog mt-1">High-Converting VSL Length</div>
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
                href="/for/course-creators"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Course Creator Hub →
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

