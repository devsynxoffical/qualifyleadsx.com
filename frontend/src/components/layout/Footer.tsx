import { Link } from 'react-router-dom'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03050a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-cyan/50" />
      <div className="qlx-glow-orb -left-10 bottom-0 h-56 w-56 bg-primary/15" />
      <div className="qlx-glow-orb -right-10 top-10 h-48 w-48 bg-cyan/10" />

      <Container className="relative z-10 grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src={siteContent.brand.logo}
            alt={siteContent.brand.logoAlt}
            className="mb-5 h-12 w-auto"
          />
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            {siteContent.footer.about}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-white/65">
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

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Get Started
          </h3>
          <p className="mb-5 text-sm text-white/65">{siteContent.finalCta.subtitle}</p>
          <Button href={siteContent.brand.ctaUrl}>{siteContent.brand.ctaShort}</Button>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/45 sm:flex-row">
          <p>{siteContent.footer.copyright}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-xs font-semibold uppercase text-primary transition hover:bg-primary hover:text-[#05070a]"
          >
            Scroll to top
          </button>
        </Container>
      </div>
    </footer>
  )
}
