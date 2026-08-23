import { FeaturedProjectCard } from "@/components/projects/ProjectCards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative scroll-mt-28 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 rounded-full">
            Projects
          </Badge>
          <h2
            id="projects-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            대표 프로젝트
          </h2>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-4">
            실제 문제를 해결하고 운영하며 배운 프로젝트를 소개합니다.
          </p>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/projects">
              모든 프로젝트 보기
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
