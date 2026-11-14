
import { useState } from 'react'
import Reveal from './Reveal'

const profilePoints = [
  {
    id: '01',
    name: 'Education',
    short: 'Academics',
    title: 'B.Tech, Computer Science and Engineering.',
    description:
      "I'm pursuing Computer Science and Engineering at Amrita Vishwa Vidyapeetham, Chennai. My academic journey has introduced me to programming, algorithms, databases and the foundations of computing.",
    details: ['C', 'Java', 'Python', 'OOP', 'DBMS'],
    note: 'EDUCATION',
  },
  {
    id: '02',
    name: 'Projects',
    short: 'Work',
    title: 'Web projects and a hackathon build.',
    description:
      "I've explored development by working on CricNova, a cricket-themed web experience, and SkillBridge, a hackathon project. These experiences have made me curious about how complete software products come together.",
    details: ['CricNova', 'SkillBridge', 'Web Development'],
    note: 'PROJECTS',
  },
  {
    id: '03',
    name: 'Interests',
    short: 'Direction',
    title: 'Software engineering and problem solving.',
    description:
      "I haven't committed to one specialisation yet. I'm interested in understanding software engineering more deeply, exploring different areas of computer science, and learning through practical work.",
    details: ['Software Engineering', 'Problem Solving', 'Experimentation'],
    note: 'INTERESTS',
  },
]

function About() {
  const [active, setActive] = useState(0)
  const selected = profilePoints[active]

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      {/* Heading */}
      <Reveal className="mb-16">
        <p className="mb-5 text-xs tracking-[0.2em] text-blue-400">
          01 / ABOUT
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          About <span className="text-gray-500">me.</span>
        </h2>
      </Reveal>

      {/* Main composition */}
      <div className="grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">

        {/* Interactive constellation */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">

          {/* Connecting lines */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="200"
              cy="200"
              r="105"
              stroke="#3B82F6"
              strokeOpacity="0.25"
              strokeDasharray="4 8"
              className="orbit-slow origin-center animate-[orbit_40s_linear_infinite]"
              style={{ transformOrigin: '200px 200px' }}
            />

            <path
              d="M200 200 L200 58 M200 200 L75 285 M200 200 L325 285"
              stroke="#3B82F6"
              strokeOpacity="0.3"
              strokeWidth="1.2"
            />

            <circle
              cx="200"
              cy="200"
              r="4"
              fill="#3B82F6"
            />
          </svg>

          {/* Central identity */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-500/30 bg-surface shadow-[0_0_70px_rgba(37,99,235,0.12)]">
            <span className="text-4xl font-semibold text-blue-400">
              P.
            </span>

            <span className="mt-1 text-[9px] tracking-[0.2em] text-gray-500">
              PRAVEEN
            </span>
          </div>

          {/* Interactive nodes */}
          {profilePoints.map((point, index) => {
            const positions = [
              'left-1/2 top-[4%] -translate-x-1/2',
              'bottom-[7%] left-[4%]',
              'bottom-[7%] right-[4%]',
            ]

            return (
              <button
                key={point.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={`absolute z-20 flex min-w-[112px] flex-col items-center gap-2 rounded-xl border px-4 py-3 transition-all duration-300 ${positions[index]} ${
                  active === index
                    ? 'scale-105 border-blue-500/50 bg-panel-2 shadow-[0_0_30px_rgba(37,99,235,0.12)]'
                    : 'border-white/10 bg-surface hover:border-blue-500/40 hover:bg-surface-hover'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    active === index
                      ? 'bg-blue-400 shadow-[0_0_12px_#3B82F6]'
                      : 'bg-gray-600'
                  }`}
                />

                <span
                  className={`text-xs font-medium ${
                    active === index ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {point.name}
                </span>

                <span className="text-[9px] text-gray-500">
                  {point.id}
                </span>
              </button>
            )
          })}

        </div>

        {/* Dynamic profile information */}
        <div className="min-h-[350px] border-l border-white/10 pl-7 sm:pl-12">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.2em] text-blue-400">
              {selected.note}
            </span>

            <span className="font-mono text-xs text-gray-500">
              {selected.id} / 03
            </span>
          </div>

          <div
            key={selected.id}
            className="animate-[fadeIn_350ms_ease-out]"
          >
            <h3 className="mt-10 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {selected.title}
            </h3>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
              {selected.description}
            </p>

            <div className="mt-10">
              <p className="mb-4 text-[10px] tracking-[0.2em] text-gray-500">
                {selected.id === '01'
                  ? 'AREAS EXPLORED'
                  : selected.id === '02'
                    ? 'PROJECTS & EXPERIENCE'
                    : 'AREAS OF INTEREST'}
              </p>

              <div className="flex flex-wrap gap-2">
                {selected.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-5">
            <span className="text-xs text-gray-600">
              EXPLORE
            </span>

            {profilePoints.map((point, index) => (
              <button
                key={point.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={`text-xs transition-colors ${
                  active === index
                    ? 'text-blue-400'
                    : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                {point.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
