import { ReactElement } from "react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Subtitle from "../ui/subtitles";

type StackItem = {
  label: string;
  icon: ReactElement;
  color: string;
};

const stack: StackItem[] = [
  { label: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { label: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { label: "React", icon: <SiReact />, color: "#61DAFB" },
  { label: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
  { label: "Express", icon: <SiExpress />, color: "#ffffff" },
  { label: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { label: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { label: "Git", icon: <SiGit />, color: "#F05032" },
];

export default function Stack() {
  return (
    <section id="stack" className="flex flex-col gap-6">
      <Subtitle title="Stack" />

      <div className="flex flex-wrap gap-2">
        {stack.map(({ label, icon, color }) => (
          <span
            key={label}
            className="group flex items-center gap-2 px-3 py-1.5 text-sm
                       bg-zinc-900 border border-zinc-800 text-zinc-400
                       rounded-lg cursor-default select-none
                       hover:border-zinc-600 hover:text-zinc-100
                       transition-all duration-200"
          >
            <span
              className="text-base transition-colors duration-200"
              style={{ color }}
            >
              {icon}
            </span>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
