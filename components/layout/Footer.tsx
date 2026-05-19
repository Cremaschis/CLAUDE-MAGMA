import Link from "next/link";
import { content } from "@/lib/content";
import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16 md:py-20 mt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="size-8 rounded-md bg-gradient-to-br from-brand to-brand-deep" />
              <span className="font-bold text-lg tracking-tight">
                {content.brand.name}
              </span>
            </Link>
            <p className="mt-6 text-5xl md:text-6xl font-bold tracking-ultra-tight text-primary">
              {content.footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="size-10 rounded-lg border border-white/10 inline-flex items-center justify-center text-tertiary hover:text-primary hover:border-white/30 transition-all"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="size-10 rounded-lg border border-white/10 inline-flex items-center justify-center text-tertiary hover:text-primary hover:border-white/30 transition-all"
              >
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-tertiary mb-4">
                Producto
              </h4>
              <ul className="space-y-3">
                {content.footer.links.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-tertiary mb-4">
                Marca
              </h4>
              <ul className="space-y-3">
                {content.footer.links.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-tertiary mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {content.footer.links.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-tertiary">
          <p>{content.footer.copyright}</p>
          <p className="font-mono">
            Diseñado para adultos. No recomendado en menores de 18, embarazadas o personas con sensibilidad a la cafeína.
          </p>
        </div>
      </div>
    </footer>
  );
}
