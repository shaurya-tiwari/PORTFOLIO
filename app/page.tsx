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
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-gray-800 to-slate-400 text-white overflow-x-hidden">
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
            {/* Optimized hero box - removed heavy backdrop blur */}
 <div className="mt-20 md:mt-0">
  <div className="backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6 shadow-2xl">
    <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tight will-change-auto">
      <span className="block">Hi, I'm</span>
      <span className="text-gray-300 font-normal">Shaurya</span>
    </h1>
    <p className="text-sm sm:text-base md:text-xl text-zinc-300 max-w-[600px] leading-relaxed">
      AI & ML student exploring machine learning, deep learning, and AI-driven solutions to solve real-world problems, and a keen interest in frontend development.
    </p>
  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <div className="relative h-full">
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

            <div className="space-y-4 md:space-y-6 relative h-full md:aspect-square">
              <GlassmorphicCard>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  I'm an Artificial Intelligence and Machine Learning student with a strong interest in mathematics and frontend development. I enjoy combining my analytical skills with creative design to build user-friendly and impactful projects.
                </p>
                <p className="text-sm md:text-base text-gray-200 mt-2 md:mt-4 leading-relaxed">
                  I use Python, Pandas, and NumPy for learning AI concepts and data analysis. I’ve created projects using AI prompts and am skilled at prompting AI to generate ideas, code, and solutions efficiently.
                </p>
                <p className="text-sm md:text-base text-gray-200 mt-2 md:mt-4 leading-relaxed">
                  I enjoy web development—creating interactive websites using React.js, JavaScript, Node.js, Spring Boot, and Java, along with databases like MySQL and MongoDB to build complete and scalable applications.
                </p>
                <p className="text-sm md:text-base text-gray-200 mt-2 md:mt-4 leading-relaxed">
                  I am always excited to learn, explore new technologies, and turn ideas into reality. Let's connect and create something amazing together.
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-6 md:mt-8">
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm text-gray-500">Name</div>
                    <div className="text-sm md:text-base font-thin">Shaurya Tiwari</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm text-gray-500">Email</div>
                    <div className="text-sm md:text-base font-thin break-words">shauryatiwari120@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm text-gray-500">Location</div>
                    <div className="text-sm md:text-base font-thin">Noida, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm text-gray-500">Availability</div>
                    <div className="text-sm md:text-base font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <a
                    href="/shauryaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-150 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
      <ProjectCard
        title="Task Management App"
        description="A collaborative task management application with real-time updates."
        tags={["React", "Firebase", "Tailwind CSS", "Redux", "shaurya"]}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 mt-16 items-stretch">
            <GlassmorphicCard>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center transition-colors duration-150">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-zinc-800">Email</div>
                    <div className="text-sm sm:text-base font-medium">shauryatiwari120@gmail.com</div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className=" flex items-center justify-center transition-colors duration-150">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-zinc-800">LinkedIn</div>
                    <div className="text-sm sm:text-base font-medium">linkedin.com/in/shauryatiwari</div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <div className=" flex items-center justify-center transition-colors duration-150">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-zinc-800">GitHub</div>
                    <div className="text-sm sm:text-base font-medium">github.com/shauryatiwari</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800/50">
                <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Current Status</h4>
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <div className="w-3 h-3 rounded-full bg-green-800 animate-pulse"></div>
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
