import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      className={`relative grid h-9 w-9 place-items-center border border-rule text-ink transition-colors duration-300 hover:bg-surface ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={reduceMotion ? false : { opacity: 0, rotate: -35, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, rotate: 35, scale: 0.7 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid place-items-center"
        >
          {theme === 'light' ? (
            <Moon size={15} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Sun size={15} strokeWidth={1.5} aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
