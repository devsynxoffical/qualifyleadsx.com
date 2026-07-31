import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  light?: boolean
  dark?: boolean
  className?: string
}

export function SectionHeading({
  children,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`text-center ${className}`}
    >
      {subtitle && (
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary sm:mb-3 sm:text-xs md:text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="qlx-heading text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-px w-14 bg-gradient-to-r from-[#081136] via-[#164382] to-[#138bd4] sm:mt-4 sm:w-20" />
    </motion.div>
  )
}
