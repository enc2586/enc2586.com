import { motion } from "motion/react";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  bottomElements?: ReactNode;
}

export const ProjectCard = ({
  title,
  description,
  image,
  href,
  bottomElements,
}: ProjectCardProps) => {
  const cardContent = (
    <motion.div
      whileHover={href ? { y: -5 } : {}}
      className="h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-md transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900"
    >
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

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};
