import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";
import { Logo } from "./navbar/Logo";
import { NavMenu } from "./navbar/NavMenu";
import { NavigationSheet } from "./navbar/NavigationSheet";

export function Navigation() {
  return (
    <nav
      aria-label="주요 메뉴"
      className="fixed inset-x-4 top-4 z-50 mx-auto h-14 max-w-4xl rounded-full border border-white/10 bg-background/80 shadow-lg shadow-black/20 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full items-center justify-between px-2.5 sm:px-3">
        <Logo />

        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            className="size-10 rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://enc2586.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="기술 블로그, 새 창에서 열기"
            >
              <BookOpen className="size-4.5" aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="size-10 rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/enc2586"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub, 새 창에서 열기"
            >
              <Github className="size-4.5" aria-hidden="true" />
            </a>
          </Button>

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
