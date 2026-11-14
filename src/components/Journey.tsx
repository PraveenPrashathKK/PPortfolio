import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { ChevronDown } from 'lucide-react'

type Course = {
  code: string
  name: string
  credits: number
  topics: string[]
}

type Semester = {
  number: string
  label: string
  sgpa: string | null
  status: string
  description: string
  focus: string
  courses: Course[]
}

const semesters: Semester[] = [
  {
    number: "01",
    label: "SEMESTER ONE",
    sgpa: "8.97",
    status: "COMPLETED",
    description:
      "An introduction to computing, mathematics and the engineering principles behind technology.",
    focus: "Foundations of computing & engineering",
    courses: [
      {
        code: "23MAT107",
        name: "Calculus",
        credits: 4,
        topics: [
          "Limits and continuity",
          "Differentiation and applications",
          "Integration techniques",
          "Multivariable calculus",
          "Vector calculus",
        ],
      },
      {
        code: "23CSE101",
        name: "Computational Problem Solving",
        credits: 4,
        topics: [
          "Computational thinking",
          "Algorithms and flowcharts",
          "Problem decomposition",
          "Python programming fundamentals",
          "Control structures and functions",
        ],
      },
      {
        code: "23EEE104",
        name: "Introduction to Electrical and Electronics Engineering",
        credits: 3,
        topics: [
          "Basic electrical quantities",
          "DC circuits and circuit laws",
          "AC fundamentals",
          "Electrical machines",
          "Electronic components and applications",
        ],
      },
      {
        code: "23EEE184",
        name: "Basic Electrical and Electronics Engineering Practice",
        credits: 1,
        topics: [
          "Electrical circuit connections",
          "Measurement instruments",
          "Basic electronic components",
          "Practical circuit experiments",
        ],
      },
      {
        code: "23CSE102",
        name: "Computer Hardware Essentials",
        credits: 2,
        topics: [
          "Computer architecture and components",
          "Hardware and software fundamentals",
          "Operating system installation",
          "Computer peripherals",
          "Introduction to embedded systems",
        ],
      },
    ],
  },
  {
    number: "02",
    label: "SEMESTER TWO",
    sgpa: "8.88",
    status: "COMPLETED",
    description:
      "A deeper move into computer science, with mathematics, object-oriented programming and interface development.",
    focus: "Programming, mathematics & interface design",
    courses: [
      {
        code: "23MAT116",
        name: "Discrete Mathematics",
        credits: 4,
        topics: [
          "Mathematical logic and proof techniques",
          "Set theory and relations",
          "Combinatorics and counting",
          "Recurrence relations",
          "Graph theory",
        ],
      },
      {
        code: "23MAT117",
        name: "Linear Algebra",
        credits: 4,
        topics: [
          "Matrices and systems of linear equations",
          "Vector spaces and subspaces",
          "Linear transformations",
          "Eigenvalues and eigenvectors",
          "Diagonalization and orthogonality",
        ],
      },
      {
        code: "23CSE111",
        name: "Object Oriented Programming",
        credits: 4,
        topics: [
          "Classes and objects",
          "Encapsulation and abstraction",
          "Inheritance and polymorphism",
          "Constructors and method overloading",
          "Exception handling",
        ],
      },
      {
        code: "23PHY115",
        name: "Modern Physics",
        credits: 3,
        topics: [
          "Quantum physics fundamentals",
          "Wave-particle duality",
          "Schrödinger equation",
          "Atomic and nuclear physics",
          "Modern physics applications",
        ],
      },
      {
        code: "23CSE113",
        name: "User Interface Design",
        credits: 3,
        topics: [
          "HTML and document structure",
          "CSS and responsive layouts",
          "JavaScript fundamentals",
          "DOM manipulation",
          "UI design principles and usability",
        ],
      },
      {
        code: "23MEE115",
        name: "Manufacturing Practice",
        credits: 1,
        topics: [
          "Workshop safety and tools",
          "Basic manufacturing processes",
          "Fitting and machining practice",
          "Fabrication techniques",
        ],
      },
    ],
  },
  {
    number: "03",
    label: "SEMESTER THREE",
    sgpa: null,
    status: "RESULT AWAITED",
    description:
      "Core computer science, covering algorithms, programming, databases, digital systems and optimization.",
    focus: "Core computer science & problem solving",
    courses: [
      {
        code: "23MAT206",
        name: "Optimization Techniques",
        credits: 4,
        topics: [
          "Unidirectional search methods",
          "Unconstrained optimization",
          "Gradient-based optimization",
          "Newton and conjugate gradient methods",
          "Constrained optimization",
        ],
      },
      {
        code: "23CSE205",
        name: "Digital Electronics",
        credits: 3,
        topics: [
          "Number systems and Boolean algebra",
          "Logic gates and minimization",
          "Combinational circuits",
          "Flip-flops and sequential circuits",
          "Counters and registers",
        ],
      },
      {
        code: "23CSE201",
        name: "Procedural Programming using C",
        credits: 4,
        topics: [
          "C programming fundamentals",
          "Functions and recursion",
          "Pointers and dynamic memory",
          "Structures and unions",
          "File handling",
        ],
      },
      {
        code: "23CSE202",
        name: "Database Management Systems",
        credits: 4,
        topics: [
          "Database architecture and storage",
          "Relational model and SQL",
          "Functional dependencies and normalization",
          "Indexing and hashing",
          "Transactions and serializability",
        ],
      },
      {
        code: "23CSE203",
        name: "Data Structures and Algorithms",
        credits: 5,
        topics: [
          "Arrays, linked lists and stacks",
          "Queues and trees",
          "Searching and sorting",
          "Graphs and graph traversal",
          "Algorithm complexity and analysis",
        ],
      },
    ],
  },
]


const totalCredits = (s: Semester) => s.courses.reduce((a, c) => a + c.credits, 0)

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen] as const
}

function Overview() {
  const [ref, seen] = useInView<HTMLDivElement>()
  const stats = [
    { label: 'SEMESTER 01 · SGPA', value: 8.97, note: 'Completed', noteColor: 'text-emerald-400' },
    { label: 'SEMESTER 02 · SGPA', value: 8.88, note: 'Completed', noteColor: 'text-emerald-400' },
    { label: 'CURRENT CGPA', value: 8.92, note: 'After Semester 02', noteColor: 'text-blue-300' },
  ]
  return (
    <div ref={ref} className="mb-20 grid gap-4 sm:grid-cols-3">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`rounded-2xl border bg-white/[0.02] p-6 ${
            i === 2 ? 'border-blue-400/30 bg-blue-500/[0.05]' : 'border-white/10'
          }`}
        >
          <p className="text-[10px] tracking-[0.2em] text-gray-500">{s.label}</p>
          <div className="mt-3 flex items-end justify-between">
            <span className="text-4xl font-display font-semibold tabular-nums tracking-tight">{s.value.toFixed(2)}</span>
            <span className={`text-xs ${s.noteColor}`}>{s.note}</span>
          </div>
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300 transition-all duration-[1400ms] ease-out"
              style={{ width: seen ? `${s.value * 10}%` : '0%', transitionDelay: `${i * 150}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function SemesterBlock({ s, index }: { s: Semester; index: number }) {
  const [ref, seen] = useInView<HTMLDivElement>()
  const [open, setOpen] = useState<string | null>(null)
  const [hover, setHover] = useState<string | null>(null)
  const done = s.status === 'COMPLETED'
  const credits = totalCredits(s)

  return (
    <div ref={ref} className="relative grid gap-5 md:grid-cols-[110px_1fr] md:gap-10">
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className={`absolute left-[124px] top-[22px] hidden h-3 w-3 rounded-full border transition-all duration-700 md:block ${
          seen
            ? 'border-blue-400 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.9)]'
            : 'border-white/25 bg-page'
        }`}
      />

      <div className="md:pt-2">
        <span
          className={`text-5xl font-display font-semibold tabular-nums transition-colors duration-700 md:text-6xl ${
            seen ? 'text-blue-400/80' : 'text-white/10'
          }`}
        >
          {s.number}
        </span>
      </div>

      <div
        className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-700 sm:p-8 ${
          seen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 40}ms` }}
      >
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-[11px] tracking-[0.2em] text-gray-500">{s.label}</p>
              <span
                className={`flex items-center gap-1.5 text-[11px] ${done ? 'text-emerald-400' : 'text-amber-400'}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                {done ? 'Completed' : 'Result awaited'}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{s.focus}</h3>
          </div>

          <div className="text-right">
            <p className="text-[10px] tracking-[0.2em] text-gray-500">SGPA</p>
            <p className="mt-1 text-3xl font-display font-semibold tabular-nums">{s.sgpa ?? '—'}</p>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">{s.description}</p>

        {/* Credit distribution */}
        <div className="mt-7">
          <div className="flex justify-between text-[11px] tracking-[0.18em] text-gray-500">
            <span>CREDIT DISTRIBUTION</span>
            <span>
              {credits} CREDITS · {s.courses.length} COURSES
            </span>
          </div>
          <div className="mt-3 flex h-2.5 gap-1">
            {s.courses.map((c) => {
              const on = hover === c.code || open === c.code
              return (
                <button
                  key={c.code}
                  type="button"
                  aria-label={`${c.name}, ${c.credits} credits`}
                  title={`${c.name} · ${c.credits} credits`}
                  onMouseEnter={() => setHover(c.code)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setOpen(open === c.code ? null : c.code)}
                  className={`rounded-full transition-all duration-300 ${
                    on ? 'scale-y-150 bg-blue-400' : 'bg-blue-500/30 hover:bg-blue-500/50'
                  }`}
                  style={{ flexGrow: c.credits, flexBasis: 0 }}
                />
              )
            })}
          </div>
        </div>

        {/* Courses */}
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {s.courses.map((c) => {
            const isOpen = open === c.code
            const lit = hover === c.code || isOpen
            return (
              <div
                key={c.code}
                onMouseEnter={() => setHover(c.code)}
                onMouseLeave={() => setHover(null)}
                className={`transition-colors duration-300 ${lit ? 'bg-white/[0.025]' : ''}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : c.code)}
                  className="flex w-full items-center gap-4 px-2 py-4 text-left sm:px-4"
                >
                  <span className="hidden w-20 shrink-0 font-mono text-[11px] text-gray-600 sm:block">
                    {c.code}
                  </span>
                  <span className={`min-w-0 flex-1 text-sm ${lit ? 'text-white' : 'text-gray-300'}`}>
                    {c.name}
                  </span>
                  <span className="shrink-0 text-xs text-gray-500">{c.credits} cr</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="grid gap-x-8 gap-y-2.5 px-2 pb-5 sm:grid-cols-2 sm:px-4 sm:pl-[6.5rem]">
                      {c.topics.map((t) => (
                        <li key={t} className="flex gap-2.5 text-xs leading-5 text-gray-400">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Journey() {
  const track = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = track.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.6 - r.top) / r.height
      setProgress(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 pb-8 pt-28">
      <Reveal className="mb-14 max-w-2xl">
        <p className="mb-5 text-xs tracking-[0.25em] text-blue-400">04 / JOURNEY</p>
        <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Academic <span className="text-gray-500">journey.</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-gray-400">
          Semester-wise coursework and results, 2023 curriculum.
        </p>
      </Reveal>

      <Overview />

      <div ref={track} className="relative space-y-10 md:space-y-14">
        {/* Timeline line + scroll fill */}
        <span aria-hidden="true" className="absolute bottom-0 left-[130px] top-0 hidden w-px bg-white/10 md:block" />
        <span
          aria-hidden="true"
          className="absolute left-[130px] top-0 hidden w-px bg-gradient-to-b from-blue-500 to-cyan-300 md:block"
          style={{ height: `${progress * 100}%` }}
        />

        {semesters.map((s, i) => (
          <SemesterBlock key={s.number} s={s} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Journey
