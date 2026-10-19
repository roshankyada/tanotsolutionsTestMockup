import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

const tones = {
  white: "bg-white",
  wash: "bg-wash",
  dark: "bg-dark text-white",
  insights: "bg-insights",
} as const;

export function SiteSection({
  id,
  tone = "white",
  children,
  className,
  contained = true,
}: {
  id?: string;
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16", tones[tone], className)}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
