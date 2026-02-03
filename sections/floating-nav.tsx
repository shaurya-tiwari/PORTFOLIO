"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useMobile } from "@/scripts/hooks/use-mobile";

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobile();
  const ticking = useRef(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    const topOffset = 80; // offset for the floating nav height

    if (window.lenis) {
      window.lenis.scrollTo(href, {
        offset: -topOffset,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 100);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className={`rounded-full bg-black/5 border border-black/5 backdrop-blur-md shadow-sm ${isMobile ? "px-1 py-1" : "px-4 py-2"
          }`}
      >
        <div
          className={`flex items-center justify-center gap-0.5 whitespace-nowrap ${isMobile ? "" : "min-w-[320px] gap-1"
            }`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-zinc-500 hover:text-black transition-colors duration-150 rounded-full ${isMobile
                ? "text-[10px] px-1.5 py-1"
                : "text-sm px-3 py-[6px]"
                }`}
            >
              {item.name}
            </button>
          ))}

          <a
            href="/SHAURYA RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`bg-gray-200 hover:bg-gray-300 text-black rounded-full transition-all duration-200 ml-1 ${isMobile ? "text-[10px] px-2 py-1" : "text-sm px-3 py-1"}`}>
              Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
