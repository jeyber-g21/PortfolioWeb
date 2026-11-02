import { getTranslations } from "next-intl/server";
import { ProjectList } from "@/components/sections/ProjectCard";
import { textLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageTransition } from "@/components/ui/PageTransition";
import { courseworkUrl, projects } from "@/content/projects";
import { initPage, pageMetadata } from "@/lib/utils";

export function generateMetadata({ params }: PageProps<"/[locale]/projects">) {
  return pageMetadata(params, "projects");
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  const locale = await initPage(params);
  const t = await getTranslations();
  // Los proyectos de formación no se listan: solo el enlace discreto al final (spec §10.2).
  const visible = projects.filter((p) => p.kind !== "coursework");

  return (
    <>
      <PageTransition>
        <PageHeader index="01" title={t("nav.projects")} />
      </PageTransition>
      <PageTransition delayed>
        <div className="mx-auto max-w-page px-6 py-section md:px-12">
          <div className="border-t border-border pt-10">
            <ProjectList
              projects={visible}
              locale={locale}
              headingLevel={2}
              reveal
            />
          </div>
          <p className="mt-10 text-small text-muted">
            <a href={courseworkUrl} className={textLink}>
              {t("projects.coursework")} <span aria-hidden>→</span>
            </a>
          </p>
        </div>
      </PageTransition>
    </>
  );
}
