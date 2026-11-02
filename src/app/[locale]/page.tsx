import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  // El layout ya validó el locale con hasLocale().
  setRequestLocale(locale as Locale);

  return (
    <>
      <Hero />
      <Projects />
      <Stack />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
