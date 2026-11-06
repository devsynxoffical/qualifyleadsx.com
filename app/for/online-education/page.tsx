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
  title: "Online Education Lead Generation | QualifiedLeadsX",
  description:
    "Student acquisition for vocational academies, accredited bootcamps, and certification institutes ($3K–$15K tuitions). Direct enrollment funnels and setters.",
  alternates: {
    canonical: `${site.url}/for/online-education`,
  },
  openGraph: {
    title: "Online Education Lead Generation | QualifiedLeadsX",
    description:
      "Student acquisition for vocational academies, accredited bootcamps, and certification institutes ($3K–$15K tuitions).",
    url: `${site.url}/for/online-education`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you generate enrollments for tuition programs above $5,000?",
    a: "We deploy admissions-interview funnels rather than passive self-checkout. Prospective students watch a student career-outcome VSL, complete an admissions evaluation, and book an interview with an admissions advisor.",
  },
  {
    q: "How do you filter for students who qualify for financing (ISAs or student loans)?",
    a: "Our qualification intake screens for employment status, credit eligibility, and weekly study commitment, routing pre-approved applicants directly into your admissions team's calendar.",
  },
  {
    q: "What is the typical cost per enrolled student?",
    a: "Across vocational coding, trades, and tech sales bootcamps, student acquisition cost (CAC) ranges from $650 to $1,400 for programs with tuition ranging between $5,000 and $15,000.",
  },
  {
    q: "Can this system integrate with education CRM platforms like HubSpot and Salesforce?",
    a: "Yes. We engineer automated pipelines connecting Meta leads directly into your admissions CRM with automated SMS interview reminders and student financing application tracking.",
  },
];

export default function OnlineEducationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/for/online-education#service`,
        name: "Student Admissions & Enrollment Generation",
        description:
          "Full-funnel admissions lead generation, student qualification, and interview booking for vocational bootcamps and digital certification institutes.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        serviceType: "Education Admissions Lead Generation",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/for/online-education#faq`,
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
          { name: "Online Education", url: "/for/online-education" },
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
              Bootcamps, Academies & Career Certifications
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mt-3 mb-6">
              Online Education Lead Generation
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                <strong>Online education lead generation</strong> drives student enrollments for premium academies ($3K–$15K tuitions) through student outcome VSLs and admissions interview triage. By qualifying applicants on financing and career intent, institutions lower student acquisition costs by 35% and achieve 80%+ interview attendance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">40–80</div>
                <div className="text-xs text-fog mt-1">Admissions Interviews / Mo</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">$7,500</div>
                <div className="text-xs text-fog mt-1">Average Student Tuition</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82%</div>
                <div className="text-xs text-fog mt-1">Admissions Interview Show Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">4.7x</div>
                <div className="text-xs text-fog mt-1">Tuition Revenue ROAS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call#book"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Scale Student Cohorts
              </Link>
              <Link
                href="/for/course-creators"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                Course Creator Funnels →
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

