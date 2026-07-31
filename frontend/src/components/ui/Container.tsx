import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Tag>
  )
}
