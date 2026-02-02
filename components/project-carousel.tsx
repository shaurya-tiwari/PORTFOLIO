"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, Github, ArrowUpRight } from "lucide-react";
import React from "react";
import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    demoUrl: string;
    repoUrl: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
    // ✦ Loop Stability Fix:
    // Swiper's infinite loop requires a minimum number of slides to fill the screen and avoid glitches.
    // If the project count is low (e.g., 4), we internally duplicate them for a "Perfect Circle" effect.
    const displayProjects = projects.length > 0 && projects.length < 8
        ? [...projects, ...projects]
        : projects;

    const css = `
  .ProjectCarouselSwiper {
    width: 100%;
    height: 480px;
    padding-bottom: 50px !important;
    padding-top: 20px;
  }
  
  .ProjectCarouselSwiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 400px;
    border-radius: 1.5rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #000;
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.3;
  }
  
  .swiper-pagination-bullet-active {
    background-color: var(--primary) !important;
    opacity: 1;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    border-radius: 1.5rem;
  }
`;

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.4,
                delay: 0.2,
            }}
            className="relative w-full overflow-visible"
        >
            <style>{css}</style>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                watchSlidesProgress={true}
                speed={800}
                coverflowEffect={{
                    rotate: 35,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".carousel-next",
                    prevEl: ".carousel-prev",
                }}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="ProjectCarouselSwiper"
            >
                {displayProjects.map((project, index) => (
                    <SwiperSlide key={`${project.title}-${index}`}>
                        <div className="relative w-full h-full group">
                            <img
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end gap-3 transition-transform duration-500">
                                <div className="flex justify-between items-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="mono-label !text-white/40">0{(index % projects.length) + 1}</span>
                                    <div className="flex gap-2">
                                        <Link href={project.repoUrl} target="_blank" className="p-1.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary hover:text-white transition-all">
                                            <Github className="w-4 h-4" />
                                        </Link>
                                        <Link href={project.demoUrl} target="_blank" className="p-1.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary hover:text-white transition-all">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="editorial-heading text-2xl text-white tracking-tighter truncate">
                                    {project.title}
                                </h3>

                                <p className="text-white/60 text-xs line-clamp-2 italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="mono-label !text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-20 pointer-events-none">
                <button className="carousel-prev w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-white hover:border-primary transition-all pointer-events-auto shadow-lg">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="carousel-next w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-white hover:border-primary transition-all pointer-events-auto shadow-lg">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
};
