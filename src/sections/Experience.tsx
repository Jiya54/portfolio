import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { timeline } from '../data/experience'
import { profile } from '../data/profile'

export function Experience() {
  return (
    <section id="experience" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="03"
            label="Experience"
            aside="Internship / education"
            title={
              <>
                Where I&apos;ve <span className="display-italic text-accent">been.</span>
              </>
            }
            lead="A backend internship working on patient history and medicine billing workflows, alongside a Computer Science degree that keeps the fundamentals close."
          />
        </Reveal>

        <div className="mt-14 border-t border-rule md:mt-20">
          {timeline.map((entry, index) => (
            <Reveal key={`${entry.period}-${entry.title}`} delay={index * 0.06}>
              <article className="group grid grid-cols-12 gap-x-6 gap-y-6 border-b border-rule py-9 transition-colors duration-300 md:py-12">
                <div className="col-span-12 md:col-span-3">
                  <p className="display text-[2rem] leading-none text-ink md:text-[2.15rem]">
                    {entry.period}
                  </p>
                  <p className="mt-2.5 flex items-center gap-2 text-[0.64rem] uppercase tracking-[0.15em] text-muted">
                    {entry.current ? (
                      <span className="status-dot status-dot-pulse" aria-hidden="true" />
                    ) : null}
                    {entry.context}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-[1.05rem] font-medium leading-snug text-ink">{entry.title}</h3>
                  <p className="mt-1.5 font-display text-[1.35rem] leading-tight text-accent">
                    {entry.organisation}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <ul className="space-y-2.5">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[0.82rem] leading-relaxed text-muted">
                        <span className="mt-[0.65rem] h-px w-3 shrink-0 bg-rule" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {entry.meta.map((item) => (
                      <li key={item}>
                        <span className="tag">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="eyebrow">Kochi, Kerala — India</p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
            >
              <span className="link-underline">Download full résumé</span>
              <ArrowUpRight size={13} strokeWidth={1.6} className="arrow" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
