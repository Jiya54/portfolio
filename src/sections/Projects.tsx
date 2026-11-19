import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

export function Projects() {
  return (
    <section id="work" className="section scroll-mt-20">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02"
            label="Selected work"
            aside="Four projects / 01—04"
            title={
              <>
                Selected <span className="display-italic text-accent">work.</span>
              </>
            }
            lead="Four projects across verification, collaboration, and tracking — each documented with its constraints, contribution, and engineering decisions."
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">
          {projects.map((project: Project) => (
            <Reveal key={project.slug} delay={0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.72rem] leading-relaxed text-muted">
              Each project has a full case study with architecture, implementation notes, and open
              questions.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
            >
              <span className="link-underline">More on GitHub</span>
              <ArrowUpRight size={13} strokeWidth={1.6} className="arrow" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
