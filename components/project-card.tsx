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
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col w-full h-full bg-black/5 border border-black/5 overflow-hidden transition-all duration-700 hover:bg-black/10"
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="mono-label mb-4">PROJECTS</div>
        <h3 className="editorial-heading text-4xl text-foreground mb-4 group-hover:opacity-80 transition-opacity duration-500">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg line-clamp-3 mb-8 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mono-label !text-[9px] border border-black/10 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-auto pt-8 border-t border-black/5">
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="mono-label hover:text-primary transition-colors">
            SOURCE CODE ↗
          </Link>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="mono-label hover:text-primary transition-colors">
            LIVE PREVIEW ↗
          </Link>
        </div>
      </div>
    </motion.div>
  )
}