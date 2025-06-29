"use client"

import { useState } from "react"
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-700"></div>

        <div className="relative h-full flex flex-col z-10">
          <div className="relative overflow-hidden h-48 rounded-t-3xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          <div className="p-6 flex-grow text-white">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-white/70 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-4 border-t border-white/10">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10" asChild>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-400" : "bg-white/40"} transition-colors duration-300`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
