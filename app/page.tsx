"use client";

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, } from "lucide-react"
import SmoothScroll from "@/components/SmoothScroll";
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import Wings from "@/components/wing"; // adjust the path according to your project structure
import { SectionHeading } from "@/components/section-heading"
import Image from 'next/image';
import { ProjectStack } from "@/components/project-stack"

const Timeline = dynamic(() => import("@/components/timeline").then(mod => mod.Timeline), { ssr: true })
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => mod.ContactForm), { ssr: true })

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
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <CreativeHero />
        </div>


        <div className="relative z-10 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="mono-label">01 — DIGITAL ARCHITECT</div>

            <div className="relative inline-block w-full">
              <h1 className="editorial-heading text-6xl md:text-8xl lg:text-[13rem] leading-[0.8] tracking-tighter relative z-10">
                SHAURYA<br />
                TIWARI
              </h1>
              {/* The Wings - Re-aligned to new lowered content position */}
              <div className="absolute bottom-[-110%] md:bottom-[-20%] lg:bottom-[0%] -right-[5%] md:right-[10%] lg:-right-[-7%] w-[65%] md:w-[45%] lg:w-[40%] h-auto z-20 opacity-70 pointer-events-none grayscale contrast-150 scale-100 overflow-visible rotate-0">
                <Wings />
              </div>
            </div>

            <div className="designer-grid">
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground leading-snug max-w-xl italic">
                  AI & ML student exploring machine learning, deep learning, and AI-driven solutions with a precise eye for digital experiences.
                </p>
                <div className="flex gap-8 pt-4">
                  <div className="group flex items-center gap-2 cursor-pointer">
                    <div className="mono-label group-hover:text-primary transition-colors">SCROLL TO DISCOVER</div>
                    <ArrowRight className="h-4 w-4 text-primary animate-bounce-x" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="about" className="pt-12 pb-24 relative w-full px-4 lg:px-12 scroll-mt-20">

        <div className="designer-grid relative z-10 items-start">
          {/* Bio Tile */}
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading title="BIOGRAPHY" subtitle="02 — CONTEXT" />
            <div className="mt-8 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                I'm an Artificial Intelligence and Machine Learning student with a strong interest in mathematics and frontend development. I enjoy combining my analytical skills with creative design to build user-friendly and impactful projects.
              </p>
              <p>
                I use Python, Pandas, and NumPy for learning AI concepts and data analysis. I've created projects using AI prompts and am skilled at prompting AI to generate ideas, code, and solutions efficiently.
              </p>
              <div className="designer-grid mt-12 pt-12 border-t border-white/5">
                <div className="col-span-12 md:col-span-6 space-y-2">
                  <div className="mono-label">AVAILABILITY</div>
                  <div className="text-white text-xl">Open to Internship and full-time opportunities</div>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-2">
                  <div className="mono-label">LOCATION</div>
                  <div className="text-white text-xl">Noida, India — GMT +5:30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Tile */}
          <div className="col-span-12 lg:col-span-5 h-full self-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] lg:h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
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

          {/* Skills Grid - Integrated */}
          <div className="col-span-12 mt-24">
            <SectionHeading title="STACK" subtitle="03 — EXPERTISE" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-white/5 mt-8">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative w-full px-4 lg:px-12 overflow-hidden">
        <SectionHeading title="PROJECTS" subtitle="04 — WORK" />
        <div className="mt-12">
          <ProjectStack projects={PROJECTS} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative w-full px-4 lg:px-12">
        <SectionHeading title="CHRONOLOGY" subtitle="05 — JOURNEY" />
        <div className="mt-12 w-full max-w-4xl">
          <Timeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative w-full px-4 lg:px-12">
        <div className="designer-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading title="COLLABORATE" subtitle="06 — CONTACT" />
            <div className="mt-8 space-y-12">
              <p className="text-2xl text-muted-foreground italic max-w-md">
                Looking for a dedicated AI & ML student for internships or technical collaboration? Let's connect.
              </p>

              <div className="space-y-4">
                <div className="group flex items-center gap-6">
                  <div className="mono-label !text-white/40">EMAIL</div>
                  <a href="mailto:shauryatiwari120@gmail.com" className="text-2xl hover:text-primary transition-colors">shauryatiwari120@gmail.com</a>
                </div>
                <div className="group flex items-center gap-6">
                  <div className="mono-label !text-white/40">LINKEDIN</div>
                  <a href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" className="text-2xl hover:text-primary transition-colors">shauryatiwari120</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="mono-label !text-white/90 text-2xl tracking-tighter">SHAURYA TIWARI</div>
          <div className="flex gap-8">
            <Link href="https://github.com/shaurya-tiwari" target="_blank" className="mono-label hover:text-white">GITHUB</Link>
            <Link href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" className="mono-label hover:text-white">LINKEDIN</Link>
            <Link href="https://x.com/Shauryatiwari77" target="_blank" className="mono-label hover:text-white">TWITTER</Link>
          </div>
          <div className="mono-label">© {new Date().getFullYear()} — NOIDA, IN</div>
        </div>
      </footer>
    </div>
  )
}