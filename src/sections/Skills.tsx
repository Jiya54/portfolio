import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04"
            label="Technical skills"
            aside="Six disciplines"
            title={
              <>
                The <span className="display-italic text-accent">toolkit.</span>
              </>
            }
            lead="The languages, frameworks, and tools that show up across my coursework, internship, and projects."
          />
        </Reveal>

        <div className="mt-14 border-t border-rule md:mt-20">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.03}>
              <div className="group grid grid-cols-12 gap-x-6 gap-y-3 border-b border-rule py-6 md:py-7">
                <div className="col-span-2 md:col-span-1">
                  <span className="index-number">0{index + 1}</span>
                </div>

                <div className="col-span-10 md:col-span-3">
                  <h3 className="text-[0.95rem] font-medium text-ink transition-colors group-hover:text-accent">
                    {group.label}
                  </h3>
                  <p className="mt-1 hidden text-[0.68rem] leading-relaxed text-muted md:block">
                    {group.note}
                  </p>
                </div>

                <ul className="col-span-12 flex flex-wrap items-baseline gap-x-3 gap-y-2 md:col-span-8">
                  {group.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span className="text-[0.92rem] text-ink">{item}</span>
                      {itemIndex < group.items.length - 1 ? (
                        <span className="text-[0.7rem] text-rule" aria-hidden="true">
                          /
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[0.72rem] leading-relaxed text-muted">
              Depth comes from building with them — every project in the selected work has a full
              technical case study.
            </p>
            <span className="eyebrow">No percentage bars. Just tools.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
