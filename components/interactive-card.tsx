"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"

interface InteractiveCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export function InteractiveCard({ icon, title, description, color }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX = ((e.clientY - centerY) / rect.height) * -20
    const rotateY = ((e.clientX - centerX) / rect.width) * 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Card
        className="p-8 h-full transition-all duration-300 ease-out cursor-pointer border-2 hover:border-primary"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 transition-transform duration-300`}
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          }}
        >
          {icon}
        </div>

        <h3
          className="text-2xl font-bold mb-3"
          style={{
            transform: isHovered ? "translateZ(15px)" : "translateZ(0px)",
          }}
        >
          {title}
        </h3>

        <p
          className="text-muted-foreground leading-relaxed"
          style={{
            transform: isHovered ? "translateZ(10px)" : "translateZ(0px)",
          }}
        >
          {description}
        </p>

        {/* Shine effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700"
          style={{
            transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
          }}
        />
      </Card>
    </div>
  )
}
