import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { StrategyForm } from "@/components/home/strategy-form";

export function Hero() {
  return (
    <section className="bg-wash py-10 sm:py-14" aria-labelledby="hero-heading">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,22.5rem)] lg:gap-12">
          <div>
            <h1
              id="hero-heading"
              className="max-w-[18ch] text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]"
            >
              <span className="text-brand">Best SEO services</span> for Google,
              AI search, and revenue growth
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Tanot Solutions helps your business rank higher on Google and get
              recommended by AI tools like ChatGPT, Perplexity, and Google AI
              Overviews. From technical SEO and content marketing to
              high-authority link building and local SEO, we handle the work
              that brings qualified leads and measurable revenue.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#strategy">
                Book a free strategy call →
              </ButtonLink>
              <ButtonLink href="#results" variant="secondary">
                See client results
              </ButtonLink>
            </div>
            <a
              href="https://clutch.co/profile/tanot-solutions"
              className="mt-6 inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/brand/clutch-badge.png"
                alt="Reviewed on Clutch, 5.0 rating"
                width={180}
                height={75}
                className="h-auto w-[148px]"
              />
            </a>
          </div>
          <div
            id="strategy"
            className="rounded-lg border border-line bg-white p-5 sm:p-6"
          >
            <h2 className="text-[1.375rem] font-extrabold leading-snug text-ink">
              Get your free SEO strategy
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-muted">
              Tell us about your goals and we&apos;ll show you where organic
              growth can improve.
            </p>
            <div className="mt-5">
              <StrategyForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
