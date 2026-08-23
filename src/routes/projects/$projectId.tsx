import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailNotFound,
});

function ProjectDetailNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Card className="border-zinc-800/90 bg-zinc-900/45">
        <CardContent className="flex flex-col items-center py-14 text-center sm:py-16">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-zinc-800/80 text-zinc-400">
            <FileQuestion className="size-8" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            상세 페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-3 max-w-md leading-7 text-muted-foreground">
            아직 상세 소개가 준비되지 않았거나 주소가 변경된 프로젝트입니다.
          </p>
          <Button className="mt-8 rounded-full" asChild>
            <Link to="/projects">
              <ArrowLeft className="size-4" aria-hidden="true" />
              프로젝트 목록
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
