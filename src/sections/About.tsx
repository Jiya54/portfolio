import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const notes = [
  {
    label: 'Building',
    value: 'BorderGuard AI',
    detail: 'Document verification with Python, FastAPI and OpenCV.',
    href: '/work/borderguard-ai',
  },
  {
    label: 'Interested in',
    value: 'Backend systems',
    detail: 'APIs, real-time applications, and applied AI.',
  },
  {
    label: 'Studying',
    value: 'B.Tech CSE, MEC',
    detail: 'Kochi, Kerala · 2024—2028 · CGPA 9.34 / 10.',
  },
]

export function About() {
  return (
    <section id="about" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            aside="Kochi / 2024—2028"
            title={
              <>
                A little <span className="display-italic text-accent">about</span> me.
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20">
          <Reveal className="col-span-12 md:col-span-4" delay={0.05}>
            <div className="border-t border-rule pt-5">
              <p className="eyebrow">Working notes</p>
              <dl className="mt-4">
                {notes.map((note, index) => (
                  <div key={note.label} className="group border-b border-rule py-5">
                    <dt className="flex items-baseline justify-between gap-3">
                      <span className="text-[0.6rem] uppercase tracking-[0.15em] text-muted">
                        0{index + 1} / {note.label}
                      </span>
                      {note.href ? (
                        <ArrowUpRight size={12} strokeWidth={1.5} className="text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                      ) : null}
                    </dt>
                    <dd className="mt-2">
                      {note.href ? (
                        <Link
                          to={note.href}
                          className="font-display text-[1.55rem] leading-tight text-ink transition-colors group-hover:text-accent"
                        >
                          {note.value}
                        </Link>
                      ) : (
                        <span className="font-display text-[1.55rem] leading-tight text-ink">{note.value}</span>
                      )}
                      <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">{note.detail}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 hidden items-end justify-between md:flex">
              <div className="relative h-24 w-24" aria-hidden="true">
                <span className="absolute inset-0 rounded-full border border-rule" />
                <span className="absolute inset-[22%] rounded-full border border-rule" />
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-rule" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-rule" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
              </div>
              <p className="eyebrow text-right">MEC<br />CSE</p>
            </div>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7 md:col-start-6" delay={0.12}>
            <p className="lede max-w-[36ch] text-ink">
              I&apos;m a Computer Science and Engineering student who enjoys building software and
              understanding how systems work behind the scenes.
            </p>
            <div className="mt-8 space-y-5 border-t border-rule pt-8">
              <p className="body-copy">
                My interests span backend engineering, full-stack development, and applied AI. I
                enjoy turning ideas into functional applications, exploring new technologies, and
                solving practical engineering problems.
              </p>
              <p className="body-copy">
                Through academic, personal, and collaborative projects, I&apos;ve worked with
                technologies ranging from Java and Spring Boot to React, Node.js, Python, and
                FastAPI.
              </p>
            </div>

            <div className="mt-10 flex items-end justify-between gap-6 border-t border-rule pt-5">
              <span className="eyebrow">Based in Kochi</span>
              <span className="display-italic text-[1.9rem] leading-none text-ink">Jiya Santhosh</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
