import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiences";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-28 sm:pt-32">
      <header className="mb-14 text-center sm:mb-16">
        <Badge variant="secondary" className="mb-4 rounded-full">
          Experience
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          경력과 주요 경험
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          배우고 만들며 쌓아 온 경력, 활동, 학력과 성취를 최신순으로
          정리했습니다.
        </p>
      </header>

      <ExperienceTimeline items={experiences} />
    </div>
  );
}
