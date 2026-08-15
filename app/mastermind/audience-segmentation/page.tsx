import { Metadata } from "next";
import { ArrowUpRight, ShieldCheck, Target, Zap, CheckCircle2, Lock, Clock, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { VSL } from "@/components/sections/VSL";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Audience Segmentation Mastermind | QualifiedLeadsX™",
  description:
    "Private mastermind breakdown: The exact audience segmentation & qualification structure engineered to eliminate tire-kickers and lower CPL while booking higher-quality calls.",
};

const insights = [
  {
    icon: Target,
    number: "01",
    title: "Avatar & Intent Layering",
    body: "We replace broad interest targeting with multi-layered intent signals, ensuring your ads reach decision-makers actively searching for high-ticket solutions.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Pre-Call Friction & Validation",
    body: "By inserting calculated qualification filters on the landing page and application form, low-budget leads are automatically filtered out before hitting your calendar.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Algorithmic ROAS Optimization",
    body: "Feed Meta's pixel only high-value conversion events so the ad machine continuously finds prospects with verified purchasing power.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "24/7 Automated Pre-Selling",
    body: "Automated VSL and email/SMS nurture sequences educate prospects prior to the call, lifting show-up and close rates significantly.",
  },
];

export default function AudienceSegmentationPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-[#040c07] text-white selection:bg-lime/30 selection:text-lime">
      <Nav />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-lime/[0.08] blur-[160px]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-lime shadow-[0_0_20px_rgba(201,242,107,0.2)]">
              <Lock className="h-3.5 w-3.5" />
              Private Mastermind Breakdown #01
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Audience Segmentation:{" "}
              <em className="font-bold not-italic text-lime drop-shadow-[0_0_25px_rgba(201,242,107,0.3)]">
                Higher-Quality Calls at Lower CPL
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-xl">
              Discover the exact audience segmentation and multi-validation framework we use to filter out tire-kickers, lower cost per lead, and drive pre-sold decision-makers directly to your sales team.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.bookCallUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-9 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_rgba(201,242,107,0.6)] transition-all hover:scale-105 hover:bg-lime-soft"
              >
                Book Free Strategy Call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <VSL />

      {/* Breakdown Section */}
      <Section className="bg-[#050e08] border-t border-line">
        <SectionHeading
          eyebrow="Framework Breakdown"
          title={
            <>
              Key Pillars of{" "}
              <em className="font-semibold not-italic text-lime">High-Intent Segmentation.</em>
            </>
          }
          subtitle="How we structure Meta ad campaigns to maximize lead quality while suppressing ad costs."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {insights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-3xl border border-lime/20 bg-black/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-lime/40 hover:bg-[#07170c]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-lime/70 tracking-widest">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CTA Footer Banner */}
      <section className="relative overflow-hidden bg-[#040c07] py-24">
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Install This Framework{" "}
              <span className="text-lime">Into Your Business?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-mist sm:text-lg">
              We build, launch, and manage the entire client acquisition engine for you. Backed by our 90-day written guarantee.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href={site.bookCallUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-10 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_rgba(201,242,107,0.6)] transition-all hover:scale-105 hover:bg-lime-soft"
              >
                Book Your Free Strategy Call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
