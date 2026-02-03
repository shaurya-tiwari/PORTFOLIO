"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/scripts/hooks/loading-context";

export const Preloader = ({ children }: { children: React.ReactNode }) => {
    const { isLoading, setIsLoading, setIsEntryComplete } = useLoading();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // 1. Kick off the exit animation
                    setTimeout(() => setIsLoading(false), 500);
                    // 2. Signal that reveal is total after animation ends (1.2s exit + buffer)
                    setTimeout(() => setIsEntryComplete(true), 2000);
                    return 100;
                }
                const increment = prev < 70 ? Math.random() * 10 : Math.random() * 2;
                return Math.min(100, prev + increment);
            });
        }, 80);

        return () => clearInterval(interval);
    }, [setIsLoading, setIsEntryComplete]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="preloader"
                        initial={{ y: 0 }}
                        exit={{
                            y: "-100vh",
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                                delay: 0.2
                            }
                        }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
                    >
                        <div className="relative flex flex-col items-center z-10">
                            <motion.div
                                className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-none italic"
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            >
                                {Math.round(progress)}%
                            </motion.div>

                            <div className="w-[40vw] h-px bg-black/10 mt-4 overflow-hidden relative">
                                <motion.div
                                    className="absolute inset-0 bg-black"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: progress / 100 }}
                                    transition={{ type: "spring", damping: 20 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </div>

                            <motion.p
                                className="mt-8 mono-label tracking-widest text-[10px] uppercase opacity-40"
                                animate={{ opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Initializing Experience
                            </motion.p>
                        </div>

                        {/* Shutter Reveal SVG */}
                        <svg
                            className="absolute top-0 left-0 w-full h-[calc(100vh+600px)] pointer-events-none overflow-visible"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                className="fill-background"
                                initial={{ d: "M0 0 L100 0 L100 100 L0 100 Z" }}
                                exit={{
                                    d: "M0 0 L100 0 L100 66 Q50 100 0 66 Z",
                                    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
                                }}
                            />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </>
    );
};
