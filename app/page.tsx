import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, } from "lucide-react"
import SmoothScroll from "@/components/SmoothScroll";
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import Wings from "@/components/wing"; // adjust the path according to your project structure
import { SectionHeading } from "@/components/section-heading"
import Image from 'next/image';
import { GlassmorphicCard } from "@/components/glassmorphic-card"
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-gray-800 to-slate-400 text-white overflow-x-hidden">
      <SmoothScroll />
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <section className="relative flex items-center justify-center w-full py-12 md:py-24">
        {/* Background / CreativeHero */}
        <div className="absolute inset-0 z-0">
          <CreativeHero />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 w-full">
            <div className="w-full">
              <div className="backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6 shadow-2xl w-full">
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="text-gray-300 font-normal">Shaurya</span>
                </h1>
                <p className="text-sm sm:text-base md:text-xl text-zinc-300 max-w-full leading-relaxed">
                  AI & ML student exploring machine learning, deep learning, and AI-driven solutions to solve real-world problems, with a keen interest in frontend development.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 w-full">
              <Link
                href="https://github.com/shaurya-tiwari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>

              <Link
                href="https://www.linkedin.com/in/shauryatiwari120/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>

              <Link
                href="https://x.com/Shauryatiwari77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* wingsss */}

      <section className="z-50">
        <div >
          <Wings />
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 md:py-32 relative w-full">
        <div className="container relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16 w-full">
            <div className="relative h-full w-full">
              <div className="relative h-[450px] md:h-[850px] rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 w-full">
                <Image
                  src="/shauryaphoto.jpg"
                  alt="Shaurya Tiwari"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <GlassmorphicCard className="h-full flex flex-col">
                <div className="mb-4">
                  <p className="text-xs md:text-base text-gray-200 leading-relaxed">
                    I'm an Artificial Intelligence and Machine Learning student with a strong interest in mathematics and frontend development. I enjoy combining my analytical skills with creative design to build user-friendly and impactful projects.
                  </p>
                  <p className="text-xs md:text-base text-gray-200 mt-2 md:mt-4 leading-relaxed">
                    I use Python, Pandas, and NumPy for learning AI concepts and data analysis. I've created projects using AI prompts and am skilled at prompting AI to generate ideas, code, and solutions efficiently.
                  </p>
                  <p className="text-xs md:text-base text-gray-200 mt-2 md:mt-4 leading-relaxed">
                    I enjoy web development—creating interactive websites using React.js, JavaScript, Node.js, Spring Boot, and Java, along with databases like MySQL and MongoDB to build complete and scalable applications.
                  </p>
                  <p className="text-xs md:text-base text-gray-200 mt-2 md:mt-4 leading-relaxed">
                    I am always excited to learn, explore new technologies, and turn ideas into reality. Let's connect and create something amazing together.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-6 md:mt-8 w-full">
                  <div className="space-y-1 min-w-0 hidden md:block">
                    <div className="text-xs md:text-sm text-gray-500">Name</div>
                    <div className="text-sm md:text-base font-thin">Shaurya Tiwari</div>
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs md:text-sm text-gray-500">Email</div>
                    <div className="text-sm md:text-base font-thin break-all overflow-hidden">shauryatiwari120@gmail.com</div>
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs md:text-sm text-gray-500">Location</div>
                    <div className="text-sm md:text-base font-thin">Noida, India</div>
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs md:text-sm text-gray-500">Availability</div>
                    <div className="text-sm md:text-base font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 w-full">
                  <a
                    href="/SHAURYA RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gray-800 hover:bg-zinc-700 text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                      Resume
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-32 relative w-full">
        <div className="container relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 w-full">
            <SkillBadge name="Python" level={80} />
            <SkillBadge name="Pandas" level={60} />
            <SkillBadge name="Numpy" level={90} />
            <SkillBadge name="Matplotlib" level={60} />
            <SkillBadge name="Seaborn" level={60} />
            <SkillBadge name="Plotly / Cufflinks" level={70} />
            <SkillBadge name="Machine Learning" level={50} />
            <SkillBadge name="SQL" level={60} />
            <SkillBadge name="Mathematics" level={80} />
            <SkillBadge name="AI Prompt" level={90} />
            <SkillBadge name="Tailwind CSS" level={95} />
            <SkillBadge name="Web Development" level={75} />
            <SkillBadge name="React" level={60} />
            <SkillBadge name="Next.js" level={60} />
            <SkillBadge name="Java" level={78} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-32 relative w-full">
        <div className="container relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="Some of my work" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 w-full">
            <ProjectCard
              title="AI Resume Analyzer Job Description Based Resume Evaluation"
              description="Analyzes resumes against job descriptions to evaluate skill match."
              tags={["Python", "Spacy", "perplexity API", "streamlit", "PDFplumber"]}
              image="/pr1 (1).png?height=400&width=600"
              demoUrl="https://github.com/shaurya-tiwari/genai-image-app"
              repoUrl="https://github.com/shaurya-tiwari/genai-image-app"
            />
            <ProjectCard
              title="Image Captioning and Image Classification app with Gen AI"
              description="Offline Image Captioning lightweight app that generates AI-based descriptions for image."
              tags={["FastAPI", "Jinja2", "Hugging Face’s BLIP model", "CSS", "HTML", "Python"]}
              image="/img1.png?height=400&width=600"
              demoUrl="https://github.com/shaurya-tiwari/resume_analyzer"
              repoUrl="https://github.com/shaurya-tiwari/resume_analyzer"
            />
            <ProjectCard
              title="Online multiplayer game"
              description="A real-time 2D Online multiplayer game."
              tags={["React.js", "socket.io", "Tailwind CSS", "express.js", "node.js"]}
              image="/project 1.png?height=400&width=600"
              demoUrl="https://stickman-onlinemultiplayer-race.vercel.app/"
              repoUrl="https://github.com/shaurya-tiwari/stickman-onlinemultiplayer-race"
            />
            <ProjectCard
              title="YouTube API (video streaming site)"
              description="This site fetches and displays YouTube videos based on user searches."
              tags={["react.js", "tailwind CSS", "YouTube API"]}
              image="/tube.png?height=400&width=600"
              repoUrl="https://github.com/shaurya-tiwari/YouTube-API"
              demoUrl="https://you-tube-api-rose.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-32 relative w-full">
        <div className="container relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16 w-full">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 relative w-full">
        <div className="container relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 mt-16 items-stretch w-full">
            <GlassmorphicCard className="h-full md:max-h-[800px] overflow-y-auto custom-scrollbar">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-zinc-400">Email</div>
                    <div className="text-sm sm:text-base font-medium break-all">shauryatiwari120@gmail.com</div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-zinc-400">LinkedIn</div>
                    <div className="text-sm sm:text-base font-medium break-all">linkedin.com/in/shauryatiwari120/</div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-zinc-400">GitHub</div>
                    <div className="text-sm sm:text-base font-medium break-all">github.com/shaurya-tiwari</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800/50">
                <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Current Status</h4>
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <div className="w-3 h-3 rounded-full bg-green-800 flex-shrink-0"></div>
                  <span>Available for Internship and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>
            <div className="w-full md:max-h-[800px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12 w-full">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <Link href="/" className="hover:text-purple-400 transition-colors text-xl">
              <span className="text-white italic">Shaurya Tiwari</span>
            </Link>
            <p className="text-sm text-zinc-300 mt-2">
              © {new Date().getFullYear()} Shaurya. Built with passion and continuous learning.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            <Link href="https://github.com/shaurya-tiwari" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shauryatiwari120/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/Shauryatiwari77" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://mail.google.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white"
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