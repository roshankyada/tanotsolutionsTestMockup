import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { navItems } from "@/content/homepage";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm">
      <Container className="relative flex h-[4.25rem] items-center justify-between gap-4">
        <SiteLogo />
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ink hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="#strategy">Book a free strategy call</ButtonLink>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
