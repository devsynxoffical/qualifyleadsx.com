import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "The System", href: "#different" },
      { label: "Client Results", href: "#results" },
      { label: "Client Success", href: "#success" },
      { label: "Industries", href: "#industries" },
      { label: "Guarantee", href: "#guarantee" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Book Your Call", href: site.bookCallUrl },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink" id="footer">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="container-x">
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group flex items-center" aria-label="QualifiedLeadsX home">
              <span className="flex items-center rounded-full bg-white px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors duration-300 group-hover:bg-white/90 sm:px-3.5 sm:py-2">
                <Image
                  src="/images/qualified-leadsx.webp"
                  alt="QualifiedLeadsX"
                  width={1000}
                  height={444}
                  className="h-4 w-auto sm:h-5"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              The done-for-you client acquisition system for high-ticket coaches, consultants and
              service providers.
            </p>
            <div className="mt-6 flex gap-2.5">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist transition-all duration-300 hover:border-lime/50 hover:text-lime"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-fog"
                    >
                      {l.label}
                      {l.href.startsWith("http") && (
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-mist transition-colors hover:text-lime"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 text-mist transition-colors hover:text-lime"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <a
              href={site.bookCallUrl}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--color-lime)]"
            >
              Book Free Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                "Hi Ecom Expertz! I'd like to chat about your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#1ebe5b] hover:shadow-[0_0_40px_-8px_rgba(37,211,102,0.7)]"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M16.004 3C8.74 3 2.91 8.83 2.91 16.09c0 2.31.6 4.57 1.76 6.56L2.68 29.1l6.62-1.93a13.07 13.07 0 0 0 6.7 1.78c7.27 0 13.09-5.83 13.09-13.1C29.1 8.83 23.27 3 16.004 3Zm0 23.86c-2.06 0-4.08-.55-5.85-1.6l-.42-.25-4.03 1.17 1.13-3.93-.27-.43a10.86 10.86 0 0 1-1.67-5.83c0-6.02 4.9-10.92 10.92-10.92 5.91 0 10.92 4.9 10.92 10.93 0 6.02-5.01 10.86-11.73 10.86Zm6.36-8.17c-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.47-.54-2.8-1.73-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.15-.16.35-.4.52-.61.17-.2.23-.35.35-.58.11-.23.06-.44-.03-.61-.09-.17-.78-1.89-1.07-2.58-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.92.44-.32.35-1.2 1.17-1.2 2.85 0 1.68 1.23 3.31 1.4 3.54.17.23 2.41 3.69 5.85 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.09-.14-.32-.23-.67-.4Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            <span className="mt-1 block">{site.legalAddress}</span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-dim/60">
            Results vary. Not a guarantee of income.
          </p>
        </div>
      </div>
    </footer>
  );
}
