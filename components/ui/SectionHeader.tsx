"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { easings, viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easings.outExpo } },
          }}
          className={align === "center" ? "flex justify-center" : ""}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
      )}

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easings.outExpo } },
        }}
        className="mt-4 text-display text-primary text-balance"
      >
        {headline}
      </motion.h2>

      {subheadline && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easings.outExpo } },
          }}
          className="mt-5 text-lg text-secondary text-pretty leading-relaxed"
        >
          {subheadline}
        </motion.p>
      )}
    </motion.div>
  );
}
