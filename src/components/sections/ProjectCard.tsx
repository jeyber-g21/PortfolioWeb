import { getTranslations } from "next-intl/server";
import { textLink } from "@/components/ui/ButtonLink";
import { Tag, TagList } from "@/components/ui/Tag";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/utils";

type Props = {
  project: Project;
  locale: Locale;
  /** h2 en /projects (bajo el h1 de la página), h3 en el inicio (bajo un h2). */
  headingLevel: 2 | 3;
  /** Versión resumida para el inicio: sin problema/resultado ni enlaces. */
  compact?: boolean;
};

export async function ProjectCard({
  project,
  locale,
  headingLevel,
  compact = false,
}: Props) {
  const t = await getTranslations("projects");
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const { links } = project;

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
        <Heading className="font-sans text-h3">
          {localize(project.title, locale)}
        </Heading>
        <p className="mt-3 max-w-prose text-lead text-muted">
          {localize(project.tagline, locale)}
        </p>

        {!compact && (project.problem || project.outcome) && (
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

        {!compact && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-small">
            {/* Trabajo propietario: etiqueta honesta en lugar de un enlace muerto (spec §10.2). */}
            {project.kind === "professional" && !links.repo && (
              <Tag tone="muted">{t("proprietary")}</Tag>
            )}
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
          </div>
        )}
      </div>
    </article>
  );
}

/** Lista con filetes entre proyectos; el primero arranca pegado al filete superior. */
export function ProjectList({
  projects,
  ...cardProps
}: Omit<Props, "project"> & { projects: Project[] }) {
  return (
    <ul className="divide-y divide-border border-b border-border">
      {projects.map((project) => (
        <li key={project.slug} className="first:*:pt-0">
          <ProjectCard project={project} {...cardProps} />
        </li>
      ))}
    </ul>
  );
}
