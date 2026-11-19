import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface TextLinkProps {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
  withArrow?: boolean
}

export function TextLink({
  href,
  children,
  external = false,
  className = '',
  withArrow = true,
}: TextLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={`group inline-flex items-center gap-1.5 text-[0.8rem] font-medium tracking-[0.01em] transition-colors duration-300 hover:text-accent ${className}`}
    >
      <span className="link-underline">{children}</span>
      {withArrow ? <ArrowUpRight size={14} strokeWidth={1.6} className="arrow" /> : null}
    </a>
  )
}
