"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { content } from "@/lib/content";
import { easings } from "@/lib/motion";
import { cn } from "@/lib/utils";

const e = easings.outExpo;

export function FAQSection() {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="container-narrow">
        <SectionHeader eyebrow={faq.eyebrow} headline={faq.headline} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: e }}
          className="mt-16 border-t border-white/[0.06]"
        >
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left -mx-4 px-4 rounded-lg hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:bg-white/[0.03]"
                >
                  <h3
                    className={cn(
                      "text-lg md:text-xl font-medium tracking-tight transition-colors flex-1",
                      isOpen ? "text-primary" : "text-secondary group-hover:text-primary"
                    )}
                  >
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: e }}
                    className={cn(
                      "flex-shrink-0 size-9 rounded-full flex items-center justify-center transition-colors duration-300",
                      isOpen
                        ? "bg-brand text-primary"
                        : "bg-surface text-secondary group-hover:bg-elevated"
                    )}
                  >
                    <Plus className="size-4" strokeWidth={2.5} aria-hidden />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: e },
                        opacity: { duration: 0.25, ease: e },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 pr-14">
                        <p className="text-base md:text-lg text-secondary leading-relaxed text-pretty">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
