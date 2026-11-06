import { FileDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/content/profile";
import { currentLocale } from "@/lib/utils";

// GitHub, LinkedIn y CV siempre a mano en todas las páginas.
// Desde xl: riel vertical abajo a la izquierda, en el margen libre junto al contenido.
// Por debajo no hay margen: píldora horizontal flotante abajo a la derecha (el Footer
// deja espacio para que no tape su texto al final de la página).
export async function SocialRail() {
  const locale = await currentLocale();
  const t = await getTranslations();

  const links = [
    {
      href: profile.social.github,
      label: t("social.github"),
      Icon: GithubIcon,
    },
    {
      href: profile.social.linkedin,
      label: t("social.linkedin"),
      Icon: LinkedinIcon,
    },
    {
      href: profile.cv[locale],
      label: t("nav.downloadCv"),
      Icon: FileDown,
      download: true,
    },
  ];

  return (
    <nav
      aria-label={t("a11y.profileLinks")}
      className="fixed right-4 bottom-4 z-10 flex items-center rounded-full border border-border bg-bg/90 px-1 backdrop-blur-sm xl:right-auto xl:bottom-0 xl:left-4 xl:flex-col xl:rounded-none xl:border-0 xl:bg-transparent xl:px-0 xl:backdrop-blur-none"
    >
      <ul className="flex items-center xl:flex-col xl:gap-1">
        {links.map(({ href, label, Icon, download }) => (
          <li key={href}>
            <a
              href={href}
              download={download}
              aria-label={label}
              title={label}
              className="flex size-touch items-center justify-center text-muted transition-[color,translate] hover:-translate-y-0.5 hover:text-accent motion-reduce:hover:translate-y-0"
            >
              <Icon size={20} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
      <span aria-hidden className="mt-4 hidden h-24 w-px bg-border xl:block" />
    </nav>
  );
}
