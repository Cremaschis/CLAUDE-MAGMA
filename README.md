# MAGMA — Focus Anywhere

Landing site para MAGMA, marca argentina de caffeine pouches premium.

**Tagline:** Focus Anywhere.
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Setup rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar dev server
npm run dev
```

Abrí http://localhost:3000 en el navegador.

## Estructura

```
magma-site/
├── app/
│   ├── layout.tsx       # Root layout (fonts, metadata, theme)
│   ├── page.tsx         # Landing principal que ensambla todas las secciones
│   └── globals.css      # Tailwind + tokens custom + utilities
├── components/
│   ├── ui/              # Primitivos reutilizables
│   │   ├── Button.tsx
│   │   ├── Eyebrow.tsx
│   │   └── SectionHeader.tsx
│   ├── layout/
│   │   ├── Header.tsx   # Sticky nav con mobile menu
│   │   └── Footer.tsx
│   └── sections/        # Las 9 secciones de la landing
│       ├── HeroSection.tsx
│       ├── MarqueeSection.tsx
│       ├── BenefitsSection.tsx
│       ├── UseCasesSection.tsx
│       ├── RitualSection.tsx
│       ├── ComparisonSection.tsx
│       ├── SocialProofSection.tsx
│       ├── OfferSection.tsx
│       ├── FAQSection.tsx
│       └── FinalCTASection.tsx
├── lib/
│   ├── content.ts       # Todo el copy centralizado (editá acá)
│   ├── motion.ts        # Easings y durations consistentes
│   └── utils.ts         # cn() helper
└── public/
    ├── videos/          # hero.mp4 (subir asset propio)
    └── images/
```

## Editar el copy

Todo el copy está en `lib/content.ts`. Cambiá ahí — los componentes son agnósticos.

```ts
// lib/content.ts
export const content = {
  brand: {
    name: "MAGMA",
    tagline: "Focus Anywhere.",
    // ...
  },
  // ...
};
```

## Reemplazar el video del hero

1. Conseguí o exportá un video corto (~5-10s, loop, sin audio)
2. Optimizalo a ~1-3MB con [Handbrake](https://handbrake.fr) o ffmpeg:
   ```bash
   ffmpeg -i input.mov -c:v libx264 -crf 28 -preset slow -an public/videos/hero.mp4
   ```
3. Generá un poster (primer frame) en `public/videos/hero-poster.jpg`
4. Listo — el hero ya apunta a `/videos/hero.mp4`

Si no hay video, el hero muestra un placeholder con glow atmosférico — el sitio funciona igual.

## Diseño · principios

Esta landing sigue el lenguaje de marcas premium-performance (WHOOP, Nike, ZYN, Apple):

- **Dark por default**, lava (#FF4500) como acento — < 10% del viewport
- **Geist** como font única (Sans + Mono via `geist` package)
- **Tracking ultra-tight** en headlines, easing `cubic-bezier(0.16, 1, 0.3, 1)` en reveals
- **Mobile-first** real — todo se ve perfecto en 380px
- **Copy en voseo argentino** ("lo banco", "literal", "está fina")
- **Cero** dark patterns: sin pop-ups, sin countdowns fake, sin star ratings genéricos

## Performance targets

- LCP < 2.5s
- CLS < 0.1
- Bundle inicial < 150KB gzipped
- Lighthouse ≥ 95 en todas las métricas

## Próximos pasos

- [ ] Subir el video real del hero
- [ ] Conectar un backend para el CTA (Stripe Checkout, Shopify, etc.)
- [ ] Agregar OG image en `app/opengraph-image.tsx`
- [ ] Configurar analytics (Vercel Analytics o Plausible)
- [ ] Deploy en Vercel: `vercel --prod`

---

Hecho con la skill `premium-brand-websites`. Para iterar o regenerar secciones, instalá la skill en Claude y mencioná MAGMA.
