type Props = {
  index: string;
  title: string;
  /** Frase de entrada junto al título: evita una primera pantalla con solo el h1. */
  intro?: string;
};

/** Cabecera de página interna: el único <h1> de cada página. */
export function PageHeader({ index, title, intro }: Props) {
  return (
    <div className="mx-auto max-w-page px-6 pt-16 pb-12 md:px-12 md:pt-24 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
      <div className="lg:col-span-7">
        <p className="label text-muted" aria-hidden>
          {index}
        </p>
        <h1 className="mt-4 text-display">{title}</h1>
      </div>
      {intro && (
        <p className="mt-6 max-w-prose text-lead text-muted lg:col-span-5 lg:mt-0 lg:pb-3">
          {intro}
        </p>
      )}
    </div>
  );
}
