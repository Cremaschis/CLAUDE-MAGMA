"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";

const e = easings.outExpo;

export function BenefitsSection() {
  const { benefits } = content;

  return (
    <section id="benefits" className="relative py-24 md:py-36">
      <div className="section-container">
        <SectionHeader
          eyebrow={benefits.eyebrow}
          headline={benefits.headline}
          subheadline={benefits.subheadline}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {benefits.items.map((benefit, i) => {
            const IconComponent = (Icons[benefit.icon as keyof typeof Icons] as LucideIcon) || Icons.Zap;

            return (
              <motion.article
                key={benefit.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: e } },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: e }}
                className="group premium-card p-7 md:p-8 relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(255,69,0,0.08),transparent_60%)]" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-surface ring-1 ring-white/[0.06] group-hover:ring-brand/40 group-hover:bg-brand/5 transition-all duration-500">
                    <IconComponent
                      className="size-5 text-brand"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-primary tracking-tight">
                    {benefit.label}
                  </h3>
                  <p className="mt-3 text-secondary leading-relaxed text-pretty">
                    {benefit.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
