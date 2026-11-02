import { getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { sections } from "@/lib/site";
import { currentLocale } from "@/lib/utils";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeToggle } from "./ThemeToggle";

export async function Header() {
  const locale = await currentLocale();
  const t = await getTranslations();
  const otherLocale: Locale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-10 header-scroll-border bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-6 md:px-12">
        <Link href="/" className="font-display text-h3 text-ink">
          {profile.displayName}
        </Link>

        <nav aria-label={t("a11y.mainNav")} className="hidden md:block">
          <ul className="flex gap-6">
            {sections.map((id) => (
              <li key={id}>
                <Link
                  href={{ pathname: "/", hash: id }}
                  className="text-small text-muted transition-colors hover:text-ink"
                >
                  {t(`nav.${id}`)}
                </Link>
              </li>
            ))}
          </ul>
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
            className="ml-3 hidden min-h-touch items-center rounded-card border border-border-strong px-4 text-small transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            {t("nav.downloadCv")}
          </a>
        </div>
      </div>
    </header>
  );
}
