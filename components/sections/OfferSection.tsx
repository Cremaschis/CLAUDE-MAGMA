"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { content } from "@/lib/content";
import { useCart } from "@/lib/cart";
import { easings, viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

const e = easings.outExpo;

export function OfferSection() {
  const { offer } = content;
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const { addItem, openCart } = useCart();

  function handleAdd() {
    const flavor = offer.flavors[selectedFlavor];
    addItem({
      id: "magma-energy",
      flavor: flavor.name,
      name: offer.productName,
      price: Number.parseFloat(offer.price),
      image: selectedFlavor === 0 ? "/images/magma-menta.png" : "/images/magma-cherry.png",
      shopifyVariantId: flavor.shopifyVariantId,
    });
    openCart();
  }

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
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-surface to-base overflow-hidden border border-white/10 flex items-center justify-center p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.18),transparent_60%)]" />

                <div className="relative grid w-full gap-4 sm:gap-6 sm:grid-cols-2">
                  {[
                    { name: "Menta", image: "/images/magma-menta.png" },
                    { name: "Cherry", image: "/images/magma-cherry.png" },
                  ].map((flavor, i) => (
                    <motion.div
                      key={flavor.name}
                      animate={{ y: selectedFlavor === i ? [0, -6, 0] : 0 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className={cn(
                        "relative rounded-2xl border overflow-hidden bg-black/30",
                        selectedFlavor === i ? "border-brand/70 shadow-brand-glow" : "border-white/15"
                      )}
                    >
                      <Image
                        src={flavor.image}
                        alt={`MAGMA ${flavor.name}`}
                        width={520}
                        height={520}
                        className="h-full w-full object-cover"
                        priority={i === 0}
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/45 to-transparent">
                        <p className="text-sm font-semibold text-white">{flavor.name}</p>
                        <p className="text-xs text-white/80">100mg · 20 pouches</p>
                      </div>
                    </motion.div>
                  ))}
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

              <p className="mt-4 text-secondary leading-relaxed text-base md:text-lg">
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
                    <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary">
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
                        "px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-300",
                        selectedFlavor === i
                          ? "border-brand/70 bg-brand/20 text-primary"
                          : "border-white/20 bg-white/[0.02] text-primary hover:border-brand/60 hover:bg-brand/10"
                      )}
                    >
                      {flavor.name}
                      <span className="block text-xs text-secondary font-normal mt-0.5">
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

                <button onClick={handleAdd} className="btn-primary w-full sm:w-auto">
                  {offer.cta.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="mt-4 text-xs text-tertiary">{offer.reassurance}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
