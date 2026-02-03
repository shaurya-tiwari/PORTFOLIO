"use client"

import { motion } from "framer-motion"
import { cn } from "@/scripts/lib/utils"

interface RedBannerHeadingProps {
    title: string
    subtitle: string
    className?: string
}

export function RedBannerHeading({ title, subtitle, className }: RedBannerHeadingProps) {
    return (
        <div className={cn("relative mb-10", className)}>
            <div className="relative inline-block group">
                {/* White Backing Card (Offset) */}
                <motion.div
                    initial={{ opacity: 0, x: 10, y: 10, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 6, y: 8, rotate: -3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-[#F5F5DC] border border-black/5 z-0"
                />

                {/* Red Banner */}
                <motion.div
                    initial={{ scaleX: 0, rotate: 0 }}
                    whileInView={{ scaleX: 1, rotate: 2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-[#d14553] origin-left px-4 py-2 md:px-6 md:py-3 z-10"
                >
                    {/* Texture/Grain Overlay */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-[11]">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <filter id="noiseFilterHeadingRefined">
                                <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.65"
                                    numOctaves="3"
                                    stitchTiles="stitch"
                                />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noiseFilterHeadingRefined)" />
                        </svg>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        viewport={{ once: true }}
                        className="banner-title text-4xl md:text-6xl text-[#F5F5DC] leading-none tracking-tighter relative z-20"
                    >
                        {title}
                    </motion.h2>
                </motion.div>
            </div>
        </div>
    )
}
