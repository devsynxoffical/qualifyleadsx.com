import type { Metadata } from "next";
import Link from "next/link";
import {
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
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { Footer } from "@/components/layout/Footer";
import { VSL } from "@/components/sections/VSL";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FAQ";
import { Training } from "@/components/sections/Training";
import { UFSquareMarquee } from "@/components/sections/UFSquareMarquee";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const PATH = "/mastermind/hidden-facebook-interest";
const TITLE = "AI Client Acquisition Mastermind: 6-Week Meta Ads Program";
const DESCRIPTION =
  "A 6-week, hands-on mastermind: Meta ads, hidden interest research, AI ads, tracking, scaling and unit economics, built on your own campaigns. Apply now.";

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

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(`${pageUrl}#faq`, faqs)) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Mastermind", url: "/mastermind" },
          { name: "AI Client Acquisition Mastermind", url: PATH },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero: same centred layout and type scale as the homepage hero */}
      <section className="relative overflow-hidden bg-ink pt-24 pb-12 sm:pt-32 sm:pb-14 lg:flex lg:min-h-[calc(100svh-2.5rem)] lg:items-center lg:pt-28 lg:pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(201,242,107,0.10),transparent)]" />
        <div className="container-x relative z-10 flex w-full flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow justify-center">6-week implementation mastermind</span>
          </Reveal>
          <h1 className="mt-4 max-w-5xl text-balance font-semibold tracking-[-0.03em] text-fog">
            <span className="block text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.22]">
              <em className="text-gradient-lime not-italic">AI Client Acquisition Mastermind</em> by QualifiedLeadsX
            </span>
            <span className="mt-2 block text-gradient-lime text-[clamp(1.85rem,4.4vw,3.75rem)] font-bold leading-[1.05]">
              Build a Predictable Client Acquisition System.
            </span>
            <span className="mt-2 block text-[clamp(1rem,1.6vw,1.25rem)] font-medium leading-[1.35] text-fog">
              Attract ideal clients. Scale profitably.
            </span>
          </h1>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-[0.9rem] leading-relaxed text-mist sm:mt-4 sm:text-base">
              Learn how to build, optimize and scale a predictable client acquisition system using Meta ads, AI-powered advertising, qualified lead generation, conversion tracking, funnels and advanced scaling strategies.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Button href={site.bookCallUrl} size="lg" icon="up-right" ariaLabel="Apply for the Mastermind">
                Apply for the Mastermind
              </Button>
              <Button href="#curriculum" variant="outline" size="lg">
                Explore the Curriculum
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="w-full">
            <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                ["6", "Weeks"],
                ["12", "Live classes"],
                ["14", "Implementation resources"],
              ].map(([v, l]) => (
                <li key={l} className="bg-panel px-4 py-4">
                  <span className="block font-mono text-2xl font-bold text-lime sm:text-3xl">{v}</span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wider text-mist">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Free preview: Class 1 */}
      <VSL
        videoId="jjq9-FSD4iA"
        eyebrow="Free preview · Class 1"
        title={
          <>
            Hidden Facebook interest{" "}
            <em className="font-semibold not-italic text-lime">targeting.</em>
          </>
        }
        subtitle="A taste of week 1: how hidden interest research, buyer-intent segmentation and creative rotation work together to reach high-ticket buyers on Meta."
      />

      <TrustBar />

      {/* Program introduction */}
      <Section id="program" className="bg-ink">
        <SectionHeading
          eyebrow="Program introduction"
          title={
            <>
              Not just another{" "}
              <em className="font-semibold not-italic text-lime">advertising course.</em>
            </>
          }
          subtitle="The AI Client Acquisition Mastermind is a hands-on implementation mastermind designed to help you understand the complete client acquisition ecosystem, improve lead quality, optimize conversion rates and build a repeatable acquisition process."
        />
        <Reveal y={20}>
          <p className="mx-auto max-w-3xl text-center text-[1rem] leading-relaxed text-mist sm:text-lg">
            Over six weeks you move from audience and creative research, through AI-assisted ad production, tracking and launch, to advanced scaling, retargeting and profitability, applying each class to your own campaigns.
          </p>
        </Reveal>
      </Section>

      {/* Core benefits: same tile grid as the homepage "Everything included" section */}
      <Section id="benefits" className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,242,107,0.06),transparent)]" />
        <SectionHeading
          eyebrow="Core benefits"
          title={
            <>
              What you&apos;ll be able to do{" "}
              <em className="font-semibold not-italic text-lime">after six weeks.</em>
            </>
          }
        />
        <Reveal y={20} delay={0.05}>
          <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <article key={b.title} className="group relative flex flex-col gap-4 bg-panel p-6 transition-colors duration-300 hover:bg-elevated sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink/60 text-lime transition-all duration-300 group-hover:border-lime/40 group-hover:bg-lime/10">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-fog">{b.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-dim">{b.text}</p>
                </div>
                <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Curriculum: card style of the homepage "How it works" section */}
      <Section id="curriculum" className="scroll-mt-24 bg-ink">
        <SectionHeading
          eyebrow="The complete 6-week curriculum"
          title={
            <>
              What you will master,{" "}
              <em className="font-semibold not-italic text-lime">week by week.</em>
            </>
          }
          subtitle="Twelve live classes, two a week, each applied to your own campaigns."
        />
        <div className="space-y-10">
          {curriculum.map((w) => (
            <div key={w.week}>
              <Reveal y={20}>
                <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="eyebrow">Week {w.week}</span>
                  <h3 className="text-2xl font-semibold tracking-tight text-fog sm:text-3xl">{w.theme}</h3>
                </div>
              </Reveal>
              <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-2">
                {w.classes.map((c, ci) => (
                  <li key={c.number} className="h-full">
                    <Reveal delay={ci * 0.06} y={28} className="h-full">
                      <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-all duration-500 hover:border-lime/30 hover:bg-elevated">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-lime">Class {c.number}</p>
                            <h4 className="mt-2 text-lg font-semibold tracking-tight text-fog">{c.title}</h4>
                          </div>
                          <span className="font-mono text-5xl font-bold tracking-tight text-fog/[0.08]">{String(c.number).padStart(2, "0")}</span>
                        </div>
                        <ul className="mt-5 space-y-2">
                          {c.topics.map((t) => (
                            <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                              <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-lime" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        compact
        eyebrow="Seats are limited"
        title={
          <>
            Twelve classes.{" "}
            <em className="font-semibold not-italic text-lime">Your own campaigns.</em>
          </>
        }
        description="Apply for the AI Client Acquisition Mastermind and build your acquisition system with live support."
        ctaLabel="Apply for the Mastermind"
        notes={["6 weeks, 12 live classes", "14 implementation resources"]}
      />

      {/* What makes it different */}
      <Section id="different" className="bg-ink">
        <SectionHeading
          eyebrow="What makes this mastermind different"
          title={
            <>
              Built around your campaigns,{" "}
              <em className="font-semibold not-italic text-lime">not slides.</em>
            </>
          }
        />
        <ol className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="h-full">
              <Reveal delay={(i % 3) * 0.06} y={28} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-all duration-500 hover:border-lime/30 hover:bg-elevated">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-5xl font-bold tracking-tight text-fog/[0.08]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-fog">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{text}</p>
                  <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Implementation resources */}
      <Section id="resources" className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,242,107,0.06),transparent)]" />
        <SectionHeading
          eyebrow="Implementation resources"
          title={
            <>
              Premium resources{" "}
              <em className="font-semibold not-italic text-lime">you keep using.</em>
            </>
          }
          subtitle="SOPs, checklists, playbooks and templates for every stage of the system, plus weekly assignments that turn each class into action on your own account."
        />
        <Reveal y={20} delay={0.05}>
          <ul className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <li key={r} className="group flex items-center gap-3 bg-panel px-6 py-5 text-sm text-fog transition-colors duration-300 hover:bg-elevated">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-ink/60 text-lime transition-colors group-hover:border-lime/40">
                  <FileText className="h-4 w-4" />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Who it's for */}
      <Section id="who" className="bg-ink">
        <SectionHeading
          eyebrow="Who is this mastermind for?"
          title={
            <>
              For people who run,{" "}
              <em className="font-semibold not-italic text-lime">or rely on, paid acquisition.</em>
            </>
          }
        />
        <Reveal y={20}>
          <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {audience.map((a) => (
              <li key={a} className="rounded-full border border-line bg-panel px-5 py-2.5 text-sm text-fog transition-colors hover:border-lime/40">
                {a}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-mist">
            Prefer to have the system built and run for you instead? See our{" "}
            <Link href="/meta-ads-agency" className="text-lime underline underline-offset-2">Meta ads agency</Link> and{" "}
            <Link href="/lead-generation-agency" className="text-lime underline underline-offset-2">done-for-you lead generation</Link> services.
          </p>
        </Reveal>
      </Section>

      {/* Graduate support */}
      <Section id="graduate-support" className="bg-ink">
        <Reveal y={24}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-panel p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime/[0.08] blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.07] text-lime">
                <GraduationCap className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <div>
                <span className="eyebrow">Graduate support program</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
                  You don&apos;t graduate <em className="font-semibold not-italic text-lime">alone.</em>
                </h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-mist sm:text-lg">
                  The final class ends with a live review of your campaigns, an optimization roadmap and individual implementation guidance, so you leave with a clear plan for your own account. Details of support after graduation are covered on your application call.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

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

      {/* Training videos: same section as the homepage */}
      <Training />

      <Testimonials />

      <div className="py-12 sm:py-16">
        <CTABanner
          eyebrow="Build your client acquisition advantage"
          title={
            <>
              Stop relying on{" "}
              <em className="font-semibold not-italic text-lime">guesswork.</em>
            </>
          }
          description="Build a predictable system to attract, qualify, convert and acquire ideal clients using modern advertising strategies, AI automation, conversion intelligence and advanced scaling methodologies."
          ctaLabel="Apply for the Mastermind"
          notes={["6 weeks, 12 live classes", "Live campaign reviews"]}
        />
      </div>

      {/* Live client call recordings: same strip as the homepage */}
      <UFSquareMarquee />

      <Footer />
    </main>
  );
}
