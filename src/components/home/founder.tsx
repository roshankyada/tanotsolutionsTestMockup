import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { SiteSection } from "@/components/ui/site-section";

export function Founder() {
  return (
    <SiteSection id="about" tone="white">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12">
        <div className="mx-auto w-full max-w-[22rem]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/renu.webp"
              alt="Renu Sharma, founder of Tanot Solutions"
              fill
              className="object-cover object-top"
              sizes="288px"
              priority
            />
          </div>
        </div>
        <div>
          <h2 className="max-w-xl text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:text-[2rem]">
            Hi, I&apos;m Renu. I built Tanot Solutions to make SEO accountable.
          </h2>
          <div className="mt-4 max-w-2xl space-y-3 text-base leading-7 text-muted">
            <p>
              For over 11 years, I&apos;ve helped brands grow through search,
              from early-stage startups to global enterprises. Along the way, I
              saw how easily businesses lose trust in SEO: vague reports,
              guaranteed #1 rankings that never happen, cheap spammy links that
              lead to penalties, and agencies that disappear once the contract
              is signed.
            </p>
            <p>
              I founded Tanot Solutions in 2020 to change that, with honest
              strategy, ethical practices, and complete transparency at every
              step.
            </p>
          </div>
          <p className="mt-5 text-sm">
            <span className="font-extrabold text-ink">Renu Sharma</span>
            <span className="text-muted">
              {" "}
              · Founder & Head of SEO Strategy
            </span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#strategy">Book a call with Renu →</ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/company/tanot-solutions/"
              variant="secondary"
              external
            >
              Connect on LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </SiteSection>
  );
}
