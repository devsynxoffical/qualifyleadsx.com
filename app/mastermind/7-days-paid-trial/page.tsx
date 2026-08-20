import { Metadata } from "next";
import {
  ArrowUpRight,
  Target,
  Lock,
  Sparkles,
  Layers,
  DollarSign,
  HelpCircle,
  BarChart3,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/lib/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { VSL } from "@/components/sections/VSL";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "7 Days Paid Trial Mastermind | QualifiedLeadsX™",
  description:
    "Private Mastermind Breakdown: How to engineer a 7 Days Paid Trial front-end offer that converts cold Meta Ads traffic into paying users and high-ticket clients.",
};

const stats = [
  { value: "112%", label: "Ad Spend Recoup (Day 1)", sub: "Self-liquidating front end" },
  { value: "$19", label: "Optimal Trial Price Point", sub: "Low friction, high commitment" },
  { value: "38%", label: "Trial to High-Ticket Upgrade", sub: "Backend conversion rate" },
  { value: "$420K", label: "Front-End & Backend Sales", sub: "Generated across trial funnels" },
];

const pillars = [
  {
    icon: DollarSign,
    number: "01",
    title: "Low-Friction Trial Offer Architecture",
    body: "By packaging your high-value core methodology into a $7–$29 7-day trial, you drastically lower customer acquisition friction while guaranteeing that every lead has active credit card purchasing power.",
  },
  {
    icon: Target,
    number: "02",
    title: "Instant Self-Liquidating Ad Spend",
    body: "Front-end trial checkout fees immediately offset 80% to 150% of your daily Meta ad spend. This enables you to acquire paid leads and strategy calls at zero net customer acquisition cost.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Trial-to-High-Ticket Conversion Runway",
    body: "During the 7-day trial period, automated onboarding emails, SMS micro-doses, and value milestones walk trial users straight toward booking a $3,000–$10,000 high-ticket strategy session.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Algorithmic Buyer Pixel Training",
    body: "Free lead opt-ins teach Meta&apos;s pixel to look for freebie seekers. By optimizing for credit card purchase events on trial signups, Meta&apos;s algorithm finds prospects with proven disposable income.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Rapid Time-to-Value Micro-Doses",
    body: "Trial users must experience a quick win within 24 hours of signup. We structure the trial environment to deliver instant value, building massive trust prior to the backend sales call.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "High-Urgency Upgrade Triggers",
    body: "As the 7-day trial approaches expiration, automated scarcity & bonus upgrade triggers incentivize users to transition seamlessly into monthly recurring memberships or core high-ticket programs.",
  },
];

const implementationSteps = [
  {
    phase: "Phase 1",
    title: "Paid Trial Offer Packaging",
    desc: "We extract a high-impact fragment of your core system and package it into an irresistible $7–$29 7-day trial offer.",
  },
  {
    phase: "Phase 2",
    title: "2-Step Checkout Funnel Build",
    desc: "We build a lightning-fast 2-step order page with order bumps and 1-click upsells to maximize immediate front-end revenue.",
  },
  {
    phase: "Phase 3",
    title: "Automated Onboarding & Trial Nurture",
    desc: "We install automated 7-day email and SMS workflows that guide trial users through quick wins and nudge them to book a strategy call.",
  },
  {
    phase: "Phase 4",
    title: "Meta Ads Launch & ROAS Scaling",
    desc: "Campaigns launch optimized for Purchase events, self-liquidating ad spend while feeding your high-ticket sales calendar continuously.",
  },
];

const faqs = [
  {
    q: "Why is a 7-day paid trial better than a free trial or free VSL?",
    a: "Free trials attract low-intent opt-ins who rarely convert. A paid trial ($7–$29) forces financial commitment, filters out freebie seekers, and trains Meta&apos;s algorithm to target buyers with active credit cards.",
  },
  {
    q: "How does a paid trial self-liquidate ad spend?",
    a: "If your customer acquisition cost (CAC) per trial user is $15 and your trial price is $19, your ad spend is 100%+ self-liquidated before a single high-ticket sale is made.",
  },
  {
    q: "What percentage of paid trial users convert to high-ticket clients?",
    a: "Across our client base, 25% to 45% of active trial users book a strategy session and transition into core $3,000–$10,000 backend programs.",
  },
  {
    q: "What software is needed to run a 7-day paid trial funnel?",
    a: "We set up and integrate everything inside standard platforms like GoHighLevel, Stripe, ClickFunnels, or custom Next.js checkout builds.",
  },
];

import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Training } from "@/components/sections/Training";
import { Testimonials } from "@/components/sections/Testimonials";

export default function SevenDaysPaidTrialPage() {
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
              Private Mastermind Breakdown #03
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              7 Days Paid Trial:{" "}
              <em className="font-bold not-italic text-lime drop-shadow-[0_0_25px_rgba(201,242,107,0.3)]">
                The Self-Liquidating Meta Ads Playbook
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-xl">
              Learn how to launch and scale a 7-day paid trial offer that liquidates your ad spend instantly while populating your sales pipeline with hyper-qualified buyers.
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
        videoId="Hy1M7WbookU"
        eyebrow="Private Mastermind Breakdown #03"
        title={
          <>
            7 Days Paid Trial:{" "}
            <em className="font-semibold not-italic text-lime">High-Converting Funnel Architecture.</em>
          </>
        }
        subtitle="Watch the full video breakdown on how to turn cold social traffic into paying trial users and upgrade them to premium clients."
      />

      {/* Deep-Dive Overview */}
      <Section className="bg-[#040c07] border-t border-line">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border border-lime/20 bg-lime/[0.02] p-8 sm:p-12 backdrop-blur-xl">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-lime">
                <BarChart3 className="h-4 w-4 text-lime" />
                Strategic Context & Economics
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Zero-Net CAC Acquisition via Self-Liquidating Front Ends
              </h2>
              <p className="mt-4 text-base leading-relaxed text-mist">
                High-ticket ad spend often creates cash-flow bottlenecks while waiting for sales cycles to complete. A 7-day paid trial front-end solves this problem by collecting immediate credit card revenue upon user opt-in.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist">
                Because Meta optimizes for credit card buyers rather than free leads, your ad account acquires a list of verified customers. As trial users experience rapid time-to-value, automated workflows convert 25%–45% of them directly into your core $3K–$10K backend offers.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Core Pillars Section */}
      <Section className="bg-[#050e08] border-t border-line">
        <SectionHeading
          eyebrow="Offer Architecture"
          title={
            <>
              Six Pillars of{" "}
              <em className="font-semibold not-italic text-lime">Self-Liquidating Paid Trials.</em>
            </>
          }
          subtitle="How high-ticket businesses acquire clients at zero net ad cost using paid micro-trials."
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
              Four Steps To{" "}
              <em className="font-semibold not-italic text-lime">Deploying Your Paid Trial.</em>
            </>
          }
          subtitle="Our proven roadmap to launch a self-liquidating paid trial funnel."
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
              <em className="font-semibold not-italic text-lime">Paid Trial Funnels.</em>
            </>
          }
          subtitle="Common questions about our self-liquidating paid trial architecture."
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

      {/* Real Client Proof, Training & Testimonials */}
      <ClientSuccess />
      <Training />
      <Testimonials />

      {/* CTA Footer Banner */}
      <section className="relative overflow-hidden bg-[#040c07] py-24 border-t border-line">
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Launch Your Own{" "}
              <span className="text-lime">7 Days Paid Trial Funnel?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-mist sm:text-lg">
              We engineer, build, and optimize your entire paid trial acquisition ecosystem for predictable growth.
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
