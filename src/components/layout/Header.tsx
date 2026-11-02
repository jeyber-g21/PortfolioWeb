import { getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { navPages } from "@/lib/site";
import { currentLocale } from "@/lib/utils";
import { LocaleSwitch } from "./LocaleSwitch";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export async function Header() {
  const locale = await currentLocale();
  const t = await getTranslations();
  const otherLocale: Locale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-10 header-scroll-border bg-bg/85 backdrop-blur-sm">
      {/* Móvil: marca y controles arriba, navegación en una segunda fila. Escritorio: una sola fila. */}
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 px-6 py-2 md:flex-nowrap md:px-12">
        <Link href="/" className="font-display text-h3 text-ink">
          {profile.displayName}
        </Link>

        <nav
          aria-label={t("a11y.mainNav")}
          className="order-last w-full md:order-none md:w-auto"
        >
          <NavLinks
            items={navPages.map(({ href, key }) => ({
              href,
              label: t(`nav.${key}`),
            }))}
          />
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitch
            target={otherLocale}
            label={t("locale.switchTo")}
            short={t("locale.short")}
          />
          <ThemeToggle label={t("theme.toggle")} />
          <a
            href={profile.cv[locale]}
            download
            className="ml-3 hidden min-h-touch items-center rounded-card border border-border-strong px-4 text-small transition-colors hover:border-accent hover:text-accent lg:inline-flex"
          >
            {t("nav.downloadCv")}
          </a>
        </div>
      </div>
    </header>
  );
}
