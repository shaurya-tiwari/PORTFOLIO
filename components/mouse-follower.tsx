"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for a better feel
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 40);
      mouseY.set(e.clientY - 40);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 0.5 : 0,
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
    </>
  );
}
