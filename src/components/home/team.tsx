import { SectionHeading } from "@/components/ui/section-heading";
import { SiteSection } from "@/components/ui/site-section";
import { team } from "@/content/homepage";

export function Team() {
  return (
    <SiteSection tone="wash" className="pb-10 sm:pb-12">
      <SectionHeading title="The team behind your results" />
      <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {team.map((member) => (
          <li key={member.name}>
            <article className="rounded-lg border border-line bg-white p-4 text-center">
              <div
                className="mx-auto flex aspect-[4/5] max-w-[11.5rem] items-center justify-center overflow-hidden rounded-md bg-wash-strong text-2xl font-bold text-brand"
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <h3 className="mt-3 text-sm font-bold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm leading-5 text-muted">{member.role}</p>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-xs text-muted">
        Portrait frames are sized for the final photographs. Initials are
        placeholders until those assets are supplied.
      </p>
    </SiteSection>
  );
}
