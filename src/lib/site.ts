// Configuración del sitio que no es contenido editorial (eso vive en src/content/).

/** Repo público del portafolio: el sitio es su propia muestra de código (spec §10.7). */
export const repoUrl = "https://github.com/jeyber-g21/PortfolioWeb";

/** Anclas de la página única. Los ids no se traducen para que el cambio de idioma conserve la sección. */
export const sections = [
  "projects",
  "stack",
  "experience",
  "about",
  "contact",
] as const;
