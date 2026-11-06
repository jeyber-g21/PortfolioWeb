import { ArrowDown, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

// Arquitectura real del agente (fuente: _privado/metricas-proyectos/chatbot), en lugar de
// capturas. HTML en vez de imagen: se traduce, sigue el tema claro/oscuro y un lector de
// pantalla lo recorre como una lista.
// Container queries: en fila solo si su propio ancho lo permite (en el inicio va en columna).
export async function ChatbotDiagram() {
  const t = await getTranslations("projects.diagrams.chatbot");
  const flow = [
    { name: t("user"), note: t("userNote") },
    { name: t("gateway") },
    { name: t("lambda"), note: t("lambdaNote"), core: true },
    { name: t("model"), note: t("modelNote") },
  ];

  return (
    <figure
      aria-label={t("label")}
      className="@container rounded-photo border border-border bg-surface p-5 @xl:p-8"
    >
      <ol className="flex flex-col gap-2 @xl:flex-row @xl:items-center">
        {flow.map((node, i) => (
          <li
            key={node.name}
            className="flex flex-col items-center gap-2 @xl:flex-1 @xl:flex-row"
          >
            <div
              className={`w-full rounded-card border bg-bg px-3 py-3 text-center ${
                node.core ? "border-accent" : "border-border-strong"
              }`}
            >
              <p className="font-mono text-small text-ink">{node.name}</p>
              {node.note && (
                <p className="mt-1 text-micro text-muted">{node.note}</p>
              )}
            </div>
            {i < flow.length - 1 && (
              <>
                <ArrowDown
                  size={16}
                  aria-hidden
                  className="shrink-0 text-muted @xl:hidden"
                />
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="hidden shrink-0 text-muted @xl:block"
                />
              </>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-5 grid gap-3 @xl:grid-cols-2">
        <div className="rounded-card border border-dashed border-border-strong px-3 py-3">
          <p className="font-mono text-small text-ink">{t("state")}</p>
        </div>
        <div className="rounded-card border border-dashed border-border-strong px-3 py-3">
          <p className="font-mono text-small text-ink">{t("kb")}</p>
          <p className="mt-1 text-micro text-muted">{t("kbNote")}</p>
        </div>
      </div>

      <p className="mt-5 border-l-2 border-accent pl-3 text-small text-ink">
        {t("fallback")}
      </p>
      <p className="mt-5 border-t border-border pt-4 font-mono text-micro text-muted">
        {t("ops")}
      </p>
    </figure>
  );
}
