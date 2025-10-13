import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Github } from "lucide-react";
import { HTMLAttributes } from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
            「필요한」 서비스를 만듭니다
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              개발을 시작하게 된 계기 또한 저의 불편함을 해결하기 위해서였습니다.
              주요 활동인 학내 자치회의 웹서비스 개발/유지보수 외에도,
              생활 속에서 느끼는 여러 문제를 해결하는 소소한 서비스들을 꾸준히 만들고 있습니다. <br /><br />
              Typescript로 프론트엔드와 백엔드를 개발하고 있습니다. <br />
              메인 스택은 React, Nest.js이며, DB로 PostgreSQL을 주로 사용합니다. <br />
              Python과 Go, C/C++ 등의 언어도 사용해 본 경험이 있습니다.<br /><br />
              요즘 바이브 코딩을 즐기고 있습니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full" asChild>
                <a
                  href="https://github.com/enc2586"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 size-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/folders/15RWU_ARzCtC5otKKWzDpP0OoiUk3jkjg?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 size-4" />
                  CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <img
        src="/profile.jpeg"
        alt="Profile"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
);

export default About;
