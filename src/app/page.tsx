import type { Metadata } from "next";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";

export const metadata: Metadata = {
  title: "Salvador Di Sabatto — Desarrollador Fullstack",
  description:
    "Desarrollador Fullstack especializado en Next.js, TypeScript y Node.js. Construyo aplicaciones web completas, desde la interfaz hasta el servidor.",

  metadataBase: new URL("https://salvadordisabatto.com.ar/"),

  alternates: {
    canonical: "/",
  },

  authors: [
    { name: "Salvador Di Sabatto", url: "https://salvadordisabatto.com.ar/" },
  ],
  keywords: [
    "Salvador Di Sabatto",
    "Desarrollador Fullstack",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React",
    "PostgreSQL",
    "Express",
    "Tailwind CSS",
    "Fullstack developer",
    "portfolio",
    "Argentina",
  ],

  openGraph: {
    type: "website",
    url: "https://salvadordisabatto.com.ar/",
    title: "Salvador Di Sabatto — Desarrollador Fullstack",
    description:
      "Desarrollador Fullstack especializado en Next.js, TypeScript y Node.js. Construyo aplicaciones web completas, desde la interfaz hasta el servidor.",
    siteName: "Salvador Di Sabatto",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Salvador Di Sabatto — Desarrollador Fullstack",
      },
    ],
    locale: "es_AR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salvador Di Sabatto — Desarrollador Fullstack",
    description:
      "Desarrollador Fullstack especializado en Next.js, TypeScript y Node.js. Construyo aplicaciones web completas, desde la interfaz hasta el servidor.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

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
