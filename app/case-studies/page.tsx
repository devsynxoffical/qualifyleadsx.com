import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { LinkGroups } from "@/components/sections/LinkGroups";
import { caseStudyLinks } from "@/lib/case-study-meta";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudiesGallery } from "@/components/sections/CaseStudiesGallery";
import { CTABanner } from "@/components/ui/CTABanner";
import { Guarantee } from "@/components/sections/Guarantee";
import { Testimonials } from "@/components/sections/Testimonials";
import { ArrowUpRight, CheckCircle2, ShieldCheck, TrendingUp, Users, Video } from "lucide-react";
import { site } from "@/lib/site";
import { caseStudiesData } from "@/lib/case-studies-data";
import { hostedVideo, publisherOrg, WEBSITE_ID } from "@/lib/schema";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "125+ Real Client Case Studies & Scaling Proof",
  description:
    "Explore 125+ verified scaling case studies, video breakdowns, Meta Ads ad account dashboards, and client revenue proof across 30+ high-ticket industries.",
  keywords: [
    "high ticket case studies",
    "lead generation proof",
    "meta ads scaling results",
    "client revenue proof",
    "agency growth case studies",
    "qualified leads testimonials",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "125+ Real Client Case Studies & Scaling Proof | QualifiedLeadsX™",
    description:
      "Real ad spend, verified cost per lead, revenue dashboards, and live video breakdowns from funnels installed across 30+ high-ticket niches.",
    url: "/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "125+ Real Client Case Studies & Scaling Proof | QualifiedLeadsX™",
    description:
      "Explore 125+ verified scaling case studies, video breakdowns, Meta Ads ad account dashboards, and client revenue proof.",
  },
};

const caseStudiesStats = [
  { value: "$150M+", label: "Client Revenue Scaled", icon: TrendingUp },
  { value: "125+", label: "Documented Case Studies", icon: ShieldCheck },
  { value: "69", label: "Live Video Breakdowns", icon: Video },
  { value: "30+", label: "Industries & Niches Proven", icon: Users },
];

const mostCitedResults = [
  {
    rank: 1,
    id: "DS5sAimEqsT",
    clientNiche: "B2B Agency & Service Scaling",
    offerType: "$3,600 Avg Contract",
    system: "Meta Ads + VSL Funnel",
    systemLink: "/meta-ads-agency",
    revenue: "$846,000",
    keyMetric: "235 Clients Closed",
    targetAudience: "Agencies",
    audienceLink: "/for/agencies",
  },
  {
    rank: 2,
    id: "DZc5twGlC0M",
    clientNiche: "MedSpa Marketing Agency",
    offerType: "High-Ticket Retainer",
    system: "Broad Meta Ads + Speed-to-Lead",
    systemLink: "/appointment-setting",
    revenue: "$639,000",
    keyMetric: "178 Clients in 60 Days",
    targetAudience: "Agencies",
    audienceLink: "/for/agencies",
  },
  {
    rank: 3,
    id: "DUsaqlQEsYB",
    clientNiche: "High-Ticket Coaching & Training",
    offerType: "$5,000 Program",
    system: "Speed-to-Lead Appointment Setting",
    systemLink: "/appointment-setting",
    revenue: "$203,941",
    keyMetric: "11 Days Cash Collected",
    targetAudience: "Coaches",
    audienceLink: "/for/coaches",
  },
  {
    rank: 4,
    id: "DQ91hXmEoIm",
    clientNiche: "Digital Growth & Media Agency",
    offerType: "$4,500/mo Retainer",
    system: "Broad Targeting Meta Ads",
    systemLink: "/meta-ads-agency",
    revenue: "$157,184",
    keyMetric: "Direct Cash Collected",
    targetAudience: "Agencies",
    audienceLink: "/for/agencies",
  },
  {
    rank: 5,
    id: "DQsBVdEkxYc",
    clientNiche: "B2B Executive Consulting",
    offerType: "$7,500 Engagement",
    system: "Qualification Filter + VSL Funnel",
    systemLink: "/appointment-setting",
    revenue: "$150,348",
    keyMetric: "Consistent Pipeline Scaled",
    targetAudience: "Consultants",
    audienceLink: "/for/consultants",
  },
  {
    rank: 6,
    id: "DSkbQyzkvbL",
    clientNiche: "Specialized Commercial Services",
    offerType: "$10,000+ Contract",
    system: "Algorithmic Meta Ads Buying",
    systemLink: "/meta-ads-agency",
    revenue: "$86,275",
    keyMetric: "Net Cash Collected",
    targetAudience: "Consultants",
    audienceLink: "/for/consultants",
  },
  {
    rank: 7,
    id: "DM3mUZsSNEJ",
    clientNiche: "Agency Backend Continuity",
    offerType: "Monthly Subscription Engine",
    system: "Automated Lead Routing",
    systemLink: "/appointment-setting",
    revenue: "$86,000",
    keyMetric: "Recurring Pipeline Run-Rate",
    targetAudience: "Agencies",
    audienceLink: "/for/agencies",
  },
  {
    rank: 8,
    id: "DMgZ9YRSuz5",
    clientNiche: "Done-With-You Strategic Consulting",
    offerType: "$6,000 Offer",
    system: "Meta Broad Targeting Media Buying",
    systemLink: "/meta-ads-agency",
    revenue: "$85,000",
    keyMetric: "Immediate Cash Inflow",
    targetAudience: "Consultants",
    audienceLink: "/for/consultants",
  },
  {
    rank: 9,
    id: "DU71t8DER0c",
    clientNiche: "High-Ticket Funnel Acceleration",
    offerType: "Front-End Offer to Backend Close",
    system: "VSL Funnel + Speed-to-Lead",
    systemLink: "/appointment-setting",
    revenue: "$79,070",
    keyMetric: "17 Days Revenue Sprint",
    targetAudience: "Coaches",
    audienceLink: "/for/coaches",
  },
  {
    rank: 10,
    id: "DT4yHdFkXhM",
    clientNiche: "B2B Technology & AI Agency",
    offerType: "$8,000 High-Ticket Deal",
    system: "Performance Meta Media Buying",
    systemLink: "/meta-ads-agency",
    revenue: "$71,934",
    keyMetric: "High-Intent B2B Deals",
    targetAudience: "Agencies",
    audienceLink: "/for/agencies",
  },
];

export default function CaseStudiesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "125+ Real Client Case Studies & Scaling Proof",
    description:
      "Explore 125+ verified scaling case studies, video breakdowns, Meta Ads ad account dashboards, and client revenue proof across 30+ high-ticket industries.",
    url: `${site.url}/case-studies`,
    "@id": `${site.url}/case-studies`,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    breadcrumb: { "@id": `${site.url}/case-studies#breadcrumb` },
    publisher: publisherOrg,
    mainEntity: {
      "@type": "ItemList",
      name: "Client case study video breakdowns",
      numberOfItems: caseStudiesData.filter((c) => c.type === "video" && c.thumbnailSrc).length,
      itemListElement: caseStudiesData
        .filter((c) => c.type === "video" && c.thumbnailSrc)
        .map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: hostedVideo({
            name: `${c.bigNumber} ${c.bigNumberLabel}: ${c.category}`,
            description: c.description.replace(/\s+/g, " ").trim().slice(0, 300),
            contentUrl: c.mediaSrc,
            thumbnailUrl: c.thumbnailSrc as string,
            pageUrl: `${site.url}/case-studies#${c.id}`,
          }),
        })),
    },
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Case Studies", url: "/case-studies" }]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Case Studies Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-mint/5 blur-[120px]" />

        <div className="container-x relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
                125+ Verified Client Case Studies
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-fog max-w-5xl mx-auto leading-[1.1]">
              The numbers don&apos;t lie.{" "}
              <span className="text-gradient-lime">Here is the proof.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-mist leading-relaxed font-sans">
              Real ad spend, verified cost per lead, revenue dashboards, and live video breakdowns
              from funnels we&apos;ve installed across 30+ high-ticket niches. Every single case study
              uses the exact QualifiedLeadsX™ client acquisition engine.
            </p>
          </Reveal>

          {/* Stats Bar */}
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {caseStudiesStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl border border-line bg-panel/90 backdrop-blur-md transition-all hover:border-lime/40"
                  >
                    <Icon className="h-5 w-5 text-lime mb-2" />
                    <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-lime tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-mist/70 mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Most Cited Results & 150-Word Authority Intro (Per Master Plan) */}
      <section className="border-t border-line bg-panel/30 py-16 sm:py-20">
        <div className="container-x max-w-6xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-lime font-bold">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified Performance Ledger
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-fog">
              Most Cited High-Ticket Client Results & Scaling Benchmarks
            </h2>
          </Reveal>

          {/* 150-Word Authority Intro with 3 Headline Numbers & 5 Internal Links */}
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border border-line bg-ink/70 p-6 sm:p-8 backdrop-blur-md">
              <p className="text-base sm:text-[17px] leading-relaxed text-mist font-sans">
                Every high-ticket business eventually hits a plateau when relying solely on organic referrals or disjointed cold outreach. At QualifiedLeadsX™, our proven client acquisition engine bridges the gap between scalable traffic and qualified pipeline. Across more than <strong className="text-fog">125+ documented case studies</strong> and 30+ B2B industries, our proprietary media buying and speed-to-lead infrastructure has generated over <strong className="text-lime">$150M+ in collective client revenue</strong>. We engineer direct-response systems tailored specifically for high-ticket service offers ranging from <strong className="text-fog">$3,000 to $25,000+</strong>. By coupling algorithmic creative-led campaigns through our dedicated <Link href="/meta-ads-agency" className="text-lime underline hover:text-mint font-semibold">Meta Ads Agency</Link> with rapid sub-5-minute <Link href="/appointment-setting" className="text-lime underline hover:text-mint font-semibold">Appointment Setting</Link> workflows, we eliminate unqualified tire-kickers before they ever reach your sales calendar. Whether installing conversion engines for <Link href="/for/coaches" className="text-lime underline hover:text-mint font-semibold">high-ticket coaches</Link>, scaling specialized <Link href="/for/consultants" className="text-lime underline hover:text-mint font-semibold">B2B consultants</Link>, or building predictable outbound pipelines for growing <Link href="/for/agencies" className="text-lime underline hover:text-mint font-semibold">digital agencies</Link>, the performance benchmarks below document verified ad account spends, recorded cash collections, and live client dashboards from our most cited client engagements.
              </p>

              {/* 3 Headline Numbers Summary */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line/60 pt-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-lime">$150M+</span>
                  <span className="text-xs uppercase tracking-wider text-mist">Verified Client Revenue</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-lime">125+</span>
                  <span className="text-xs uppercase tracking-wider text-mist">Documented Case Studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-lime">$3K–$25K</span>
                  <span className="text-xs uppercase tracking-wider text-mist">High-Ticket Offer Range</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Top 10 Most Cited Results Table */}
          <Reveal delay={0.2}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-ink/80 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-line bg-panel/90 text-xs font-mono uppercase tracking-wider text-fog">
                    <tr>
                      <th className="px-4 py-4 sm:px-6">#</th>
                      <th className="px-4 py-4 sm:px-6">Client & Industry</th>
                      <th className="px-4 py-4 sm:px-6">Core Offer</th>
                      <th className="px-4 py-4 sm:px-6">Engine Deployed</th>
                      <th className="px-4 py-4 sm:px-6">Verified Revenue</th>
                      <th className="px-4 py-4 sm:px-6">Key Metric</th>
                      <th className="px-4 py-4 sm:px-6">Target Niche</th>
                      <th className="px-4 py-4 sm:px-6">Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/60 font-sans">
                    {mostCitedResults.map((item) => (
                      <tr
                        key={item.id}
                        className="transition-colors hover:bg-elevated/40"
                      >
                        <td className="px-4 py-4 sm:px-6 font-mono font-bold text-mist text-xs">
                          0{item.rank}
                        </td>
                        <td className="px-4 py-4 sm:px-6 font-semibold text-fog">
                          {item.clientNiche}
                        </td>
                        <td className="px-4 py-4 sm:px-6 font-mono text-xs text-mist">
                          {item.offerType}
                        </td>
                        <td className="px-4 py-4 sm:px-6">
                          <Link
                            href={item.systemLink}
                            className="inline-flex items-center gap-1 font-medium text-xs text-lime hover:underline"
                          >
                            {item.system}
                            <ArrowUpRight className="h-3 w-3" />
                          </Link>
                        </td>
                        <td className="px-4 py-4 sm:px-6 font-mono font-bold text-lime text-base">
                          {item.revenue}
                        </td>
                        <td className="px-4 py-4 sm:px-6 text-xs text-mist">
                          {item.keyMetric}
                        </td>
                        <td className="px-4 py-4 sm:px-6">
                          <Link
                            href={item.audienceLink}
                            className="inline-block rounded-full border border-line bg-panel/60 px-2.5 py-1 text-xs font-medium text-fog hover:border-lime/50"
                          >
                            {item.targetAudience}
                          </Link>
                        </td>
                        <td className="px-4 py-4 sm:px-6">
                          <a
                            href={`#${item.id}`}
                            className="inline-flex items-center gap-1 text-xs font-mono text-fog underline hover:text-lime"
                          >
                            View Case
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-line/60 bg-panel/40 px-6 py-3 text-xs text-mist flex flex-col sm:flex-row justify-between items-center gap-2">
                <span>Data Source: Verified Stripe, Meta Ads Manager, and Wise collection records.</span>
                <span className="font-mono text-lime font-medium">All 10 cases documented in gallery below</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Gallery Section */}
      <Section className="bg-ink pt-4">
        <CaseStudiesGallery />
      </Section>

      {/* Bottom CTA Banner */}
      <LinkGroups
        id="case-study-breakdowns"
        eyebrow="Full breakdowns"
        title="Read the full case study breakdowns"
        groups={[
          { title: "Largest results", links: caseStudyLinks.slice(0, 5) },
          { title: "More breakdowns", links: caseStudyLinks.slice(5) },
        ]}
      />
      <FurtherReading
        title="The playbooks behind these results"
        slugs={["b2b-roas-benchmarks-qualified-appointment-generation", "b2b-client-acquisition-cost-cac-benchmarks-2026", "high-ticket-sales-how-to-get-high-ticket-clients", "the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition"]}
      />
      <CTABanner
        compact={false}
        eyebrow="Scale Your Acquisition"
        title={
          <>
            Ready to become our next{" "}
            <em className="font-semibold not-italic text-lime">7-figure case study?</em>
          </>
        }
      />

      {/* Guarantee Section */}
      <Guarantee />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </main>
  );
}
