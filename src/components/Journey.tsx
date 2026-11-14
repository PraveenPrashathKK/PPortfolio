
import { useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react"

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
      "The starting point. Building an understanding of computing, mathematics, and the engineering principles behind technology.",
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
      "Moving deeper into computer science. Mathematics, object-oriented thinking, and interface development became a bigger part of the learning process.",
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
      "A stronger focus on core computer science — from algorithms and programming to databases, digital systems, and optimization.",
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

function Journey() {
  const [activeSemester, setActiveSemester] = useState(0)
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const semester = semesters[activeSemester]

  const selectSemester = (index: number) => {
    setActiveSemester(index)
    setExpandedCourse(null)
  }
  
  return (
    <section id="journey" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-48 top-32 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[130px]" />

      <div className="relative">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <p className="text-xs font-medium tracking-[0.24em] text-blue-400">
              THE ACADEMIC RECORD
            </p>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            My journey<span className="text-blue-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Three semesters of learning, exploring computer science, and
            building the foundations for what comes next.
          </p>
        </div>

        {/* Academic overview */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group relative overflow-hidden border-l border-blue-400/60 bg-white/[0.025] px-6 py-6">
            <p className="text-[10px] tracking-[0.2em] text-gray-500">
              SEMESTER 01 · SGPA
            </p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-4xl font-semibold tracking-tight tabular-nums">
                8.97
              </span>
              <span className="text-xs text-emerald-400">Completed</span>
            </div>
          </div>

          <div className="group relative overflow-hidden border-l border-blue-400/40 bg-white/[0.025] px-6 py-6">
            <p className="text-[10px] tracking-[0.2em] text-gray-500">
              SEMESTER 02 · SGPA
            </p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-4xl font-semibold tracking-tight tabular-nums">
                8.88
              </span>
              <span className="text-xs text-emerald-400">Completed</span>
            </div>
          </div>

          <div className="group relative overflow-hidden border-l border-blue-400/60 bg-blue-500/[0.055] px-6 py-6">
            <p className="text-[10px] tracking-[0.2em] text-gray-500">
              CURRENT CGPA
            </p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-4xl font-semibold tracking-tight tabular-nums">
                8.92
              </span>
              <span className="text-xs text-blue-300">After Semester 02</span>
            </div>
          </div>
        </div>

        {/* Main academic explorer */}
        <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          {/* Semester navigation */}
          <aside>
            <div className="mb-5 flex items-center justify-between lg:block">
              <p className="text-[10px] tracking-[0.2em] text-gray-500">
                ACADEMIC PROGRESSION
              </p>
              <span className="text-[10px] text-gray-600">
                2023 CURRICULUM
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {semesters.map((item, index) => {
                const isActive = activeSemester === index

                return (
                  <button
                    key={item.number}
                    onClick={() => selectSemester(index)}
                    className={`group relative flex min-w-[145px] flex-1 items-center gap-4 border px-4 py-4 text-left transition-all duration-300 lg:min-w-0 lg:flex-none ${
                      isActive
                        ? "border-blue-400/30 bg-blue-500/[0.09]"
                        : "border-transparent bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.035]"
                    }`}
                  >
                    <span
                      className={`text-2xl font-light tabular-nums transition-colors ${
                        isActive ? "text-blue-300" : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`whitespace-nowrap text-[10px] tracking-[0.12em] ${
                          isActive ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`mt-1 text-[10px] ${
                          item.sgpa ? "text-emerald-400/80" : "text-amber-400/80"
                        }`}
                      >
                        {item.sgpa ? "Completed" : "Result awaited"}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className={`shrink-0 transition-all ${
                        isActive
                          ? "translate-x-0 text-blue-300 opacity-100"
                          : "-translate-x-1 text-gray-600 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />

                    {isActive && (
                      <span className="absolute bottom-0 left-0 top-0 w-[2px] bg-blue-400" />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="mt-8 hidden border-t border-white/[0.08] pt-6 lg:block">
              <div className="flex items-center gap-2 text-gray-500">
                <GraduationCap size={16} />
                <span className="text-[10px] tracking-[0.15em]">
                  CSE · AMRITA
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-gray-600">
                A record of the subjects, concepts, and foundations explored
                throughout my degree.
              </p>
            </div>
          </aside>

          {/* Selected semester content */}
          <div className="min-w-0">
            <div
              key={semester.number}
              className="animate-[journey-enter_450ms_ease-out_both]"
            >
              {/* Semester heading */}
              <div className="border-b border-white/10 pb-8">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] tracking-[0.2em] text-blue-400">
                    / {semester.label}
                  </span>

                  <span
                    className={`inline-flex items-center gap-2 text-[10px] tracking-[0.12em] ${
                      semester.sgpa
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        semester.sgpa ? "bg-emerald-400" : "bg-amber-400"
                      }`}
                    />
                    {semester.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Semester {semester.number}
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                      {semester.focus}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-[10px] tracking-[0.18em] text-gray-500">
                      {semester.sgpa ? "SEMESTER SGPA" : "ACADEMIC RESULT"}
                    </p>
                    <p className="mt-1 text-3xl font-medium tabular-nums">
                      {semester.sgpa ?? "—"}
                    </p>
                    {!semester.sgpa && (
                      <p className="mt-1 text-[10px] text-amber-400">
                        Yet to be published
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400">
                  {semester.description}
                </p>
              </div>

              {/* Course list */}
              <div className="pt-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen size={15} className="text-blue-400" />
                    <p className="text-[10px] tracking-[0.2em] text-gray-400">
                      COURSEWORK
                    </p>
                  </div>
                  <span className="text-[10px] tabular-nums text-gray-600">
                    {String(semester.courses.length).padStart(2, "0")} COURSES
                  </span>
                </div>

                <div className="border-t border-white/10">
                  {semester.courses.map((course, index) => {
                    const isExpanded = expandedCourse === course.code

                    return (
                      <div
                        key={course.code}
                        className={`border-b border-white/[0.08] transition-colors duration-300 ${
                          isExpanded ? "bg-white/[0.025]" : ""
                        }`}
                      >
                        <button
                          onClick={() =>
                            setExpandedCourse(
                              isExpanded ? null : course.code
                            )
                          }
                          aria-expanded={isExpanded}
                          className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                        >
                          <span className="w-6 shrink-0 text-xs tabular-nums text-gray-600">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-medium text-gray-200 transition-colors group-hover:text-blue-300 sm:text-base">
                              {course.name}
                            </h4>
                            <p className="mt-1.5 text-[10px] tracking-[0.08em] text-gray-600">
                              {course.code}
                              <span className="mx-2 text-gray-700">/</span>
                              {course.credits} CREDITS
                            </p>
                          </div>

                          <span
                            className={`hidden text-[10px] tracking-[0.12em] transition-colors sm:block ${
                              isExpanded ? "text-blue-300" : "text-gray-600"
                            }`}
                          >
                            {isExpanded ? "CLOSE" : "EXPLORE"}
                          </span>

                          <ChevronDown
                            size={17}
                            className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                              isExpanded
                                ? "rotate-180 text-blue-300"
                                : "group-hover:text-gray-300"
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pb-6 pl-10 sm:pl-12">
                              <div className="mb-3 flex items-center gap-2">
                                <Layers3
                                  size={13}
                                  className="text-blue-400"
                                />
                                <p className="text-[10px] tracking-[0.16em] text-gray-500">
                                  KEY TOPICS
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {course.topics.map((topic) => (
                                  <span
                                    key={topic}
                                    className="border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-xs leading-5 text-gray-400"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Semester footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Sparkles size={14} className="text-blue-400/70" />
                  <span className="text-[10px] tracking-[0.12em]">
                    {semester.courses.length} SUBJECTS · {semester.courses.reduce(
                      (sum, course) => sum + course.credits,
                      0
                    )} CREDITS
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] tracking-[0.12em] text-gray-500">
                  {activeSemester < semesters.length - 1 ? (
                    <>
                      NEXT SEMESTER
                      <ArrowDownRight size={14} />
                    </>
                  ) : (
                    <>
                      LATEST COMPLETED SEMESTER
                      <Check size={14} className="text-blue-400" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom academic note */}
        <div className="mt-20 border-t border-white/[0.08] pt-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-gray-500">
              
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes journey-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Journey
