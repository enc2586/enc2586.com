import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Calendar,
  BriefcaseBusiness,
  Hammer,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

interface ExperienceItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "achievement" | "work" | "activity" | "military";
  technologies?: string[];
  status?: string;
  link?: { href: string; label: string };
}

const ExperienceItem = ({
  title,
  organization,
  period,
  description,
  type,
  technologies,
  status,
  link,
}: ExperienceItemProps) => {
  const icons = {
    education: GraduationCap,
    achievement: Award,
    work: BriefcaseBusiness,
    activity: Hammer,
    military: ShieldCheck,
  };
  const Icon = icons[type];

  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Icon className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{organization}</span>
          {status && <Badge className="rounded-full">{status}</Badge>}
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {link.label}
            <ExternalLink className="size-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "교육훈련매체개발병",
      organization: "대한민국 공군",
      period: "2026.08.31 - 2028.05.30",
      description:
        "단 1명을 선발하는 전형에서 12:1의 경쟁률을 뚫고 최종 합격해, 교육훈련매체개발병으로 복무하고 있습니다.",
      type: "military" as const,
      status: "복무 중",
    },
    {
      title: "Backend Engineer Intern",
      organization: "당근 · 당근알바팀",
      period: "2026.01.19 - 2026.04.17",
      description:
        "첫 회사 경험으로 당근알바팀에 합류해 당근알바 백엔드 업무를 수행하고, 내부 A/B 테스트 플랫폼 ‘피쳐플래그’를 설계·개발했습니다. 실무 개발자로서의 방향을 구체화한, 제 인생의 전환점이 된 경험입니다.",
      type: "work" as const,
      technologies: ["Backend", "A/B Testing", "Feature Flag"],
    },
    {
      title: "Builder’s Camp 참가",
      organization: "당근",
      period: "2025.09.20 - 2025.09.21",
      description:
        "학생 엔지니어 20명이 초청된 프라이빗 해커톤에 참가해 프로덕트를 만들고, 현업 빌더들의 세션과 멘토링을 통해 사용자 중심으로 문제를 해결하는 방식을 배웠습니다.",
      type: "activity" as const,
      technologies: ["Hackathon", "Product Building", "Mentoring"],
      link: {
        href: "https://careers.daangn.com/blog/post/%EB%8B%B9%EA%B7%BC-%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4-%EC%B1%84%EC%9A%A9/",
        label: "당근 공식 후기",
      },
    },
    {
      title: "여름학기 해외대학파견 선발",
      organization: "UC Berkeley",
      period: "2025.06 - 2025.08",
      description:
        "여름학기 해외대학파견에 선발되어 UC Berkeley에서 여름학기를 마치고 왔습니다.",
      type: "achievement" as const,
      technologies: ["CS161 Computer Security", "CS188 AI"],
    },
    {
      title: "대통령과학장학생 선정",
      organization: "한국장학재단",
      period: "2024",
      description:
        "전국 우수 이공계 대학생 60명 중 하나로 선정되었습니다.",
      type: "achievement" as const,
    },
    {
      title: "GIST EECS 학부생",
      organization: "GIST (광주과학기술원)",
      period: "2024.03 - 현재",
      description:
        "전기전자컴퓨터공학부에서 컴퓨터의 구조와 소프트웨어에 대해 배우고 있습니다",
      type: "education" as const,
      technologies: ["Algorithm", "Computer Architecture"],
    },
    {
      title: "학생관리시스템을 비롯한 여러 서비스로 개인사업 개시",
      organization: "콩텍",
      period: "2023.09 - 현재",
      description:
        "소프트웨어개발업으로 개인사업을 개시, 모교와 학생관리시스템 공급 계약을 따내는 등의 성과를 이뤘습니다.",
      type: "achievement" as const,
    },
    {
      title: "딥러닝을 이용한 메니스커스 부피 측정 연구로 고등부 장려상 수상",
      organization: "제 30회 삼성휴먼테크논문대상",
      period: "2023",
      description:
        "딥러닝을 이용한 메니스커스 부피 측정 연구로 장려상을 수상했습니다.",
      type: "achievement" as const,
      technologies: ["Pytorch", "Computer Vision"],
    },
    {
      title: "데이터크리에이터캠프 고등부 대상",
      organization: "데이터크리에이터캠프",
      period: "2022",
      description:
        "이미지 분류 모델 개발 프로젝트로 대상(과기정통부장관상)을 수상했습니다.",
      type: "achievement" as const,
      technologies: ["Tensorflow", "Computer Vision"],
    },
    {
      title: "충북과학고등학교 33기",
      organization: "충북과학고등학교",
      period: "2021.03 - 2024.02",
      description:
        "과학고등학교에서 이공계열 공부와 더불어 다양한 외부대회, 창업을 경험하며 성장했습니다.",
      type: "education" as const,
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            학력 및 성과
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            저의 성장 과정과 주요 성취를 시간순으로 정리했습니다
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
