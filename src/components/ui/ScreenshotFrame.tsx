import Image from "next/image";

export type Shot = { src: string; width: number; height: number; alt: string };

type Props = {
  shot: Shot;
  sizes: string;
  /** Solo la primera captura visible de la página, que es el LCP. */
  eager?: boolean;
};

/** Captura dentro de una ventana de navegador esquemática. Todas comparten proporción
 *  (aspect-shot) para que el carrusel no salte de altura entre imágenes. */
export function ScreenshotFrame({ shot, sizes, eager = false }: Props) {
  return (
    <figure className="overflow-hidden rounded-photo border border-border bg-surface">
      <div
        aria-hidden
        className="flex gap-1.5 border-b border-border px-4 py-3"
      >
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
      </div>
      <div className="relative aspect-shot">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="object-contain p-3"
        />
      </div>
    </figure>
  );
}
