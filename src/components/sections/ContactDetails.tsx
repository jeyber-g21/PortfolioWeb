import { getTranslations } from "next-intl/server";
import { ButtonLink, textLink } from "@/components/ui/ButtonLink";
import { profile } from "@/content/profile";
import { currentLocale, localize } from "@/lib/utils";

// Email visible y copiable, sin formulario ni teléfono (spec §10.6, CLAUDE.md regla 9).
export async function ContactDetails() {
  const locale = await currentLocale();
  const t = await getTranslations();

  return (
    <>
      <p className="max-w-prose text-lead text-muted">
        {localize(profile.contactNote, locale)}
      </p>

      <p className="mt-10">
        <span className="block label text-muted">{t("contact.email")}</span>
        <a
          href={`mailto:${profile.email}`}
          className={`mt-2 inline-block font-display text-h3 break-all md:text-h2 ${textLink}`}
        >
          {profile.email}
        </a>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <ButtonLink href={profile.cv[locale]} download>
          {t("hero.downloadCv")}
        </ButtonLink>
        <a href={profile.social.github} className={`text-small ${textLink}`}>
          {t("social.github")}
        </a>
        <a href={profile.social.linkedin} className={`text-small ${textLink}`}>
          {t("social.linkedin")}
        </a>
      </div>
    </>
  );
}
