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
      className="group rounded-xl border border-white/10 bg-white/10 hover:shadow-md transition-shadow duration-200 max-w-full sm:max-w-sm mx-auto"
    >
      {/* Image Section */}
      <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-xl">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 text-white">
        <h3 className="text-sm sm:text-base font-semibold mb-1">{title}</h3>
        <p className="text-[11px] sm:text-xs text-white/70 line-clamp-2 mb-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/10 text-white/70 text-[9px] px-1.5 py-[2px]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/60 hover:text-white px-2 h-7"
            asChild
          >
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3.5 w-3.5" />
              <span className="text-[11px]">Code</span>
            </Link>
          </Button>

          <Button
            size="sm"
            className="bg-white/10 hover:bg-white/20 text-white px-3 h-7 text-[11px]"
            asChild
          >
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
