import { LogoSlot } from "@/components/ui/logo-slot";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { clientLogos } from "@/content/homepage";

export function LogoCloud() {
  return (
    <SiteSection tone="wash" className="py-10 sm:py-12">
      <SectionHeading title="Trusted by 150+ brands across SaaS, healthcare, marketing, B2B, and enterprise" />
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {clientLogos.map((logo) => (
          <li key={logo.src}>
            <LogoSlot
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </li>
        ))}
      </ul>
    </SiteSection>
  );
}
