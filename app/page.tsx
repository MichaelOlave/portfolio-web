import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Systems } from "@/components/systems";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
