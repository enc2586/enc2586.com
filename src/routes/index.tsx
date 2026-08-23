import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
