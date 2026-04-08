import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-25">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}