import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Search and AI answer bots are allowed everywhere except the API routes.
// Listing them explicitly documents intent and survives any later "*" change.
const BOTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "DuckDuckBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
