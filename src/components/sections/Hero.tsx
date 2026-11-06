import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ButtonLink, buttonStyles, textLink } from "@/components/ui/ButtonLink";
import { profile } from "@/content/profile";
import { Link } from "@/i18n/navigation";
import { currentLocale, localize } from "@/lib/utils";

// Sin animación de entrada: es el LCP y debe pintarse en el primer frame (spec §10.1).
// Texto en columnas 1–7 y retrato en 8–12; en móvil el retrato va debajo del texto.
export async function Hero() {
  const locale = await currentLocale();
  const t = await getTranslations();

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-page px-6 md:px-12"
    >
      <div className="grid items-center gap-16 py-section lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="label text-accent">{localize(profile.title, locale)}</p>
          <h1 id="hero-title" className="mt-6 text-display">
            {profile.displayName}
          </h1>
          <p className="mt-8 max-w-prose text-lead">
            {localize(profile.headline, locale)}
          </p>
          <p className="mt-6 font-mono text-small text-muted">
            {localize(profile.location, locale)} · {profile.timezone} ·{" "}
            {localize(profile.availability, locale)}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/projects" className={buttonStyles()}>
              {t("hero.viewProjects")}
            </Link>
            <ButtonLink href={profile.cv[locale]} download variant="secondary">
              {t("hero.downloadCv")}
            </ButtonLink>
          </div>

          <ul className="mt-8 flex gap-6 text-small text-muted">
            <li>
              <a href={profile.social.github} className={textLink}>
                {t("social.github")}
              </a>
            </li>
            <li>
              <a href={profile.social.linkedin} className={textLink}>
                {t("social.linkedin")}
              </a>
            </li>
          </ul>
        </div>

        <div className="relative mr-4 mb-4 max-w-sm sm:max-w-xs lg:col-span-4 lg:col-start-9 lg:max-w-none">
          {/* Marco desplazado en color de acento: decorativo, detrás del retrato. */}
          <span
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-photo border border-accent"
          />
          <Image
            src={profile.photo.src}
            width={profile.photo.width}
            height={profile.photo.height}
            alt={localize(profile.photo.alt, locale)}
            sizes="(min-width: 1024px) 400px, 384px"
            loading="eager"
            fetchPriority="high"
            className="relative h-auto w-full rounded-photo bg-surface"
          />
        </div>
      </div>
    </section>
  );
}
