import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Systems } from "@/components/sections/systems";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Systems />
        <About />
        <Contact />
      </main>
    </div>
  );
}
