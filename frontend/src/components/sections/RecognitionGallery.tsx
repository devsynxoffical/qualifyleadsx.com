import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function RecognitionGallery() {
  return (
    <section className="qlx-gradient-dark relative overflow-hidden py-16 sm:py-24">
      <div className="qlx-glow-orb bottom-10 right-10 h-64 w-64 bg-primary/15" />
      <Container className="relative z-10">
        <SectionHeading className="mb-12">
          {siteContent.recognition.title}
        </SectionHeading>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {siteContent.recognition.images.map((src, index) => (
            <AnimatedSection key={src} delay={index * 0.04}>
              <div className="qlx-glass group overflow-hidden rounded-2xl p-1.5 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_0_28px_rgba(0,255,157,0.22)]">
                <img
                  src={src}
                  alt={`Client success story ${index + 1}`}
                  className="aspect-square w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
