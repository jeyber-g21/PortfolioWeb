import { getTranslations } from "next-intl/server";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageTransition } from "@/components/ui/PageTransition";
import { initPage, pageMetadata } from "@/lib/utils";

export function generateMetadata({ params }: PageProps<"/[locale]/contact">) {
  return pageMetadata(params, "contact");
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  await initPage(params);
  const t = await getTranslations();

  return (
    <>
      <PageTransition>
        <PageHeader index="04" title={t("nav.contact")} />
      </PageTransition>
      <PageTransition delayed>
        <div className="mx-auto max-w-page px-6 pb-section md:px-12">
          <div className="border-t border-border pt-12 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9 lg:col-start-4">
              <ContactDetails />
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
