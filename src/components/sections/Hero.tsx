import { getTranslations } from "next-intl/server";
import { ButtonLink, buttonStyles, textLink } from "@/components/ui/ButtonLink";
import { profile } from "@/content/profile";
import { Link } from "@/i18n/navigation";
import { currentLocale, localize } from "@/lib/utils";

// Sin animación de entrada: es el LCP y debe pintarse en el primer frame (spec §10.1).
// TODO: [PENDIENTE] foto a la derecha (columnas 8–12) cuando exista profile.photo.
export async function Hero() {
  const locale = await currentLocale();
  const t = await getTranslations();

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-page px-6 md:px-12"
    >
      <div className="py-section lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8">
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
      </div>
    </section>
  );
}
