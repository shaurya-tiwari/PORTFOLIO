"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

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
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
      className={`fixed top-2 right-2 z-50 transition-opacity duration-400 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className={`rounded-xl bg-white/10 border border-white/10 backdrop-blur-md shadow-sm ${
          isMobile ? "px-2 py-1" : "px-4 py-2"
        }`}
      >
        <div
          className={`flex items-center justify-center gap-1 flex-wrap ${
            isMobile ? "" : "min-w-[320px]"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-zinc-400 hover:text-white transition-colors duration-150 rounded ${
                isMobile
                  ? "text-[10px] px-2 py-[6px]"
                  : "text-sm px-3 py-[6px]"
              }`}
            >
              {item.name}
            </button>
          ))}

          <a
            href="/shauryaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={isMobile ? "hidden" : ""}
          >
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm px-3 py-1 transition-all duration-200 ml-2">
              Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
