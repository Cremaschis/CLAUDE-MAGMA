"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";

const e = easings.outExpo;

export function FinalCTASection() {
  const { finalCta } = content;

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      {/* Glow atmosférico de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,69,0,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(178,34,34,0.1),transparent_70%)]" />

      {/* Animated halo */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] md:size-[800px] rounded-full bg-brand/10 blur-3xl"
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 1.0, ease: e }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="eyebrow justify-center">
            <span className="size-1 rounded-full bg-brand" />
            {finalCta.eyebrow}
          </span>

          <h2 className="mt-8 text-hero text-balance">
            {finalCta.headlinePart1}
            <br />
            <span className="bg-gradient-to-r from-brand via-brand-glow to-brand-deep bg-clip-text text-transparent">
              {finalCta.headlinePart2}
            </span>
          </h2>

          <p className="mt-8 text-xl text-secondary text-pretty">
            {finalCta.subheadline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.3, ease: e }}
            className="mt-12 inline-flex"
          >
            <Link
              href={finalCta.cta.href}
              className="btn-primary text-base h-14 px-9"
            >
              {finalCta.cta.label}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
