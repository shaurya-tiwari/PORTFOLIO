"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Github, ArrowUpRight, MoreHorizontal } from "lucide-react"
import Link from "next/link"

interface Project {
    title: string
    description: string
    tags: string[]
    image: string
    demoUrl: string
    repoUrl: string
}

interface ProjectStackProps {
    projects: Project[]
}

const StackCard = ({
    project,
    index,
    total,
    isTop,
    onSwipe
}: {
    project: Project,
    index: number,
    total: number,
    isTop: boolean,
    onSwipe: () => void
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-15, 15])
    const scale = isTop ? 1 : 1 - (index * 0.05)
    const translateY = isTop ? 0 : index * 12

    const handleDragEnd = (event: any, info: any) => {
        if (Math.abs(info.offset.x) > 120) {
            onSwipe()
        }
    }

    return (
        <motion.div
            style={isTop ? { x, rotate, zIndex: 100 } : { scale, y: translateY, zIndex: 30 - index }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => isTop && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                scale: isTop ? 1 : scale,
                y: isTop ? 0 : translateY,
            }}
            exit={{
                x: x.get() < 0 ? -1000 : 1000,
                rotate: x.get() < 0 ? -60 : 60,
                opacity: 1, // Keep fully opaque during exit
                zIndex: 1000,
                transition: { duration: 0.4, ease: "easeIn" }
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 flex items-center justify-center ${isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
        >
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-black border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{
                        filter: isHovered && isTop
                            ? "grayscale(0%) brightness(1)"
                            : isTop
                                ? "grayscale(100%) brightness(0.5)"
                                : "grayscale(100%) brightness(0.1)",
                        scale: isHovered && isTop ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Anti-Glitch: Solid gradient overlay for all cards, just darker for background ones */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 ${isTop ? "opacity-100" : "opacity-0"} z-10`} />

                <motion.div
                    initial={false}
                    animate={{
                        opacity: isTop ? 1 : 0,
                        y: isTop ? 0 : 40,
                        scale: isTop ? 1 : 0.8,
                        filter: isTop ? "blur(0px)" : "blur(10px)",
                        pointerEvents: isTop ? "auto" : "none"
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 p-8 flex flex-col justify-end z-30"
                >
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="mono-label !text-white/40 tracking-[0.4em]">0{index + 1} — PROJECT</div>
                            <div className="flex gap-4">
                                <Link href={project.repoUrl} target="_blank" className="text-white/40 hover:text-primary transition-colors">
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link href={project.demoUrl} target="_blank" className="text-white/40 hover:text-primary transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        <h3 className="editorial-heading text-4xl text-white leading-none tracking-tighter">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h3>

                        <p className="text-muted-foreground text-sm line-clamp-2 italic leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="mono-label !text-[7px] border border-white/5 px-2 py-0.5 !text-white/30">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Decorative corner element */}
                <div className="absolute top-8 right-8 mono-label !text-[10px] !text-white/20">
                    SWIPE TO EXPLORE ↗
                </div>
            </div>
        </motion.div>
    )
}

export function ProjectStack({ projects }: ProjectStackProps) {
    const [index, setIndex] = useState(0)

    const handleSwipe = () => {
        setIndex((prev) => (prev + 1) % projects.length)
    }

    // Calculate visible projects in stack without duplicates if possible
    const visibleProjects = projects.slice(index, index + 3)
    if (visibleProjects.length < 3 && projects.length > visibleProjects.length) {
        visibleProjects.push(...projects.slice(0, 3 - visibleProjects.length))
    }

    return (
        <div className="relative w-full h-[650px] flex items-center justify-center p-4">
            <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">
                <AnimatePresence initial={false} mode="popLayout">
                    {visibleProjects.map((project, i) => {
                        // Crucial: Use a key that changes on swipe so it actually triggers exit/entry transitions
                        // projectKey remains unique but changes position, triggering proper physics
                        const projectKey = `${project.title}-${(index + i) % projects.length}`
                        return (
                            <StackCard
                                key={projectKey}
                                project={project}
                                index={i}
                                total={visibleProjects.length}
                                isTop={i === 0}
                                onSwipe={handleSwipe}
                            />
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Progress Circle / Indicators */}
            <div className="absolute bottom-4 flex gap-3 z-30">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "bg-primary w-12" : "bg-white/10 w-4 hover:bg-white/20"
                            }`}
                    />
                ))}
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-primary/5 to-transparent pointer-events-none -z-20 opacity-30" />
        </div>
    )
}
