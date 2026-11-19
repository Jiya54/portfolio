import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { GithubIcon } from './BrandIcons'

interface ProjectCardProps {
  project: Project
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${compact ? '' : 'mt-7'}`}>
      <Link
        to={`/work/${project.slug}`}
        className="group inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
      >
        <span className="link-underline">Read case study</span>
        <ArrowUpRight size={13} strokeWidth={1.6} className="arrow" aria-hidden="true" />
      </Link>
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
        >
          <GithubIcon size={13} />
          <span className="link-underline">GitHub</span>
        </a>
      ) : (
        <span className="text-[0.65rem] uppercase tracking-[0.1em] text-muted/70">{project.repoNote}</span>
      )}
    </div>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4 border-b border-rule pb-4">
        <span className="flex items-baseline gap-3">
          <span className="index-number">{project.index}</span>
          <span className="eyebrow">{project.focus}</span>
        </span>
        <span className="status">
          <span className="status-dot" aria-hidden="true" />
          {project.status}
        </span>
      </div>

      <div className="mt-6">
        <h3 className="project-title display text-ink">
          <Link to={`/work/${project.slug}`} className="transition-colors hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="body-copy mt-4 max-w-[46ch]">{project.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="border border-rule px-2.5 py-1 text-[0.61rem] uppercase tracking-[0.08em] text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-t border-rule pt-5 transition-colors">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-8">
          <ProjectDetails project={project} />
        </div>
      </div>
    </article>
  )
}
