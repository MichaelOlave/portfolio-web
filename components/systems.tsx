"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Server, Database, Network, GitBranch, Shield, BarChart3 } from "lucide-react";

interface SystemComponent {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
}

const systemComponents: SystemComponent[] = [
  {
    title: "Virtualization",
    description: "Proxmox VE for bare-metal hypervisor management with high availability",
    icon: <Server className="w-6 h-6" />,
    technologies: ["Proxmox VE", "KVM", "LXC"],
  },
  {
    title: "Containerization",
    description: "Docker and Docker Compose for microservices and application deployment",
    icon: <GitBranch className="w-6 h-6" />,
    technologies: ["Docker", "Docker Compose", "Container Registry"],
  },
  {
    title: "Reverse Proxy & Routing",
    description: "Traefik for intelligent routing, SSL termination, and load balancing",
    icon: <Network className="w-6 h-6" />,
    technologies: ["Traefik", "Let's Encrypt", "SSL/TLS"],
  },
  {
    title: "Databases",
    description: "PostgreSQL for relational data and Redis for caching and sessions",
    icon: <Database className="w-6 h-6" />,
    technologies: ["PostgreSQL", "Redis", "Backups"],
  },
  {
    title: "Monitoring & Observability",
    description: "Prometheus for metrics, Grafana for visualization, and alerting setup",
    icon: <BarChart3 className="w-6 h-6" />,
    technologies: ["Prometheus", "Grafana", "AlertManager"],
  },
  {
    title: "Security",
    description: "Firewall rules, VPN access, and secure networking practices",
    icon: <Shield className="w-6 h-6" />,
    technologies: ["iptables", "UFW", "VPN", "SSH Keys"],
  },
];

export function Systems() {
  return (
    <section id="systems" className="relative min-h-screen bg-background py-20 overflow-hidden">
      {/* Aura Effects - Green for Systems */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-circle glow-green" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 glow-circle glow-blue" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Systems & Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Beyond application development&mdash;here&rsquo;s how I architect and maintain
              self-hosted infrastructure that powers high-availability systems.
            </p>
          </div>

          <Separator />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemComponents.map((component, idx) => (
              <Card
                key={idx}
                className="hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-green-500">{component.icon}</div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center space-y-2">
              <p className="text-3xl font-bold text-green-500">3</p>
              <p className="text-sm text-muted-foreground">VMs Running</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-3xl font-bold text-green-500">12+</p>
              <p className="text-sm text-muted-foreground">Containers</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-3xl font-bold text-green-500">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-3xl font-bold text-green-500">∞</p>
              <p className="text-sm text-muted-foreground">Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
