import { ButtonLink } from "@/components/ui/button";
import { SiteSection } from "@/components/ui/site-section";

export function CtaBanner() {
  return (
    <SiteSection tone="white" className="py-10 sm:py-12">
      <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-brand px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <h2 className="max-w-xl text-[1.5rem] font-bold leading-snug text-white sm:text-[1.75rem]">
          Try our SEO and link building service for 30 days — then choose to stay
        </h2>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#strategy" variant="inverse">
            Book a call
          </ButtonLink>
          <ButtonLink href="mailto:info@tanotsolutions.com" variant="inverse">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </SiteSection>
  );
}
