import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile, socialLinks } from '../data/profile'
import { useBodyLock } from '../hooks/useUiState'
import { ThemeToggle } from './ThemeToggle'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  onNavigate: (href: string) => void
}

export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const reduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useBodyLock(open)

  useEffect(() => {
    if (!open) return
    previouslyFocused.current = document.activeElement as HTMLElement | null
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused.current?.focus()
    }
  }, [onClose, open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-paper md:hidden"
        >
          <div className="shell flex flex-1 flex-col pb-10">
            <div className="flex h-[4.5rem] items-center justify-between border-b border-rule">
              <Link
                to="/"
                onClick={() => {
                  onClose()
                  if (pathname !== '/') return
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                  window.history.replaceState(null, '', '/')
                }}
                aria-label={`${profile.name} — home`}
                className="flex items-center gap-3"
              >
                <span className="display-italic text-[1.7rem] leading-none tracking-[-0.04em] text-ink">
                  JS<span className="text-accent">.</span>
                </span>
                <span className="flex flex-col border-l border-rule pl-3 text-[0.54rem] uppercase leading-[1.7] tracking-[0.2em] text-muted">
                  <span className="text-ink">{profile.name}</span>
                  <span>Portfolio — 2026</span>
                </span>
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="grid h-9 w-9 place-items-center border border-rule text-ink transition-colors hover:bg-surface"
              >
                <X size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-between border-b border-rule pb-4">
              <span className="eyebrow">Index</span>
              <span className="text-[0.58rem] uppercase tracking-[0.16em] text-muted">
                {String(navItems.length).padStart(2, '0')} sections
              </span>
            </div>

            <nav aria-label="Mobile primary navigation" className="mt-2">
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-rule"
                  >
                    <a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault()
                        onNavigate(item.href)
                      }}
                      className="group flex items-baseline justify-between py-5"
                    >
                      <span className="display text-[clamp(2.6rem,11vw,4rem)] leading-none transition-colors group-hover:text-accent">
                        {item.label}
                      </span>
                      <span className="index-number pr-1">0{index + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 flex items-center justify-between">
              <span className="eyebrow">Appearance</span>
              <ThemeToggle />
            </div>

            <div className="mt-auto pt-14">
              <div className="border-t border-rule pt-5">
                <p className="eyebrow">Elsewhere</p>
                <ul className="mt-4 space-y-3">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                        className="group flex items-center justify-between text-sm text-ink"
                      >
                        <span>{link.label}</span>
                        <span className="flex items-center gap-2 text-[0.7rem] text-muted">
                          {link.handle}
                          <ArrowUpRight size={13} strokeWidth={1.5} className="arrow" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex items-center justify-between border border-rule px-4 py-3 text-[0.7rem] uppercase tracking-[0.14em] transition-colors hover:bg-surface"
                >
                  Résumé
                  <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
