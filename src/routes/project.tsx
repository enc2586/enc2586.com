import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

export const Route = createFileRoute("/project")({
  component: ProjectsPage,
});

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links?: {
    frontend?: string;
    backend?: string;
    site?: string;
    github?: string;
    demo?: string;
  };
  type: "featured" | "minor";
}

const projects: Project[] = [
  {
    id: "student-management-system",
    title: "충북과학고등학교 학생관리시스템",
    description: "충북과학고등학교의 자율학습, 외출, 상벌점 등을 관리하는 MAU 300명 가량의 서비스입니다. 특히 자율학습시스템의 경우, 학생의 교실(좌석) 신청부터 교사의 학생 조회, 출결체크 등 다양한 기능을 제공하며, 신청 가능 시간/교시 등 세부적인 옵션을 제공합니다.",
    image: "/student-management-system/cover.jpeg",
    tags: ["React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Docker",
      "SSE"],
    links: {
      site: "https://cbsh.edu-set.com",
      demo: "https://drive.google.com/drive/folders/1pdFl9-OaupRtUlpJ96AoLGUxGBHw_WBl?usp=drive_link",
    },
    type: "featured",
  },
  {
    id: "solvedcomp",
    title: "solved.ac friends comparator",
    description: "친구들과 solved.ac 기록을 비교할 수 있는 서비스입니다.",
    image: "/placeholder-project.jpg",
    tags: ["React", "TailwindCSS", "Nest.js", "node-cache", "Rate Limiting"],
    links: {
      frontend: "https://solvedcomp.pages.dev/",
    },
    type: "minor",
  },
  {
    id: "grrr",
    title: "꼬르륵",
    description: "GIST 학식 메뉴를 알려주는 앱을 개발중이며, PM을 맡고 있습니다.",
    image: "/placeholder-project.jpg",
    tags: ["Product Management"],
    links: {
      github: "https://github.com/School-meal-lover",
      site: "https://grrrr.me/",
    },
    type: "minor",
  },
  {
    id: "rlcnfnet-shortcuts",
    title: "기출넷플러스",
    description: "기출넷(rlcnf.net)에서 문제플이/속성암기 기능 이용 시 단축키와 편의기능을 사용할 수 있게 해주는 스크립트입니다.",
    image: "/placeholder-project.jpg",
    tags: ["Javascript", "Extension Script"],
    links: {
      github: "https://github.com/enc2586/rlcnfnet-shortcuts",
    },
    type: "minor",
  },
  {
    id: "ytm-pl2liked",
    title: "ytm-pl2liked",
    description: "Youtube Music 플레이리스트를 좋아요한 노래 목록으로 변환하는 스크립트입니다.",
    image: "/placeholder-project.jpg",
    tags: ["Javascript", "Extension Script"],
    links: {
      github: "https://github.com/enc2586/ytm-pl2liked",
    },
    type: "minor",
  },
];

function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.type === "featured");
  const minorProjects = projects.filter((p) => p.type === "minor");

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

      {/* 대표 프로젝트 */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">대표 프로젝트</h2>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* 소소한 프로젝트 */}
      {minorProjects.length > 0 && (
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">소소한 프로젝트</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {minorProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:shadow-2xl">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        {/* 썸네일 */}
        <Link to="/projects/$projectId" params={{ projectId: project.id }} className="block">
          <div className="aspect-video lg:aspect-square overflow-hidden bg-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-project.jpg";
              }}
            />
          </div>
        </Link>

        {/* 내용 */}
        <div className="flex flex-col justify-between p-8">
          <div>
            <Link
              to="/projects/$projectId"
              params={{ projectId: project.id }}
              className="text-3xl font-bold text-white transition-colors hover:text-primary mb-4 block"
            >
              {project.title}
            </Link>
            <p className="text-base text-zinc-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* 기술 스택 Badge */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-sm px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* 하단 링크 버튼 */}
          {project.links && (
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <Button
                  variant="default"
                  size="default"
                  asChild
                  className="bg-primary hover:bg-primary/90"
                >
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="mr-2 size-4" />
                    데모 보기
                  </a>
                </Button>
              )}
              {project.links.frontend && (
                <Button
                  variant="outline"
                  size="default"
                  asChild
                  className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
                >
                  <a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 size-4" />
                    Frontend
                  </a>
                </Button>
              )}
              {project.links.site && (
                <Button
                  variant="outline"
                  size="default"
                  asChild
                  className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
                >
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 size-4" />
                    사이트 방문 (로그인 필요)
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button
                  variant="outline"
                  size="default"
                  asChild
                  className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
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
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hasImage = project.image && project.image !== "/placeholder-project.jpg";

  return (
    <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl">
      {/* 썸네일 - 이미지가 있을 때만 표시 */}
      {hasImage && (
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
      )}

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
        <CardFooter className="gap-2 flex-wrap">
          {project.links.demo && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 size-4" />
                데모
              </a>
            </Button>
          )}
          {project.links.frontend && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
            >
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 size-4" />
                Frontend
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
        </CardFooter>
      )}
    </Card>
  );
}
