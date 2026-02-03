"use client"

import { motion } from "framer-motion"

interface VerticalLabelProps {
    number: string
    text: string
    delay?: number
}

export function VerticalLabel({ number, text, delay = 0 }: VerticalLabelProps) {
    return (
        <div className="absolute top-0 right-0 flex flex-col items-end w-8 pointer-events-none z-50">
            {/* Number */}
            <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                viewport={{ once: true }}
                className="mono-label text-[#B06E5F] text-[9px] whitespace-nowrap pr-1"
            >
                {number}
            </motion.span>

            {/* Line between Number and Word */}
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 }}
                viewport={{ once: true }}
                className="w-[1px] h-12 bg-[#B06E5F]/40 origin-top my-2 mr-[5px]"
            />

            {/* Vertical Word */}
            <div className="flex flex-col items-end mr-[2px]">
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: delay + 0.4 + (i * 0.05) }}
                        viewport={{ once: true }}
                        className="mono-label text-[#B06E5F] text-[8px] uppercase font-bold tracking-tighter leading-none my-0.5"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}
