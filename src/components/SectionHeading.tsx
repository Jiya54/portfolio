import type { ReactNode } from 'react'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  aside?: ReactNode
  lead?: ReactNode
}

export function SectionHeading({ index, label, title, aside, lead }: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6 border-t border-rule pt-4">
        <div className="flex items-baseline gap-3">
          <span className="index-number">{index}</span>
          <span className="eyebrow">{label}</span>
        </div>
        {aside ? <div className="eyebrow hidden text-right sm:block">{aside}</div> : null}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-12 md:gap-10">
        <h2 className="display section-title md:col-span-7">{title}</h2>
        {lead ? (
          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="body-copy max-w-sm">{lead}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
