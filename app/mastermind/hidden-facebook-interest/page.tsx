import { Metadata } from "next";
import {
  ArrowUpRight,
  ShieldCheck,
  Target,
  Lock,
  TrendingUp,
  Zap,
  HelpCircle,
  BarChart3,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { site } from "@/lib/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { VSL } from "@/components/sections/VSL";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Hidden Facebook Interest Mastermind | QualifiedLeadsX™",
  description:
    "Private Mastermind Breakdown: The framework behind scaling to 300–500 qualified sales calls using hidden Facebook interest targeting and creative rotation.",
};

const stats = [
  { value: "500+", label: "Qualified Calls / Mo", sub: "Generated for high-ticket clients" },
  { value: "3.2x", label: "Lower Cost Per Lead", sub: "Compared to broad interest ads" },
  { value: "100+", label: "Ad Variations / Quarter", sub: "Automated creative engine" },
  { value: "$250K+", label: "Monthly Ad Budget", sub: "Managed with zero bans/limits" },
];

const pillars = [
  {
    icon: Target,
    number: "01",
    title: "Graph API Hidden Interest Mining",
    body: "Meta's standard Ads Manager interface displays only a fraction of targetable interests. We query Meta's hidden Graph API endpoints to extract thousands of uncompetitive interest categories where high-ticket buyers congregate.",
  },
  {
    icon: RefreshCw,
    number: "02",
    title: "Dynamic Creative Rotation Engine",
    body: "Ad fatigue kills high-ticket campaigns. Our creative rotation system deploys 40–100+ direct-response video hooks, headlines, and static angles to ensure prospects never see the same ad twice.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Automated Spend Escalation Rules",
    body: "We implement custom automated scaling rules that increase daily budgets in calculated micro-bursts based on CPA and ROAS performance—allowing rapid scaling without destroying campaign efficiency.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Whitelisted Enterprise Infrastructure",
    body: "Eliminate spending limits and unexpected account bans. We run all client campaigns through enterprise agency ad accounts with direct Meta rep whitelisting and priority support.",
  },
  {
    icon: Zap,
    number: "05",
    title: "Multi-Hook Direct-Response Framing",
    body: "Different buyers respond to different triggers. We test 10+ unique hook variations (e.g. Pain-Point, Case Study, System Breakdown, Counter-Intuitive Statement) to capture broad audience attention.",
  },
  {
    icon: Cpu,
    number: "06",
    title: "Algorithmic Pixel Convergence",
    body: "We combine custom event tracking with high-volume interest data to force Meta's algorithm to converge rapidly on high-ticket decision-makers with proven purchasing power.",
  },
];

const implementationSteps = [
  {
    phase: "Phase 1",
    title: "Hidden API Interest Extraction",
    desc: "We extract hyper-targeted, uncompetitive interest pools using custom Meta Graph API queries tailored to your high-ticket avatar.",
  },
  {
    phase: "Phase 2",
    title: "Creative Engine Production",
    desc: "Our copywriters and designers produce 20–40 high-converting video scripts, static banners, and hook variations built for high ROAS.",
  },
  {
    phase: "Phase 3",
    title: "Whitelisted Account Setup & Testing",
    desc: "Campaigns are deployed inside enterprise agency accounts with automated scaling triggers and CAPI server-side tracking.",
  },
  {
    phase: "Phase 4",
    title: "Aggressive Budget Scaling",
    desc: "As winning interest & creative combinations emerge, we scale daily ad spend past $1,000–$5,000+/day while maintaining strict CPA targets.",
  },
];

const faqs = [
  {
    q: "What is Meta Graph API interest mining?",
    a: "Meta Ads Manager only shows ~25 interest suggestions per search. By querying Meta&apos;s underlying Graph API, we uncover thousands of hidden, uncompetitive interests that standard advertisers never find.",
  },
  {
    q: "How do you prevent ad fatigue when scaling spend?",
    a: "We deploy an automated creative rotation matrix. By swapping out video hooks and visual assets weekly while preserving winning post IDs, ad fatigue is virtually eliminated.",
  },
  {
    q: "Why use whitelisted agency ad accounts instead of personal ad accounts?",
    a: "Agency accounts carry unlimited daily ad spend limits from day one, higher trust scores with Meta&apos;s algorithm, and direct rep protection against automated suspensions.",
  },
  {
    q: "What return on ad spend (ROAS) can we expect?",
    a: "Our clients typically achieve a blended 3.5x–6.0x ROAS when combining hidden interest targeting with our friction qualification funnel.",
  },
];

import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Testimonials } from "@/components/sections/Testimonials";

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
              Private Mastermind Breakdown #01
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

          {/* Stats Bar */}
          <Reveal delay={0.2}>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4 shadow-2xl">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#07120a] p-6 text-center">
                  <div className="text-2xl font-extrabold text-lime sm:text-3xl drop-shadow-[0_0_12px_rgba(201,242,107,0.3)]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-mist">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[10px] text-mist/60">{stat.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VSL Section */}
      <VSL
        videoId="jjq9-FSD4iA"
        hideHeading
      />

      {/* Deep-Dive Overview */}
      <Section className="bg-[#040c07] border-t border-line">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border border-lime/20 bg-lime/[0.02] p-8 sm:p-12 backdrop-blur-xl">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-lime">
                <BarChart3 className="h-4 w-4 text-lime" />
                Strategic Context & Competitive Advantage
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Bypassing Ad Saturation With Meta Graph API Targeting
              </h2>
              <p className="mt-4 text-base leading-relaxed text-mist">
                Over 95% of advertisers use the standard Facebook Ads Manager dropdown, bidding against thousands of competitors for identical interest keywords. This drives CPMs through the roof and degrades lead quality.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist">
                By leveraging Meta&apos;s underlying Graph API, we extract thousands of hidden, uncompetitive interest categories. Combined with our automated creative rotation matrix, we keep CPMs low, prevent ad fatigue, and consistently book 300–500 strategy calls per month.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Core Pillars Section */}
      <Section className="bg-[#050e08] border-t border-line">
        <SectionHeading
          eyebrow="Targeting Pillars"
          title={
            <>
              Six Pillars of{" "}
              <em className="font-semibold not-italic text-lime">Hidden Interest Scaling.</em>
            </>
          }
          subtitle="Advanced Facebook interest targeting and campaign scaling tactics used by top 1% media buyers."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group relative flex flex-col justify-between h-full rounded-3xl border border-lime/20 bg-black/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-lime/40 hover:bg-[#07170c]">
                  <div>
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Implementation Roadmap */}
      <Section className="bg-[#040c07] border-t border-line">
        <SectionHeading
          eyebrow="Execution Plan"
          title={
            <>
              Four Phases To{" "}
              <em className="font-semibold not-italic text-lime">Scaling 300–500 Calls.</em>
            </>
          }
          subtitle="How we deploy and scale hidden interest campaigns step-by-step."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {implementationSteps.map((step, i) => (
            <Reveal key={step.phase} delay={i * 0.08}>
              <div className="relative flex flex-col h-full rounded-3xl border border-white/10 bg-[#07120a] p-6 sm:p-8">
                <span className="inline-flex w-fit rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs font-bold text-lime">
                  {step.phase}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-[#050e08] border-t border-line">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Everything You Need To Know About{" "}
              <em className="font-semibold not-italic text-lime">Hidden Interest Ads.</em>
            </>
          }
          subtitle="Common questions about our Graph API interest extraction & scaling strategy."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-black/40 p-8 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-lime shrink-0" />
                  <h3 className="text-base font-bold text-white">{faq.q}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-mist">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Real Client Proof & Testimonials */}
      <ClientSuccess />
      <Testimonials />

      {/* CTA Footer Banner */}
      <section className="relative overflow-hidden bg-[#040c07] py-24 border-t border-line">
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
