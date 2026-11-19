"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, ExternalLink } from "lucide-react";
import { LightboxModal } from "@/components/ui/LightboxModal";

export type ProofCard = {
  /** Screenshot or video thumbnail from public/case-studies. */
  img: string;
  w: number;
  h: number;
  headline: string; // "850 roofing leads in 8 days"
  where: string; // "Roofing client, Texas"
  metrics: { label: string; value: string }[];
  /** The original published post, so the numbers can be checked. */
  source: string;
};

/**
 * Result cards built from published campaign screenshots. Clicking the image
 * opens it full size; the source link goes to the original post.
 */
export function ProofGallery({ cards }: { cards: ProofCard[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.img}
            className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-panel transition-colors duration-300 hover:border-lime/40"
          >
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="relative block aspect-[4/3] overflow-hidden bg-ink"
              aria-label={`View screenshot: ${c.headline}`}
            >
              <Image
                src={c.img}
                alt={`Ads Manager screenshot: ${c.headline} (${c.where})`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/70 text-fog opacity-80 backdrop-blur transition group-hover:border-lime group-hover:text-lime">
                <Expand className="h-4 w-4" />
              </span>
              <span className="absolute bottom-3 left-4 right-4 text-left">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-lime">{c.where}</span>
                <span className="mt-1 block text-lg font-semibold leading-snug text-fog">{c.headline}</span>
              </span>
            </button>
            <div className="flex flex-1 flex-col p-5">
              <dl className="grid grid-cols-3 gap-2">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-line bg-ink/50 px-2.5 py-2">
                    <dt className="text-[10px] uppercase tracking-wider text-dim">{m.label}</dt>
                    <dd className="mt-0.5 font-mono text-sm font-bold text-fog">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={c.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-mist transition-colors hover:text-lime"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                See the original post
              </a>
            </div>
          </article>
        ))}
      </div>
      <LightboxModal
        isOpen={open}
        onClose={() => setOpen(false)}
        items={cards.map((c) => ({ src: c.img, title: c.headline, subtitle: c.where, badge: "Published result", w: c.w, h: c.h }))}
        currentIndex={index}
        onNavigate={setIndex}
      />
    </>
  );
}
