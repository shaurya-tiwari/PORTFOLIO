"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2, // make scroll slower
            // Alternatively, use lerp for inertia feel
            // lerp: 0.1, // range: 0 to 1, lower is smoother and slower
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional easing function
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
