import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { studentManagementProject as project } from "@/data/projects";
import {
  ArrowLeft,
  CalendarRange,
  DoorOpen,
  LayoutGrid,
  Radio,
  Scale,
  School,
  Settings2,
  Users,
} from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/student-management-system")({
  component: StudentManagementSystemPage,
});

const metrics = [
  { label: "실사용 규모", value: "DAU 약 500명", icon: Users },
  { label: "운영 기간", value: "2년 이상", icon: CalendarRange },
  { label: "운영 환경", value: "실제 학교", icon: School },
];

const features = [
  {
    title: "자율학습 신청과 좌석 운영",
    description:
      "학생은 교실과 좌석을 실시간으로 선택하고, 교사는 신청 승인과 좌석별 출석 확인을 한 흐름에서 처리합니다.",
    icon: LayoutGrid,
  },
  {
    title: "외출·외박 관리",
    description:
      "학생의 신청부터 교사 승인·거절, 현재 외출 현황과 자율학습 출석 연동까지 한곳에서 관리합니다.",
    icon: DoorOpen,
  },
  {
    title: "상벌점과 SMS 알림",
    description:
      "상벌점을 일괄 기록하고 누적 점수별 규칙에 따라 학생·학부모·담당자에게 안내 문자를 발송합니다.",
    icon: Scale,
  },
  {
    title: "학교별 정책 설정",
    description:
      "교실 배치, 신청 시간, 학년·반, 학생·교사 계정을 엑셀과 관리자 화면으로 유연하게 설정합니다.",
    icon: Settings2,
  },
];

function StudentManagementSystemPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:pt-32">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        프로젝트 목록
      </Link>

      <header className="mt-8 max-w-4xl">
        <Badge className="rounded-full border-0 bg-primary/15 text-primary">
          대표 프로젝트 · 운영 중
        </Badge>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl">
          {project.summary}
        </p>
        {project.role && (
          <p className="mt-4 text-sm font-semibold text-primary">
            {project.role}
          </p>
        )}
        <ProjectLinks
          links={project.links}
          projectTitle={project.title}
          className="mt-7"
        />
      </header>

      <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/20">
        <img
          src={project.image}
          alt="충북과학고등학교 학생관리시스템의 주요 화면"
          className="aspect-video w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <section
        aria-label="프로젝트 핵심 지표"
        className="mt-6 grid gap-4 sm:grid-cols-3"
      >
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.label}
              className="flex-row items-center gap-4 border-zinc-800/90 bg-zinc-900/45 p-5"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="mt-0.5 font-semibold">{metric.value}</p>
              </div>
            </Card>
          );
        })}
      </section>

      <section
        aria-labelledby="project-background-title"
        className="mt-24 grid items-center gap-10 lg:grid-cols-2"
      >
        <div>
          <p className="text-sm font-semibold text-primary">Why</p>
          <h2
            id="project-background-title"
            className="mt-2 text-3xl font-bold tracking-tight"
          >
            종이와 엑셀로 흩어진 학교생활을 하나로
          </h2>
          <div className="mt-5 space-y-4 leading-7 text-muted-foreground">
            <p>
              충북과학고등학교의 자율학습은 여러 교실과 실험실에서 운영됩니다.
              종이 신청서는 누락과 중복이 잦았고, 교사는 외출·외박 학생까지
              따로 확인해야 해 출석 관리가 복잡했습니다.
            </p>
            <p>
              고등학생 시절 공청회를 두 차례 진행해 학생과 교사의 요구를 직접
              모았고, 신청·승인·좌석·출석·생활지도를 연결하는 서비스를 혼자
              기획하고 개발했습니다. 지금도 매일 들어오는 요청을 반영하며
              운영하고 있습니다.
            </p>
          </div>
        </div>
        <figure>
          <img
            src="/student-management-system/p1.jpeg"
            alt="학생이 자율학습 교실과 좌석을 신청하는 화면"
            className="w-full rounded-2xl border border-zinc-800 shadow-xl"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            교실·좌석 신청부터 교사 승인과 출석 확인까지 이어지는 흐름
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="project-features-title" className="mt-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">What</p>
          <h2
            id="project-features-title"
            className="mt-2 text-3xl font-bold tracking-tight"
          >
            학생과 교사의 하루를 연결하는 기능
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            개별 기능을 나열하는 데 그치지 않고, 신청 결과가 출석과 생활지도에
            자연스럽게 이어지도록 학교의 실제 업무 흐름을 반영했습니다.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-zinc-800/90 bg-zinc-900/45 p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <figure className="mt-8">
          <img
            src="/student-management-system/p2.png"
            alt="학생관리시스템의 교사 관리 기능 화면"
            className="w-full rounded-2xl border border-zinc-800 shadow-xl"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            학생 신청과 출석을 처리하는 교사용 관리 화면
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="project-technology-title"
        className="mt-24 grid items-center gap-10 lg:grid-cols-2"
      >
        <div className="lg:order-2">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Radio className="size-5" aria-hidden="true" />
          </div>
          <p className="mt-5 text-sm font-semibold text-primary">How</p>
          <h2
            id="project-technology-title"
            className="mt-2 text-3xl font-bold tracking-tight"
          >
            실시간성과 안정성을 함께 설계했습니다
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            WebSocket 채널로 좌석 상태를 동시에 갱신하고, 데이터베이스
            트랜잭션으로 중복 신청을 막았습니다. PostgreSQL과 NestJS를 기반으로
            운영하고, AWS 배포와 CI/CD 파이프라인을 구성해 실제 학교의 반복적인
            변경 요청을 빠르게 반영합니다.
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
        <figure className="lg:order-1">
          <img
            src="/student-management-system/p3.png"
            alt="학생관리시스템의 기술 구성과 실시간 처리 화면"
            className="w-full rounded-2xl border border-zinc-800 shadow-xl"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            React, NestJS, PostgreSQL과 실시간 통신을 조합한 서비스 구조
          </figcaption>
        </figure>
      </section>

      <section className="mt-24 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              실제 서비스와 데모를 확인해 보세요
            </h2>
            <p className="mt-2 text-muted-foreground">
              실서비스는 학교 계정 로그인이 필요하며, 데모 링크에서 주요 화면을
              볼 수 있습니다.
            </p>
          </div>
          <ProjectLinks
            links={project.links}
            projectTitle={project.title}
            className="shrink-0"
          />
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="rounded-full" asChild>
          <Link to="/projects">
            <ArrowLeft className="size-4" aria-hidden="true" />
            모든 프로젝트 보기
          </Link>
        </Button>
      </div>
    </article>
  );
}
