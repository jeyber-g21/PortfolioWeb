type Props = {
  index: string;
  title: string;
};

/** Cabecera de página interna: el único <h1> de cada página. */
export function PageHeader({ index, title }: Props) {
  return (
    <div className="mx-auto max-w-page px-6 pt-section md:px-12">
      <p className="label text-muted" aria-hidden>
        {index}
      </p>
      <h1 className="mt-4 text-display">{title}</h1>
    </div>
  );
}
