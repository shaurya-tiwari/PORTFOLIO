"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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

  const handleNavClick = useCallback((href: string) => {
    scrollToSection(href);
  }, [scrollToSection]);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 100;
        if (shouldShow !== isVisible) {
          setIsVisible(shouldShow);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      className={`fixed top-2 right-1 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div className="relative px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900/20 to-gray-600/20 rounded blur opacity-50"></div>

        {isMobile ? (
          <div className="relative flex flex-col items-center">
            <div className="w-full overflow-x-auto">
              <div className="flex flex-nowrap justify-center items-center px-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="px-2 py-1 text-xs font-medium text-zinc-400 hover:text-white whitespace-nowrap transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
              >
                {item.name}
              </button>
            ))}

            <a
              href="/shauryaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm px-4 py-2 transition-colors duration-200">
                Resume
              </Button>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}