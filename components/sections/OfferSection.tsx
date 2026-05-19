"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

const e = easings.outExpo;

export function OfferSection() {
  const { offer } = content;
  const [selectedFlavor, setSelectedFlavor] = useState(0);

  return (
    <section id="shop" className="relative py-24 md:py-36 bg-elevated/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 1.0, ease: e }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-elevated"
        >
          {/* Glow atmosférico */}
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-brand-deep/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 p-8 md:p-12 lg:p-16">
            {/* Producto visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-surface to-base overflow-hidden border border-white/[0.06] flex items-center justify-center">
                {/* Glow detrás del "producto" */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.15),transparent_60%)]" />

                {/* Placeholder "lata" estilizado */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-48 h-64 md:w-56 md:h-72 rounded-3xl bg-gradient-to-b from-base via-surface to-base border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between py-8 px-6 relative overflow-hidden">
                      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

                      <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold tracking-ultra-tight text-primary">
                          MAGMA
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-widest text-tertiary">
                          Performance Pouches
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="font-mono text-xs tracking-wider text-brand">
                          100MG · 20 PCS
                        </p>
                        <p className="mt-2 text-xs text-tertiary">
                          {offer.flavors[selectedFlavor].name}
                        </p>
                      </div>

                      {/* Brand glow circle */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 size-20 rounded-full bg-brand blur-2xl opacity-60" />
                    </div>
                  </motion.div>

                  {/* Floating dots */}
                  <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 -right-8 size-3 rounded-full bg-brand/60 blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 15, 0], x: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-6 size-2 rounded-full bg-brand-deep/60 blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Detalles */}
            <div className="flex flex-col justify-center">
              <span className="eyebrow">
                <span className="size-1 rounded-full bg-brand" />
                {offer.eyebrow}
              </span>

              <h2 className="mt-4 text-h2 text-primary tracking-tight">
                {offer.headline}
              </h2>

              <p className="mt-4 text-secondary leading-relaxed">
                {offer.subheadline}
              </p>

              <div className="mt-8 pt-8 border-t border-white/[0.06]">
                <p className="text-xs uppercase tracking-[0.15em] text-tertiary mb-4">
                  Incluye
                </p>
                <ul className="space-y-2.5">
                  {[
                    "2 latas de 20 pouches cada una",
                    "2 sabores premium incluidos",
                    "Guía de uso impresa",
                    "Acceso anticipado a drops futuros",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                      <Check
                        className="size-4 text-brand mt-0.5 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sabores */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.15em] text-tertiary mb-3">
                  Sabor activo
                </p>
                <div className="flex flex-wrap gap-2">
                  {offer.flavors.map((flavor, i) => (
                    <button
                      key={flavor.name}
                      onClick={() => setSelectedFlavor(i)}
                      className={cn(
                        "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300",
                        selectedFlavor === i
                          ? "border-brand/50 bg-brand/10 text-primary"
                          : "border-white/10 text-secondary hover:border-white/30 hover:text-primary"
                      )}
                    >
                      {flavor.name}
                      <span className="block text-xs text-tertiary font-normal mt-0.5">
                        {flavor.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Precio + CTA */}
              <div className="mt-10">
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-5xl font-bold tabular-nums tracking-tight text-primary">
                    <span className="text-2xl text-secondary mr-1 align-top">$</span>
                    {offer.price}
                  </span>
                  <span className="text-base text-tertiary line-through mb-2">
                    ${offer.priceOriginal}
                  </span>
                  <span className="text-xs text-brand bg-brand/10 px-2 py-1 rounded-md font-mono mb-2 uppercase tracking-wider">
                    Launch
                  </span>
                </div>

                <a
                  href={offer.cta.href}
                  className="btn-primary w-full sm:w-auto"
                >
                  {offer.cta.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <p className="mt-4 text-xs text-tertiary">{offer.reassurance}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
