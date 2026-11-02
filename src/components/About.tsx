import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../hooks/useLenis'

const text =
  '吳鳳科技大學數位科技與媒體設計系畢業，曾任學生會資訊部幹部。畢業後獨立為德國 DJ 建置並維護官方網站，以英文遠端溝通需求；近期擔任蝦皮文字客服，熟悉問題分級與案件追蹤。'

const tokens = text.match(/[A-Za-z0-9]+|[\s\S]/g) ?? []

const NO_LINE_START = new Set('.,;:!?%)]}\'"，。、;:!?%…·—～)]}」』》〉')
const NO_LINE_END = new Set('([{\'"「『《〈（［｛')

const groups: string[] = []
for (const t of tokens) {
  const last = groups[groups.length - 1]
  if (last && (NO_LINE_START.has(t) || NO_LINE_END.has(last[last.length - 1]))) {
    groups[groups.length - 1] = last + t
  } else {
    groups.push(t)
  }
}

export default function About() {
  const p = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = p.current
    if (!el || prefersReducedMotion()) return
    const inners = () => [...el.querySelectorAll<HTMLElement>('.ch')]
    let tl: gsap.core.Timeline | undefined

    const build = () => {
      tl?.scrollTrigger?.kill()
      tl?.kill()
      gsap.set(inners(), { clearProps: 'transform' })
      const lines = new Map<number, HTMLElement[]>()
      inners().forEach((c) => {
        const top = Math.round((c.parentElement as HTMLElement).offsetTop)
        lines.set(top, [...(lines.get(top) ?? []), c])
      })
      tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 40%', scrub: true },
      })
      ;[...lines.values()].forEach((chars, i) =>
        tl!.fromTo(chars, { yPercent: 110 }, { yPercent: 0, ease: 'power2.out', duration: 1 }, i * 0.7),
      )
    }

    let raf = 0
    let w = el.clientWidth
    const onResize = () => {
      if (el.clientWidth === w) return
      w = el.clientWidth
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => { build(); ScrollTrigger.refresh() })
    }
    document.fonts.ready.then(build)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      tl?.scrollTrigger?.kill()
      tl?.kill()
    }
  }, [])

  return (
    <section id="about" className="bg-paper-2 page-x py-32">
      <h2 className="mb-12 border-t border-ink/25 pt-6 font-serif text-5xl font-medium md:text-7xl">關於我</h2>
      <p ref={p} aria-label={text} className="about-text max-w-4xl text-2xl leading-relaxed md:text-4xl md:leading-normal">
        {groups.map((t, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden align-top whitespace-pre">
            <span className="ch inline-block">{t}</span>
          </span>
        ))}
      </p>
    </section>
  )
}
