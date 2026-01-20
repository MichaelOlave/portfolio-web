"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: "tech" | "game-dev" | "systems";
  tags: string[];
  problem: string;
  solution: string;
  challenges: string[];
  techStack: string[];
  link?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const categoryColors: Record<string, string> = {
  "tech": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "game-dev": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "systems": "bg-green-500/20 text-green-400 border-green-500/30",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categoryLabel = {
    tech: "Tech",
    "game-dev": "Game Dev",
    systems: "Systems",
  }[project.category];

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className={categoryColors[project.category]}
            >
              {categoryLabel}
            </Badge>
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="p-0 text-primary hover:text-primary/80"
            onClick={() => setIsOpen(true)}
          >
            <span>Case Study</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Problem Statement */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Problem</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <Separator />

            {/* Solution */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Solution</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            <Separator />

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Challenges */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Key Challenges
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">→</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.link && (
              <>
                <Separator />
                <Button
                  asChild
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
