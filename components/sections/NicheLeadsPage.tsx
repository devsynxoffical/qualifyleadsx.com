import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { DeepDive } from "@/components/sections/DeepDive";
import type { DeepDiveContent } from "@/lib/deep-dive-content";

/**
 * Shared layout for niche lead-generation landing pages (MVA, mass tort, final
 * expense). Same structure and styling as /personal-injury-leads: hero with a
 * short answer, verified stat tiles with their source, long-form DeepDive
 * sections, one FAQ list (also emitted as FAQPage) and the CTA banner.
 */
export type NicheLeadsPageProps = {
  path: string;
  eyebrow: string;
  h1: string;
  shortAnswer: ReactNode;
  stats?: { value: string; label: string }[];
  statsSource?: ReactNode;
  primaryCta: string;
  secondary?: { href: string; label: string };
  breadcrumb: { name: string; url: string }[];
  service: { name: string; description: string; audience: string; areaServed?: string[] };
  content: DeepDiveContent;
  faqTitle: string;
};

export function NicheLeadsPage(p: NicheLeadsPageProps) {
  const faqs = p.content.faqs;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}${p.path}#service`,
        name: p.service.name,
        description: p.service.description,
        serviceType: p.service.name,
        audience: { "@type": "Audience", audienceType: p.service.audience },
        areaServed: p.service.areaServed ?? ["United States"],
        provider: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}${p.path}#faq`,
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, ...p.breadcrumb]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="bg-ink min-h-screen text-fog">
        <section className="relative pt-20 pb-16 border-b border-line overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <span className="text-lime text-xs font-mono tracking-widest uppercase">{p.eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fog mt-3 mb-6">{p.h1}</h1>

            <div className="short-answer p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">Short answer</span>
              <p className="text-base sm:text-lg text-fog leading-relaxed">{p.shortAnswer}</p>
            </div>

            {p.stats && p.stats.length > 0 && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {p.stats.map((s) => (
                    <div key={s.label} className="border border-line rounded-lg p-4 bg-fog/5">
                      <div className="text-xl sm:text-2xl font-bold text-lime font-mono">{s.value}</div>
                      <div className="text-xs text-mist mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                {p.statsSource && <p className="text-xs text-mist">{p.statsSource}</p>}
              </>
            )}

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/book-your-call#book" className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition">
                {p.primaryCta}
              </Link>
              {p.secondary && (
                <Link href={p.secondary.href} className="border border-line hover:border-fog/40 px-6 py-3 rounded-lg text-fog transition">
                  {p.secondary.label} →
                </Link>
              )}
            </div>
          </div>
        </section>

        <DeepDive content={p.content} />

        <section className="py-16 border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-fog mb-8 text-center">{p.faqTitle}</h2>
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
