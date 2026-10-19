import { SiteLogo } from "@/components/layout/site-logo";
import { Container } from "@/components/ui/container";
import { footerColumns, site } from "@/content/homepage";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <SiteLogo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              {site.tagline}. Honest strategy, ethical links, and complete
              transparency.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-ink">{column.title}</p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>
            Sales inquiry{" "}
            <a className="font-medium text-ink hover:text-brand" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
