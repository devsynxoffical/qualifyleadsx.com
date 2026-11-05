import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts, blogCategories, getPostsByCategory } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use today's date for freshly updated pages to notify Googlebot of new content/visuals
  const now = new Date("2026-11-05");
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
    // Core Hubs & Architecture
    {
      url: `${site.url}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/for`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/benchmarks`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${site.url}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${site.url}/tools/cac-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/tools/roas-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/tools/cost-per-booked-call-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/tools/show-rate-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/tools/ltv-cac-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/tools/lead-scoring-template`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    // Benchmarks Datasets
    {
      url: `${site.url}/benchmarks/cost-per-booked-call`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/benchmarks/show-rate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/benchmarks/cost-per-lead-by-industry`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/benchmarks/meta-ads-cpm`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/benchmarks/close-rate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Service Pages (Month 1 Core SEO Plan)
    {
      url: `${site.url}/lead-generation-agency`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/high-ticket-lead-generation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/speed-to-lead`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/vsl-funnels`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/whatsapp-lead-nurture`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/crm-automation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/outsourced-sales-closers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${site.url}/b2b-lead-generation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
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
      url: `${site.url}/for/b2b-services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/saas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/med-spas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/financial-advisors`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/business-coaches`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/executive-coaches`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/fitness-coaches`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/course-creators`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/insurance-agencies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/for/real-estate-investors`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
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
    // Comparisons
    {
      url: `${site.url}/compare/meta-ads-vs-google-ads-high-ticket`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/compare/done-for-you-vs-done-with-you-lead-generation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/compare/appointment-setter-vs-va`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${site.url}/compare/qualifiedleadsx-alternatives`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
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

  const categoryRoutes: MetadataRoute.Sitemap = blogCategories.map((c) => {
    const newest = getPostsByCategory(c.name)
      .map((p) => p.updatedAt)
      .sort()
      .pop();
    return {
      url: `${site.url}/blog/category/${c.slug}`,
      lastModified: newest ? new Date(newest) : now,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [...coreRoutes, ...categoryRoutes, ...blogRoutes];
}
