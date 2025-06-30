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
import { GlassmorphicCard } from "@/components/glassmorphic-card"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-500 text-white">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* CreativeHero particles background */}
        <div className="absolute inset-0 z-0">
          <CreativeHero />
        </div>

        {/* Hero content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            {/* AI/ML Engineer & Frontend Developer tag */}
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gray-900/80 border border-gray-700 mb-4 will-change-transform">
                <span className="relative z-10">AI/ML Engineer & Frontend Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800/30 to-gray-600/30 animate-pulse-slow"></span>
              </div>
            </div>

            {/* Box with name and description */}
            <div className="backdrop-blur-sm  rounded-xl p-6 shadow-2xl space-y-6 ">
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-gray-500 font-normal">
                  Shaurya
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-[600px]">
                AI & ML student exploring machine learning, deep learning, and AI-driven solutions to solve real-world problems, and a keen interest in frontend development.
              </p>
            </div>

            {/* Contact me button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:border-zinc-500 bg-gray-900/60 hover:bg-gray-900/80 transition-colors duration-200"
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

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/shaurya-tiwari" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/Shauryatiwari77" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Placeholder for hero image */}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce-slow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gray-800/40 to-gray-600/40 opacity-50"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/shauryaphoto.jpeg?height=600&width=600"
                  alt="Shaurya Tiwari"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 aspect-square">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm an Artificial Intelligence and Machine Learning student with a strong interest in mathematics and frontend development. I enjoy combining my analytical skills with creative design to build user-friendly and impactful projects.             </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I use Python, Pandas, and NumPy for learning AI concepts and data analysis. I have created projects with the help of AI prompts, and I am also good at prompting AI to generate ideas, code, and solutions efficiently. </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I enjoy web development, creating interactive websites using React.js, JavaScript, Node.js, Spring Boot, and Java, along with databases like MySQL and MongoDB to build complete and scalable applications                </p>
                <p className="text-lg text-zinc-300 mt-4">I am always excited to learn, explore new technologies, and turn ideas into reality. Let's connect and create something amazing together.</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Shaurya Tiwari</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shauryatiwari120@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Noida, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/shauryaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-200">
                      Download Resume
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
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

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
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

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shauryatiwari120@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/shauryatiwari</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/shauryatiwari</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
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
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shauryatiwari/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:shauryatiwari120@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
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