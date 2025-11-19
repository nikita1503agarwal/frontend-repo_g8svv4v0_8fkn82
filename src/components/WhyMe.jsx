import React from 'react'
import { ShieldCheck, Zap, Cpu } from 'lucide-react'

const Reason = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="mb-3 inline-flex rounded-lg bg-fuchsia-500/15 p-2 text-fuchsia-300"><Icon size={22} /></div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-1 text-sm text-slate-300">{desc}</p>
  </div>
)

export default function WhyMe() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
      <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">Why Work With Me</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Reason icon={Zap} title="Speed without sloppiness" desc="Ship fast, iterate faster — with clean systems and conversion discipline." />
        <Reason icon={Cpu} title="Full‑stack brain" desc="Brand, UX, code, motion, and growth — one operator, no silos, no lag." />
        <Reason icon={ShieldCheck} title="Performance‑first" desc="From Lighthouse to LCP to SEO — I build for results you can measure." />
      </div>
    </section>
  )
}
