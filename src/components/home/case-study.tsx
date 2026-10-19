import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";

const metrics = [
  { label: "Monthly visitors", value: "0 → 6,200" },
  { label: "AI visibility", value: "0 → 1.3K citations" },
  { label: "Ranking keywords", value: "0 → 1.6K" },
] as const;

export function CaseStudy() {
  return (
    <SiteSection id="results" tone="wash">
      <SectionHeading title="How an HR company grew from zero to 6,200 monthly visitors in 8 months" />
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="overflow-hidden rounded-lg border-8 border-white bg-wash-strong">
          <div className="relative aspect-video">
            <Image
              src="/images/case-study-traffic.png"
              alt="Organic traffic chart showing growth after Tanot Solutions started work"
              fill
              className="object-contain bg-[#f4f7fb]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
        <div>
          <p className="text-base leading-7 text-muted">
            Starting from a domain with almost no authority, we built a steady
            flow of niche-relevant editorial links, with the required technical
            SEO and content changes. Traffic grew from zero to 6,200 monthly
            visitors in eight months.
          </p>
          <dl className="mt-6 grid gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-baseline justify-between gap-4 rounded-md border border-line bg-white px-4 py-3"
              >
                <dt className="text-sm text-muted">{metric.label}</dt>
                <dd className="text-base font-extrabold text-brand">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#strategy">Read the full case study</ButtonLink>
            <ButtonLink href="#results" variant="secondary">
              All case studies
            </ButtonLink>
          </div>
        </div>
      </div>
    </SiteSection>
  );
}
