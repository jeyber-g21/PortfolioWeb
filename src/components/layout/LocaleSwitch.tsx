"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = {
  target: Locale;
  label: string;
  short: string;
};

export function LocaleSwitch({ target, label, short }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      href={pathname}
      locale={target}
      hrefLang={target}
      aria-label={label}
      // Con JS, conserva la sección actual (#hash). Sin JS, el enlace funciona igual.
      onClick={(event) => {
        event.preventDefault();
        router.replace(`${pathname}${window.location.hash}`, {
          locale: target,
          scroll: false,
        });
      }}
      className="inline-flex size-touch items-center justify-center label text-muted transition-colors hover:text-ink"
    >
      {short}
    </Link>
  );
}
