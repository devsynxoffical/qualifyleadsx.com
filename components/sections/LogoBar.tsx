"use client";

import Image from "next/image";

const logos = Array.from({ length: 22 }, (_, i) => ({
  src: `/logos/logo-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Client logo ${i + 1}`,
}));

export function LogoBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink py-10">
      {/* left / right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-ink to-transparent" />

      {/* label */}
      <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        Trusted by clients across 30+ industries
      </p>

      {/* marquee track — duplicated for seamless loop */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-24 pr-24 will-change-transform items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex h-20 w-48 shrink-0 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={192}
                height={64}
                className="h-14 w-auto max-w-[192px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
