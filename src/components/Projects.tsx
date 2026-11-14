
const projects = {
  cricnova: {
    image: '/images/cricnova-home.png',
  },
  skillbridge: {
    image: '/images/skillbridge-home.png',
  },
  printScheduler: {
    image: '/images/print-scheduler-dashboard.png',
  },
}

const techPill =
  'rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300 transition hover:border-blue-400/40 hover:text-blue-300'

function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate mx-auto max-w-7xl overflow-hidden px-6 py-28 sm:px-10 lg:px-12"
    >
      {/* Soft blue atmosphere — no visible borders */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left glow */}
        <div className="absolute -left-64 top-24 h-[480px] w-[480px] rounded-full bg-blue-600/[0.09] blur-[130px]" />

        {/* Right glow */}
        <div className="absolute -right-64 top-[900px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.08] blur-[140px]" />

        {/* Left glow */}
        <div className="absolute -left-64 top-[1900px] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[140px]" />

        {/* Right glow */}
        <div className="absolute -right-64 bottom-0 h-[480px] w-[480px] rounded-full bg-blue-500/[0.09] blur-[130px]" />
      </div>

      {/* Heading */}
      <div className="relative mb-24 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="mb-5 text-xs tracking-[0.25em] text-blue-400">
            02 / SELECTED WORK
          </p>

          <h2 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Built with
            <br />
            <span className="text-gray-500">purpose.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-8 text-gray-400 md:justify-self-end">
          Different ideas, different challenges, and three projects
          that represent my process of turning concepts into
          something functional.
        </p>
      </div>

      {/* PROJECT 01 — CRICNOVA */}
      <article className="relative mb-32">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs tracking-[0.22em] text-yellow-400">
              01 / WEB EXPERIENCE
            </p>

            <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              CricNova<span className="text-yellow-400">.</span>
            </h3>
          </div>

          <span className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.05] px-4 py-2 text-xs tracking-wider text-yellow-300">
            WEB DEVELOPMENT
          </span>
        </div>

        <a
          href="https://praveenprashathkk.github.io/CricNova/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#07152e]"
          aria-label="Visit CricNova website"
        >
          <img
            src={projects.cricnova.image}
            alt="CricNova cricket website homepage"
            className="block h-auto w-full object-cover object-top transition duration-700 group-hover:scale-[1.01]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07152e]/60 via-transparent to-transparent opacity-70" />

          <span className="absolute bottom-5 right-5 rounded-full bg-yellow-400 px-5 py-3 text-xs font-semibold text-[#07152e] transition group-hover:-translate-y-1 group-hover:bg-yellow-300">
            Visit website ↗
          </span>
        </a>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-start">
          <div>
            <h4 className="max-w-xl text-2xl font-medium leading-snug sm:text-3xl">
              Cricket, brought together in one interactive experience.
            </h4>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-gray-400">
              A cricket-themed website covering the field, formats,
              shots, deliveries, players and tournaments through
              an engaging frontend experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://praveenprashathkk.github.io/CricNova/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
              >
                Live website ↗
              </a>

              <a
                href="https://github.com/PraveenPrashathKK/CricNova"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Source code ↗
              </a>
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-8">
            <p className="mb-4 text-xs tracking-[0.2em] text-gray-500">
              TECHNOLOGY
            </p>

            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                <span key={tech} className={techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* PROJECT 02 — SKILLBRIDGE */}
      <article className="relative mb-32">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs tracking-[0.22em] text-blue-400">
              02 / COLLABORATIVE BUILD
            </p>

            <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              SkillBridge<span className="text-blue-400">.</span>
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Connecting academic learning with industry needs.
            </p>
          </div>

          <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-xs tracking-wider text-blue-300">
            HACKATHON PROJECT
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-[#0c1b35] p-2 sm:p-3">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

          <img
            src={projects.skillbridge.image}
            alt="SkillBridge application homepage"
            className="relative block h-auto w-full rounded-xl object-cover object-top"
          />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-xs tracking-[0.2em] text-blue-400">
              THE PLATFORM
            </p>

            <h4 className="max-w-lg text-2xl font-medium leading-snug sm:text-3xl">
              Bridging the gap between skills and opportunities.
            </h4>

            <p className="mt-5 max-w-lg text-sm leading-8 text-gray-400">
              A collaborative platform designed to help students
              map their skills, identify gaps, explore learning
              roadmaps and discover career opportunities, while
              supporting recruiters and educational institutions.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs tracking-[0.2em] text-gray-500">
                TECHNOLOGY
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'React 19',
                  'TypeScript',
                  'Vite',
                  'Supabase',
                  'PostgreSQL',
                  'Tailwind CSS 4',
                ].map((tech) => (
                  <span key={tech} className={techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs tracking-[0.2em] text-blue-400">
              WHAT THE PLATFORM OFFERS
            </p>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'Skill mapping',
                  description: 'Skill profiles and verified competencies.',
                },
                {
                  number: '02',
                  title: 'Gap analysis',
                  description: 'Identify missing industry-relevant skills.',
                },
                {
                  number: '03',
                  title: 'Learning paths',
                  description: 'Structured roadmaps for skill development.',
                },
                {
                  number: '04',
                  title: 'Opportunities',
                  description: 'Internships and application tracking.',
                },
                {
                  number: '05',
                  title: 'Talent matching',
                  description: 'Explainable, weighted candidate matching.',
                },
              ].map((item) => (
                <div key={item.number} className="border-t border-white/10 pt-4">
                  <span className="text-xs text-blue-400">{item.number}</span>
                  <h5 className="mt-2 text-sm font-medium text-white">
                    {item.title}
                  </h5>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="mb-4 text-xs tracking-[0.2em] text-gray-500">
                DESIGNED FOR FOUR STAKEHOLDERS
              </p>

              <div className="flex flex-wrap gap-2">
                {['Students', 'Recruiters', 'Colleges', 'Administrators'].map(
                  (role) => (
                    <span key={role} className={techPill}>
                      {role}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* PROJECT 03 — PRINT JOB SCHEDULER */}
      <article className="relative">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs tracking-[0.22em] text-cyan-400">
              03 / SYSTEMS & APPLICATION DEVELOPMENT
            </p>

            <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Print Job Scheduler<span className="text-cyan-400">.</span>
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Bringing order and priority to everyday print operations.
            </p>
          </div>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-xs tracking-wider text-cyan-300">
            STANDALONE PROJECT
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0c1b27] p-2 sm:p-3">
          <img
            src={projects.printScheduler.image}
            alt="Print Job Scheduler application dashboard"
            className="block h-auto w-full rounded-xl object-cover object-top"
          />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-xs tracking-[0.2em] text-cyan-400">
              THE ENGINEERING IDEA
            </p>

            <h4 className="max-w-lg text-2xl font-medium leading-snug sm:text-3xl">
              A smarter way to organise and process print requests.
            </h4>

            <p className="mt-5 max-w-lg text-sm leading-8 text-gray-400">
              A print queue management system that organises incoming
              jobs by priority. Urgent requests are processed first,
              while FIFO ordering is maintained within each priority
              level. It supports job cancellation, queue processing
              and estimated completion times.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs tracking-[0.2em] text-gray-500">
                BUILT WITH
              </p>

              <div className="flex flex-wrap gap-2">
                {['C', 'React', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS'].map(
                  (tech) => (
                    <span key={tech} className={techPill}>
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs tracking-[0.2em] text-cyan-400">
              CORE FUNCTIONALITY
            </p>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {[
                'Priority scheduling',
                'FIFO ordering',
                'Job cancellation',
                'Queue processing & ETA',
              ].map((feature, index) => (
                <div key={feature} className="border-t border-white/10 pt-4">
                  <span className="text-xs text-cyan-400">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="mb-5 text-xs tracking-[0.2em] text-cyan-400">
                DATA STRUCTURES & CONCEPTS
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'Binary Min-Heap',
                  'Priority Queue',
                  'Arrays',
                  'Hash Map',
                  'Lazy Deletion',
                ].map((concept) => (
                  <span key={concept} className={techPill}>
                    {concept}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs leading-7 text-gray-500">
                Includes a native C scheduler and a React-based
                interface for managing print requests.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* End marker */}
      <div className="relative mt-28 flex items-center gap-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <span className="text-[10px] tracking-[0.3em] text-gray-600">
          
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
    </section>
  )
}

export default Projects
