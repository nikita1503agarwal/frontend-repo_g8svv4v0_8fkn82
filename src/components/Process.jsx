import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: '01. Discovery Call',
    desc: 'We define goals, constraints, and the version of “success” we’re hunting. I suggest scope stacks that fit timelines and outcomes.'
  },
  {
    title: '02. Strategy & Architecture',
    desc: 'Positioning, messaging, IA, and system design. Clear prototypes and flows so you know exactly what ships.'
  },
  {
    title: '03. Build & Motion',
    desc: 'Design, development, and animation in tight cycles. Early demos, rapid iteration, zero dead time.'
  },
  {
    title: '04. Launch & Optimize',
    desc: 'Deploy, measure, and improve. Analytics, SEO, split-tests, and the next growth loop.'
  },
]

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-20 text-slate-200">
      <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">Process</h2>
      <ol className="grid gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm font-mono text-[#FF2BD1]">{s.title}</div>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
