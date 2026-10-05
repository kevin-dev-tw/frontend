import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const links = [
  { id: 'work', label: '作品' },
  { id: 'about', label: '關於' },
  { id: 'experience', label: '經歷' },
  { id: 'skills', label: '技能' },
  { id: 'contact', label: '聯絡' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const ref = useRef<HTMLElement>(null)
  const locked = useRef(false)
  const timer = useRef<number>(0)

  const go = (id: string) => {
    locked.current = true
    setActive(id)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => { locked.current = false }, 1900)
  }

  useEffect(() => {
    gsap.fromTo(ref.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
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

  return (
    <nav
      ref={ref}
      aria-label="主選單"
      className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center md:top-6"
    >
      <ul className="pointer-events-auto flex w-[calc(100%-2rem)] max-w-md items-center gap-1 rounded-full border border-ink/10 bg-paper/70 p-1.5 shadow-lg shadow-black/20 backdrop-blur-xl md:w-auto md:max-w-none">
        <li>
          <a href="#top" onClick={() => go('top')} className="block rounded-full px-3 py-2 text-center font-serif text-base text-accent md:px-4" aria-label="回到頂端">
            <span className="md:hidden">K</span>
            <span className="hidden md:inline">Kevin</span>
          </a>
        </li>
        {links.map(({ id, label }) => (
          <li key={id} className="flex-1 md:flex-none">
            <a
              href={`#${id}`}
              onClick={() => go(id)}
              aria-current={active === id ? 'true' : undefined}
              className={`block rounded-full px-1 py-2 text-center text-sm whitespace-nowrap transition-colors duration-300 md:px-4 ${
                active === id ? 'bg-ink text-paper' : 'text-muted hover:bg-ink/10 hover:text-ink'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
