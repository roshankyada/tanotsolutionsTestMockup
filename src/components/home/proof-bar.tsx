import { Container } from "@/components/ui/container";
import { proofStats } from "@/content/homepage";

export function ProofBar() {
  return (
    <section className="bg-dark py-7 text-white" aria-label="Company proof points">
      <Container>
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 flex-col">
              <dd className="text-[1.75rem] font-bold leading-none tracking-tight">
                {stat.value}
              </dd>
              <dt className="mt-2 text-sm text-white/70">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
