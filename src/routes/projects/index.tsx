import {
  CompactProjectCard,
  FeaturedProjectCard,
} from "@/components/projects/ProjectCards";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:pt-32">
      <header className="mb-14 text-center">
        <Badge variant="secondary" className="mb-4 rounded-full">
          {projects.length} Projects
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          프로젝트
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          생활 속 문제를 해결하기 위해 기획하고 개발한 서비스와 도구들입니다.
        </p>
      </header>

      <section aria-labelledby="featured-projects-title" className="mb-16">
        <div className="mb-6">
          <p className="text-sm font-medium text-primary">Featured</p>
          <h2
            id="featured-projects-title"
            className="mt-1 text-2xl font-bold tracking-tight"
          >
            대표 프로젝트
          </h2>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="other-projects-title">
        <div className="mb-6">
          <p className="text-sm font-medium text-primary">More</p>
          <h2
            id="other-projects-title"
            className="mt-1 text-2xl font-bold tracking-tight"
          >
            더 많은 프로젝트
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <CompactProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
