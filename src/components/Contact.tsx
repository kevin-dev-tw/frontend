export default function Contact() {
  return (
    <section id="contact" className="page-x pt-32 pb-12">
      <p className="text-sm tracking-widest text-muted uppercase">聯絡我</p>
      <a
        href="mailto:tyouxipindao@gmail.com"
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-paper transition-colors duration-300 hover:bg-accent sm:px-9 sm:text-lg"
      >
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        <span className="break-all">tyouxipindao@gmail.com</span>
      </a>
      <div className="mt-24 flex flex-col items-center gap-2 border-t border-ink/10 pt-6 text-sm text-muted">
        <span>© {new Date().getFullYear()} Kevin</span>
        <span className="text-xs">本網站由 Kevin 獨立設計開發</span>
      </div>
    </section>
  )
}
