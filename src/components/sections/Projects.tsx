import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  descriptionId? : string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  descriptionId,
}) => {
  return (
    <Link
      to={`/projects/${descriptionId}` as any}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-project.jpg";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto" onClick={(e) => e.preventDefault()}>
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Published (로그인 필요)
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "충북과학고 학생관리시스템",
      description:
        "충북과학고의 자율학습, 외출, 상벌점 등을 관리하는 MAU 300명 가량의 서비스",
      image: "/student-management-system/cover.jpeg",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL"],
      liveUrl: "https://cbsh.edu-set.com",
      githubUrl: "https://github.com/enc2586/student-management-system",
      descriptionId: "student-management-system",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            대표 프로젝트
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            제가 만든 프로젝트를 소개합니다!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
