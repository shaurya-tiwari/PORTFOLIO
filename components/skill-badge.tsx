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
      <div className="h-full border-t border-white/5 pt-4">
        <div className="flex justify-between items-baseline mb-2">
          <span className="mono-label text-white/90">{name}</span>
          <span className="mono-label text-white">{level}%</span>
        </div>
        <div className="w-full h-[1px] bg-white/5 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white/40"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  )
}
