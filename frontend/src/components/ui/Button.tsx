import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
  secondary:
    'bg-gold text-white hover:bg-gold/90 shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-white hover:bg-white/10',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
