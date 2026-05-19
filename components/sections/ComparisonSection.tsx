"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

const e = easings.outExpo;

function ValueCell({ value, highlight = false }: { value: string; highlight?: boolean }) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center justify-center">
        <Check
          className={cn("size-5", highlight ? "text-brand" : "text-secondary/70")}
          strokeWidth={2.5}
        />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex items-center justify-center">
        <X className="size-5 text-disabled" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="size-5 text-tertiary" strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span
      className={cn(
        "text-sm md:text-base tabular-nums font-medium",
        highlight ? "text-primary" : "text-tertiary"
      )}
    >
      {value}
    </span>
  );
}

export function ComparisonSection() {
  const { comparison } = content;

  return (
    <section className="relative py-24 md:py-36 bg-elevated/30">
      <div className="section-container">
        <SectionHeader
          eyebrow={comparison.eyebrow}
          headline={comparison.headline}
          subheadline={comparison.subheadline}
        />

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.9, delay: 0.2, ease: e }}
          className="hidden md:block mt-16 md:mt-20 relative"
        >
          {/* Glow detrás de la columna brand */}
          <div className="absolute -inset-x-4 inset-y-0 rounded-3xl bg-brand/[0.04] blur-3xl pointer-events-none" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-elevated/60 backdrop-blur-premium">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-6 text-xs font-medium text-tertiary uppercase tracking-[0.15em] w-1/4">
                    Atributo
                  </th>
                  <th className="p-6 relative bg-brand/[0.08]">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
                    <div className="relative flex flex-col items-center gap-1">
                      <span className="text-[10px] font-mono text-brand tracking-widest">
                        EL ESTÁNDAR
                      </span>
                      <span className="text-2xl font-bold text-primary tracking-tight">
                        {comparison.brandName}
                      </span>
                    </div>
                  </th>
                  {comparison.competitors.map((name) => (
                    <th key={name} className="p-6 text-center">
                      <span className="text-base font-medium text-disabled">{name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr
                    key={row.attribute}
                    className={cn(
                      "border-b border-white/[0.04] last:border-b-0 transition-colors duration-200",
                      "hover:bg-white/[0.015]"
                    )}
                  >
                    <td className="p-5 md:p-6 text-sm md:text-base text-secondary font-medium">
                      {row.attribute}
                    </td>
                    <td className="p-5 md:p-6 bg-brand/[0.06] text-center relative">
                      <div className="absolute inset-y-0 left-0 w-px bg-brand/20" />
                      <div className="absolute inset-y-0 right-0 w-px bg-brand/20" />
                      <ValueCell value={row.brand} highlight />
                    </td>
                    {row.competitors.map((value, j) => (
                      <td key={j} className="p-5 md:p-6 text-center">
                        <ValueCell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-sm text-tertiary italic">
            Diseñado para reemplazar el ritual. No para sumar uno más.
          </p>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden mt-16 space-y-3">
          {comparison.rows.map((row, i) => (
            <motion.div
              key={row.attribute}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: e }}
              className="premium-card p-5"
            >
              <div className="text-xs font-mono text-tertiary uppercase tracking-wider mb-4">
                {row.attribute}
              </div>

              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-brand/[0.08] border border-brand/20 mb-2">
                <span className="text-base font-bold text-primary">{comparison.brandName}</span>
                <ValueCell value={row.brand} highlight />
              </div>

              {comparison.competitors.map((name, j) => (
                <div
                  key={name}
                  className="flex items-center justify-between py-3 px-4 text-sm"
                >
                  <span className="text-tertiary">{name}</span>
                  <ValueCell value={row.competitors[j]} />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
