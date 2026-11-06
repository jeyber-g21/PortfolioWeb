import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  // La raíz siempre abre en inglés, sin mirar el idioma del navegador ni la cookie:
  // decisión del usuario (la audiencia son reclutadores internacionales). El cambio a
  // español es explícito desde el selector del header.
  defaultLocale: "en",
  localeDetection: false,
  // Rutas internas en inglés (nombres de carpeta en app/[locale]); la URL pública se traduce.
  pathnames: {
    "/": "/",
    "/projects": { es: "/proyectos", en: "/projects" },
    "/experience": { es: "/experiencia", en: "/experience" },
    "/about": { es: "/sobre-mi", en: "/about" },
    "/contact": { es: "/contacto", en: "/contact" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
