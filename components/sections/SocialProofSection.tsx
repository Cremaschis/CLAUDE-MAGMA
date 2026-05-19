"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { content } from "@/lib/content";
import { easings, viewportConfig } from "@/lib/motion";

const e = easings.outExpo;

function formatCount(n: number): string {
  if (n < 1000) return n.toString();
  if (n < 10000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
  return `${Math.floor(n / 1000)}k`;
}

interface Testimonial {
  name: string;
  handle: string;
  role: string;
  text: string;
  likes: number;
  replies: number;
  timestamp: string;
  verified?: boolean;
}

function UGCCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const initial = testimonial.name.charAt(0).toUpperCase();

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: e } },
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group premium-card p-6 md:p-7 flex flex-col h-full"
    >
      <header className="flex items-start gap-3 mb-5">
        <div className="size-11 rounded-full bg-gradient-to-br from-surface to-elevated ring-2 ring-white/10 flex items-center justify-center text-primary font-semibold text-base group-hover:ring-brand/40 transition-all duration-300 shrink-0">
          {initial}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-semibold text-primary truncate">
              {testimonial.name}
            </h4>
            {testimonial.verified && (
              <BadgeCheck
                className="h-4 w-4 text-brand flex-shrink-0"
                fill="currentColor"
                stroke="var(--bg-elevated)"
                aria-label="Verificado"
              />
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-tertiary truncate">
            <span className="font-mono">{testimonial.handle}</span>
            <span className="text-disabled">·</span>
            <span className="truncate">{testimonial.role}</span>
          </div>
        </div>
      </header>

      <blockquote className="flex-1 mb-5">
        <p className="text-base text-primary leading-relaxed text-pretty">
          {testimonial.text}
        </p>
      </blockquote>

      <footer className="flex items-center gap-4 text-xs text-tertiary pt-4 border-t border-white/[0.06]">
        <span className="inline-flex items-center gap-1.5">
          <Heart className="h-3.5 w-3.5" aria-hidden />
          <span className="tabular-nums">{formatCount(testimonial.likes)}</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
          <span className="tabular-nums">{formatCount(testimonial.replies)}</span>
        </span>
        <span className="ml-auto">{testimonial.timestamp}</span>
      </footer>
    </motion.article>
  );
}

export function SocialProofSection() {
  const { socialProof } = content;

  return (
    <section className="relative py-24 md:py-36">
      <div className="section-container">
        <SectionHeader
          eyebrow={socialProof.eyebrow}
          headline={socialProof.headline}
          subheadline={socialProof.subheadline}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {socialProof.testimonials.map((t, i) => (
            <UGCCard key={t.handle} testimonial={t as Testimonial} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
