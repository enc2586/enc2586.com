import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

interface ExperienceItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "achievement";
  technologies?: string[];
}

const ExperienceItem = ({
  title,
  organization,
  period,
  description,
  type,
  technologies,
}: ExperienceItemProps) => {
  const Icon = type === "education" ? GraduationCap : Award;

  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-zinc-800 last:hidden">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-zinc-800 rounded-full flex items-center justify-center">
            <Icon className="size-5 text-primary" />
          </div>
          <span className="text-lg font-semibold text-white">{organization}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-zinc-400">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-zinc-300">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full bg-zinc-800 text-zinc-300">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function ExperiencePage() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "여름학기 해외대학파견 선발",
      organization: "UC Berkeley",
      period: "2025.06 - 2025.08",
      description:
        "여름학기 해외대학파견에 선발되어 UC Berkeley에서 여름학기를 마치고 왔습니다.",
      type: "achievement",
      technologies: ["CS161 Computer Security", "CS188 AI"],
    },
    {
      title: "대통령과학장학생 선정",
      organization: "한국장학재단",
      period: "2024",
      description:
        "전국 우수 이공계 대학생 60명 중 하나로 선정되었습니다.",
      type: "achievement",
    },
    {
      title: "GIST EECS 학부생",
      organization: "GIST (광주과학기술원)",
      period: "2024.03 - 현재",
      description:
        "전기전자컴퓨터공학부에서 컴퓨터의 구조와 소프트웨어에 대해 배우고 있습니다",
      type: "education",
      technologies: ["Algorithm", "Computer Architecture"],
    },
    {
      title: "학생관리시스템을 비롯한 여러 서비스로 개인사업 개시",
      organization: "콩텍",
      period: "2023.09 - 현재",
      description:
        "소프트웨어개발업으로 개인사업을 개시, 모교와 학생관리시스템 공급 계약을 따내는 등의 성과를 이뤘습니다.",
      type: "achievement",
    },
    {
      title: "딥러닝을 이용한 메니스커스 부피 측정 연구로 고등부 장려상 수상",
      organization: "제 30회 삼성휴먼테크논문대상",
      period: "2023",
      description:
        "딥러닝을 이용한 메니스커스 부피 측정 연구로 장려상을 수상했습니다.",
      type: "achievement",
      technologies: ["Pytorch", "Computer Vision"],
    },
    {
      title: "데이터크리에이터캠프 고등부 대상",
      organization: "데이터크리에이터캠프",
      period: "2022",
      description:
        "이미지 분류 모델 개발 프로젝트로 대상(과기정통부장관상)을 수상했습니다.",
      type: "achievement",
      technologies: ["Tensorflow", "Computer Vision"],
    },
    {
      title: "충북과학고등학교 33기",
      organization: "충북과학고등학교",
      period: "2021.03 - 2024.02",
      description:
        "과학고등학교에서 이공계열 공부와 더불어 다양한 외부대회, 창업을 경험하며 성장했습니다.",
      type: "education",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-24">
      {/* 페이지 헤더 */}
      <div className="mb-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Experience
        </Badge>
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          학력 및 성과
        </h1>
        <p className="text-lg text-zinc-400">
          저의 성장 과정과 주요 성취를 시간순으로 정리했습니다
        </p>
      </div>

      {/* 타임라인 */}
      <div className="relative max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}
