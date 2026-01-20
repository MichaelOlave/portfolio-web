"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-background pt-20">
      <div className="absolute inset-0 radial-gradient-dark -z-10" />

      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-balance text-foreground">
              Michael Olave
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Software Engineer • Champlain College
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 pulse-slow" />
                <span className="text-muted-foreground">Currently Building</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/80 max-w-2xl text-balance leading-relaxed">
            Passionate about building performant systems and exploring the
            intersection of infrastructure, game development, and user experience.
            Specialist in full-stack development, DevOps, and systems architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap pt-4">
            <Button
              size="lg"
              variant="default"
              onClick={() => handleScroll("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("contact")}
            >
              Get in Touch
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">3+</p>
              <p className="text-sm text-muted-foreground">Years Learning</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-400">10+</p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">∞</p>
              <p className="text-sm text-muted-foreground">Curiosity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
