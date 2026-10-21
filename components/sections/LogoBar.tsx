"use client";

import Image from "next/image";

const existingLogoIndices = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22];

const logos = existingLogoIndices.map((num) => ({
  src: `/logos/logo-${String(num).padStart(2, "0")}.png`,
  alt: `Client logo ${num}`,
}));

export function LogoBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink py-12">
      {/* left / right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink via-ink/80 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink via-ink/80 to-transparent sm:w-32" />

      {/* label */}
      <p className="mb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-mist">
        Trusted by clients across 30+ industries
      </p>

      {/* marquee track - duplicated for seamless loop */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-8 pr-8 will-change-transform items-center sm:gap-12 sm:pr-12">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex h-24 w-auto shrink-0 items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={96}
                className="h-16 w-auto max-w-[160px] object-contain sm:h-20 sm:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
