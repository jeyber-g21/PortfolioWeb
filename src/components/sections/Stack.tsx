import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { skillCategories, skills } from "@/content/stack";

// Sin porcentajes, barras ni logos: dos niveles, uso diario primero (spec §10.3).
export async function Stack() {
  const t = await getTranslations();

  return (
    <Section id="stack" index="02" title={t("nav.stack")}>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {skillCategories.map((category) => {
          const group = skills
            .filter((s) => s.category === category)
            .toSorted(
              (a, b) =>
                Number(b.level === "daily") - Number(a.level === "daily"),
            );
          if (group.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="label text-muted">
                {t(`stack.categories.${category}`)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.map((skill) => (
                  <li key={skill.name}>
                    <Tag tone={skill.level === "daily" ? "strong" : "muted"}>
                      {skill.name}
                    </Tag>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-12 text-small text-muted">{t("stack.legend")}</p>
    </Section>
  );
}
