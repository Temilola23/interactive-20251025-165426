"use client"

import { useEffect, useState } from "react"

export function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed w-8 h-8 rounded-full bg-primary/30 blur-xl pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Secondary cursor trail */}
      <div
        className="fixed w-4 h-4 rounded-full bg-accent/50 blur-md pointer-events-none z-50 transition-all duration-150"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
