import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import type { Localized } from "@/content/types";
import type { Locale } from "@/i18n/routing";

/** Locale actual tipado, para Server Components. */
export async function currentLocale(): Promise<Locale> {
  return (await getLocale()) as Locale;
}

/** Devuelve el texto de un campo Localized en el idioma activo. */
export function localize(text: Localized, locale: Locale): string {
  return text[locale];
}

/** Activa el render estático de una página. El layout ya validó el locale con hasLocale(). */
export async function initPage(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return locale as Locale;
}

/** Metadata de una página interna: el título es su nombre en el navbar. */
export async function pageMetadata(
  params: Promise<{ locale: string }>,
  key: "projects" | "experience" | "about" | "contact",
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "nav",
  });
  return { title: t(key) };
}
