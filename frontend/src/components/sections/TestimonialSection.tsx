import { Quote } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialSection() {
  const { testimonial } = siteContent

  return (
    <section id="testimonial" className="qlx-gradient-dark relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="qlx-glow-orb left-0 top-1/3 h-72 w-72 bg-primary/15" />
      <Container className="relative z-10">
        <SectionHeading className="mb-10">
          {testimonial.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <AnimatedSection>
              <div className="qlx-glass-strong overflow-hidden rounded-3xl p-2">
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
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
              <div className="qlx-glass relative rounded-3xl p-5 sm:p-7">
                <Quote className="mb-3 text-primary" size={32} fill="currentColor" />

                <h3 className="mb-3 text-lg font-bold uppercase leading-snug text-white sm:text-xl">
                  {testimonial.title}
                </h3>

                <p className="mb-5 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {testimonial.description}
                </p>

                <ul className="space-y-3">
                  {testimonial.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-white sm:text-sm"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,157,0.9)]" />
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
