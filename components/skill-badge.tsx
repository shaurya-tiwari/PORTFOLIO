"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 h-full shadow-md transition-all duration-300 hover:shadow-lg">
        {/* Removed backdrop-blur-xl for performance */}
        <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl opacity-40 group-hover:opacity-70 transition duration-700" />

        <div className="relative z-10">
          <div className="text-center mb-4 font-semibold text-white">{name}</div>

          <div className="relative h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-zinc-400 to-blue-300 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-white/70">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}