"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// El script anti-destello de next-themes solo sirve en el HTML del servidor. Cuando React
// monta el layout en el cliente (p. ej. al cambiar de idioma) lo marcamos como bloque de
// datos para que React 19 no avise de un <script> que de todos modos no se ejecutaría.
const scriptProps =
  typeof window === "undefined" ? undefined : { type: "application/json" };

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      scriptProps={scriptProps}
    >
      {children}
    </NextThemesProvider>
  );
}
