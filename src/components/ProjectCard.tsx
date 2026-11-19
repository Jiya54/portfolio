import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from './BrandIcons'

export interface ProjectCardData {
  name: string
  description: string
  technologies: string[]
  repository?: string
  caseStudy?: string
}

interface ProjectCardProps {
  project: ProjectCardData
}

export function ProjectCard({ project }: ProjectCardProps) {
  const title = project.caseStudy ? (
    <Link to={project.caseStudy} className="transition-colors hover:text-accent">
      {project.name}
    </Link>
  ) : project.repository ? (
    <a
      href={project.repository}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-accent"
    >
      {project.name}
    </a>
  ) : (
    project.name
  )

  return (
    <article className="group flex h-full flex-col border-t border-rule py-5 transition-colors sm:py-6">
      <h3 className="font-display text-[1.65rem] leading-tight text-ink">{title}</h3>
      <p className="mt-2 max-w-[42ch] text-[0.82rem] leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
        {project.technologies.map((technology) => (
          <li key={technology} className="text-[0.65rem] uppercase tracking-[0.08em] text-muted">
            {technology}
          </li>
        ))}
      </ul>

      {project.repository ? (
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
        >
          <GithubIcon size={13} aria-hidden="true" />
          GitHub
          <ArrowUpRight size={11} strokeWidth={1.5} aria-hidden="true" />
        </a>
      ) : null}
    </article>
  )
}
