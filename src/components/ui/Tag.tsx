import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** "strong": uso diario (más peso visual). "muted": he trabajado con ello. */
  tone?: "default" | "strong" | "muted";
};

const tones = {
  default: "border-border-strong text-ink",
  strong: "border-border-strong font-semibold text-ink",
  muted: "border-border text-muted",
};

/** Píldora de borde fino con texto mono. Sin logos (spec §10.3). */
export function Tag({ children, tone = "default" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-card border px-2 py-0.5 font-mono text-small ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
