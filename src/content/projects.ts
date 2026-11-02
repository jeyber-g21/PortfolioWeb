import type { Project } from "./types";

// TODO: [PENDIENTE] detalles de cada proyecto (problema, resultado, stack exacto, año)
// y el proyecto propio Taskflow. Lo publicado aquí sale del CV, sin añadir nada.
export const projects: Project[] = [
  {
    slug: "plataforma-rag",
    kind: "professional",
    featured: true,
    title: { es: "Plataforma RAG empresarial", en: "Enterprise RAG platform" },
    client: "Lintryxs",
    tagline: {
      es: "Consultas inteligentes sobre bases de conocimiento corporativas con IA generativa.",
      en: "Intelligent queries over corporate knowledge bases with generative AI.",
    },
    stack: ["RAG", "LLM APIs"],
    links: {},
  },
  {
    slug: "agente-conversacional",
    kind: "professional",
    featured: true,
    title: {
      es: "Agente conversacional con IA",
      en: "AI conversational agent",
    },
    client: "Lintryxs",
    tagline: {
      es: "De un chatbot de menús estáticos a un agente que entiende lenguaje natural.",
      en: "From a static menu-based chatbot to an agent that understands natural language.",
    },
    outcome: {
      es: "Resuelve consultas en lenguaje natural y deriva las complejas a asesores humanos.",
      en: "Handles natural-language queries and escalates complex ones to human advisors.",
    },
    stack: ["AI agents", "LLM APIs"],
    links: {},
  },
];

/** Repos de formación (CS50W): no van en destacados, solo un enlace discreto (spec §10.2). */
export const courseworkUrl = "https://github.com/jeyber-g21?tab=repositories";
