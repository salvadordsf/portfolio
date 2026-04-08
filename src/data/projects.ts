export type Project = {
  title: string;
  description: string;
  tech: string[];
  status?: "live" | "wip";
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  documentationUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Ecommerce Genérico",
    description:
      "Plataforma de ecommerce completa con parte pública y panel de administración. Incluye gestión de productos, carrito, órdenes, home dinámico y autenticación. Arquitectura desacoplada: frontend en Vercel, backend en Render y base de datos en Supabase. Lista para integrar pasarela de pago y servicio de envíos.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    demoUrl: "https://ecommerce-frontend-bice-eta.vercel.app/home",
    repoUrl:
      "https://github.com/salvadordsf/Copia-publica-del-front-ecommerce-generico",
    documentationUrl:
      "https://deepwiki.com/salvadordsf/Copia-publica-del-front-ecommerce-generico",
    status: "live",
    imageUrl: "/ecommerce.PNG"
  },
  {
    title: "Meli Tools",
    description:
      "Herramienta interna en producción desarrollada para Beat Mobile, empresa proveedora de contenido de Mercado Play (plataforma de streaming de Mercado Libre). Automatiza la generación de metadata de películas y series consumiendo la API de TMDB, mapea los datos a los estándares internos de Mercado Libre y exporta hojas de cálculo listas para ingestión. Elimina la carga manual y estandariza el proceso entre regiones.",
    tech: ["React", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS"],
    demoUrl: "https://meli-tools.netlify.app",
    repoUrl: "https://github.com/salvadordsf/Meli-tools",
    documentationUrl: "https://deepwiki.com/salvadordsf/Meli-tools",
    status: "live",
    imageUrl: "/meli-tool.PNG"
  },
];
