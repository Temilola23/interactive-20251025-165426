"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Floating elements with parallax */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute top-40 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div style={{ transform: `translateY(${scrollY * 0.05}px)` }} className="transition-transform">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Scroll to Experience</h2>
          <p className="text-xl text-muted-foreground mb-12 text-balance">
            Watch elements move at different speeds creating depth and dimension
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0.03, 0.06, 0.09].map((speed, index) => (
            <div key={index} style={{ transform: `translateY(${scrollY * speed}px)` }} className="transition-transform">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 hover:border-primary transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl animate-pulse-glow" />
                <h3 className="text-xl font-semibold mb-2">Layer {index + 1}</h3>
                <p className="text-sm text-muted-foreground">Moving at {speed * 100}x scroll speed</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
