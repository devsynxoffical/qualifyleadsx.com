import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
