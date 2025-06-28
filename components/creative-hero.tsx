"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    })

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        // Create a gradient with aqua green and other vibrant colors
        const colors = [
          "hsl(340, 80%, 90%)", // Soft Pinkish Magenta
          "hsl(45, 100%, 85%)", // Creamy Amber
          "hsl(220, 90%, 56%)", // Indigo Blue
          "hsl(210, 16%, 82%)", // Soft Light Grey
          "hsl(210, 9%, 46%)", // Cool Medium Grey
          "hsl(150, 80%, 45%)", // Fresh Mint Green
          "hsl(260, 70%, 60%)", // Soft Violet
          "hsl(20, 100%, 85%)", // Pastel Peach
          "hsl(180, 30%, 50%)", // Muted Teal Grey
          "hsl(280, 50%, 25%)", // Deep Royal Purple
          "hsl(90, 20%, 40%)", // Olive Moss Green
          "hsl(0, 10%, 96%)", // Almost White Warm Grey
          "hsl(350, 100%, 88%)", // Blush Pink
          "hsl(200, 100%, 85%)", // Powder Sky Blue
          "hsl(160, 50%, 85%)", // Mint Frost
          "hsl(240, 20%, 20%)", // Dark Slate Blue
          "hsl(55, 100%, 50%)", // Bright Lemon Yellow
          "hsl(25, 100%, 45%)", // Burnt Orange
          "hsl(310, 50%, 40%)", // Plum Mauve
          "hsl(185, 40%, 60%)", // Dusty Aqua
          "hsl(270, 80%, 80%)", // Lavender Blush
          "hsl(180, 10%, 20%)", // Charcoal Teal
          "hsl(35, 70%, 60%)", // Soft Tan Sand
          "hsl(210, 10%, 15%)", // Deep Charcoal Blue
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    // Create particle grid
    const particlesArray: Particle[] = []
    const particleCount = 1000
    const gridSize = 30

    function init() {
      particlesArray.length = 0

      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio

      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 - distance / 100})` // Aqua connections
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", init)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
