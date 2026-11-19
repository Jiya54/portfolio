import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLocalTime } from '../hooks/useLocalTime'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'jiya-santhosh',
    href: profile.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@Jiya54',
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
]

export function Contact() {
  const time = useLocalTime(profile.timezone)

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-invert text-invert-ink"
    >
      <span
        className="pointer-events-none absolute -bottom-[12%] right-[-2%] select-none font-display italic leading-none text-invert-ink opacity-[0.045]"
        style={{ fontSize: 'clamp(16rem, 34vw, 34rem)' }}
        aria-hidden="true"
      >
        JS
      </span>

      <div className="shell relative py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-3 border-t border-invert-rule pt-4 text-invert-muted sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-baseline gap-3">
              <span className="font-display text-base text-invert-ink">06</span>
              <span className="eyebrow text-invert-muted">Contact</span>
            </span>
            <span className="eyebrow tabular text-invert-muted">
              Kochi, IN — {time || '—'} IST
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-12 md:mt-20 md:gap-x-8">
          <Reveal className="col-span-12 lg:col-span-8">
            <h2 className="display text-[clamp(2.8rem,6.4vw,5.8rem)] leading-[0.94] tracking-[-0.03em]">
              Have something
              <br />
              <span className="display-italic text-invert-accent">interesting</span> in mind?
            </h2>
            <p className="mt-7 max-w-[46ch] text-[0.98rem] leading-relaxed text-invert-muted">
              I&apos;m always interested in building meaningful software, exploring new
              technologies, and connecting with people who enjoy solving problems.
            </p>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-3 lg:col-start-10" delay={0.08}>
            <div className="flex items-center gap-2.5 border-b border-invert-rule pb-4">
              <span className="h-1 w-1 rounded-full bg-invert-accent" aria-hidden="true" />
              <span className="text-[0.62rem] uppercase tracking-[0.16em] text-invert-muted">
                Available for internships
              </span>
            </div>
            <dl className="mt-4 space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[0.62rem] uppercase tracking-[0.13em] text-invert-muted">
                  Based in
                </dt>
                <dd className="text-right text-[0.72rem]">Kochi, Kerala</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[0.62rem] uppercase tracking-[0.13em] text-invert-muted">
                  Studying
                </dt>
                <dd className="text-right text-[0.72rem]">B.Tech CSE, MEC</dd>
              </div>
            </dl>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-invert group mt-6 w-full"
            >
              Read résumé
              <ArrowUpRight size={13} strokeWidth={1.6} className="arrow" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 border-t border-invert-rule pt-8 md:mt-24 md:pt-10">
            <p className="eyebrow text-invert-muted">Start a conversation</p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 inline-flex max-w-full items-start gap-3 font-display text-[clamp(1.45rem,4.6vw,3.65rem)] leading-[1.05] tracking-[-0.02em] text-invert-ink transition-colors hover:text-invert-accent sm:items-center"
            >
              <span className="break-all border-b border-invert-rule pb-1 transition-colors group-hover:border-invert-accent">
                {profile.email}
              </span>
              <ArrowUpRight
                className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:mt-0"
                style={{ width: 'clamp(1.2rem, 2.5vw, 2rem)', height: 'clamp(1.2rem, 2.5vw, 2rem)' }}
                strokeWidth={1.2}
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid grid-cols-1 gap-0 border-t border-invert-rule sm:grid-cols-3 sm:gap-8 md:mt-20">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noreferrer noopener' : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-invert-rule py-5 transition-colors hover:text-invert-accent sm:border-b-0 sm:py-1"
                >
                  <span className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.13em]">
                    <Icon size={13} strokeWidth={1.5} aria-hidden="true" />
                    {channel.label}
                  </span>
                  <span className="flex items-center gap-2 text-[0.72rem] text-invert-muted transition-colors group-hover:text-invert-accent">
                    {channel.value}
                    <ArrowUpRight size={12} strokeWidth={1.5} className="arrow" aria-hidden="true" />
                  </span>
                </a>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-invert-rule pt-5 text-[0.62rem] uppercase tracking-[0.13em] text-invert-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Open to conversations, internships, and collaborations</span>
          <Link
            to="/#work"
            className="group inline-flex items-center gap-1.5 text-invert-ink transition-colors hover:text-invert-accent"
          >
            <span className="link-underline">View selected work</span>
            <ArrowUpRight size={11} strokeWidth={1.5} className="arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
