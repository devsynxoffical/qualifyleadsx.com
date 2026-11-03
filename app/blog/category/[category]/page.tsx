import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogCategories, getCategoryBySlug, getPostsByCategory } from "@/lib/blog-data";
import { site } from "@/lib/site";
import { breadcrumbList, imageObject, WEBSITE_ID, ORG_ID } from "@/lib/schema";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category Not Found" };
  const url = `/blog/category/${cat.slug}`;
  return {
    title: { absolute: `${cat.title} | QualifiedLeadsX™` },
    description: cat.description,
    alternates: { canonical: url },
    openGraph: {
      title: cat.title,
      description: cat.description,
      url,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: cat.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: cat.title,
      description: cat.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(cat.name);
  const pageUrl = `${site.url}/blog/category/${cat.slug}`;
  const otherCategories = blogCategories.filter((c) => c.slug !== cat.slug);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": pageUrl,
    url: pageUrl,
    name: cat.title,
    description: cat.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.url}/blog#blog` },
    publisher: { "@id": ORG_ID },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/blog/${p.slug}`,
        name: p.seoTitle ?? p.title,
      })),
    },
  };

  const breadcrumbSchema = breadcrumbList(`${pageUrl}#breadcrumb`, [
    { name: "Blog", url: "/blog" },
    { name: cat.name, url: `/blog/category/${cat.slug}` },
  ]);

  // Keep WEBSITE_ID referenced for graph completeness
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: cat.title,
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: imageObject(posts[0]?.coverImage ?? "/opengraph-image"),
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <AnnouncementBar />
      <Nav />

      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-12 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,242,107,0.12),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs font-mono text-dim mb-6"
          >
            <Link href="/" className="hover:text-lime transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-lime transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-mist">{cat.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 border border-lime/30 mb-6">
            <BookOpen className="w-4 h-4 text-lime" />
            <span>{cat.name}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-fog leading-[1.1] text-balance">
            {cat.title}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-mist max-w-2xl mx-auto leading-relaxed text-balance">
            {cat.description}
          </p>
          <p className="mt-4 text-xs font-mono text-dim">
            {posts.length} {posts.length === 1 ? "guide" : "guides"} in this category
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-lime/40"
              >
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden bg-ink">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-dim">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-lime" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-lime" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold font-heading text-white leading-snug group-hover:text-lime transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.seoTitle ?? post.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-mist leading-relaxed line-clamp-3">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime"
                  >
                    Read guide
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <p className="text-xs font-mono uppercase tracking-wider text-dim mb-4">Other categories</p>
            <ul className="flex flex-wrap gap-2.5">
              {otherCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/blog/category/${c.slug}`}
                    className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-xs font-mono text-mist transition-colors hover:border-lime/40 hover:text-lime"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-xs font-mono text-mist transition-colors hover:border-lime/40 hover:text-lime"
                >
                  All guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Done-For-You Acquisition Architecture"
        title={
          <>
            Want this exact client acquisition engine{" "}
            <em className="font-semibold not-italic text-lime">installed in your business?</em>
          </>
        }
      />
      <Footer />
    </main>
  );
}
