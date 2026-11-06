import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { coreStack } from "@/content/stack";
import { getPathname } from "@/i18n/navigation";
import type { Locale, Pathname } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

// SEO (spec §13). Las URLs son relativas: metadataBase (layout) las vuelve absolutas.

const ogLocale = { es: "es_CO", en: "en_US" } as const;

/** Canonical y hreflang recíprocos; x-default apunta al inglés (spec §11). */
export function alternatesFor(
  href: Pathname,
  locale: Locale,
): Metadata["alternates"] {
  const url = (l: Locale) => getPathname({ href, locale: l });
  return {
    canonical: url(locale),
    languages: { es: url("es"), en: url("en"), "x-default": url("en") },
  };
}

/** Open Graph y Twitter de una página. La imagen se declara explícita: si una página define
 *  su propio openGraph, Next deja de heredar la de app/[locale]/opengraph-image.tsx. */
export function socialFor(
  href: Pathname,
  locale: Locale,
  title: string,
  description: string,
  imageAlt: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const image = {
    url: `/${locale}/opengraph-image/default`,
    width: 1200,
    height: 630,
    alt: imageAlt,
  };
  return {
    openGraph: {
      type: "website",
      siteName: profile.displayName,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "es" ? "en" : "es"],
      url: getPathname({ href, locale }),
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** schema.org/Person para la página de inicio. Sin teléfono (CLAUDE.md, regla 9). */
export function personJsonLd(locale: Locale) {
  const current = experience[0];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.displayName,
    url: `${siteUrl}${getPathname({ href: "/", locale })}`,
    image: `${siteUrl}${profile.photo.src}`,
    jobTitle: profile.title[locale],
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cúcuta",
      addressCountry: "CO",
    },
    sameAs: [profile.social.github, profile.social.linkedin],
    knowsAbout: coreStack,
    worksFor: {
      "@type": "Organization",
      name: current.company,
      ...(current.companyUrl && { url: current.companyUrl }),
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Pamplona",
    },
  };
}
