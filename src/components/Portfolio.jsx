import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Cart — E‑commerce Brand System',
    desc: 'Identity + storefront built for speed and conversion. 96+ Lighthouse scores, modular design tokens, custom animations.',
    tags: ['Brand', 'Web', 'Motion'],
  },
  {
    title: 'ArcForge — SaaS Dashboard Experience',
    desc: 'End-to-end product UI with onboarding, billing, and growth loops. Shipped marketing site + in-app systems.',
    tags: ['Product', 'Web App', 'SEO'],
  },
  {
    title: 'StormClip — Content Engine',
    desc: 'Video editing pipeline, templates, and motion pack for shorts & promos. Increased watch-time by 42%.',
    tags: ['Video', 'Animation'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Portfolio</h2>
        <span className="text-sm text-slate-400">Selected work — detailed case studies on call</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]"
          >
            <div className="mb-3 h-36 w-full overflow-hidden rounded-xl">
              <div className="h-full w-full scale-100 bg-[radial-gradient(ellipse_at_top_left,rgba(255,77,46,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,43,209,0.3),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,240,255,0.25),transparent_35%)] opacity-80 transition group-hover:opacity-100" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mb-3 text-sm text-slate-300">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
