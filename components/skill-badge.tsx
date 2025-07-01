"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="rounded-xl border border-white/10 bg-white/10 p-4 sm:p-5 md:p-6 shadow-sm h-full text-white">
        <div className="text-center mb-3 text-xs sm:text-sm md:text-base font-medium">
          {name}
        </div>

        <div className="relative h-2 sm:h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="mt-2 text-right text-[10px] sm:text-xs text-white/70">
          {level}%
        </div>
      </div>
    </motion.div>
  )
}
