
import { useState } from "react"
import {
  Code2,
  PanelsTopLeft,
  Database,
  Layers3,
  Wrench,
  ArrowUpRight,
  Network,
  Crosshair,
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

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
  position: { left: string; top: string }
}

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Programming Languages",
    shortTitle: "PROGRAMMING",
    subtitle: "Logic & computation",
    icon: Code2,
    position: { left: "5%", top: "8%" },
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
    position: { left: "67%", top: "8%" },
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
    position: { left: "69%", top: "67%" },
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
    position: { left: "36%", top: "76%" },
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
    position: { left: "4%", top: "62%" },
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

const allSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({
    ...skill,
    category: group.title,
    groupNumber: group.number,
    groupIcon: group.icon,
  })),
)

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("React")
  const [activeGroup, setActiveGroup] = useState("02")

  const activeSkill =
    allSkills.find((skill) => skill.name === selectedSkill) ?? allSkills[0]

  const ActiveIcon = activeSkill.groupIcon

  const selectSkill = (skill: Skill, group: SkillGroup) => {
    setSelectedSkill(skill.name)
    setActiveGroup(group.number)
  }

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1400px] overflow-hidden px-6 py-28 sm:px-8 lg:px-12"
    >
      <style>{`
        @keyframes blueprint-flow {
          to { stroke-dashoffset: -34; }
        }

        @keyframes blueprint-pulse {
          0%, 100% { opacity: .35; transform: scale(.92); }
          50% { opacity: .9; transform: scale(1.08); }
        }

        @keyframes blueprint-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes blueprint-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes connection-glow {
          0%, 100% { opacity: .35; }
          50% { opacity: .9; }
        }

        .blueprint-flow {
          stroke-dasharray: 5 9;
          animation: blueprint-flow 5s linear infinite;
        }

        .blueprint-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: blueprint-pulse 3s ease-in-out infinite;
        }

        .blueprint-enter {
          animation: blueprint-enter .4s ease both;
        }

        .blueprint-orbit {
          transform-origin: center;
          animation: blueprint-orbit 35s linear infinite;
        }

        .connection-active {
          animation: connection-glow 1.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .blueprint-flow,
          .blueprint-pulse,
          .blueprint-orbit,
          .blueprint-enter,
          .connection-active {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-40 h-[500px] w-[500px] rounded-full bg-blue-600/[0.055] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-500/[0.045] blur-[140px]"
      />

      {/* Section heading */}
      <div className="relative mb-14 grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[11px] tracking-[0.25em] text-blue-400">
            <span className="h-px w-8 bg-blue-500" />
            03 / THE SKILL BLUEPRINT
          </p>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-gray-100 sm:text-5xl lg:text-6xl">
            The tools behind
            <br />
            <span className="text-gray-500">the thinking.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-gray-400 md:justify-self-end">
          A closer look at the technologies and concepts shaping the way I
          learn, build and solve problems. Select any component to explore
          where I stand with it.
        </p>
      </div>

      {/* Main interactive experience */}
      <div className="relative grid gap-5 xl:grid-cols-[1.7fr_0.72fr]">
        {/* Circuit workspace */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.10] bg-[#0d1420]">
          {/* Blueprint grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.38]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(70,130,210,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(70,130,210,0.10) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Workspace header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.09] px-6 py-5 sm:px-8">
            <div>
              <p className="text-[9px] tracking-[0.24em] text-gray-500">
                ENGINEERING OVERVIEW / 001
              </p>
              <p className="mt-1 text-sm text-gray-200">
                Skill architecture
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] tracking-wider text-blue-300">
              <span className="blueprint-pulse h-2 w-2 rounded-full bg-blue-400" />
              LIVE INTERACTION
            </div>
          </div>

          {/* Desktop spatial circuit */}
          <div className="relative hidden aspect-[1.36/1] min-h-[570px] lg:block">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 735"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="skillLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity=".12" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity=".8" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity=".12" />
                </linearGradient>

                <radialGradient id="skillGlow">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity=".4" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central orbit rings */}
              <circle
                cx="500"
                cy="360"
                r="112"
                fill="none"
                stroke="#3b82f6"
                strokeOpacity=".16"
                strokeDasharray="2 8"
              />

              <circle
                cx="500"
                cy="360"
                r="145"
                fill="none"
                stroke="#3b82f6"
                strokeOpacity=".10"
                strokeDasharray="3 12"
              />

              <circle
                cx="500"
                cy="360"
                r="180"
                fill="none"
                stroke="#3b82f6"
                strokeOpacity=".08"
              />

              {/* Rotating orbital detail */}
              <g className="blueprint-orbit">
                <path
                  d="M500 172 A188 188 0 0 1 688 360"
                  fill="none"
                  stroke="#60a5fa"
                  strokeOpacity=".45"
                  strokeWidth="1.5"
                  strokeDasharray="22 14 3 14"
                />
                <circle cx="500" cy="172" r="3" fill="#60a5fa" />
              </g>

              {/* Module connections */}
              {[
                "M500 360 C410 280 330 190 235 145",
                "M500 360 C590 280 675 190 765 145",
                "M500 360 C610 390 705 475 780 545",
                "M500 360 C475 455 465 555 485 620",
                "M500 360 C390 395 285 465 220 535",
              ].map((path, index) => {
                const isActive =
                  activeGroup === skillGroups[index].number

                return (
                  <path
                    key={index}
                    d={path}
                    fill="none"
                    stroke={isActive ? "#60a5fa" : "url(#skillLine)"}
                    strokeWidth={isActive ? "2.4" : "1.6"}
                    strokeOpacity={isActive ? "1" : ".8"}
                    className={
                      isActive
                        ? "blueprint-flow connection-active"
                        : "blueprint-flow"
                    }
                  />
                )
              })}

              {/* Connection endpoint nodes */}
              {[
                [235, 145],
                [765, 145],
                [780, 545],
                [485, 620],
                [220, 535],
              ].map(([x, y], index) => (
                <g key={index}>
                  <circle cx={x} cy={y} r="12" fill="url(#skillGlow)" />
                  <circle
                    cx={x}
                    cy={y}
                    r="3.5"
                    fill="#60a5fa"
                    className="blueprint-pulse"
                  />
                </g>
              ))}

              {/* Central hub */}
              <circle
                cx="500"
                cy="360"
                r="65"
                fill="#101d32"
                stroke="#3b82f6"
                strokeOpacity=".8"
                strokeWidth="1.4"
              />

              <circle
                cx="500"
                cy="360"
                r="54"
                fill="none"
                stroke="#60a5fa"
                strokeOpacity=".25"
                strokeDasharray="3 6"
              />

              <circle cx="500" cy="360" r="5" fill="#60a5fa" />

              <circle
                cx="500"
                cy="360"
                r="24"
                fill="none"
                stroke="#60a5fa"
                strokeOpacity=".15"
              />
            </svg>

            {/* Central identity hub */}
            <div className="pointer-events-none absolute left-1/2 top-[49%] z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-400/40 bg-[#101d32]/95 shadow-[0_0_55px_rgba(37,99,235,0.13)]">
              <Network size={19} className="text-blue-300" />
              <span className="mt-2 text-lg font-semibold text-white">
                P<span className="text-blue-400">.</span>
              </span>
              <span className="mt-0.5 text-[7px] tracking-[0.22em] text-gray-500">
                SKILL CORE
              </span>
            </div>

            {/* Floating skill modules */}
            {skillGroups.map((group) => {
              const GroupIcon = group.icon
              const isActive = activeGroup === group.number

              return (
                <div
                  key={group.number}
                  className={`absolute z-20 w-[245px] rounded-2xl border p-4 transition-all duration-300 ${
                    isActive
                      ? "border-blue-400/50 bg-[#14233a]/95 shadow-[0_0_35px_rgba(37,99,235,0.10)]"
                      : "border-white/[0.12] bg-[#101a29]/95 hover:border-blue-400/35"
                  }`}
                  style={{
                    left: group.position.left,
                    top: group.position.top,
                  }}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <GroupIcon
                        size={14}
                        className="shrink-0 text-blue-300"
                      />
                      <span className="truncate text-[9px] font-medium tracking-[0.16em] text-blue-300">
                        {group.shortTitle}
                      </span>
                    </div>

                    <span className="text-[9px] text-gray-600">
                      {group.number}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => {
                      const selected = selectedSkill === skill.name

                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => selectSkill(skill, group)}
                          aria-pressed={selected}
                          className={`rounded-md border px-2.5 py-1.5 text-[10px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                            selected
                              ? "border-blue-400/70 bg-blue-500/20 text-blue-100 shadow-[0_0_16px_rgba(59,130,246,0.12)]"
                              : "border-white/[0.10] bg-white/[0.025] text-gray-400 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                          }`}
                        >
                          {skill.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {/* Technical annotations */}
            <div className="pointer-events-none absolute bottom-5 left-6 flex items-center gap-2 text-[8px] tracking-[0.14em] text-gray-600">
              <Crosshair size={11} />
              INTERCONNECTED KNOWLEDGE SYSTEM
            </div>

            <div className="pointer-events-none absolute bottom-5 right-6 text-[8px] tracking-[0.14em] text-gray-600">
              FIG 03.01 / SKILL MAP
            </div>
          </div>

          {/* Mobile and tablet layout */}
          <div className="relative space-y-5 p-5 lg:hidden">
            <div className="mx-auto flex h-20 w-20 flex-col items-center justify-center rounded-full border border-blue-400/40 bg-[#101d32] shadow-[0_0_35px_rgba(37,99,235,0.12)]">
              <Network size={17} className="text-blue-300" />
              <span className="mt-1 text-sm font-semibold text-white">
                P<span className="text-blue-400">.</span>
              </span>
              <span className="text-[7px] tracking-widest text-gray-500">
                SKILL CORE
              </span>
            </div>

            <div className="mx-auto h-7 w-px bg-gradient-to-b from-blue-400/70 to-blue-400/10" />

            {skillGroups.map((group, index) => {
              const GroupIcon = group.icon
              const isActive = activeGroup === group.number

              return (
                <div
                  key={group.number}
                  className={`relative rounded-2xl border p-4 transition-all duration-300 ${
                    isActive
                      ? "border-blue-400/50 bg-[#14233a]"
                      : "border-white/[0.10] bg-[#101a29]"
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-500/[0.08] text-blue-300">
                      <GroupIcon size={16} />
                    </div>

                    <div>
                      <p className="text-[9px] tracking-[0.17em] text-blue-300">
                        MODULE {group.number}
                      </p>
                      <h3 className="mt-1 text-sm text-gray-200">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => selectSkill(skill, group)}
                        aria-pressed={selectedSkill === skill.name}
                        className={`max-w-full rounded-lg border px-3 py-2 text-xs transition-all duration-200 ${
                          selectedSkill === skill.name
                            ? "border-blue-400/60 bg-blue-500/20 text-blue-100"
                            : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-blue-400/40 hover:text-white"
                        }`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>

                  {index !== skillGroups.length - 1 && (
                    <div className="absolute -bottom-5 left-1/2 h-5 w-px bg-blue-400/25" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Workspace footer */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.09] px-6 py-4 sm:px-8">
            <p className="text-[9px] tracking-[0.14em] text-gray-600">
              SELECT A COMPONENT TO INSPECT
            </p>
            <p className="text-[9px] text-gray-500">
              05 MODULES / 15 COMPONENTS
            </p>
          </div>
        </div>

        {/* Selected skill inspection panel */}
        <aside
          key={activeSkill.name}
          aria-live="polite"
          className="blueprint-enter relative flex min-h-[470px] flex-col overflow-hidden rounded-3xl border border-blue-400/20 bg-[#101b2b] p-6 sm:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.10] blur-[85px]"
          />

          <div className="relative flex items-center justify-between">
            <p className="text-[9px] tracking-[0.22em] text-blue-300">
              COMPONENT INSPECTION
            </p>

            <span className="rounded-full border border-blue-400/20 px-3 py-1 text-[9px] text-blue-300">
              {activeSkill.groupNumber} / 05
            </span>
          </div>

          <div className="relative mt-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/[0.10] text-blue-300">
              <ActiveIcon size={24} strokeWidth={1.5} />
            </div>

            <p className="mt-8 text-[11px] text-gray-500">
              {activeSkill.category}
            </p>

            <h3 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {activeSkill.name}
              <span className="text-blue-400">.</span>
            </h3>

            <p className="mt-3 text-sm font-medium text-blue-200/80">
              {activeSkill.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="text-[10px] text-blue-200">
                {activeSkill.status}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              {activeSkill.detail}
            </p>
          </div>

          {/* Practical experience */}
          <div className="relative mt-8 border-t border-white/[0.10] pt-6">
            <p className="text-[9px] tracking-[0.2em] text-gray-500">
              WHERE IT SHOWS UP
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-300">
                {activeSkill.status.includes("Academic") ? (
                  <GraduationCap size={16} />
                ) : activeSkill.status.includes("Practis") ||
                  activeSkill.status.includes("Learning") ? (
                  <BookOpen size={16} />
                ) : (
                  <BriefcaseBusiness size={16} />
                )}
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-200">
                  {activeSkill.context}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {activeSkill.evidence}
                </p>
              </div>
            </div>
          </div>

          {/* Category connection */}
          <div className="relative mt-auto border-t border-white/[0.10] pt-5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] tracking-[0.2em] text-gray-500">
                MODULE CONNECTION
              </p>
              <ArrowUpRight size={15} className="text-blue-400" />
            </div>

            <p className="mt-3 text-sm text-gray-200">
              {activeSkill.category}
            </p>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              One part of the technical foundation I'm continuing to develop.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Skills
