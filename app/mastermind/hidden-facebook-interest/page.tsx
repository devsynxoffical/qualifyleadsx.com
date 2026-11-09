import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Wrench,
  Microscope,
  Rocket,
  Bot,
  Workflow,
  LifeBuoy,
  CheckCircle2,
  FileText,
  GraduationCap,
} from "lucide-react";
import { site } from "@/lib/site";
import { founder, orgRef, publisherOrg, imageObject, youtubeVideo, faqPage, webPageNode, WEBSITE_ID } from "@/lib/schema";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { VSL } from "@/components/sections/VSL";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FAQ";
import { caseStudyMeta } from "@/lib/case-study-meta";
import { caseStudiesData } from "@/lib/case-studies-data";

/** Named case studies shown as results, with the same image used on each case study page. */
const resultCaseStudies: [string, string][] = [
  ["b2b-agency-scaling-846k", "DS5sAimEqsT"],
  ["med-spa-marketing-agency-639k", "DZc5twGlC0M"],
  ["high-ticket-coaching-203k", "DUsaqlQEsYB"],
  ["digital-media-agency-157k", "DQ91hXmEoIm"],
  ["executive-consulting-150k", "DQsBVdEkxYc"],
  ["commercial-services-86k", "DSkbQyzkvbL"],
];
const results = resultCaseStudies.map(([slug, id]) => {
  const item = caseStudiesData.find((c) => c.id === id);
  const image = item ? item.thumbnailSrc ?? (item.type === "image" ? item.mediaSrc : undefined) : undefined;
  return { slug, ...caseStudyMeta[slug], image };
});
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const PATH = "/mastermind/hidden-facebook-interest";
const TITLE = "AI Client Acquisition Mastermind: 6-Week Meta Ads Program";
const DESCRIPTION =
  "A 6-week, hands-on mastermind: Meta ads, hidden interest research, AI advertising, tracking, scaling and unit economics, built on your own campaigns. Apply now.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "ai client acquisition mastermind",
    "meta ads mastermind",
    "facebook ads mastermind",
    "hidden facebook interests",
    "meta ads training for agencies",
    "client acquisition system",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "AI Client Acquisition Mastermind | QualifiedLeadsX™",
    description: "Build a predictable client acquisition system in 6 weeks: Meta ads, AI advertising, tracking, scaling and profitability.",
    url: PATH,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Client Acquisition Mastermind | QualifiedLeadsX™",
    description: "Build a predictable client acquisition system in 6 weeks: Meta ads, AI advertising, tracking, scaling and profitability.",
  },
};

type ClassItem = { number: number; title: string; topics: string[] };
type Week = { week: number; theme: string; classes: [ClassItem, ClassItem] };

const curriculum: Week[] = [
  {
    week: 1,
    theme: "Audience & Creative Intelligence",
    classes: [
      {
        number: 1,
        title: "Hyper-Targeting & Audience Intelligence",
        topics: [
          "Advanced audience segmentation",
          "Hidden interests and audience research",
          "Buyer intent and behavioral segmentation",
          "Broad targeting vs interest targeting",
          "Advantage+ audience strategies",
          "AI-powered audience research",
          "Audience testing and validation frameworks",
        ],
      },
      {
        number: 2,
        title: "Creative Intelligence & Meta Ads Library Masterclass",
        topics: [
          "Meta Ads Library competitor research",
          "Identifying winning advertising angles",
          "Creative concept development",
          "Hook development and buyer psychology",
          "Image, GIF and video ad strategies",
          "Creative self-qualification frameworks",
          "Competitor creative analysis",
          "Building a repeatable creative research SOP",
        ],
      },
    ],
  },
  {
    week: 2,
    theme: "AI Advertising & Client Qualification",
    classes: [
      {
        number: 3,
        title: "AI Advertising Automation System",
        topics: [
          "AI-powered advertising workflows",
          "AI creative ideation and development",
          "AI image and video creation workflows",
          "AI ad copy generation",
          "AI-powered audience research",
          "AI campaign analysis",
          "Advanced prompt engineering",
          "Advertising automation systems",
        ],
      },
      {
        number: 4,
        title: "Ad Copywriting, Offer Engineering & Lead Qualification",
        topics: [
          "Copywriting for cold, warm and hot audiences",
          "Buyer psychology and conversion messaging",
          "Offer engineering and positioning",
          "Developing compelling acquisition offers",
          "Lead qualification frameworks",
          "Qualification landing pages",
          "Form optimization and lead filtering",
          "Building pre-qualified lead acquisition systems",
        ],
      },
    ],
  },
  {
    week: 3,
    theme: "Tracking & Campaign Launch",
    classes: [
      {
        number: 5,
        title: "Tracking, Attribution & Conversion Intelligence",
        topics: [
          "Meta Pixel implementation",
          "Conversions API (CAPI)",
          "Browser-side and server-side tracking",
          "Event setup and prioritization",
          "Event deduplication",
          "Event Match Quality optimization",
          "CRM and offline conversion tracking",
          "Lead → Qualified Lead → Appointment → Sale tracking",
          "Attribution limitations and reporting",
          "Events Manager troubleshooting",
        ],
      },
      {
        number: 6,
        title: "Campaign Architecture, Launch & Validation",
        topics: [
          "Campaign structure and architecture",
          "Campaign objectives and optimization events",
          "Campaign launch strategies",
          "Budget allocation and testing",
          "Creative and audience testing",
          "Learning phase management",
          "Identifying winning and losing campaigns",
          "Campaign validation frameworks",
        ],
      },
    ],
  },
  {
    week: 4,
    theme: "Advanced Scaling",
    classes: [
      {
        number: 7,
        title: "Advanced Campaign Scaling Strategies",
        topics: [
          "ABO vs CBO campaign architecture",
          "Campaign dissection and optimization",
          "Vertical and horizontal scaling",
          "Lookalike audience strategies",
          "Creative scaling frameworks",
          "Budget expansion strategies",
          "Scaling winning campaigns",
          "Variables affecting campaign performance",
        ],
      },
      {
        number: 8,
        title: "The Father of Scaling: Advanced Manual Bidding",
        topics: [
          "Manual bidding strategies",
          "Bid caps and cost controls",
          "Advanced campaign architecture",
          "High-budget campaign management",
          "Acquisition cost control",
          "Bid strategy troubleshooting",
          "Scaling campaigns with greater control",
          "Advanced optimization decision-making",
        ],
      },
    ],
  },
  {
    week: 5,
    theme: "Retargeting & Conversion Intelligence",
    classes: [
      {
        number: 9,
        title: "Advanced Retargeting & Customer Segmentation",
        topics: [
          "Website visitor segmentation",
          "Video viewer segmentation",
          "Social media engagement audiences",
          "Lead vs customer retargeting",
          "Funnel-stage retargeting",
          "Audience exclusions",
          "Customer journey segmentation",
          "Personalized retargeting messaging",
          "Advanced retargeting campaign architecture",
        ],
      },
      {
        number: 10,
        title: "Customer Footprint & Funnel Intelligence",
        topics: [
          "Understanding website visitor behavior",
          "Customer journey mapping",
          "Heatmaps and session recordings",
          "Landing page conversion analysis",
          "Funnel drop-off analysis",
          "Identifying conversion bottlenecks",
          "Conversion rate optimization (CRO)",
          "Data-driven funnel optimization",
        ],
      },
    ],
  },
  {
    week: 6,
    theme: "Profitability & Live Implementation",
    classes: [
      {
        number: 11,
        title: "Unit Economics, Profitability & Scaling Risk",
        topics: [
          "Customer Acquisition Cost (CAC)",
          "Customer Lifetime Value (LTV)",
          "Break-even ROAS",
          "Contribution margin",
          "Customer payback period",
          "Revenue vs profit vs ROAS",
          "Acquisition profitability analysis",
          "Scaling risk management",
          "When to scale, pause or restructure campaigns",
        ],
      },
      {
        number: 12,
        title: "Live Campaign Dissection & Scaling Implementation",
        topics: [
          "Real campaign breakdowns",
          "Live campaign reviews",
          "Account-level troubleshooting",
          "Creative and audience diagnosis",
          "Tracking and lead quality analysis",
          "Scaling strategy development",
          "Campaign optimization roadmaps",
          "Individual implementation guidance",
          "Final campaign review and graduation",
        ],
      },
    ],
  },
];

const benefits = [
  { title: "Attract ideal clients", text: "Find the audiences, hidden interests and creative angles that reach buyers who can afford your offer." },
  { title: "Improve lead quality", text: "Use offer engineering, qualification pages and form filtering so fewer unqualified leads reach your calendar." },
  { title: "Track what actually converts", text: "Set up Pixel, Conversions API and CRM tracking from lead to qualified lead to appointment to sale." },
  { title: "Scale profitably", text: "Scale with ABO/CBO structures, manual bidding and unit economics, knowing when to scale, pause or restructure." },
];

const differentiators = [
  { icon: Wrench, title: "Hands-on implementation", text: "Work directly on your own campaigns, accounts, advertising strategies and acquisition systems." },
  { icon: Microscope, title: "Real-world campaign dissection", text: "Understand what's actually working, why campaigns fail, and how to identify opportunities for improvement." },
  { icon: Rocket, title: "Advanced strategies", text: "Go beyond basic campaign setup into advanced acquisition, optimization, tracking and scaling methodologies." },
  { icon: Bot, title: "AI-powered advertising", text: "Integrate AI into research, creative development, copywriting, analysis and advertising workflows." },
  { icon: Workflow, title: "Complete client acquisition system", text: "Understand the entire journey from attracting prospects to generating qualified leads, tracking conversions and improving profitability." },
  { icon: LifeBuoy, title: "Live support & implementation", text: "Get practical guidance, troubleshooting and strategic feedback throughout the mastermind." },
];

const resources = [
  "Meta Ads Library Research SOP",
  "AI Advertising Prompt Library",
  "Creative Research & Testing Frameworks",
  "Campaign Testing & Validation SOP",
  "Pixel + CAPI Implementation Checklist",
  "Conversion Tracking Framework",
  "Campaign Scaling Playbooks",
  "Manual Bidding Decision Framework",
  "Advanced Retargeting Templates",
  "Landing Page Optimization Checklist",
  "Lead Qualification Framework",
  "CAC, LTV & Break-Even Calculator",
  "Campaign Audit Checklist",
  "Weekly Implementation Assignments",
];

const audience = [
  "Agency owners",
  "Marketing consultants",
  "Media buyers",
  "Coaches & consultants",
  "High-ticket service providers",
  "Lead generation businesses",
  "Business owners running paid advertising",
  "Marketers looking to improve lead quality",
  "Advertisers looking to scale profitably",
];

const faqs = [
  {
    q: "What is the AI Client Acquisition Mastermind?",
    a: "It is a 6-week, hands-on implementation mastermind from QualifiedLeadsX. Across 12 classes you learn to build, optimize and scale a predictable client acquisition system using Meta ads, AI-powered advertising, qualified lead generation, conversion tracking, funnels and advanced scaling strategies, applied to your own campaigns.",
  },
  {
    q: "Is this just another Facebook ads course?",
    a: "No. It is an implementation mastermind: you work on your own campaigns, accounts and acquisition systems, with live campaign reviews, troubleshooting and individual implementation guidance, rather than watching recorded lessons.",
  },
  {
    q: "What are hidden Facebook interests, and are they covered?",
    a: "Hidden interests are targetable Meta interest audiences that are hard to find through standard Ads Manager search. Hidden interest and audience research is part of Class 1, alongside buyer-intent segmentation, broad vs interest targeting and Advantage+ audience strategies. The free training on this page is a preview of that class.",
  },
  {
    q: "Who is the mastermind for?",
    a: "Agency owners, marketing consultants, media buyers, coaches and consultants, high-ticket service providers, lead generation businesses, and business owners or marketers running paid ads who want better lead quality and more profitable scaling.",
  },
  {
    q: "How is the 6-week program structured?",
    a: "Two classes a week: audience and creative intelligence (week 1), AI advertising and lead qualification (week 2), tracking and campaign launch (week 3), advanced scaling and manual bidding (week 4), retargeting and funnel intelligence (week 5), and unit economics with live campaign dissection (week 6).",
  },
  {
    q: "What resources are included?",
    a: "14 implementation resources, including a Meta Ads Library research SOP, an AI advertising prompt library, a Pixel + CAPI implementation checklist, campaign scaling playbooks, a manual bidding decision framework, retargeting templates, a CAC, LTV and break-even calculator, and weekly implementation assignments.",
  },
  {
    q: "How do I join?",
    a: "Apply using the button on this page. You'll book a short call where we confirm the mastermind is a fit for your business and answer questions about schedule and enrollment.",
  },
];

export default function AiClientAcquisitionMastermindPage() {
  const pageUrl = `${site.url}${PATH}`;
  const webPage = webPageNode({ path: PATH, name: "AI Client Acquisition Mastermind", description: DESCRIPTION, dateModified: "2026-11-09" });
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${pageUrl}#course`,
    name: "AI Client Acquisition Mastermind",
    description:
      "A 6-week hands-on implementation mastermind covering Meta ads audience and creative intelligence, AI advertising, lead qualification, tracking and attribution, campaign scaling, manual bidding, retargeting, funnel optimization and unit economics.",
    url: pageUrl,
    provider: orgRef,
    publisher: publisherOrg,
    instructor: founder,
    inLanguage: "en",
    educationalLevel: "Advanced",
    isPartOf: { "@id": WEBSITE_ID },
    image: [imageObject("/opengraph-image")],
    teaches: curriculum.flatMap((w) => w.classes.map((c) => c.title)),
    syllabusSections: curriculum.flatMap((w) =>
      w.classes.map((c) => ({
        "@type": "Syllabus",
        name: `Week ${w.week}, Class ${c.number}: ${c.title}`,
        description: c.topics.join("; "),
      })),
    ),
    video: youtubeVideo({
      videoId: "jjq9-FSD4iA",
      name: "Hidden Facebook Interest Targeting: Free Mastermind Preview",
      description: "Free preview of Class 1 of the AI Client Acquisition Mastermind: hidden interest research and audience intelligence for Meta ads.",
      pageUrl,
    }),
  };

  const btnPrimary =
    "group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-sm font-semibold text-black shadow-[0_0_50px_-12px_rgba(255,200,87,0.6)] transition-transform hover:scale-[1.03]";
  const btnSecondary =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-amber hover:text-amber";

  return (
    <main id="main" className="flex min-h-screen flex-col bg-black text-white selection:bg-amber/30 selection:text-amber">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(`${pageUrl}#faq`, faqs)) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Mastermind", url: "/mastermind" },
          { name: "AI Client Acquisition Mastermind", url: PATH },
        ]}
      />
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber/10 blur-[150px]" />
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">QualifiedLeadsX · 6-week hands-on implementation mastermind</p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              AI Client Acquisition Mastermind:{" "}
              <span className="text-amber">Build a Predictable Client Acquisition System.</span>
            </h1>
            <p className="mt-6 text-xl font-semibold text-white/90">Attract ideal clients. Scale profitably.</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Learn how to build, optimize and scale a predictable client acquisition system using Meta ads, AI-powered advertising, qualified lead generation, conversion tracking, funnels and advanced scaling strategies.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.bookCallUrl} className={btnPrimary}>
                Apply for the Mastermind
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#curriculum" className={btnSecondary}>
                Explore the Curriculum
              </a>
            </div>
            <ul className="mt-10 grid grid-cols-3 gap-3 text-center sm:max-w-md">
              {[
                ["6", "Weeks"],
                ["12", "Live classes"],
                ["14", "Implementation resources"],
              ].map(([v, l]) => (
                <li key={l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="block font-mono text-2xl font-bold text-amber">{v}</span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wider text-white/60">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: acquisition pipeline taught in the program */}
          <div aria-hidden="true" className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">Acquisition system</span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-amber" />
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ["Audience & creative research", "Weeks 1–2", 100],
                ["AI ads & qualified offers", "Week 2", 82],
                ["Lead → Qualified → Appointment → Sale", "Week 3", 64],
                ["Scaling & manual bidding", "Week 4", 48],
                ["Retargeting & funnel CRO", "Week 5", 36],
                ["Profitability & live reviews", "Week 6", 26],
              ].map(([label, wk, w]) => (
                <div key={label as string}>
                  <div className="flex justify-between text-xs text-white/70">
                    <span>{label}</span>
                    <span className="font-mono text-white/40">{wk}</span>
                  </div>
                  <div className="mt-1.5 h-2.5 rounded-full bg-white/[0.06]">
                    <div className="h-2.5 rounded-full bg-gradient-to-r from-amber to-amber/40" style={{ width: `${w}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-5 items-center gap-1 text-center text-[10px] uppercase tracking-wider text-white/60">
              {["Research", "Create", "Track", "Scale", "Profit"].map((s, i) => (
                <div key={s} className="flex items-center justify-center gap-1">
                  <span className={`rounded-md border px-1.5 py-1 ${i === 4 ? "border-amber text-amber" : "border-white/15"}`}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program introduction */}
      <section className="border-t border-white/10 bg-[#0a0a0a] py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Program introduction</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Not just another advertising course</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              The AI Client Acquisition Mastermind is a hands-on implementation mastermind designed to help you understand the complete client acquisition ecosystem, improve lead quality, optimize conversion rates and build a repeatable acquisition process.
            </p>
            <p>
              Over six weeks you move from audience and creative research, through AI-assisted ad production, tracking and launch, to advanced scaling, retargeting and profitability, applying each class to your own campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Core benefits */}
      <section className="border-t border-white/10 py-20">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Core benefits</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">What you&apos;ll be able to do after six weeks</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <CheckCircle2 className="h-6 w-6 text-amber" />
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="scroll-mt-24 border-t border-white/10 bg-[#0a0a0a] py-20">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">The complete 6-week curriculum</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">What you will master, week by week</h2>
          <div className="mt-12 space-y-8">
            {curriculum.map((w) => (
              <div key={w.week} className="rounded-3xl border border-white/10 bg-black p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-sm font-bold uppercase tracking-widest text-amber">Week {w.week}</span>
                  <h3 className="text-xl font-bold sm:text-2xl">{w.theme}</h3>
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {w.classes.map((c) => (
                    <div key={c.number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                      <p className="font-mono text-xs uppercase tracking-wider text-white/50">Class {c.number}</p>
                      <h4 className="mt-1 text-lg font-semibold text-white">{c.title}</h4>
                      <ul className="mt-4 space-y-2">
                        {c.topics.map((t) => (
                          <li key={t} className="flex gap-2 text-sm text-white/70">
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={site.bookCallUrl} className={btnPrimary}>
              Apply for the Mastermind
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Free preview: Class 1 */}
      <section className="border-t border-white/10 pt-20">
        <div className="container-x max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Free preview · Class 1</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Hidden Facebook interest targeting</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            A taste of week 1: how hidden interest research, buyer-intent segmentation and creative rotation work together to reach high-ticket buyers on Meta.
          </p>
        </div>
      </section>
      <VSL videoId="jjq9-FSD4iA" hideHeading />

      {/* What makes it different */}
      <section className="border-t border-white/10 py-20">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">What makes this mastermind different</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Built around your campaigns, not slides</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <Icon className="h-7 w-7 text-amber" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="border-t border-white/10 bg-[#0a0a0a] py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Implementation resources</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Premium resources you keep using</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              SOPs, checklists, playbooks and templates for every stage of the system, plus weekly assignments that turn each class into action on your own account.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {resources.map((r) => (
              <li key={r} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white/85">
                <FileText className="h-4 w-4 shrink-0 text-amber" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-white/10 py-20">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Who is this mastermind for?</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">For people who run, or rely on, paid acquisition</h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {audience.map((a) => (
              <li key={a} className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-white/85">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
            Prefer to have the system built and run for you instead? See our{" "}
            <a href="/meta-ads-agency" className="text-amber underline underline-offset-2">Meta ads agency</a> and{" "}
            <a href="/lead-generation-agency" className="text-amber underline underline-offset-2">done-for-you lead generation</a> services.
          </p>
        </div>
      </section>

      {/* Graduate support */}
      <section className="border-t border-white/10 bg-[#0a0a0a] py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <GraduationCap className="h-9 w-9 text-amber" />
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-amber">Graduate support program</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">You don&apos;t graduate alone</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              The final class ends with a live review of your campaigns, an optimization roadmap and individual implementation guidance, so you leave with a clear plan for your own account.
            </p>
            <p>Details of support after graduation are covered on your application call.</p>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqs}
        eyebrow="Questions, answered"
        title={
          <>
            AI Client Acquisition Mastermind <em className="font-semibold not-italic text-lime">FAQ.</em>
          </>
        }
        subtitle="Straight answers about the program. If your question isn't here, apply and ask us directly on the call."
        ctaLabel="Apply for the Mastermind"
      />

      {/* Results */}
      <section id="results" className="border-t border-white/10 bg-[#0a0a0a] py-20">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Results</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Results from the system taught in this mastermind</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            Documented client results from the same Meta ads, qualification, tracking and scaling methods covered in the 12 classes. Each one links to the full case study.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors hover:border-amber/60"
              >
                {c.image && (
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.03]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={`${c.title}: client result screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-amber">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{c.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-amber">
                    Read the case study <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="text-sm font-semibold text-amber underline underline-offset-4">
              See all case studies
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Build your client acquisition advantage</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">Stop relying on guesswork.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Build a predictable system to attract, qualify, convert and acquire ideal clients using modern advertising strategies, AI automation, conversion intelligence and advanced scaling methodologies.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.bookCallUrl} className={btnPrimary}>
              Apply for the Mastermind
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#curriculum" className={btnSecondary}>
              Explore the Curriculum
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
