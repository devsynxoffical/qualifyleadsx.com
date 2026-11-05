import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { caseStudiesData, type CaseStudyItem } from "@/lib/case-studies-data";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ShieldCheck, ExternalLink } from "lucide-react";

const topCaseStudySlugs: Record<string, string> = {
  "b2b-agency-scaling-846k": "DS5sAimEqsT",
  "med-spa-marketing-agency-639k": "DZc5twGlC0M",
  "high-ticket-coaching-203k": "DUsaqlQEsYB",
  "digital-media-agency-157k": "DQ91hXmEoIm",
  "executive-consulting-150k": "DQsBVdEkxYc",
  "commercial-services-86k": "DSkbQyzkvbL",
  "agency-backend-continuity-86k": "DM3mUZsSNEJ",
  "strategic-consulting-85k": "DMgZ9YRSuz5",
  "high-ticket-funnel-79k": "DU71t8DER0c",
  "b2b-technology-agency-71k": "DT4yHdFkXhM",
};

// Reverse lookup map
const idToSlugMap: Record<string, string> = Object.entries(topCaseStudySlugs).reduce(
  (acc, [slug, id]) => {
    acc[id] = slug;
    return acc;
  },
  {} as Record<string, string>
);

function getCaseStudy(slugOrId: string): CaseStudyItem | undefined {
  const targetId = topCaseStudySlugs[slugOrId] || slugOrId;
  return caseStudiesData.find((item) => item.id === targetId);
}

export async function generateStaticParams() {
  const customSlugs = Object.keys(topCaseStudySlugs).map((slug) => ({ slug }));
  const idSlugs = caseStudiesData.slice(0, 30).map((item) => ({ slug: item.id }));
  return [...customSlugs, ...idSlugs];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) {
    return {
      title: "Case Study Not Found | QualifiedLeadsX",
    };
  }

  const cleanTitle = `${item.category}: ${item.bigNumber} Revenue Scaling Case Study`;
  const cleanDesc = `How this ${item.category} business generated ${item.bigNumber} in revenue with Meta Ads and appointment setting. Real data, systems, and metrics.`;

  return {
    title: cleanTitle.length > 58 ? cleanTitle.slice(0, 55) + "..." : cleanTitle,
    description: cleanDesc.length > 155 ? cleanDesc.slice(0, 150) + "..." : cleanDesc,
    alternates: {
      canonical: `${site.url}/case-studies/${slug}`,
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDesc,
      url: `${site.url}/case-studies/${slug}`,
      siteName: site.name,
      type: "article",
    },
  };
}

export default async function IndividualCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) {
    notFound();
  }

  const primarySlug = idToSlugMap[item.id] || item.id;

  const faqs = [
    {
      q: `What was the primary acquisition bottleneck before scaling to ${item.bigNumber}?`,
      a: "The client suffered from erratic deal flow, reliance on manual referrals, and poor speed-to-lead follow-up. Inbound prospects were going cold before sales discovery calls could be scheduled.",
    },
    {
      q: "What ad channel and funnel model drove these results?",
      a: "We deployed targeted Meta (Facebook & Instagram) direct-response campaigns paired with a 12-minute VSL funnel, automated qualification filters, and dedicated appointment setters.",
    },
    {
      q: "How fast did this client achieve positive cash return on ad spend?",
      a: "The client generated cash-collected sales within the first 14 days of ad launch, maintaining positive ROAS throughout quarterly scaling.",
    },
    {
      q: "Can this exact client acquisition system be replicated for our business?",
      a: "Yes. If your high-ticket offer is priced between $3,000 and $25,000, our full-funnel media buying and setter infrastructure can be customized and deployed in under 10 days.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/case-studies/${primarySlug}#article`,
        headline: `${item.category} Case Study: Scaled to ${item.bigNumber}`,
        description: item.description.slice(0, 180),
        author: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/case-studies/${primarySlug}#faq`,
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
    <>
      <AnnouncementBar />
      <Nav />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: `${item.category} - ${item.bigNumber}`, url: `/case-studies/${primarySlug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-ink min-h-screen text-fog">
        <section className="relative pt-20 pb-16 border-b border-line overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lime text-xs font-mono tracking-widest uppercase">
                {item.category} Case Study
              </span>
              <span className="text-line text-xs font-mono">•</span>
              <span className="text-fog text-xs font-mono">ID: {item.id}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper mt-2 mb-6">
              {item.category}: {item.bigNumber} Revenue Scaling Case Study
            </h1>

            {/* AEO Direct Answer */}
            <div className="p-5 rounded-xl border border-lime/30 bg-lime/[0.04] mb-8">
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                AEO Direct Answer
              </span>
              <p className="text-base sm:text-lg text-paper leading-relaxed">
                In this verified case study, QualifiedLeadsX scaled a <strong>{item.category} business to {item.bigNumber}</strong> in tracked revenue. By implementing direct-response Meta Ads, a friction-based VSL qualification funnel, and sub-5-minute appointment setters, the business maintained consistent cash ROAS with over 80% appointment attendance.
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">{item.bigNumber}</div>
                <div className="text-xs text-fog mt-1">{item.bigNumberLabel || "Verified Revenue"}</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">
                  {item.metrics?.[0]?.value || "178+"}
                </div>
                <div className="text-xs text-fog mt-1">Closed Clients / Deals</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-lime font-mono">82%</div>
                <div className="text-xs text-fog mt-1">Calendar Show-Up Rate</div>
              </div>
              <div className="border border-line rounded-lg p-4 bg-paper/5">
                <div className="text-2xl font-bold text-paper font-mono">&lt;5 Mins</div>
                <div className="text-xs text-fog mt-1">Speed-to-Lead Triage</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/book-your-call"
                className="bg-lime text-ink font-semibold px-6 py-3 rounded-lg hover:bg-lime/90 transition"
              >
                Replicate These Results
              </Link>
              <Link
                href="/case-studies"
                className="border border-line hover:border-paper/40 px-6 py-3 rounded-lg text-paper transition"
              >
                ← Back to All 125+ Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Narrative & Media */}
        <section className="py-16 border-b border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-paper mb-4">Detailed Case Breakdown</h2>
                  <div className="text-fog text-sm sm:text-base leading-relaxed whitespace-pre-line bg-paper/[0.02] border border-line rounded-xl p-6">
                    {item.description}
                  </div>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-full border border-line bg-paper/5 text-fog"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar Proof Card */}
              <div>
                <div className="border border-line rounded-xl p-6 bg-paper/[0.02] sticky top-24">
                  <h3 className="text-paper font-semibold mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-lime" />
                    Verified Proof Asset
                  </h3>
                  <p className="text-xs text-fog mb-4">
                    Media asset captured directly from client live dashboard and ad accounts.
                  </p>

                  <div className="border border-line rounded-lg overflow-hidden bg-black/40 mb-4 p-4 text-center">
                    <span className="text-xs font-mono text-lime block mb-1">
                      {item.type === "video" ? "VIDEO PROOF" : "DASHBOARD SCREENSHOT"}
                    </span>
                    <p className="text-sm text-paper font-medium mb-3">{item.subtitle}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-lime hover:underline"
                      >
                        View Original Source <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-3 pt-3 border-t border-line text-xs">
                    <div className="flex justify-between">
                      <span className="text-fog">Client Category:</span>
                      <span className="text-paper font-semibold">{item.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-fog">Revenue Impact:</span>
                      <span className="text-lime font-mono font-bold">{item.bigNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-fog">Execution Model:</span>
                      <span className="text-paper">Done-For-You (DFY)</span>
                    </div>
                  </div>

                  <Link
                    href="/book-your-call"
                    className="w-full mt-6 block text-center bg-lime text-ink font-semibold py-2.5 rounded-lg hover:bg-lime/90 transition text-sm"
                  >
                    Get A Custom Growth Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-paper mb-8 text-center">
              Frequently Asked Questions About This Case
            </h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="border border-line rounded-xl p-6 bg-paper/[0.02]">
                  <h3 className="text-lg font-semibold text-paper mb-2">{f.q}</h3>
                  <p className="text-fog text-sm sm:text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

