import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

/** Sección con retícula editorial: título en columnas 1–3, contenido en 4–12 (spec §9.5). */
export function Section({ id, index, title, children }: Props) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto max-w-page scroll-mt-16 px-6 md:px-12"
    >
      <div className="grid gap-10 border-t border-border py-section lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p className="label text-muted" aria-hidden>
            {index}
          </p>
          <h2 id={headingId} className="mt-3 text-h2">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
