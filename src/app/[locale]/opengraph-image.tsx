import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { coreStack } from "@/content/stack";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import type { Locale } from "@/i18n/routing";

// Imagen al compartir el enlace (LinkedIn, WhatsApp, X…), generada en el build con la
// tipografía y la paleta del sitio, no una captura (spec §13). Las fuentes son TTF
// estáticos sacados de las mismas familias (src/assets/fonts, licencia OFL).
// Satori no lee variables CSS: los colores repiten los valores del tema claro (globals.css).
const color = {
  bg: "#faf8f3",
  ink: "#1a1714",
  muted: "#5e574c",
  accent: "#a8431f",
  border: "#d3c9b4",
};

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// En Next 16, generateImageMetadata recibe params síncronos (la imagen, en cambio, una promesa).
// Mensajes leídos directamente: aquí no hay petición y next-intl no puede resolver el locale.
export function generateImageMetadata({
  params,
}: {
  params: { locale?: string };
}) {
  const messages = params.locale === "es" ? es : en;
  return [{ id: "default", size, contentType, alt: messages.metadata.ogAlt }];
}

const font = (file: string) =>
  readFile(join(process.cwd(), "src/assets/fonts", file));

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const [display, sans, mono] = await Promise.all([
    font("Fraunces-Display.ttf"),
    font("Inter-Regular.ttf"),
    font("JetBrainsMono-Regular.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: color.bg,
        color: color.ink,
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: color.accent,
          }}
        >
          {profile.title[locale]}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: color.accent,
            color: color.bg,
            fontFamily: "Fraunces",
            fontSize: 38,
          }}
        >
          JG
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "Fraunces", fontSize: 128, lineHeight: 1 }}>
          {profile.displayName}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.35,
            maxWidth: 940,
            color: color.muted,
          }}
        >
          {profile.headline[locale]}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 28,
          borderTop: `2px solid ${color.border}`,
          fontFamily: "JetBrains Mono",
          fontSize: 22,
          color: color.muted,
        }}
      >
        <div>{coreStack.slice(0, 6).join(" · ")}</div>
        <div>{profile.location[locale]}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: display, weight: 400, style: "normal" },
        { name: "Inter", data: sans, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
