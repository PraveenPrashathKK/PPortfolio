import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Hero from './components/Hero'
function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-[#f1f5f9]">
      {/* Navigation */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-xl font-bold tracking-tight">
          praveen<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#journey" className="transition hover:text-white">
  Journey
</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500/10"
        >
          Let's connect <span className="ml-1 text-blue-400">↗</span>
        </a>
      </header>

      {/* Hero */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />

      <footer className="mx-auto max-w-6xl border-t border-white/10 px-6 py-6 text-xs text-gray-600">
        © 2026 Praveen. Built with curiosity.
      </footer>
    </main>
  )
}

export default App
