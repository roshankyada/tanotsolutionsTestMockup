import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold tracking-wide text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:text-[2rem]"
      >
        {title}
      </h2>
      {description ? (
        <div className="mt-3 text-base leading-7 text-muted">{description}</div>
      ) : null}
    </div>
  );
}
