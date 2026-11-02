import { getTranslations } from "next-intl/server";
import { textLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { Tag, TagList } from "@/components/ui/Tag";
import { courseworkUrl, projects } from "@/content/projects";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { currentLocale, localize } from "@/lib/utils";

export async function Projects() {
  const locale = await currentLocale();
  const t = await getTranslations();
  const featured = projects
    .filter((p) => p.featured && p.kind !== "coursework")
    .slice(0, 4);

  return (
    <Section id="projects" index="01" title={t("nav.projects")}>
      <ul className="divide-y divide-border border-b border-border">
        {featured.map((project) => (
          // El primer proyecto arranca pegado al filete de la sección: sin doble línea arriba.
          <li key={project.slug} className="first:*:pt-0">
            <ProjectCard project={project} locale={locale} />
          </li>
        ))}
      </ul>

      <p className="mt-10 text-small text-muted">
        <a href={courseworkUrl} className={textLink}>
          {t("projects.coursework")} <span aria-hidden>→</span>
        </a>
      </p>
    </Section>
  );
}

async function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = await getTranslations("projects");
  const { links } = project;
  const hasLinks = links.demo || links.repo || links.caseStudy;

  return (
    <article className="grid gap-6 py-10 md:grid-cols-9 md:gap-8">
      <p className="label text-muted md:col-span-2">
        {project.year && <span>{project.year} · </span>}
        {t(`kind.${project.kind}`)}
        {project.client && (
          <span className="mt-1 block tracking-normal normal-case">
            {project.client}
          </span>
        )}
      </p>

      <div className="md:col-span-7">
        <h3 className="text-h3">{localize(project.title, locale)}</h3>
        <p className="mt-3 max-w-prose text-lead text-muted">
          {localize(project.tagline, locale)}
        </p>

        {(project.problem || project.outcome) && (
          <dl className="mt-6 grid max-w-prose gap-4">
            {project.problem && (
              <div>
                <dt className="label text-muted">{t("problem")}</dt>
                <dd className="mt-1">{localize(project.problem, locale)}</dd>
              </div>
            )}
            {project.outcome && (
              <div>
                <dt className="label text-muted">{t("outcome")}</dt>
                <dd className="mt-1">{localize(project.outcome, locale)}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="mt-6">
          <TagList items={project.stack} />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-small">
          {/* Trabajo propietario: etiqueta honesta en lugar de un enlace muerto (spec §10.2). */}
          {project.kind === "professional" && !links.repo && (
            <Tag tone="muted">{t("proprietary")}</Tag>
          )}
          {hasLinks && (
            <>
              {links.demo && (
                <a href={links.demo} className={textLink}>
                  {t("demo")}
                </a>
              )}
              {links.repo && (
                <a href={links.repo} className={textLink}>
                  {t("code")}
                </a>
              )}
              {links.caseStudy && (
                <a href={`/${locale}${links.caseStudy}`} className={textLink}>
                  {t("caseStudy")} <span aria-hidden>→</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
