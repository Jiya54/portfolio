import { ArrowDown, ArrowRight } from 'lucide-react'
import { Fragment } from 'react'
import type { ArchitectureNode } from '../data/projects'

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[]
  caption: string
}

export function ArchitectureDiagram({ nodes, caption }: ArchitectureDiagramProps) {
  return (
    <figure>
      <div className="border border-rule bg-surface/40 p-4 md:p-6" role="img" aria-label={caption}>
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {nodes.map((node, index) => (
            <Fragment key={node.label}>
              <div
                className={`relative flex-1 bg-paper p-4 ${
                  node.planned ? 'border border-dashed border-muted/60' : 'border border-rule'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="index-number text-[0.7rem]">0{index + 1}</span>
                  {node.planned ? (
                    <span className="text-[0.5rem] uppercase tracking-[0.14em] text-muted">Future</span>
                  ) : (
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                  )}
                </div>
                <p className="mt-3 text-[0.78rem] font-medium leading-snug text-ink">{node.label}</p>
                <p className="mt-1.5 text-[0.66rem] leading-relaxed text-muted">{node.detail}</p>
              </div>

              {index < nodes.length - 1 ? (
                <div className="flex items-center justify-center py-2 text-muted lg:px-1.5 lg:py-0" aria-hidden="true">
                  <ArrowDown size={13} strokeWidth={1.4} className="lg:hidden" />
                  <ArrowRight size={13} strokeWidth={1.4} className="hidden lg:block" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 border-l border-accent pl-3 text-[0.7rem] leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  )
}
