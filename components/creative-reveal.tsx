"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
    children: string;
    className?: string;
    delay?: number;
}

/**
 * BlurReveal: Animates text from a blurred, transparent state to clear and opaque.
 * Perfect for large headings.
 */
export const BlurReveal = ({ children, className = "", delay = 0 }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.span
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
            transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
                delay: delay,
            }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};

/**
 * WordReveal: Splits text into words and animates them sequentially.
 * Ideal for body text and descriptions.
 */
export const WordReveal = ({ children, className = "", delay = 0 }: RevealProps) => {
    const words = children.split(" ");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 70,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 70,
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`inline-block ${className}`}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

/**
 * StaggeredBlurReveal: Animates text character-by-character or word-by-word 
 * with a blur reveal effect.
 */
export const StaggeredBlurReveal = ({
    children,
    className = "",
    delay = 0,
    stagger = 0.05
}: RevealProps & { stagger?: number }) => {
    const characters = children.split("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay
            },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
            transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`inline-block ${className}`}
        >
            {characters.map((char, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};
