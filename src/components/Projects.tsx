import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { projects, type Project } from '../data/projects'

function Preview({ p }: { p: Project }) {
  const host = p.demo ? new URL(p.demo).host : ''
  return (
    <div className="overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-ink/10">
      <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
        <span className="ml-3 truncate text-xs text-muted">{host}</span>
      </div>
      <div className="aspect-[2/1] overflow-hidden" style={{ background: p.color }}>
        {p.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${p.image}`}
            alt={`${p.title} 預覽`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-serif text-3xl text-ink/40">{p.title}</div>
        )}
      </div>
    </div>
  )
}

const Arrow = ({ dir, onClick, className = '' }: { dir: 'prev' | 'next'; onClick: () => void; className?: string }) => (
  <button
    onClick={onClick}
    aria-label={dir === 'prev' ? '上一個作品' : '下一個作品'}
    className={`flex items-center justify-center rounded-full transition-colors duration-300 ${className}`}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={dir === 'prev' ? 'rotate-180' : ''}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </button>
)

export default function Projects() {
  const root = useRef<HTMLElement>(null)
  const touchX = useRef(0)
  const [{ idx, prev, dir }, setSlide] = useState({ idx: 0, prev: -1, dir: 1 })
  const count = projects.length
  const go = (i: number, d: number) =>
    setSlide((s) => ({ idx: ((i % count) + count) % count, prev: s.idx, dir: d }))

  useGSAP(() => {
    gsap.from('.work-stage', {
      y: 60, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.work-stage', start: 'top 85%' },
    })
  }, { scope: root })

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1)
  }

  return (
    <section id="work" ref={root} className="page-x py-32">
      <h2 className="mb-16 font-serif text-4xl md:text-6xl">精選作品</h2>
      <div
        className="work-stage"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative">
          <div className="pointer-events-none absolute top-1/2 -left-14 z-20 hidden -translate-y-1/2 md:block">
            <Arrow
              dir="prev"
              onClick={() => go(idx - 1, -1)}
              className="pointer-events-auto h-12 w-12 border border-ink/10 bg-paper/70 text-ink shadow-lg shadow-black/20 backdrop-blur-xl hover:bg-ink hover:text-paper"
            />
          </div>
          <div className="pointer-events-none absolute top-1/2 -right-14 z-20 hidden -translate-y-1/2 md:block">
            <Arrow
              dir="next"
              onClick={() => go(idx + 1, 1)}
              className="pointer-events-auto h-12 w-12 border border-ink/10 bg-paper/70 text-ink shadow-lg shadow-black/20 backdrop-blur-xl hover:bg-ink hover:text-paper"
            />
          </div>
          <div className="grid overflow-hidden rounded-3xl">
          {projects.map((p, i) => (
            <article
              key={p.title}
              aria-hidden={i !== idx}
              className={`card group col-start-1 row-start-1 grid items-center gap-8 rounded-3xl p-6 duration-500 ease-out md:grid-cols-2 md:gap-14 md:p-12 ${
                i === idx
                  ? 'z-10 translate-x-0 transition-transform'
                  : i === prev
                    ? `pointer-events-none transition-transform ${dir === 1 ? '-translate-x-full' : 'translate-x-full'}`
                    : `pointer-events-none opacity-0 transition-none ${dir === 1 ? 'translate-x-full' : '-translate-x-full'}`
              }`}
              style={{ background: `${p.color}99` }}
            >
              <div>
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`開啟 ${p.title}`} className="block" tabIndex={i === idx ? 0 : -1}>
                    <Preview p={p} />
                  </a>
                ) : (
                  <Preview p={p} />
                )}
              </div>
              <div>
                <div className="mb-4 text-sm text-ink/50">0{i + 1}</div>
                <h3 className="font-serif text-3xl md:text-4xl">{p.title}</h3>
                {p.subtitle && <p className="mt-2 text-ink/60">{p.subtitle}</p>}
                <p className="mt-5 text-lg text-ink/80">{p.summary}</p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70 marker:text-ink/40">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {(p.demo || p.repo) && (
                  <div className="mt-8 flex gap-5 text-sm underline underline-offset-4">
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" tabIndex={i === idx ? 0 : -1}>Live</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" tabIndex={i === idx ? 0 : -1}>GitHub</a>}
                  </div>
                )}
              </div>
            </article>
          ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between md:justify-center">
          <Arrow
            dir="prev"
            onClick={() => go(idx - 1, -1)}
            className="h-11 w-11 border border-ink/20 text-ink hover:bg-ink hover:text-paper md:hidden"
          />
          <div className="flex items-center gap-3">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => go(i, i > idx ? 1 : -1)}
                aria-label={`第 ${i + 1} 個作品:${p.title}`}
                aria-current={i === idx ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx ? 'w-8 bg-accent' : 'w-2 bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
          <Arrow
            dir="next"
            onClick={() => go(idx + 1, 1)}
            className="h-11 w-11 border border-ink/20 text-ink hover:bg-ink hover:text-paper md:hidden"
          />
        </div>
      </div>
    </section>
  )
}
