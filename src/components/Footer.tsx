import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile, socialLinks } from '../data/profile'
import { useLocalTime } from '../hooks/useLocalTime'

export function Footer() {
  const time = useLocalTime(profile.timezone)
  const reduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const goHome = () => {
    if (!isHome) return
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    window.history.replaceState(null, '', '/')
  }

  return (
    <footer className="border-t border-rule bg-paper">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-14 md:py-16">
          <div className="col-span-12 md:col-span-5">
            <Link
              to="/"
              onClick={goHome}
              className="group inline-flex items-baseline gap-3"
              aria-label={`${profile.name} — home`}
            >
              <span className="display-italic text-[2.6rem] leading-none tracking-[-0.04em] text-ink">
                JS<span className="text-accent">.</span>
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                Portfolio / 2026
              </span>
            </Link>
            <p className="mt-5 max-w-[30ch] text-[0.8rem] leading-relaxed text-muted">
              Computer Science undergraduate and software developer. Backend engineering,
              full-stack development, and applied AI.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="eyebrow border-b border-rule pb-3">Index</p>
            <ul className="mt-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={`/${item.href}`}
                    className="group flex items-center justify-between border-b border-rule py-2.5 text-[0.78rem] text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow border-b border-rule pb-3">Elsewhere</p>
            <ul className="mt-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                    className="group flex items-center justify-between gap-3 border-b border-rule py-2.5 text-[0.78rem] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                    <span className="flex items-center gap-1.5 text-[0.64rem]">
                      {link.label === 'Email' ? 'Write' : link.handle}
                      <ArrowUpRight size={11} strokeWidth={1.5} className="arrow" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 border-b border-rule py-2.5 text-[0.78rem] text-muted transition-colors hover:text-ink"
                >
                  Résumé
                  <ArrowUpRight size={11} strokeWidth={1.5} className="arrow" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-rule py-6 text-[0.6rem] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="tabular">Kochi, IN — {time || '—'} IST</span>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: reduceMotion ? 'auto' : 'smooth',
                })
              }
              className="group flex items-center gap-1.5 normal-case tracking-[0.1em] transition-colors hover:text-ink"
            >
              Back to top
              <ArrowUp size={11} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
