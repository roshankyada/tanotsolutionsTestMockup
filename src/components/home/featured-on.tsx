import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { featuredOn } from "@/content/homepage";

export function FeaturedOn() {
  return (
    <SiteSection tone="white" className="border-t border-line pt-10 sm:pt-12">
      <SectionHeading title="As featured on" />
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {featuredOn.map((item) => (
          <li key={item.name}>
            <div className="flex h-[72px] items-center justify-center rounded-md border border-line bg-white px-3">
              <span className="text-center text-sm font-semibold tracking-wide text-ink">
                {item.mark}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </SiteSection>
  );
}
