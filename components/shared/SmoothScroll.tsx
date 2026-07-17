"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });

        window.lenis = lenis;

        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        // ✅ Pause RAF when tab is hidden, resume when visible again
        function handleVisibilityChange() {
            if (document.hidden) {
                cancelAnimationFrame(rafId);
            } else {
                rafId = requestAnimationFrame(raf);
            }
        }

        rafId = requestAnimationFrame(raf);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            lenis.destroy();
            window.lenis = undefined;
        };
    }, []);

    return null;
}
