export type ExperienceType =
  | "work"
  | "activity"
  | "military"
  | "education"
  | "achievement"
  | "business";

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: ExperienceType;
  tags?: string[];
  status?: string;
  link?: {
    href: string;
    label: string;
  };
}

export const experiences: Experience[] = [
  {
    id: "air-force-training-media-developer",
    title: "교육훈련매체개발병",
    organization: "대한민국 공군",
    period: "2026.08.31 – 2028.05.30",
    description:
      "단 1명을 선발하는 전형에서 12:1의 경쟁률을 뚫고 최종 합격해, 교육훈련매체개발병으로 복무하고 있습니다.",
    type: "military",
    status: "복무 중",
  },
  {
    id: "daangn-intern",
    title: "Backend Engineer Intern",
    organization: "당근 · 당근알바팀",
    period: "2026.01.19 – 2026.04.17",
    description:
      "첫 회사 경험으로 당근알바팀에 합류해 백엔드 업무를 수행하고, 내부 A/B 테스트 플랫폼 ‘피쳐플래그’의 기획·설계와 백엔드·어드민 페이지 구현에 참여했습니다. 무엇보다 자신의 일에 진심인 사람들과 함께 일하며, 일과 삶을 대하는 태도를 새로 세운 인생의 전환점이었습니다.",
    type: "work",
    tags: ["Feature Flag", "A/B Testing", "NestJS", "MongoDB"],
  },
  {
    id: "daangn-builders-camp",
    title: "Builder’s Camp 참가",
    organization: "당근",
    period: "2025.09.20 – 2025.09.21",
    description:
      "학생 엔지니어 20명이 초청된 프라이빗 해커톤에 참가해 지역 사회의 단절을 주제로 프로덕트를 만들었습니다. 현업 빌더들의 세션과 멘토링을 통해 사용자 중심으로 문제를 정의하고 해결하는 방식을 배웠습니다.",
    type: "activity",
    tags: ["Hackathon", "Product Building", "Mentoring"],
    link: {
      href: "https://careers.daangn.com/blog/post/%EB%8B%B9%EA%B7%BC-%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4-%EC%B1%84%EC%9A%A9/",
      label: "당근 공식 후기",
    },
  },
  {
    id: "uc-berkeley-summer",
    title: "여름학기 해외대학파견 선발",
    organization: "UC Berkeley",
    period: "2025.06 – 2025.08",
    description:
      "여름학기 해외대학파견에 선발되어 UC Berkeley에서 여름학기를 마쳤습니다.",
    type: "achievement",
    tags: ["CS161 Computer Security", "CS188 AI"],
  },
  {
    id: "gist-eecs",
    title: "EECS 학부생 · 2학년 수료",
    organization: "GIST (광주과학기술원)",
    period: "2024.03 – 현재",
    description:
      "전기전자컴퓨터공학부 2학년 과정을 수료했으며, 컴퓨터 구조와 소프트웨어를 배우고 있습니다.",
    type: "education",
    tags: ["Algorithm", "Computer Architecture"],
  },
  {
    id: "presidential-science-scholarship",
    title: "대통령과학장학생 선정",
    organization: "한국장학재단",
    period: "2024",
    description: "전국 우수 이공계 대학생 60명 중 한 명으로 선정되었습니다.",
    type: "achievement",
  },
  {
    id: "kongtech-business",
    title: "소프트웨어 개발 개인사업 개시",
    organization: "콩텍",
    period: "2023.09 – 현재",
    description:
      "학생관리시스템을 비롯한 여러 서비스를 개발하며, 모교와 시스템 공급 계약을 체결했습니다.",
    type: "business",
  },
  {
    id: "humantech-paper-award",
    title: "고등부 장려상",
    organization: "제30회 삼성휴먼테크논문대상",
    period: "2023",
    description:
      "딥러닝을 이용한 메니스커스 부피 측정 연구로 장려상을 수상했습니다.",
    type: "achievement",
    tags: ["PyTorch", "Computer Vision"],
  },
  {
    id: "data-creator-camp",
    title: "고등부 대상",
    organization: "데이터크리에이터캠프",
    period: "2022",
    description:
      "이미지 분류 모델 개발 프로젝트로 대상인 과학기술정보통신부 장관상을 수상했습니다.",
    type: "achievement",
    tags: ["TensorFlow", "Computer Vision"],
  },
  {
    id: "chungbuk-science-high-school",
    title: "33기 졸업",
    organization: "충북과학고등학교",
    period: "2021.03 – 2024.02",
    description:
      "이공계 공부와 함께 외부 대회와 창업을 경험하며 문제를 발견하고 해결하는 법을 배웠습니다.",
    type: "education",
  },
];
