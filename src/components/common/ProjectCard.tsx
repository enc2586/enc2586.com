import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  to?: string;
  href?: string;
  bottomElements?: ReactNode;
  isInDevelopment?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  image,
  to,
  href,
  bottomElements,
  isInDevelopment = false,
}: ProjectCardProps) => {
  const cardContent = (
    <motion.div
      whileHover={to || href ? { y: -5 } : {}}
      className="relative h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-md transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900"
    >
      {isInDevelopment && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
          개발중
        </div>
      )}
      <div className="h-48 w-full overflow-hidden rounded-lg">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full rounded-lg bg-neutral-200 dark:bg-neutral-800" />
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
        {title}
      </h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      {bottomElements && <div className="mt-4">{bottomElements}</div>}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className="block h-full" target="_blank">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};
