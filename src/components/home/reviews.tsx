import { Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { reviews } from "@/content/homepage";

function Stars() {
  return (
    <div className="flex gap-1 text-star" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Reviews() {
  const [featured, ...rest] = reviews;

  return (
    <SiteSection id="reviews" tone="wash">
      <SectionHeading
        title="Reviews from businesses we’ve helped grow"
        description="Don’t take our word for it. Here’s what clients say about working with Tanot Solutions."
      />

      {featured ? (
        <figure className="mx-auto mt-8 max-w-3xl rounded-lg border border-line bg-white p-6 sm:p-8">
          <Stars />
          <blockquote className="mt-4 text-lg leading-8 text-ink">
            “{featured.quote}”
          </blockquote>
          <figcaption className="mt-5 text-sm">
            <p className="font-bold text-ink">{featured.name}</p>
            <p className="text-muted">{featured.role}</p>
          </figcaption>
        </figure>
      ) : null}

      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {rest.map((review) => (
          <li key={review.name} className="h-full">
            <Card>
              <Stars />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-7 text-ink">
                “{review.quote}”
              </blockquote>
              <footer className="mt-5">
                <p className="text-sm font-bold text-ink">{review.name}</p>
                <p className="text-sm text-muted">{review.role}</p>
              </footer>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink
          href="https://clutch.co/profile/tanot-solutions"
          variant="secondary"
          external
        >
          See us on Clutch
        </ButtonLink>
      </div>
    </SiteSection>
  );
}
