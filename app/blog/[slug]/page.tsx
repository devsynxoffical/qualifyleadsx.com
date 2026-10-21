import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { site } from "@/lib/site";
import {
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Share2,
  ArrowLeft,
  HelpCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const postUrl = `${site.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | QualifiedLeadsX™`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name, url: site.url }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${site.url}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: postUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: postUrl,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/qualified-leadsx.webp`,
    },
    image: `${site.url}${post.coverImage}`,
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${site.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnnouncementBar />
      <Nav />

      {/* Article Header & Ambient Glow */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-dim mb-6">
            <Link href="/" className="hover:text-lime transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-lime transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-mist truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Meta details */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-dim mb-4">
            <span className="rounded-full bg-lime/10 px-3 py-1 text-lime font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-fog leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-mist leading-relaxed">
            {post.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-y border-line py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-panel border border-line-strong flex items-center justify-center font-mono font-bold text-lime text-xs">
                QLX
              </div>
              <div>
                <div className="text-sm font-semibold text-fog">{post.author.name}</div>
                <div className="text-xs text-dim">{post.author.role}</div>
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-xs font-mono text-dim hover:text-lime transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to guides</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <article className="py-8 bg-base/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Featured Cover Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-line-strong bg-ink mb-10 shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-2">
              <span className="rounded-full bg-ink/80 backdrop-blur-md border border-lime/30 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-lime shadow-md">
                {post.category}
              </span>
            </div>
          </div>

          {/* AEO Key Answer Box (Designed for AI extraction by ChatGPT, Perplexity, SearchGPT) */}
          <div className="rounded-2xl border-2 border-lime/40 bg-panel/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_50px_-20px_rgba(201,242,107,0.15)] mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-3">
              <Sparkles className="w-4 h-4 text-lime" />
              <span>AI Summary & Direct Answer (AEO / GEO)</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-heading text-fog mb-3">
              {post.aeoSummary.question}
            </h2>
            <p className="text-sm sm:text-base text-mist leading-relaxed">
              {post.aeoSummary.answer}
            </p>
            {post.aeoSummary.bulletPoints && (
              <ul className="mt-4 space-y-2 border-t border-line/60 pt-4">
                {post.aeoSummary.bulletPoints.map((bp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-fog">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Intro paragraph */}
          <div className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-mist mb-8">
            <p>{post.content.intro}</p>
          </div>

          {/* Mid-Article Inline Graphic / Architecture Diagram */}
          {post.content.inlineGraphic && (
            <figure className="mb-12 overflow-hidden rounded-2xl border border-line-strong bg-panel p-3 sm:p-4 shadow-xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink">
                <Image
                  src={post.content.inlineGraphic.url}
                  alt={post.content.inlineGraphic.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-dim">
                <span className="text-fog font-medium">{post.content.inlineGraphic.caption}</span>
                <span className="rounded bg-lime/10 px-2.5 py-0.5 text-[10px] text-lime font-semibold uppercase tracking-wider shrink-0 self-start sm:self-auto border border-lime/20">
                  {post.content.inlineGraphic.tag}
                </span>
              </figcaption>
            </figure>
          )}

          {/* Body Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="border-t border-line/60 pt-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog tracking-tight">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <p className="mt-2 text-sm font-mono text-lime uppercase tracking-wider">
                    {section.subheading}
                  </p>
                )}

                <div className="mt-4 space-y-4 text-base leading-relaxed text-mist">
                  {section.body.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {section.bulletList && (
                  <ul className="mt-6 space-y-3 rounded-2xl border border-line bg-panel p-6">
                    {section.bulletList.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-fog leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.keyMetricOrQuote && (
                  <div className="my-8 rounded-2xl border border-line-strong bg-elevated/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
                    <div className="font-mono text-3xl sm:text-5xl font-bold text-lime shrink-0">
                      {section.keyMetricOrQuote.metric}
                    </div>
                    <div className="text-sm sm:text-base text-fog font-medium leading-snug">
                      {section.keyMetricOrQuote.label}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 rounded-2xl border border-line bg-panel p-8">
            <h3 className="text-xl font-bold font-heading text-fog mb-3">
              Strategic Conclusion
            </h3>
            <p className="text-sm sm:text-base text-mist leading-relaxed">
              {post.content.conclusion}
            </p>
            <div className="mt-6">
              <Button href="/book-your-call" variant="primary" size="md">
                Schedule Architecture Walkthrough
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <section className="mt-16 border-t border-line pt-12">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-4">
                <HelpCircle className="w-4 h-4 text-lime" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-fog mb-6">
                Common Questions Answered
              </h2>

              <div className="space-y-4">
                {post.content.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="rounded-xl border border-line bg-panel p-6 transition-all hover:border-lime/30">
                    <h3 className="text-base sm:text-lg font-semibold text-fog mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-mist leading-relaxed">
                      {faq.a}
                    </p>
                    {faq.link && (
                      <div className="mt-4 pt-3 border-t border-line/50">
                        <Link
                          href={faq.link.href}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-lime hover:underline group/link"
                        >
                          <span>{faq.link.text}</span>
                          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-line flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-dim mr-2">Topic Tags:</span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="rounded-full border border-line bg-white/[0.02] px-3 py-1 text-xs text-mist font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Direct Implementation"
        title={
          <>
            Ready to install this system?{" "}
            <em className="font-semibold not-italic text-lime">Book your strategy session.</em>
          </>
        }
      />

      <Footer />
    </main>
  );
}
