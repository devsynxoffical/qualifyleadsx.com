import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(date: string): string {
  return new Date(`${date}T09:00:00Z`).toUTCString();
}

export function GET() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const lastBuild = posts[0] ? toRfc822(posts[0].updatedAt) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${site.url}/blog/${post.slug}`;
      const mime = post.coverImage.endsWith(".webp") ? "image/webp" : "image/jpeg";
      return `    <item>
      <title>${escapeXml(post.seoTitle ?? post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${toRfc822(post.publishedAt)}</pubDate>
      <dc:creator>${escapeXml(post.author.name)}</dc:creator>
      <enclosure url="${site.url}${post.coverImage}" type="${mime}" length="0" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>QualifiedLeadsX Growth &amp; Client Acquisition Blog</title>
    <link>${site.url}/blog</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guides on high-ticket client acquisition: Meta ads, VSL funnels, lead qualification, appointment setting and CAC benchmarks for coaches, consultants and agencies.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <image>
      <url>${site.url}/images/qualified-leadsx.webp</url>
      <title>QualifiedLeadsX</title>
      <link>${site.url}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
