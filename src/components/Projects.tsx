import { useState } from 'react'
import { useTheme } from '../theme'
import Reveal from './Reveal'
import type { KeyboardEvent, MouseEvent } from 'react'

type Group = { label: string; items: string[] }

type Project = {
  id: string
  number: string
  name: string
  category: string
  accent: string
  accentLight: string
  tagline: string
  description: string
  image: string
  alt: string
  url?: string
  repo?: string
  note?: string
  features: { title: string; text?: string }[]
  stack: Group[]
}

const projects: Project[] = [
  {
    id: 'cricnova',
    number: '01',
    name: 'CricNova',
    category: 'Web Development',
    accent: '#FACC15',
    accentLight: '#CA8A04',
    tagline: 'Cricket, brought together in one interactive experience.',
    description:
      'A cricket-themed website covering the field, formats, shots, deliveries, players and tournaments through an engaging frontend experience.',
    image: `${import.meta.env.BASE_URL}images/cricnova-home.png`,
    alt: 'CricNova cricket website homepage',
    url: 'https://praveenprashathkk.github.io/CricNova/',
    repo: 'https://github.com/PraveenPrashathKK/CricNova',
    features: [
      { title: 'Field & positions' },
      { title: 'Match formats' },
      { title: 'Shots' },
      { title: 'Deliveries' },
      { title: 'Players' },
      { title: 'Tournaments' },
    ],
    stack: [{ label: 'Technology', items: ['HTML', 'CSS', 'JavaScript'] }],
  },
  {
    id: 'skillbridge',
    number: '02',
    name: 'SkillBridge',
    category: 'Hackathon Project',
    accent: '#60A5FA',
    accentLight: '#2563EB',
    tagline: 'Connecting academic learning with industry needs.',
    description:
      'A collaborative platform that helps students map their skills, identify gaps, explore learning roadmaps and discover career opportunities, while supporting recruiters and educational institutions.',
    image: `${import.meta.env.BASE_URL}images/skillbridge-home.png`,
    alt: 'SkillBridge application homepage',
    features: [
      { title: 'Skill mapping', text: 'Skill profiles and verified competencies.' },
      { title: 'Gap analysis', text: 'Identify missing industry-relevant skills.' },
      { title: 'Learning paths', text: 'Structured roadmaps for skill development.' },
      { title: 'Opportunities', text: 'Internships and application tracking.' },
      { title: 'Talent matching', text: 'Explainable, weighted candidate matching.' },
    ],
    stack: [
      {
        label: 'Technology',
        items: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS 4'],
      },
      {
        label: 'Designed for',
        items: ['Students', 'Recruiters', 'Colleges', 'Administrators'],
      },
    ],
  },
  {
    id: 'print-scheduler',
    number: '03',
    name: 'Print Job Scheduler',
    category: 'Systems & Application',
    accent: '#22D3EE',
    accentLight: '#0891B2',
    tagline: 'Priority-based print queue management.',
    description:
      'A print queue management system that organises incoming jobs by priority. Urgent requests are processed first, while FIFO ordering is maintained within each priority level. It supports job cancellation, queue processing and estimated completion times.',
    image: `${import.meta.env.BASE_URL}images/print-scheduler-dashboard.png`,
    alt: 'Print Job Scheduler application dashboard',
    note: 'Includes a native C scheduler and a React-based interface for managing print requests.',
    features: [
      { title: 'Priority scheduling' },
      { title: 'FIFO ordering' },
      { title: 'Job cancellation' },
      { title: 'Queue processing & ETA' },
    ],
    stack: [
      {
        label: 'Built with',
        items: ['C', 'React', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS'],
      },
      {
        label: 'Data structures & concepts',
        items: ['Binary Min-Heap', 'Priority Queue', 'Arrays', 'Hash Map', 'Lazy Deletion'],
      },
    ],
  },
]

const tabs = ['Overview', 'Features', 'Stack'] as const
type Tab = (typeof tabs)[number]

function Projects() {
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState<Tab>('Overview')
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 })

  const { theme } = useTheme()
  const ac = (p: Project) => (theme === 'light' ? p.accentLight : p.accent)
  const project = projects[active]
  const accent = ac(project)

  function select(index: number) {
    setActive(index)
    setTab('Overview')
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      select((active + 1) % projects.length)
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      select((active - 1 + projects.length) % projects.length)
    }
  }

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    setTilt({ x: (0.5 - py) * 8, y: (px - 0.5) * 10, gx: px * 100, gy: py * 100 })
  }

  const frame = (
    <div
      className="relative aspect-[1896/870] w-full overflow-hidden bg-page"
    >
      {projects.map((p, i) => (
        <img
          key={p.id}
          src={p.image}
          alt={p.alt}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ${
            i === active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
          }`}
        />
      ))}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.10), transparent 45%)`,
        }}
      />
    </div>
  )

  return (
    <div className="relative isolate">
      {/* Accent glow that moves sides as the project changes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute top-24 h-[30rem] w-[30rem] rounded-full blur-[130px] transition-all duration-1000 ease-in-out"
          style={{
            left: active % 2 === 0 ? '-10rem' : 'calc(100% - 20rem)',
            backgroundColor: accent,
            opacity: 0.1,
          }}
        />
      </div>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12"
      >
        {/* Heading */}
        <Reveal className="mb-14 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.25em] text-blue-400">
              02 / PROJECTS
            </p>
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Selected <span className="text-gray-500">work.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-8 text-gray-400 md:justify-self-end">
            A web experience, a hackathon platform and a systems-focused
            application.
          </p>
        </Reveal>

        <Reveal delay={100} className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Project selector */}
          <div
            role="tablist"
            aria-label="Projects"
            onKeyDown={onKey}
            className="-mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {projects.map((p, i) => {
              const on = i === active
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(i)}
                  className={`group relative min-w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 lg:min-w-0 ${
                    on
                      ? 'border-white/20 bg-white/[0.05]'
                      : 'border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[0.025]'
                  }`}
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[3px] origin-top transition-transform duration-500"
                    style={{
                      backgroundColor: ac(p),
                      transform: on ? 'scaleY(1)' : 'scaleY(0)',
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs transition-colors"
                      style={{ color: on ? ac(p) : '#6b7280' }}
                    >
                      {p.number}
                    </span>
                    <span
                      className={`text-sm transition-all duration-300 ${
                        on ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                      }`}
                      style={{ color: ac(p) }}
                    >
                      →
                    </span>
                  </div>
                  <p className={`mt-4 text-lg font-medium ${on ? 'text-white' : 'text-gray-300'}`}>
                    {p.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{p.category}</p>
                </button>
              )
            })}

            <p className="hidden px-1 pt-3 text-[11px] tracking-[0.18em] text-gray-600 lg:block">
              USE ↑ ↓ TO BROWSE
            </p>
          </div>

          {/* Viewer */}
          <div className="min-w-0">
            <div style={{ perspective: '1400px' }}>
              <div
                onMouseMove={onMove}
                onMouseLeave={() => setTilt({ x: 0, y: 0, gx: 50, gy: 50 })}
                className="overflow-hidden rounded-2xl border border-white/10 bg-surface transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  boxShadow: `0 30px 80px -30px ${accent}55`,
                }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="min-w-0 flex-1 truncate rounded-md bg-page px-3 py-1.5 text-center text-[11px] text-gray-500">
                    {project.url ? project.url.replace('https://', '') : project.name.toLowerCase().replace(/\s+/g, '-') + '.local'}
                  </div>
                  <span className="hidden font-mono text-[11px] text-gray-600 sm:block">
                    {project.number} / 03
                  </span>
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="group relative block"
                  >
                    {frame}
                    <span
                      className="absolute bottom-4 right-4 rounded-full px-5 py-2.5 text-xs font-semibold text-page opacity-0 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-100"
                      style={{ backgroundColor: accent }}
                    >
                      Visit website ↗
                    </span>
                  </a>
                ) : (
                  frame
                )}
              </div>
            </div>

            {/* Details */}
            <div className="mt-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.name}
                    <span style={{ color: accent }}>.</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">{project.tagline}</p>
                </div>

                <div className="flex gap-5 text-sm">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium transition hover:brightness-125"
                      style={{ color: accent }}
                    >
                      Live website ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Source code ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-7 flex gap-1 border-b border-white/10">
                {tabs.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    aria-pressed={tab === t}
                    className={`relative px-4 py-3 text-xs tracking-[0.16em] transition-colors ${
                      tab === t ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {t.toUpperCase()}
                    <span
                      className="absolute inset-x-0 -bottom-px h-[2px] transition-transform duration-300"
                      style={{
                        backgroundColor: accent,
                        transform: tab === t ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                  </button>
                ))}
              </div>

              <div
                key={`${project.id}-${tab}`}
                className="min-h-[170px] pt-7 animate-[fadeIn_350ms_ease-out]"
              >
                {tab === 'Overview' && (
                  <div className="max-w-3xl">
                    <p className="text-sm leading-8 text-gray-400">{project.description}</p>
                    {project.note && (
                      <p className="mt-4 text-xs leading-7 text-gray-500">{project.note}</p>
                    )}
                  </div>
                )}

                {tab === 'Features' && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {project.features.map((f, i) => (
                      <div
                        key={f.title}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-0.5 hover:border-white/25"
                      >
                        <span className="font-mono text-xs" style={{ color: accent }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="mt-2 text-sm font-medium text-white">{f.title}</p>
                        {f.text && (
                          <p className="mt-1.5 text-xs leading-6 text-gray-500">{f.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'Stack' && (
                  <div className="space-y-6">
                    {project.stack.map((g) => (
                      <div key={g.label}>
                        <p className="mb-3 text-[11px] tracking-[0.2em] text-gray-500">
                          {g.label.toUpperCase()}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {g.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-gray-300 transition hover:text-white"
                              style={{ borderColor: undefined }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

export default Projects
