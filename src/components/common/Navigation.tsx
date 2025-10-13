import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";
import { Logo } from "./navbar/Logo";
import { NavMenu } from "./navbar/NavMenu";
import { NavigationSheet } from "./navbar/NavigationSheet";

export function Navigation() {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://enc2586.tistory.com/m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="h-5! w-5!" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/enc2586"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5! w-5!" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
