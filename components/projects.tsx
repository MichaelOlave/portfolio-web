"use client";

import { ProjectCard, type ProjectData } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";

const projectsData: ProjectData[] = [
  {
    id: "taco",
    title: "TACO",
    description: "Advanced distributed system with real-time synchronization",
    category: "tech",
    tags: ["Next.js", "TypeScript", "Real-time"],
    problem:
      "Need for a scalable solution to handle real-time data synchronization across distributed systems with minimal latency.",
    solution:
      "Built a robust distributed architecture using event-driven patterns and WebSocket connections for real-time updates. Implemented caching strategies and database optimization for high-throughput scenarios.",
    challenges: [
      "Managing state consistency across multiple nodes",
      "Optimizing database queries for performance at scale",
      "Handling network failures and reconnection logic",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Redis",
    ],
    link: "https://github.com",
  },
  {
    id: "audiobook",
    title: "AudioBookSync",
    description: "Seamless audiobook synchronization platform",
    category: "tech",
    tags: ["React", "Audio API", "Cloud"],
    problem:
      "Users struggled with syncing audiobook progress across devices, leading to lost progress and fragmented experience.",
    solution:
      "Developed a cloud-based sync system that tracks playback position, bookmarks, and notes across all devices. Implemented progressive sync with offline support.",
    challenges: [
      "Syncing audio playback timestamps across devices accurately",
      "Handling offline scenarios with eventual consistency",
      "Optimizing cloud storage for media metadata",
    ],
    techStack: [
      "React",
      "Web Audio API",
      "AWS S3",
      "DynamoDB",
      "CloudFront",
    ],
    link: "https://github.com",
  },
  {
    id: "voxel-engine",
    title: "Voxel Engine",
    description: "Real-time 3D voxel rendering with physics simulation",
    category: "game-dev",
    tags: ["Unreal Engine 5", "C++", "Voxels"],
    problem:
      "Existing voxel engines had poor performance and limited scalability for large-scale destructible environments.",
    solution:
      "Created a custom voxel engine in UE5 with GPU-accelerated rendering, implementing spatial partitioning for efficient chunk management and networked voxel replication.",
    challenges: [
      "Implementing efficient voxel data structures with octrees",
      "Replicating voxel changes over network with minimal bandwidth",
      "Optimizing GPU memory usage for large environments",
    ],
    techStack: [
      "Unreal Engine 5",
      "C++",
      "HLSL",
      "Replication Graph",
    ],
  },
  {
    id: "home-lab",
    title: "Home Lab Infrastructure",
    description: "Self-hosted infrastructure with Proxmox, Docker, and networking",
    category: "systems",
    tags: ["Proxmox", "Docker", "Networking"],
    problem:
      "Need for a scalable, self-hosted infrastructure to run multiple services while maintaining security, monitoring, and ease of deployment.",
    solution:
      "Built a complete home lab environment using Proxmox for virtualization, Docker for containerization, and Traefik for intelligent routing and reverse proxying.",
    challenges: [
      "Setting up secure networking with proper firewall rules",
      "Managing SSL certificates and automatic renewal",
      "Implementing proper monitoring and alerting systems",
    ],
    techStack: [
      "Proxmox VE",
      "Docker",
      "Docker Compose",
      "Traefik",
      "Prometheus",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-background py-20 overflow-hidden">
      {/* Aura Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 glow-circle glow-blue" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 glow-circle glow-purple" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects that showcase problem-solving abilities,
              technical depth, and architectural thinking.
            </p>
          </div>

          <Separator />

          <div className="grid gap-6 md:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
