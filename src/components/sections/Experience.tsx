import { getTranslations } from "next-intl/server";
import { textLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { education, experience } from "@/content/experience";
import { currentLocale, localize } from "@/lib/utils";

export async function Experience() {
  const locale = await currentLocale();
  const t = await getTranslations();

  return (
    <Section id="experience" index="03" title={t("nav.experience")}>
      <ol className="space-y-12 border-l border-border">
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="pl-6 md:pl-8">
            <h3 className="text-h3">{localize(job.role, locale)}</h3>
            <p className="mt-1">
              {job.companyUrl ? (
                <a href={job.companyUrl} className={textLink}>
                  {job.company}
                </a>
              ) : (
                job.company
              )}
              {job.via && (
                <span className="text-muted">
                  {" "}
                  ({t("experience.via")} {job.via})
                </span>
              )}
            </p>
            <p className="mt-1 font-mono text-small text-muted">
              {job.start} –{" "}
              {job.end === "present" ? t("experience.present") : job.end} ·{" "}
              {localize(job.location, locale)}
            </p>

            <ul className="mt-5 max-w-prose list-disc space-y-2 pl-5 marker:text-border-strong">
              {job.highlights.map((item) => (
                <li key={item.en}>{localize(item, locale)}</li>
              ))}
            </ul>

            <div className="mt-5">
              <TagList items={job.stack} />
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-section label text-muted">
        {t("experience.education")}
      </h3>
      <ul className="mt-6 grid gap-6">
        {education.map((item) => (
          <li key={item.institution}>
            <p className="font-medium">{localize(item.degree, locale)}</p>
            <p className="text-small text-muted">
              {item.institution} · {localize(item.date, locale)}
            </p>
            {item.note && (
              <p className="mt-2 max-w-prose text-small">
                {localize(item.note, locale)}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
