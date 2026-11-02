"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { Pathname } from "@/i18n/routing";

type Props = {
  items: { href: Pathname; label: string }[];
};

// Cliente solo para conocer la ruta activa (aria-current + subrayado); el HTML
// se renderiza en el servidor y los enlaces funcionan sin JS.
export function NavLinks({ items }: Props) {
  const pathname = usePathname();

  return (
    <ul className="-mx-1.5 flex overflow-x-auto md:mx-0 md:gap-2">
      {items.map(({ href, label }) => {
        const active = pathname === href;
        return (
          // En móvil el nombre del header ya lleva al inicio: se oculta "Inicio" para que quepan los demás.
          <li
            key={href}
            className={href === "/" ? "hidden shrink-0 md:block" : "shrink-0"}
          >
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-touch items-center px-1.5 text-small underline-offset-8 transition-colors hover:text-ink md:px-2 ${
                active ? "text-ink underline decoration-1" : "text-muted"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
