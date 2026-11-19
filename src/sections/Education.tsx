import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { achievements, education } from '../data/experience'

export function Education() {
  return (
    <section id="education" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="05"
            label="Education & recognition"
            aside="Academic record"
            title={
              <>
                Education &amp; <span className="display-italic text-accent">recognition.</span>
              </>
            }
            lead="A consistent academic record, one hackathon final, and a certification in digital fundamentals."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Education</p>
            </Reveal>
            <div className="mt-4 border-t border-rule">
              {education.map((entry, index) => (
                <Reveal key={entry.institution} delay={index * 0.05}>
                  <div className="grid grid-cols-12 gap-x-4 gap-y-3 border-b border-rule py-7">
                    <div className="col-span-12 sm:col-span-8">
                      <h3 className="font-display text-[1.65rem] leading-tight text-ink">
                        {entry.institution}
                      </h3>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">
                        {entry.qualification}
                      </p>
                      {entry.detail ? (
                        <p className="mt-1 text-[0.66rem] uppercase tracking-[0.13em] text-muted/80">
                          {entry.detail}
                        </p>
                      ) : null}
                    </div>
                    <div className="col-span-12 text-left sm:col-span-4 sm:text-right">
                      <p className="text-[0.72rem] uppercase tracking-[0.12em] text-muted">
                        {entry.period}
                      </p>
                      <p className="mt-1 font-display text-[1.3rem] leading-none text-accent">
                        {entry.result}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'].map(
                  (course) => (
                    <span key={course} className="tag">
                      {course}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-4 text-[0.66rem] uppercase tracking-[0.13em] text-muted">
                Relevant coursework
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.08}>
              <p className="eyebrow">Recognition</p>

              <div className="relative mt-4 overflow-hidden border border-rule bg-surface p-7">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-rule"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full border border-rule"
                  aria-hidden="true"
                />

                <p className="eyebrow text-accent">{achievements[0].label}</p>
                <p className="mt-5 font-display text-[2.6rem] leading-[0.9] text-ink">
                  Finalist
                </p>
                <h3 className="mt-3 text-[0.92rem] font-medium leading-snug text-ink">
                  Tink-Her-Hack 4.0
                </h3>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-muted">
                  {achievements[0].body}
                </p>
                {achievements[0].link ? (
                  <Link
                    to={achievements[0].link.href}
                    className="group mt-6 inline-flex items-center gap-1.5 text-[0.66rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
                  >
                    <span className="link-underline">{achievements[0].link.label}</span>
                    <ArrowUpRight size={12} strokeWidth={1.6} className="arrow" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>

              <div className="mt-5 border border-rule p-7">
                <p className="eyebrow text-accent">{achievements[1].label}</p>
                <h3 className="mt-4 font-display text-[1.55rem] leading-tight text-ink">
                  {achievements[1].title}
                </h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">
                  {achievements[1].body}
                </p>
              </div>

              <p className="mt-5 text-[0.68rem] leading-relaxed text-muted">
                Issued by NASSCOM FutureSkills Prime.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
