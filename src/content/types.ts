import type { SkillName } from "./stack";

/** Texto que existe en los dos idiomas. */
export type Localized = { es: string; en: string };

export type SkillLevel = "daily" | "working";
//  daily   → lo uso a diario, lo defiendo en una entrevista técnica
//  working → he construido cosas con esto, necesito repasar antes de un examen

export type SkillCategory =
  "languages" | "frontend" | "backend" | "databases" | "cloud" | "ai" | "tools";

export interface Skill {
  name: string; // No se traduce: "Python" es "Python"
  category: SkillCategory;
  level: SkillLevel;
}

export type ProjectKind = "personal" | "professional" | "coursework";
//  professional → caso de estudio sin repo (trabajo propietario)
//  coursework   → formación; no se muestra en destacados

export interface Project {
  slug: string;
  kind: ProjectKind;
  featured: boolean; // Máximo 4 en true
  title: Localized; // Localized: los proyectos profesionales tienen título descriptivo, no nombre propio
  client?: string; // Para trabajo profesional: "Lintryxs"
  tagline: Localized; // Una frase. Máx. 90 caracteres
  problem?: Localized; // Qué problema resolvía. 1–2 frases
  outcome?: Localized; // Resultado, con número si existe
  stack: SkillName[]; // Un nombre que no exista en stack.ts rompe el typecheck
  links: {
    repo?: string;
    demo?: string;
    caseStudy?: string; // Ruta interna: /proyectos/{slug}
  };
  image?: { src: string; alt: Localized };
  year?: number;
}

export interface ExperienceItem {
  role: Localized;
  company: string;
  companyUrl?: string;
  via?: string; // Intermediario de contratación: "Oberstaff"
  start: string; // "2025"
  end: string | "present";
  location: Localized; // "Remoto" / "Remote"
  highlights: Localized[]; // 3–4 viñetas, cada una ≤ 2 líneas
  stack: SkillName[];
}

export interface EducationItem {
  degree: Localized;
  institution: string;
  date: Localized;
  note?: Localized; // Para el ángulo de Mecatrónica
}

export interface Profile {
  name: string;
  displayName: string;
  title: Localized; // "Desarrollador Full-Stack & Cloud"
  headline: Localized; // 10–15 palabras. Va en el hero
  summary: Localized; // Párrafo completo. Va en Sobre mí
  story: Localized; // 2–3 líneas personales: lo único del sitio que suena a persona (spec §10.5)
  location: Localized;
  timezone: string;
  email: string;
  // Sin teléfono: solo va en los PDF del CV (CLAUDE.md, regla 9).
  social: { github: string; linkedin: string };
  cv: Localized; // Rutas a los PDF
  availability: Localized; // "Disponible para roles remotos"
  contactNote: Localized; // Línea de disponibilidad de la sección Contacto
  languages: { name: Localized; level: Localized }[];
}
