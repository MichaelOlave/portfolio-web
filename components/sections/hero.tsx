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
    <section id="hero" className="relative min-h-screen pt-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-balance text-foreground">
              {heroData.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {heroData.title}
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full bg-${heroData.status.icon} ${heroData.status.pulseClass}`} />
                <span className="text-muted-foreground">
                  {heroData.status.text}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/80 max-w-2xl text-balance leading-relaxed">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap pt-4">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
            {heroData.stats.map((stat) => (
              <div key={stat.label}>
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
