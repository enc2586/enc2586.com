import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project, ProjectStatus } from "@/data/projects";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ProjectLinks } from "./ProjectLinks";

const statusLabels: Record<ProjectStatus, string> = {
  operating: "운영 중",
  "in-progress": "개발 중",
  completed: "완료",
};

function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <Badge
      variant="secondary"
      className="w-fit rounded-full border border-primary/15 bg-primary/10 text-primary"
    >
      <span className="mr-1.5 size-1.5 rounded-full bg-current" />
      {statusLabels[status]}
    </Badge>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-zinc-800/90 bg-zinc-900/45 py-0 transition-[border-color,box-shadow,transform] duration-200 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/5">
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative min-h-64 overflow-hidden bg-zinc-900 lg:min-h-[28rem]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} 화면`}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex size-full min-h-64 items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_42%),linear-gradient(145deg,rgba(39,39,42,0.95),rgba(9,9,11,1))] lg:min-h-[28rem]">
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-2xl shadow-primary/10">
                  <Code2 className="size-8" aria-hidden="true" />
                </div>
                <p className="mt-5 max-w-64 text-sm font-medium text-zinc-400">
                  Internal Product
                </p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/15" />
        </div>

        <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
          <div>
            <ProjectStatusBadge status={project.status} />
            <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            {project.role && (
              <p className="mt-2 text-sm font-medium text-primary">
                {project.role}
              </p>
            )}
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="secondary"
                  className="rounded-full bg-zinc-800/80 text-zinc-300"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {project.hasDetail && (
              <Button className="w-full rounded-full sm:w-auto" asChild>
                <Link
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                >
                  자세히 보기
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
            <ProjectLinks
              links={project.links}
              projectTitle={project.title}
              size="sm"
            />
            {!project.hasDetail && project.links.length === 0 && (
              <p className="text-sm text-muted-foreground">
                인턴십에서 진행한 내부 프로젝트로 공개 링크가 없습니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full border-zinc-800/90 bg-zinc-900/45 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-xl border border-zinc-700/70 bg-zinc-800/70 text-primary">
            <Code2 className="size-5" aria-hidden="true" />
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          {project.role && (
            <p className="mt-1.5 text-sm font-medium text-primary">
              {project.role}
            </p>
          )}
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="rounded-full bg-zinc-800/80 text-zinc-300"
            >
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.links.length > 0 && (
        <CardFooter>
          <ProjectLinks
            links={project.links}
            projectTitle={project.title}
            size="sm"
          />
        </CardFooter>
      )}
    </Card>
  );
}
