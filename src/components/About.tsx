import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const text =
  '我是 Kevin,一位能獨立完成從需求、UI 設計、前後端到部署的前端工程師。曾在電商客服第一線學會傾聽與釐清問題,現在把這份同理心放進每一個介面,讓網站更好用、更安心。'

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.ch', { opacity: 0.18 }, {
      opacity: 1, stagger: 0.05, ease: 'none',
      scrollTrigger: { trigger: '.about-text', start: 'top 85%', end: 'top 40%', scrub: true },
    })
  }, { scope: root })

  return (
    <section id="about" ref={root} className="bg-paper-2 page-x py-32">
      <h2 className="mb-12 font-serif text-4xl md:text-6xl">關於我</h2>
      <p className="about-text max-w-4xl text-2xl leading-relaxed md:text-4xl">
        {[...text].map((c, i) => <span key={i} className="ch">{c}</span>)}
      </p>
    </section>
  )
}
