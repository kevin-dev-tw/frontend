import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { experience } from '../data/experience'

export default function Experience() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.exp').forEach((el) => {
      gsap.from(el, {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })
  }, { scope: root })

  return (
    <section id="experience" ref={root} className="page-x py-32">
      <h2 className="mb-16 font-serif text-4xl md:text-6xl">經歷</h2>
      <div className="border-l border-ink/20 pl-8">
        {experience.map((e) => (
          <article key={e.company} className="exp relative mb-14 max-w-3xl last:mb-0">
            <span className="absolute top-2 -left-[2.4rem] h-3 w-3 rounded-full bg-accent" />
            <p className="mb-2 text-sm tracking-widest text-accent">{e.period}</p>
            <h3 className="font-serif text-2xl md:text-3xl">{e.company}</h3>
            <p className="mt-2 text-muted">{[e.role, e.location].filter(Boolean).join(' | ')}</p>
            {e.bullets.length > 0 && (
              <ul className="mt-6 list-disc space-y-3 pl-5 text-ink/80 marker:text-ink/40">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
