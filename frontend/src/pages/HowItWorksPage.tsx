import { motion } from 'framer-motion'
import { FunnelSteps } from '../components/sections/FunnelSteps'
import { ComparisonSection } from '../components/sections/ComparisonSection'
import { VideoSection } from '../components/sections/VideoSection'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Container } from '../components/ui/Container'

export function HowItWorksPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* ── Page Header Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-primary-dark/30 to-[#050505] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                The QualifiedLeadsX™ System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold text-white sm:text-5xl"
            >
              How Our Acquisition Funnel Engine Works
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We replace cold outreach and referrals with a high-ticket automated client acquisition system that guarantees 30–40 qualified calls every month.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── 4-Step Funnel Section ── */}
      <FunnelSteps />

      {/* ── Comparison Section ── */}
      <ComparisonSection />

      {/* ── Explainer Video Section ── */}
      <VideoSection />

      {/* ── Final Call to Action ── */}
      <FinalCTA />
    </div>
  )
}
