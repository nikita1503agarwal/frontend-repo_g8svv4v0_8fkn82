import React from 'react'
import { Rocket, Code2, PenTool, LineChart, Video } from 'lucide-react'

const Item = ({ icon: Icon, title, points }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
    <div className="mb-4 inline-flex rounded-lg bg-fuchsia-500/15 p-2 text-fuchsia-300">
      <Icon size={22} />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <ul className="space-y-1 text-sm text-slate-300">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </div>
)

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
        <a href="#contact" className="text-sm font-semibold text-fuchsia-300 hover:text-fuchsia-200">Book a build →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Item icon={PenTool} title="Brand & Identity" points={[
          'Logo systems, marks, and visual language',
          'Style guides, typography, color strategy',
          'Art direction with anime/gaming edge',
        ]} />
        <Item icon={Code2} title="Web & Apps" points={[
          'High-performance websites, landing pages',
          'Full-stack web & mobile apps',
          'UX architecture, wireframes, prototypes',
        ]} />
        <Item icon={Video} title="Motion & Editing" points={[
          'Promo edits, kinetic typography, reels',
          '3D/2D animation for product & brand',
          'YouTube/shorts cutdowns, thumbnails',
        ]} />
        <Item icon={LineChart} title="Marketing & SEO" points={[
          'Positioning, messaging, funnels',
          'Technical + on-page SEO',
          'Launch campaigns, email + social systems',
        ]} />
        <Item icon={Rocket} title="End-to-End Delivery" points={[
          'From idea to launch with one lead',
          'Analytics, optimization, and iteration',
          'Premium hosting & performance mindset',
        ]} />
      </div>
    </section>
  )
}
