import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileQuestion } from "lucide-react";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailPage,
});

// 작성된 프로젝트 목록
const writtenProjects = ["student-management-system"];

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const navigate = useNavigate();

  // 프로젝트가 작성되지 않은 경우
  if (!writtenProjects.includes(projectId)) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24">
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <FileQuestion className="size-20 text-zinc-600 mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">
              글이 작성되지 않았습니다
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-md">
              이 프로젝트의 상세 페이지는 아직 작성되지 않았습니다.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800"
              >
                <ArrowLeft className="mr-2 size-4" />
                뒤로가기
              </Button>
              <Button
                variant="default"
                size="lg"
                onClick={() => navigate({ to: "/project" })}
                className="bg-primary hover:bg-primary/90"
              >
                프로젝트 목록
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 작성된 프로젝트인 경우 해당 프로젝트 페이지로 리다이렉트
  // (이 부분은 실제 프로젝트 상세 페이지가 개별 파일로 구현되어 있을 경우)
  return null;
}
