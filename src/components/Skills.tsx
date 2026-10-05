import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { skills } from '../data/skills'

export default function Skills() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.skill-group', {
      y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: root.current, start: 'top 75%' },
    })
  }, { scope: root })

  return (
    <section id="skills" ref={root} className="bg-paper-2 page-x py-32">
      <h2 className="mb-16 font-serif text-4xl md:text-6xl">技能</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="skill-group">
            <h3 className="mb-4 text-sm tracking-widest text-muted uppercase">{g.group}</h3>
            <ul className="flex flex-wrap gap-3">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-ink/20 px-5 py-2">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
