"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = {
  target: Locale;
  label: string;
  short: string;
};

// Misma página, otro idioma: next-intl traduce la URL (/es/proyectos ↔ /en/projects).
export function LocaleSwitch({ target, label, short }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      locale={target}
      hrefLang={target}
      aria-label={label}
      className="inline-flex size-touch items-center justify-center label text-muted transition-colors hover:text-ink"
    >
      {short}
    </Link>
  );
}
