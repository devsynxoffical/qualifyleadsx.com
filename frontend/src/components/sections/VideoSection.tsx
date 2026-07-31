import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function VideoSection() {
  return (
    <section className="qlx-gradient-dark relative overflow-hidden py-16 sm:py-24">
      <div className="qlx-glow-orb -left-20 top-10 h-56 w-56 bg-primary/20" />
      <Container className="relative z-10">
        <SectionHeading className="mb-10 max-w-4xl mx-auto">
          {siteContent.video.title}
        </SectionHeading>

        <AnimatedSection>
          <div className="qlx-glass-strong mx-auto max-w-4xl overflow-hidden rounded-3xl p-2">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
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

        <AnimatedSection className="mt-10 flex justify-center" delay={0.15}>
          <Button
            href={siteContent.brand.ctaUrl}
            className="max-w-2xl text-center !text-xs sm:!text-sm"
            showArrow={false}
          >
            {siteContent.brand.ctaText}
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
