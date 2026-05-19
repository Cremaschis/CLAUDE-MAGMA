"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";

const e = easings.outExpo;

export function UseCasesSection() {
  const { useCases } = content;

  return (
    <section className="relative py-24 md:py-36 bg-elevated/30">
      <div className="section-container">
        <SectionHeader
          eyebrow={useCases.eyebrow}
          headline={useCases.headline}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {useCases.items.map((useCase, i) => (
            <motion.article
              key={useCase.tag}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: e } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative premium-card p-8 md:p-10 overflow-hidden"
            >
              {/* Decorative number */}
              <div className="absolute top-6 right-6 text-7xl md:text-8xl font-bold text-white/[0.03] tabular-nums leading-none select-none pointer-events-none">
                0{i + 1}
              </div>

              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand/10 border border-brand/20 text-xs font-mono uppercase tracking-wider text-brand">
                  {useCase.tag}
                </span>

                <h3 className="mt-6 text-2xl md:text-3xl font-bold text-primary tracking-tight">
                  {useCase.title}
                </h3>

                <p className="mt-4 text-secondary leading-relaxed text-pretty max-w-md">
                  {useCase.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
