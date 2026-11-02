import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { profile } from "@/content/profile";
import { initPage, localize, pageMetadata } from "@/lib/utils";

export function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  return pageMetadata(params, "about");
}

// TODO: [PENDIENTE] foto (spec §10.5), en las columnas 1–3 junto al texto.
export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const locale = await initPage(params);
  const t = await getTranslations();

  return (
    <>
      <PageHeader index="03" title={t("nav.about")} />
      <div className="mx-auto max-w-page px-6 py-section md:px-12">
        <div className="border-t border-border pt-section lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9 lg:col-start-4">
            <p className="max-w-prose text-lead">
              {localize(profile.story, locale)}
            </p>
            <p className="mt-6 max-w-prose text-muted">
              {localize(profile.summary, locale)}
            </p>

            <h2 className="mt-12 label font-sans text-muted">
              {t("about.languages")}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {profile.languages.map((lang) => (
                <li key={lang.name.en}>
                  {localize(lang.name, locale)}{" "}
                  <span className="text-muted">
                    · {localize(lang.level, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
