import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "border-accent bg-accent text-bg hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-border-strong text-ink hover:border-accent hover:text-accent",
};

/** Clases de botón, para usarlas también con el <Link> de next-intl. */
export function buttonStyles(variant: Variant = "primary") {
  return `inline-flex min-h-touch items-center rounded-card border px-5 text-small font-medium transition-colors ${variants[variant]}`;
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };

/** Botón para enlaces externos o archivos (PDF, mailto). */
export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return <a {...props} className={`${buttonStyles(variant)} ${className}`} />;
}

/** Enlace de texto del cuerpo: siempre subrayado, el color solo no basta (spec §9.7). */
export const textLink =
  "underline decoration-1 underline-offset-4 transition-colors hover:text-accent";
