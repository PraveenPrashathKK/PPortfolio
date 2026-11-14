
import { useState } from 'react'

const focusItems = [
  {
    label: 'Building',
    number: '01',
    title: 'Turning ideas into real projects.',
    description:
      'Exploring web development and learning how to turn concepts into working digital experiences.',
    tags: ['Web Development', 'Projects'],
  },
  {
    label: 'Learning',
    number: '02',
    title: 'Understanding the technology beneath.',
    description:
      'Strengthening my programming fundamentals, data structures, databases and software concepts.',
    tags: ['Programming', 'CS Fundamentals'],
  },
  {
    label: 'Exploring',
    number: '03',
    title: 'Discovering where technology takes me.',
    description:
      'Experimenting with different areas of computer science and finding the fields I want to explore further.',
    tags: ['Experimentation', 'Discovery'],
  },
]

function Hero() {
  const [activeFocus, setActiveFocus] = useState(0)
  const activeItem = focusItems[activeFocus]

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">

        {/* Left: Introduction */}
        <div>
          <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-xs tracking-[0.16em] text-gray-400">
              COMPUTER SCIENCE STUDENT
            </span>
          </div>

          <p className="mb-5 text-lg text-gray-400">
            Hello, I'm Praveen.
          </p>

          <h1 className="text-6xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem]">
            Aspiring
            <br />
            Engineer<span className="text-blue-500">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Computer Science student at Amrita Vishwa Vidyapeetham,
            Chennai. Interested in software engineering, curious
            about technology, and always looking to build something
            meaningful.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
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

          <div className="mt-16 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-xs tracking-[0.18em] text-gray-500">
              CURIOUS BY NATURE. BUILDING BY CHOICE.
            </span>
          </div>
        </div>

        {/* Right: Interactive focus panel */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-blue-500/[0.06] blur-3xl" />

          <div className="relative rounded-[1.75rem] border border-white/10 bg-[#111722] p-7 shadow-2xl shadow-black/20 sm:p-9">

            {/* Panel heading */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-xs tracking-[0.2em] text-gray-500">
                BEYOND THE CLASSROOM
              </span>

              <span className="font-mono text-xs text-blue-400">
                {activeItem.number} / 03
              </span>
            </div>

            {/* Clearly visible selector */}
            <div className="pt-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium tracking-[0.15em] text-gray-400">
                  WHAT DRIVES ME
                </p>
                <span className="text-xs text-blue-400">
                  SELECT A FOCUS
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-[#0b0e14] p-1.5">
                {focusItems.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    aria-pressed={activeFocus === index}
                    onClick={() => setActiveFocus(index)}
                    className={`rounded-lg px-2 py-3 text-xs font-medium transition-all duration-200 ${
                      activeFocus === index
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
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
