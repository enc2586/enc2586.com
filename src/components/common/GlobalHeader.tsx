import { Link, useNavigate } from "@tanstack/react-router";
import { Github, Mail, BookOpen, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const email = "enc25867@gm.gist.ac.kr";

export function GlobalHeader() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ko-KR" ? "en-US" : "ko-KR";
    i18n.changeLanguage(newLang);
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate({ to: "/" }).then(() => {
      // Wait for the navigation to complete
      setTimeout(() => {
        const element = document.getElementById("projects");
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    });
  };

  const handleAwardsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate({ to: "/" }).then(() => {
      // Wait for the navigation to complete
      setTimeout(() => {
        const element = document.getElementById("awards");
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Left section */}
        <div className="flex-1">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300"
          >
            <img src="/favicon.ico" alt="Logo" className="size-7" />
            enc2586
          </Link>
        </div>

        {/* Center Navigation Menu */}
        <nav className="flex items-center gap-6">
          <a
            href="#projects"
            onClick={handleProjectsClick}
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
          >
            {t("projects.title")}
          </a>
          <a
            href="#awards"
            onClick={handleAwardsClick}
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
          >
            {t("awards.title")}
          </a>
        </nav>

        {/* Right section */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <a
            href="https://github.com/enc2586"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg p-2 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            title={t("nav.github")}
          >
            <Github className="size-6" />
          </a>
          <a
            href="https://enc2586.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg p-2 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            title={t("nav.blog")}
          >
            <BookOpen className="size-6" />
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="transform rounded-lg p-2 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:text-neutral-400 dark:hover:text-white">
                <Mail className="size-6" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                <Mail className="mr-2 size-4" />
                {t("nav.email.send")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  await navigator.clipboard.writeText(email);
                }}
              >
                <Copy className="mr-2 size-4" />
                {t("nav.email.copy")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={toggleLanguage}
            className="transform rounded-lg px-3 py-1 text-sm font-medium text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            {i18n.language === "ko-KR" ? "EN" : "KO"}
          </button>
        </div>
      </div>
    </header>
  );
}
