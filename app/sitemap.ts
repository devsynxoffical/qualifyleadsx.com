import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use today's date for freshly updated pages to notify Googlebot of new content/visuals
  const now = new Date("2026-10-30");
  const legalUpdated = new Date("2026-01-15");

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${site.url}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/book-your-call`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Service Pages (Month 1 Core SEO Plan)
    {
      url: `${site.url}/meta-ads-agency`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/appointment-setting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Industry Landing Pages (Phase 2)
    {
      url: `${site.url}/for/coaches`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/consultants`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/agencies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog Hub (Phase 3)
    {
      url: `${site.url}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.88,
    },
    // Mastermind pages
    {
      url: `${site.url}/mastermind`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${site.url}/mastermind/lto-funnel-scale`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/mastermind/hidden-facebook-interest`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/mastermind/7-days-paid-trial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Entity & Company
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Legal & compliance
    {
      url: `${site.url}/privacy`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/disclaimer`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Blog Posts with their specific modification dates and high priority
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
    images: [`${site.url}${post.coverImage}`],
  }));

  return [...coreRoutes, ...blogRoutes];
}
