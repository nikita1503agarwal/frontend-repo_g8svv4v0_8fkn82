import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient and grid */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-5 inline-flex items-center rounded-full border border-[#FF2BD1]/30 bg-[#FF2BD1]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#ffd1f5] backdrop-blur"
        >
          Disaster Forge Studio — Controlled Chaos, Crafted to Convert
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          I turn creative disasters into category-defining brands.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-5 max-w-3xl text-pretty text-base text-slate-200 sm:text-lg"
        >
          I’m Talal Fayyaz — a full-stack creative force blending design, code, and motion. From logo to launch, site to SEO, app to ad. Chaos in, power out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF4D2E] via-[#FF2BD1] to-[#00F0FF] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-fuchsia-300">
            Start a Project
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            See Work
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 text-sm text-slate-300/80"
        >
          Logos • Web • Apps • Motion • Marketing • SEO • End‑to‑End Delivery
        </motion.div>
      </div>
    </section>
  )
}
