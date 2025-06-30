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

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:shadow-xl transition-shadow duration-200"
    >
      <div className="relative overflow-hidden h-48 rounded-t-3xl">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/10 text-white/80">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="ghost" size="sm" className="text-white/60 hover:text-white" asChild>
            <Link href={repoUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white" asChild>
            <Link href={demoUrl} target="_blank">
              Live Demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}