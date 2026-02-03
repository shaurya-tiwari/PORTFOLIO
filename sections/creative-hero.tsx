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
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible = useRef(false)
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true }) // Optimize for alpha
    if (!ctx) return

    let devicePixelRatio: number
    let width: number
    let height: number

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse tracking
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

    // Particle class (Moved inside to access ctx and avoid object creation)
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
        this.color = "#2c2c2cff"
      }

      update(repellers: { x: number; y: number }[]) {
        let closestPt: { x: number; y: number } | null = null
        let minDist = 100 // interactionRadius

        for (let i = 0; i < repellers.length; i++) {
          const pt = repellers[i]
          const dx = pt.x - this.x
          const dy = pt.y - this.y
          const distSq = dx * dx + dy * dy

          if (distSq < 10000) { // 100 * 100
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
          const dx = this.x - this.baseX
          const dy = this.y - this.baseY

          if (Math.abs(dx) > 0.01) {
            this.x -= dx / 10
            this.isMoving = true
          } else {
            this.x = this.baseX
          }

          if (Math.abs(dy) > 0.01) {
            this.y -= dy / 10
            this.isMoving = true
          } else {
            this.y = this.baseY
          }

          if (Math.abs(dx) <= 0.01 && Math.abs(dy) <= 0.01) {
            this.isMoving = false
          }
        }
      }

      draw() {
        ctx.strokeStyle = this.color
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    const particlesArray: Particle[] = []

    const init = () => {
      particlesArray.length = 0
      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio
      const isSmall = window.innerWidth < 768
      const currentGridSize = isSmall ? 25 : 35 // Slightly larger grid for less particles

      const numX = Math.floor(canvasWidth / currentGridSize)
      const numY = Math.floor(canvasHeight / currentGridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * currentGridSize + currentGridSize / 2
          const posY = y * currentGridSize + currentGridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    let wingElement: HTMLElement | null = null
    const interactionPoints: { x: number; y: number }[] = []

    const animate = () => {
      if (!isVisible.current) {
        animationFrameId.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, width, height)

      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      if (!wingElement) {
        wingElement = document.getElementById("wing-repeller")
      }

      interactionPoints.length = 0
      if (mouseX > -500) {
        interactionPoints.push({ x: mouseX, y: mouseY })
      }

      if (wingElement) {
        const wingRect = wingElement.getBoundingClientRect()
        const canvasRect = canvas.getBoundingClientRect()

        if (wingRect.bottom > canvasRect.top && wingRect.top < canvasRect.bottom) {
          const left = wingRect.left - canvasRect.left
          const top = wingRect.top - canvasRect.top
          const w = wingRect.width
          const h = wingRect.height
          interactionPoints.push({ x: left + w * 0.85, y: top + h * 0.15 })
        }
      }

      const boundary = { x: 0, y: 0, w: width, h: height }
      const quadtree = new Quadtree(boundary, 4)

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]
        quadtree.insert(p)
      }

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]
        p.update(interactionPoints)
        p.draw()

        const neighbours: Particle[] = []
        quadtree.queryRange({ x: p.x - 35, y: p.y - 35, w: 70, h: 70 }, neighbours)

        for (let j = 0; j < neighbours.length; j++) {
          const n = neighbours[j]
          if (p === n) continue
          const dx = p.x - n.x
          const dy = p.y - n.y
          const distSq = dx * dx + dy * dy

          if (distSq < 1225) { // 35 * 35
            const distance = Math.sqrt(distSq)
            ctx.beginPath()
            ctx.strokeStyle = p.isMoving || n.isMoving
              ? "rgba(0, 0, 0, 0.6)"
              : `rgba(0, 0, 0, ${0.35 - distance / 100})`
            ctx.lineWidth = 0.3
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(n.x, n.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Intersection Observer to stop animation when off-screen
    const observer = new IntersectionObserver((entries) => {
      isVisible.current = entries[0].isIntersecting
    }, { threshold: 0.1 })

    if (container) observer.observe(container)

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", mouseMoveHandler)
      cancelAnimationFrame(animationFrameId.current)
      if (container) observer.unobserve(container)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-[250px] md:h-[350px] lg:h-[400px] relative">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </div>
  )
}

