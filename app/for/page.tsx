import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { site } from "@/lib/site";
import { WEBSITE_ID, publisherOrg } from "@/lib/schema";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Scale,
  Activity,
  Home,
  Sun,
  ShieldCheck,
  Building2,
  DollarSign,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import { ProofStack } from "@/components/sections/ProofStack";
import { LinkGroups } from "@/components/sections/LinkGroups";
import { industryPages, metaAdsIndustryLinks, appointmentSettingIndustryLinks } from "@/lib/industry-links";

export const metadata: Metadata = {
  title: "Lead Generation by Industry - QualifiedLeadsX",
  description:
    "Done-for-you lead generation by industry. Explore specialized client acquisition funnels and benchmarks for coaches, consultants, agencies, MedSpas, and SaaS.",
  keywords: [
    "lead generation by industry",
    "b2b lead generation by industry",
    "client acquisition for coaches",
    "lead generation for consultants",
    "agency client acquisition",
    "med spa lead generation",
    "saas lead generation",
  ],
  alternates: {
    canonical: "/for",
  },
  openGraph: {
    title: "Lead Generation by Industry - QualifiedLeadsX",
    description:
      "Explore specialized client acquisition systems and cost-per-booked-call benchmarks across 16+ high-ticket industries.",
    url: `${site.url}/for`,
    type: "website",
  },
};

const industries = [
  {
    title: "Digital & Marketing Agencies",
    keyword: "client acquisition for agencies",
    href: "/for/agencies",
    icon: Building2,
    badge: "Most Popular",
    description:
      "Scale your agency past $100K+/month without cold outreach or relying on client referrals. We install full-funnel VSL client acquisition engines.",
    stats: "Avg Deal: $4,500/mo · Benchmark CAC: $750 · 125+ Cases",
  },
  {
    title: "High-Ticket Coaches",
    keyword: "lead generation for coaches",
    href: "/for/coaches",
    icon: GraduationCap,
    badge: "Coaching & Info",
    description:
      "Fill your sales calendar with 30–50 high-ticket coaching clients ready to invest $3,000–$15,000 using broad Meta Ads and automated appointment setting.",
    stats: "Avg Program: $5,000 · Show Rate: 88%+ · $203K in 11 Days",
  },
  {
    title: "B2B & Management Consultants",
    keyword: "lead generation for consultants",
    href: "/for/consultants",
    icon: Briefcase,
    badge: "Consulting",
    description:
      "Book qualified discovery sessions with corporate directors and enterprise leaders without spamming InMail. Direct-response positioning for $10K+ engagements.",
    stats: "Avg Contract: $10,000+ · Speed to Lead: <3 mins",
  },
  {
    title: "B2B Service Companies",
    keyword: "b2b service lead generation",
    href: "/for/b2b-services",
    icon: ShieldCheck,
    badge: "B2B Services",
    description:
      "Engineered client acquisition pipelines for professional service firms, IT services, and commercial providers looking for predictable B2B contract growth.",
    stats: "Avg Retainer: $6,000 · 4-Tier Qualification Filter",
  },
  {
    title: "B2B SaaS & Tech Companies",
    keyword: "saas lead generation",
    href: "/for/saas",
    icon: Laptop,
    badge: "Software & Tech",
    description:
      "Drive qualified enterprise demo bookings and trial activations for high-ACV software platforms with algorithmic Meta Ads and automated setter follow-up.",
    stats: "High ACV ($5K–$50K) · Sub-$120 Demo Booking Cost",
  },
  {
    title: "MedSpas & Aesthetic Clinics",
    keyword: "med spa lead generation",
    href: "/for/med-spas",
    icon: Activity,
    badge: "Aesthetics & Medical",
    description:
      "Book high-ticket package consultations (Body contouring, laser treatments, injectors) with automated deposit-collection and appointment setting.",
    stats: "$639,000 in 60 Days · Verified MedSpa Case Study",
  },
  {
    title: "Financial Advisors & Wealth Managers",
    keyword: "financial advisor leads",
    href: "/for/financial-advisors",
    icon: DollarSign,
    badge: "Finance & Wealth",
    description:
      "FINRA/SEC compliant lead acquisition targeting high-net-worth individuals for comprehensive wealth management and retirement planning consultations.",
    stats: "HNW Individuals ($500K+ investable) · Fully Compliant Funnels",
  },
  {
    title: "High-Ticket Home Services & Roofing",
    keyword: "home improvement leads",
    href: "/for/home-improvement",
    icon: Home,
    badge: "Home Services",
    description:
      "Dominate your local region with verified roofing, HVAC, solar, and remodeling inquiries that convert into signed $15,000+ home service contracts.",
    stats: "$86,275 Net Cash Collected in Single Sprint",
  },
  {
    title: "Commercial & Residential Solar",
    keyword: "solar appointment setting",
    href: "/for/solar-companies",
    icon: Sun,
    badge: "Clean Energy",
    description:
      "Pre-qualified homeowner utility bill audits booked directly onto solar sales rep calendars with strict credit and shading pre-qualification.",
    stats: "Credit-Qualified Homeowners · Sub-15 Minute Dispatch",
  },
  {
    title: "Legal Practices & Law Firms",
    keyword: "law firm lead generation",
    href: "/for/law-firms",
    icon: Scale,
    badge: "Legal & MVA",
    description:
      "Motor Vehicle Accident (MVA) and high-value personal injury claimant intake infrastructure with strict signed retainer pre-qualification.",
    stats: "8,810+ MVA Leads Generated at $7.61 Per Lead",
  },
];

const faqs = [
  {
    q: "Why does lead generation differ significantly across industries?",
    a: "Every industry operates with distinct customer economics, decision-making cycles, and compliance boundaries. For example, B2B consultants require high-trust positioning and 4-tier qualification surveys, whereas MedSpas require localized visual offers and instant SMS appointment confirmation within 3 minutes.",
  },
  {
    q: "Do you have verified proof in my specific industry?",
    a: "Yes. QualifiedLeadsX has documented over 125 case studies and ad account dashboards across 30+ B2B and consumer service niches, managing over $50M+ in collective Meta Ads ad spend. Explore our Case Studies gallery to see numbers from your exact sector.",
  },
  {
    q: "What is the typical cost per booked call by industry?",
    a: "For high-ticket coaching and agencies, cost per booked call typically averages between $90 and $180. For B2B enterprise consulting and SaaS, it ranges from $140 to $280 depending on the target executive title. For high-ticket local services (MedSpas/Roofing), calls range from $45 to $95.",
  },
  {
    q: "How do you prevent unqualified leads from booking calls?",
    a: "We never send traffic to bare calendar links. Every prospect must pass through a 12-minute VSL explaining your mechanism, followed by a conditional intake gate that disqualifies those without liquid budget or genuine intent.",
  },
  {
    q: "Can I review client case studies before signing?",
    a: "Absolutely. We provide live video walkthroughs, screen-recorded Stripe and Wise payment ledgers, and Meta Ads Manager accounts verifying revenue generated for our partners.",
  },
];

export default function IndustryHubPage() {
  const pageUrl = `${site.url}/for`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Lead Generation by Industry - QualifiedLeadsX",
        description:
          "Explore specialized client acquisition systems and cost-per-booked-call benchmarks across 16+ high-ticket industries.",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: publisherOrg,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Industries", url: "/for" }]} />
      <AnnouncementBar />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
              Tailored Acquisition Blueprints
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fog leading-[1.1]">
            Lead Generation by Industry: Proven Funnels for{" "}
            <span className="text-gradient-lime">$3K–$25K Offers</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-mist leading-relaxed font-sans max-w-3xl mx-auto">
            Generic marketing produces generic leads. Explore tailored client acquisition funnels, verified cost-per-booked-call benchmarks, and live case studies engineered for your exact business model.
          </p>

          {/* Quick Answer Block (AEO Standard) */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-elevated/80 p-6 sm:p-8 text-left backdrop-blur-md">
            <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
              DIRECT ANSWER (AEO OVERVIEW)
            </span>
            <h2 className="mt-2 text-xl font-bold text-fog">
              How does lead generation differ by industry?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-mist">
              High-ticket lead generation requires distinct messaging, qualification mechanics, and media channels tailored to each vertical. While executive coaching relies on direct-response VSL funnels and personal brand proof, B2B SaaS demands interactive demo setting, and MedSpas require localized creative angles. QualifiedLeadsX builds custom acquisition funnels optimized for the specific unit economics and compliance standards of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/30">
        <div className="container-x max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
                VERTICAL SPECIFIC ACQUISITION
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-fog">
                Select Your Industry
              </h2>
            </div>
            <p className="text-sm text-mist max-w-md">
              Review custom funnels, live ad creative breakdowns, and actual revenue dashboards from our 125+ case study archive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.href}
                  className="group relative rounded-2xl border border-line bg-ink/70 p-7 transition-all duration-300 hover:border-lime/50 hover:bg-elevated/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 border border-lime/20 text-lime">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-line bg-panel text-mist">
                        {ind.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-fog group-hover:text-lime transition-colors">
                      {ind.title}
                    </h3>
                    <p className="mt-3 text-sm text-mist leading-relaxed font-sans">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-line/60 flex items-center justify-between">
                    <span className="font-mono text-xs text-dim">
                      {ind.stats}
                    </span>
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-lime hover:text-mint group-hover:translate-x-0.5 transition-all"
                    >
                      View Blueprint
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Link to Case Studies & Services */}
      <section className="py-16 sm:py-20 border-t border-line bg-ink">
        <div className="container-x max-w-5xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
            CROSS-INDUSTRY SCALE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-fog">
            Compare Industry Benchmarks & Results
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether scaling high-ticket coaches or enterprise B2B consultants, our algorithmic Meta Ads engine and speed-to-lead appointment setters maintain industry-leading benchmarks.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/80 px-6 py-3 text-sm font-semibold text-fog hover:border-lime/50 transition-colors"
            >
              Explore Services Directory
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-mint transition-colors"
            >
              View 125+ Client Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <LinkGroups
        id="all-industries"
        eyebrow="Every industry page"
        title="Find the playbook for your industry"
        groups={[
          { title: "Lead generation by industry", links: industryPages.map((p) => ({ href: `/for/${p.slug}`, label: p.label })) },
          { title: "By service", links: [...metaAdsIndustryLinks, ...appointmentSettingIndustryLinks] },
        ]}
      />
      <ProofStack variant="compact" />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 border-t border-line bg-panel/40">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              INDUSTRY FAQ
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fog">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-line bg-ink/70"
              >
                <h3 className="text-lg font-bold text-fog mb-2">{faq.q}</h3>
                <p className="text-sm text-mist leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        compact={false}
        eyebrow="TAILORED FOR YOUR NICHE"
        title={
          <>
            See the exact acquisition roadmap for your industry on a{" "}
            <em className="font-semibold not-italic text-lime">free 30-minute call</em>.
          </>
        }
      />
      <Footer />
    </main>
  );
}

