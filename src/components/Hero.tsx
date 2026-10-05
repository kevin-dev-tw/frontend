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
      className="relative flex min-h-screen items-center overflow-hidden page-x"
    >
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm tracking-widest text-muted uppercase">前端工程師</p>
        <h1 className="font-serif text-5xl leading-[1.3] sm:text-7xl md:text-9xl">從設計到上線</h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted">
          獨立完成需求、設計、前後端與部署
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#work" className="inline-block rounded-full bg-ink px-7 py-3 text-paper transition-colors duration-300 hover:bg-accent">查看作品</a>
          <a href="#contact" className="inline-block rounded-full border border-ink/30 px-7 py-3 transition-colors duration-300 hover:border-accent-2 hover:bg-accent-2 hover:text-paper">聯絡我</a>
        </div>
      </div>
    </section>
  )
}
