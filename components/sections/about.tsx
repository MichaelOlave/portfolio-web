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
import aboutData from "@/data/about.json";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-12 sm:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {aboutData.title}
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              {aboutData.subtitle}
            </p>
          </div>

          <Separator />

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {aboutData.journey.heading}
              </h3>
              {aboutData.journey.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {aboutData.focus.heading}
              </h3>
              <ul className="space-y-3">
                {aboutData.focus.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-lg text-muted-foreground"
                  >
                    <span className={`${item.color} font-bold`}>
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Skills & Technologies
            </h3>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {aboutData.skills.map((category) => (
                <div
                  key={category.category}
                  className="text-center bg-background opacity-50 border border-border rounded-lg p-4 space-y-3"
                >
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
              <CardTitle>{aboutData.philosophy.title}</CardTitle>
              <CardDescription>
                {aboutData.philosophy.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {aboutData.philosophy.principles.map((principle, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-lg text-muted-foreground"
                  >
                    <span className={principle.color}>{principle.icon}</span>
                    <span>
                      <strong>{principle.title}:</strong>{" "}
                      {principle.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
