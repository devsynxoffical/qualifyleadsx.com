import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src={siteContent.brand.logo}
            alt={siteContent.brand.logoAlt}
            className="mb-5 h-12 w-auto"
          />
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {siteContent.footer.about}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="#hero" className="transition-colors hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#funnel" className="transition-colors hover:text-primary">
                How It Works
              </a>
            </li>
            <li>
              <a href="#results" className="transition-colors hover:text-primary">
                Client Results
              </a>
            </li>
            <li>
              <a href="#testimonial" className="transition-colors hover:text-primary">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Get Started
          </h3>
          <p className="mb-5 text-sm text-white/70">
            {siteContent.finalCta.subtitle}
          </p>
          <Button href={siteContent.brand.ctaUrl}>{siteContent.brand.ctaShort}</Button>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 sm:flex-row">
          <p>{siteContent.footer.copyright}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase text-white transition hover:bg-gold/90"
          >
            Scroll to top
          </button>
        </Container>
      </div>
    </footer>
  )
}
