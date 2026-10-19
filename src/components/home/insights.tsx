import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { insights } from "@/content/homepage";

export function Insights() {
  return (
    <SiteSection
      id="insights"
      tone="insights"
      className="border-y border-insights-line"
    >
      <SectionHeading title="Latest SEO & link building insights" />
      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {insights.map((post) => (
          <li key={post.href}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-insights-line bg-white">
              <a
                href={post.href}
                className="relative block aspect-[16/10] overflow-hidden bg-wash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </a>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {post.category}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                  <a
                    href={post.href}
                    className="hover:text-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-auto pt-4 text-xs text-muted">
                  {post.author} · {post.date}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SiteSection>
  );
}
