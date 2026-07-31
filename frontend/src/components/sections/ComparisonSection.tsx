import { X, Check } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function ComparisonSection() {
  const { comparison } = siteContent

  return (
    <section className="qlx-gradient-dark relative overflow-hidden py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${comparison.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b14]/85 via-[#060b14]/92 to-[#060b14]" />

      <Container className="relative z-10">
        <SectionHeading className="mb-12 max-w-4xl mx-auto">
          {comparison.heading}
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection>
            <article className="qlx-glass h-full rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/15 text-red-400 ring-1 ring-red-400/30">
                  <X size={20} />
                </span>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  {comparison.outdated.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {comparison.outdated.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85"
                  >
                    <X size={16} className="mt-0.5 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <article className="qlx-glass-strong h-full rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-primary ring-1 ring-primary/40">
                  <Check size={20} />
                </span>
                <h3 className="text-xl font-bold uppercase tracking-wide text-primary">
                  {comparison.qualified.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {comparison.qualified.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm font-semibold text-white"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
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
