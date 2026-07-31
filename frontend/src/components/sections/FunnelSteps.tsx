import { ArrowRight } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FunnelSteps() {
  return (
    <section id="funnel" className="qlx-gradient-dark relative overflow-hidden py-16 sm:py-24">
      <div className="qlx-glow-orb right-10 top-20 h-64 w-64 bg-primary/15" />
      <Container className="relative z-10">
        <SectionHeading className="mb-14 max-w-3xl mx-auto">
          {siteContent.scale.title}
        </SectionHeading>

        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="grid gap-6">
            {siteContent.funnel.steps.slice(0, 2).map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex justify-center" delay={0.15}>
            <div className="qlx-glass relative flex h-52 w-52 items-center justify-center rounded-full p-4">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
              <img
                src={siteContent.funnel.centerImage}
                alt="QualifiedLeadsX funnel system"
                className="relative z-10 h-40 w-40 animate-[spin_20s_linear_infinite] rounded-full object-contain"
              />
            </div>
          </AnimatedSection>

          <div className="grid gap-6">
            {siteContent.funnel.steps.slice(2).map((step, index) => (
              <AnimatedSection key={step.title} delay={(index + 2) * 0.1}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:hidden">
          {siteContent.funnel.steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.08}>
              <StepCard step={step} />
              {index < siteContent.funnel.steps.length - 1 && (
                <div className="flex justify-center py-2 text-primary">
                  <ArrowRight className="rotate-90" size={20} />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}

function StepCard({
  step,
}: {
  step: (typeof siteContent.funnel.steps)[number]
}) {
  return (
    <article className="qlx-glass group rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_0_32px_rgba(0,255,157,0.18)]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-cyan/15 ring-1 ring-primary/35">
          <img src={step.icon} alt="" className="h-10 w-10 object-contain" />
        </div>
        <h3 className="qlx-heading text-base font-bold text-white sm:text-lg">{step.title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
    </article>
  )
}
