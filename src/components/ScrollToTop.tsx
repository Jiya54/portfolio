import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'auto' })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
