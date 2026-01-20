"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "C++", "Python", "SQL"],
    accentColor: "text-blue-400",
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui", "Three.js"],
    accentColor: "text-blue-400",
  },
  {
    category: "Backend & Infrastructure",
    skills: ["Node.js", "PostgreSQL", "Redis", "Docker", "Proxmox"],
    accentColor: "text-green-400",
  },
  {
    category: "Game Development",
    skills: ["Unreal Engine 5", "C++", "Blueprints", "Networking", "Physics"],
    accentColor: "text-purple-400",
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Software Engineering student with a passion for building systems that scale.
            </p>
          </div>

          <Separator />

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                The Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Started with a curiosity about how things work. Quickly realized I loved
                building solutions to complex problems. From web applications to game
                engine architecture to infrastructure&mdash;I&rsquo;m driven by the challenge of making
                systems work efficiently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a degree in Software Engineering at Champlain College,
                where I&rsquo;ve deepened my knowledge of systems design, networking, and
                architectural patterns.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                What I&rsquo;m Focused On
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">→</span>
                  <span>Building performant full-stack applications</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-green-500 font-bold">→</span>
                  <span>Infrastructure as Code and DevOps practices</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-purple-400 font-bold">→</span>
                  <span>Game engine development and networked systems</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Writing clean, maintainable, and scalable code</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Technologies</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category) => (
                <div key={category.category} className="space-y-3">
                  <h4 className={`font-semibold ${category.accentColor}`}>
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Philosophy */}
          <Card>
            <CardHeader>
              <CardTitle>My Philosophy</CardTitle>
              <CardDescription>
                Great software is invisible&mdash;it just works. I believe in building systems that are:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span>
                  <span><strong>Performant:</strong> Every millisecond counts</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-green-500">✓</span>
                  <span><strong>Scalable:</strong> Ready for growth</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-purple-400">✓</span>
                  <span><strong>Maintainable:</strong> Future-you will thank you</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-blue-400">✓</span>
                  <span><strong>User-focused:</strong> The best tech serves people</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
