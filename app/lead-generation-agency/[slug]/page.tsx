import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ExternalLink, MapPin } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { orgRef } from "@/lib/schema";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageByline } from "@/components/seo/PageByline";
import { locationPages, locationBySlug } from "@/lib/locations";

/*
 * 25 Nov 2026: US city and state lead generation pages (Gaurav Sir City Page Plan, QLX rows).
 * Content lives in lib/locations.ts. Local facts are official US Census Bureau figures with
 * their source links; proof is published campaigns only. Service schema with areaServed,
 * no LocalBusiness and no address (QLX has no office in these cities).
 */
export function generateStaticParams() {
  return locationPages.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = locationBySlug(slug);
  if (!l) return {};
  const url = `${site.url}/lead-generation-agency/${l.slug}`;
  return {
    title: { absolute: l.title },
    description: l.description,
    keywords: l.keywords,
    alternates: { canonical: url },
    openGraph: { images: [defaultOgImage], title: l.title, description: l.description, url, siteName: site.name, type: "website" },
    twitter: { card: "summary_large_image", title: l.title, description: l.description },
  };
}

const linkCls = "text-lime underline-offset-2 hover:underline";

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = locationBySlug(slug);
  if (!l) notFound();
  const path = `/lead-generation-agency/${l.slug}`;
  const url = `${site.url}${path}`;
  const area =
    l.kind === "city"
      ? { "@type": "City", name: `${l.name}, ${l.stateName}` }
      : { "@type": "State", name: l.stateName };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Lead generation agency in ${l.name}`,
        serviceType: "Lead generation and appointment setting",
        description: l.description,
        url,
        provider: orgRef,
        areaServed: area,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  const crumbs =
    l.parent.href === "/lead-generation-agency"
      ? [{ name: "Home", url: "/" }, { name: "Lead generation agency", url: "/lead-generation-agency" }, { name: l.name, url: path }]
      : [{ name: "Home", url: "/" }, { name: "Lead generation agency", url: "/lead-generation-agency" }, { name: l.stateName, url: l.parent.href }, { name: l.name, url: path }];

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd items={crumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen bg-ink text-fog">
        {/* Hero + answer-first intro */}
        <section className="relative overflow-hidden border-b border-line pb-14 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
              <MapPin className="h-3.5 w-3.5" /> {l.kind === "city" ? `${l.name}, ${l.region}` : l.stateName}
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-fog sm:text-5xl lg:text-6xl">{l.h1}</h1>
            <PageByline path={path} className="mt-4" />
            <div className="short-answer mt-6 rounded-xl border border-lime/30 bg-lime/[0.04] p-5">
              <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-lime">In short</span>
              <p className="text-base leading-relaxed text-fog sm:text-lg">{l.intro}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book-your-call#book" className="rounded-lg bg-lime px-6 py-3 font-semibold text-ink transition hover:bg-lime/90">
                Book a free strategy call
              </Link>
              <Link href="/case-studies" className="rounded-lg border border-line px-6 py-3 font-semibold text-fog transition hover:border-lime/40">
                See published results
              </Link>
            </div>
          </div>
        </section>

        {/* Local market facts (official sources) */}
        <section className="border-b border-line py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">The {l.name} market in numbers</h2>
            <p className="mt-3 max-w-3xl text-mist">{l.marketIntro}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {l.facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-line bg-panel p-5">
                  <div className="font-mono text-2xl font-bold text-lime">{f.value}</div>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{f.label}</p>
                  <a href={f.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-dim hover:text-lime">
                    Source: {f.source} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="border-b border-line py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Published lead generation results for {l.name} businesses</h2>
            <p className="mt-3 max-w-3xl text-mist">{l.proofIntro}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {l.proof.map((p) => (
                <div key={p.headline} className="rounded-xl border border-line bg-panel p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-dim">{p.local ? "Local or state result" : "National result"}</span>
                  <h3 className="mt-2 text-lg font-semibold text-fog">{p.headline}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.detail}</p>
                  {p.href.startsWith("http") ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-flex items-center gap-1 text-sm ${linkCls}`}>
                      See the original post <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link href={p.href} className={`mt-3 inline-block text-sm ${linkCls}`}>
                      See the details
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-b border-line py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Lead generation services in {l.name}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-mist">{l.whoFor}</p>
            <p className="mt-3 max-w-3xl text-mist">{l.servicesIntro}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {l.services.map((s) => (
                <div key={s.title} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="text-lg font-semibold text-fog">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
                  <Link href={s.href} className={`mt-3 inline-block text-sm ${linkCls}`}>
                    {s.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-b border-line py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">How much lead generation costs in {l.name}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-mist">{l.pricing}</p>
            <ul className="mt-6 space-y-3">
              {[
                <>Compare models on our <Link href="/pay-per-appointment" className={linkCls}>pay per appointment</Link> page.</>,
                <>See how leads are contacted and booked with our <Link href="/appointment-setting" className={linkCls}>appointment setting services</Link>.</>,
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-mist">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-line py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Lead generation in {l.name}: FAQ</h2>
            <div className="mt-8 space-y-4">
              {l.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-line bg-panel p-6">
                  <h3 className="text-lg font-semibold text-fog">{f.q}</h3>
                  <p className="mt-2 leading-relaxed text-mist">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas + links */}
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-fog sm:text-3xl">Areas we cover {l.kind === "city" ? `around ${l.name}` : `in ${l.stateName}`}</h2>
            <p className="mt-3 max-w-3xl text-mist">{l.nearby}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-dim">{l.children ? "Cities in this state" : "Up one level"}</p>
                <ul className="mt-3 space-y-2">
                  {(l.children ?? []).map((c) => (
                    <li key={c.href}><Link href={c.href} className={linkCls}>Lead generation agency in {c.name}</Link></li>
                  ))}
                  <li><Link href={l.parent.href} className={linkCls}>{l.parent.name}</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-dim">Other locations</p>
                <ul className="mt-3 space-y-2">
                  {l.siblings.map((c) => (
                    <li key={c.href}><Link href={c.href} className={linkCls}>Lead generation in {c.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-dim">Industries</p>
                <ul className="mt-3 space-y-2">
                  {l.industries.map((c) => (
                    <li key={c.href}><Link href={c.href} className={linkCls}>{c.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTABanner />
      <Footer />
    </>
  );
}
