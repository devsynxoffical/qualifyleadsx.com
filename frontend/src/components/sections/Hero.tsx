import { motion } from 'framer-motion'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import heroTeamImg from '../../assets/hero-team.jpg'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      {/* ── Ambient Background Lighting ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute top-1/2 right-4 lg:right-16 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/20 via-primary-dark/15 to-transparent blur-[90px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ── Main Content Container ── */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* ── LEFT COLUMN: Text Content ── */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Guarantee Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 backdrop-blur-md sm:mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                30–40 Qualified Appointments / Month · Guaranteed
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {siteContent.hero.title}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/75 sm:text-base lg:mx-0"
            >
              Stop chasing unqualified leads. Our{' '}
              <span className="font-semibold text-primary">QualifiedLeadsX™ Funnel System</span>{' '}
              floods your calendar with pre-qualified, ready-to-buy prospects—on autopilot.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button
                href={siteContent.brand.ctaUrl}
                className="w-full !px-8 !py-3.5 !text-xs !tracking-widest sm:w-auto sm:!text-sm shadow-lg shadow-primary/25 hover:shadow-primary/45"
              >
                {siteContent.brand.ctaShort}
              </Button>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/50">
                <span className="text-amber-400">⚡</span> Spots are extremely limited
              </span>
            </motion.div>

            {/* Trust Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-[11px] tracking-wide text-white/40 sm:text-xs"
            >
              Trusted by high-ticket coaches, consultants &amp; service providers worldwide
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN: Team Image Showcase (No stats/badges, compact size) ── */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-primary-dark/30 p-1.5 shadow-xl shadow-primary/15 backdrop-blur-md transition-all duration-300 hover:border-primary/40">
                <div className="relative overflow-hidden rounded-xl bg-[#09150e]">
                  <img
                    src={heroTeamImg}
                    alt="QualifiedLeadsX Founders"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  )
}
