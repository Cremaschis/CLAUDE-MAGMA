"use client";

import { motion } from "framer-motion";
import { Package, Hand, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";

const e = easings.outExpo;
const stepIcons = [Package, Hand, Sparkles];

export function RitualSection() {
  const { ritual } = content;

  return (
    <section id="ritual" className="relative py-24 md:py-36">
      {/* Glow atmosférico */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,69,0,0.06),transparent_70%)]" />

      <div className="section-container relative">
        <SectionHeader
          eyebrow={ritual.eyebrow}
          headline={ritual.headline}
          subheadline={ritual.subheadline}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
          className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 relative"
        >
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" aria-hidden />

          {ritual.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: e } },
                }}
                className="relative"
              >
                <div className="text-center md:text-left">
                  {/* Icon circle */}
                  <div className="relative inline-flex">
                    <div className="relative size-24 rounded-full bg-elevated border border-white/10 inline-flex items-center justify-center mx-auto md:mx-0">
                      <div className="absolute inset-0 rounded-full bg-brand/5" />
                      <Icon
                        className="size-9 text-brand relative"
                        strokeWidth={1.5}
                        aria-hidden
                      />

                      {/* Glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full ring-1 ring-brand/40"
                        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-8 md:mt-10 font-mono text-sm tracking-wider text-tertiary">
                    {step.number} / 03
                  </div>

                  <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-ultra-tight text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-secondary leading-relaxed text-pretty max-w-xs mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
