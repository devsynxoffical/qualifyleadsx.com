import { ArrowRight } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FunnelSteps() {
  return (
    <section id="funnel" className="qlx-gradient-dark py-16 sm:py-24">
      <Container>
        <SectionHeading className="mb-14 max-w-3xl mx-auto">
          {siteContent.scale.title}
        </SectionHeading>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {siteContent.funnel.steps.slice(0, 2).map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="hidden justify-center lg:flex" delay={0.15}>
            <img
              src={siteContent.funnel.centerImage}
              alt="QualifiedLeadsX funnel system"
              className="h-48 w-48 animate-[spin_20s_linear_infinite] rounded-full object-contain"
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {siteContent.funnel.steps.slice(2).map((step, index) => (
              <AnimatedSection key={step.title} delay={(index + 2) * 0.1}>
                <StepCard step={step} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:hidden">
          {siteContent.funnel.steps.map((step, index) => (
            <div key={step.title}>
              <StepCard step={step} />
              {index < siteContent.funnel.steps.length - 1 && (
                <div className="flex justify-center py-2 text-primary">
                  <ArrowRight className="rotate-90" size={20} />
                </div>
              )}
            </div>
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
    <article className="group rounded-2xl bg-white p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-4">
        <img src={step.icon} alt="" className="h-14 w-14 rounded-xl object-contain" />
        <h3 className="text-base font-bold text-black sm:text-lg">{step.title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
    </article>
  )
}
