import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  className?: string
  showArrow?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-[#05070a] hover:bg-primary/90 shadow-[0_0_28px_rgba(0,255,157,0.4)] hover:shadow-[0_0_42px_rgba(0,255,157,0.65)] hover:-translate-y-0.5 hover:scale-[1.02]',
  secondary:
    'bg-cyan text-[#05070a] hover:bg-cyan/90 shadow-[0_0_24px_rgba(0,209,255,0.35)] hover:shadow-[0_0_36px_rgba(0,209,255,0.55)] hover:-translate-y-0.5',
  outline:
    'border border-cyan/50 bg-cyan/10 text-cyan hover:bg-cyan hover:text-[#05070a]',
  ghost: 'text-white hover:bg-white/10',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  showArrow = true,
  ...props
}: ButtonProps) {
  const classes = `qlx-btn-glow group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow && variant === 'primary' && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/25 transition group-hover:translate-x-0.5 group-hover:bg-black/35">
          <ArrowRight size={14} />
        </span>
      )}
    </>
  )

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes}>
          {content}
        </Link>
      )
    }
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
