import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogPosts } from "@/lib/blog-data";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
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
      datePublished: post.publishedAt === "21-10-2026" ? "2026-10-21" : post.publishedAt,
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

      {/* Interactive Category Filter & Articles Explorer */}
      <BlogExplorer initialPosts={blogPosts} />

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
