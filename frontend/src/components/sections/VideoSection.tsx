import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function VideoSection() {
  return (
    <section className="qlx-gradient-dark relative overflow-hidden py-10 sm:py-14 lg:py-20">
      <div className="qlx-glow-orb -left-20 top-10 h-40 w-40 bg-primary/20 sm:h-56 sm:w-56" />
      <Container className="relative z-10">
        <SectionHeading className="mx-auto mb-6 max-w-4xl sm:mb-8 lg:mb-10">
          {siteContent.video.title}
        </SectionHeading>

        <AnimatedSection>
          <div className="qlx-glass-strong mx-auto max-w-4xl overflow-hidden rounded-2xl p-1.5 sm:rounded-3xl sm:p-2">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black sm:rounded-2xl">
              <iframe
                src={siteContent.video.embedUrl}
                title="QualifiedLeadsX explainer presentation"
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-6 flex justify-center px-2 sm:mt-8 lg:mt-10" delay={0.15}>
          <Button
            href={siteContent.brand.ctaUrl}
            className="max-w-full text-center !text-[10px] sm:max-w-2xl sm:!text-xs md:!text-sm"
            showArrow={false}
          >
            {siteContent.brand.ctaText}
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
