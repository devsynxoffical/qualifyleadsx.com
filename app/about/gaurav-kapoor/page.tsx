import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { brandFacts } from "@/lib/brand-facts";
import { site, defaultOgImage } from "@/lib/site";
import { founder, FOUNDER_ID, ORG_ID, WEBSITE_ID, FOUNDER_URL } from "@/lib/schema";
import { caseStudyMeta, caseStudyIds } from "@/lib/case-study-meta";

const PATH = brandFacts.founder.path;
const TITLE = "Gaurav Kapoor, Founder of QualifiedLeadsX";
const DESCRIPTION =
  "Gaurav Kapoor founded QualifiedLeadsX in 2022 after 12+ years in paid media and direct response. Background, focus areas and documented client results.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "profile", images: [defaultOgImage] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [defaultOgImage.url] },
};

const focus = [
  "Meta (Facebook and Instagram) ads and creative strategy",
  "Client acquisition funnels for high-ticket offers",
  "Lead qualification, speed to lead and appointment setting",
  "Unit economics: cost per booked call, CAC and LTV",
];

const featuredCases = [
  "b2b-agency-scaling-846k",
  "med-spa-marketing-agency-639k",
  "nyc-med-spa-rf-microneedling-74k",
  "florida-hvac-65k-cash-collected",
  "mva-personal-injury-leads-8810",
  "b2b-technology-agency-71k",
].filter((slug) => slug in caseStudyIds);

export default function FounderPage() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${FOUNDER_URL}#profile`,
    url: FOUNDER_URL,
    name: TITLE,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { ...founder, "@id": FOUNDER_ID, description: brandFacts.founder.bio },
    dateModified: "2026-11-13",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "About", url: "/about" },
          { name: brandFacts.founder.name, url: PATH },
        ]}
      />
      <AnnouncementBar />
      <Nav />
      <main id="main" className="bg-ink text-fog">
        <section className="pt-32 pb-12 sm:pt-40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-lime">{brandFacts.founder.role}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-fog sm:text-5xl">{brandFacts.founder.name}</h1>
            <div className="mt-6 rounded-2xl border border-lime/30 bg-lime/[0.04] p-5">
              <p className="text-xs font-mono uppercase tracking-wider text-lime">Short answer</p>
              <p className="mt-1 text-base leading-relaxed text-fog">
                Gaurav Kapoor is the founder of {site.name}, a done-for-you client acquisition agency started in {brandFacts.foundedYear}. He has more than 12 years of experience in paid media buying and direct-response marketing and leads the Meta ads and acquisition strategy for the agency&apos;s clients.
              </p>
            </div>
            <p className="mt-8 text-lg leading-relaxed text-mist">{brandFacts.founder.bio}</p>
            <a
              href={brandFacts.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fog transition-colors hover:border-lime/40 hover:text-lime"
            >
              <ExternalLink className="h-4 w-4" /> LinkedIn profile
            </a>
          </div>
        </section>

        <section className="border-t border-line py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">What does Gaurav Kapoor work on?</h2>
            <ul className="mt-6 space-y-3">
              {focus.map((f) => (
                <li key={f} className="rounded-xl border border-line bg-panel px-5 py-3 text-mist">{f}</li>
              ))}
            </ul>
            <p className="mt-6 text-mist leading-relaxed">
              The agency&apos;s method is laid out in its <Link href="/high-ticket-lead-generation" className="text-lime underline underline-offset-2">high ticket lead generation</Link> and{" "}
              <Link href="/appointment-setting" className="text-lime underline underline-offset-2">appointment setting</Link> pages, its original data in the{" "}
              <Link href="/benchmarks" className="text-lime underline underline-offset-2">2026 benchmarks</Link>, and its guides on the{" "}
              <Link href="/blog" className="text-lime underline underline-offset-2">blog</Link>.
            </p>
          </div>
        </section>

        <section className="border-t border-line py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Which client results has his team documented?</h2>
            <p className="mt-3 text-mist">Each case study uses the numbers from the client result as published.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {featuredCases.map((slug) => (
                <li key={slug}>
                  <Link href={`/case-studies/${slug}`} className="group flex h-full items-start justify-between gap-3 rounded-xl border border-line bg-panel p-4 transition-colors hover:border-lime/30">
                    <span className="text-sm text-fog">{caseStudyMeta[slug].title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-lime" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mist">
              See all <Link href="/case-studies" className="text-lime underline underline-offset-2">client case studies</Link> or read more{" "}
              <Link href="/about" className="text-lime underline underline-offset-2">about {site.name}</Link>.
            </p>
          </div>
        </section>

        <div className="py-12">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
