"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// ✅ Quadtree implementation
class Quadtree {
  boundary: { x: number; y: number; w: number; h: number }
  capacity: number
  points: any[]
  divided: boolean
  northeast: Quadtree | null
  northwest: Quadtree | null
  southeast: Quadtree | null
  southwest: Quadtree | null

  constructor(boundary: { x: number; y: number; w: number; h: number }, capacity: number) {
    this.boundary = boundary
    this.capacity = capacity
    this.points = []
    this.divided = false
    this.northeast = null
    this.northwest = null
    this.southeast = null
    this.southwest = null
  }

  subdivide() {
    const x = this.boundary.x
    const y = this.boundary.y
    const w = this.boundary.w / 2
    const h = this.boundary.h / 2

    this.northeast = new Quadtree({ x: x + w, y: y, w, h }, this.capacity)
    this.northwest = new Quadtree({ x, y, w, h }, this.capacity)
    this.southeast = new Quadtree({ x: x + w, y: y + h, w, h }, this.capacity)
    this.southwest = new Quadtree({ x, y: y + h, w, h }, this.capacity)

    this.divided = true
  }

  insert(point: any) {
    const { x, y } = point
    if (
      x < this.boundary.x ||
      x >= this.boundary.x + this.boundary.w ||
      y < this.boundary.y ||
      y >= this.boundary.y + this.boundary.h
    ) {
      return false
    }

    if (this.points.length < this.capacity) {
      this.points.push(point)
      return true
    } else {
      if (!this.divided) this.subdivide()

      return (
        this.northeast!.insert(point) ||
        this.northwest!.insert(point) ||
        this.southeast!.insert(point) ||
        this.southwest!.insert(point)
      )
    }
  }

  queryRange(range: { x: number; y: number; w: number; h: number }, found: any[]) {
    if (!this.intersects(range)) return found

    for (let p of this.points) {
      if (
        p.x >= range.x &&
        p.x < range.x + range.w &&
        p.y >= range.y &&
        p.y < range.y + range.h
      ) {
        found.push(p)
      }
    }

    if (this.divided) {
      this.northwest!.queryRange(range, found)
      this.northeast!.queryRange(range, found)
      this.southwest!.queryRange(range, found)
      this.southeast!.queryRange(range, found)
    }

    return found
  }

  intersects(range: { x: number; y: number; w: number; h: number }) {
    return !(
      range.x > this.boundary.x + this.boundary.w ||
      range.x + range.w < this.boundary.x ||
      range.y > this.boundary.y + this.boundary.h ||
      range.y + range.h < this.boundary.y
    )
  }
}

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse
    let mouseX = -1000
    let mouseY = -1000
    let targetX = -1000
    let targetY = -1000

    const mouseMoveHandler = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }

    window.addEventListener("mousemove", mouseMoveHandler)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      isMoving: boolean

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 3 + 2
        this.density = Math.random() * 30 + 1
        this.isMoving = false

        const colors = ["#00ffea", "#1fffff", "#00ffcc", "#ffffff"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(repellers: { x: number; y: number }[]) {
        let closestPt: { x: number; y: number } | null = null
        let minDist = 100 // maxDistance

        for (const pt of repellers) {
          const dx = pt.x - this.x
          const dy = pt.y - this.y
          const distSq = dx * dx + dy * dy
          if (distSq < 100 * 100) {
            const dist = Math.sqrt(distSq)
            if (dist < minDist) {
              minDist = dist
              closestPt = pt
            }
          }
        }

        if (closestPt) {
          const dx = closestPt.x - this.x
          const dy = closestPt.y - this.y
          const force = (100 - minDist) / 100
          const directionX = (dx / minDist) * force * this.density
          const directionY = (dy / minDist) * force * this.density
          this.x -= directionX
          this.y -= directionY
          this.isMoving = true
        } else {
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10
          this.isMoving = false
        }
      }

      draw() {
        ctx.strokeStyle = this.color
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.stroke()
      }
    }

    const particlesArray: Particle[] = []
    const gridSize = 30

    const init = () => {
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

    let wingElement: HTMLElement | null = null

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      if (!wingElement) {
        wingElement = document.getElementById("wing-repeller")
      }

      const interactionPoints: { x: number; y: number }[] = []

      // Only add mouse if it's actually been moved (not at default -1000)
      if (mouseX > -500) {
        interactionPoints.push({ x: mouseX, y: mouseY })
      }

      if (wingElement) {
        const wingRect = wingElement.getBoundingClientRect()
        const canvasRect = canvas.getBoundingClientRect()

        // Check if wing overlaps with canvas vertically
        if (wingRect.bottom > canvasRect.top && wingRect.top < canvasRect.bottom) {
          const left = wingRect.left - canvasRect.left
          const top = wingRect.top - canvasRect.top
          const width = wingRect.width
          const height = wingRect.height

          // Keep only the RIGHT end point (tip) for the wing repulsion as requested
          interactionPoints.push({ x: left + width * 0.85, y: top + height * 0.15 }) // Top Right Tip
        }
      }

      const quadtree = new Quadtree(
        { x: 0, y: 0, w: canvas.width / devicePixelRatio, h: canvas.height / devicePixelRatio },
        4
      )

      for (let p of particlesArray) {
        quadtree.insert(p)
      }

      for (let p of particlesArray) {
        p.update(interactionPoints)
        p.draw()

        const neighbours: Particle[] = []
        quadtree.queryRange(
          { x: p.x - 30, y: p.y - 30, w: 60, h: 60 },
          neighbours
        )

        for (let n of neighbours) {
          if (p === n) continue
          const dx = p.x - n.x
          const dy = p.y - n.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = p.isMoving || n.isMoving
              ? "#ffffff"
              : `rgba(0, 255, 255, ${0.5 - distance / 100})`
            ctx.lineWidth = 0.3
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(n.x, n.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[400px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
