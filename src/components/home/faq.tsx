"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { faqs } from "@/content/homepage";
import { cn } from "@/lib/cn";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SiteSection id="faq" tone="white">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <SectionHeading
            align="left"
            title="Questions to ask before hiring an SEO agency"
            description="Can’t find your answer? We’re happy to walk you through it on a quick call, or send a free audit with a step-by-step roadmap."
          />
          <div className="mt-6">
            <ButtonLink href="#strategy">Claim your free SEO growth plan</ButtonLink>
          </div>
        </div>
        <div className="divide-y divide-line rounded-lg border border-line bg-white">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted transition-transform",
                        open && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                  {open ? (
                    <p className="px-5 pb-4 text-sm leading-6 text-muted">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SiteSection>
  );
}
