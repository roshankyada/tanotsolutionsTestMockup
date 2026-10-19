import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { awards } from "@/content/homepage";

export function Awards() {
  return (
    <SiteSection tone="wash">
      <SectionHeading title="The industry’s top-rated SEO agency" />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((award) => (
          <li key={award.title}>
            <article className="h-full overflow-hidden rounded-lg border border-line bg-white">
              <div className="relative aspect-[4/3] bg-white p-3">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="px-4 py-3 text-sm font-semibold leading-snug text-ink">
                {award.title}
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </SiteSection>
  );
}
