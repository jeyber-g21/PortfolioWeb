import type { Profile } from "./types";

export const profile: Profile = {
  name: "Jeyber Adrián Gómez García",
  displayName: "Jeyber Gómez",
  title: {
    es: "Desarrollador Full-Stack & Cloud",
    en: "Full-Stack & Cloud Developer",
  },
  headline: {
    es: "Construyo APIs, arquitecturas serverless y soluciones con IA para entornos empresariales.",
    en: "I build APIs, serverless architectures and AI-driven solutions for enterprise environments.",
  },
  summary: {
    es: "Desarrollador Full-Stack con más de 2 años de experiencia diseñando y construyendo aplicaciones web escalables utilizando Python, Node.js, Angular, React y AWS. Experiencia en desarrollo de APIs, arquitecturas serverless, automatización de despliegues mediante CI/CD y soluciones basadas en Inteligencia Artificial para entornos empresariales y financieros. He participado en la creación de plataformas RAG, agentes conversacionales con IA e integraciones de servicios cloud, enfocándome en la calidad del software, la eficiencia operativa y la generación de valor para el negocio.",
    en: "Full-Stack Developer with over 2 years of experience designing and building scalable web applications using Python, Node.js, Angular, React and AWS. Experienced in API development, serverless architectures, deployment automation through CI/CD, and AI-based solutions for enterprise and financial environments. I have built RAG platforms, conversational AI agents and cloud service integrations, focusing on software quality, operational efficiency and business value.",
  },
  // TODO: [PENDIENTE] 2–3 líneas personales para Sobre mí: por qué de mecatrónica a software,
  // qué problemas te interesan, cómo trabajas (spec §10.5).
  location: { es: "Cúcuta, Colombia", en: "Cúcuta, Colombia" },
  timezone: "UTC-5",
  email: "gomezjeyber@gmail.com",
  social: {
    github: "https://github.com/jeyber-g21",
    linkedin: "https://www.linkedin.com/in/jeyber-adrian-gomez-g",
  },
  cv: {
    es: "/cv/Jeyber-Gomez-CV-ES.pdf",
    en: "/cv/Jeyber-Gomez-CV-EN.pdf",
  },
  availability: {
    es: "Disponible para roles remotos",
    en: "Available for remote roles",
  },
  // TODO: [PENDIENTE] confirmar: propuesta del spec §10.6.
  contactNote: {
    es: "Abierto a roles remotos full-time. Respondo en menos de 24 horas.",
    en: "Open to full-time remote roles. I reply within 24 hours.",
  },
  languages: [
    {
      name: { es: "Español", en: "Spanish" },
      level: { es: "Nativo", en: "Native" },
    },
    { name: { es: "Inglés", en: "English" }, level: { es: "C1", en: "C1" } },
  ],
};
