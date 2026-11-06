import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { textLink } from "@/components/ui/ButtonLink";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { TagList } from "@/components/ui/Tag";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/utils";

type Props = {
  projects: Project[];
  locale: Locale;
  headingLevel: 2 | 3;
};

/** Proyectos de formación: tarjetas cortas en dos columnas, con demo y código.
 *  Etiquetados como "Formación" para no confundirlos con trabajo profesional (spec §17). */
export async function CourseworkList({
  projects,
  locale,
  headingLevel,
}: Props) {
  const t = await getTranslations("projects");
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <ul className="grid gap-12 md:grid-cols-2 md:gap-8">
      {projects.map((project) => {
        const cover = project.images?.[0];
        const { demo, repo } = project.links;
        return (
          <li key={project.slug}>
            <article>
              {cover && (
                <ScreenshotFrame
                  shot={{ ...cover, alt: localize(cover.alt, locale) }}
                  sizes="(min-width: 768px) 440px, 100vw"
                />
              )}
              <p className="mt-6 label text-muted">
                {project.year && <span>{project.year} · </span>}
                {t(`kind.${project.kind}`)}
              </p>
              <Heading className="mt-2 font-sans text-h3">
                {localize(project.title, locale)}
              </Heading>
              <p className="mt-2 text-muted">
                {localize(project.tagline, locale)}
              </p>
              <div className="mt-4">
                <TagList items={project.stack} />
              </div>
              {(demo || repo) && (
                <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-small">
                  {demo && (
                    <a href={demo} className={textLink}>
                      {t("liveDemo")}
                      <ArrowUpRight
                        size={14}
                        aria-hidden
                        className="ml-0.5 inline"
                      />
                    </a>
                  )}
                  {repo && (
                    <a href={repo} className={textLink}>
                      {t("code")}
                      <ArrowUpRight
                        size={14}
                        aria-hidden
                        className="ml-0.5 inline"
                      />
                    </a>
                  )}
                </p>
              )}
            </article>
          </li>
        );
      })}
    </ul>
  );
}
