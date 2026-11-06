"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { ScreenshotFrame, type Shot } from "./ScreenshotFrame";

type Labels = {
  gallery: string; // "Capturas de {proyecto}"
  carousel: string; // aria-roledescription
  slide: string;
  prev: string;
  next: string;
  slides: string[]; // "1 de 3", ya formateados en el servidor
  goTo: string[]; // "Ver captura 1"
};

type Props = {
  shots: Shot[];
  labels: Labels;
  sizes: string;
  eager?: boolean;
};

// Carrusel manual, sin autoplay (WCAG 2.2.2): botones, puntos, flechas del teclado sobre la
// pista y deslizamiento táctil por scroll-snap nativo. Cliente solo para saber qué captura
// está visible; el desplazamiento suave lo pone el CSS y se apaga con reduced-motion.
export function ProjectGallery({ shots, labels, sizes, eager = false }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const last = shots.length - 1;

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: Math.max(0, Math.min(i, last)) * el.clientWidth });
  };

  const onScroll = () => {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const control =
    "flex size-touch items-center justify-center text-muted transition-colors hover:text-accent disabled:pointer-events-none disabled:opacity-40";

  return (
    <div
      role="group"
      aria-roledescription={labels.carousel}
      aria-label={labels.gallery}
    >
      <ul
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label={labels.gallery}
        className="scrollbar-none flex snap-x snap-mandatory overflow-x-auto motion-safe:scroll-smooth"
      >
        {shots.map((shot, i) => (
          <li
            key={shot.src}
            aria-roledescription={labels.slide}
            aria-label={labels.slides[i]}
            className="w-full shrink-0 snap-center"
          >
            <ScreenshotFrame
              shot={shot}
              sizes={sizes}
              eager={eager && i === 0}
            />
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label={labels.prev}
          className={control}
        >
          <ChevronLeft size={20} aria-hidden />
        </button>

        <ol className="flex">
          {shots.map((shot, i) => (
            <li key={shot.src}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={labels.goTo[i]}
                aria-current={i === index ? "true" : undefined}
                className="group flex size-touch items-center justify-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-border-strong group-hover:bg-muted"
                  }`}
                />
              </button>
            </li>
          ))}
        </ol>

        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === last}
          aria-label={labels.next}
          className={control}
        >
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>

      <p aria-live="polite" className="sr-only">
        {labels.slides[index]}
      </p>
    </div>
  );
}
