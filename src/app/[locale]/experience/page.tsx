import { getTranslations } from "next-intl/server";
import { EducationList } from "@/components/sections/EducationList";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { StackGrid } from "@/components/sections/StackGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageTransition } from "@/components/ui/PageTransition";
import { Section } from "@/components/ui/Section";
import { initPage, pageMetadata } from "@/lib/utils";

export function generateMetadata({
  params,
}: PageProps<"/[locale]/experience">) {
  return pageMetadata(params, "experience");
}

export default async function ExperiencePage({
  params,
}: PageProps<"/[locale]/experience">) {
  await initPage(params);
  const t = await getTranslations();

  return (
    <>
      <PageTransition>
        <PageHeader index="02" title={t("nav.experience")} />
      </PageTransition>
      <PageTransition delayed>
        <div className="pt-section">
          <Section id="career" index="01" title={t("experience.career")}>
            <ExperienceTimeline />
          </Section>
          <Section id="stack" index="02" title={t("experience.stack")}>
            <StackGrid />
          </Section>
          <Section id="education" index="03" title={t("experience.education")}>
            <EducationList />
          </Section>
        </div>
      </PageTransition>
    </>
  );
}
