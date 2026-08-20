import { Metadata } from "next";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  Lock,
  CheckCircle2,
  XCircle,
  Video,
  FileCode2,
  MessageSquare,
  Award,
  BarChart3,
  Calendar,
} from "lucide-react";
import { site } from "@/lib/site";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { VSL } from "@/components/sections/VSL";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Training } from "@/components/sections/Training";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "8-Figure Mastermind | QualifiedLeadsX™",
  description:
    "An exclusive private collective of high-ticket coaches, agency owners, and B2B founders scaling past $100K–$500K+/month. Apply for mastermind membership.",
};

const mastermindStats = [
  { value: "$150M+", label: "Collective Member Revenue" },
  { value: "50 Cap", label: "Maximum Active Members" },
  { value: "2x / Mo", label: "Live Strategic Masterminds" },
  { value: "100%", label: "Direct Access to Growth Engineers" },
];

const privateMasterminds = [
  {
    tag: "Hidden Facebook Interest",
    title: "The Framework Behind 300–500 Qualified Calls",
    description: "Deep dive into hidden Facebook interest targeting, ad creative rotation strategies, and direct-response offer angles that scaled client accounts to 300–500 booked strategy calls.",
    url: "/mastermind/hidden-facebook-interest",
    badge: "Private Mastermind #01",
  },
  {
    tag: "7 Days Paid Trial",
    title: "Self-Liquidating Meta Ads Playbook",
    description: "How to engineer a $7–$29 paid trial front-end offer that converts cold traffic into paid trial users and self-liquidates Meta ad spend.",
    url: "/mastermind/7-days-paid-trial",
    badge: "Private Mastermind #02",
  },
  {
    tag: "LTO Funnel $847K Scale",
    title: "$255K Ad Spend Nearly $1M Sales Meta Ads",
    description: "Case study breakdown on scaling a Low-Ticket Offer (LTO) funnel to $847K in revenue with $255K in ad spend using high-volume Meta Ads.",
    url: "/mastermind/lto-funnel-scale",
    badge: "Case Study #03",
  },
];

const pillars = [
  {
    icon: Video,
    number: "01",
    title: "Bi-Weekly Live Ad Account Audits",
    body: "Real-time teardowns of live Meta ad campaigns running $10k–$200k/month spend. Learn what's converting right now in your niche.",
  },
  {
    icon: FileCode2,
    number: "02",
    title: "8-Figure Asset Vault",
    body: "Instant plug-and-play access to high-converting VSL scripts, ad copy frameworks, AI qualification workflows & CRM snapshots.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "24/7 Private Operator Channel",
    body: "Direct channel with 8-figure agency founders and media buyers. Get rapid feedback on copy, hooks, angles, and campaign issues.",
  },
  {
    icon: Award,
    number: "04",
    title: "Quarterly Executive Summits",
    body: "Private in-person summits in Miami, Dubai, and London. Connect, network, and form high-ticket partnerships with elite operators.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "1-on-1 Dedicated Scaling Roadmap",
    body: "Custom acquisition architecture engineered specifically for your high-ticket offer, target avatar, and revenue targets.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Agency Account Protection & Whitelisting",
    body: "Scale past $50k/mo ad spend without bans or restrictions using our direct agency ad account infrastructure and whitelisting.",
  },
];

const forWhom = [
  "Generating $10K–$100K+/month with a proven high-ticket offer",
  "Ready to scale Meta Ads aggressively with 5-6 figure monthly ad budgets",
  "Has sales capacity to handle 40–100+ pre-qualified calls each month",
  "Values high-level peer networking and direct, raw strategic feedback",
];

const notForWhom = [
  "Complete beginners with no offer or zero baseline revenue",
  "Looking for a 'get rich quick' magic button without execution",
  "Unwilling to invest in ad spend or proper acquisition infrastructure",
  "Looking for basic courses rather than an elite 8-figure mastermind",
];

const steps = [
  {
    number: "01",
    title: "Submit Application",
    desc: "Complete a quick 2-minute questionnaire about your offer, revenue, and scaling bottlenecks.",
  },
  {
    number: "02",
    title: "Qualification Strategy Audit",
    desc: "A 15-minute 1-on-1 strategy call with our team to verify alignment and masterclass fit.",
  },
  {
    number: "03",
    title: "Instant Onboarding & Access",
    desc: "Gain immediate entry to the private channel, asset vault, and upcoming live mastermind sessions.",
  },
];

export default function MastermindPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-ink selection:bg-lime/30 selection:text-lime">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-lime/[0.08] blur-[160px]" />
          <div className="absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.05] blur-[140px]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-lime shadow-[0_0_20px_rgba(201,242,107,0.2)]">
              <Lock className="h-3.5 w-3.5" />
              By Invitation Only · Limited to 50 Members
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-fog sm:text-6xl lg:text-7xl">
              The QualifiedLeadsX™{" "}
              <em className="font-bold not-italic text-lime drop-shadow-[0_0_25px_rgba(201,242,107,0.3)]">
                8-Figure Mastermind
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-xl">
              An elite private collective of high-ticket coaches, consultants, and agency owners scaling past $100K–$500K+/month. Direct access to proven ad frameworks, live campaign breakdowns, and bi-weekly strategic masterminds.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.bookCallUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-9 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_rgba(201,242,107,0.6)] transition-all hover:scale-105 hover:bg-lime-soft"
              >
                Apply for Mastermind Membership
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-medium text-fog backdrop-blur-sm transition-all hover:border-lime/30 hover:bg-white/[0.08]"
              >
                Explore Mastermind Pillars
              </a>
            </div>
          </Reveal>

          {/* Stats Bar */}
          <Reveal delay={0.2}>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4 shadow-2xl">
              {mastermindStats.map((stat) => (
                <div key={stat.label} className="bg-[#07120a] p-6 text-center">
                  <div className="text-2xl font-extrabold text-lime sm:text-3xl drop-shadow-[0_0_12px_rgba(201,242,107,0.3)]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-mist sm:text-[11px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VSL />

      {/* Private Masterminds Section */}
      <Section id="private-masterminds" className="relative overflow-hidden bg-[#040c07] border-y border-line">
        <SectionHeading
          eyebrow="Exclusive case breakdowns"
          title={
            <>
              Featured{" "}
              <em className="font-semibold not-italic text-lime">Private Masterminds.</em>
            </>
          }
          subtitle="Explore in-depth strategic breakdowns and frameworks shared exclusively inside the QualifiedLeadsX private collective."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {privateMasterminds.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl border border-lime/20 bg-[#050e08] p-8 sm:p-10 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-lime/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,242,107,0.15)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs text-mist/60 font-semibold">{item.badge}</span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white group-hover:text-lime transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={item.url}
                    className="inline-flex items-center gap-2 font-semibold text-sm text-lime transition-all group-hover:translate-x-1"
                  >
                    Access Private Mastermind
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pillars Section */}
      <Section id="pillars" className="bg-[#040c07] border-y border-line">
        <SectionHeading
          eyebrow="What's included"
          title={
            <>
              Six Core Pillars of the{" "}
              <em className="font-semibold not-italic text-lime">Mastermind Experience.</em>
            </>
          }
          subtitle="Everything you need to engineer a predictable 8-figure client acquisition engine alongside top-tier peers."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:border-lime/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-15px_rgba(201,242,107,0.2)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-lime/70 tracking-widest">
                      {p.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-fog">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Who This Is For vs NOT For */}
      <Section className="bg-ink">
        <SectionHeading
          eyebrow="Mastermind Alignment"
          title={
            <>
              Is the QualifiedLeadsX™ Mastermind{" "}
              <em className="font-semibold not-italic text-lime">Right For You?</em>
            </>
          }
          subtitle="We maintain strict entry standards to preserve high-level discussion and actionable peer insights."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* For Whom */}
          <Reveal>
            <div className="h-full rounded-3xl border border-lime/30 bg-lime/[0.03] p-8 sm:p-10 shadow-[0_0_50px_-20px_rgba(201,242,107,0.15)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-ink">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-fog">Who This Mastermind IS For</h3>
              </div>
              <ul className="mt-8 flex flex-col gap-4">
                {forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20 text-lime">
                      ✓
                    </span>
                    <span className="leading-relaxed text-fog">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not For Whom */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.01] p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose/20 text-rose">
                  <XCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-fog">Who This Mastermind IS NOT For</h3>
              </div>
              <ul className="mt-8 flex flex-col gap-4">
                {notForWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose/10 text-rose">
                      ✕
                    </span>
                    <span className="leading-relaxed text-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Application Steps */}
      <Section className="bg-[#040c07] border-t border-line">
        <SectionHeading
          eyebrow="Application Process"
          title={
            <>
              Three Steps To{" "}
              <em className="font-semibold not-italic text-lime">Join The Inner Circle.</em>
            </>
          }
          subtitle="Simple, streamlined onboarding to ensure rapid integration and immediate value."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-white/[0.08] bg-[#07120a] p-8">
                <span className="inline-flex rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs font-bold text-lime">
                  Step {s.number}
                </span>
                <h3 className="mt-6 text-lg font-bold text-fog">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Real Client Proof, Training & Testimonials */}
      <ClientSuccess />
      <Training />
      <Testimonials />

      {/* Final CTA Banner */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-lime/[0.08] blur-[150px]" />
        </div>
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-fog sm:text-5xl">
              Ready to Scale Beyond{" "}
              <span className="text-lime">$100K/Month?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-mist sm:text-lg">
              Applications are reviewed on a rolling basis. Secure your spot in the next cohort before member seats fill up.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.bookCallUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-10 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_rgba(201,242,107,0.6)] transition-all hover:scale-105 hover:bg-lime-soft"
              >
                Apply For Mastermind Membership
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
