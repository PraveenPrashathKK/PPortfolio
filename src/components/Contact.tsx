import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { socials } from './siteLinks'
import Reveal from './Reveal'

// The address is stored encoded and only decoded when the visitor asks for it.
const EMAIL_B64 = 'cHJhdmVlbnByYXNoYXRoMjdAZ21haWwuY29t'

const shortUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const Bar = () => (
  <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-blue-400 transition-transform duration-300 group-hover:scale-y-100" />
)

function Contact() {
  const [hover, setHover] = useState<string | null>(null)
  const [typed, setTyped] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearInterval(timer.current), [])

  function reveal() {
    if (revealed || typed) return
    const address = atob(EMAIL_B64)
    let i = 0
    timer.current = window.setInterval(() => {
      i++
      setTyped(address.slice(0, i))
      if (i >= address.length) {
        window.clearInterval(timer.current)
        setRevealed(true)
      }
    }, 35)
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(atob(EMAIL_B64))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${atob(EMAIL_B64)}`
    }
  }

  const status =
    hover === 'email'
      ? 'reveal --email'
      : hover
        ? `open ${shortUrl(socials.find((s) => s.id === hover)!.url)}`
        : ''

  const rowBase =
    'group relative flex w-full items-center gap-4 border-b border-white/10 px-5 py-5 text-left transition-colors duration-300 hover:bg-white/[0.03] sm:px-6'

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="mb-5 text-xs tracking-[0.25em] text-blue-400">05 / CONTACT</p>
          <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Get in <span className="text-gray-500">touch.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-8 text-gray-400">
            For collaborations, opportunities or technical discussions, reach
            out through any of these channels.
          </p>
        </Reveal>

        {/* Terminal-style channel list */}
        <Reveal delay={150}>
        <div
          className="overflow-hidden rounded-2xl border border-white/10 bg-panel/80 shadow-[0_30px_80px_-40px_rgba(37,99,235,0.5)]"
          onMouseLeave={() => setHover(null)}
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="flex-1 text-center font-mono text-[11px] text-gray-500">
              contact — channels
            </span>
            <span className="w-10" />
          </div>

          {/* Email */}
          <div
            onMouseEnter={() => setHover('email')}
            className="border-b border-white/10"
          >
            <button
              type="button"
              onClick={reveal}
              disabled={!!typed}
              className={`${rowBase} border-b-0 disabled:cursor-default`}
            >
              <Bar />
              <span className="font-mono text-blue-400">›</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition group-hover:border-blue-400/40 group-hover:text-blue-300">
                <Mail size={17} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-gray-200 sm:text-base">Email</span>
                <span className="mt-1 block truncate font-mono text-xs text-gray-500">
                  {typed ? (
                    <span className="text-blue-300">
                      {typed}
                      {!revealed && <span className="animate-pulse">▍</span>}
                    </span>
                  ) : (
                    'Click to reveal address'
                  )}
                </span>
              </span>
              {!typed && (
                <span className="text-xs text-gray-600 transition group-hover:text-blue-300">Reveal</span>
              )}
            </button>

            {revealed && (
              <div className="flex animate-[fadeIn_350ms_ease-out] flex-wrap gap-3 px-5 pb-5 pl-[4.75rem] sm:px-6 sm:pl-[5.75rem]">
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300 transition hover:border-blue-400/50 hover:bg-blue-400/[0.07] hover:text-blue-300"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <a
                  href={`mailto:${atob(EMAIL_B64)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300 transition hover:border-blue-400/50 hover:bg-blue-400/[0.07] hover:text-blue-300"
                >
                  Send email <ArrowUpRight size={13} />
                </a>
              </div>
            )}
          </div>

          {/* Social channels */}
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHover(s.id)}
                className={rowBase}
              >
                <Bar />
                <span className="font-mono text-blue-400">›</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition group-hover:border-blue-400/40 group-hover:text-blue-300">
                  <Icon size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-gray-200 sm:text-base">{s.label}</span>
                  <span className="mt-1 block text-xs text-gray-500">{s.detail}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                />
              </a>
            )
          })}

          {/* Command line */}
          <div className="flex h-12 items-center gap-2 px-5 font-mono text-xs text-gray-500 sm:px-6">
            <span className="text-blue-400">$</span>
            <span className="truncate text-gray-300">{status}</span>
            <span className="animate-pulse text-blue-400">▍</span>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
