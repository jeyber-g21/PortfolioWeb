import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

// 404 para URLs que no coinciden con ninguna ruta. No hay locale en la URL,
// así que se muestra en los dos idiomas. Las llamadas a notFound() dentro de
// /[locale] siguen usando [locale]/not-found.tsx.
export const metadata: Metadata = {
  title: `404 — ${en.notFound.title}`,
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="mx-auto max-w-page px-6 py-section md:px-12">
            <p className="label text-muted">404</p>
            <h1 className="mt-4 text-h2">{en.notFound.title}</h1>
            <p lang="es" className="mt-2 text-lead text-muted">
              {es.notFound.title}
            </p>
            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="/en"
                  className="text-accent underline underline-offset-4 hover:text-accent-hover"
                >
                  {en.notFound.back}
                </Link>
              </li>
              <li lang="es">
                <Link
                  href="/es"
                  className="text-accent underline underline-offset-4 hover:text-accent-hover"
                >
                  {es.notFound.back}
                </Link>
              </li>
            </ul>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
