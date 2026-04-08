import { projects } from "@/data/projects";
import ProjectCard from "../ui/project-card";
import Subtitle from "../ui/subtitles";

export default function Projects() {
  return (
    <section id="proyectos" className="flex flex-col gap-6">
      <Subtitle title="Proyectos" />
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} side={i % 2 === 0 ? "right" : "left"} />
        ))}
      </div>
    </section>
  );
}
