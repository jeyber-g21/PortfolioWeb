import { education } from "@/content/experience";
import { currentLocale, localize } from "@/lib/utils";

export async function EducationList() {
  const locale = await currentLocale();

  return (
    <ul className="grid gap-8">
      {education.map((item) => (
        <li key={item.institution}>
          <h3 className="font-medium">{localize(item.degree, locale)}</h3>
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
  );
}
