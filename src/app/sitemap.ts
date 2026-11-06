import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { navPages, siteUrl } from "@/lib/site";

// Una entrada por página e idioma, cada una con sus alternativas hreflang (spec §11, §13).
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (href: (typeof navPages)[number]["href"], locale: Locale) =>
    `${siteUrl}${getPathname({ href, locale })}`;

  return navPages.flatMap(({ href }) =>
    routing.locales.map((locale) => ({
      url: url(href, locale),
      lastModified: new Date(),
      alternates: {
        languages: {
          es: url(href, "es"),
          en: url(href, "en"),
          "x-default": url(href, "en"),
        },
      },
    })),
  );
}
