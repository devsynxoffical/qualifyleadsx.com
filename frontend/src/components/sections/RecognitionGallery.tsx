import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function RecognitionGallery() {
  return (
    <section className="qlx-gradient-dark relative overflow-hidden py-10 sm:py-14 lg:py-20">
      <div className="qlx-glow-orb bottom-10 right-10 h-40 w-40 bg-primary/15 sm:h-64 sm:w-64" />
      <Container className="relative z-10">
        <SectionHeading className="mb-6 sm:mb-8 lg:mb-12">
          {siteContent.recognition.title}
        </SectionHeading>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {siteContent.recognition.images.map((src, index) => (
            <AnimatedSection key={src} delay={index * 0.04}>
              <div className="qlx-glass group overflow-hidden rounded-xl p-1 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_0_28px_rgba(19,139,212,0.28)] sm:rounded-2xl sm:p-1.5">
                <img
                  src={src}
                  alt={`Client success story ${index + 1}`}
                  className="aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-105 sm:rounded-xl"
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
