import React, { useMemo } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// A thin progress bar that tracks scroll — feels like heat building up in the forge
export function ScrollHeatBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-[#FF4D2E] via-[#FF2BD1] to-[#00F0FF]"
      style={{ scaleX }}
    />
  )
}

// Subtle animated gradient background to reinforce the magma/fuchsia identity
export function CataclysmGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      <div className="absolute inset-0 opacity-[0.3] [background:radial-gradient(60%_40%_at_70%_20%,rgba(255,45,208,0.25),transparent_60%),radial-gradient(40%_30%_at_20%_70%,rgba(255,77,46,0.25),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  )
}

// Floating orbs that react subtly on scroll for depth
export function ForgeOrbs() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 80])
  const y2 = useTransform(scrollY, [0, 1000], [0, -60])
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">      
      <motion.div
        className="absolute left-[10%] top-[20%] h-56 w-56 rounded-full blur-3xl"
        style={{ y: y1, background: 'radial-gradient(circle at 30% 30%, rgba(255,77,46,0.45), rgba(255,77,46,0))' }}
      />
      <motion.div
        className="absolute right-[8%] top-[35%] h-64 w-64 rounded-full blur-3xl"
        style={{ y: y2, background: 'radial-gradient(circle at 70% 70%, rgba(255,43,209,0.35), rgba(255,43,209,0))' }}
      />
      <motion.div
        className="absolute bottom-[8%] left-1/2 h-44 w-44 -translate-x-1/2 rounded-full blur-3xl"
        style={{ y: y1, background: 'radial-gradient(circle, rgba(0,240,255,0.25), rgba(0,240,255,0))' }}
      />
    </div>
  )
}

export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>{children}</section>
  )
}

export function RiseIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function HoverLift({ children }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
      {children}
    </motion.div>
  )
}
