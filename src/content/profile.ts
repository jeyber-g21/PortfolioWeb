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
  story: {
    es: "Mi interés por el software empezó en la universidad: mientras estudiaba Ingeniería Mecatrónica descubrí la programación y las bases de datos, y desde entonces no he dejado de construir. De la ingeniería conservo la costumbre de pensar en sistemas completos, no en piezas sueltas. Hoy la aplico como único desarrollador en Lintryxs, donde me encargo de cada producto de punta a punta.",
    en: "My interest in software started at university: while studying Mechatronics Engineering I discovered programming and databases, and I haven't stopped building since. Engineering taught me to think in whole systems rather than isolated parts. Today I put that to work as the sole developer at Lintryxs, owning each product end to end.",
  },
  location: { es: "Cúcuta, Colombia", en: "Cúcuta, Colombia" },
  timezone: "UTC-5",
  email: "gomezjeyber@gmail.com",
  social: {
    github: "https://github.com/jeyber-g21",
    linkedin: "https://www.linkedin.com/in/jeyber-adrian-gomez-g",
  },
  photo: {
    src: "/images/jeyber-gomez.webp",
    width: 927,
    height: 1152,
    alt: {
      es: "Retrato de Jeyber Gómez, sentado, con camisa azul claro",
      en: "Portrait of Jeyber Gómez, seated, wearing a light blue shirt",
    },
  },
  aboutPhoto: {
    src: "/images/jeyber-gomez-about.webp",
    width: 973,
    height: 1000,
    alt: {
      es: "Retrato en primer plano de Jeyber Gómez, con camisa oscura, sobre fondo claro",
      en: "Close-up portrait of Jeyber Gómez in a dark shirt against a light background",
    },
  },
  cv: {
    es: "/cv/Jeyber-Gomez-CV-ES.pdf",
    en: "/cv/Jeyber-Gomez-CV-EN.pdf",
  },
  availability: {
    es: "Disponible para roles remotos",
    en: "Available for remote roles",
  },
  contactNote: {
    es: "Abierto a roles remotos full-time. Respondo en menos de 24 horas.",
    en: "Open to full-time remote roles. I reply within 24 hours.",
  },
  languages: [
    {
      name: { es: "Español", en: "Spanish" },
      level: { es: "Nativo", en: "Native" },
    },
    { name: { es: "Inglés", en: "English" }, level: { es: "B2", en: "B2" } },
  ],
};
