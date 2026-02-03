"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLoading } from "@/scripts/hooks/loading-context";
import Image from "next/image";

const Wings: React.FC = () => {
  const ref = useRef(null);
  const { isEntryComplete } = useLoading();
  const isInView = useInView(ref, { once: true, });

  const shouldAnimate = isEntryComplete && isInView;

  return (
    <div className="relative h-[600px] sm:h-[750px] md:h-[750px] lg:h-[850px] mt-[-150px] sm:mt-[-200px] md:mt-[-350px] lg:mt-[-450px] mb-[-80px] md:mb-[-150px] lg:mb-[-200px] flex justify-center z-50 pointer-events-none opacity-60" ref={ref}>
      <motion.div
        id="wing-repeller"
        className="relative h-full w-full max-w-[800px] origin-bottom"
        initial={{ rotate: 90, scale: 0, opacity: 0 }}
        animate={
          shouldAnimate
            ? { rotate: 0, scale: 1, opacity: 1 }
            : { rotate: 90, scale: 0, opacity: 0 }
        }
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
      >
        <Image
          src="/wing.png"
          alt="Wings"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Wings;
