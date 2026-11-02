import { getTranslations } from "next-intl/server";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { JobMeta } from "@/components/sections/ExperienceTimeline";
import { Hero } from "@/components/sections/Hero";
import { ProjectList } from "@/components/sections/ProjectCard";
import { textLink } from "@/components/ui/ButtonLink";
import { PageTransition } from "@/components/ui/PageTransition";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { coreStack } from "@/content/stack";
import { Link } from "@/i18n/navigation";
import { initPage, localize } from "@/lib/utils";

// Inicio = resumen completo: quien no hace clic ya ve proyectos, experiencia, stack y contacto.
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = await initPage(params);
  const t = await getTranslations("home");
  const featured = projects
    .filter((p) => p.featured && p.kind !== "coursework")
    .slice(0, 4);

  return (
    <>
      <PageTransition>
        <Hero />
      </PageTransition>
      <PageTransition delayed>
        <Section id="featured" index="01" title={t("featured")}>
          <ProjectList
            projects={featured}
            locale={locale}
            headingLevel={3}
            compact
          />
          <p className="mt-10 text-small">
            <Link href="/projects" className={textLink}>
              {t("allProjects")} <span aria-hidden>→</span>
            </Link>
          </p>
        </Section>

        <Section id="experience-summary" index="02" title={t("experience")}>
          <ul className="space-y-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.start}`}>
                <h3 className="text-h3">{localize(job.role, locale)}</h3>
                <JobMeta job={job} locale={locale} />
              </li>
            ))}
          </ul>

          <h3 className="mt-12 label text-muted">{t("coreStack")}</h3>
          <div className="mt-4">
            <TagList items={coreStack} />
          </div>

          <p className="mt-10 text-small">
            <Link href="/experience" className={textLink}>
              {t("fullExperience")} <span aria-hidden>→</span>
            </Link>
          </p>
        </Section>

        <Section id="contact-summary" index="03" title={t("contact")}>
          <ContactDetails />
        </Section>
      </PageTransition>
    </>
  );
}
