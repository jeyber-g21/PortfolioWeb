import { getTranslations } from "next-intl/server";
import { CourseworkList } from "@/components/sections/CourseworkList";
import { ProjectList } from "@/components/sections/ProjectCard";
import { textLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageTransition } from "@/components/ui/PageTransition";
import { Section } from "@/components/ui/Section";
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
  // Formación aparte y más breve, para no mezclarla con el trabajo profesional (spec §10.2).
  const visible = projects.filter((p) => p.kind !== "coursework");
  const coursework = projects.filter((p) => p.kind === "coursework");

  return (
    <>
      <PageTransition>
        <PageHeader
          index="01"
          title={t("nav.projects")}
          intro={t("intro.projects")}
        />
      </PageTransition>
      <PageTransition delayed>
        <div className="mx-auto max-w-page px-6 md:px-12">
          <div className="border-t border-border pt-10">
            <ProjectList
              projects={visible}
              locale={locale}
              headingLevel={2}
              reveal
              closed={false}
            />
          </div>
        </div>
        <Section
          id="coursework"
          index="02"
          title={t("projects.courseworkTitle")}
        >
          <p className="max-w-prose text-muted">
            {t("projects.courseworkIntro")}
          </p>
          <div className="mt-10">
            <CourseworkList
              projects={coursework}
              locale={locale}
              headingLevel={3}
            />
          </div>
          <p className="mt-12 text-small text-muted">
            <a href={courseworkUrl} className={textLink}>
              {t("projects.allRepos")} <span aria-hidden>→</span>
            </a>
          </p>
        </Section>
      </PageTransition>
    </>
  );
}
