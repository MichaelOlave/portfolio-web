"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import heroData from "@/data/hero.json";

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-16 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20 md:py-32">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance text-foreground">
              {heroData.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance">
              {heroData.title}
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full bg-${heroData.status.icon} ${heroData.status.pulseClass}`}
                />
                <span className="text-muted-foreground">
                  {heroData.status.text}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl text-balance leading-relaxed">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            {heroData.cta.map((button) => (
              <Button
                key={button.label}
                size="lg"
                variant={button.variant as "default" | "outline"}
                onClick={() => handleScroll(button.scrollId)}
              >
                {button.label}
              </Button>
            ))}
          </div>

          <Separator className="my-8" />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-4">
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-background opacity-50 border border-border rounded-lg p-4 space-y-1"
              >
                <p className={`text-2xl font-bold ${stat.colorClass}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
