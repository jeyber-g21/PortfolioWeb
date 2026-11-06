import type { Project } from "./types";

// Cifras y textos sacados de _privado/metricas-proyectos/, respetando sus advertencias:
// sin nombres de clientes finales, sin volumen de usuarios y sin la comparación "3.7x".
// TaskFlow y formación: textos sacados de las publicaciones de LinkedIn del usuario.
// TODO: [PENDIENTE] casos de estudio.
export const projects: Project[] = [
  {
    slug: "plataforma-rag",
    kind: "professional",
    featured: true,
    year: 2026,
    title: {
      es: "Plataforma RAG multiempresa",
      en: "Multi-tenant RAG platform",
    },
    client: "Lintryxs",
    tagline: {
      es: "Preguntas y respuestas sobre documentos financieros, con citas por página.",
      en: "Question answering over financial documents, with per-page citations.",
    },
    problem: {
      es: "La búsqueda semántica sola fallaba con cifras concretas, como los umbrales de montos de un reglamento.",
      en: "Semantic search alone missed specific figures, such as the amount thresholds in a policy.",
    },
    outcome: {
      es: "Recuperación híbrida en cuatro etapas (semántica, léxica, fusión RRF y rerank) sobre ~100K fragmentos, con respuestas en streaming.",
      en: "Four-stage hybrid retrieval (semantic, lexical, RRF fusion and rerank) over ~100K chunks, with streamed answers.",
    },
    metrics: [
      {
        value: { es: "9,6/10", en: "9.6/10" },
        label: {
          es: "calidad de respuesta en una batería de 15 preguntas",
          en: "answer quality on a 15-question regression suite",
        },
      },
      {
        value: { es: "287", en: "287" },
        label: { es: "tests automatizados", en: "automated tests passing" },
      },
      {
        value: { es: "~2–3 s", en: "~2–3 s" },
        label: {
          es: "de la pregunta a la respuesta, con streaming",
          en: "end to end, with streaming",
        },
      },
      {
        value: { es: "~100K", en: "~100K" },
        label: { es: "fragmentos indexados", en: "chunks indexed" },
      },
    ],
    images: [
      {
        src: "/images/projects/rag/consultas.webp",
        width: 1583,
        height: 851,
        alt: {
          es: "Chat de consultas: respuesta sobre límites de tarjetas de crédito con citas numeradas a las fuentes y preguntas sugeridas",
          en: "Query chat: an answer about credit card limits with numbered source citations and suggested follow-up questions",
        },
      },
      {
        src: "/images/projects/rag/auditoria.webp",
        width: 1583,
        height: 626,
        alt: {
          es: "Registro de auditoría por departamento, con totales de las últimas 24 horas y filtros por acción, recurso, usuario y fecha",
          en: "Per-department audit log, with last-24-hour totals and filters by action, resource, user and date",
        },
      },
      {
        src: "/images/projects/rag/dashboard.webp",
        width: 1091,
        height: 875,
        alt: {
          es: "Panel principal con menú lateral (documentos, consultas, miembros, auditoría) y permisos según el rol",
          en: "Main dashboard with a side menu (documents, queries, members, audit) and role-based access",
        },
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Bedrock",
      "ECS",
      "CloudWatch",
      "RAG",
    ],
    links: {},
  },
  {
    slug: "kanban-dashboard",
    kind: "professional",
    featured: true,
    year: 2026,
    title: {
      es: "Plataforma de gestión con Kanban en tiempo real",
      en: "Management platform with a real-time Kanban",
    },
    client: "Lintryxs",
    tagline: {
      es: "OKRs, Kanban colaborativo y analítica con IA para una cooperativa financiera.",
      en: "OKRs, a collaborative Kanban and AI analytics for a financial cooperative.",
    },
    problem: {
      es: "La cooperativa gestionaba su operación interna con hojas de cálculo dispersas y correo electrónico.",
      en: "The cooperative ran its internal operations on scattered spreadsheets and email.",
    },
    outcome: {
      es: "Una sola plataforma donde los gerentes siguen OKRs y proyectos en tiempo real, y la IA señala los proyectos en riesgo.",
      en: "One platform where managers track OKRs and projects in real time, and AI flags projects at risk.",
    },
    metrics: [
      {
        value: { es: "12", en: "12" },
        label: { es: "módulos funcionales", en: "functional modules" },
      },
      {
        value: { es: "9", en: "9" },
        label: {
          es: "roles con permisos diferenciados",
          en: "roles with distinct permissions",
        },
      },
      {
        value: { es: "32", en: "32" },
        label: { es: "modelos de datos", en: "data models" },
      },
      {
        value: { es: "~41K", en: "~41K" },
        label: { es: "líneas de TypeScript", en: "lines of TypeScript" },
      },
    ],
    images: [
      {
        src: "/images/projects/kanban/tablero-lleno.webp",
        width: 1600,
        height: 788,
        alt: {
          es: "Tablero Kanban con tarjetas en las cinco columnas, etiquetas de KPI y vencimiento, filtros por organización y responsable, botón «Analizar con IA» y exportación a PDF y Excel",
          en: "Kanban board with cards in all five columns, KPI and due-date badges, organization and assignee filters, an “Analyze with AI” button and PDF and Excel export",
        },
      },
      {
        src: "/images/projects/kanban/dashboard.webp",
        width: 1729,
        height: 755,
        alt: {
          es: "Panel de inicio con alerta de proyectos en riesgo y tareas por estado: pendientes, en progreso, en revisión, bloqueadas y completadas",
          en: "Home dashboard with an at-risk projects alert and tasks by status: pending, in progress, in review, blocked and done",
        },
      },
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.io",
      "Bedrock",
      "Terraform",
    ],
    links: {},
  },
  {
    slug: "agente-conversacional",
    kind: "professional",
    featured: true,
    year: 2026,
    title: {
      es: "Agente conversacional con IA",
      en: "AI conversational agent",
    },
    client: "Lintryxs",
    tagline: {
      es: "De un chatbot de menús estáticos a un agente que entiende lenguaje natural.",
      en: "From a static menu-based chatbot to an agent that understands natural language.",
    },
    problem: {
      es: "Los socios de una cooperativa de ahorro y crédito tenían que navegar un menú estático para resolver sus dudas.",
      en: "A credit union's members had to navigate a static menu to get answers.",
    },
    outcome: {
      es: "El agente responde en lenguaje natural en menos de 2 s y no inventa datos financieros: si algo no está en su base de conocimiento, lo dice y da el teléfono de la cooperativa.",
      en: "The agent answers in natural language in under 2 s and never makes up financial data: if something isn't in its knowledge base, it says so and gives the cooperative's phone number.",
    },
    metrics: [
      {
        value: { es: "1,8 s", en: "1.8 s" },
        label: {
          es: "P95 de respuesta en producción",
          en: "P95 response time in production",
        },
      },
      {
        value: { es: "0", en: "0" },
        label: {
          es: "errores en 150 peticiones concurrentes (prueba de carga)",
          en: "errors across 150 concurrent requests (load test)",
        },
      },
      {
        value: { es: "20/20", en: "20/20" },
        label: {
          es: "en la batería de validación",
          en: "on the validation suite",
        },
      },
    ],
    diagram: "chatbot-architecture",
    stack: [
      "Node.js",
      "Bedrock",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Terraform",
      "GitHub Actions",
      "AI agents",
    ],
    links: {},
  },
  {
    slug: "taskflow",
    kind: "personal",
    featured: true,
    year: 2026,
    title: { es: "TaskFlow", en: "TaskFlow" },
    tagline: {
      es: "Proyectos y tareas para equipos pequeños, con tablero Kanban y análisis con IA.",
      en: "Projects and tasks for small teams, with a Kanban board and AI analysis.",
    },
    problem: {
      es: "Los equipos pequeños necesitan organizar proyectos, responsables y prioridades sin la complejidad de las herramientas grandes.",
      en: "Small teams need to organize projects, owners and priorities without the complexity of big tools.",
    },
    outcome: {
      es: "Equipos con roles, proyectos y un Kanban con filtros y búsqueda. Claude resume cómo va el tablero, detecta riesgos y propone siguientes pasos en streaming; los permisos viven en Postgres con Row Level Security.",
      en: "Teams with roles, projects and a Kanban board with filters and search. Claude summarizes the board, flags risks and suggests next steps, streamed; permissions live in Postgres with Row Level Security.",
    },
    metrics: [
      {
        value: { es: "158", en: "158" },
        label: {
          es: "tests (unitarios, de permisos contra la base de datos real y en navegador) en cada push",
          en: "tests (unit, permissions against the real database and browser flows) on every push",
        },
      },
    ],
    images: [
      {
        src: "/images/projects/taskflow/home.webp",
        width: 1495,
        height: 810,
        alt: {
          es: "Página de inicio de TaskFlow con el titular «El trabajo de tu equipo, en un solo tablero» y una vista previa del Kanban",
          en: "TaskFlow landing page with the headline “Your team's work, on one board” and a Kanban preview",
        },
      },
      {
        src: "/images/projects/taskflow/login.webp",
        width: 1600,
        height: 798,
        alt: {
          es: "Pantalla de inicio de sesión de TaskFlow junto a una imagen con el lema «Todo el trabajo del equipo en un solo sitio»",
          en: "TaskFlow sign-in screen next to an image with the tagline “All of the team's work in one place”",
        },
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Drizzle",
      "Zod",
      "LLM APIs",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    links: {
      demo: "https://taskflow-jg.vercel.app",
      repo: "https://github.com/jeyber-g21/TaskFlow",
    },
  },
  {
    slug: "lg-application",
    kind: "coursework",
    featured: false,
    year: 2025,
    title: { es: "LG Application", en: "LG Application" },
    tagline: {
      es: "Registro, login con JWT y un panel personal de tareas y reuniones.",
      en: "Sign-up, JWT login and a personal dashboard for tasks and meetings.",
    },
    images: [
      {
        src: "/images/projects/lg-application/dashboard.webp",
        width: 1008,
        height: 466,
        alt: {
          es: "Panel personal con perfil, lista de tareas priorizadas, próximas reuniones y el clima de Cúcuta",
          en: "Personal dashboard with profile, prioritized task list, upcoming meetings and the weather in Cúcuta",
        },
      },
    ],
    stack: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    links: {
      demo: "https://jgapplication.netlify.app/",
      repo: "https://github.com/jeyber-g21/LoginPage-Angular",
    },
  },
  {
    slug: "articles-pro",
    kind: "coursework",
    featured: false,
    year: 2025,
    title: { es: "Articles PRO", en: "Articles PRO" },
    tagline: {
      es: "Crear y buscar artículos, con una interfaz por componentes en React 19 y TypeScript.",
      en: "Create and search articles, with a component-based UI in React 19 and TypeScript.",
    },
    images: [
      {
        src: "/images/projects/articles-pro/home.webp",
        width: 1600,
        height: 731,
        alt: {
          es: "Página de inicio de Articles PRO: foto de un cuaderno ilustrado junto al titular «Get inspired, create and surprise»",
          en: "Articles PRO home page: a photo of an illustrated notebook next to the headline “Get inspired, create and surprise”",
        },
      },
    ],
    stack: ["React", "TypeScript"],
    links: {
      demo: "https://articleprojg.netlify.app/",
      repo: "https://github.com/jeyber-g21/React-Frontend",
    },
  },
];

/** Repos de formación (CS50W): no van en destacados, solo un enlace discreto (spec §10.2). */
export const courseworkUrl = "https://github.com/jeyber-g21?tab=repositories";
