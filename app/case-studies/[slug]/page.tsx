import type { Metadata } from "next";
import { PageByline } from "@/components/seo/PageByline";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { caseStudiesData, type CaseStudyItem } from "@/lib/case-studies-data";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { caseStudyMeta, caseStudyIds } from "@/lib/case-study-meta";
import Image from "next/image";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { BookingForm } from "@/components/layout/BookingForm";

const topCaseStudySlugs: Record<string, string> = caseStudyIds;


// Reverse lookup map
const idToSlugMap: Record<string, string> = Object.entries(topCaseStudySlugs).reduce(
  (acc, [slug, id]) => {
    acc[id] = slug;
    return acc;
  },
  {} as Record<string, string>
);

function getCaseStudy(slugOrId: string): CaseStudyItem | undefined {
  const targetId = topCaseStudySlugs[slugOrId] || slugOrId;
  return caseStudiesData.find((item) => item.id === targetId);
}

export async function generateStaticParams() {
  const customSlugs = Object.keys(topCaseStudySlugs).map((slug) => ({ slug }));
  const idSlugs = caseStudiesData.slice(0, 30).map((item) => ({ slug: item.id }));
  return [...customSlugs, ...idSlugs];
}

/** Renders [anchor](/path) links inside analysis text. */
function richText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
    return m ? (
      <Link key={i} href={m[2]} className="text-lime underline underline-offset-2">
        {m[1]}
      </Link>
    ) : (
      part
    );
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) {
    return {
      title: "Case Study Not Found | QualifiedLeadsX",
    };
  }

  // Instagram-ID URLs that duplicate a named case study point their canonical
  // at the named URL. Instagram-ID URLs with no named version are unlinked,
  // caption-only pages kept out of the index (noindex, follow).
  const primarySlug = idToSlugMap[item.id] || item.id;
  const isNamed = primarySlug in topCaseStudySlugs;
  const curated = caseStudyMeta[primarySlug];
  const title = curated?.title ?? `${item.bigNumber} Client Results Case Study`;
  const description =
    curated?.description ??
    `How this client generated ${item.bigNumber} with Meta ads, funnels and follow-up. Real numbers from a QualifiedLeadsX engagement.`;
  const canonical = `${site.url}/case-studies/${primarySlug}`;

  return {
    title,
    description,
    alternates: { canonical },
    ...(isNamed ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      images: [defaultOgImage],
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "article",
    },
  };
}

export default async function IndividualCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) {
    notFound();
  }

  const primarySlug = idToSlugMap[item.id] || item.id;
  const meta = caseStudyMeta[primarySlug];
  const h1 = meta?.h1 ?? `${item.bigNumber} Client Results Case Study`;
  const summary =
    meta?.summary ?? meta?.description ?? item.subtitle ?? item.title;
  // Curated stats when available; otherwise the post's own big number only (the auto-extracted
  // metric labels in the data file are not reliable enough to show as facts).
  const stats = meta?.stats ?? [{ value: item.bigNumber, label: item.bigNumberLabel || "Headline result" }];
  const poster = item.thumbnailSrc ?? item.mediaSrc;
  const isVideo = item.type === "video" && item.mediaSrc.endsWith(".mp4");

  const more = Object.entries(topCaseStudySlugs)
    .filter(([s]) => s !== primarySlug)
    .map(([s, id]) => ({ slug: s, item: caseStudiesData.find((c) => c.id === id), meta: caseStudyMeta[s] }))
    .filter((x): x is { slug: string; item: CaseStudyItem; meta: (typeof caseStudyMeta)[string] } => Boolean(x.item && x.meta))
    .slice(0, 6);

  const faqs = [
    {
      q: "Where do the numbers in this case study come from?",
      a: "They are the figures the client campaign reported at the time, shown in the screenshot or video on this page and published in the original post linked below. Nothing has been added or estimated.",
    },
    {
      q: "What did QualifiedLeadsX do for this client?",
      a: summary,
    },
    {
      q: "Can these results be replicated for my business?",
      a: "Results depend on the offer, market, budget and follow-up, so no result is guaranteed. On a free strategy call we look at your offer and show you which parts of this system fit and what a realistic outcome looks like. Pricing is custom quoted.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/case-studies/${primarySlug}#article`,
        headline: h1,
        description: summary.slice(0, 300),
        image: `${site.url}${poster}`,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/case-studies/${primarySlug}#faq`,
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
          { name: "Case Studies", url: "/case-studies" },
          { name: meta?.title ?? `${item.bigNumber} case study`, url: `/case-studies/${primarySlug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen bg-ink text-fog">
        {/* Hero: result + media */}
        <section className="relative overflow-hidden border-b border-line pb-16 pt-24 sm:pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,color-mix(in_oklab,var(--color-lime)_14%,transparent),transparent_70%)]" />
          <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-dim">
                <Link href="/" className="hover:text-lime">Home</Link>
                <span>/</span>
                <Link href="/case-studies" className="hover:text-lime">Case studies</Link>
              </nav>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                <ShieldCheck className="h-3.5 w-3.5" />
                Published client result
              </span>
              <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.08] tracking-tight text-fog sm:text-4xl lg:text-5xl">{h1}</h1>
              <PageByline path={`/case-studies/${slug}`} className="mt-5" />
              <p className="short-answer mt-6 text-lg leading-relaxed text-mist">{summary}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {stats.map((st) => (
                  <div key={st.label} className="rounded-2xl border border-line bg-panel/70 p-4">
                    <div className="font-mono text-xl font-bold text-lime sm:text-2xl">{st.value}</div>
                    <div className="mt-1 text-xs leading-snug text-mist">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#get-plan" className="rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink transition hover:shadow-[0_0_40px_-8px_var(--color-lime)]">
                  Get a plan like this for my business
                </Link>
                <Link href="/case-studies" className="rounded-full border border-line px-6 py-3 text-sm text-fog transition hover:border-lime/50">
                  ← All case studies
                </Link>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-3xl border border-line bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                {isVideo ? (
                  <video
                    src={item.mediaSrc}
                    poster={poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="mx-auto max-h-[78vh] w-full bg-black object-contain"
                  />
                ) : (
                  <Image
                    src={item.mediaSrc}
                    alt={`Screenshot of the published result: ${h1}`}
                    width={1200}
                    height={1400}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="mx-auto h-auto max-h-[78vh] w-full object-contain"
                    priority
                  />
                )}
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-mist">
                <span>{isVideo ? "Video breakdown from the client campaign" : "Screenshot from the client campaign"}</span>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-lime hover:underline">
                    Original post <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Breakdown */}
        <section className="border-b border-line py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              {meta?.analysis?.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="text-2xl font-bold text-fog">{sec.heading}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-mist">
                    {sec.body.map((para, i) => (
                      <p key={i}>{richText(para)}</p>
                    ))}
                    {sec.bullets && (
                      <ul className="space-y-2">
                        {sec.bullets.map((b) => (
                          <li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
              <div>
                <h2 className="text-2xl font-bold text-fog">The client result, in the original post</h2>
                <div className="mt-4 whitespace-pre-line rounded-2xl border border-line bg-panel p-6 text-sm leading-relaxed text-mist sm:text-base">
                  {item.description.replace(/(^|\s)#[\p{L}\p{N}_]+/gu, "").replace(/\n{3,}/g, "\n\n").trim()}
                </div>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="rounded-3xl border border-lime/30 bg-lime/[0.05] p-6">
                <h2 className="text-lg font-bold text-fog">What this case shows</h2>
                <ul className="mt-4 space-y-3 text-sm text-mist">
                  {stats.map((st) => (
                    <li key={st.label} className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2 last:border-0">
                      <span>{st.label}</span>
                      <span className="shrink-0 font-mono font-bold text-fog">{st.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {meta?.related && (
                <div className="rounded-3xl border border-line bg-panel p-6">
                  <h2 className="text-lg font-bold text-fog">Related services</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {meta.related.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="inline-block rounded-full border border-line px-4 py-2 text-sm text-fog hover:border-lime hover:text-lime">{r.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-3xl border border-line bg-panel p-6">
                <h2 className="text-lg font-bold text-fog">Run the numbers for your offer</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link href="/tools/roas-calculator" className="text-mist hover:text-lime">ROAS & break-even calculator →</Link></li>
                  <li><Link href="/tools/cost-per-booked-call-calculator" className="text-mist hover:text-lime">Cost per booked call calculator →</Link></li>
                  <li><Link href="/benchmarks/cost-per-lead-by-industry" className="text-mist hover:text-lime">Cost per lead by industry →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* More case studies */}
        <section className="border-b border-line py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">More results</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog">More case study breakdowns</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map(({ slug: s, item: it, meta: m }) => (
                <Link key={s} href={`/case-studies/${s}`} className="group overflow-hidden rounded-3xl border border-line bg-panel transition-colors hover:border-lime/40">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image
                      src={it.thumbnailSrc ?? it.mediaSrc}
                      alt={m.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    {it.type === "video" && (
                      <span className="absolute left-3 top-3 rounded-full border border-line bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-lime backdrop-blur">Video</span>
                    )}
                    {m.stats?.[0] && (
                      <span className="absolute bottom-3 left-4 font-mono text-2xl font-bold text-lime">{m.stats[0].value}</span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold leading-snug text-fog group-hover:text-lime">{m.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-mist">{m.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/case-studies" className="inline-flex rounded-full border border-line px-6 py-3 text-sm text-fog hover:border-lime/50">See all case studies →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-line py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Questions about this case study</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-2xl border border-line bg-panel px-5 py-1 open:border-lime/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-fog [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base text-fog">{f.q}</h3>
                    <span className="text-mist transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-mist">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section id="get-plan" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">Your turn</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog sm:text-4xl">Want a result like this?</h2>
              <p className="mt-4 text-mist">Tell us about your offer. On a free 30-minute strategy call we show you which parts of this system fit your business and what a realistic outcome looks like for your market and budget.</p>
              <ul className="mt-6 space-y-2 text-sm text-mist">
                <li>• Ads, funnel, follow-up and booking run in your own accounts</li>
                <li>• Every number reported, from cost per lead to cost per client</li>
                <li>• Custom quoted, no long-term lock-in</li>
              </ul>
            </div>
            <BookingForm source={`/case-studies/${primarySlug}`} />
          </div>
        </section>

        <CTABanner compact />
      </main>
      <Footer />
    </>
  );
}
