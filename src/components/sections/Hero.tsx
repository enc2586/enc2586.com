import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CircleArrowDown, Code2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  const scrollToAbout = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.getElementById("about")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-16 pt-28">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(560px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12",
        )}
      />
      <div className="relative z-[1] mx-auto max-w-4xl text-center">
        <Badge className="rounded-full border-none">
          <Code2 className="mr-2 size-4" aria-hidden="true" />
          Backend Engineer · Product Builder
        </Badge>
        <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          「필요한」 서비스를 만듭니다
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-muted-foreground md:text-lg">
          안녕하세요, 최홍제입니다. 학교에서 매일 쓰는 운영 서비스부터
          수천만 사용자를 위한 실험 플랫폼까지, 사람의 불편을 기술로 푸는 일을
          좋아합니다.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link to="/projects">
              프로젝트 보기
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-base"
            onClick={scrollToAbout}
          >
            더 알아보기
            <CircleArrowDown className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
