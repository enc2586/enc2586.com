import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

interface LinkItem {
  name: string;
  username: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description?: string;
}

const contactLinks: LinkItem[] = [
  {
    name: "Email",
    username: "enc2586@gmail.com",
    url: "mailto:enc2586@gmail.com",
    icon: Mail,
    color: "text-blue-400",
  },
  {
    name: "Instagram",
    username: "@enc2586",
    url: "https://instagram.com/enc2586",
    icon: Instagram,
    color: "text-pink-400",
  },
  {
    name: "LinkedIn",
    username: "Hongje Choi",
    url: "https://www.linkedin.com/in/hongje-choi-b8779a357",
    icon: Linkedin,
    color: "text-blue-500",
  },
];

const devLinks: LinkItem[] = [
  {
    name: "GitHub",
    username: "@enc2586",
    url: "https://github.com/enc2586",
    icon: Github,
    color: "text-gray-400",
  },
];

function LinksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24">
      {/* 페이지 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">링크</h1>
        <p className="text-lg text-zinc-400">
          다양한 플랫폼에서 저를 찾아보세요
        </p>
      </div>

      {/* 연락처 섹션 */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-white">연락</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <LinkCard key={link.name} link={link} />
          ))}
        </div>
      </section>

      {/* 개발 플랫폼 섹션 */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-white">개발</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {devLinks.map((link) => (
            <LinkCard key={link.name} link={link} />
          ))}
        </div>
      </section>
    </div>
  );
}

function LinkCard({ link }: { link: LinkItem }) {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="h-full border-zinc-800 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl">
        <CardContent className="flex flex-col items-center justify-center space-y-3 p-6 text-center">
          {/* 아이콘 */}
          <div
            className={`rounded-lg bg-zinc-800 p-3 transition-colors group-hover:bg-zinc-700 ${link.color}`}
          >
            <Icon className="size-8" />
          </div>

          {/* 플랫폼 이름 */}
          <h3 className="font-bold text-white">{link.name}</h3>

          {/* 사용자명 */}
          <p className="text-sm text-zinc-400">{link.username}</p>

          {/* 추가 정보 */}
          {link.description && (
            <p className="text-xs text-zinc-500">{link.description}</p>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
