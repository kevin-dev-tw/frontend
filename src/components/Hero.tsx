import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  const move = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const leave = () => {
    ref.current?.style.setProperty('--mx', '-300px')
    ref.current?.style.setProperty('--my', '-300px')
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="relative flex min-h-screen items-end overflow-hidden pt-40 pb-20 page-x md:pb-28"
    >
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-glow pointer-events-none absolute inset-0" />
      <div className="relative w-full">
        <h1 className="hero-title font-serif text-6xl leading-[1.2] font-bold tracking-tight sm:text-7xl md:text-[6rem]">
          從設計<br />到<span className="text-accent">上線</span>
        </h1>
        <div className="hero-meta mt-12 flex flex-col gap-8 border-t border-ink/25 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-muted">
            <span className="text-ink">Kevin,前端工程師。</span><br />
            獨立完成需求、設計、前後端與部署
          </p>
          <div className="flex gap-4">
            <a href="#work" className="inline-block rounded-full bg-ink px-7 py-3 text-paper transition-colors duration-300 hover:bg-accent">查看作品</a>
            <a href="#contact" className="inline-block rounded-full border border-ink/40 px-7 py-3 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-paper">聯絡我</a>
          </div>
        </div>
      </div>
    </section>
  )
}
