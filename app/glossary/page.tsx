import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { glossaryTerms } from "@/lib/glossary-data";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site";
import { breadcrumbList, webPageNode, ORG_ID } from "@/lib/schema";

const TITLE = "Client Acquisition Glossary: 29 Terms Defined";
const DESCRIPTION =
  "Plain-English definitions of speed to lead, VSL funnel, blended CAC, ROAS, lead qualification, appointment setting and 20+ more, each linked to a full guide.";

export const metadata: Metadata = {
  title: { absolute: "Client Acquisition Glossary (29 Terms) | QualifiedLeadsX™" },
  description: DESCRIPTION,
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/glossary",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "QualifiedLeadsX client acquisition glossary" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph-image"] },
};

export default function GlossaryPage() {
  const pageUrl = `${site.url}/glossary`;
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
  const postBySlug = new Map(blogPosts.map((p) => [p.slug, p]));

  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${pageUrl}#terms`,
    name: "QualifiedLeadsX Client Acquisition Glossary",
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
    hasDefinedTerm: sorted.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${pageUrl}#${t.slug}`,
      name: t.term,
      description: t.definition,
      url: `${pageUrl}#${t.slug}`,
      inDefinedTermSet: { "@id": `${pageUrl}#terms` },
    })),
  };

  const breadcrumb = breadcrumbList(`${pageUrl}#breadcrumb`, [{ name: "Glossary", url: "/glossary" }]);

  const webPage = {
    ...webPageNode({ path: "/glossary", name: TITLE, description: DESCRIPTION, speakable: true }),
    mainEntity: { "@id": `${pageUrl}#terms` },
  };

  // Group by first letter for the A–Z index
  const groups = sorted.reduce<Record<string, typeof sorted>>((acc, t) => {
    const letter = t.term[0].toUpperCase();
    (acc[letter] ??= []).push(t);
    return acc;
  }, {});
  const letters = Object.keys(groups).sort();

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSet) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <AnnouncementBar />
      <Nav />

      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-12 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,242,107,0.12),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-mono text-dim mb-6">
            <Link href="/" className="hover:text-lime transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-mist">Glossary</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 border border-lime/30 mb-6">
            <BookOpen className="w-4 h-4 text-lime" />
            <span>{sorted.length} terms, A to Z</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-fog leading-[1.1] text-balance">
            Client Acquisition <span className="text-lime">Glossary</span>
          </h1>
          <p className="aeo-answer mt-5 text-lg sm:text-xl text-mist max-w-3xl mx-auto leading-relaxed text-balance">
            The vocabulary of high-ticket client acquisition, defined in plain English. Every term links to the guide
            that covers it in depth and the part of the QualifiedLeadsX system that handles it.
          </p>

          <nav aria-label="A to Z index" className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel text-xs font-mono font-bold text-mist transition-colors hover:border-lime/40 hover:text-lime"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 bg-ink">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-14">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-28">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-lime border-b border-line pb-3 mb-6">
                {letter}
              </h2>
              <dl className="space-y-6">
                {groups[letter].map((t) => (
                  <div
                    key={t.slug}
                    id={t.slug}
                    className="scroll-mt-28 rounded-2xl border border-line bg-panel p-6 sm:p-8 transition-colors hover:border-lime/40"
                  >
                    <dt>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">{t.term}</h3>
                    </dt>
                    <dd className="mt-3 text-base text-mist leading-relaxed">
                      <p>{t.definition}</p>
                      {t.detail && <p className="mt-3 text-sm text-mist/90">{t.detail}</p>}

                      <div className="mt-5 flex flex-col gap-3 border-t border-line/60 pt-4 text-sm">
                        {t.guides.length > 0 && (
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-dim">Read the guide:</span>
                            {t.guides.map((slug, i) => {
                              const post = postBySlug.get(slug);
                              if (!post) return null;
                              return (
                                <span key={slug}>
                                  <Link
                                    href={`/blog/${slug}`}
                                    className="font-medium text-lime underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
                                  >
                                    {post.seoTitle ?? post.title}
                                  </Link>
                                  {i < t.guides.length - 1 && <span className="mx-1 text-dim">·</span>}
                                </span>
                              );
                            })}
                          </div>
                        )}
                        {t.service && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-dim">In the system:</span>
                            <Link
                              href={t.service.href}
                              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-fog hover:text-lime"
                            >
                              {t.service.label}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                        {t.related && t.related.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-dim">Related terms:</span>
                            {t.related.map((r) => {
                              const rt = glossaryTerms.find((x) => x.slug === r);
                              if (!rt) return null;
                              return (
                                <a
                                  key={r}
                                  href={`#${r}`}
                                  className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-mono text-mist hover:border-lime/40 hover:text-lime"
                                >
                                  {rt.term}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="From definitions to a working pipeline"
        title={
          <>
            Want all of this{" "}
            <em className="font-semibold not-italic text-lime">built and run for you?</em>
          </>
        }
      />
      <Footer />
    </main>
  );
}
