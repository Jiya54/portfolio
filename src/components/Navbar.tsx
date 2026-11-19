import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navItems, profile } from '../data/profile'
import { useActiveSection, useScrolled } from '../hooks/useUiState'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'

const SECTION_IDS = ['about', 'work', 'experience', 'contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(24)
  const activeSection = useActiveSection(SECTION_IDS)
  const location = useLocation()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const scrollToSection = (href: string) => {
    setMenuOpen(false)
    if (!isHome) {
      navigate(`/${href}`)
      return
    }

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent" aria-hidden="true">
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-accent"
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-rule bg-paper/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            to="/"
            aria-label={`${profile.name} — home`}
            onClick={() => {
              if (!isHome) return
              setMenuOpen(false)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: reduceMotion ? 'auto' : 'smooth',
              })
              window.history.replaceState(null, '', '/')
            }}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="display-italic text-[1.7rem] leading-none tracking-[-0.04em] text-ink">
              JS<span className="text-accent">.</span>
            </span>
            <span className="hidden flex-col border-l border-rule pl-3 text-[0.54rem] uppercase leading-[1.7] tracking-[0.2em] text-muted sm:flex">
              <span className="text-ink">{profile.name}</span>
              <span>Portfolio — 2026</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.href.slice(1)
              const isActive = isHome && activeSection === id
              return (
                <a
                  key={item.href}
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(item.href)
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`group flex items-center gap-2 px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  <span
                    className={`h-[3px] w-[3px] rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-rule'
                    }`}
                    aria-hidden="true"
                  />
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-1.5 border border-rule px-3.5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-surface sm:flex"
            >
              Résumé
              <ArrowUpRight size={12} strokeWidth={1.6} className="arrow" aria-hidden="true" />
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid h-9 w-9 place-items-center border border-rule text-ink transition-colors hover:bg-surface md:hidden"
            >
              {menuOpen ? (
                <X size={16} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={16} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={scrollToSection} />
    </>
  )
}
