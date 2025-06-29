"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobile();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className={`fixed top-2 right-1 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
       <div className="relative px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">

          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900/20 to-gray-600/20 rounded blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex flex-col items-center ">


              <div className="w-full overflow-x-auto  ">
                <div className="flex flex-nowrap justify-center items-center px-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="px-2 py-1 text-xs font-medium text-zinc-400 hover:text-white whitespace-nowrap transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative flex items-center ">


              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900 border-0"
              >
                Resume
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
