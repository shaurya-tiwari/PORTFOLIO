"use client";

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, } from "lucide-react"
import SmoothScroll from "@/components/shared/SmoothScroll";
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/ui/skill-badge"
import { CreativeHero } from "@/sections/creative-hero"
import { FloatingNav } from "@/sections/floating-nav"
import { MouseFollower } from "@/components/shared/mouse-follower"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import Wings from "@/sections/wing"; // adjust the path according to your project structure
import { SectionHeading } from "@/components/ui/section-heading"
import Image from 'next/image';
import { ProjectCarousel } from "@/sections/project-carousel"
import { ParallaxWrapper } from "@/components/shared/parallax-wrapper"
import { BlurReveal, WordReveal, StaggeredBlurReveal } from "@/components/shared/creative-reveal"
import { Highlighter } from "@/components/ui/highlighter"

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Timeline = dynamic(() => import("@/sections/timeline").then(mod => mod.Timeline), { ssr: true })
const ContactForm = dynamic(() => import("@/sections/contact-form").then(mod => mod.ContactForm), { ssr: true })

const StickyStackSection = ({
  children,
  index,
  bgColor = "bg-background",
  showShadow = false,
  isSticky = true,
  align = "center"
}: {
  children: React.ReactNode;
  index: number;
  bgColor?: string;
  showShadow?: boolean;
  isSticky?: boolean;
  align?: "center" | "start";
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The "Covered" effect: Shrink and Dim as the NEXT section comes up
  // Only applies if it's the section being covered
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: isSticky ? scale : 1,
        opacity: isSticky ? opacity : 1,
        zIndex: index * 10
      }}
      className={`${isSticky ? "sticky top-0" : "relative"} min-h-screen w-full flex flex-col ${align === "center" ? "justify-center" : "justify-start pt-32"} overflow-visible border-t border-black/5 ${bgColor} ${showShadow ? "shadow-[0_-150px_200px_rgba(0,0,0,0.1)]" : ""} group`}
    >
      {children}
    </motion.section>
  );
};

const PROJECTS = [
  {
    title: "AI Resume Analyzer",
    description: "Job Description Based Resume Evaluation. Analyzes resumes against job descriptions to evaluate skill match and technical relevance.",
    tags: ["Python", "Spacy", "perplexity API", "streamlit", "PDFplumber"],
    image: "/pr1 (1).png",
    demoUrl: "https://github.com/shaurya-tiwari/genai-image-app",
    repoUrl: "https://github.com/shaurya-tiwari/genai-image-app",
  },
  {
    title: "Gen AI Image App",
    description: "Offline Image Captioning lightweight app that generates AI descriptions.",
    tags: ["FastAPI", "Hugging Face", "Python"],
    image: "/img1.png",
    demoUrl: "https://github.com/shaurya-tiwari/resume_analyzer",
    repoUrl: "https://github.com/shaurya-tiwari/resume_analyzer",
  },
  {
    title: "Stickman Race",
    description: "A real-time 2D Online multiplayer game.",
    tags: ["React.js", "socket.io", "node.js"],
    image: "/project 1.png",
    demoUrl: "https://stickman-onlinemultiplayer-race.vercel.app/",
    repoUrl: "https://github.com/shaurya-tiwari/stickman-onlinemultiplayer-race",
  },
  {
    title: "YouTube Analytics",
    description: "Fetches and displays YouTube videos based on user searches with deep data integration.",
    tags: ["react.js", "tailwind CSS", "YouTube API"],
    image: "/tube.png",
    demoUrl: "https://you-tube-api-rose.vercel.app/",
    repoUrl: "https://github.com/shaurya-tiwari/YouTube-API",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <section className="relative min-h-[75vh] flex items-center justify-start w-full px-4 sm:px-6 lg:px-12 pt-24 pb-12 overflow-hidden">
        {/* Background Texture / CreativeHero - Senior UI/UX: Full-width for seamless editorial look */}
        <ParallaxWrapper speed={-0.2} className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <CreativeHero />
        </ParallaxWrapper>


        <div className="relative z-10 w-full max-w-7xl">
          <div className="space-y-12">
            <div className="mono-label">01 — DIGITAL ARCHITECT</div>

            <div className="relative inline-block w-full">
              <h1 className="editorial-heading text-6xl md:text-8xl lg:text-[13rem] leading-[0.8] tracking-tighter relative z-10">
                <StaggeredBlurReveal stagger={0.06}>SHAURYA</StaggeredBlurReveal><br />
                <StaggeredBlurReveal delay={0.6} stagger={0.06}>TIWARI</StaggeredBlurReveal>
              </h1>
              {/* The Wings - Re-aligned to new lowered content position */}
              <div className="absolute bottom-[-110%] md:bottom-[-20%] lg:bottom-[0%] -right-[5%] md:right-[10%] lg:-right-[-7%] w-[65%] md:w-[45%] lg:w-[40%] h-auto z-20 opacity-70 pointer-events-none contrast-125 scale-100 overflow-visible rotate-0">
                <Wings />
              </div>
            </div>

            <div className="designer-grid">
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground leading-snug max-w-xl italic">
                  <Highlighter color="sky" delay={1800}>AI & ML</Highlighter> student exploring machine learning, deep learning, and AI-driven solutions with a precise eye for digital experiences.
                </p>
                <div className="flex gap-8 pt-4">
                  <div className="group flex items-center gap-2 cursor-pointer">
                    <div className="mono-label group-hover:text-primary transition-colors">SCROLL TO DISCOVER</div>
                    <ArrowRight className="h-4 w-4 text-primary animate-bounce-x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 02: Biography (Normal Scroll, Z-index 20) */}
      <section id="about" className="relative pt-24 pb-12 w-full px-4 lg:px-12 bg-background z-20">
        {/* Biography Content */}
        <div className="designer-grid relative z-10 items-start">
          <ParallaxWrapper speed={0.15} className="col-span-12 lg:col-span-7">
            <SectionHeading title="BIOGRAPHY" subtitle="02 — CONTEXT" />
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                <WordReveal>
                  I'm an Artificial Intelligence and Machine Learning student with a strong interest in  <Highlighter color="neon" delay={1800}>Mathematics</Highlighter> and frontend development. I enjoy combining my analytical skills with creative design to build user-friendly and impactful projects.
                </WordReveal>
              </p>
              <p>
                <WordReveal delay={0.2}>
                  I use Python, Pandas, and NumPy for learning AI concepts and data analysis. I've created projects using  <Highlighter color="neon" delay={1800}>AI Prompt</Highlighter> and am skilled at prompting AI to generate ideas, code, and solutions efficiently.
                </WordReveal>
              </p>
              <div className="designer-grid mt-12 pt-12 border-t border-black/5">
                <div className="col-span-12 md:col-span-6 space-y-2">
                  <div className="mono-label">AVAILABILITY</div>
                  <div className="text-foreground text-xl">Open to  <Highlighter color="peach" delay={1800}>Internship</Highlighter> and <Highlighter color="peach" delay={1800}>Part-time</Highlighter> opportunities</div>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-2">
                  <div className="mono-label">LOCATION</div>
                  <div className="text-foreground text-xl">Noida, India — GMT +5:30</div>
                </div>
              </div>
            </div>
          </ParallaxWrapper>

          <div className="col-span-12 lg:col-span-5 h-full self-stretch mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] lg:h-full overflow-hidden grayscale transition-all duration-1000"
            >
              <Image
                src="/shauryaphoto.jpg"
                alt="Shaurya Tiwari"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layer Overlay Container - Z-index 30 ensures it's above Bio when it arrives */}
      <div className="relative z-30">
        {/* Layer 01 - Stack: Pinned Base Layer */}
        <StickyStackSection index={1} bgColor="bg-background" isSticky={true} align="start">
          <div id="skills" className="px-4 lg:px-12 w-full">
            <SectionHeading title="STACK" subtitle="03 — EXPERTISE" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-black/10 mt-8">
              <SkillBadge name="Python" level={80} />
              <SkillBadge name="Pandas" level={60} />
              <SkillBadge name="Numpy" level={90} />
              <SkillBadge name="Matplotlib" level={60} />
              <SkillBadge name="Seaborn" level={60} />
              <SkillBadge name="Plotly" level={70} />
              <SkillBadge name="Machine Learning" level={50} />
              <SkillBadge name="SQL" level={60} />
              <SkillBadge name="Tailwind CSS" level={95} />
              <SkillBadge name="React" level={60} />
            </div>
          </div>
        </StickyStackSection>

        {/* Layer 02 - Projects: Covers the Stack Layer */}
        <StickyStackSection index={2} bgColor="bg-black dark" showShadow={true} isSticky={true}>
          <div id="projects" className="px-4 lg:px-12 w-full">
            <ParallaxWrapper speed={0.05}>
              <SectionHeading title="PROJECTS" subtitle="04 — WORK" />
              <div className="mt-8">
                <ProjectCarousel projects={PROJECTS} />
              </div>
            </ParallaxWrapper>
          </div>
        </StickyStackSection>

        {/* Layer 03 - Experience: Covers the Projects Layer */}
        <StickyStackSection index={3} bgColor="bg-background" showShadow={true} isSticky={false}>
          <div id="experience" className="px-4 lg:px-12 w-full">
            <ParallaxWrapper speed={-0.05}>
              <SectionHeading title="EXPERIENCE" subtitle="05 — JOURNEY" />
              <div className="mt-12 w-full max-w-4xl">
                <Timeline />
              </div>
            </ParallaxWrapper>
          </div>
        </StickyStackSection>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative w-full px-4 lg:px-12">
        <ParallaxWrapper speed={0.05}>
          <div className="designer-grid items-center">
            <div className="col-span-12 lg:col-span-6">
              <SectionHeading title="CONTACT" subtitle="06 — CONTACT" />
              <div className="mt-8 space-y-12">
                <p className="text-2xl text-muted-foreground italic max-w-md">
                  <WordReveal>
                    Looking for a dedicated AI & ML student for internships or technical collaboration?  <Highlighter color="sky" delay={1800}>Let's connect</Highlighter>.
                  </WordReveal>
                </p>

                <div className="space-y-4">
                  <div className="group flex items-center gap-6">
                    <div className="mono-label !text-foreground/40">EMAIL</div>
                    <a href="mailto:shauryatiwari120@gmail.com" className="text-2xl hover:text-primary transition-colors">shauryatiwari120@gmail.com</a>
                  </div>
                  <div className="group flex items-center gap-6">
                    <div className="mono-label !text-foreground/40">LINKEDIN</div>
                    <a href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" className="text-2xl hover:text-primary transition-colors">shauryatiwari120</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </ParallaxWrapper>
      </section>

      {/* Footer */}
      <ParallaxWrapper speed={-0.1}>
        <footer className="py-12 px-4 lg:px-12 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="mono-label !text-foreground text-2xl tracking-tighter">SHAURYA TIWARI</div>
            <div className="flex gap-8">
              <Link href="https://github.com/shaurya-tiwari" target="_blank" className="mono-label hover:text-primary">GITHUB</Link>
              <Link href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" className="mono-label hover:text-primary">LINKEDIN</Link>
              <Link href="https://x.com/Shauryatiwari77" target="_blank" className="mono-label hover:text-primary">TWITTER</Link>
            </div>
            <div className="mono-label">© {new Date().getFullYear()} — NOIDA, IN</div>
          </div>
        </footer>
      </ParallaxWrapper>
    </div>
  )
}