import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function RecognitionGallery() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.98)), url(${siteContent.recognition.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container>
        <SectionHeading dark className="mb-12">
          {siteContent.recognition.title}
        </SectionHeading>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {siteContent.recognition.images.map((src, index) => (
            <AnimatedSection key={src} delay={index * 0.05}>
              <div className="group overflow-hidden rounded-xl border-2 border-primary-dark/20 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={src}
                  alt={`Client success story ${index + 1}`}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
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
