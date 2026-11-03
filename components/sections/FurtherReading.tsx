import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

interface FurtherReadingProps {
  /** Blog slugs to feature, in display order. Unknown slugs are skipped. */
  slugs: string[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}

/**
 * Server-rendered "Further Reading" block that links service and industry pages
 * to the most relevant blog guides (internal linking from money pages to content).
 */
export function FurtherReading({
  slugs,
  eyebrow = "Further Reading",
  title = "Guides that go deeper on this system",
  intro = "Benchmarks, blueprints and comparisons from the QualifiedLeadsX research team.",
}: FurtherReadingProps) {
  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="further-reading" className="border-t border-line bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime">
              <BookOpen className="h-4 w-4" />
              {eyebrow}
            </p>
            <h2
              id="further-reading"
              className="text-2xl font-bold font-heading tracking-tight text-white sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-mist">{intro}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-mist transition-colors hover:text-lime"
          >
            <span>All guides</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-lime/40"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-lime">
                  {post.category}
                </span>
                <h3 className="mt-2 text-base font-bold font-heading leading-snug text-white transition-colors line-clamp-3 group-hover:text-lime">
                  {post.seoTitle ?? post.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-mist line-clamp-2">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-mono text-dim">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
