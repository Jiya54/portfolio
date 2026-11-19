import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="home-section scroll-mt-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02"
            label="About me"
            aside="Kochi, India"
            compact
            title={
              <>
                A little <span className="display-italic text-accent">about</span> me.
              </>
            }
          />
        </Reveal>

        <Reveal className="mt-8 max-w-3xl border-t border-rule pt-6 sm:mt-10 sm:pt-8" delay={0.08}>
          <p className="lede max-w-[52ch] text-ink">
            I&apos;m a Computer Science and Engineering student with a strong interest in software
            development. I enjoy turning ideas into useful software and learning how systems work
            behind the scenes.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
