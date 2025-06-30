"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Senior AI/ML Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead AI/ML initiatives and frontend development. Built machine learning pipelines, deployed models to production, and created intuitive user interfaces for AI-powered applications.",
  },
  {
    title: "Frontend Developer & ML Engineer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications using React and implemented machine learning solutions. Worked on computer vision projects and data visualization dashboards.",
  },
  {
    title: "Junior Developer",
    company: "Creative Agency",
    period: "2017 - 2019",
    description:
      "Built websites and web applications while learning machine learning fundamentals. Worked with HTML, CSS, JavaScript, and Python for data analysis.",
  },
  {
    title: "Intern",
    company: "Startup Hub",
    period: "2016 - 2017",
    description:
      "Assisted in developing web applications and learned machine learning basics through online courses and projects.",
  },
]

// Memoized timeline item to prevent unnecessary re-renders
const TimelineItem = memo(({ experience, index, isMobile }: {
  experience: typeof experiences[0]
  index: number
  isMobile: boolean
}) => {
  // Cache the index calculation
  const isEven = useMemo(() => index % 2 === 0, [index])
  
  // Cache animation values
  const animationX = useMemo(() => isEven ? 50 : -50, [isEven])
  
  return (
    <div
      className={`relative z-10 flex items-center ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <motion.div
        className={`w-full md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}
        initial={{ opacity: 0, x: animationX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-white/5 blur-md rounded-2xl opacity-40 hover:opacity-70 transition duration-700" />

          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
            <div className="text-sm text-white/60 mb-4">
              {experience.company} | {experience.period}
            </div>
            <p className="text-white/80 text-sm">{experience.description}</p>
          </div>
        </div>
      </motion.div>

      {!isMobile && (
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <motion.div
            className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 z-10 flex items-center justify-center shadow"
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
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-white/10 before:h-full before:z-0"
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