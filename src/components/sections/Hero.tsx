import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Code2 className="fill-current mr-2 size-4" />
          풀스택 개발 지망생
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          안녕하세요! 최홍제입니다.
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          저는 기술로 삶을 바꿀 수 있다고 생각합니다.<br />
          생활 속의 소소한 문제를 해결하는 서비스를 만드는 것을 좋아합니다.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-base"
            onClick={scrollToAbout}
          >
            더 알아보기 <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
