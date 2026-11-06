import type { Skill, SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "cloud",
  "ai",
  "tools",
];

export const skills = [
  // Lenguajes
  { name: "Python", category: "languages", level: "daily" },
  { name: "TypeScript", category: "languages", level: "daily" },
  { name: "JavaScript", category: "languages", level: "daily" },
  { name: "SQL", category: "languages", level: "daily" },

  // Frontend
  { name: "Angular", category: "frontend", level: "daily" },
  { name: "React", category: "frontend", level: "daily" },
  { name: "HTML", category: "frontend", level: "daily" },
  { name: "CSS", category: "frontend", level: "daily" },
  { name: "Next.js", category: "frontend", level: "working" },
  { name: "Tailwind CSS", category: "frontend", level: "working" },
  { name: "shadcn/ui", category: "frontend", level: "working" },

  // Backend
  { name: "Node.js", category: "backend", level: "daily" },
  { name: "FastAPI", category: "backend", level: "daily" },
  { name: "Express", category: "backend", level: "working" },
  { name: "Prisma", category: "backend", level: "working" },
  { name: "Socket.io", category: "backend", level: "working" },
  { name: "Drizzle", category: "backend", level: "working" },
  { name: "Zod", category: "backend", level: "working" },

  // Bases de datos
  { name: "PostgreSQL", category: "databases", level: "daily" },
  { name: "MongoDB", category: "databases", level: "daily" },
  { name: "DynamoDB", category: "databases", level: "daily" },
  { name: "pgvector", category: "databases", level: "working" },
  { name: "Redis", category: "databases", level: "working" },
  { name: "Supabase", category: "databases", level: "working" },

  // Cloud y DevOps
  { name: "AWS", category: "cloud", level: "daily" },
  { name: "ECS", category: "cloud", level: "daily" },
  { name: "Lambda", category: "cloud", level: "daily" },
  { name: "API Gateway", category: "cloud", level: "daily" },
  { name: "S3", category: "cloud", level: "daily" },
  { name: "EC2", category: "cloud", level: "daily" },
  { name: "Bedrock", category: "cloud", level: "daily" },
  { name: "CloudWatch", category: "cloud", level: "daily" },
  { name: "IAM", category: "cloud", level: "daily" },
  { name: "VPC", category: "cloud", level: "daily" },
  { name: "Docker", category: "cloud", level: "daily" },
  { name: "GitHub Actions", category: "cloud", level: "daily" },
  { name: "Terraform", category: "cloud", level: "working" },
  { name: "Vercel", category: "cloud", level: "working" },

  // IA
  { name: "RAG", category: "ai", level: "daily" },
  { name: "LLM APIs", category: "ai", level: "daily" },
  { name: "AI agents", category: "ai", level: "daily" },

  // Herramientas
  { name: "Git", category: "tools", level: "daily" },
  { name: "Lovable", category: "tools", level: "working" },
  { name: "Vitest", category: "tools", level: "working" },
  { name: "Playwright", category: "tools", level: "working" },
] as const satisfies readonly Skill[];

export type SkillName = (typeof skills)[number]["name"];

/** Resumen del stack para la página de inicio: lo más representativo de uso diario. */
export const coreStack: SkillName[] = [
  "Python",
  "TypeScript",
  "Angular",
  "React",
  "Node.js",
  "FastAPI",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
];
