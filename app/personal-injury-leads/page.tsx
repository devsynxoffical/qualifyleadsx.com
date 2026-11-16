import type { Metadata } from "next";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { DeepDive } from "@/components/sections/DeepDive";
import { personalInjuryLeadsDeepDive } from "@/lib/deep-dive-content";

const PATH = "/personal-injury-leads";
const TITLE = "Personal Injury Leads: Exclusive MVA Lead Generation";
const DESCRIPTION =
  "Exclusive personal injury leads from your own Meta ads campaign. One MVA campaign produced 8,810 leads at $7.61 each, for PI firms and lead gen companies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    images: [defaultOgImage],
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}${PATH}`,
    siteName: site.name,
    type: "website",
  },
};

const faqs = personalInjuryLeadsDeepDive.faqs;

const stats = [
  { value: "8,810", label: "MVA leads generated" },
  { value: "$7.61", label: "Cost per lead" },
  { value: "$67,013", label: "Meta ad spend" },
  { value: "Jul 1 – Sep 19", label: "Campaign window, 2026" },
];

export default function PersonalInjuryLeadsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}${PATH}#service`,
        name: "Personal injury lead generation",
        description:
          "Exclusive personal injury and motor vehicle accident leads from a Meta ads campaign run in the client's own ad account, with in-form qualification, follow-up within 5 minutes and booked intake calls.",
        serviceType: "Personal injury lead generation",
        audience: { "@type": "Audience", audienceType: "Personal injury law firms and lead generation companies" },
        areaServed: ["United States"],
        provider: { "@type": "Organization", name: site.name, url: site.url },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}${PATH}#faq`,
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
          { name: "Law firms", url: "/for/law-firms" },
          { name: "Personal injury leads", url: PATH },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="bg-ink min-h-screen text-fog">
        <section className="relative pt-20 pb-16 border-b border-line overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <span className="text-lime text-xs font-mono tracking-widest uppercase">For PI law firms and lead generation companies</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fog mt-3 mb-6">
              Personal Injury Leads From Your Own Campaign
            </h1>

            <div className="short-answer p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">Short answer</span>
              <p className="text-base sm:text-lg text-fog leading-relaxed">
                QualifiedLeadsX generates <strong>exclusive personal injury leads</strong> instead of reselling shared lists: we run Meta ads
                aimed at recent motor vehicle accidents in your own ad account, qualify claimants in the form, contact them within 5 minutes
                and book intake calls. One MVA campaign produced 8,810 leads at $7.61 each.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {stats.map((s) => (
                <div key={s.label} className="border border-line rounded-lg p-4 bg-fog/5">
                  <div className="text-xl sm:text-2xl font-bold text-lime font-mono">{s.value}</div>
                  <div className="text-xs text-mist mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-mist">
              Source:{" "}
              <Link href="/case-studies/mva-personal-injury-leads-8810" className="text-lime underline underline-offset-2">
                MVA personal injury case study
              </Link>{" "}
              (pay-per-lead agency supplying personal injury firms). Results vary by state, case type and budget.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/book-your-call#book" className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition">
                Book a PI strategy call
              </Link>
              <Link href="/case-studies/mva-personal-injury-leads-8810" className="border border-line hover:border-fog/40 px-6 py-3 rounded-lg text-fog transition">
                Read the MVA case study →
              </Link>
            </div>
          </div>
        </section>

        <DeepDive content={personalInjuryLeadsDeepDive} />

        <section className="py-16 border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-fog mb-8 text-center">Personal injury leads: frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border border-line rounded-xl p-6 bg-fog/[0.02]">
                  <h3 className="text-lg font-semibold text-fog mb-2">{f.q}</h3>
                  <p className="text-mist text-sm sm:text-base leading-relaxed">{f.a}</p>
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
