import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const STORAGE_KEY = 'js-theme'

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage may be unavailable in private browsing; the theme still applies.
    }
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'light' ? 'dark' : 'light')
  }, [applyTheme, theme])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return
      const next = event.newValue === 'dark' ? 'dark' : event.newValue === 'light' ? 'light' : null
      if (next) {
        document.documentElement.dataset.theme = next
        setThemeState(next)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme: applyTheme }),
    [applyTheme, theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
