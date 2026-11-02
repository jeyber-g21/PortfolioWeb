import { getLocale } from "next-intl/server";
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
