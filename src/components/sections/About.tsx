import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";
import { currentLocale, localize } from "@/lib/utils";

// TODO: [PENDIENTE] foto (spec §10.5) y 2–3 líneas personales.
export async function About() {
  const locale = await currentLocale();
  const t = await getTranslations();

  return (
    <Section id="about" index="04" title={t("nav.about")}>
      <p className="max-w-prose text-lead">
        {localize(profile.summary, locale)}
      </p>

      <h3 className="mt-12 label text-muted">{t("about.languages")}</h3>
      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
        {profile.languages.map((lang) => (
          <li key={lang.name.en}>
            {localize(lang.name, locale)}{" "}
            <span className="text-muted">· {localize(lang.level, locale)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
