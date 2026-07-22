import { useState, useCallback } from 'react'
import { Loader } from './components/sections/Loader'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { TechMarquee } from './components/sections/TechMarquee'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Availability } from './components/sections/Availability'
import { Education } from './components/sections/Education'
import { Process } from './components/sections/Process'
import { Differentials } from './components/sections/Differentials'
import { Timeline } from './components/sections/Timeline'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { NoiseOverlay } from './components/layout/NoiseOverlay'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-purple-600 selection:text-white">
        <NoiseOverlay />
        <ScrollProgress />
        <Header />
        <main id="main-content">
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Availability />
          <Education />
          <Process />
          <Differentials />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
