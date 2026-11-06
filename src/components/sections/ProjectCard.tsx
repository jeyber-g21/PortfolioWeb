import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ChatbotDiagram } from "@/components/sections/ChatbotDiagram";
import { textLink } from "@/components/ui/ButtonLink";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { Tag, TagList } from "@/components/ui/Tag";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/utils";

type Props = {
  project: Project;
  locale: Locale;
  /** h2 en /projects (bajo el h1 de la página), h3 en el inicio (bajo un h2). */
  headingLevel: 2 | 3;
  /** Versión resumida para el inicio: una sola captura, sin problema/resultado; solo demo y código. */
  compact?: boolean;
  /** Captura a la derecha en vez de a la izquierda: alterna en /projects (spec §10.2). */
  reverse?: boolean;
  /** Primera tarjeta de /projects: su captura es el LCP. */
  eager?: boolean;
};

export async function ProjectCard({
  project,
  locale,
  headingLevel,
  compact = false,
  reverse = false,
  eager = false,
}: Props) {
  const t = await getTranslations("projects");
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const { links, metrics } = project;
  const title = localize(project.title, locale);
  const shots = (project.images ?? []).map((img) => ({
    ...img,
    alt: localize(img.alt, locale),
  }));

  let media = null;
  if (project.diagram === "chatbot-architecture") {
    media = <ChatbotDiagram />;
  } else if (shots.length > 0 && (compact || shots.length === 1)) {
    media = (
      <ScreenshotFrame
        shot={shots[0]}
        eager={eager}
        sizes="(min-width: 768px) 420px, 100vw"
      />
    );
  } else if (shots.length > 1) {
    media = (
      <ProjectGallery
        shots={shots}
        eager={eager}
        sizes="(min-width: 1024px) 680px, 100vw"
        labels={{
          gallery: t("gallery.name", { title }),
          carousel: t("gallery.carousel"),
          slide: t("gallery.slide"),
          prev: t("gallery.prev"),
          next: t("gallery.next"),
          slides: shots.map((_, i) =>
            t("gallery.position", { n: i + 1, total: shots.length }),
          ),
          goTo: shots.map((_, i) => t("gallery.goTo", { n: i + 1 })),
        }}
      />
    );
  }

  const layout = compact
    ? { grid: "md:grid-cols-2 md:gap-10", media: "", text: "" }
    : {
        grid: "lg:grid-cols-12 lg:items-start lg:gap-12",
        media: `lg:col-span-7 ${reverse ? "lg:order-last" : ""}`,
        text: "lg:col-span-5",
      };

  return (
    <article
      className={`grid items-center gap-8 ${compact ? "py-10" : "py-14"} ${layout.grid}`}
    >
      {media && <div className={layout.media}>{media}</div>}

      <div className={media ? layout.text : "md:col-span-full lg:col-span-8"}>
        <p className="label text-muted">
          {project.year && <span>{project.year} · </span>}
          {t(`kind.${project.kind}`)}
          {project.client && <span> · {project.client}</span>}
        </p>

        <Heading className="mt-3 font-sans text-h3">{title}</Heading>
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

        {metrics && metrics.length > 0 && (
          <div className="mt-8">
            <p className="label text-muted">{t("metrics")}</p>
            <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-5">
              {(compact ? metrics.slice(0, 2) : metrics).map((m) => (
                // dt antes que dd en el DOM; la cifra se muestra arriba con flex-col-reverse.
                <div
                  key={m.label.en}
                  className="flex flex-col-reverse justify-end gap-1"
                >
                  <dt className="text-small text-muted">
                    {localize(m.label, locale)}
                  </dt>
                  <dd className="font-display text-h3 text-accent">
                    {localize(m.value, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <div className="mt-8">
          <TagList items={project.stack} />
        </div>

        {(!compact || links.demo || links.repo) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-small">
            {/* Trabajo propietario: etiqueta honesta en lugar de un enlace muerto (spec §10.2). */}
            {!compact && project.kind === "professional" && !links.repo && (
              <Tag tone="muted">{t("proprietary")}</Tag>
            )}
            {links.demo && (
              <a href={links.demo} className={textLink}>
                {t("liveDemo")}
                <ArrowUpRight size={14} aria-hidden className="ml-0.5 inline" />
              </a>
            )}
            {links.repo && (
              <a href={links.repo} className={textLink}>
                {t("code")}
                <ArrowUpRight size={14} aria-hidden className="ml-0.5 inline" />
              </a>
            )}
            {!compact && links.caseStudy && (
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
  reveal = false,
  closed = true,
  ...cardProps
}: Omit<Props, "project" | "reverse" | "eager"> & {
  projects: Project[];
  /** Animar cada proyecto al hacer scroll. No usar dentro de <Section>, que ya anima el bloque. */
  reveal?: boolean;
  /** Filete inferior; sin él cuando lo sigue una <Section>, que ya trae el suyo. */
  closed?: boolean;
}) {
  return (
    <ul
      className={`divide-y divide-border ${closed ? "border-b border-border" : ""}`}
    >
      {projects.map((project, i) => (
        <li
          key={project.slug}
          className={`first:*:pt-0 ${reveal && i > 0 ? "reveal" : ""}`}
        >
          <ProjectCard
            project={project}
            reverse={!cardProps.compact && i % 2 === 1}
            eager={!cardProps.compact && i === 0}
            {...cardProps}
          />
        </li>
      ))}
    </ul>
  );
}
