import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="home-section scroll-mt-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04"
            label="Toolkit"
            aside="A focused selection"
            compact
            title={
              <>
                The <span className="display-italic text-accent">toolkit.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 border-t border-rule sm:mt-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.04}>
              <div className="border-b border-rule py-4 sm:min-h-32">
                <h3 className="eyebrow text-ink">{group.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
                  {group.items.map((item, itemIndex) => (
                    <li key={item} className="text-[0.8rem] leading-relaxed text-muted">
                      {item}{itemIndex < group.items.length - 1 ? <span aria-hidden="true"> ·</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
