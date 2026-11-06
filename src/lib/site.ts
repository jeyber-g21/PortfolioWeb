import type { Pathname } from "@/i18n/routing";

// Configuración del sitio que no es contenido editorial (eso vive en src/content/).

/** URL pública de producción (Vercel). Base de canonical, hreflang, OG y sitemap.
 *  El CI la sustituye por el servidor local para que Lighthouse valide los canonical. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://jeyber-gomez-portfolio.vercel.app";

/** Repo público del portafolio: el sitio es su propia muestra de código (spec §10.7). */
export const repoUrl = "https://github.com/jeyber-g21/PortfolioWeb";

/** Páginas del navbar, en orden. La clave es la de nav.* en los mensajes. */
export const navPages = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/experience", key: "experience" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const satisfies readonly { href: Pathname; key: string }[];
