import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  // Solo opsz: SOFT y WONK no se usan (quedan en su valor por defecto) y casi duplicaban
  // el peso del archivo, que compite con la foto del hero (LCP).
  axes: ["opsz"],
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  // Solo etiquetas pequeñas: no merece adelantarse a la foto del hero.
  preload: false,
});

/** Clases para <html> que declaran las variables usadas por los tokens de globals.css. */
export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
