import { ReactElement } from "react";
import {
  SiAxios,
  SiBetterauth,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiZod,
} from "react-icons/si";
import Subtitle from "../ui/subtitles";
import { DiVisualstudio } from "react-icons/di";
import ZustandLogo from "../ui/zustand-logo";

type StackItem = {
  label: string;
  icon: ReactElement;
  color: string;
};

type StackCategory = {
  title: string;
  items: StackItem[];
};

const categories: StackCategory[] = [
  {
    title: "Frontend",
    items: [
      { label: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { label: "React", icon: <SiReact />, color: "#61DAFB" },
      { label: "Next.js", icon: <SiNextdotjs />, color: "currentColor" },
      { label: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
      { label: "Express", icon: <SiExpress />, color: "currentColor" },
      { label: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { label: "Prisma", icon: <SiPrisma />, color: "currentColor" },
    ],
  },
  {
    title: "Ecosistema",
    items: [
      { label: "Zod", icon: <SiZod />, color: "#3E67B1" },
      { label: "Zustand", icon: <ZustandLogo />, color: "currentColor" },
      { label: "TanStack Query", icon: <SiReactquery />, color: "#FF4154" },
      { label: "React Hook Form", icon: <SiReacthookform />, color: "#EC5990" },
      { label: "Axios", icon: <SiAxios />, color: "#5A29E4" },
      { label: "Vitest", icon: <SiVitest />, color: "#6E9F18" },
      { label: "Better Auth", icon: <SiBetterauth />, color: "currentColor" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { label: "Git", icon: <SiGit />, color: "#F05032" },
      { label: "GitHub", icon: <SiGithub />, color: "currentColor" },
      { label: "npm", icon: <SiNpm />, color: "#CB3837" },
      { label: "ESLint", icon: <SiEslint />, color: "#4B32C3" },
      { label: "VS Code", icon: <DiVisualstudio />, color: "#007ACC" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="flex flex-col gap-8">
      <Subtitle title="Stack" />
      <div className="flex flex-col gap-6">
        {categories.map(({ title, items }) => (
          <div key={title} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-medium tracking-widest uppercase text-zinc-500 shrink-0">
                {title}
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map(({ label, icon, color }) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}