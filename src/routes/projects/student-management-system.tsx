import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/projects/student-management-system")({
  component: RouteComponent,
});

function RouteComponent() {
  const techStack = [
    "React",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "Docker",
    "SSE",
  ];

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4 text-4xl font-bold text-slate-700 dark:text-slate-300">
            학생관리시스템
          </h1>
          <p className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
            학교를 위한 학생 자습/출결/생활지도 통합관리시스템
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-12 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        >
          <img
            src="/student-management-system/cover.jpeg"
            alt="Student Management System"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <a
              href="https://v2.cbsh.edu-set.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-black transition-colors hover:bg-neutral-100"
            >
              방문하기
            </a>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-8 md:flex-row md:items-center"
          >
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-slate-700 dark:text-slate-300">
                학생관리시스템이 뭔가요?
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  특수목적고등학교와 같이 자율학습 시 교실 외 다양한 공간을
                  활용하는 학교에서는 기존의 수기 관리 방식에 여러 불편함이
                  따랐습니다. 교사 간 학생 현황 공유가 어렵고, 신청/확인을 위해
                  수많은 학생이 교무실을 방문해야 했습니다.
                </p>
                <p>
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                    학생관리시스템
                  </strong>
                  은 이러한 자율학습 신청, 승인, 출석 확인 절차를 효율적으로
                  개선하기 위해 개발된 솔루션입니다.
                </p>
                <ol className="list-decimal list-inside space-y-3 marker:text-slate-700 marker:dark:text-slate-300">
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                      좌석 설정:
                    </strong>{" "}
                    관리자가 시스템상에 학습 공간별 좌석 배치를 설정합니다.
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                      학생 신청:
                    </strong>{" "}
                    학생들은 마치 영화표를 예매하듯 원하는 교시의 좌석을
                    선택하고 지도교사에게 사용 신청을 합니다.
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                      교사 승인:
                    </strong>{" "}
                    지도교사는 시스템을 통해 접수된 신청을 확인하고 승인 또는
                    거절 처리를 합니다.
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                      출석 확인:
                    </strong>{" "}
                    별도의 출석 관리 화면을 통해 담당 교사(예: 사감)는 학생 명단
                    또는 좌석 위치별로 간편하게 출석을 확인할 수 있습니다.
                  </li>
                </ol>
                <p>
                  학생관리시스템은 교사와 학생 모두의 편의성을 높이고, 자율학습
                  운영의 효율성과 정확성을 극대화합니다.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/student-management-system/p1.jpeg"
                alt="Project Overview"
                className="rounded-lg border border-neutral-200 shadow-lg dark:border-neutral-800"
              />
            </div>
          </motion.section>
          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-8 md:flex-row-reverse md:items-center"
          >
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-slate-700 dark:text-slate-300">
                기능 목록
              </h2>
              <ul className="list-inside list-disc space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>
                  자율학습 교실 사용 관리
                  <ul className="ml-6 list-inside list-[circle] space-y-1">
                    <li>관리자: 교실 생성 및 좌석/구조물 배치</li>
                    <li>학생: 실시간 좌석 점유 현황이 보이는 자습신청</li>
                    <li>교사: 자습신청 승인/거절</li>
                    <li>사감교사: 출석체크 진행</li>
                    <li>자율학습 일정에 외출외박 연계표출</li>
                  </ul>
                </li>
                <li>
                  외출/외박 신청/승인 시스템
                  <ul className="ml-6 list-inside list-[circle] space-y-1">
                    <li>외출/외박 신청 및 승인 프로세스</li>
                    <li>실시간 외출/외박 현황 모니터링</li>
                    <li>외출/외박 이력 관리 및 통계</li>
                  </ul>
                </li>
                <li>
                  상벌점 관리 시스템
                  <ul className="ml-6 list-inside list-[circle] space-y-1">
                    <li>상벌점 규칙 등록 및 관리</li>
                    <li>학생별 상벌점 관리</li>
                    <li>학부모 SMS 알림 발송</li>
                    <li>상벌점 통계 및 리포트</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src="/student-management-system/p2.png"
                alt="Project Features"
                className="rounded-lg border border-neutral-200 shadow-lg dark:border-neutral-800"
              />
            </div>
          </motion.section>
          {/* Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col gap-8 md:flex-row md:items-center"
          >
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-slate-700 dark:text-slate-300">
                기술 스택
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                프론트엔드는 React와 TypeScript를 사용하여 개발되었으며,
                백엔드는 NestJS를 활용하여 RESTful API를 구현했습니다.
                데이터베이스는 PostgreSQL을 사용하며, AWS를 통해 클라우드
                인프라를 구축했습니다. SSE를 통해 실시간 좌석 점유 현황을
                받아오며, PWA로 구현해 학생과 선생님들이 앱처럼 사용할 수 있도록
                했습니다.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/student-management-system/p3.png"
                alt="Tech Stack"
                className="rounded-lg border border-neutral-200 shadow-lg dark:border-neutral-800"
              />
            </div>
          </motion.section>
          {/* Results Section */}
          {/* <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col gap-8 md:flex-row-reverse md:items-center"
          >
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-slate-700 dark:text-slate-300">
                성과
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                시스템 도입 후 학교의 학생 관리 업무 효율성이 40% 향상되었으며,
                교사들의 업무 부담이 크게 감소했습니다. 또한 실시간 데이터
                수집과 분석을 통해 학생들의 학습 패턴을 파악하고 개선할 수 있는
                기반을 마련했습니다.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/student-management-system/results.jpeg"
                alt="Project Results"
                className="rounded-lg border border-neutral-200 shadow-lg dark:border-neutral-800"
              />
            </div>
          </motion.section> */}
        </div>
      </div>
    </div>
  );
}
