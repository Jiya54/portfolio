import {
  ArrowLeft,
  ArrowUpRight,
  LockKeyhole,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { GithubIcon } from '../components/BrandIcons'
import { getNextProject, getProject } from '../data/projects'
import { useActiveSection } from '../hooks/useUiState'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFound } from './NotFound'

const CONTENTS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'contribution', label: 'My contribution' },
  { id: 'technology', label: 'Technology' },
  { id: 'features', label: 'Key features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'repository', label: 'Repository' },
] as const

const SECTION_IDS = CONTENTS.map((item) => item.id)

function CaseSection({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-rule pt-5">
      <div className="flex items-baseline gap-4">
        <span className="index-number">{index}</span>
        <h2 className="font-display text-[clamp(1.65rem,2.5vw,2.15rem)] leading-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug)
  const activeSection = useActiveSection(SECTION_IDS)

  usePageMeta({
    title: project ? `${project.fullName} | Jiya Santhosh` : 'Project not found | Jiya Santhosh',
    description: project?.description ?? 'Project case study not found.',
  })

  if (!project) return <NotFound />

  const nextProject = getNextProject(project.slug)
  const subtitle = project.fullName.replace(`${project.name} — `, '')
  const study = project.caseStudy

  return (
    <>
      <header className="pb-4 pt-28 md:pt-36">
        <div className="shell">
          <div className="flex flex-col gap-3 border-t border-rule pt-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/#work"
              className="group inline-flex items-center gap-2 text-[0.64rem] font-medium uppercase tracking-[0.13em] text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft
                size={12}
                strokeWidth={1.6}
                className="transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Selected work
            </Link>
            <span className="eyebrow">
              Case study / {project.index} of 04
            </span>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-16">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-2">
                <span className="status-dot" aria-hidden="true" />
                <span className="status">{project.status}</span>
                <span className="text-[0.6rem] uppercase tracking-[0.14em] text-muted/60">
                  / {project.context}
                </span>
              </div>
              <h1 className="page-title display mt-5 text-ink">
                {project.name}
                <span className="mt-4 block font-display text-[0.36em] italic leading-[1.1] tracking-[-0.01em] text-muted">
                  {subtitle}
                </span>
              </h1>
              <p className="lede mt-7 max-w-[36ch] text-ink">{project.tagline}</p>
            </div>

            <aside className="col-span-12 lg:col-span-3 lg:col-start-10">
              <dl className="border-t border-rule pt-4">
                {[
                  { label: 'Focus', value: project.focus },
                  { label: 'Context', value: project.context },
                  { label: 'Timeline', value: project.timeline },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-rule py-3">
                    <dt className="text-[0.6rem] uppercase tracking-[0.13em] text-muted">{item.label}</dt>
                    <dd className="text-right text-[0.72rem] text-ink">{item.value}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4 border-b border-rule py-3">
                  <dt className="text-[0.6rem] uppercase tracking-[0.13em] text-muted">Repository</dt>
                  <dd className="text-right text-[0.72rem]">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1 text-ink hover:text-accent"
                      >
                        GitHub <ArrowUpRight size={10} strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-muted">{project.repoNote}</span>
                    )}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

        </div>
      </header>

      <div className="shell grid grid-cols-12 gap-x-6 pb-24 lg:gap-x-10 md:pb-32">
        <aside className="col-span-12 lg:col-span-3">
          <nav aria-label="Case study contents" className="lg:sticky lg:top-28">
            <p className="eyebrow border-b border-rule pb-3">Contents</p>
            <ol className="mt-2">
              {CONTENTS.map((item, index) => {
                const active = activeSection === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? 'location' : undefined}
                      className={`group flex items-baseline gap-3 border-b border-rule/60 py-2 text-[0.68rem] transition-colors ${
                        active ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      <span className="tabular text-[0.55rem] text-muted/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={active ? 'text-accent' : ''}>{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ol>

            <div className="mt-8">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-rule px-3 py-2.5 text-[0.62rem] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-surface"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={12} />
                    Repository
                  </span>
                  <ArrowUpRight size={12} strokeWidth={1.5} className="arrow" aria-hidden="true" />
                </a>
              ) : (
                <div className="flex items-start gap-2.5 border border-dashed border-rule px-3 py-3 text-[0.64rem] leading-relaxed text-muted">
                  <LockKeyhole size={12} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {project.repoNote}
                </div>
              )}
              <Link
                to="/#work"
                className="mt-5 inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                <ArrowLeft size={10} strokeWidth={1.5} aria-hidden="true" />
                All selected work
              </Link>
            </div>
          </nav>
        </aside>

        <div className="col-span-12 mt-14 space-y-14 lg:col-span-8 lg:col-start-5 lg:mt-0">
          <CaseSection id="overview" index="01" title="Overview">
            {study.disclaimer ? (
              <div className="mb-6 border-l-2 border-accent bg-accent-soft px-5 py-4">
                <p className="text-[0.76rem] leading-relaxed text-ink">{study.disclaimer}</p>
              </div>
            ) : null}
            <p className="lede max-w-[52ch] text-ink">{study.intro}</p>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-rule pt-5 sm:grid-cols-4">
              {[
                { label: 'Index', value: project.index },
                { label: 'Context', value: project.context },
                { label: 'Focus', value: project.focus },
                { label: 'Status', value: project.status },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[0.55rem] uppercase tracking-[0.14em] text-muted">{item.label}</p>
                  <p className="mt-1.5 text-[0.74rem] leading-snug text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="problem" index="02" title="Problem">
            <div className="space-y-4">
              {study.problem.map((paragraph) => (
                <p key={paragraph} className="body-copy max-w-[62ch]">
                  {paragraph}
                </p>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="objectives" index="03" title="Objectives">
            <ol className="border-t border-rule">
              {study.objectives.map((objective, index) => (
                <li key={objective} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-rule py-4">
                  <span className="index-number pt-0.5">0{index + 1}</span>
                  <span className="text-[0.85rem] leading-relaxed text-muted">{objective}</span>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection id="contribution" index="04" title="My contribution">
            <ul className="space-y-3">
              {study.contribution.map((item) => (
                <li key={item} className="flex gap-3 text-[0.88rem] leading-relaxed text-muted">
                  <span className="mt-[0.7rem] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {project.slug === 'parallel' ? (
              <p className="mt-6 border-l border-rule pl-4 text-[0.72rem] leading-relaxed text-muted">
                Parallel is a team project. The points above describe my individual backend
                contribution, not the whole application.
              </p>
            ) : null}
          </CaseSection>

          <CaseSection id="technology" index="05" title="Technology">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tag px-2.5 py-1.5 text-[0.66rem]">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[0.7rem] leading-relaxed text-muted">
              Stack as described for this project. Specific library versions, infrastructure, and
              deployment choices are outside the scope of this write-up.
            </p>
          </CaseSection>

          <CaseSection id="features" index="06" title="Key features">
            <div className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
              {study.features.map((feature, index) => (
                <div key={feature.title} className="bg-paper p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[1.28rem] leading-tight text-ink">{feature.title}</h3>
                    <span className="index-number text-[0.65rem]">0{index + 1}</span>
                  </div>
                  <p className="mt-2.5 text-[0.75rem] leading-relaxed text-muted">{feature.body}</p>
                </div>
              ))}
            </div>

            {study.future?.length ? (
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <p className="eyebrow">Future direction</p>
                  <span className="text-[0.58rem] uppercase tracking-[0.12em] text-accent">
                    Not implemented
                  </span>
                </div>
                <ul className="mt-3 border-t border-dashed border-rule">
                  {study.future.map((feature) => (
                    <li
                      key={feature.title}
                      className="grid gap-1 border-b border-dashed border-rule py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
                    >
                      <span className="text-[0.78rem] font-medium text-ink">{feature.title}</span>
                      <span className="text-[0.75rem] leading-relaxed text-muted">{feature.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </CaseSection>

          <CaseSection id="architecture" index="07" title="Architecture">
            <ArchitectureDiagram nodes={study.architecture.nodes} caption={study.architecture.caption} />
          </CaseSection>

          <CaseSection id="implementation" index="08" title="Technical implementation">
            <ol className="border-t border-rule">
              {study.implementation.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.4rem_1fr] gap-4 border-b border-rule py-5">
                  <span className="index-number pt-0.5">{String(index + 1).padStart(2, '0')}</span>
                  <p className="max-w-[58ch] text-[0.85rem] leading-[1.75] text-muted">{item}</p>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection id="challenges" index="09" title="Challenges & decisions">
            <div className="border-t border-rule">
              {study.challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="grid gap-3 border-b border-rule py-6 sm:grid-cols-[13rem_1fr] sm:gap-6"
                >
                  <div>
                    <span className="inline-flex border border-rule px-2 py-1 text-[0.54rem] uppercase tracking-[0.13em] text-muted">
                      {challenge.label}
                    </span>
                    <h3 className="mt-3 font-display text-[1.35rem] leading-tight text-ink">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-[0.82rem] leading-[1.8] text-muted">{challenge.body}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="repository" index="10" title="Repository">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 border border-rule p-5 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="flex items-center gap-3">
                  <GithubIcon size={18} />
                  <span>
                    <span className="block text-[0.62rem] uppercase tracking-[0.13em] text-muted">
                      Public repository
                    </span>
                    <span className="mt-1 block text-[0.82rem] text-ink">
                      {project.repo.replace('https://', '')}
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-ink">
                  View on GitHub
                  <ArrowUpRight size={12} strokeWidth={1.5} className="arrow" aria-hidden="true" />
                </span>
              </a>
            ) : (
              <div className="border border-dashed border-rule p-5">
                <div className="flex items-center gap-2.5">
                  <LockKeyhole size={14} strokeWidth={1.4} className="text-muted" aria-hidden="true" />
                  <p className="text-[0.8rem] text-ink">{project.repoNote}</p>
                </div>
                <p className="mt-2 max-w-lg text-[0.74rem] leading-relaxed text-muted">
                  No repository URL has been supplied for this project, so none is linked here. The
                  link can be added as soon as the code is published.
                </p>
              </div>
            )}
          </CaseSection>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="shell py-12 md:py-16">
          <Link to={`/work/${nextProject.slug}`} className="group block">
            <div className="grid grid-cols-12 items-center gap-x-6 gap-y-6">
              <div className="col-span-12 md:col-span-11">
                <div className="flex items-center gap-3">
                  <span className="eyebrow">Next case study</span>
                  <span className="index-number text-[0.7rem]">{nextProject.index} / 04</span>
                </div>
                <p className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.98] text-ink transition-colors group-hover:text-accent">
                  {nextProject.name}
                </p>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">{nextProject.tagline}</p>
              </div>
              <div className="hidden justify-end md:col-span-1 md:flex">
                <ArrowUpRight
                  size={30}
                  strokeWidth={1.1}
                  className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
