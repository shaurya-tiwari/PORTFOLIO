"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md p-6 transition-all duration-300">
        {/* Frosted effect gradient */}
        <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-white/5 blur-md rounded-2xl opacity-40 hover:opacity-70 transition duration-700" />

        {/* Content */}
        <div className="relative z-10 text-white">{children}</div>
      </div>
    </motion.div>
  )
}
