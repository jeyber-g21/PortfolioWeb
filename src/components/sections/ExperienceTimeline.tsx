import { getTranslations } from "next-intl/server";
import { textLink } from "@/components/ui/ButtonLink";
import { TagList } from "@/components/ui/Tag";
import { experience } from "@/content/experience";
import type { ExperienceItem } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { currentLocale, localize } from "@/lib/utils";

/** Empresa (enlazada si tiene web), intermediario y periodo. Compartido con el resumen del inicio. */
export async function JobMeta({
  job,
  locale,
}: {
  job: ExperienceItem;
  locale: Locale;
}) {
  const t = await getTranslations("experience");

  return (
    <>
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
            ({t("via")} {job.via})
          </span>
        )}
      </p>
      <p className="mt-1 font-mono text-small text-muted">
        {job.start} – {job.end === "present" ? t("present") : job.end} ·{" "}
        {localize(job.location, locale)}
      </p>
    </>
  );
}

export async function ExperienceTimeline() {
  const locale = await currentLocale();

  return (
    <ol className="space-y-12 border-l border-border">
      {experience.map((job) => (
        <li key={`${job.company}-${job.start}`} className="pl-6 md:pl-8">
          <h3 className="text-h3">{localize(job.role, locale)}</h3>
          <JobMeta job={job} locale={locale} />

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
  );
}
