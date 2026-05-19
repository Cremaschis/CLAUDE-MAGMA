"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { content } from "@/lib/content";
import { easings } from "@/lib/motion";

const e = easings.outExpo;

export function HeroSection() {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-lava-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(178,34,34,0.08),transparent_70%)]" />

      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-24">
          {/* Copy side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: e }}
              className="flex"
            >
              <span className="eyebrow">
                <span className="size-1 rounded-full bg-brand animate-pulse" />
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: e }}
              className="mt-6 text-hero text-balance"
            >
              {hero.headlinePart1}
              <br />
              <span className="bg-gradient-to-r from-brand via-brand-glow to-brand-deep bg-clip-text text-transparent">
                {hero.headlinePart2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.25, ease: e }}
              className="mt-6 max-w-lg text-lg text-secondary text-pretty leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: e }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href={hero.secondaryCta.href} className="btn-secondary">
                <PlayCircle className="size-4" strokeWidth={1.5} />
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-xs text-tertiary"
            >
              {hero.trust.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-success" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Video side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: e }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Glow halo */}
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-brand/40 via-brand-deep/20 to-transparent opacity-60 blur-2xl" />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-elevated">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/videos/hero-poster.jpg"
                className="absolute inset-0 size-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>

              {/* Fallback visual si no hay video */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/30 via-base to-base flex items-center justify-center -z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center mb-4">
                    <div className="size-32 rounded-full bg-gradient-to-br from-brand to-brand-deep blur-2xl opacity-80" />
                  </div>
                  <p className="font-mono text-xs text-tertiary uppercase tracking-wider">
                    Video placeholder
                  </p>
                </div>
              </div>

              {/* Dark overlay para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Inner glow ring */}
              <motion.div
                className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-brand/30 pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Floating data badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: e }}
              className="absolute -bottom-5 left-4 md:left-6 rounded-2xl border border-white/[0.06] bg-elevated/90 px-5 py-3.5 backdrop-blur-premium shadow-premium-card"
            >
              <div className="flex items-center gap-4">
                {hero.stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    {i > 0 && <div className="h-8 w-px bg-white/10" />}
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold tabular-nums text-primary leading-none">
                        {stat.value}
                        <span className="text-sm text-secondary ml-0.5">{stat.suffix}</span>
                      </span>
                      <span className="mt-1.5 text-[10px] uppercase tracking-wider text-tertiary">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
