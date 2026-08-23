import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProjectLink } from "@/data/projects";
import { ExternalLink, Github, Play } from "lucide-react";

const linkIcons = {
  site: ExternalLink,
  demo: Play,
  github: Github,
  frontend: ExternalLink,
};

interface ProjectLinksProps {
  links: ProjectLink[];
  projectTitle: string;
  size?: "sm" | "default";
  className?: string;
}

export function ProjectLinks({
  links,
  projectTitle,
  size = "default",
  className,
}: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {links.map((link) => {
        const Icon = linkIcons[link.type];

        return (
          <Button
            key={`${link.type}-${link.href}`}
            variant={link.type === "demo" ? "default" : "outline"}
            size={size}
            className="rounded-full shadow-none"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${projectTitle} ${link.label}, 새 창에서 열기`}
            >
              <Icon className="size-4" aria-hidden="true" />
              {link.label}
              {link.requiresLogin && (
                <span className="text-xs opacity-70">로그인 필요</span>
              )}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
