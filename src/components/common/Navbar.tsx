import { Github, Mail, BookOpen, Copy, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

const email = "enc25867@gm.gist.ac.kr";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ko-KR" ? "en-US" : "ko-KR";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <img src="/favicon.ico" alt="Logo" className="size-7" />
        <h1 className="text-base font-bold md:text-2xl">enc2586</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="transform rounded-lg p-2 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          title={theme === "dark" ? t("nav.theme.light") : t("nav.theme.dark")}
        >
          {theme === "dark" ? (
            <Sun className="size-6" />
          ) : (
            <Moon className="size-6" />
          )}
        </button>
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
            <DropdownMenuItem onClick={() => (window.location.href = email)}>
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
    </nav>
  );
}
