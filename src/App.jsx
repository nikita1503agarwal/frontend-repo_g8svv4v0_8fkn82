import React from 'react'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import WhyMe from './components/WhyMe'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import PricingPhilosophy from './components/PricingPhilosophy'
import Contact from './components/Contact'
import BrandVoice from './components/BrandVoice'
import SEO from './components/SEO'
import ThemeProvider from './components/ThemeProvider'
import { ScrollHeatBar, CataclysmGradient, ForgeOrbs } from './components/FX'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0A0A0B] text-white">
        <ScrollHeatBar />
        <CataclysmGradient />
        <ForgeOrbs />
        {/* Nav */}
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#" className="text-sm font-bold tracking-wide text-white">Disaster Forge Studio</a>
            <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#portfolio" className="hover:text-white">Work</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#why" className="hover:text-white">Why me</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a href="#contact" className="hidden rounded-lg bg-gradient-to-r from-[#FF4D2E] via-[#FF2BD1] to-[#00F0FF] px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg sm:inline-flex">Start a Project</a>
          </div>
        </header>

        <main className="relative">
          <Hero />
          <BrandStory />
          <Services />
          <Portfolio />
          <About />
          <WhyMe />
          <Testimonials />
          <Process />
          <PricingPhilosophy />
          <Contact />
          <BrandVoice />
          <SEO />
        </main>

        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-400">
            <div>© {new Date().getFullYear()} Disaster Forge Studio • Built by Talal Fayyaz</div>
            <div className="flex gap-4">
              <a href="#contact" className="hover:text-white">Start a project</a>
              <a href="#portfolio" className="hover:text-white">See work</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
