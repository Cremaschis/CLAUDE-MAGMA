"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export function MarqueeSection() {
  const doubled = [...content.marquee, ...content.marquee];

  return (
    <section
      className="relative border-y border-white/[0.06] overflow-hidden py-6 md:py-8 bg-elevated/40"
      aria-hidden
    >
      <div className="mask-fade-x overflow-hidden">
        <motion.div
          className="flex items-center gap-10 md:gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-16 shrink-0">
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-ultra-tight text-primary whitespace-nowrap">
                {item}
              </span>
              <span className="text-brand text-2xl md:text-4xl lg:text-5xl select-none" aria-hidden>
                ·
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
