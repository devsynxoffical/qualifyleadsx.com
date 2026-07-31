import { Quote } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialSection() {
  const { testimonial } = siteContent

  return (
    <section
      id="testimonial"
      className="qlx-gradient-dark relative overflow-hidden py-10 sm:py-14 lg:py-20"
    >
      <div className="qlx-glow-orb left-0 top-1/3 h-48 w-48 bg-primary/15 sm:h-72 sm:w-72" />
      <Container className="relative z-10">
        <SectionHeading className="mb-6 sm:mb-8 lg:mb-10">{testimonial.heading}</SectionHeading>

        <div className="grid grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <AnimatedSection>
              <div className="qlx-glass-strong overflow-hidden rounded-2xl p-1.5 sm:rounded-3xl sm:p-2">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black sm:rounded-2xl">
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

          <div className="lg:col-span-6">
            <AnimatedSection delay={0.12}>
              <div className="qlx-glass relative rounded-2xl p-4 sm:rounded-3xl sm:p-6 lg:p-7">
                <Quote className="mb-2 text-primary sm:mb-3" size={28} fill="currentColor" />

                <h3 className="mb-2 text-base font-bold uppercase leading-snug text-white sm:mb-3 sm:text-lg md:text-xl">
                  {testimonial.title}
                </h3>

                <p className="mb-4 text-xs leading-relaxed text-white/70 sm:mb-5 sm:text-sm">
                  {testimonial.description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {testimonial.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white sm:rounded-2xl sm:px-3.5 sm:py-2.5 sm:text-sm"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(19,139,212,0.9)]" />
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
