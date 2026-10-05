export default function Contact() {
  return (
    <section id="contact" className="page-x pt-32 pb-12">
      <p className="text-sm tracking-widest text-muted uppercase">聯絡我</p>
      <a
        href="mailto:tyouxipindao@gmail.com"
        className="mt-6 block break-all font-serif text-2xl underline decoration-accent decoration-2 underline-offset-8 sm:text-4xl md:text-7xl"
      >
        tyouxipindao@gmail.com
      </a>
      <div className="mt-24 flex flex-col items-center gap-2 border-t border-ink/10 pt-6 text-sm text-muted">
        <span>© {new Date().getFullYear()} Kevin</span>
        <span className="text-xs">本網站由 Kevin 獨立設計開發</span>
      </div>
    </section>
  )
}
