import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function FinalCTA() {
  const { finalCta } = siteContent

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 17, 54, 0.88), rgba(8, 17, 54, 0.94)), url(${finalCta.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="qlx-glow-orb left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 bg-primary/30 sm:h-80 sm:w-80" />

      <Container className="relative z-10 text-center">
        <AnimatedSection>
          <div className="qlx-glass-strong mx-auto max-w-3xl rounded-2xl px-4 py-8 sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <img
              src={siteContent.brand.logo}
              alt={siteContent.brand.logoAlt}
              className="mx-auto mb-4 h-14 w-auto sm:mb-6 sm:h-16"
            />

            <h2 className="qlx-heading mx-auto mb-3 max-w-3xl text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {finalCta.title}
            </h2>

            <p className="mx-auto mb-2 max-w-2xl text-sm text-white/80 sm:mb-3 sm:text-base md:text-lg">
              {finalCta.subtitle}
            </p>

            <p className="mx-auto mb-6 max-w-xl text-xs italic text-primary sm:mb-8 sm:text-sm md:text-base">
              {finalCta.note}
            </p>

            <Button
              href={siteContent.brand.ctaUrl}
              className="!text-[10px] sm:!text-xs md:!text-sm"
              showArrow={false}
            >
              {siteContent.brand.ctaText}
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
