import { Book, ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "../ui/icons";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
  side?: "left" | "right";
};

export default function ProjectCard({ project, side = "left" }: Props) {
  const isRight = side === "right";

  return (
    <div
      className={`group flex flex-col md:flex-row gap-0 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300 ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* imagen */}
      {project.imageUrl && (
        <div className="relative w-full md:w-2/5 aspect-video overflow-hidden bg-zinc-800 md:min-h-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 from-zinc-900/60 to-transparent md:hidden" />
        </div>
      )}

      {/* contenido */}
      <div className="flex flex-col gap-4 p-6 flex-1 justify-between">
        <div className="flex flex-col gap-4">
          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-white font-semibold text-lg leading-snug">
              {project.title}
            </h3>
            {project.status === "live" && (
              <span className="shrink-0 flex items-center gap-1.5 px-2.5 py-0.5 text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>

          {/* descripción */}
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 border border-zinc-700 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* links */}
        <div className="flex gap-4 pt-2 border-t border-zinc-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon size={14} />
              Repo
            </a>
          )}
          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Book size={14} />
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
