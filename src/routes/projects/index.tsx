import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    frontend?: string;
    backend?: string;
    site?: string;
    github?: string;
  };
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: "student-management-system",
    title: "학생 관리 시스템",
    description: "광주과학고등학교의 학생 정보를 효율적으로 관리하기 위한 웹 기반 시스템",
    image: "/student-management-system/cover.jpeg",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    links: {
      site: "https://sms.example.com",
      github: "https://github.com/enc2586/student-management-system",
    },
    status: "completed",
  },
  {
    id: "guide-me",
    title: "Guide Me",
    description: "AI 기반 여행 가이드 서비스로, 사용자 맞춤형 여행 계획을 제공합니다",
    image: "/guide-me/cover.jpeg",
    tags: ["Next.js", "AI", "TypeScript", "TailwindCSS"],
    status: "in-progress",
  },
  // 더 많은 프로젝트를 여기에 추가할 수 있습니다
];

function ProjectsPage() {
  const completedProjects = projects.filter((p) => p.status === "completed");
  const inProgressProjects = projects.filter((p) => p.status === "in-progress");

  return (
    <div className="mx-auto max-w-7xl px-4 py-24">
      {/* 페이지 헤더 */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          총 {projects.length}개의 프로젝트
        </h1>
        <p className="text-lg text-zinc-400">
          다양한 기술 스택으로 만든 프로젝트들을 소개합니다
        </p>
      </div>

      {/* 진행 중인 프로젝트 */}
      {inProgressProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">진행 중</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inProgressProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* 완료된 프로젝트 */}
      {completedProjects.length > 0 && (
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">완료</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl">
      {/* 썸네일 */}
      <Link to="/projects/$projectId" params={{ projectId: project.id }} className="block">
        <div className="aspect-video overflow-hidden bg-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder-project.jpg";
            }}
          />
        </div>
      </Link>

      {/* 내용 */}
      <CardHeader>
        <Link
          to="/projects/$projectId"
          params={{ projectId: project.id }}
          className="text-xl font-bold text-white transition-colors hover:text-primary"
        >
          {project.title}
        </Link>
        <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
      </CardHeader>

      <CardContent>
        {/* 기술 스택 Badge */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* 하단 링크 버튼 */}
      {project.links && (
        <CardFooter className="gap-2">
          {project.links.github && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
            >
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.links.site && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
            >
              <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 size-4" />
                Site
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
