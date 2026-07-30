import { Quote } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialSection() {
  const { testimonial } = siteContent

  return (
    <section id="testimonial" className="bg-primary-dark py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading className="mb-8 text-xl sm:text-2xl lg:text-3xl">
          {testimonial.heading}
        </SectionHeading>

        <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Responsive Video Player */}
          <div className="lg:col-span-6">
            <AnimatedSection>
              <div className="overflow-hidden rounded-xl shadow-xl shadow-black/40 ring-1 ring-white/10">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={testimonial.videoUrl}
                    title="Edgar testimonial video"
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Testimonial Details */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl bg-white/5 p-5 backdrop-blur-sm sm:p-7">
                <Quote className="mb-3 text-gold" size={32} fill="currentColor" />

                <h3 className="mb-3 text-lg font-bold uppercase leading-snug text-white sm:text-xl">
                  {testimonial.title}
                </h3>

                <p className="mb-5 text-xs leading-relaxed text-white/80 sm:text-sm">
                  {testimonial.description}
                </p>

                <ul className="space-y-3">
                  {testimonial.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 text-xs font-semibold text-white sm:text-sm"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  )
}
