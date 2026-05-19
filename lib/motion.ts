/**
 * Easings y durations consistentes en todo el sitio.
 * outExpo es el rey de los reveals premium.
 */

export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOutCubic: [0.4, 0, 0.2, 1] as [number, number, number, number],
  snappy: [0.4, 0, 0, 1] as [number, number, number, number],
};

export const durations = {
  fast: 0.2,
  base: 0.4,
  medium: 0.7,
  slow: 1.0,
  glacial: 1.4,
};

export const viewportConfig = {
  once: true,
  margin: "-100px" as const,
};

// Variantes reutilizables
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.outExpo },
  },
};

export const staggerContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
