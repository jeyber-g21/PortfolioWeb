import type messages from "./i18n/messages/es.json";
import type { routing } from "./i18n/routing";

// Tipado de claves de traducción: t("nav.projectz") falla en el typecheck.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
