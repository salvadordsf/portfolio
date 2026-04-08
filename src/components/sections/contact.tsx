import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/icons";
import Subtitle from "../ui/subtitles";
import CvCard from "../ui/cv-card";
import LinkCard from "../ui/link-card";

const links = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=salvadordisabatto@gmail.com",
    icon: Mail,
    value: "salvadordisabatto@gmail.com",
    external: false,
    download: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salvador-di-sabatto-fund-0b1bb9398/",
    icon: LinkedinIcon,
    value: "Salvador Di Sabatto",
    external: true,
    download: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/salvadordsf",
    icon: GithubIcon,
    value: "salvadordsf",
    external: true,
    download: false,
  },
];

const cvLinks = [
  {
    label: "Currículum",
    href: "/cv-salvador-di-sabatto-es.pdf",
    value: "Descargar CV — Español",
  },
  {
    label: "Currículum",
    href: "/cv-salvador-di-sabatto-en.pdf",
    value: "Descargar CV — Inglés",
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
        {links.map((link) => (
          <LinkCard key={link.value} {...link} />
        ))}

        <div className="flex gap-2">
          {cvLinks.map((cv) => (
            <CvCard key={cv.value} {...cv} />
          ))}
        </div>
      </div>
    </section>
  );
}
