import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import {
  servicesMenu,
  industriesMenu,
  toolsLinks,
  benchmarkLinks,
  guideLinks,
  compareLinks,
  mastermindMenu,
  companyLinks,
  caseStudyLinksMenu,
  profileLinks,
  legalLinks,
  type MenuLink,
} from "@/lib/menu";

/**
 * Footer (redesigned 20 Nov 2026): brand + four short columns of the most
 * important links, then a closed "Browse all pages" section that still puts
 * every page in the HTML for crawlers without showing 60+ links at once.
 */
const columns: { title: string; href: string; viewAll: string; links: MenuLink[] }[] = [
  { title: "Services", href: "/services", viewAll: "All services", links: servicesMenu.featured.slice(0, 6) },
  { title: "Industries", href: "/for", viewAll: "All industries", links: industriesMenu.featured.slice(0, 6) },
  {
    title: "Resources",
    href: "/tools",
    viewAll: "All free tools",
    links: [
      { label: "Free tools & calculators", href: "/tools" },
      { label: "Benchmarks", href: "/benchmarks" },
      { label: "Cost per lead by industry", href: "/benchmarks/cost-per-lead-by-industry" },
      { label: "Blog & guides", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Alternatives compared", href: "/compare/qualifiedleadsx-alternatives" },
    ],
  },
  { title: "Company", href: "/book-your-call#book", viewAll: "Contact us", links: companyLinks.slice(0, 4).concat(companyLinks[5]) },
];

const allPages: { title: string; links: MenuLink[] }[] = [
  { title: "Services", links: servicesMenu.all },
  { title: "Industries & lead types", links: industriesMenu.all },
  { title: "Free tools", links: toolsLinks },
  { title: "Benchmarks", links: benchmarkLinks },
  { title: "Guides", links: guideLinks },
  { title: "Comparisons", links: compareLinks },
  { title: "Case studies", links: caseStudyLinksMenu },
  { title: "Mastermind", links: mastermindMenu.all },
  { title: "Reviews & profiles", links: profileLinks },
];

function FooterLink({ l, className }: { l: MenuLink; className: string }) {
  return l.href.startsWith("http") ? (
    <a href={l.href} target="_blank" rel="noopener noreferrer" className={className}>
      {l.label}
    </a>
  ) : l.href.endsWith(".xml") ? (
    <a href={l.href} className={className}>
      {l.label}
    </a>
  ) : (
    <Link href={l.href} className={className}>
      {l.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink" id="footer">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="container-x">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_2.7fr] lg:gap-16">
          {/* Brand and contact */}
          <div>
            <Link href="/" className="group inline-flex items-center" aria-label="QualifiedLeadsX home">
              <span className="flex items-center rounded-full bg-white px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors duration-300 group-hover:bg-white/90 sm:px-3.5 sm:py-2">
                <Image src="/images/qualified-leadsx.webp" alt="QualifiedLeadsX" width={1000} height={444} className="h-4 w-auto sm:h-5" />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Done-for-you lead generation and appointment setting for coaches, consultants, financial advisors and insurance agents.
            </p>
            <a href={site.bookCallUrl} className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--color-lime)]">
              Book Free Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${site.email}`} className="mt-5 flex items-center gap-2 text-sm text-mist transition-colors hover:text-lime">
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <div className="mt-6 flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/qualifiedleadsx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-mist transition-all duration-300 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/qualifiedleadsx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-mist transition-all duration-300 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:text-[#E1306C]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gauravecom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-mist transition-all duration-300 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <WhatsAppLink
              placement="footer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-6 py-3 text-sm font-bold text-lime transition-all duration-300 hover:border-lime/60 hover:bg-lime/20 hover:shadow-[0_0_30px_-5px_rgba(201,242,107,0.3)]"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M16.004 3C8.74 3 2.91 8.83 2.91 16.09c0 2.31.6 4.57 1.76 6.56L2.68 29.1l6.62-1.93a13.07 13.07 0 0 0 6.7 1.78c7.27 0 13.09-5.83 13.09-13.1C29.1 8.83 23.27 3 16.004 3Zm0 23.86c-2.06 0-4.08-.55-5.85-1.6l-.42-.25-4.03 1.17 1.13-3.93-.27-.43a10.86 10.86 0 0 1-1.67-5.83c0-6.02 4.9-10.92 10.92-10.92 5.91 0 10.92 4.9 10.92 10.93 0 6.02-5.01 10.86-11.73 10.86Zm6.36-8.17c-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.47-.54-2.8-1.73-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.15-.16.35-.4.52-.61.17-.2.23-.35.35-.58.11-.23.06-.44-.03-.61-.09-.17-.78-1.89-1.07-2.58-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.92.44-.32.35-1.2 1.17-1.2 2.85 0 1.68 1.23 3.31 1.4 3.54.17.23 2.41 3.69 5.85 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.09-.14-.32-.23-.67-.4Z" />
              </svg>
              Chat on WhatsApp
            </WhatsAppLink>
          </div>

          {/* Four short link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <FooterLink l={l} className="text-sm text-mist transition-colors hover:text-fog" />
                    </li>
                  ))}
                </ul>
                <Link href={col.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lime hover:underline underline-offset-4">
                  {col.viewAll} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </nav>
            ))}
          </div>
        </div>

        {/* Page-specific related links */}
        <RelatedLinks />

        {/* Every page, closed by default */}
        <details className="group border-t border-line py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-mist group-open:text-lime">Browse all pages</span>
            <ChevronDown className="h-4 w-4 text-mist transition-transform duration-300 group-open:rotate-180 group-open:text-lime" />
          </summary>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {allPages.map((g) => (
              <div key={g.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">{g.title}</h3>
                <ul className="mt-3 space-y-2">
                  {g.links.map((l) => (
                    <li key={l.href + l.label}>
                      <FooterLink l={l} className="text-[13px] text-mist transition-colors hover:text-lime" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-line py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-fog">© 2026 Ecom Expertz LLC®. All rights reserved.</p>
            <p className="mt-1 text-mist">1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801</p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <FooterLink key={l.href} l={l} className="text-mist transition-colors hover:text-lime" />
            ))}
            <span className="font-mono text-[10px] uppercase tracking-widest text-dim/70">Results vary. Not a guarantee of income.</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
