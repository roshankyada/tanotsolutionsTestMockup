import { CircleCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { partnerPoints } from "@/content/homepage";

export function GrowthPartner() {
  return (
    <SiteSection tone="white">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <SectionHeading
            align="left"
            title="A growth partner, not another SEO agency"
            description="Clients describe working with us as less like a vendor, more like a partner. Here’s why they stay for 2+ years on average."
          />
          <div className="mt-6">
            <ButtonLink href="#strategy">Talk to our team</ButtonLink>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {partnerPoints.map((point) => (
            <li key={point.title} className="h-full">
              <Card className="p-5">
                <CircleCheck
                  className="h-5 w-5 text-brand"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-base font-bold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{point.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </SiteSection>
  );
}
