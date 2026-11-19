import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { Skills } from '../sections/Skills'
import { usePageMeta } from '../hooks/usePageMeta'

const description =
  'Portfolio of Jiya Santhosh, Computer Science undergraduate and software developer interested in backend engineering, full-stack development, and applied AI.'

export function Home() {
  usePageMeta({
    title: 'Jiya Santhosh | Software Developer',
    description,
  })

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
