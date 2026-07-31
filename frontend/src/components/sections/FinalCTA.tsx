import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function FinalCTA() {
  const { finalCta } = siteContent

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 11, 20, 0.82), rgba(6, 11, 20, 0.92)), url(${finalCta.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="qlx-glow-orb left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-primary/30" />
      <div className="qlx-glow-orb right-[15%] top-[20%] h-48 w-48 bg-cyan/20" />

      <Container className="relative z-10 text-center">
        <AnimatedSection>
          <div className="qlx-glass-strong mx-auto max-w-3xl rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
            <img
              src={siteContent.brand.logo}
              alt={siteContent.brand.logoAlt}
              className="mx-auto mb-6 h-14 w-auto"
            />

            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {finalCta.title}
            </h2>

            <p className="mx-auto mb-3 max-w-2xl text-base text-white/80 sm:text-lg">
              {finalCta.subtitle}
            </p>

            <p className="mx-auto mb-8 max-w-xl text-sm italic text-primary sm:text-base">
              {finalCta.note}
            </p>

            <Button
              href={siteContent.brand.ctaUrl}
              className="!text-xs sm:!text-sm"
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
