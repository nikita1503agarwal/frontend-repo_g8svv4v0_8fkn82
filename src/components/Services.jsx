import React from 'react'
import { Rocket, Code2, PenTool, LineChart, Video } from 'lucide-react'
import { motion } from 'framer-motion'

const Item = ({ icon: Icon, title, points, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]"
  >
    <div className="mb-4 inline-flex rounded-lg bg-[#FF2BD1]/15 p-2 text-[#FF2BD1]">
      <Icon size={22} />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <ul className="space-y-1 text-sm text-slate-300">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </motion.div>
)

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
        <a href="#contact" className="text-sm font-semibold text-[#FF2BD1] hover:text-white">Book a build →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Item delay={0.05} icon={PenTool} title="Brand & Identity" points={[
          'Clear positioning that cuts through noise',
          'Distinctive visual language and rules',
          'Assets that speed execution across channels',
        ]} />
        <Item delay={0.1} icon={Code2} title="Web & Apps" points={[
          'Faster pages and cleaner UX that convert',
          'Scalable components and A11y‑aware systems',
          'SEO‑ready architecture built for growth',
        ]} />
        <Item delay={0.15} icon={Video} title="Motion & Editing" points={[
          'Narrative that lands value in seconds',
          'Reusable templates for consistent output',
          'Higher watch‑time and brand memorability',
        ]} />
        <Item delay={0.2} icon={LineChart} title="Marketing & SEO" points={[
          'Messaging that turns strangers into users',
          'Search visibility that compounds over time',
          'Analytics clarity to double down on winners',
        ]} />
        <Item delay={0.25} icon={Rocket} title="End‑to‑End Delivery" points={[
          'One lead from idea to launch',
          'Analytics + optimization baked in',
          'Premium hosting & performance mindset',
        ]} />
      </div>
    </section>
  )
}
