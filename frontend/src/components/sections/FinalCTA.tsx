import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function FinalCTA() {
  const { finalCta } = siteContent

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 81, 50, 0.88), rgba(5, 5, 5, 0.9)), url(${finalCta.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className="relative z-10 text-center">
        <AnimatedSection>
          <img
            src={siteContent.brand.logo}
            alt={siteContent.brand.logoAlt}
            className="mx-auto mb-6 h-14 w-auto"
          />

          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {finalCta.title}
          </h2>

          <p className="mx-auto mb-3 max-w-2xl text-base text-white/85 sm:text-lg">
            {finalCta.subtitle}
          </p>

          <p className="mx-auto mb-8 max-w-xl text-sm italic text-primary sm:text-base">
            {finalCta.note}
          </p>

          <Button href={siteContent.brand.ctaUrl} className="!text-xs sm:!text-sm">
            {siteContent.brand.ctaText}
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
