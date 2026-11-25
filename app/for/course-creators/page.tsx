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
  title: "Course Creator Lead Generation | QualifiedLeadsX",
  description:
    "Scale premium courses and cohort masterminds ($1.5K–$10K) with VSL funnels, webinar remarketing and phone setters that drive steady enrollments.",
  alternates: {
    canonical: `${site.url}/for/course-creators`,
  },
  openGraph: {
    images: [defaultOgImage],
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
    q: "How do course creators get more students?",
    a: "Paid ads to a clear offer, then follow-up that moves buyers to the next step. In our published campaigns, a digital course sold $69,652 in 8 days and a $97/month community added 537 members in 19 days, both from Meta ads.",
  },
  {
    q: "Should I sell my course with a webinar, a VSL or a direct checkout?",
    a: "It depends on the price. Lower-priced courses and memberships can sell from an ad straight to checkout, as the $97/month community did. Higher-priced programs usually need a video sales letter or an application and a call.",
  },
  {
    q: "What ROAS can a course launch get?",
    a: "Published examples: 3.65x on a digital course ($69,652 from $19,104), 3.24x for a fitness course seller ($70,673 from $21,789) and 2.53x for a $97/month community ($57,577 from $22,774). Your result depends on the offer and audience.",
  },
  {
    q: "Do you work on evergreen funnels or launches?",
    a: "Both. The published results above include an 8-day launch and 19-day and 30-day evergreen runs.",
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
                Quick answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                For course creators, <strong>lead generation works best as a funnel</strong>: Meta ads sell a course or membership, then the best buyers move up to a higher-ticket program. Published results: a digital course made <strong>$69,652 in 8 days</strong> from $19,104 in ads (3.65x), and a $97/month community added 537 paying members in 19 days.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">$69,652</div>
                <div className="text-xs text-fog mt-1">Course revenue in 8 days</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">3.65x</div>
                <div className="text-xs text-fog mt-1">ROAS on that launch</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">537</div>
                <div className="text-xs text-fog mt-1">Paying members in 19 days ($97/mo)</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$70,673</div>
                <div className="text-xs text-fog mt-1">Course revenue in 30 days (696 sold)</div>
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

        {/* 25 Nov 2026: published results only (lib/case-studies-data.ts) */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-4">Published course and membership results</h2>
            <p className="text-fog max-w-3xl mb-8">Three campaigns published with the spend shown. Results depend on the offer, audience and budget.</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-lg font-semibold text-paper mb-2">$69,652 in 8 days from a digital course</h3>
                <p className="text-fog text-sm sm:text-base leading-relaxed">A course on landing high-ticket clients, with community access, sold $69,652 from $19,104 in ads: a 3.65x ROAS.</p>
                <a href="https://www.instagram.com/p/DK2tpecTDVQ/" className="mt-3 inline-block text-sm text-lime underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">See the original post</a>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-lg font-semibold text-paper mb-2">537 paying members in 19 days</h3>
                <p className="text-fog text-sm sm:text-base leading-relaxed">A $97/month coaching community collected $57,577 from $22,774 in ads (2.53x ROAS), with a $107.25 average order value.</p>
                <a href="https://www.instagram.com/p/DMTbiLhy45r/" className="mt-3 inline-block text-sm text-lime underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">See the original post</a>
              </div>
              <div className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                <h3 className="text-lg font-semibold text-paper mb-2">696 courses in 30 days</h3>
                <p className="text-fog text-sm sm:text-base leading-relaxed">$21,789 in ads produced $70,673 in revenue (3.24 ROAS) for a fitness course seller.</p>
                <a href="https://www.instagram.com/p/DMOUbBhywzQ/" className="mt-3 inline-block text-sm text-lime underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">See the original post</a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-paper mt-12 mb-4">How a course funnel works</h3>
            <ol className="space-y-3 text-fog">
              <li className="flex gap-3"><span className="font-mono text-lime">1.</span><span>Meta ads lead with the transformation the course delivers, tested across many angles.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">2.</span><span>The offer page or video sells the course or membership directly.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">3.</span><span>Order bumps and one-time offers raise the value of each buyer.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">4.</span><span>Engaged students are invited to a higher-ticket program or mastermind.</span></li>
              <li className="flex gap-3"><span className="font-mono text-lime">5.</span><span>Reporting covers cost per buyer, ROAS and revenue per student.</span></li>
            </ol>
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
