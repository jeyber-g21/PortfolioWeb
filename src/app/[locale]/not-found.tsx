import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="mx-auto max-w-page px-6 py-section md:px-12">
      <p className="label text-muted">404</p>
      <h1 className="mt-4 text-h2">{t("title")}</h1>
      <Link
        href="/"
        className="mt-8 inline-block text-accent underline underline-offset-4 hover:text-accent-hover"
      >
        {t("back")}
      </Link>
    </div>
  );
}
