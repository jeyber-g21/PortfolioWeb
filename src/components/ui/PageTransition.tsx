import { type ReactNode, ViewTransition } from "react";

type Props = {
  children: ReactNode;
  /** Entra 80 ms después: cascada título → contenido al cambiar de página. */
  delayed?: boolean;
};

// Va en cada page.tsx, no en el layout: el layout persiste entre navegaciones
// y ahí enter/exit nunca se disparan. Solo anima en navegación, no en la carga
// inicial, así que no afecta al LCP. Las clases están en globals.css.
export function PageTransition({ children, delayed = false }: Props) {
  return (
    <ViewTransition
      enter={delayed ? "page-enter-delayed" : "page-enter"}
      exit="page-exit"
      default="none"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}
