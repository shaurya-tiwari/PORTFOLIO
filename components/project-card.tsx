"use client"

import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-white/10 bg-white/10 hover:shadow-md transition-shadow duration-200 w-full h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-44 xs:h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden rounded-t-xl flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 md:p-5 text-white flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 md:mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-white/70 line-clamp-2 mb-2 md:mb-3 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/10 text-white/70 text-[9px] sm:text-[10px] md:text-xs px-1.5 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-auto">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/60 hover:text-white px-2 md:px-3 h-7 md:h-8"
            asChild
          >
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="text-[11px] md:text-xs">Code</span>
            </Link>
          </Button>

          <Button
            size="sm"
            className="bg-white/10 hover:bg-white/20 text-white px-3 md:px-4 h-7 md:h-8 text-[11px] md:text-xs"
            asChild
          >
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 md:h-4 md:w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}