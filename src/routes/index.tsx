import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navbar } from "../components/common/Navbar";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  const skills = {
    frontend: [
      { name: "ReactJS", level: 5, description: "능숙" },
      { name: "Next.js", level: 4, description: "경험 많음" },
    ],
    backend: [
      { name: "NestJS", level: 4, description: "경험 많음" },
      { name: "Flask", level: 1, description: "사용해본 적 있음" },
    ],
    cloud: [
      { name: "AWS", level: 4, description: "경험 많음- EC2, S3, lightsail" },
      { name: "Cloudflare", level: 3, description: "중간- R2, DNS, Pages" },
      { name: "GCP", level: 2, description: "조금 사용" },
      { name: "OCI", level: 2, description: "중간" },
    ],
    baas: [
      {
        name: "Firebase",
        level: 3,
        description: "중간- Auth, Firestore, Storage",
      },
      {
        name: "Supabase",
        level: 3,
        description: "중간- Auth, Postgres, Realtime",
      },
    ],
    database: [
      { name: "Postgres", level: 3, description: "중간- prisma orm 주력" },
    ],
  };

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center lg:my-10">
      <Navbar />
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
          {t("hero.title")
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          data-i18n
        >
          {t("hero.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            {t("hero.explore")}
          </button>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="relative z-10 mt-20"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-700 dark:text-slate-300">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-yellow-200 bg-white p-6 shadow-md dark:border-yellow-800 dark:bg-neutral-900"
              >
                <div className="h-48 w-full rounded-lg bg-yellow-100 dark:bg-yellow-900" />
                <h3 className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
                  Project {i}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Project description will go here.
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="relative z-10 mt-20"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-700 dark:text-slate-300">
            Awards
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="h-48 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800" />
                <h3 className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
                  Award {i}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Award description will go here.
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="relative z-10 mt-20"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-700 dark:text-slate-300">
            Skills
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
                        <div className="mr-2 h-2 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800">
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${(skill.level / 5) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                          {skill.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
