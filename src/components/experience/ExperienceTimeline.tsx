import { Badge } from "@/components/ui/badge";
import type { Experience, ExperienceType } from "@/data/experiences";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Hammer,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const typeMeta: Record<
  ExperienceType,
  { label: string; icon: LucideIcon; iconClassName: string }
> = {
  work: {
    label: "경력",
    icon: BriefcaseBusiness,
    iconClassName: "bg-orange-500/15 text-orange-300 ring-orange-500/20",
  },
  activity: {
    label: "활동",
    icon: Hammer,
    iconClassName: "bg-amber-500/15 text-amber-300 ring-amber-500/20",
  },
  military: {
    label: "복무",
    icon: ShieldCheck,
    iconClassName: "bg-sky-500/15 text-sky-300 ring-sky-500/20",
  },
  education: {
    label: "학력",
    icon: GraduationCap,
    iconClassName: "bg-violet-500/15 text-violet-300 ring-violet-500/20",
  },
  achievement: {
    label: "수상·선정",
    icon: Trophy,
    iconClassName: "bg-yellow-500/15 text-yellow-300 ring-yellow-500/20",
  },
  business: {
    label: "창업",
    icon: Building2,
    iconClassName: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/20",
  },
};

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative" aria-label="경력과 주요 경험 타임라인">
      {items.map((experience) => {
        const meta = typeMeta[experience.type];
        const Icon = meta.icon;

        return (
          <li
            key={experience.id}
            className="group relative pb-8 pl-14 last:pb-0 sm:pl-16"
          >
            <div
              className="absolute bottom-0 left-5 top-11 w-px bg-gradient-to-b from-zinc-700 to-zinc-800 group-last:hidden"
              aria-hidden="true"
            />
            <div
              className={`absolute left-0 top-0 flex size-10 items-center justify-center rounded-full ring-1 ring-inset ${meta.iconClassName}`}
            >
              <Icon className="size-5" aria-hidden="true" />
            </div>

            <article className="rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-5 transition-[border-color,background-color] duration-200 hover:border-zinc-700 hover:bg-zinc-900/65 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-zinc-800/90 text-zinc-300"
                    >
                      {meta.label}
                    </Badge>
                    {experience.status && (
                      <Badge className="rounded-full border-0 bg-primary/15 text-primary">
                        <span className="mr-1.5 size-1.5 rounded-full bg-current" />
                        {experience.status}
                      </Badge>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {experience.title}
                  </h3>
                  <p className="mt-1 font-medium text-zinc-300">
                    {experience.organization}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <p className="mt-4 leading-7 text-muted-foreground">
                {experience.description}
              </p>

              {experience.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border border-zinc-700/60 bg-zinc-800/60 text-zinc-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {experience.link && (
                <a
                  href={experience.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
                >
                  {experience.link.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">새 창에서 열기</span>
                </a>
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}
