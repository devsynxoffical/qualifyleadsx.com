import { Link } from 'react-router-dom'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03050a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-cyan/50" />
      <div className="qlx-glow-orb -left-10 bottom-0 h-40 w-40 bg-primary/15 sm:h-56 sm:w-56" />

      <Container className="relative z-10 grid gap-8 py-10 sm:gap-10 sm:py-14 md:grid-cols-2 lg:grid-cols-3 lg:py-16">
        <div className="text-center md:text-left">
          <img
            src={siteContent.brand.logo}
            alt={siteContent.brand.logoAlt}
            className="mx-auto mb-4 h-12 w-auto sm:mb-5 sm:h-14 md:mx-0"
          />
          <p className="mx-auto max-w-sm text-xs leading-relaxed text-white/65 sm:text-sm md:mx-0">
            {siteContent.footer.about}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary sm:mb-4 sm:text-sm">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-xs text-white/65 sm:space-y-3 sm:text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="transition-colors hover:text-primary">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/results" className="transition-colors hover:text-primary">
                Client Results
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="transition-colors hover:text-primary">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:col-span-2 md:text-left lg:col-span-1">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary sm:mb-4 sm:text-sm">
            Get Started
          </h3>
          <p className="mb-4 text-xs text-white/65 sm:mb-5 sm:text-sm">{siteContent.finalCta.subtitle}</p>
          <Button href={siteContent.brand.ctaUrl} className="!text-xs">
            {siteContent.brand.ctaShort}
          </Button>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/45 sm:flex-row sm:gap-4 sm:py-6 sm:text-sm">
          <p>{siteContent.footer.copyright}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-[10px] font-semibold uppercase text-primary transition hover:bg-primary hover:text-white sm:text-xs"
          >
            Scroll to top
          </button>
        </Container>
      </div>
    </footer>
  )
}
