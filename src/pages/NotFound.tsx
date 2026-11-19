import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta({
    title: 'Page not found | Jiya Santhosh',
    description: 'The requested page could not be found.',
  })

  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="shell">
        <div className="border-t border-rule pt-4">
          <span className="eyebrow">Error / 404</span>
        </div>
        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-8">
            <p className="display text-[clamp(5rem,16vw,13rem)] leading-[0.8] tracking-[-0.04em] text-ink">
              4<span className="display-italic text-accent">0</span>4
            </p>
            <h1 className="mt-8 max-w-[24ch] font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.02] text-ink">
              This page isn&apos;t part of the index.
            </h1>
            <p className="body-copy mt-4 max-w-md">
              The address may be incorrect, or the page may have moved. The selected work is still
              where you left it.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-rule pt-6">
          <Link to="/" className="btn btn-primary group">
            <ArrowLeft size={13} strokeWidth={1.6} className="transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
          <Link to="/#work" className="btn btn-outline group">
            Selected work
            <ArrowUpRight size={13} strokeWidth={1.6} className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}
