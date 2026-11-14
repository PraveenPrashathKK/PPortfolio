
import { useState } from 'react'
import { User } from 'lucide-react'

/** Edit this line whenever you start learning something new. */
const CURRENTLY_LEARNING = 'Data Structures & Algorithms'

const PHOTO_SOURCES = ['profile.jpg', 'profile.jpeg', 'profile.png', 'profile.webp'].map(
  (name) => `${import.meta.env.BASE_URL}images/${name}`,
)

const focusItems = [
  {
    label: 'Building',
    number: '01',
    title: 'Web development and project work.',
    description:
      'Building web applications and hackathon projects to apply what I learn in practice.',
    tags: ['Web Development', 'Projects'],
  },
  {
    label: 'Learning',
    number: '02',
    title: 'Programming and CS fundamentals.',
    description:
      'Strengthening data structures, algorithms, databases and core software concepts.',
    tags: ['Programming', 'CS Fundamentals'],
  },
  {
    label: 'Exploring',
    number: '03',
    title: 'Areas of computer science.',
    description:
      'Trying out different areas of computer science to find the specialisation that fits.',
    tags: ['Software Engineering', 'Problem Solving'],
  },
]

function Hero() {
  const [activeFocus, setActiveFocus] = useState(0)
  const [photoIdx, setPhotoIdx] = useState(0)
  const activeItem = focusItems[activeFocus]

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="parallax absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div style={{ ["--pd" as string]: "20px" }} className="parallax absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">

        {/* Left: Introduction */}
        <div>
          {/* Profile picture: put your photo in public/images/ named profile.jpg (or .jpeg / .png / .webp) */}
          <div className="hero-in relative mb-8 h-28 w-28">
            <div className="orbit-slow absolute -inset-2 rounded-full border border-dashed border-blue-500/40 animate-[orbit_24s_linear_infinite]" />
            <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-xl" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-blue-500/60 bg-surface shadow-[0_0_40px_rgba(37,99,235,0.35)]">
              {photoIdx < PHOTO_SOURCES.length ? (
                <img
                  src={PHOTO_SOURCES[photoIdx]}
                  alt="Praveen"
                  onError={() => setPhotoIdx((i) => i + 1)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <User className="h-10 w-10 text-blue-400/70" />
              )}
            </div>
          </div>

          <div style={{ ["--d" as string]: "100ms" }} className="hero-in mb-9 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs tracking-[0.16em] text-gray-400">
                COMPUTER SCIENCE STUDENT
              </span>
            </div>

            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/25 bg-blue-500/[0.06] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              <span className="text-xs text-gray-400">
                Currently learning{' '}
                <span className="font-medium text-blue-300">{CURRENTLY_LEARNING}</span>
              </span>
            </div>
          </div>

          <p style={{ ["--d" as string]: "200ms" }} className="hero-in mb-5 text-lg text-gray-400">
            Hello, I'm Praveen Prashath.
          </p>

          <h1 style={{ ["--d" as string]: "300ms" }} className="hero-in text-6xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-7xl lg:text-[5.8rem]">
            Aspiring
            <br />
            Engineer<span className="text-blue-500">.</span>
          </h1>

          <p style={{ ["--d" as string]: "450ms" }} className="hero-in mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Computer Science student at Amrita Vishwa Vidyapeetham,
            Chennai, interested in software engineering and
            web development.
          </p>

          <div style={{ ["--d" as string]: "600ms" }} className="hero-in mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium text-[#fff] transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore my work
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-gray-300 transition hover:border-white/40 hover:text-white"
            >
              More about me
            </a>
          </div>
        </div>

        {/* Right: Interactive focus panel */}
        <div style={{ ["--d" as string]: "400ms" }} className="hero-in relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-blue-500/[0.06] blur-3xl" />

          <div className="relative rounded-[1.75rem] border border-white/10 bg-surface p-7 shadow-2xl shadow-black/20 sm:p-9">

            {/* Panel heading */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-xs tracking-[0.2em] text-gray-500">
                CURRENT FOCUS
              </span>

              <span className="font-mono text-xs text-blue-400">
                {activeItem.number} / 03
              </span>
            </div>

            {/* Clearly visible selector */}
            <div className="pt-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium tracking-[0.15em] text-gray-400">
                  FOCUS AREAS
                </p>
                <span className="text-xs text-blue-400">
                  SELECT A FOCUS
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-page p-1.5">
                {focusItems.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    aria-pressed={activeFocus === index}
                    onClick={() => setActiveFocus(index)}
                    className={`rounded-lg px-2 py-3 text-xs font-medium transition-all duration-200 ${
                      activeFocus === index
                        ? 'bg-blue-600 text-[#fff] shadow-lg shadow-blue-900/30'
                        : 'text-gray-500 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic content */}
            <div
              aria-live="polite"
              className="min-h-[250px] py-10"
            >
              <p className="text-xs tracking-[0.2em] text-blue-400">
                FOCUS / {activeItem.number}
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight">
                {activeItem.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                {activeItem.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {activeItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3 py-1.5 text-xs text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex gap-2 border-t border-white/10 pt-6">
              {focusItems.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  aria-label={`Show ${item.label} focus`}
                  aria-pressed={activeFocus === index}
                  onClick={() => setActiveFocus(index)}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    activeFocus === index
                      ? 'bg-blue-500'
                      : 'bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
