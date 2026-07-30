import { motion } from 'framer-motion'
import { siteContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { RecognitionGallery } from '../components/sections/RecognitionGallery'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Button } from '../components/ui/Button'

export function ResultsPage() {
  const images = siteContent.results.images

  return (
    <div className="pt-24 sm:pt-28">
      {/* ── Page Header ── */}
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
                Verified Client Proof
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold text-white sm:text-5xl"
            >
              Client Results &amp; Revenue Case Studies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Here is how our QualifiedLeadsX™ Funnel System generates OVER $100K+ per month for our clients across different high-ticket niches.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── All Results Grid ── */}
      <section className="bg-[#050505] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/10"
              >
                <img
                  src={src}
                  alt={`Client Result Proof ${index + 1}`}
                  className="h-auto w-full rounded-lg object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 text-center">
            <Button href={siteContent.brand.ctaUrl} className="!px-8 !py-4">
              {siteContent.brand.ctaShort}
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Client Recognition ── */}
      <RecognitionGallery />

      {/* ── Final Call to Action ── */}
      <FinalCTA />
    </div>
  )
}
