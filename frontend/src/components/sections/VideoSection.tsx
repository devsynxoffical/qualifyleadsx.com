import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function VideoSection() {
  return (
    <section className="qlx-gradient-dark py-16 sm:py-24">
      <Container>
        <SectionHeading className="mb-10 max-w-4xl mx-auto">
          {siteContent.video.title}
        </SectionHeading>

        <AnimatedSection>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-primary-dark/40 ring-1 ring-white/10">
            <div className="aspect-video w-full bg-black">
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
          <Button href={siteContent.brand.ctaUrl} className="max-w-2xl text-center !text-xs sm:!text-sm">
            {siteContent.brand.ctaText}
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
