import { motion } from 'framer-motion'
import { TestimonialSection } from '../components/sections/TestimonialSection'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Container } from '../components/ui/Container'
import { Star, CheckCircle } from 'lucide-react'

export function TestimonialsPage() {
  const reviews = [
    {
      name: 'Edgar R.',
      role: 'High-Ticket Coach',
      deal: '$1.5K Deal + $4.5K MRR',
      quote:
        'After injecting the QualifiedLeadsX™ Funnel System, my lead cost dropped to around $3 per booked appointment. Zero cold calling required!',
      rating: 5,
    },
    {
      name: 'Alexander K.',
      role: 'Solar & B2B Consultant',
      deal: '$185,000 Revenue in 60 Days',
      quote:
        'We went from struggling with word of mouth to having a calendar flooded with pre-qualified prospects every single week.',
      rating: 5,
    },
    {
      name: 'Henry M.',
      role: 'Agency Founder',
      deal: '$80,000 Cash Collected',
      quote:
        'The automated follow-ups and AI voice outreach changed everything. Our show-up rates and closing rates doubled immediately.',
      rating: 5,
    },
  ]

  return (
    <div className="pt-24 sm:pt-28">
      {/* ── Header ── */}
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
                Client Success Stories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold text-white sm:text-5xl"
            >
              What Clients Say About QualifiedLeadsX™
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Real video testimonials, verified reviews, and case study breakdowns from high-ticket coaches and service providers.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── Main Video Testimonial ── */}
      <TestimonialSection />

      {/* ── Additional Written Testimonials ── */}
      <section className="bg-[#050505] py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-bold uppercase text-white sm:text-3xl">
            Verified Client Reviews
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((rev, index) => (
              <motion.div
                key={rev.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div>
                  <div className="mb-3 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-white/80">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <span>{rev.name}</span>
                    <CheckCircle size={14} className="text-primary" />
                  </div>
                  <div className="text-xs text-white/60">{rev.role}</div>
                  <div className="mt-1 text-xs font-semibold text-primary">{rev.deal}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final Call to Action ── */}
      <FinalCTA />
    </div>
  )
}
