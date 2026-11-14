import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from './siteLinks'
import ThemeToggle from './ThemeToggle'
import Magnetic from './Magnetic'
import { useScrollProgress } from '../hooks'

function Navbar() {
  const progress = useScrollProgress()
  const [active, setActive] = useState<string | null>(null)
  const [hover, setHover] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current: string | null = null
      for (const l of navLinks) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = l.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sliding indicator follows hover, then returns to the active section
  const target = hover ?? active
  useLayoutEffect(() => {
    const measure = () => {
      const el = target ? linkRefs.current[target] : null
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [target])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-page/70 py-3 backdrop-blur-xl'
            : 'border-b border-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>
            praveen<span className="text-blue-500">.</span>
          </a>

          <nav className="relative hidden items-center md:flex" onMouseLeave={() => setHover(null)}>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 rounded-full bg-white/[0.07] ring-1 ring-white/10 transition-all duration-300 ease-out"
              style={{
                left: pill.left,
                width: pill.width,
                opacity: target ? 1 : 0,
              }}
            />
            {navLinks.map((l) => (
              <a
                key={l.id}
                ref={(el) => {
                  linkRefs.current[l.id] = el
                }}
                href={`#${l.id}`}
                onMouseEnter={() => setHover(l.id)}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  target === l.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span className="hidden sm:inline-block">
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-block rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  Let&apos;s connect <span className="ml-1 text-blue-400">↗</span>
                </a>
              </Magnetic>
            </span>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
              className="rounded-full border border-white/15 p-2.5 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300"
          style={{ width: `${progress * 100}%` }}
        />
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-page/95 px-8 backdrop-blur-xl md:hidden">
          <nav className="space-y-2">
            {navLinks.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
                className={`flex animate-[fadeIn_400ms_ease-out] items-baseline gap-4 border-b border-white/10 py-4 text-3xl font-semibold ${
                  active === l.id ? 'text-blue-400' : 'text-white'
                }`}
              >
                <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
