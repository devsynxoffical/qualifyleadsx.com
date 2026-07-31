import { motion } from 'framer-motion'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function PromoBar() {
  return (
    <div className="relative overflow-hidden border-y border-primary/25 bg-gradient-to-r from-primary/10 via-cyan/5 to-primary/10 py-3.5 backdrop-blur-md sm:py-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,139,212,0.12),transparent_70%)]" />
      <Container className="relative z-10 flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium text-white sm:text-left sm:text-sm md:text-base"
        >
          {siteContent.promo.text}
        </motion.p>
        <Button href={siteContent.brand.ctaUrl} className="shrink-0 !px-5 !py-2.5 !text-[10px] sm:!text-xs">
          {siteContent.promo.button}
        </Button>
      </Container>
    </div>
  )
}
