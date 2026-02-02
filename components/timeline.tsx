"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Technology job simulation",
    company: "Deloitte.",
    period: "June 2025",
    description:
      "Completed the Deloitte Software Engineering Virtual Experience."
  },
  {
    title: "Full-stack developer with AI prompts",
    company: "",
    period: "2024",
    description:
      "Developed responsive web applications using React ,Next, TailwindCSS, Socket.io, SQL, Python.",
  },
  {
    title: "GitHub Mentor (Academic)",
    company: "Academic Experience",
    period: "2017 - 2019",
    description:
      "Taught and Led batch-wide academic projects by mentoring 40+ peers in GitHub collaboration, version control, and while managing 3+ group projects as Team Lead to ensure smooth coordination, Agile sprint deliveries, and effective teamwork."
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
    <div
      className={`relative z-10 flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div
        className={`w-full md:w-1/2 ${isEven ? "md:pl-6" : "md:pr-6"}`}
        initial={{ opacity: 0, x: animationX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className={`relative rounded-xl border border-white/10 ${isMobile ? "bg-white/5" : "bg-white/10 backdrop-blur-md shadow-md"
            } p-4 sm:p-6 transition-all duration-300`}
        >
          {!isMobile && (
            <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-white/5 blur-md rounded-xl opacity-30" />
          )}
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-semibold text-white">{experience.title}</h3>
            <div className="text-xs sm:text-sm text-white/60 mb-2">
              {experience.company} | {experience.period}
            </div>
            <p className="text-xs sm:text-sm text-white/80">{experience.description}</p>
          </div>
        </div>
      </motion.div>

      {!isMobile && (
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <motion.div
            className="w-5 h-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
          </motion.div>
        </div>
      )}
    </div>
  )
})

TimelineItem.displayName = "TimelineItem"

export const Timeline = memo(() => {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-8 sm:space-y-10 relative ${!isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:border-l-2 before:border-white/10"
          : ""
        }`}
    >
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
