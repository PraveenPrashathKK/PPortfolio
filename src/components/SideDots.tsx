import { useEffect, useState } from 'react'
import { navLinks } from './siteLinks'

/** Vertical section indicator on wide screens. */
function SideDots() {
  const [active, setActive] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5)
      let cur: string | null = null
      for (const l of navLinks) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) cur = l.id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Sections"
      className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 transition-opacity duration-500 2xl:flex ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {navLinks.map((l) => {
        const on = active === l.id
        return (
          <a key={l.id} href={`#${l.id}`} aria-label={l.label} className="group flex items-center gap-3">
            <span
              className={`text-[11px] tracking-[0.18em] transition-all duration-300 ${
                on
                  ? 'translate-x-0 text-blue-400 opacity-100'
                  : 'translate-x-2 text-gray-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {l.label.toUpperCase()}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                on
                  ? 'h-6 w-1.5 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]'
                  : 'h-1.5 w-1.5 bg-white/25 group-hover:bg-blue-400'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}

export default SideDots
