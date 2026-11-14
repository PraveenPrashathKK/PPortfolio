import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PointerParallax from './components/PointerParallax'
import SideDots from './components/SideDots'
import Glow from './components/Glow'

function Section({ side, children }: { side: 'left' | 'right'; children: React.ReactNode }) {
  return (
    <div className="relative isolate">
      <Glow side={side} />
      {children}
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-white">
      <PointerParallax />
      <Navbar />
      <SideDots />
      <div className="h-[84px]" />

      {/* Hero */}
      <Hero />
      <Section side="right"><About /></Section>
      <Projects />
      <Section side="right"><Skills /></Section>
      <Section side="left"><Journey /></Section>
      <Section side="right"><Contact /></Section>

      <Footer />
    </main>
  )
}

export default App
