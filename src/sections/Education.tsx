import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { achievements, education } from '../data/experience'

export function Education() {
  return (
    <section id="education" className="home-panel home-education scroll-mt-24">
        <Reveal>
          <SectionHeading
            index="05"
            label="Education & recognition"
            aside="Academic record"
            compact
            title={
              <>
                Education &amp; <span className="display-italic text-accent">recognition.</span>
              </>
            }
            lead="A consistent academic record, one hackathon final, and a certification in digital fundamentals."
          />
        </Reveal>

        <div className="mt-6">
            <Reveal>
              <p className="eyebrow">Education</p>
            </Reveal>
            <div className="mt-4 border-t border-rule">
              {education.map((entry, index) => (
                <Reveal key={entry.institution} delay={index * 0.05}>
                  <div className="grid grid-cols-1 gap-x-3 gap-y-2 border-b border-rule py-4 sm:grid-cols-12">
                    <div className="col-span-1 sm:col-span-8">
                      <h3 className="font-display text-[1.25rem] leading-tight text-ink">
                        {entry.institution}
                      </h3>
                      <p className="mt-1 text-[0.7rem] leading-relaxed text-muted">
                        {entry.qualification}
                      </p>
                      {entry.detail ? (
                        <p className="mt-1 text-[0.58rem] uppercase tracking-[0.12em] text-muted/80">
                          {entry.detail}
                        </p>
                      ) : null}
                    </div>
                    <div className="col-span-1 text-left sm:col-span-4 sm:text-right">
                      <p className="text-[0.62rem] uppercase tracking-[0.1em] text-muted">
                        {entry.period}
                      </p>
                      <p className="mt-1 font-display text-[1rem] leading-none text-accent">
                        {entry.result}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'].map(
                  (course) => (
                    <span key={course} className="tag">
                      {course}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-3 text-[0.58rem] uppercase tracking-[0.13em] text-muted">
                Relevant coursework
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow mt-6">Recognition</p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="border border-rule p-4">
                  <p className="eyebrow text-accent">{achievements[0].label}</p>
                  <p className="mt-2 font-display text-[1.8rem] leading-[0.95] text-ink">Finalist</p>
                  <h3 className="mt-2 text-[0.82rem] font-medium leading-snug text-ink">
                    Tink-Her-Hack 4.0
                  </h3>
                  <p className="mt-2 text-[0.68rem] leading-relaxed text-muted">
                    {achievements[0].body}
                  </p>
                  {achievements[0].link ? (
                    <Link
                      to={achievements[0].link.href}
                      className="group mt-3 inline-flex items-center gap-1.5 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:text-accent"
                    >
                      <span className="link-underline">{achievements[0].link.label}</span>
                      <ArrowUpRight size={11} strokeWidth={1.6} className="arrow" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>

                <div className="border border-rule p-4">
                  <p className="eyebrow text-accent">{achievements[1].label}</p>
                  <h3 className="mt-2 font-display text-[1.2rem] leading-tight text-ink">
                    {achievements[1].title}
                  </h3>
                  <p className="mt-2 text-[0.68rem] leading-relaxed text-muted">
                    {achievements[1].body}
                  </p>
                  <p className="mt-3 text-[0.6rem] leading-relaxed text-muted">
                    Issued by NASSCOM FutureSkills Prime.
                  </p>
                </div>
              </div>
            </Reveal>
        </div>
    </section>
  )
}
