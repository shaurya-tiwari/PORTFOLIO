"use client"

import React, { useEffect, useRef, useState } from "react"

interface HighlighterProps {
    children: React.ReactNode
    color?: "sky" | "peach" | "neon"
    delay?: number
}

export function Highlighter({ children, color = "sky", delay = 0 }: HighlighterProps) {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsActive(true)
                    }, delay)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <span
            ref={ref}
            className={`highlight-wrapper ${color} ${isActive ? "active" : ""}`}
        >
            {children}
        </span>
    )
}
