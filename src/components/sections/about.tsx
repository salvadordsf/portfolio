import Subtitle from "../ui/subtitles";

export default function About() {
  return (
    <section id="sobre-mi" className="flex flex-col gap-4">
      <Subtitle title="Sobre mí" />
      <div className="flex flex-col gap-3 text-zinc-400 leading-relaxed">
        <p>
          Soy desarrollador fullstack con foco en el ecosistema
          JavaScript/TypeScript. Me involucro en todas las capas de un producto:
          base de datos, API, interfaz y experiencia de usuario.
        </p>
        <p>
          Trabajo prestando atención al detalle. No me conformo con que algo
          funcione — me importa que esté bien resuelto, tanto en el código como
          en lo que ve el usuario. Me gusta escribir código limpio, mantenible y
          construir interfaces intuitivas y agradables.
        </p>
        <p>
          Actualmente busco un equipo donde pueda aportar y seguir creciendo
          como desarrollador.
        </p>
      </div>
    </section>
  );
}
