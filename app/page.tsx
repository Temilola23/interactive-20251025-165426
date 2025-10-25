import { RubiksCube } from "@/components/rubiks-cube"
import { MagneticButton } from "@/components/magnetic-button"
import { ParallaxSection } from "@/components/parallax-section"
import { InteractiveCard } from "@/components/interactive-card"
import { MouseTracker } from "@/components/mouse-tracker"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles, Zap, Layers, MousePointer2 } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <MouseTracker />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                INTERACTIVE
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto">
              Experience the future of web interactions with ultra-responsive components
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <MagneticButton>
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </MagneticButton>
              <MagneticButton variant="outline">
                <MousePointer2 className="w-4 h-4 mr-2" />
                Explore
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Rubik's Cube - Main Interactive Element */}
          <ScrollReveal delay={0.6}>
            <div className="flex justify-center">
              <RubiksCube />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection />

      {/* Interactive Cards Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Reactive Components</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Hover, click, and interact with these dynamic elements
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <InteractiveCard
                icon={<Sparkles className="w-8 h-8" />}
                title="Magnetic Effects"
                description="Elements that follow your cursor with smooth magnetic attraction"
                color="from-purple-500 to-pink-500"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <InteractiveCard
                icon={<Zap className="w-8 h-8" />}
                title="Instant Feedback"
                description="Real-time visual responses to every interaction"
                color="from-blue-500 to-cyan-500"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <InteractiveCard
                icon={<Layers className="w-8 h-8" />}
                title="3D Transforms"
                description="Depth and perspective that brings elements to life"
                color="from-orange-500 to-red-500"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <InteractiveCard
                icon={<MousePointer2 className="w-8 h-8" />}
                title="Cursor Tracking"
                description="Components that respond to your mouse position"
                color="from-green-500 to-emerald-500"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <InteractiveCard
                icon={<Sparkles className="w-8 h-8" />}
                title="Smooth Animations"
                description="Buttery 60fps animations for every interaction"
                color="from-violet-500 to-purple-500"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <InteractiveCard
                icon={<Zap className="w-8 h-8" />}
                title="Dynamic States"
                description="Elements that adapt and transform based on user input"
                color="from-pink-500 to-rose-500"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
