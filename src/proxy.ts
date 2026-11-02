import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Redirige "/" al locale según Accept-Language (spec §11).
export default createMiddleware(routing);

export const config = {
  // Todo excepto internos de Next/Vercel y archivos con extensión (PDF, imágenes…).
  matcher: "/((?!_next|_vercel|.*\\..*).*)",
};
