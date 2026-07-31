import { X, Check } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function ComparisonSection() {
  const { comparison } = siteContent

  return (
    <section className="qlx-gradient-dark relative overflow-hidden py-10 sm:py-14 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${comparison.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081136]/90 via-[#081136]/94 to-[#081136]" />

      <Container className="relative z-10">
        <SectionHeading className="mx-auto mb-8 max-w-4xl sm:mb-10 lg:mb-12">
          {comparison.heading}
        </SectionHeading>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <AnimatedSection>
            <article className="qlx-glass h-full rounded-2xl p-4 sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/15 text-red-400 ring-1 ring-red-400/30 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <X size={18} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                  {comparison.outdated.title}
                </h3>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {comparison.outdated.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-medium text-white/85 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <X size={14} className="mt-0.5 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <article className="qlx-glass-strong h-full rounded-2xl p-4 sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/40 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <Check size={18} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wide text-primary sm:text-xl">
                  {comparison.qualified.title}
                </h3>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {comparison.qualified.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5 text-xs font-semibold text-white sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
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
