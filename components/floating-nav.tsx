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
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      scrollToSection(href);
    },
    [scrollToSection]
  );

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 100;
        setIsVisible(shouldShow);
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
      className={`fixed top-2 right-2 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div
        className={`relative rounded-2xl backdrop-blur-xl border border-white/20 shadow-lg ${
          isMobile
            ? "px-2 py-1 bg-white/10 w-max max-w-[90vw]"
            : "px-4 py-3 bg-white/10"
        }`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900/20 to-gray-600/20 rounded blur opacity-50"></div>

        <div
          className={`relative flex ${
            isMobile ? "flex-wrap justify-center items-center gap-1" : "items-center gap-1"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`transition-colors duration-200 rounded hover:bg-gray-800/50 ${
                isMobile
                  ? "px-2 py-1 text-[10px] font-medium text-zinc-400 hover:text-white"
                  : "px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}

          {!isMobile && (
            <a
              href="/shauryaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm px-4 py-2 transition-colors duration-200">
                Resume
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
