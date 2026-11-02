import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  // Fallback para la raíz cuando Accept-Language no coincide (spec §11).
  defaultLocale: "en",
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
