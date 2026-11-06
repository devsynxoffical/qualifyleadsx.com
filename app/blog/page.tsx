import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { site } from "@/lib/site";
import { founder, imageObject, publisherOrg, webPageNode } from "@/lib/schema";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Client Acquisition, VSL Funnels & Meta Ads Insights",
  description:
    "In-depth blueprints, performance media buying playbooks, and lead qualification frameworks for high-ticket coaches, consultants, and B2B agencies.",
  keywords: [
    "client acquisition blog",
    "vsl funnel guide",
    "meta ads for b2b",
    "high ticket lead qualification",
    "agency scaling blueprints",
    "b2b cac benchmarks",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Client Acquisition, VSL Funnels & Meta Ads Insights | QualifiedLeadsX",
    description:
      "Actionable scaling blueprints, funnel architecture, and media buying guides for high-ticket service providers.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/images/blog/vsl-funnel-blueprint.jpg",
        width: 1200,
        height: 630,
        alt: "QualifiedLeadsX™ Insights & Blueprints",
      },
    ],
  },
};

export default function BlogHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/blog#blog`,
    inLanguage: "en-US",
    name: "QualifiedLeadsX™ Growth & Client Acquisition Blog",
    url: `${site.url}/blog`,
    description:
      "Authoritative guides, VSL funnel breakdowns, and performance marketing strategies for high-ticket B2B businesses.",
    publisher: publisherOrg,
    hasPart: blogCategories.map((c) => ({
      "@type": "CollectionPage",
      "@id": `${site.url}/blog/category/${c.slug}`,
      name: c.title,
      description: c.description,
      url: `${site.url}/blog/category/${c.slug}`,
    })),
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${site.url}/blog/${post.slug}#article`,
      headline: post.seoTitle ?? post.title,
      description: post.description,
      image: imageObject(post.coverImage),
      url: `${site.url}/blog/${post.slug}`,
      mainEntityOfPage: { "@id": `${site.url}/blog/${post.slug}` },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      articleSection: post.category,
      keywords: post.tags.join(", "),
      author: { "@id": founder["@id"] },
      publisher: publisherOrg,
    })),
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageNode({
              path: "/blog",
              name: "Client Acquisition, VSL Funnels & Meta Ads Insights",
              description: jsonLd.description,
              speakable: true,
              primaryImage: "/images/blog/vsl-funnel-blueprint.jpg",
            })
          ),
        }}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Blog", url: "/blog" }]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Interactive Category Filter & Articles Explorer */}
      <BlogExplorer
        initialPosts={blogPosts}
        categoryLinks={blogCategories.map((c) => ({ name: c.name, slug: c.slug }))}
      />

      {/* Internal Linking Ecosystem Grid */}
      <section aria-labelledby="blog-hub-ecosystem" className="border-t border-line bg-panel/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-lime font-bold">
              THE QUALIFIEDLEADSX ECOSYSTEM
            </span>
            <h2 id="blog-hub-ecosystem" className="mt-2 text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
              Calculators, Verified Benchmarks & Scaling Solutions
            </h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              Explore our complete suite of interactive unit economics tools, verified industry datasets, and client acquisition infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Calculators */}
            <div className="rounded-2xl border border-line bg-panel p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime">Calculators</span>
                  <Link href="/tools" className="text-xs font-mono text-mist hover:text-lime">View All (7) →</Link>
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-3">Unit Economics Tools</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <Link href="/tools/cac-calculator" className="text-mist hover:text-lime transition-colors block">
                      → CAC & Payback Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/roas-calculator" className="text-mist hover:text-lime transition-colors block">
                      → ROAS & Break-Even Tool
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/cost-per-booked-call-calculator" className="text-mist hover:text-lime transition-colors block">
                      → Cost Per Booked Call
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/show-rate-calculator" className="text-mist hover:text-lime transition-colors block">
                      → Show Rate & Lost Revenue
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/ltv-cac-calculator" className="text-mist hover:text-lime transition-colors block">
                      → LTV to CAC Ratio Model
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benchmarks */}
            <div className="rounded-2xl border border-line bg-panel p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime">Benchmarks</span>
                  <Link href="/benchmarks" className="text-xs font-mono text-mist hover:text-lime">View All (6) →</Link>
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-3">2026 Empirical Data</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <Link href="/benchmarks/cost-per-lead-by-industry" className="text-mist hover:text-lime transition-colors block">
                      → Cost Per Lead by Industry
                    </Link>
                  </li>
                  <li>
                    <Link href="/benchmarks/show-rate" className="text-mist hover:text-lime transition-colors block">
                      → Appointment Show Rate Data
                    </Link>
                  </li>
                  <li>
                    <Link href="/benchmarks/meta-ads-cpm" className="text-mist hover:text-lime transition-colors block">
                      → Meta Ads CPM Trends
                    </Link>
                  </li>
                  <li>
                    <Link href="/benchmarks/cost-per-booked-call" className="text-mist hover:text-lime transition-colors block">
                      → Cost Per Booked Call Data
                    </Link>
                  </li>
                  <li>
                    <Link href="/benchmarks/close-rate" className="text-mist hover:text-lime transition-colors block">
                      → High-Ticket Close Rates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Services */}
            <div className="rounded-2xl border border-line bg-panel p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime">Core Systems</span>
                  <Link href="/services" className="text-xs font-mono text-mist hover:text-lime">All Services →</Link>
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-3">Done-For-You Delivery</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <Link href="/meta-ads-agency" className="text-mist hover:text-lime transition-colors block">
                      → Meta Ads Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/appointment-setting" className="text-mist hover:text-lime transition-colors block">
                      → Done-For-You Appointment Setting
                    </Link>
                  </li>
                  <li>
                    <Link href="/speed-to-lead" className="text-mist hover:text-lime transition-colors block">
                      → Sub-5-Min Speed to Lead
                    </Link>
                  </li>
                  <li>
                    <Link href="/vsl-funnels" className="text-mist hover:text-lime transition-colors block">
                      → 12-Minute VSL Funnels
                    </Link>
                  </li>
                  <li>
                    <Link href="/whatsapp-lead-nurture" className="text-mist hover:text-lime transition-colors block">
                      → WhatsApp Nurture Systems
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Industry Verticals */}
            <div className="rounded-2xl border border-line bg-panel p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime">Industries</span>
                  <Link href="/for" className="text-xs font-mono text-mist hover:text-lime">View All (16) →</Link>
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-3">Specialized Verticals</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <Link href="/for/coaches" className="text-mist hover:text-lime transition-colors block">
                      → For High-Ticket Coaches
                    </Link>
                  </li>
                  <li>
                    <Link href="/for/consultants" className="text-mist hover:text-lime transition-colors block">
                      → For B2B Consultants
                    </Link>
                  </li>
                  <li>
                    <Link href="/for/agencies" className="text-mist hover:text-lime transition-colors block">
                      → For Growth Agencies
                    </Link>
                  </li>
                  <li>
                    <Link href="/for/saas" className="text-mist hover:text-lime transition-colors block">
                      → For SaaS Founders
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-mist hover:text-lime transition-colors block">
                      → Verified Client Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Done-For-You Acquisition Architecture"
        title={
          <>
            Want this exact high-ticket client acquisition engine{" "}
            <em className="font-semibold not-italic text-lime">installed in your business?</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
