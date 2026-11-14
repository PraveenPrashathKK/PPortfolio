import { ArrowUp } from 'lucide-react'
import Glow from './Glow'
import { navLinks, socials } from './siteLinks'
import Magnetic from './Magnetic'
import { useScrollProgress } from '../hooks'

function Footer() {
  const progress = useScrollProgress()
  const C = 2 * Math.PI * 20

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10">
      <Glow side="left" top="3rem" />

      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#" className="font-display text-2xl font-bold tracking-tight">
              praveen<span className="text-blue-500">.</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Computer Science student at Amrita Vishwa Vidyapeetham, Chennai,
              interested in software engineering and web development.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[11px] tracking-[0.22em] text-gray-500">NAVIGATE</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="group inline-flex items-center text-gray-400 transition hover:text-white"
                  >
                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[11px] tracking-[0.22em] text-gray-500">CONNECT</p>
            <ul className="space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-gray-400 transition hover:text-white"
                  >
                    {s.label}
                    <span className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wordmark */}
        <p
          aria-hidden="true"
          className="mt-16 select-none bg-gradient-to-b from-white/[0.14] to-transparent bg-clip-text text-center text-[clamp(4rem,17vw,14rem)] font-bold leading-[0.9] tracking-tighter text-transparent"
        >
          PRAVEEN
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center">
          <p>© 2026 Praveen Prashath K K. All rights reserved.</p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>

          <Magnetic strength={0.35}>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative flex h-12 w-12 items-center justify-center"
          >
            <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" className="text-white/10" strokeWidth="2" />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={C * (1 - progress)}
              />
            </svg>
            <ArrowUp className="h-4 w-4 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:text-blue-300" />
          </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}

export default Footer
