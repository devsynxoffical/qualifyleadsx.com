import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";

const featuredArticles = [
  {
    slug: "how-much-does-a-lead-generation-agency-cost",
    title: "How Much Does a Lead Generation Agency Cost in 2026?",
    description:
      "Pricing models, monthly retainers, pay-per-appointment economics and real cost benchmarks for high-ticket service offers.",
    category: "Scaling & Economics",
    readTime: "11 min read",
    date: "Oct 27, 2026",
    coverImage: "/images2/showreel/shot_07_calculator.webp",
    tag: "Commercial Pillar",
  },
  {
    slug: "facebook-ads-agency-vs-in-house-media-buyer",
    title: "Facebook Ads Agency vs In-House Media Buyer",
    description:
      "Compare real costs, speed to results, creative capacity and risk: which acquisition model makes sense for high-ticket growth?",
    category: "Paid Advertising",
    readTime: "10 min read",
    date: "Oct 27, 2026",
    coverImage: "/images2/showreel/shot_04_stat_cards.webp",
    tag: "Comparison Guide",
  },
  {
    slug: "the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition",
    title: "The 2026 VSL Funnel Blueprint: Book 50+ Calls a Month",
    description:
      "Why 90-minute webinars are dead and how concise 12-minute VSL funnels with qualification filters convert at 14–18% into booked sales calls.",
    category: "Funnel Strategy",
    readTime: "12 min read",
    date: "Oct 21, 2026",
    coverImage: "/images/blog/vsl-funnel-blueprint.jpg",
    tag: "Architecture Blueprint",
  },
];

export function FeaturedInsights() {
  return (
    <Section id="insights" className="relative border-t border-line bg-ink py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-lime/[0.04] blur-[150px]" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-lime" />
                <span>Knowledge Vault & Scaling Blueprints</span>
              </span>
            </Reveal>
            <SplitReveal
              as="h2"
              className="mt-4 text-3xl font-bold font-heading tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]"
            >
              Latest high-ticket client acquisition{" "}
              <em className="font-semibold not-italic text-lime">playbooks.</em>
            </SplitReveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base text-mist leading-relaxed font-normal">
                Deep dives into customer acquisition economics, automated qualification architecture, and algorithmic Meta media buying.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="shrink-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-panel border border-line text-fog hover:border-lime/40 hover:text-lime transition-all duration-300"
            >
              <span>Explore All 10 Guides</span>
              <ArrowRight className="w-4 h-4 text-lime transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-500 hover:border-lime/40 hover:bg-elevated hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/60">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-ink/80 backdrop-blur-md border border-lime/30 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-lime">
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-dim mb-3">
                    <span className="text-lime">{article.category}</span>
                    <span className="flex items-center gap-1.5 text-mist">
                      <Clock className="w-3 h-3 text-dim" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white leading-snug group-hover:text-lime transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-mist leading-relaxed line-clamp-3 font-normal">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-line/40 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-dim flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-dim" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-lime group-hover:translate-x-0.5 transition-transform">
                      Read Blueprint
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
