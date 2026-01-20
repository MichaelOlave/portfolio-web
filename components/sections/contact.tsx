"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import contactData from "@/data/contact.json";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail className="w-6 h-6" />,
  Github: <Github className="w-6 h-6" />,
  Linkedin: <Linkedin className="w-6 h-6" />,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {contactData.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {contactData.description}
            </p>
          </div>

          <Separator />

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactData.links.map((link) => (
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
                        {iconMap[link.iconName]}
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {link.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground">
                      {link.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Separator />

          {/* CTA Button */}
          <div className="text-center">
            <Button asChild size="lg" className="mb-8">
              <a href={contactData.cta.href}>{contactData.cta.label}</a>
            </Button>

            <p className="text-base text-muted-foreground">
              {contactData.cta.responseTime}
            </p>
          </div>

          <Separator />

          {/* Footer */}
          <div className="space-y-4 text-center py-8">
            <div className="flex items-center justify-center gap-2 text-base text-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>{contactData.footer.madeWith.replace("Made with ♥ using ", "")}</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-base text-muted-foreground">
              {contactData.footer.links.map((link, idx) => (
                <div key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                  {idx < contactData.footer.links.length - 1 && (
                    <span className="mx-4">•</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/70 pt-4">
              {contactData.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
