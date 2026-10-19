"use client";

import { useId, useState } from "react";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { services, type Service } from "@/content/homepage";
import { cn } from "@/lib/cn";

export function Services() {
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "");
  const tablistId = useId();
  const active = services.find((service) => service.id === activeId) ?? services[0];

  if (!active) {
    return null;
  }

  return (
    <SiteSection id="services" tone="white">
      <SectionHeading
        title="SEO services built around revenue, not vanity metrics"
        description="Pick one service or combine them. Every campaign targets authority, high-intent traffic, and conversions."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:gap-8">
        <div
          role="tablist"
          aria-label="SEO services"
          id={tablistId}
          className="flex flex-col gap-2"
        >
          {services.map((service) => {
            const selected = service.id === active.id;
            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={selected}
                aria-controls={`panel-${service.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  "flex min-h-14 items-center rounded-lg border px-4 text-left transition-colors",
                  selected
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink hover:border-brand",
                )}
                onClick={() => setActiveId(service.id)}
              >
                <span
                  className={cn(
                    "w-8 shrink-0 text-sm font-semibold",
                    selected ? "text-white/80" : "text-muted",
                  )}
                >
                  {service.number}
                </span>
                <span className="flex-1 text-[0.95rem] font-semibold">
                  {service.name}
                </span>
                <span aria-hidden="true" className="text-lg font-light">
                  ›
                </span>
              </button>
            );
          })}
        </div>
        <ServicePanel service={active} />
      </div>
    </SiteSection>
  );
}

function ServicePanel({ service }: { service: Service }) {
  return (
    <div
      role="tabpanel"
      id={`panel-${service.id}`}
      aria-labelledby={`tab-${service.id}`}
      className="rounded-xl border border-line bg-wash p-6 sm:p-8"
    >
      <h3 className="text-[1.75rem] font-extrabold tracking-tight text-ink">
        {service.name}
      </h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-ink">
        {service.description}
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap gap-3">
        <ButtonLink href={service.primaryCta.href}>
          {service.primaryCta.label}
        </ButtonLink>
        <ButtonLink href={service.secondaryCta.href} variant="secondary">
          {service.secondaryCta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
