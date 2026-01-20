"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "michael@example.com",
    href: "mailto:michael@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@michaelolave",
    href: "https://github.com/michaelolave",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Michael Olave",
    href: "https://linkedin.com/in/michaelolave",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-background py-20 overflow-hidden">
      {/* Aura Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 glow-circle glow-blue" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 glow-circle glow-purple" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 glow-circle glow-green" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Let&rsquo;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you want to discuss a project, explore opportunities, or just chat
              about technology&mdash;I&rsquo;m always open to conversations.
            </p>
          </div>

          <Separator />

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {link.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>

          <Separator />

          {/* CTA Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="mb-8"
            >
              <a href="mailto:michael@example.com">Send Me an Email</a>
            </Button>

            <p className="text-sm text-muted-foreground">
              I typically respond within 24 hours
            </p>
          </div>

          <Separator />

          {/* Footer */}
          <div className="space-y-4 text-center py-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>using Next.js, React, and Tailwind CSS</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                GitHub Repo
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>

            <p className="text-xs text-muted-foreground/70 pt-4">
              © 2024 Michael Olave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
