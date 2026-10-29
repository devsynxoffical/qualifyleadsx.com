import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Target,
  Building2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Lock,
  Layers,
} from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us - Done-For-You Client Acquisition Agency",
  description:
    "Learn about QualifiedLeadsX: $50M+ in Meta ads managed, 125+ case studies, and the 8-step client acquisition system founded by Gaurav. Operated by Ecom Expertz LLC.",
  alternates: {
    canonical: "/about",
  },
};

const numbers = [
  { value: "$50M+", label: "Managed in Meta Ads", sub: "Across Facebook & Instagram" },
  { value: "125+", label: "Case Studies Documented", sub: "69 live video breakdowns" },
  { value: "30+", label: "Niches Scaled", sub: "Coaches, agencies & B2B" },
  { value: "90-Day", label: "Written Guarantee", sub: "Milestone-backed performance" },
];

const provenMetrics = [
  { metric: "$846,000", client: "B2B Marketing Agency", detail: "235 high-ticket clients closed in 2025" },
  { metric: "$639,000", client: "MedSpa Marketing Agency", detail: "Generated in 60 days from cold Meta ads" },
  { metric: "$4.38 CPL", client: "Legal & MVA Acquisition", detail: "6,275 verified leads generated at scale" },
  { metric: "$0.50 CPL", client: "MedSpa Practice", detail: "2,064 patient booking inquiries captured" },
  { metric: "$12.79 CPL", client: "High-Ticket Roofing", detail: "215 commercial & residential replacement leads" },
];

const processSteps = [
  { step: "01", title: "Offer & Economics Audit", desc: "We deconstruct your pricing, margins, lifetime value, and close rates to ensure your funnel is engineered for aggressive front-end profitability." },
  { step: "02", title: "Direct-Response VSL & Funnel", desc: "Full copywriting, design, and technical build of a high-converting 3-to-5 page VSL funnel that pre-sells prospects before they speak to you." },
  { step: "03", title: "Creative Production Engine", desc: "40 to 100+ creative angles, hooks, and video concepts tested systematically to eliminate ad fatigue and crush acquisition costs." },
  { step: "04", title: "Meta Ads Media Buying", desc: "Multi-audience scaling across Facebook & Instagram with strict budget allocation rules, bidding caps, and real-time conversion API integration." },
  { step: "05", title: "Sub-5-Minute Speed to Lead", desc: "Automated multi-channel response (SMS, email, AI follow-up) engaging incoming prospects within 180 seconds when intent is at its peak." },
  { step: "06", title: "Strict Lead Qualification", desc: "Multi-question friction filters and intake scoring so your calendar is only populated by decision-makers with real budget ($10k+ capacity)." },
  { step: "07", title: "Automated Calendar Booking", desc: "Complete CRM integration synchronizing calendar booking slots, automated reminders, and no-show nurture sequences." },
  { step: "08", title: "Continuous Optimization & Scaling", desc: "Weekly creative refreshes, audience refinement, and offer iteration backed by our 90-day written performance commitment." },
];

const leadershipRoles = [
  {
    name: "Gaurav",
    role: "Founder & Growth Architect",
    bio: "12+ years of hands-on paid acquisition and direct-response marketing experience. Has directed over $50M in Meta Ads spend, scaling agencies and high-ticket service providers into multi-million dollar annual run rates.",
    linkedin: "https://www.linkedin.com/in/gauravecom/",
  },
  {
    name: "Media Buying Team",
    role: "Meta Ads & Algorithm Specialists",
    bio: "Dedicated ad account managers monitoring CPL, frequency, auction dynamics, and conversion tracking across US, UK, Canada, and Australian ad accounts daily.",
  },
  {
    name: "Creative & Copy Guild",
    role: "Direct-Response Creatives & VSL Scripts",
    bio: "Specialists crafting high-retention video hooks, visual scripts, and high-converting landing page copy built specifically for high-ticket sales.",
  },
  {
    name: "Systems & AI Engineering",
    role: "CRM, AI Follow-Up & Integrations",
    bio: "Workflow engineers building automated speed-to-lead sequences, CRM pipelines, webhook bridges, and multi-channel SMS/email follow-up engines.",
  },
];

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/about#founder`,
    name: "Gaurav",
    jobTitle: "Founder",
    worksFor: { "@id": `${site.url}/#organization` },
    url: `${site.url}/about`,
    image: `${site.url}/og.png`,
    description: "Founder of QualifiedLeadsX with 12+ years in paid acquisition and $50M+ in Meta ads managed.",
    knowsAbout: ["Meta ads", "Client acquisition", "High ticket sales", "Agency growth"],
    sameAs: ["https://www.linkedin.com/in/gauravecom/"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${site.url}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <AnnouncementBar />
      <Nav />

      <main className="relative min-h-screen bg-ink text-fog overflow-hidden pt-32 pb-24">
        {/* Ambient glow effects matching site theme */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-lime/10 blur-[150px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-mist">
              <li>
                <Link href="/" className="hover:text-lime transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-line-strong">/</li>
              <li className="text-fog font-medium">About</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 border border-lime/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-lime" />
              <span>Company & Philosophy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-fog leading-[1.1] mb-6">
              About <span className="text-lime">QualifiedLeadsX</span>
            </h1>
            <p className="text-xl sm:text-2xl text-fog leading-relaxed font-normal mb-6">
              QualifiedLeadsX™ is a done-for-you client acquisition agency that builds and runs Meta ads, funnels, CRM, and AI follow-up to book qualified sales calls for agency owners, high-ticket coaches, and B2B service businesses doing $10,000+ a month.
            </p>
            <p className="text-base sm:text-lg text-mist leading-relaxed">
              We started QualifiedLeadsX to fix a broken industry reality: founders are forced to manage fragmented vendors—an ad agency that does not understand landing pages, a copywriter who has never looked at CRM analytics, and appointment setters who let warm leads go cold. We eliminate vendor finger-pointing by engineering, managing, and guaranteeing your entire acquisition system under one roof.
            </p>
          </header>

          {/* Numbers Grid */}
          <section aria-label="Key Agency Metrics" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
            {numbers.map((item) => (
              <div
                key={item.label}
                className="p-6 sm:p-7 rounded-2xl bg-panel border border-line hover:border-lime/40 transition-colors shadow-lg"
              >
                <div className="text-3xl sm:text-4xl font-bold font-mono text-lime mb-2">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-fog mb-1">{item.label}</div>
                <div className="text-xs font-mono text-dim">{item.sub}</div>
              </div>
            ))}
          </section>

          {/* Our Story */}
          <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-panel border border-line">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-lime" />
              Our Story
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-mist leading-relaxed">
              <p>
                QualifiedLeadsX was founded in 2022 by Gaurav after more than 12 years inside the trenches of paid media buying, direct-response copywriting, and performance marketing. Having managed tens of millions in Meta ad spend, a single constant became clear: <strong className="text-fog">traffic alone does not solve client acquisition.</strong>
              </p>
              <p>
                A high-ticket offer requires a complete ecosystem. When ads drive clicks to a weak offer page, money is burned. When landing pages convert leads but nobody follows up within 5 minutes, 80% of high-intent buyers vanish. By shifting from pure media buying to building end-to-end acquisition infrastructure—combining high-converting VSLs, hyper-targeted Facebook & Instagram campaigns, and sub-5-minute AI follow-up workflows—we engineered a predictable engine that consistently scales clients past $100k/month.
              </p>
              <p>
                Today, operated under <strong className="text-fog">Ecom Expertz LLC</strong>, QualifiedLeadsX partners with ambitious high-ticket service businesses across the United States, United Kingdom, Canada, and Australia, delivering qualified sales calls directly into their sales calendars.
              </p>
            </div>
          </section>

          {/* Who We Work With */}
          <section className="mb-20">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog mb-4 flex items-center gap-3">
                <Users className="w-7 h-7 text-lime" />
                Who We Work With
              </h2>
              <p className="text-mist text-base sm:text-lg">
                We do not work with pre-revenue ideas or low-ticket ecommerce. Our systems are precision-calibrated for established businesses doing <strong className="text-fog">$10,000+ per month</strong> with high-ticket offerings ($2,000 to $25,000+ deal sizes):
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-panel border border-line hover:border-lime/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold font-heading text-fog mb-2">Agency Owners</h3>
                <p className="text-sm text-mist leading-relaxed">
                  Digital marketing agencies, SEO shops, MedSpa marketing agencies, and creative studios needing 20 to 40+ qualified agency pitch calls booked every single month.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-panel border border-line hover:border-lime/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold font-heading text-fog mb-2">High-Ticket Coaches & Consultants</h3>
                <p className="text-sm text-mist leading-relaxed">
                  Executive coaches, career accelerators, fitness and wellness leaders selling $3k-$10k transformation packages who are tired of manual organic DM prospecting.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-panel border border-line hover:border-lime/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono font-bold mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold font-heading text-fog mb-2">B2B Service Providers</h3>
                <p className="text-sm text-mist leading-relaxed">
                  Specialized service providers, commercial contractors, legal firms, and software companies targeting decision-makers with high lifetime value.
                </p>
              </div>
            </div>
          </section>

          {/* Results in Numbers */}
          <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-panel border border-line">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog mb-2 flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-lime" />
                  Results in Numbers (Verified Proof)
                </h2>
                <p className="text-mist text-sm sm:text-base">
                  Every claim is backed by real client accounts, live CRM dashboards, and documented video breakdowns.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-lime hover:underline transition-colors whitespace-nowrap"
              >
                Explore 125+ Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {provenMetrics.map((item) => (
                <div
                  key={item.client}
                  className="p-5 rounded-xl bg-elevated border border-line hover:border-lime/40 transition-colors"
                >
                  <div className="text-2xl font-bold font-mono text-lime mb-1">{item.metric}</div>
                  <div className="text-sm font-semibold text-fog mb-1">{item.client}</div>
                  <div className="text-xs font-mono text-dim">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Work - 8-Step Architecture */}
          <section className="mb-20">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog mb-4 flex items-center gap-3">
                <Layers className="w-7 h-7 text-lime" />
                How We Work: The 8-Step DFY System
              </h2>
              <p className="text-mist text-base sm:text-lg">
                We handle the heavy lifting from end to end so you can focus 100% of your energy on closing sales calls and delivering client results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-panel border border-line hover:border-lime/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-lime uppercase tracking-widest block mb-2">
                      Step {step.step}
                    </span>
                    <h3 className="text-base font-bold font-heading text-fog mb-2">{step.title}</h3>
                    <p className="text-xs text-mist leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Asset Ownership & Guarantee Callout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-panel border border-line flex items-start gap-4">
                <Lock className="w-6 h-6 text-lime shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold font-heading text-fog mb-1">100% Client Asset Ownership</h3>
                  <p className="text-sm text-mist leading-relaxed">
                    Unlike agencies that lock assets into proprietary black boxes, you retain 100% ownership of your Meta ad account, funnel pages, CRM database, creative IP, and customer lists.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-panel border border-line flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-lime shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold font-heading text-fog mb-1">90-Day Written Guarantee</h3>
                  <p className="text-sm text-mist leading-relaxed">
                    We tie our compensation to your outcome. If agreed growth milestones are not achieved within 90 days, we work with zero management fee until they are met.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership and Team */}
          <section className="mb-20">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-lime" />
                Leadership & Growth Team
              </h2>
              <p className="text-mist text-base sm:text-lg">
                Meet the minds behind your acquisition engine. Our team combines over a decade of media buying excellence with custom workflow engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadershipRoles.map((member) => (
                <div
                  key={member.name}
                  className="p-6 sm:p-8 rounded-2xl bg-panel border border-line hover:border-lime/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold font-heading text-fog">{member.name}</h3>
                        <p className="text-sm text-lime font-mono font-medium">{member.role}</p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elevated border border-line hover:border-lime/40 text-mist hover:text-lime text-xs font-mono font-medium transition-colors"
                        >
                          LinkedIn <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-mist leading-relaxed mt-4">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Details */}
          <section className="mb-20 p-8 rounded-3xl bg-panel border border-line">
            <h2 className="text-2xl font-bold font-heading text-fog mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-lime" />
              Corporate Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-dim block mb-1 font-mono text-xs uppercase tracking-wider">Legal Entity</span>
                <span className="text-fog font-semibold">Ecom Expertz LLC</span>
              </div>
              <div>
                <span className="text-dim block mb-1 font-mono text-xs uppercase tracking-wider">Registered Address</span>
                <span className="text-mist">1309 Coffeen Avenue STE 1200<br />Sheridan, Wyoming 82801, USA</span>
              </div>
              <div>
                <span className="text-dim block mb-1 font-mono text-xs uppercase tracking-wider">Direct Contact</span>
                <span className="text-mist">hello@qualifiedleadsx.com<br />WhatsApp: +91 95822 96172</span>
              </div>
              <div>
                <span className="text-dim block mb-1 font-mono text-xs uppercase tracking-wider">Official Channels</span>
                <a
                  href="https://www.youtube.com/@QualifiedLeadsX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime hover:underline block mb-1 transition-colors"
                >
                  YouTube @QualifiedLeadsX
                </a>
                <a
                  href="https://www.facebook.com/groups/qualifiedleadsx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime hover:underline block transition-colors"
                >
                  Facebook Group (350+ Leaders)
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Canonical CTABanner matching homepage & case studies */}
        <CTABanner
          eyebrow="Direct-Response Acquisition"
          title={
            <>
              Ready to fill your calendar with{" "}
              <em className="font-semibold not-italic text-lime">qualified sales calls</em>?
            </>
          }
        />
      </main>

      <Footer />
    </>
  );
}
