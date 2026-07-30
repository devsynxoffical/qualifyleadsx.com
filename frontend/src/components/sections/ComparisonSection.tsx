import { X, Check } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function ComparisonSection() {
  const { comparison } = siteContent

  return (
    <section
      className="relative py-16 sm:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 61, 43, 0.92), rgba(5, 5, 5, 0.95)), url(${comparison.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left',
      }}
    >
      <Container>
        <SectionHeading className="mb-12 max-w-4xl mx-auto">
          {comparison.heading}
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection>
            <article className="h-full rounded-2xl border border-red-500/20 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  <X size={20} />
                </span>
                <h3 className="text-xl font-bold uppercase text-white">
                  {comparison.outdated.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {comparison.outdated.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                  >
                    <X size={16} className="mt-0.5 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="h-full rounded-2xl border border-primary/30 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Check size={20} />
                </span>
                <h3 className="text-xl font-bold uppercase text-primary">
                  {comparison.qualified.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {comparison.qualified.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
                  >
                    <Check size={16} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
