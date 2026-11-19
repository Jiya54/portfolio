import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile, socialLinks } from '../data/profile'
import { useLocalTime } from '../hooks/useLocalTime'

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
} as const

const metadata = [
  { label: 'Study', value: 'B.Tech CSE, 2024—2028' },
  { label: 'Institution', value: 'Model Engineering College' },
  { label: 'Based in', value: 'Kochi, Kerala, India' },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const time = useLocalTime(profile.timezone)

  return (
    <section id="top" className="relative overflow-hidden pt-[5.5rem] md:pt-[6.25rem]">
      <div
        className="pointer-events-none absolute -right-[12%] -top-[18%] hidden h-[48vw] w-[48vw] max-h-[680px] max-w-[680px] rounded-full border border-rule/70 lg:block"
        style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 92%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-[3%] -top-[4%] hidden h-[31vw] w-[31vw] max-h-[440px] max-w-[440px] rounded-full border border-rule/60 lg:block"
        style={{ maskImage: 'linear-gradient(to bottom, black 35%, transparent 88%)' }}
        aria-hidden="true"
      />

      <div className="shell relative">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          className="flex flex-col gap-3 border-b border-rule pb-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <motion.div variants={reveal} className="flex items-center gap-2.5">
            <span className="status-dot status-dot-pulse" aria-hidden="true" />
            <span className="eyebrow text-ink">{profile.availability}</span>
          </motion.div>
          <motion.p variants={reveal} className="eyebrow tabular">
            Kochi, IN — {time || '—'} IST
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-x-6 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-9">
            <motion.h1
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } } }}
              className="hero-title mt-8 text-ink md:mt-10"
            >
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: '105%' },
                    show: { y: '0%', transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  Hello, I&apos;m
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em] pl-[8%] sm:pl-[16%] lg:pl-[22%]">
                <motion.span
                  className="relative block w-fit"
                  variants={{
                    hidden: { y: '105%' },
                    show: { y: '0%', transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <span className="text-accent">Jiya</span>
                  <span className="text-ink">.</span>
                </motion.span>
              </span>
            </motion.h1>
          </div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 mt-7 border-l-0 border-rule lg:col-span-3 lg:mt-8 lg:border-l lg:pl-6"
          >
            <p className="eyebrow">Current record</p>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="display text-[2.8rem] leading-none text-ink">{profile.cgpa}</span>
              <span className="text-xs text-muted">/ 10 CGPA</span>
            </p>
            <dl className="mt-4 space-y-2 border-t border-rule pt-3">
              {metadata.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em] text-muted">{item.label}</dt>
                  <dd className="text-right text-[0.68rem] text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-7 border-t border-rule pt-6 md:mt-10 md:grid-cols-12 md:pt-7">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 md:col-span-6 lg:col-span-5"
          >
            <p className="lede max-w-[24ch] font-medium text-ink">{profile.headline}</p>
            <p className="body-copy mt-4 max-w-[42ch]">{profile.intro}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary group">
                View selected work
                <ArrowDown size={13} strokeWidth={1.6} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline group"
              >
                Résumé
                <ArrowUpRight size={13} strokeWidth={1.6} className="arrow" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 md:col-span-6 md:col-start-8 md:pt-1 lg:col-span-4 lg:col-start-9"
          >
            <p className="eyebrow border-b border-rule pb-3">Elsewhere</p>
            <ul>
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label]
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                      className="group flex items-center justify-between gap-4 border-b border-rule py-3.5 transition-colors hover:text-accent"
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                        {link.label}
                      </span>
                      <span className="flex min-w-0 max-w-[65%] items-center justify-end gap-2 break-all text-right text-[0.68rem] text-muted transition-colors group-hover:text-accent sm:max-w-none sm:break-normal">
                        {link.handle}
                        <ArrowUpRight size={12} strokeWidth={1.5} className="arrow" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 hidden items-center justify-between pb-5 md:flex" aria-hidden="true">
          <span className="eyebrow">Portfolio / edition 01</span>
          <span className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.18em] text-muted">
            Scroll to explore
            <span className="block h-8 w-px bg-rule" />
          </span>
        </div>
      </div>
    </section>
  )
}
