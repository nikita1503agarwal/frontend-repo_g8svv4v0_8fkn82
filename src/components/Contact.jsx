import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-slate-200">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Start the Fire</h2>
        <p className="mb-6 text-slate-300">Bring me your chaos. I’ll bring the forge. Tell me your goal, your timeline, and what a win looks like. I’ll map the fastest path to it.</p>
        <form className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-slate-300">Name</label>
            <input type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-fuchsia-400" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-slate-300">Email</label>
            <input type="email" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-fuchsia-400" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-slate-300">Project</label>
            <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-fuchsia-400" placeholder="What are we building?" />
          </div>
          <div className="sm:col-span-2">
            <button type="button" className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:translate-y-[-1px] hover:bg-fuchsia-400">
              Request a strategy call
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
