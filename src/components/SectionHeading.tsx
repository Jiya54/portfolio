import type { ReactNode } from 'react'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  aside?: ReactNode
  lead?: ReactNode
  compact?: boolean
}

export function SectionHeading({ index, label, title, aside, lead, compact = false }: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-4">
        <div className="flex items-baseline gap-3">
          <span className="index-number">{index}</span>
          <span className="eyebrow">{label}</span>
        </div>
        {aside ? <div className="eyebrow hidden text-right sm:block">{aside}</div> : null}
      </div>

      <div className={compact ? 'mt-6 grid grid-cols-1 gap-3' : 'mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-12 md:gap-10'}>
        <h2
          className={`display ${compact ? '' : 'md:col-span-7'} ${
            compact ? 'text-[clamp(1.9rem,3vw,3.2rem)] leading-[0.98] tracking-[-0.022em]' : 'section-title'
          }`}
        >
          {title}
        </h2>
        {lead ? (
          <div className={compact ? 'max-w-prose' : 'md:col-span-4 md:col-start-9 md:self-end'}>
            <p className="body-copy max-w-sm">{lead}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
