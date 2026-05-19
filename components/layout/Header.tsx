"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CartButton } from "@/components/cart/CartButton";
import { easings } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easings.outExpo }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-premium bg-base/70 border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label={content.brand.name}
            >
              <div className="relative">
                <div className="size-7 rounded-md bg-gradient-to-br from-brand to-brand-deep" />
                <div className="absolute inset-0 size-7 rounded-md bg-brand/30 blur-md group-hover:bg-brand/60 transition-all duration-500" />
              </div>
              <span className="font-bold text-base tracking-tight text-primary">
                {content.brand.name}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {content.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                href={content.nav.cta.href}
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                {content.nav.cta.label}
              </Button>

              <CartButton />

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center justify-center size-10 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easings.outExpo }}
            className="fixed inset-0 z-[60] bg-base/95 backdrop-blur-premium md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="size-7 rounded-md bg-gradient-to-br from-brand to-brand-deep" />
                <span className="font-bold text-base tracking-tight">
                  {content.brand.name}
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center size-10 rounded-lg hover:bg-white/5"
                aria-label="Cerrar menú"
              >
                <X className="size-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-2 px-6 mt-8"
            >
              {content.nav.links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.outExpo } },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-semibold tracking-tight text-primary hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.outExpo } },
                }}
                className="mt-8"
              >
                <Button
                  href={content.nav.cta.href}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {content.nav.cta.label}
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
