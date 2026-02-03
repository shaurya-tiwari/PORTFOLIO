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
            duration: 1.6, // swifter scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        window.lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = undefined;
        };
    }, []);

    return null;
}
