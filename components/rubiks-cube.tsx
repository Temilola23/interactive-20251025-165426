"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"

export function RubiksCube() {
  const [rotation, setRotation] = useState({ x: -20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const cubeRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startPos.x
    const deltaY = e.clientY - startPos.y

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }))

    setStartPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mouseup", handleMouseUp)
      return () => document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  // Auto-rotate when not dragging
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation((prev) => ({
          x: prev.x,
          y: prev.y + 0.3,
        }))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isDragging])

  const colors = {
    front: "bg-red-500",
    back: "bg-orange-500",
    right: "bg-blue-500",
    left: "bg-green-500",
    top: "bg-white",
    bottom: "bg-yellow-500",
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        ref={cubeRef}
        className="relative w-64 h-64 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ perspective: "1000px" }}
      >
        <div
          className="w-full h-full transition-transform duration-100"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Front Face */}
          <div
            className={`absolute w-full h-full ${colors.front} border-4 border-black/20 flex items-center justify-center`}
            style={{ transform: "translateZ(128px)" }}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-red-600 rounded border-2 border-black/30" />
              ))}
            </div>
          </div>

          {/* Back Face */}
          <div
            className={`absolute w-full h-full ${colors.back} border-4 border-black/20 flex items-center justify-center`}
            style={{ transform: "translateZ(-128px) rotateY(180deg)" }}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-orange-600 rounded border-2 border-black/30" />
              ))}
            </div>
          </div>

          {/* Right Face */}
          <div
            className={`absolute w-full h-full ${colors.right} border-4 border-black/20 flex items-center justify-center`}
            style={{ transform: "rotateY(90deg) translateZ(128px)" }}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-blue-600 rounded border-2 border-black/30" />
              ))}
            </div>
          </div>

          {/* Left Face */}
          <div
            className={`absolute w-full h-full ${colors.left} border-4 border-black/20 flex items-center justify-center`}
            style={{ transform: "rotateY(-90deg) translateZ(128px)" }}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-green-600 rounded border-2 border-black/30" />
              ))}
            </div>
          </div>

          {/* Top Face */}
          <div
            className={`absolute w-full h-full ${colors.top} border-4 border-black/20 flex items-center justify-center`}
            style={{ transform: "rotateX(90deg) translateZ(128px)" }}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-100 rounded border-2 border-black/30" />
              ))}
            </div>
          </div>

          {/* Bottom Face */}
          <div
            className={`absolute w-full h-full ${colors.bottom} border-4 border-black/20 flex items-center justify-center`}
            style={{ transform: "rotateX(-90deg) translateZ(128px)" }}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-yellow-600 rounded border-2 border-black/30" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Card className="px-6 py-3 bg-card/50 backdrop-blur-sm border-2">
        <p className="text-sm text-muted-foreground text-center">
          {isDragging ? "🎮 Dragging..." : "👆 Click and drag to rotate"}
        </p>
      </Card>
    </div>
  )
}
