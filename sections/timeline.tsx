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
  }
]
// Memoized timeline item to prevent unnecessary re-renders
const TimelineItem = memo(({ experience, index, isMobile }: {
  experience: typeof experiences[0]
  index: number
  isMobile: boolean
}) => {
  const isEven = useMemo(() => index % 2 === 0, [index])
  const animationX = useMemo(() => isEven ? 40 : -40, [isEven])

  return (
    <div className="relative z-10 py-12 border-t border-black/5 last:border-b">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-8 items-start"
      >
        <div className="w-full md:w-1/4 mono-label pt-1">{experience.period}</div>
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h3 className="text-3xl font-bold text-foreground leading-none">{experience.title}</h3>
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

TimelineItem.displayName = "TimelineItem"

export const Timeline = memo(() => {
  const isMobile = useMobile()

  return (
    <div className="w-full mt-12 border-b border-black/5">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={index}
          experience={experience}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
})
