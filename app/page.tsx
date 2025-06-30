import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import Image from 'next/image';
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Ultra-optimized fixed background */}
      <div className="fixed inset-0 bg-gray-900 -z-10 will-change-auto"></div>
      
      {/* Optimized components with reduced frequency */}
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section - Maximum optimization */}
      <section className="relative min-h-screen flex items-center justify-center isolate">
        {/* CreativeHero with containment */}
        <div className="absolute inset-0 z-0 contain-layout contain-style will-change-auto">
          <CreativeHero />
        </div>

        {/* Hero content with optimized rendering */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center contain-layout">
          <div className="space-y-6">
            {/* Tag with minimal effects */}
            <div className="inline-block">
              <div className="px-3 py-1 text-sm font-medium rounded-full bg-gray-800/90 border border-gray-600/50 mb-4 transition-colors duration-150">
                <span>AI/ML Engineer & Frontend Developer</span>
              </div>
            </div>

            {/* Optimized hero box - removed heavy backdrop blur */}
            <div className="bg-gray-900/80 border border-gray-700/30 rounded-xl p-6 shadow-xl space-y-6 transition-all duration-150 hover:border-gray-600/40">
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight will-change-auto">
                <span className="block">Hi, I'm</span>
                <span className="text-gray-300 font-normal">
                  Shaurya
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-[600px] leading-relaxed">
                AI & ML student exploring machine learning, deep learning, and AI-driven solutions to solve real-world problems, and a keen interest in frontend development.
              </p>
            </div>

            {/* Optimized contact button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-gray-500 bg-gray-800/90 hover:bg-gray-700/90 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
              >
                <a
                  href="https://wa.me/+917065649910"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact me
                </a>
              </Button>
            </div>

            {/* Social links with micro-interactions */}
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/shaurya-tiwari" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/Shauryatiwari77" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator with optimized animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-duration:2s]"></div>
          </div>
        </div>
      </section>

      {/* About Section - Optimized layout */}
      <section id="about" className="py-32 relative contain-layout">
        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-200 hover:border-gray-600/50">
                <Image
                  src="/shauryaphoto.jpeg"
                  alt="Shaurya Tiwari"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  priority
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 aspect-square">
              <GlassmorphicCard>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm an Artificial Intelligence and Machine Learning student with a strong interest in mathematics and frontend development. I enjoy combining my analytical skills with creative design to build user-friendly and impactful projects.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  I use Python, Pandas, and NumPy for learning AI concepts and data analysis. I have created projects with the help of AI prompts, and I am also good at prompting AI to generate ideas, code, and solutions efficiently.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  I enjoy web development, creating interactive websites using React.js, JavaScript, Node.js, Spring Boot, and Java, along with databases like MySQL and MongoDB to build complete and scalable applications
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  I am always excited to learn, explore new technologies, and turn ideas into reality. Let's connect and create something amazing together.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Name</div>
                    <div className="font-medium">Shaurya Tiwari</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">shauryatiwari120@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">Noida, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/shauryaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-800/90 hover:bg-zinc-700/90 text-white transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]">
                      Download Resume
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Optimized grid */}
      <section id="skills" className="py-32 relative contain-layout">
        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Java" level={85} />
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="Tailwind CSS" level={95} />
            <SkillBadge name="Python" level={95} />
            <SkillBadge name="Machine Learning" level={90} />
            <SkillBadge name="Web Development" level={95} />
            <SkillBadge name="React" level={90} />
            <SkillBadge name="Next.js" level={85} />
            <SkillBadge name="Pandas" level={80} />
            <SkillBadge name="Mathematics" level={85} />
            <SkillBadge name="SQL" level={80} />
          </div>
        </div>
      </section>

      {/* Projects Section - Optimized cards */}
      <section id="projects" className="py-32 relative contain-layout">
        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce platform built with Next.js, Stripe, and Prisma."
              tags={["Next.js", "TypeScript", "Prisma", "Stripe"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/shauryatiwari"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates."
              tags={["React", "Firebase", "Tailwind CSS", "Redux"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/shauryatiwari"
            />
            <ProjectCard
              title="AI Content Generator"
              description="An AI-powered content generation tool using OpenAI's GPT models."
              tags={["Next.js", "OpenAI API", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/shauryatiwari"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A mobile-first fitness tracking application with data visualization."
              tags={["React Native", "TypeScript", "D3.js", "Firebase"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/shauryatiwari"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A beautiful weather dashboard with forecasts and historical data."
              tags={["React", "Weather API", "Chart.js", "Styled Components"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/shauryatiwari"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/shauryatiwari"
            />
          </div>
        </div>
      </section>

      {/* Experience Section - Clean layout */}
      <section id="experience" className="py-32 relative contain-layout">
        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section - Optimized forms */}
      <section id="contact" className="py-32 relative contain-layout">
        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800/90 flex items-center justify-center transition-colors duration-150">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shauryatiwari120@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800/90 flex items-center justify-center transition-colors duration-150">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/shauryatiwari</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800/90 flex items-center justify-center transition-colors duration-150">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/shauryatiwari</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800/50">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer - Minimal and clean */}
      <footer className="border-t border-zinc-800/50 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">Shaurya</span>
              <span className="text-white">Tiwari</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Shaurya Tiwari. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/shauryatiwari" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shauryatiwari/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:shauryatiwari120@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white transition-all duration-150 hover:scale-110 active:scale-95"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Add this CSS to your global styles for maximum performance */
/*
@layer utilities {
  .contain-layout {
    contain: layout;
  }
  
  .contain-style {
    contain: style;
  }
  
  .contain-paint {
    contain: paint;
  }
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
*/