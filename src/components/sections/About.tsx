import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Github } from "lucide-react";
import type { HTMLAttributes } from "react";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-28 px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-14">
          <div>
            <Badge variant="secondary" className="mb-4 rounded-full">
              About Me
            </Badge>
            <ProfileImage className="mb-8 block md:hidden" />
            <h2
              id="about-title"
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              필요한 서비스를 만들고,
              <br /> 끝까지 운영합니다.
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-8 text-muted-foreground">
              <p>
                개발 공부를 위한 개발보다 실제 사용자가 있는 서비스를 기획하고
                개선하는 일을 좋아합니다. 고등학생 때 만든 학생관리시스템은 실제
                학교에서 2년 넘게 사용되고 있으며, 지금도 매일의 피드백을 반영해
                발전시키고 있습니다.
              </p>
              <p>
                당근알바팀 Backend Engineer 인턴으로 일하며 내부 A/B 테스트
                플랫폼 ‘피쳐플래그’를 설계·개발했습니다. 무엇보다 자신의 일에
                진심인 사람들과 함께 일하며, 일과 삶을 대하는 태도를 새로 세운
                인생의 전환점이었습니다.
              </p>
              <p>
                주로 TypeScript, React, NestJS와 PostgreSQL을 사용하며, 제품의
                문제 정의부터 백엔드 설계와 운영까지 넓게 살핍니다.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full" asChild>
                <a
                  href="https://github.com/enc2586"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a
                  href="https://drive.google.com/drive/folders/15RWU_ARzCtC5otKKWzDpP0OoiUk3jkjg?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  이력서
                </a>
              </Button>
            </div>
          </div>

          <ProfileImage className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("size-48 md:size-64", className)} {...props}>
    <div className="relative size-full overflow-hidden rounded-2xl border border-white/10 bg-accent shadow-2xl shadow-black/30">
      <img
        src="/profile.jpeg"
        alt="최홍제 프로필 사진"
        width={256}
        height={256}
        className="size-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
);

export default About;
