import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogPosts } from "@/lib/blog-data";
import { ArrowUpRight, ArrowRight, Clock, Calendar, Sparkles, BookOpen } from "lucide-react";
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
    "b2b cac benchmarks",
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
    images: [
      {
        url: "/images2/showreel/shot_06_vsl_player.webp",
        width: 1200,
        height: 630,
        alt: "QualifiedLeadsX™ Insights & Blueprints",
      },
    ],
  },
};

export default function BlogHubPage() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

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
      image: `${site.url}${post.coverImage}`,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Organization",
        name: post.author.name,
      },
    })),
  };

  const categories = [
    "All Articles",
    "Funnel Strategy",
    "Paid Advertising",
    "Lead Qualification",
    "Scaling & Economics",
  ];

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <Nav />

      {/* Hero Header matching RBO header structure */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-mint/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase tracking-[0.25em] text-lime mb-4">
            <Sparkles className="w-4 h-4 text-lime" />
            <span>Research & Blueprints</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-fog max-w-4xl leading-[1.1]">
            Our <span className="text-lime">Blogs</span> & Scaling Guides
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-mist max-w-2xl leading-relaxed">
            Unfiltered frameworks, proven conversion economics, and operational playbooks derived from scaling over $150M+ in high-ticket client revenue.
          </p>

          {/* Quick Category Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat, idx) => (
              <span
                key={cat}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-colors ${
                  idx === 0
                    ? "bg-lime text-ink font-bold shadow-sm"
                    : "bg-panel border border-line text-mist hover:text-fog hover:border-lime/40"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* AEO Fast Answer / Overview Card */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-panel/80 p-6 backdrop-blur-md max-w-3xl">
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

      {/* Featured Pillar Article */}
      <section className="py-12 bg-base/50 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-semibold">
              FEATURED PILLAR BLUEPRINT
            </h2>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-line-strong bg-panel transition-all duration-300 hover:border-lime/60 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_40px_-10px_rgba(201,242,107,0.2)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Featured Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-5 overflow-hidden bg-ink min-h-[260px] sm:min-h-[340px]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-panel opacity-80" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-ink/80 backdrop-blur-md border border-lime/30 text-lime shadow-md">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-dim mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-lime" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-dim" />
                      {featuredPost.publishedAt}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-fog group-hover:text-lime transition-colors duration-300 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-mist leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-line/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center font-mono font-bold text-lime text-xs">
                      QLX
                    </div>
                    <span className="text-xs font-mono text-fog font-medium">
                      {featuredPost.author.name}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-lime group-hover:gap-3 transition-all duration-300">
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Articles Grid (RBO Accounting Card Architecture) */}
      <section className="py-16 sm:py-20 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header styled after RBO "LET'S FIND OUT OUR LATEST ARTICLES" */}
          <div className="mb-12 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
              KNOWLEDGE VAULT
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-heading text-fog tracking-tight">
              LET&apos;S FIND OUT OUR LATEST ARTICLES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-mist max-w-2xl">
              Deep dives into customer acquisition economics, automated qualification architectures, and performance media buying.
            </p>
          </div>

          {/* 3-Column Responsive Grid matching elementor-grid-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col h-full rounded-2xl bg-panel border border-line-strong overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-lime/60 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.9),0_0_35px_-10px_rgba(201,242,107,0.2)]"
              >
                {/* 1. Thumbnail Container (Fixed 16:10 aspect ratio with hover zoom effect) */}
                <Link
                  href={`/blog/${post.slug}`}
                  tabIndex={-1}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-ink block"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle smooth gradient fade at base of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />

                  {/* Overlaid Category Badge (.elementor-post__badge) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-ink/85 backdrop-blur-md border border-lime/30 text-lime shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Overlaid Read Time Badge */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-fog/90 bg-ink/75 backdrop-blur-md border border-white/10">
                      <Clock className="w-3 h-3 text-lime" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>

                {/* 2. Content Body (.elementor-post__text) */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Post Title (.elementor-post__title) */}
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-fog group-hover:text-lime transition-colors duration-200 leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Post Excerpt (.elementor-post__excerpt) */}
                    <p className="mt-3 text-sm text-mist/90 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  <div>
                    {/* CTA Read More Link (.elementor-post__read-more) */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime group-hover:gap-2.5 transition-all duration-200"
                    >
                      <span>Read More</span>
                      <span className="text-base leading-none">»</span>
                    </Link>

                    {/* 3. Meta Data Footer (.elementor-post__meta-data) */}
                    <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-dim">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-dim" />
                        {post.publishedAt}
                      </span>
                      <span className="flex items-center gap-1.5 text-fog font-medium">
                        <span className="h-5 w-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-[10px] text-lime font-bold">
                          Q
                        </span>
                        <span>QualifiedLeadsX™</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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
