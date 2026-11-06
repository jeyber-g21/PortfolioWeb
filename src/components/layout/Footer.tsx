import { getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";
import { repoUrl } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-x-6 gap-y-2 px-6 pt-8 pb-24 text-small text-muted md:px-12 xl:pb-8">
        <p>
          © {new Date().getFullYear()} {profile.displayName}
        </p>
        <p>
          {t("builtWith")}{" "}
          <a
            href={repoUrl}
            className="underline underline-offset-4 transition-colors hover:text-accent"
          >
            {t("sourceCode")} <span aria-hidden>→</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
