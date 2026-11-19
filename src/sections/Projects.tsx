import { ProjectCard } from '../components/ProjectCard'
import type { ProjectCardData } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

function caseStudySummary(slug: string, technologies: string[]): ProjectCardData {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Missing project data for "${slug}"`)

  return {
    name: project.name,
    description: project.description,
    technologies,
    repository: project.repo ?? undefined,
    caseStudy: `/work/${project.slug}`,
  }
}

const selectedProjects: ProjectCardData[] = [
  caseStudySummary('claimsafe', ['Node.js', 'Express.js', 'MongoDB', 'JavaScript']),
  caseStudySummary('javafit', ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security']),
  caseStudySummary('borderguard-ai', ['Python', 'FastAPI', 'OpenCV']),
  {
    name: 'Adaptive Traffic Signal Control using STM32',
    description: 'An STM32-based project focused on adaptive traffic signal control.',
    technologies: ['STM32'],
  },
]

export function Projects() {
  return (
    <section id="work" className="home-section scroll-mt-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="03"
            label="Selected work"
            aside="Four projects"
            compact
            title={
              <>
                Selected <span className="display-italic text-accent">work.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-8 md:mt-10 md:grid-cols-2 md:gap-x-12">
          {selectedProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
