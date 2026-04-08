import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/icons";
import Subtitle from "../ui/subtitles";

const links = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=salvadordisabatto@gmail.com",
    icon: Mail,
    value: "salvadordisabatto@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salvador-di-sabatto-fund-0b1bb9398/",
    icon: LinkedinIcon,
    value: "Salvador Di Sabatto",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/salvadordsf",
    icon: GithubIcon,
    value: "salvadordsf",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="flex flex-col gap-8">
      <Subtitle title="Contacto" />

      <div className="flex flex-col gap-2">
        <h3 className="text-white text-2xl font-semibold leading-snug">
          ¿Tenés algo en mente?
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
          Estoy abierto a nuevas oportunidades. Si tenés un proyecto, una
          propuesta o simplemente una consulta, escribime.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {links.map(({ label, href, icon: Icon, value, external }) => (
          <a
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { target: "_blank"})}
            className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <Icon
                  size={15}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">{label}</span>
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  {value}
                </span>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
