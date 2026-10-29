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
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Bookmark,
  TrendingUp,
  Zap,
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
    title: post.title,
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
      publishedTime: post.publishedAt === "21-10-2026" ? "2026-10-21" : post.publishedAt,
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
    datePublished: post.publishedAt === "21-10-2026" ? "2026-10-21" : post.publishedAt,
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

      {/* Hero Header Area */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-mint/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-dim mb-6">
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
            <span className="rounded-full bg-lime/10 border border-lime/30 px-3 py-1 text-lime font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-mist">
              <Calendar className="w-3.5 h-3.5 text-lime" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-mist">
              <Clock className="w-3.5 h-3.5 text-lime" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.12] tracking-tight max-w-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-mist leading-relaxed max-w-4xl font-normal">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between border-y border-line py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-panel border border-lime/30 flex items-center justify-center font-mono font-bold text-lime text-xs">
                QLX
              </div>
              <div>
                <div className="text-sm font-semibold text-fog">{post.author.name}</div>
                <div className="text-xs text-dim font-mono">{post.author.role}</div>
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-mist hover:text-lime transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all guides</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Full-Detail Editorial Area with Sidebar */}
      <article className="py-12 bg-base/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Primary Column: Full Article Content */}
            <div className="lg:col-span-8">
              {/* Featured 16:9 Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-line-strong bg-ink mb-10 shadow-2xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-2">
                  <span className="rounded-full bg-ink/85 backdrop-blur-md border border-lime/30 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-lime shadow-md">
                    {post.category} Blueprint
                  </span>
                </div>
              </div>

              {/* AEO / GEO Direct Answer Key Highlights Box */}
              <div className="rounded-2xl border-2 border-lime/40 bg-panel/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_50px_-20px_rgba(201,242,107,0.15)] mb-12">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-3">
                  <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                  <span>AI Fast Answer & Direct Summary (AEO / GEO)</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-fog mb-3">
                  {post.aeoSummary.question}
                </h2>
                <p className="text-base text-mist leading-relaxed font-normal">
                  {post.aeoSummary.answer}
                </p>
                {post.aeoSummary.bulletPoints && (
                  <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-4">
                    {post.aeoSummary.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-mist">
                        <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Lead Intro Paragraph */}
              <div className="max-w-none text-lg sm:text-xl leading-relaxed font-normal mb-10 border-l-2 border-lime/50 pl-5 text-fog">
                <p>{post.content.intro}</p>
              </div>

              {/* Mid-Article Architecture Diagram Graphic */}
              {post.content.inlineGraphic && (
                <figure className="mb-14 overflow-hidden rounded-2xl border border-line-strong bg-panel p-3 sm:p-5 shadow-2xl">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink">
                    <Image
                      src={post.content.inlineGraphic.url}
                      alt={post.content.inlineGraphic.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3.5 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-dim">
                    <span className="text-fog font-medium">{post.content.inlineGraphic.caption}</span>
                    <span className="rounded bg-lime/10 px-2.5 py-0.5 text-[10px] text-lime font-semibold uppercase tracking-wider shrink-0 self-start sm:self-auto border border-lime/20">
                      {post.content.inlineGraphic.tag}
                    </span>
                  </figcaption>
                </figure>
              )}

              {/* Body Sections */}
              <div className="space-y-14">
                {post.content.sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    className="border-t border-line/60 pt-10 scroll-mt-28"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <p className="mt-2 text-sm font-mono text-lime uppercase tracking-wider font-semibold">
                        {section.subheading}
                      </p>
                    )}

                    <div className="mt-5 space-y-4 text-base sm:text-lg leading-relaxed text-mist font-normal">
                      {section.body.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {/* RBO-Style Callout Box */}
                    {section.calloutBox && (
                      <div className="my-8 rounded-2xl border-l-4 border-lime bg-lime/5 p-6 backdrop-blur-sm border border-line/40">
                        <div className="font-heading font-bold text-lime text-base mb-2">
                          {section.calloutBox.title}
                        </div>
                        <p className="text-sm sm:text-base text-mist leading-relaxed font-normal">
                          {section.calloutBox.content}
                        </p>
                      </div>
                    )}

                    {/* Bullet List */}
                    {section.bulletList && (
                      <ul className="mt-6 space-y-3.5 rounded-2xl border border-line bg-panel p-6 sm:p-7">
                        {section.bulletList.map((item, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-mist leading-relaxed font-normal">
                            <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* High-Impact Stat Metric */}
                    {section.keyMetricOrQuote && (
                      <div className="my-8 rounded-2xl border border-line-strong bg-panel/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
                        <div className="font-mono text-3xl sm:text-5xl font-bold text-lime shrink-0">
                          {section.keyMetricOrQuote.metric}
                        </div>
                        <div className="text-sm sm:text-base text-mist font-medium leading-snug">
                          {section.keyMetricOrQuote.label}
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Strategic Conclusion */}
              <div className="mt-14 rounded-3xl border border-line bg-panel p-8 sm:p-10 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />
                <h3 className="text-2xl font-bold font-heading text-white mb-4">
                  Strategic Conclusion
                </h3>
                <p className="text-base text-mist leading-relaxed font-normal">
                  {post.content.conclusion}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/book-your-call" variant="primary" size="lg">
                    Schedule Architecture Walkthrough
                  </Button>
                  <Button href="/case-studies" variant="outline" size="lg">
                    View Verified Case Studies
                  </Button>
                </div>
              </div>

              {/* FAQ Section with SEO Interlinks */}
              {post.content.faqs && post.content.faqs.length > 0 && (
                <section className="mt-16 border-t border-line pt-12">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime mb-3">
                    <HelpCircle className="w-4 h-4 text-lime" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white mb-6 tracking-tight">
                    Common Questions Answered
                  </h2>

                  <div className="space-y-5">
                    {post.content.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="rounded-2xl border border-line bg-panel p-6 sm:p-7 transition-all hover:border-lime/40"
                      >
                        <h3 className="text-lg font-bold font-heading text-white mb-2.5">
                          {faq.q}
                        </h3>
                        <p className="text-sm sm:text-base text-mist leading-relaxed">
                          {faq.a}
                        </p>
                        {faq.link && (
                          <div className="mt-4 pt-3.5 border-t border-line/50">
                            <Link
                              href={faq.link.href}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime hover:underline group/link"
                            >
                              <span>{faq.link.text}</span>
                              <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                                →
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Author Bio Box */}
              <div className="mt-14 rounded-2xl border border-line bg-panel p-6 sm:p-8 flex items-start gap-4 sm:gap-6">
                <div className="h-14 w-14 rounded-full bg-lime/10 border-2 border-lime/40 flex items-center justify-center font-mono font-bold text-lime text-base shrink-0">
                  QLX
                </div>
                <div>
                  <div className="text-base font-bold text-white">{post.author.name}</div>
                  <div className="text-xs font-mono text-lime font-medium mt-0.5 mb-2.5">
                    {post.author.role}
                  </div>
                  <p className="text-xs sm:text-sm text-mist leading-relaxed">
                    QualifiedLeadsX™ Research Team builds and scales customer acquisition funnels for elite high-ticket coaches, consultants, and growth agencies. Over $150M+ in client revenue scaled across North America, Europe, and the Middle East.
                  </p>
                </div>
              </div>

              {/* Topic Tags */}
              <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-dim mr-2">Topic Tags:</span>
                {post.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1 text-xs text-mist font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Column: Sticky Widgets & Quick Links */}
            <aside className="lg:col-span-4 hidden lg:block space-y-8 sticky top-28 self-start">
              {/* Interactive Table of Contents */}
              <div className="rounded-2xl border border-line bg-panel p-6 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-4">
                  <Bookmark className="w-4 h-4 text-lime" />
                  <span>On This Page</span>
                </div>
                <nav className="space-y-2.5 text-xs font-mono">
                  {post.content.sections.map((sec, sIdx) => (
                    <a
                      key={sIdx}
                      href={`#section-${sIdx}`}
                      className="block text-mist hover:text-lime transition-colors leading-relaxed line-clamp-1 py-1 border-l-2 border-transparent hover:border-lime pl-2.5"
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Consultation CTA Card */}
              <div className="rounded-2xl border-2 border-lime/40 bg-panel p-6 relative overflow-hidden shadow-xl">
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-lime/15 blur-2xl" />
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-lime/10 border border-lime/30 text-lime mb-3">
                  <Zap className="w-3 h-3 text-lime" />
                  <span>Done-For-You Architecture</span>
                </span>
                <h4 className="text-lg font-bold font-heading text-white mb-2">
                  Want This Exact Funnel Installed in Your Business?
                </h4>
                <p className="text-xs text-mist leading-relaxed mb-4">
                  We write the 12-minute script, build the 4-tier qualification survey, configure WhatsApp speed-to-lead nodes, and launch profitable broad Meta ad campaigns.
                </p>
                <Button href="/book-your-call" variant="primary" size="md" className="w-full">
                  Book Free Architecture Call
                </Button>
              </div>

              {/* Benchmark Telemetry Box */}
              <div className="rounded-2xl border border-line bg-panel p-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-dim mb-4">
                  <TrendingUp className="w-4 h-4 text-lime" />
                  <span>Blueprint KPI Benchmarks</span>
                </div>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-line/40 pb-2">
                    <span className="text-mist">Video Duration:</span>
                    <span className="text-white font-bold">10–14 Minutes</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line/40 pb-2">
                    <span className="text-mist">View Completion:</span>
                    <span className="text-lime font-bold">58%+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line/40 pb-2">
                    <span className="text-mist">Target CVR:</span>
                    <span className="text-white font-bold">14% – 18%</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line/40 pb-2">
                    <span className="text-mist">Show-Up Rate:</span>
                    <span className="text-lime font-bold">85%+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-mist">Blended CAC:</span>
                    <span className="text-white font-bold">$90 – $160 / call</span>
                  </div>
                </div>
              </div>

              {/* Industry Playbook Links */}
              <div className="rounded-2xl border border-line bg-panel p-6">
                <div className="text-xs font-mono uppercase tracking-wider text-dim mb-3">
                  Industry Playbooks
                </div>
                <div className="space-y-2">
                  <Link
                    href="/for/coaches"
                    className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-line p-3 text-xs font-medium text-fog hover:border-lime/40 hover:text-lime transition-all"
                  >
                    <span>For High-Ticket Coaches</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime" />
                  </Link>
                  <Link
                    href="/for/consultants"
                    className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-line p-3 text-xs font-medium text-fog hover:border-lime/40 hover:text-lime transition-all"
                  >
                    <span>For B2B Consultants</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime" />
                  </Link>
                  <Link
                    href="/for/agencies"
                    className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-line p-3 text-xs font-medium text-fog hover:border-lime/40 hover:text-lime transition-all"
                  >
                    <span>For Growth Agencies</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime" />
                  </Link>
                </div>
              </div>
            </aside>
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
