import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogPosts } from "@/lib/blog-data";
import { ArrowUpRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

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
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Client Acquisition, VSL Funnels & Meta Ads Insights | QualifiedLeadsX™",
    description:
      "Actionable scaling blueprints, funnel architecture, and media buying guides for high-ticket service providers.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogHubPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "QualifiedLeadsX™ Growth & Client Acquisition Blog",
    url: `${site.url}/blog`,
    description:
      "Authoritative guides, VSL funnel breakdowns, and performance marketing strategies for high-ticket B2B businesses.",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/qualified-leadsx.webp`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Organization",
        name: post.author.name,
      },
    })),
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-mint/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-lime mb-4">
            <Sparkles className="w-4 h-4 text-lime" />
            <span>Research & Blueprints</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-fog max-w-3xl leading-[1.1]">
            Scaling Systems, VSL Funnels & High-Ticket Media Buying
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-mist max-w-2xl leading-relaxed">
            Unfiltered frameworks, proven conversion economics, and operational playbooks derived from scaling over $150M+ in client revenue.
          </p>

          {/* AEO Fast Answer / Overview Card */}
          <div className="mt-10 rounded-2xl border border-lime/30 bg-panel/80 p-6 backdrop-blur-md max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-2">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              <span>AEO Executive Summary</span>
            </div>
            <p className="text-sm sm:text-base text-fog leading-relaxed">
              <strong>QualifiedLeadsX™ Insights</strong> provides actionable educational blueprints for coaches, consultants, and agencies seeking predictable $100K+/month customer acquisition. Core focus areas include modern 12-minute VSL funnels, broad Meta ad creative targeting, and automated conditional lead qualification.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-12 bg-base/50 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-dim">
              Featured Pillar Guide
            </h2>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-line-strong bg-panel p-8 sm:p-12 transition-all duration-300 hover:border-lime/60 hover:shadow-[0_0_60px_-15px_rgba(201,242,107,0.15)]"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-dim mb-4">
              <span className="rounded-full bg-lime/10 px-3 py-1 text-lime font-medium">
                {featuredPost.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {featuredPost.publishedAt}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold font-heading text-fog group-hover:text-lime transition-colors duration-300 leading-tight">
              {featuredPost.title}
            </h3>

            <p className="mt-4 text-base sm:text-lg text-mist leading-relaxed max-w-3xl">
              {featuredPost.description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-lime">
              <span>Read Full Blueprint</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog">
              Latest Growth Frameworks
            </h2>
            <p className="mt-2 text-sm text-mist">
              Deep dives into customer acquisition, media buying, and sales pipeline optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-panel p-6 sm:p-8 transition-all duration-300 hover:border-lime/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.8)]"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-dim mb-3">
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-lime-soft font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-fog group-hover:text-lime transition-colors duration-200 leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm text-mist leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-dim">
                  <span>{post.publishedAt}</span>
                  <span className="flex items-center gap-1 text-lime group-hover:translate-x-1 transition-transform duration-200">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Done-For-You Architecture"
        title={
          <>
            Want this exact acquisition machine{" "}
            <em className="font-semibold not-italic text-lime">installed in your business?</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
