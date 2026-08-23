import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experiences";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Experience = () => {
  const recentExperiences = experiences.slice(0, 5);

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative scroll-mt-28 px-6 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 rounded-full">
            Experience
          </Badge>
          <h2
            id="experience-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            최근 경험
          </h2>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-4">
            배우고 만들며 쌓아 온 경험을 최신순으로 정리했습니다.
          </p>
        </div>

        <ExperienceTimeline items={recentExperiences} />

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/experience">
              전체 이력 보기
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
