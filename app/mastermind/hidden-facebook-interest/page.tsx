import { Metadata } from "next";
import { ArrowUpRight, ShieldCheck, Target, Zap, CheckCircle2, Lock, TrendingUp, Layers } from "lucide-react";
import { site } from "@/lib/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { VSL } from "@/components/sections/VSL";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Hidden Facebook Interest Mastermind | QualifiedLeadsX™",
  description:
    "Private mastermind breakdown: The framework behind scaling to 300–500 qualified sales calls using hidden Facebook interest targeting and creative rotation.",
};

const insights = [
  {
    icon: Target,
    number: "01",
    title: "Uncovering Hidden Interest Pockets",
    body: "How we bypass saturated Facebook interest categories to tap into uncompetitive, high-ticket buyer pools via Graph API targeting.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Creative Rotation Engine",
    body: "Deploying 40–100+ direct-response ad variations to prevent ad fatigue and keep customer acquisition costs predictable at scale.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Aggressive Budget Scaling Rules",
    body: "The exact automated rules and manual scaling triggers used to double daily ad spend without spiking cost per acquisition.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Whitelisted Agency Infrastructure",
    body: "Eliminate ad account suspensions and spending limits by leveraging enterprise agency ad account architecture.",
  },
];

export default function HiddenFacebookInterestPage() {
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
              Private Mastermind Breakdown #02
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hidden Facebook Interest:{" "}
              <em className="font-bold not-italic text-lime drop-shadow-[0_0_25px_rgba(201,242,107,0.3)]">
                The Framework Behind 300–500 Calls
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-xl">
              Learn the exact interest targeting, ad creative rotation, and campaign scaling framework that generated 300–500 pre-qualified sales calls for our high-ticket clients.
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
          eyebrow="Targeting Framework"
          title={
            <>
              Scale Your Meta Ads To{" "}
              <em className="font-semibold not-italic text-lime">300–500 Booked Calls.</em>
            </>
          }
          subtitle="Advanced Facebook interest targeting and campaign scaling tactics used by top 1% media buyers."
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
              Want Us to Scale Your Ads to{" "}
              <span className="text-lime">300+ Calls?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-mist sm:text-lg">
              We install every piece — offer positioning, Meta Ads, creatives, landing pages, CRM, AI automations, and follow-up.
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
