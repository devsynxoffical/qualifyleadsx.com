import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BadgeCheck, Check, ChevronDown, ShieldCheck, X } from "lucide-react";
import { site } from "@/lib/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/layout/BookingForm";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CTABanner } from "@/components/ui/CTABanner";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { ProofGallery, type ProofCard } from "@/components/landing/ProofGallery";
import { LeadEstimator } from "@/components/landing/LeadEstimator";

/**
 * Designed landing page for lead types with published proof (19 Nov 2026):
 * hero with the lead form beside it, verified stats, screenshot result cards,
 * a funnel breakdown, a budget estimator, process cards, qualification
 * questions, a comparison, an FAQ accordion and the CTA. Every number shown is
 * passed in from the page and must come from a published campaign.
 */
export type RichLeadPageProps = {
  path: string;
  eyebrow: string;
  h1: string;
  shortAnswer: ReactNode;
  heroPoints: string[];
  stats: { value: string; label: string }[];
  statsSource: ReactNode;
  breadcrumb: { name: string; url: string }[];
  service: { name: string; description: string; audience: string };
  formNiche: string;
  formTitle: string;
  proof: { title: string; intro: ReactNode; cards: ProofCard[] };
  funnel?: { title: string; intro: ReactNode; steps: { value: string; label: string; detail?: string }[]; outcome: ReactNode };
  /** Shown instead of the funnel when no full lead-to-sale breakdown is published. */
  plan?: { title: string; intro: ReactNode; rows: { label: string; value: string }[] };
  estimator: { cplLow: number; cplHigh: number; unit: string; sourceNote: string; initial?: number };
  process: { title: string; intro: ReactNode; steps: { icon: LucideIcon; title: string; text: ReactNode }[] };
  qualifiers: { title: string; intro: ReactNode; questions: string[] };
  comparison: { title: string; themLabel: string; them: string[]; us: string[] };
  audiences: { title: string; cards: { icon: LucideIcon; title: string; text: ReactNode }[] };
  faqs: { q: string; a: string }[];
  faqTitle: string;
  further: { title: string; links: { href: string; label: string; text: string }[] };
};

const sectionCls = "border-t border-line py-16 sm:py-24";
const wrap = "mx-auto max-w-6xl px-4 sm:px-6";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">{children}</p>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-fog sm:text-4xl">{children}</h2>;
}

export function RichLeadPage(p: RichLeadPageProps) {
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
        areaServed: ["United States"],
        provider: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}${p.path}#faq`,
        mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, ...p.breadcrumb]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen bg-ink text-fog">
        {/* Hero: answer + points on the left, lead form on the right */}
        <section className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,color-mix(in_oklab,var(--color-lime)_14%,transparent),transparent_70%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime/60 to-transparent" />
          <div className={`${wrap} relative grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14`}>
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-dim">
                <Link href="/" className="hover:text-lime">Home</Link>
                {p.breadcrumb.map((b, i) => (
                  <span key={b.url} className="flex items-center gap-2">
                    <span>/</span>
                    {i === p.breadcrumb.length - 1 ? <span className="text-mist">{b.name}</span> : <Link href={b.url} className="hover:text-lime">{b.name}</Link>}
                  </span>
                ))}
              </nav>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                <BadgeCheck className="h-3.5 w-3.5" />
                {p.eyebrow}
              </span>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-fog sm:text-5xl lg:text-6xl">{p.h1}</h1>
              <p className="short-answer mt-6 text-lg leading-relaxed text-mist">{p.shortAnswer}</p>
              <ul className="mt-7 space-y-3">
                {p.heroPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[15px] text-fog">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {p.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-line bg-panel/70 p-4">
                    <div className="font-mono text-xl font-bold text-lime sm:text-2xl">{s.value}</div>
                    <div className="mt-1 text-xs leading-snug text-mist">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-dim">{p.statsSource}</p>
            </div>

            <div id="get-leads" className="scroll-mt-28 lg:sticky lg:top-24">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-lime" />
                <p className="text-sm font-semibold text-fog">{p.formTitle}</p>
              </div>
              <BookingForm source={p.path} defaultNiche={p.formNiche} />
            </div>
          </div>
        </section>

        {/* Proof cards */}
        <section className={sectionCls}>
          <div className={wrap}>
            <Eyebrow>Published results</Eyebrow>
            <H2>{p.proof.title}</H2>
            <p className="mt-4 max-w-3xl text-mist">{p.proof.intro}</p>
            <div className="mt-10">
              <ProofGallery cards={p.proof.cards} />
            </div>
          </div>
        </section>

        {/* Funnel + estimator */}
        <section className={sectionCls}>
          <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
            {p.funnel ? (
              <div>
                <Eyebrow>From lead to job</Eyebrow>
                <H2>{p.funnel.title}</H2>
                <p className="mt-4 text-mist">{p.funnel.intro}</p>
                <ol className="mt-8 space-y-2.5">
                  {p.funnel.steps.map((s, i) => (
                    <li key={s.label} className="relative">
                      <div
                        className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel px-5 py-4"
                        style={{ width: `${100 - i * (40 / Math.max(1, p.funnel!.steps.length - 1))}%` }}
                      >
                        <span className="text-sm text-mist">{s.label}</span>
                        <span className="font-mono text-lg font-bold text-fog">{s.value}</span>
                      </div>
                      {s.detail && <p className="mt-1 pl-5 text-xs text-dim">{s.detail}</p>}
                    </li>
                  ))}
                </ol>
                <div className="mt-6 rounded-2xl border border-lime/30 bg-lime/[0.06] p-5 text-sm leading-relaxed text-fog">{p.funnel.outcome}</div>
              </div>
            ) : (
              <div>
                <Eyebrow>Cost per lead by campaign</Eyebrow>
                <H2>{p.plan?.title ?? "How many leads could your budget buy?"}</H2>
                {p.plan && (
                  <>
                    <p className="mt-4 text-mist">{p.plan.intro}</p>
                    <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-panel">
                      {p.plan.rows.map((r) => (
                        <li key={r.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                          <span className="text-sm text-mist">{r.label}</span>
                          <span className="shrink-0 font-mono text-sm font-bold text-fog">{r.value}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
            <div className="lg:pt-10">
              <LeadEstimator {...p.estimator} />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={sectionCls}>
          <div className={wrap}>
            <Eyebrow>How it works</Eyebrow>
            <H2>{p.process.title}</H2>
            <p className="mt-4 max-w-3xl text-mist">{p.process.intro}</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {p.process.steps.map((s, i) => (
                <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-lime/40">
                  <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-fog/[0.05] transition-colors group-hover:text-lime/10">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/15 text-lime">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fog">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualification questions + comparison */}
        <section className={sectionCls}>
          <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
            <div>
              <Eyebrow>Qualification</Eyebrow>
              <H2>{p.qualifiers.title}</H2>
              <p className="mt-4 text-mist">{p.qualifiers.intro}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {p.qualifiers.questions.map((q) => (
                  <li key={q} className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-fog">{q}</li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>The difference</Eyebrow>
              <H2>{p.comparison.title}</H2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-line bg-panel/60 p-6">
                  <p className="text-sm font-semibold text-mist">{p.comparison.themLabel}</p>
                  <ul className="mt-4 space-y-3">
                    {p.comparison.them.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-mist">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-lime/40 bg-lime/[0.05] p-6 shadow-[0_0_60px_-30px_var(--color-lime)]">
                  <p className="text-sm font-semibold text-lime">QualifiedLeadsX</p>
                  <ul className="mt-4 space-y-3">
                    {p.comparison.us.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-fog">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className={sectionCls}>
          <div className={wrap}>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <H2>{p.audiences.title}</H2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {p.audiences.cards.map((c) => (
                <div key={c.title} className="rounded-3xl border border-line bg-gradient-to-b from-panel to-ink p-6">
                  <c.icon className="h-6 w-6 text-lime" />
                  <h3 className="mt-4 text-lg font-semibold text-fog">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className={sectionCls}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Eyebrow>FAQ</Eyebrow>
            <H2>{p.faqTitle}</H2>
            <div className="mt-8 space-y-3">
              {p.faqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-2xl border border-line bg-panel px-5 py-1 open:border-lime/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-fog [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base text-fog">{f.q}</h3>
                    <ChevronDown className="h-5 w-5 shrink-0 text-mist transition-transform group-open:rotate-180 group-open:text-lime" />
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-mist">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Further reading */}
        <section className={sectionCls}>
          <div className={wrap}>
            <Eyebrow>Keep reading</Eyebrow>
            <H2>{p.further.title}</H2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {p.further.links.map((l) => (
                <Link key={l.href} href={l.href} className="group rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-lime/40">
                  <span className="flex items-center justify-between gap-2 font-semibold text-fog group-hover:text-lime">
                    {l.label}
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-mist">{l.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-24">
          <CTABanner
            compact
            eyebrow="Exclusive leads, your ad account"
            title={<>Ready for your own {p.service.name.toLowerCase()}?</>}
            description="Tell us your service area and budget. On a free 30-minute call we map the offer, the qualifying questions and a realistic cost-per-lead range based on campaigns like the ones above."
            ctaLabel="Get my free lead plan"
            ctaHref="#get-leads"
          />
          <p className="mt-6 text-center text-sm text-mist">
            Prefer to chat?{" "}
            <WhatsAppLink placement="landing_footer" className="font-semibold text-lime underline-offset-4 hover:underline">
              Message us on WhatsApp
            </WhatsAppLink>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
