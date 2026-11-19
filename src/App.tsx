import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { ThemeProvider } from './hooks/useTheme'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectDetail } from './pages/ProjectDetail'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only z-[100] bg-paper px-4 py-3 text-xs uppercase tracking-[0.12em] text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:border focus:border-rule"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
