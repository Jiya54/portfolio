import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

const highlights = [
  {
    label: 'Experience',
    title: 'Java Spring Boot Intern',
    organization: 'Linsys Innovations',
    detail: 'June 2026 – June 2026',
    description: 'Contributed to backend development and REST API development using Java and Spring Boot.',
  },
  {
    label: 'Education',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Model Engineering College, Kochi',
    detail: `CGPA: ${profile.cgpa}/10`,
  },
  {
    label: 'Recognition',
    title: 'Finalist — Tink-Her-Hack 4.0',
    link: '/work/claimsafe',
  },
]

export function Experience() {
  return (
    <section id="experience" className="home-section scroll-mt-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="05"
            label="Experience, education & recognition"
            aside="A brief record"
            compact
            title={
              <>
                The <span className="display-italic text-accent">record.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 border-t border-rule md:mt-10 md:grid-cols-3 md:gap-x-8">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <article className="border-b border-rule py-5 md:min-h-44">
                <p className="eyebrow">{item.label}</p>
                <h3 className="mt-3 font-display text-[1.4rem] leading-tight text-ink">
                  {item.title}
                </h3>
                {item.organization ? (
                  <p className="mt-2 text-[0.8rem] text-accent">{item.organization}</p>
                ) : null}
                {item.detail ? (
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.08em] text-muted">
                    {item.detail}
                  </p>
                ) : null}
                {item.description ? (
                  <p className="mt-3 max-w-[38ch] text-[0.76rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                ) : null}
                {item.link ? (
                  <Link
                    to={item.link}
                    className="group mt-3 inline-flex items-center gap-1 text-[0.62rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
                  >
                    ClaimSafe case study
                    <ArrowUpRight size={11} className="arrow" aria-hidden="true" />
                  </Link>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
