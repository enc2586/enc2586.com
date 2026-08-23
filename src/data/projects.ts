export type ProjectStatus = "operating" | "in-progress" | "completed";

export type ProjectLinkType = "site" | "demo" | "github" | "frontend";

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
  label: string;
  requiresLogin?: boolean;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  role?: string;
  image?: string;
  technologies: string[];
  links: ProjectLink[];
  status: ProjectStatus;
  featured: boolean;
  hasDetail: boolean;
}

export const projects: Project[] = [
  {
    id: "student-management-system",
    title: "충북과학고등학교 학생관리시스템",
    summary:
      "충북과학고등학교의 자율학습, 외출·외박, 상벌점과 알림을 하나로 관리하며, 실제 학교에서 2년 이상 사용 중인 DAU 약 500명의 통합 서비스입니다.",
    role: "기획 · 개발 · 운영 전 과정 / 1인 개발 및 창업",
    image: "/student-management-system/cover.jpeg",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Docker",
      "WebSocket",
      "SSE",
      "PWA",
    ],
    links: [
      {
        type: "site",
        href: "https://cbsh.edu-set.com",
        label: "서비스",
        requiresLogin: true,
      },
      {
        type: "demo",
        href: "https://drive.google.com/drive/folders/1pdFl9-OaupRtUlpJ96AoLGUxGBHw_WBl?usp=drive_link",
        label: "데모",
      },
    ],
    status: "operating",
    featured: true,
    hasDetail: true,
  },
  {
    id: "daangn-feature-flag",
    title: "당근알바 피쳐플래그",
    summary:
      "MAU 2천만 이상 규모의 당근 서비스 안에서, 당근알바의 A/B 테스트와 점진적 롤아웃을 안정적으로 운영하기 위해 만든 내부 실험 플랫폼입니다. 재배포 없이 실험을 수정하고, MurmurHash 기반의 결정론적 배정과 최소 재배치 알고리즘을 적용했습니다.",
    role: "기획·설계 75% / 백엔드·어드민 페이지 구현",
    technologies: [
      "React",
      "NestJS",
      "MongoDB",
      "GraphQL",
      "Kafka",
      "MurmurHash",
    ],
    links: [],
    status: "completed",
    featured: true,
    hasDetail: false,
  },
  {
    id: "solvedcomp",
    title: "solved.ac friends comparator",
    summary:
      "solved.ac 기록을 불러와 친구들의 레이팅 추이, 문제 수와 스트릭을 나란히 비교하고 URL로 공유할 수 있는 서비스입니다.",
    role: "기획 · 설계 · 개발 · 배포 100%",
    technologies: [
      "React",
      "Tailwind CSS",
      "NestJS",
      "node-cache",
      "Rate Limiting",
    ],
    links: [
      {
        type: "site",
        href: "https://solvedcomp.pages.dev/",
        label: "서비스",
      },
    ],
    status: "completed",
    featured: false,
    hasDetail: false,
  },
  {
    id: "grrr",
    title: "꼬르륵",
    summary:
      "GIST 식단을 한국어와 영어로 제공하고, 원하는 식사 시간에 푸시 알림을 보내는 설치형 웹 앱(PWA)입니다.",
    role: "팀장 · 일정 관리 · 프론트엔드 개발",
    technologies: ["React", "Go", "PostgreSQL", "PWA"],
    links: [
      {
        type: "site",
        href: "https://grrrr.me/",
        label: "서비스",
      },
      {
        type: "github",
        href: "https://github.com/School-meal-lover",
        label: "GitHub",
      },
    ],
    status: "operating",
    featured: false,
    hasDetail: false,
  },
  {
    id: "fashion-classification-ai",
    title: "의류 분류 AI 모델",
    summary:
      "흰 배경의 의류 이미지를 5개 클래스로 분류하는 CNN 모델을 개발했습니다. GrabCut 전처리와 데이터 증강, Focal Loss를 적용해 4개 클래스에서 F1 score 0.9 이상을 달성했습니다.",
    role: "팀장 · 데이터 전처리 · 모델 개발 30%",
    technologies: ["Python", "CNN", "GrabCut", "Focal Loss", "Augmentation"],
    links: [],
    status: "completed",
    featured: false,
    hasDetail: false,
  },
  {
    id: "rlcnfnet-shortcuts",
    title: "기출넷플러스",
    summary:
      "기출넷의 문제풀이·속성암기 화면에 단축키와 여러 편의 기능을 더하는 브라우저 스크립트입니다.",
    technologies: ["JavaScript", "Extension Script"],
    links: [
      {
        type: "github",
        href: "https://github.com/enc2586/rlcnfnet-shortcuts",
        label: "GitHub",
      },
    ],
    status: "completed",
    featured: false,
    hasDetail: false,
  },
  {
    id: "ytm-pl2liked",
    title: "ytm-pl2liked",
    summary:
      "YouTube Music 플레이리스트의 곡을 좋아요한 노래 목록으로 옮겨 주는 자동화 스크립트입니다.",
    technologies: ["JavaScript", "Automation"],
    links: [
      {
        type: "github",
        href: "https://github.com/enc2586/ytm-pl2liked",
        label: "GitHub",
      },
    ],
    status: "completed",
    featured: false,
    hasDetail: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const studentManagementProject = projects.find(
  (project) => project.id === "student-management-system",
)!;
