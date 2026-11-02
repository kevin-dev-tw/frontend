import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const links = [
  { id: 'work', label: '作品' },
  { id: 'about', label: '關於' },
  { id: 'experience', label: '經歷' },
  { id: 'skills', label: '技能' },
  { id: 'contact', label: '聯絡' },
]

const EMAIL = 'tyouxipindao@gmail.com'

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const bar = useRef<HTMLElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  const openBtn = useRef<HTMLButtonElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)
  const locked = useRef(false)
  const timer = useRef<number>(0)

  const go = (id: string) => {
    locked.current = true
    setActive(id)
    setOpen(false)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => { locked.current = false }, 1900)
  }

  useEffect(() => {
    gsap.fromTo(bar.current, { yPercent: -100 }, { yPercent: 0, duration: 0.8, ease: 'power3.out' })
    gsap.set(menu.current, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)' })
    const unlock = () => { locked.current = false }
    window.addEventListener('wheel', unlock, { passive: true })
    window.addEventListener('touchmove', unlock, { passive: true })
    window.addEventListener('keydown', unlock)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && !locked.current && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    const hero = document.getElementById('top')
    if (hero) io.observe(hero)
    return () => {
      io.disconnect()
      window.clearTimeout(timer.current)
      window.removeEventListener('wheel', unlock)
      window.removeEventListener('touchmove', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [])

  useEffect(() => {
    const m = menu.current
    if (!m) return
    const items = m.querySelectorAll('.menu-item')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.killTweensOf([m, items])
    if (open) {
      wasOpen.current = true
      document.documentElement.style.overflow = 'hidden'
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
      window.addEventListener('keydown', onKey)
      gsap.set(m, { autoAlpha: 1 })
      gsap.fromTo(m, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: reduce ? 0 : 0.8, ease: 'expo.inOut' })
      gsap.fromTo(items, { yPercent: 110 }, { yPercent: 0, duration: reduce ? 0 : 0.9, stagger: 0.07, delay: reduce ? 0 : 0.35, ease: 'expo.out' })
      closeBtn.current?.focus()
      return () => window.removeEventListener('keydown', onKey)
    }
    document.documentElement.style.overflow = ''
    if (!wasOpen.current) return
    wasOpen.current = false
    gsap.to(m, { clipPath: 'inset(0 0 100% 0)', duration: reduce ? 0 : 0.6, ease: 'expo.inOut', onComplete: () => { gsap.set(m, { autoAlpha: 0 }) } })
    openBtn.current?.focus({ preventScroll: true })
  }, [open])

  return (
    <>
      <nav
        ref={bar}
        aria-label="主選單"
        className="fixed inset-x-0 top-0 px-6 md:px-10 z-40 border-b border-ink/25 bg-paper"
      >
        <div className="flex h-14 items-center justify-between md:h-16">
          <a href="#top" onClick={() => go('top')} className="font-serif text-xl font-semibold tracking-tight text-ink hover:text-accent" aria-label="回到頂端">
            Kevin
          </a>
          <button
            ref={openBtn}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="full-menu"
            className="group flex items-center gap-3 text-sm text-ink md:text-base"
          >
            選單
            <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
              <span className="h-0.5 w-full bg-current transition-colors group-hover:bg-accent" />
              <span className="h-0.5 w-full bg-current transition-all duration-300 group-hover:w-3/5 group-hover:bg-accent" />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="full-menu"
        ref={menu}
        role="dialog"
        aria-modal="true"
        aria-label="網站選單"
        data-lenis-prevent
        className="fixed inset-0 z-50 px-6 md:px-10 flex flex-col bg-accent text-paper"
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-paper/30 md:h-16">
          <span className="font-serif text-xl font-semibold tracking-tight">Kevin</span>
          <button ref={closeBtn} onClick={() => setOpen(false)} className="group flex items-center gap-3 text-sm md:text-base">
            關閉
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform duration-300 group-hover:rotate-90">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-1 py-6">
          {links.map(({ id, label }) => (
            <li key={id} className="overflow-hidden">
              <a
                href={`#${id}`}
                onClick={() => go(id)}
                aria-current={active === id ? 'true' : undefined}
                className={`menu-item block font-serif text-[clamp(2.75rem,10.5vh,6rem)] leading-[1.15] font-bold tracking-tight transition-opacity duration-300 hover:opacity-100 ${
                  active === id ? 'underline decoration-2 underline-offset-[0.12em] opacity-100' : 'opacity-85'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 flex-col gap-2 border-t border-paper/30 py-5 text-sm md:flex-row md:items-center md:justify-between md:text-base">
          <span>獨立完成需求、設計、前後端與部署</span>
          <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">{EMAIL}</a>
        </div>
      </div>
    </>
  )
}
