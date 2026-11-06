import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageTransition } from "@/components/ui/PageTransition";
import { profile } from "@/content/profile";
import { initPage, localize, pageMetadata } from "@/lib/utils";

export function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  return pageMetadata(params, "about");
}

// Retrato en las columnas 1–3 junto al texto (spec §10.5).
export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const locale = await initPage(params);
  const t = await getTranslations();

  return (
    <>
      <PageTransition>
        <PageHeader
          index="03"
          title={t("nav.about")}
          intro={t("intro.about")}
        />
      </PageTransition>
      <PageTransition delayed>
        <div className="mx-auto max-w-page px-6 pb-section md:px-12">
          <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-12 lg:gap-8">
            <Image
              src={profile.aboutPhoto.src}
              width={profile.aboutPhoto.width}
              height={profile.aboutPhoto.height}
              alt={localize(profile.aboutPhoto.alt, locale)}
              sizes="(min-width: 1024px) 260px, 320px"
              loading="eager"
              className="h-auto w-full max-w-xs rounded-photo bg-surface lg:col-span-3"
            />
            <div className="lg:col-span-9">
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
      </PageTransition>
    </>
  );
}
