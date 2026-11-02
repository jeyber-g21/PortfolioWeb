import type { EducationItem, ExperienceItem } from "./types";

// Orden cronológico inverso: lo más reciente primero.
// TODO: [PENDIENTE] métricas por viñeta (ver _privado/metricas.md).
export const experience: ExperienceItem[] = [
  {
    role: { es: "Full-Stack Developer", en: "Full-Stack Developer" },
    company: "Lintryxs",
    companyUrl: "https://lintryxs.com/",
    via: "Oberstaff",
    start: "2025",
    end: "present",
    location: { es: "Remoto", en: "Remote" },
    highlights: [
      {
        es: "Único desarrollador de una plataforma web con IA para cooperativas financieras y empresas: diseño, APIs, frontend, despliegue, mantenimiento y observabilidad.",
        en: "Sole developer of an AI-powered web platform for financial cooperatives and businesses, owning design, APIs, frontend, deployment, maintenance and observability.",
      },
      {
        es: "Desarrollé una plataforma RAG para consultas inteligentes sobre bases de conocimiento corporativas mediante modelos de IA generativa.",
        en: "Developed a RAG platform enabling intelligent queries over corporate knowledge bases using generative AI models.",
      },
      {
        es: "Transformé un chatbot de menús estáticos en un agente conversacional con IA que entiende lenguaje natural y deriva las consultas complejas a asesores humanos.",
        en: "Turned a static menu-based chatbot into an AI conversational agent that understands natural language and escalates complex queries to human advisors.",
      },
      {
        es: "Despliego y opero las plataformas en AWS (ECS, Lambda, API Gateway, CloudWatch…) mediante pipelines de CI/CD con GitHub Actions.",
        en: "Deploy and operate the platforms on AWS (ECS, Lambda, API Gateway, CloudWatch…) through CI/CD pipelines with GitHub Actions.",
      },
    ],
    // TODO: [PENDIENTE] confirmar qué tecnologías usa exactamente este puesto.
    stack: [
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "Angular",
      "React",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "AWS",
      "Bedrock",
      "Docker",
      "GitHub Actions",
      "RAG",
    ],
  },
  {
    role: {
      es: "Full-Stack Developer (Freelance)",
      en: "Full-Stack Developer (Freelance)",
    },
    company: "Freelance",
    start: "2024",
    end: "2025",
    location: { es: "Remoto", en: "Remote" },
    highlights: [
      {
        es: "Creé e implementé aplicaciones web full-stack con Python, React, Angular, Express y MongoDB.",
        en: "Built and shipped full-stack web applications with Python, React, Angular, Express and MongoDB.",
      },
      {
        es: "Integré APIs de terceros (Google Maps, pasarelas de pago) para una comunicación fluida entre sistemas.",
        en: "Integrated third-party APIs (Google Maps, payment gateways) for seamless communication between systems.",
      },
      {
        es: "Utilicé Docker para despliegues en contenedores e implementé CI/CD con GitHub Actions.",
        en: "Used Docker for containerized deployments and set up CI/CD pipelines with GitHub Actions.",
      },
      {
        es: "Prioricé la reutilización de código, la arquitectura limpia y la colaboración ágil con los clientes.",
        en: "Prioritized code reuse, clean architecture and agile collaboration with clients.",
      },
    ],
    stack: [
      "Python",
      "React",
      "Angular",
      "Express",
      "MongoDB",
      "Docker",
      "GitHub Actions",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: {
      es: "Ingeniero en Mecatrónica",
      en: "B.Eng. in Mechatronics Engineering",
    },
    institution: "Universidad de Pamplona",
    date: { es: "Octubre 2021", en: "October 2021" },
    // TODO: [PENDIENTE] confirmar redacción (ángulo de spec §4.4).
    note: {
      es: "La base de ingeniería: pensamiento de sistemas, control y hardware, aplicados hoy al software.",
      en: "The engineering foundation: systems thinking, control and hardware, now applied to software.",
    },
  },
  {
    degree: {
      es: "CS50's Web Programming with Python and JavaScript",
      en: "CS50's Web Programming with Python and JavaScript",
    },
    institution: "HarvardX",
    date: { es: "Diciembre 2024", en: "December 2024" },
  },
  {
    degree: {
      es: "General English & Cambridge C1 Advanced Preparation",
      en: "General English & Cambridge C1 Advanced Preparation",
    },
    institution: "Universal English College",
    date: { es: "Marzo 2024", en: "March 2024" },
  },
];
