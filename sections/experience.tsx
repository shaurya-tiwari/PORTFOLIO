"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/scripts/hooks/use-mobile"
import { Highlighter } from "@/components/ui/highlighter"

const experiences = [
  {
    title: "Technology job simulation",
    company: "Deloitte.",
    period: "June 2025",
    description:
      "Completed the Deloitte Software Engineering Virtual Experience."
  },
  {
    title: "Full-stack developer",
    company: "",
    period: "2024",
    description:
      "Developed responsive web applications using React ,Next, TailwindCSS, Socket.io, SQL, Python.",
  },
  {
    title: "GitHub Mentor (Academic)",
    company: "Academic Experience",
    period: "2024 - 2025",
    description: (
      <>
        Taught and Led batch-wide academic projects by mentoring <Highlighter color="neon" delay={300}>40+ peers</Highlighter> in GitHub collaboration, version control, and while managing <Highlighter color="neon" delay={300}>3+ group projects</Highlighter> as Team Lead to ensure smooth coordination, Agile sprint deliveries, and effective teamwork.
      </>
    )
  },
]
// Memoized experience item to prevent unnecessary re-renders
const ExperienceItem = memo(({ experience, index, isMobile }: {
  experience: typeof experiences[0]
  index: number
  isMobile: boolean
}) => {
  return (
    <div className="relative z-10 py-12 group">
      {/* Circle Marker */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-0 md:left-[22%] ml-[-5px] top-[55px] w-2.5 h-2.5 rounded-full bg-primary z-20 shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:scale-125 transition-transform"
      />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-8 items-start pl-8 md:pl-0"
      >
        <div className="w-full md:w-1/4 mono-label pt-2 md:text-right md:pr-12">{experience.period}</div>
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h3 className="text-3xl font-bold text-foreground tracking-tight leading-none">{experience.title}</h3>
            {experience.company && (
              <span className="mono-label text-foreground/50">{experience.company}</span>
            )}
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {experience.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
})

ExperienceItem.displayName = "ExperienceItem"

export const Experience = memo(() => {
  const isMobile = useMobile()

  return (
    <div className="relative w-full mt-12">
      {/* The Connected Line */}
      <div className="absolute left-0 md:left-[22%] ml-[-1px] top-[60px] bottom-[60px] w-[2px] bg-black/70 z-0" />

      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  )
})
