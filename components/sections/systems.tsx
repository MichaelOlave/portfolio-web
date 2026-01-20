"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Server,
  Database,
  Network,
  GitBranch,
  Shield,
  BarChart3,
} from "lucide-react";
import systemsData from "@/data/systems.json";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

export function Systems() {
  return (
    <section
      id="systems"
      className="relative min-h-screen py-12 sm:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {systemsData.title}
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl">
              {systemsData.description}
            </p>
          </div>

          <Separator />

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {systemsData.components.map((component, idx) => (
              <Card
                key={idx}
                className="hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-green-500">
                      {iconMap[component.iconName]}
                    </div>
                  </div>
                  <CardTitle>{component.title}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-green-500/20 text-green-400 border-green-500/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="mt-8" />

          {/* Infrastructure Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
            {systemsData.stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <p className="text-3xl font-bold text-green-500">{stat.value}</p>
                <p className="text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
