import React from 'react'

const testimonials = [
  {
    quote: 'We came in with scattered ideas and left with a living brand that actually converts. Talal handled design, site, and launch like a one-man studio.',
    name: 'Mara D.',
    title: 'Founder, Neon Cart',
  },
  {
    quote: 'Our product finally looks and feels as premium as it is. The dashboard UX and marketing site shipped in under four weeks — insane.',
    name: 'Imran K.',
    title: 'CEO, ArcForge',
  },
  {
    quote: 'His motion pack boosted watch-time and CTR on shorts. Clean systems, clean delivery. Zero hand-holding required.',
    name: 'Jules T.',
    title: 'Head of Growth, StormClip',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
      <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">What Clients Say</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-4 text-sm text-slate-200">“{t.quote}”</p>
            <div className="text-sm font-semibold text-white">{t.name}</div>
            <div className="text-xs text-slate-400">{t.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
