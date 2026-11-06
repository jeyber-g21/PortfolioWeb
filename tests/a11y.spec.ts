import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// Criterio de aceptación (spec §12): cero violaciones críticas o serias de WCAG 2.2 AA,
// en ambos idiomas y ambos temas. Con reduced motion para que las entradas por scroll
// no dejen contenido a media opacidad durante el análisis.
const pages = [
  "/en",
  "/en/projects",
  "/en/experience",
  "/en/about",
  "/en/contact",
  "/es",
  "/es/proyectos",
  "/es/experiencia",
  "/es/sobre-mi",
  "/es/contacto",
];

for (const theme of ["light", "dark"] as const) {
  for (const path of pages) {
    test(`axe ${path} (${theme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
      await page.goto(path);
      await expect(page.locator("html")).toHaveClass(
        theme === "dark" ? /\bdark\b/ : /^(?!.*\bdark\b)/,
      );

      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const blocking = violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious",
      );

      expect(
        blocking.map(
          (v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`,
        ),
      ).toEqual([]);
    });
  }
}

test("el primer Tab lleva al enlace «Saltar al contenido»", async ({
  page,
}) => {
  await page.goto("/en");
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toHaveAttribute("href", "#main");
});
