"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
    children: ReactNode;
    speed?: number; // 0 is default, positive moves faster/up, negative moves slower/down
    className?: string;
    id?: string;
}

export const Parallax = ({
    children,
    speed = 0.5,
    className = "",
    id,
}: ParallaxProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Calculate the translate Y based on speed
    // A speed of 1 means it moves 100px for a certain scroll range
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

    // Smooth the movement
    const smoothY = useSpring(y, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            ref={ref}
            id={id}
            style={{ y: smoothY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
