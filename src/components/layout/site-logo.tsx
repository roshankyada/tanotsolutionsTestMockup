import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="#top"
      className="inline-flex items-center gap-2 text-ink"
      aria-label="Tanot Solutions home"
    >
      <Image
        src="/images/brand/tanot-logo.png"
        alt="Tanot Solutions"
        width={150}
        height={36}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
