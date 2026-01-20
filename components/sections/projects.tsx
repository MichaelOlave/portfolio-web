"use client";

import { ProjectCard, type ProjectData } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";
import projectsData from "@/data/projects.json";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {projectsData.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {projectsData.description}
            </p>
          </div>

          <Separator />

          <div className="grid gap-6 md:grid-cols-2">
            {(projectsData.projects as ProjectData[]).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
