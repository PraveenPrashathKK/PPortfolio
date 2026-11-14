import { useState } from 'react'
import Reveal from './Reveal'
import { Code2, PanelsTopLeft, Database, Layers3, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import LeetCodeTracker from './LeetCodeTracker'

type Skill = {
  name: string
  description: string
  detail: string
  status: string
  context: string
  evidence: string
}

type SkillGroup = {
  number: string
  title: string
  shortTitle: string
  subtitle: string
  icon: LucideIcon
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Programming Languages",
    shortTitle: "PROGRAMMING",
    subtitle: "Logic & computation",
    icon: Code2,
    skills: [
      {
        name: "C",
        description: "Systems programming fundamentals",
        detail:
          "Worked with arrays, pointers, structures, functions and memory concepts. Implemented a priority-based print scheduler using a binary min-heap.",
        status: "Hands-on project experience",
        context: "Print Job Scheduler",
        evidence:
          "Implemented the native C scheduler, heap operations and job processing logic.",
      },
      {
        name: "Java",
        description: "Object-oriented programming",
        detail:
          "Practised classes, objects, inheritance, encapsulation, methods and problem-solving through programming exercises.",
        status: "Practising",
        context: "Programming practice",
        evidence:
          "Building familiarity with object-oriented programming and Java fundamentals.",
      },
      {
        name: "Python",
        description: "General-purpose programming",
        detail:
          "Used Python to practise programming fundamentals, develop logical solutions and work through computational problems.",
        status: "Practising",
        context: "Programming practice",
        evidence:
          "Exploring core language features and improving problem-solving ability.",
      },
    ],
  },
  {
    number: "02",
    title: "Web Technologies",
    shortTitle: "WEB SYSTEMS",
    subtitle: "Interfaces & experiences",
    icon: PanelsTopLeft,
    skills: [
      {
        name: "HTML",
        description: "Web structure",
        detail:
          "Used semantic HTML to structure pages and build the content sections of a cricket-themed website.",
        status: "Project experience",
        context: "CricNova",
        evidence:
          "Built the page structure and content sections for the live website.",
      },
      {
        name: "CSS",
        description: "Responsive styling & visual design",
        detail:
          "Worked with layouts, colours, responsive styling, transitions and visual effects to create a consistent website experience.",
        status: "Project experience",
        context: "CricNova",
        evidence:
          "Designed and styled the website interface, layouts and visual elements.",
      },
      {
        name: "React",
        description: "Component-based interfaces",
        detail:
          "Building interfaces using reusable components, props, state and hooks. Exploring how larger applications are organised.",
        status: "Hands-on project experience",
        context: "Portfolio & team projects",
        evidence:
          "Working with React and TypeScript in the portfolio and project interfaces.",
      },
    ],
  },
  {
    number: "03",
    title: "Databases",
    shortTitle: "DATA SYSTEMS",
    subtitle: "Storage & information",
    icon: Database,
    skills: [
      {
        name: "SQL",
        description: "Relational queries",
        detail:
          "Practised querying relational databases, filtering records, joining tables and understanding database operations.",
        status: "Practising",
        context: "Database learning",
        evidence:
          "Working with relational queries and database concepts.",
      },
      {
        name: "MySQL",
        description: "Relational database management",
        detail:
          "Studied relational database concepts and practised working with structured data using SQL and MySQL.",
        status: "Academic & practical exposure",
        context: "Database learning",
        evidence:
          "Learning relational structures, queries and database management.",
      },
      {
        name: "Supabase",
        description: "Backend platform",
        detail:
          "Explored authentication and PostgreSQL-backed data while working with a full-stack collaborative application.",
        status: "Project exposure",
        context: "SkillBridge",
        evidence:
          "Worked with a React application integrated with Supabase services.",
      },
    ],
  },
  {
    number: "04",
    title: "Core Computer Science",
    shortTitle: "CS FOUNDATIONS",
    subtitle: "Concepts & problem solving",
    icon: Layers3,
    skills: [
      {
        name: "OOP",
        description: "Object-oriented concepts",
        detail:
          "Studied encapsulation, inheritance, abstraction and polymorphism, and practised applying these concepts in programming.",
        status: "Academic foundation",
        context: "Computer Science",
        evidence:
          "Learning object-oriented design and applying its principles through code.",
      },
      {
        name: "Data Structures & Algorithms",
        description: "Problem solving and efficiency",
        detail:
          "Studied arrays, linked structures, stacks, queues, trees, heaps, searching, sorting and algorithmic complexity.",
        status: "Learning & practising",
        context: "Print Job Scheduler",
        evidence:
          "Applied binary min-heaps, priority queues, arrays and queue-ordering logic in a project.",
      },
      {
        name: "DBMS",
        description: "Database management",
        detail:
          "Studied storage structures, file organisation, indexing, hashing, transactions and serializability.",
        status: "Academic foundation",
        context: "Database learning",
        evidence:
          "Building an understanding of how database systems organise, retrieve and manage information.",
      },
    ],
  },
  {
    number: "05",
    title: "Tools & Platforms",
    shortTitle: "DEVELOPER TOOLS",
    subtitle: "The working environment",
    icon: Wrench,
    skills: [
      {
        name: "VS Code",
        description: "Development environment",
        detail:
          "Use Visual Studio Code to write, organise, debug and manage code across programming and web development projects.",
        status: "Regularly used",
        context: "Development workflow",
        evidence:
          "Used throughout the portfolio and other project development.",
      },
      {
        name: "GitHub",
        description: "Version control & collaboration",
        detail:
          "Use GitHub to host repositories, manage project code and share development work.",
        status: "Hands-on experience",
        context: "Project development",
        evidence:
          "Maintaining project repositories and publishing CricNova.",
      },
      {
        name: "MATLAB",
        description: "Technical computing",
        detail:
          "Used MATLAB for numerical methods, mathematical computation and engineering-related problem solving.",
        status: "Academic exposure",
        context: "Engineering coursework",
        evidence:
          "Practised computational methods and mathematical problem solving.",
      },
    ],
  },
]


const STEP = 360 / skillGroups.length

function Skills() {
  const n = skillGroups.length
  const [active, setActive] = useState(0)
  const [turn, setTurn] = useState(0) // cumulative steps, so the wheel always takes the short way round
  const [skillIdx, setSkillIdx] = useState(0)

  const group = skillGroups[active]
  const skill = group.skills[skillIdx]
  const HubIcon = group.icon

  function pick(i: number) {
    if (i === active) return
    let d = i - active
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    setTurn(turn + d)
    setActive(i)
    setSkillIdx(0)
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      pick((active + 1) % n)
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      pick((active - 1 + n) % n)
    }
  }

  const ease = 'transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]'

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12"
    >
      {/* Heading */}
      <Reveal className="mb-16">
        <p className="mb-5 text-xs tracking-[0.25em] text-blue-400">
          03 / SKILLS
        </p>
        <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Technical <span className="text-gray-500">skills.</span>
        </h2>
      </Reveal>

      <div className="grid items-center gap-14 lg:grid-cols-[430px_1fr] lg:gap-20">
        {/* Skill wheel */}
        <div
          role="tablist"
          aria-label="Skill categories"
          onKeyDown={onKey}
          className="relative mx-auto h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]"
        >
          {/* Rotating wheel */}
          <div
            className={`absolute inset-0 ${ease}`}
            style={{ transform: `rotate(${-turn * STEP}deg)` }}
          >
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-white">
              <circle cx="200" cy="200" r="172" fill="none" stroke="#3B82F6" strokeOpacity="0.28" strokeDasharray="3 7" />
              <circle cx="200" cy="200" r="128" fill="none" stroke="currentColor" strokeOpacity="0.06" />
              <circle cx="200" cy="200" r="96" fill="none" stroke="currentColor" strokeOpacity="0.05" />
              {Array.from({ length: 60 }).map((_, i) => {
                const a = (i * 6 * Math.PI) / 180
                const long = i % 5 === 0
                const r1 = long ? 186 : 190
                return (
                  <line
                    key={i}
                    x1={200 + Math.cos(a) * r1}
                    y1={200 + Math.sin(a) * r1}
                    x2={200 + Math.cos(a) * 196}
                    y2={200 + Math.sin(a) * 196}
                    stroke="currentColor"
                    strokeOpacity={long ? 0.22 : 0.09}
                  />
                )
              })}
            </svg>

            {skillGroups.map((g, i) => {
              const on = i === active
              const Icon = g.icon
              return (
                <div
                  key={g.number}
                  className="pointer-events-none absolute inset-0"
                  style={{ transform: `rotate(${i * STEP}deg)` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div
                      className={ease}
                      style={{ transform: `rotate(${turn * STEP - i * STEP}deg)` }}
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={on}
                        aria-label={g.title}
                        title={g.title}
                        tabIndex={on ? 0 : -1}
                        onClick={() => pick(i)}
                        className={`pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 sm:h-14 sm:w-14 ${
                          on
                            ? 'scale-110 border-blue-400 bg-blue-500 text-[#fff] shadow-[0_0_32px_rgba(59,130,246,0.65)]'
                            : 'border-white/15 bg-surface text-gray-400 hover:scale-105 hover:border-blue-400/60 hover:text-blue-300'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Fixed hub */}
          <div className="absolute left-1/2 top-1/2 flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-panel/90 shadow-[0_0_60px_rgba(37,99,235,0.18)] sm:h-[150px] sm:w-[150px]">
            <div
              key={group.number}
              className="flex animate-[fadeIn_450ms_ease-out] flex-col items-center px-3 text-center"
            >
              <HubIcon className="h-6 w-6 text-blue-400" />
              <span className="mt-2 font-mono text-[11px] text-gray-500">{group.number} / 0{n}</span>
              <span className="mt-1 text-[10px] tracking-[0.18em] text-white">{group.shortTitle}</span>
            </div>
          </div>

          {/* Pointer to the active node */}
          <span className="pointer-events-none absolute -right-5 top-1/2 hidden -translate-y-1/2 text-blue-400 sm:block">◂</span>
        </div>

        {/* Detail */}
        <div key={group.number} className="animate-[fadeIn_450ms_ease-out]">
          <p className="mb-3 text-xs tracking-[0.2em] text-blue-400">
            {group.number} / {group.title.toUpperCase()}
          </p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {group.subtitle}
          </h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {group.skills.map((s, i) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setSkillIdx(i)}
                aria-pressed={i === skillIdx}
                className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                  i === skillIdx
                    ? 'border-blue-400/60 bg-blue-500/[0.08]'
                    : 'border-white/10 hover:-translate-y-0.5 hover:border-white/25'
                }`}
              >
                <p className={`text-sm font-medium ${i === skillIdx ? 'text-white' : 'text-gray-300'}`}>
                  {s.name}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-gray-500">{s.description}</p>
              </button>
            ))}
          </div>

          <div
            key={skill.name}
            className="mt-4 animate-[fadeIn_350ms_ease-out] rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-xl font-medium">{skill.name}</h4>
              <span className="rounded-full border border-blue-400/30 bg-blue-400/[0.06] px-3 py-1.5 text-[11px] tracking-wide text-blue-300">
                {skill.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-gray-400">{skill.detail}</p>
            <div className="mt-5 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-[0.5fr_1fr]">
              <div>
                <p className="mb-1.5 text-[11px] tracking-[0.2em] text-gray-500">USED IN</p>
                <p className="text-sm text-white">{skill.context}</p>
              </div>
              <div>
                <p className="mb-1.5 text-[11px] tracking-[0.2em] text-gray-500">EVIDENCE</p>
                <p className="text-sm leading-6 text-gray-400">{skill.evidence}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reveal>
        <LeetCodeTracker />
      </Reveal>
    </section>
  )
}

export default Skills
