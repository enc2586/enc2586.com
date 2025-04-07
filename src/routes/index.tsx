import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/common/ProjectCard";
import { useRef, forwardRef } from "react";

interface SearchParams {
  noAnimation?: boolean;
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      noAnimation: search.noAnimation === "true",
    };
  },
});

interface Skill {
  name: string;
  level: number;
}

interface SkillsCategory {
  [key: string]: Skill[];
}

const skills: SkillsCategory = {
  frontend: [
    { name: "ReactJS", level: 5 },
    { name: "Next.js", level: 4 },
  ],
  backend: [
    { name: "NestJS", level: 4 },
    { name: "Flask", level: 1 },
  ],
  cloud: [
    { name: "AWS", level: 4 },
    { name: "Cloudflare", level: 3 },
    { name: "GCP", level: 2 },
    { name: "OCI", level: 2 },
  ],
  baas: [
    { name: "Firebase", level: 3 },
    { name: "Supabase", level: 3 },
  ],
  database: [{ name: "PostgreSQL", level: 3 }],
};

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  shouldAnimate: boolean;
}

const AnimatedText = ({
  text,
  delay = 0,
  className = "",
  shouldAnimate,
}: AnimatedTextProps) => {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            delay: (index + delay) * 0.1,
            ease: "easeInOut",
          }}
          className={`mr-2 inline-block ${className} ${shouldAnimate ? "" : "opacity-0"}`}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const search = Route.useSearch();
  const shouldAnimate = !search.noAnimation;
  const { t } = useTranslation();
  return (
    <motion.div
      ref={ref}
      id="projects"
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
      transition={
        shouldAnimate ? { duration: 0.5, delay: 1.4 } : { duration: 0 }
      }
      className="relative z-10 mt-20"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-700 dark:text-slate-300">
        {t("projects.title")}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          title={t("projects.sms.title")}
          description={t("projects.sms.description")}
          image="/student-management-system/cover.jpeg"
          to="/projects/student-management-system"
        />
        <ProjectCard
          title={t("projects.guide-me.title")}
          description={t("projects.guide-me.description")}
          image="/guide-me/cover.jpeg"
          // to="/projects/guide-me"
          isInDevelopment
        />
        {/* <ProjectCard
          title="Project 3"
          description="Project description will go here."
          image="/placeholder-3.jpg"
          to="https://example.com"
        /> */}
      </div>
    </motion.div>
  );
});

const AwardsSection = () => {
  return (
    <motion.div
      id="awards"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
      className="relative z-10 mt-20"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-700 dark:text-slate-300">
        Awards
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProjectCard
          title="대통령과학장학생"
          description="전국 우수 이공계 대학생 60명을 선발하는 대통령과학장학생으로 선정되었습니다."
          image="/awards/president-scholar.jpg"
          href="https://www.news1.kr/local/sejong-chungbuk/5487906"
        />
        <ProjectCard
          title="제 30회 삼성휴먼테크논문대상 고등부 장려상"
          description="딥러닝을 이용해 메니스커스 사진 한 장 만으로 오차를 최소화한 부피값을 읽는 이미지 모델을 개발하며 논문을 작성했고, 장려상을 수상했습니다."
          image="/awards/humantech.png"
          href="https://humantech.samsung.com/saitext/index.jsp"
        />
        <ProjectCard
          title="데이터크리에이터캠프 고등부 대상"
          description="'옷을 종류별로 분류한다'는 목표를 위해 팀원과 협력해 이미지 분류 모델을 개발했습니다. 팀장으로써 프로젝트 총괄과 데이터 전처리, 모델부 어시스트를 맡았고, 과기정통부장관상을 수상했습니다."
          image="/awards/data-creator-camp.png"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const search = Route.useSearch();
  const shouldAnimate = !search.noAnimation;
  const { t } = useTranslation();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
      transition={
        shouldAnimate ? { duration: 0.5, delay: 1.8 } : { duration: 0 }
      }
      className="relative z-10 mt-20"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-700 dark:text-slate-300">
        {t("skills.title")}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 className="mb-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="space-y-3">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {skill.name}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-5 w-5 ${
                          index < skill.level
                            ? "text-yellow-400"
                            : "text-neutral-300 dark:text-neutral-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

function RouteComponent() {
  const { t } = useTranslation();
  const search = Route.useSearch();
  const shouldAnimate = !search.noAnimation;
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const element = projectsRef.current;
    if (element) {
      const offset = 100; // 100px margin from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center lg:my-10">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          <AnimatedText
            text={t("hero.title_1")}
            delay={0}
            shouldAnimate={shouldAnimate}
          />
          <br />
          <AnimatedText
            text={t("hero.title_2")}
            delay={t("hero.title_1").split(" ").length}
            shouldAnimate={shouldAnimate}
          />
        </h1>
        <motion.p
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : false}
          transition={
            shouldAnimate ? { duration: 0.3, delay: 0.8 } : { duration: 0 }
          }
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          data-i18n
        >
          {t("hero.description")}
        </motion.p>
        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : false}
          transition={
            shouldAnimate ? { duration: 0.3, delay: 1 } : { duration: 0 }
          }
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {t("hero.explore")}
          </button>
        </motion.div>

        <ProjectsSection ref={projectsRef} />
        <AwardsSection />
        <SkillsSection />
      </div>
    </div>
  );
}
