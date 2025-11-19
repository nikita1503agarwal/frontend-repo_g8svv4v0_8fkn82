import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0b0d13]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient and grid */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:px-8">
        <span className="mb-5 inline-flex items-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-fuchsia-200 backdrop-blur">
          Disaster Forge Studio — Controlled Chaos, Crafted to Convert
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          I turn creative disasters into category-defining brands.
        </h1>
        <p className="mt-5 max-w-3xl text-pretty text-base text-slate-200 sm:text-lg">
          I’m Talal Fayyaz — a full-stack creative force blending design, code, and motion. From logo to launch, site to SEO, app to ad. Chaos in, power out.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:translate-y-[-1px] hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-300">
            Start a Project
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            See Work
          </a>
        </div>
        <div className="mt-8 text-sm text-slate-300/80">
          Logos • Web • Apps • Motion • Marketing • SEO • End‑to‑End Delivery
        </div>
      </div>
    </section>
  )
}
