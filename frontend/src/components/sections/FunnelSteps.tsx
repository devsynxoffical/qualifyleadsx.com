import { ArrowRight } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FunnelSteps() {
  return (
    <section id="funnel" className="qlx-gradient-dark relative overflow-hidden py-10 sm:py-14 lg:py-20">
      <div className="qlx-glow-orb right-10 top-20 h-40 w-40 bg-primary/15 sm:h-64 sm:w-64" />
      <Container className="relative z-10">
        <SectionHeading className="mx-auto mb-8 max-w-3xl sm:mb-10 lg:mb-14">
          {siteContent.scale.title}
        </SectionHeading>

        <div className="hidden items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div className="grid gap-5">
            {siteContent.funnel.steps.slice(0, 2).map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex justify-center" delay={0.15}>
            <div className="qlx-glass relative flex h-40 w-40 items-center justify-center rounded-full p-3 xl:h-52 xl:w-52 xl:p-4">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
              <img
                src={siteContent.funnel.centerImage}
                alt="QualifiedLeadsX funnel system"
                className="relative z-10 h-28 w-28 animate-[spin_20s_linear_infinite] rounded-full object-contain xl:h-40 xl:w-40"
              />
            </div>
          </AnimatedSection>

          <div className="grid gap-5">
            {siteContent.funnel.steps.slice(2).map((step, index) => (
              <AnimatedSection key={step.title} delay={(index + 2) * 0.1}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:hidden">
          {siteContent.funnel.steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.08}>
              <StepCard step={step} />
              {index < siteContent.funnel.steps.length - 1 && (
                <div className="flex justify-center py-1 text-primary sm:hidden">
                  <ArrowRight className="rotate-90" size={18} />
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
    <article className="qlx-glass group h-full rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_0_32px_rgba(19,139,212,0.25)] sm:rounded-3xl sm:p-5">
      <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-cyan/15 ring-1 ring-primary/35 sm:h-14 sm:w-14 sm:rounded-2xl">
          <img src={step.icon} alt="" className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
        </div>
        <h3 className="qlx-heading text-sm font-bold text-white sm:text-base md:text-lg">
          {step.title}
        </h3>
      </div>
      <p className="text-xs leading-relaxed text-white/65 sm:text-sm">{step.description}</p>
    </article>
  )
}
