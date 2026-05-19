/**
 * Todo el copy del sitio MAGMA centralizado.
 * Cualquier cambio editorial se hace acá, sin tocar componentes.
 */

export const content = {
  brand: {
    name: "MAGMA",
    tagline: "Focus Anywhere.",
    description:
      "100mg de cafeína instantánea en un pouch de bolsillo. Sin azúcar. Sin nicotina. Sin preparación.",
  },

  nav: {
    links: [
      { label: "Ritual", href: "#ritual" },
      { label: "Beneficios", href: "#benefits" },
      { label: "Comprar", href: "#shop" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Pedir Ya", href: "#shop" },
  },

  hero: {
    eyebrow: "PERFORMANCE FUEL",
    headlinePart1: "Focus",
    headlinePart2: "Anywhere.",
    subheadline:
      "100mg de cafeína instantánea en un pouch de bolsillo. Sin azúcar. Sin nicotina. Sin preparación.",
    primaryCta: { label: "Pedir MAGMA", href: "#shop" },
    secondaryCta: { label: "Ver Cómo Funciona", href: "#ritual" },
    stats: [
      { value: "100", suffix: "mg", label: "Cafeína instant." },
      { value: "5", suffix: "min", label: "Activación" },
    ],
    trust: ["Envío 24-48hs", "Stock disponible"],
  },

  marquee: ["FOCUS ANYWHERE", "GYM", "FINALES", "GAMING", "OFICINA", "VIAJES"],

  benefits: {
    eyebrow: "PERFORMANCE BENEFITS",
    headline: "Diseñado para los que no esperan.",
    subheadline:
      "Cada pouch está pensado para activar focus inmediato. Nada más, nada menos.",
    items: [
      {
        icon: "Zap",
        label: "100mg cafeína",
        description: "Liberación instantánea. Pico de focus en 5 minutos.",
      },
      {
        icon: "Ban",
        label: "Cero azúcar",
        description: "Sin crash. Sin compromiso glucémico.",
      },
      {
        icon: "ShieldOff",
        label: "Cero nicotina",
        description: "Energía limpia. No es un sustituto de tabaco.",
      },
      {
        icon: "Flame",
        label: "Cero calorías",
        description: "Compatible con cualquier dieta o protocolo.",
      },
      {
        icon: "Sparkles",
        label: "Sin preparación",
        description: "Abrí. Colocá. Listo. Sin agua, sin shaker.",
      },
      {
        icon: "Wallet",
        label: "Portable total",
        description: "Cabe donde sea. Funciona donde sea.",
      },
    ],
  },

  useCases: {
    eyebrow: "BUILT FOR ANY MOMENT",
    headline: "Donde estés. Cuando lo necesites.",
    items: [
      {
        tag: "GYM",
        title: "Para el primer set.",
        description:
          "Antes de la sesión. Sin pre-workout que te deja shakeado. Sin agua, sin shaker.",
      },
      {
        tag: "ESTUDIO",
        title: "Para los maratones.",
        description:
          "Finales, deep work, sesiones largas. Focus que no se cae al café 3 de la mañana.",
      },
      {
        tag: "GAMING",
        title: "Para las 3am.",
        description:
          "Streams largos, ranked sessions, late nights. Reflejos intactos, sin temblequera.",
      },
      {
        tag: "OFICINA",
        title: "Para las reuniones largas.",
        description:
          "Cuando la cuarta café del día ya no rinde. Sin pausa, sin caer en la pos-almuerzo.",
      },
    ],
  },

  ritual: {
    eyebrow: "THE NEW ENERGY RITUAL",
    headline: "Tres pasos. Modo focus.",
    subheadline:
      "Diseñado para activarse en segundos. Sin agua. Sin shaker. Sin esperar.",
    steps: [
      {
        number: "01",
        title: "Abrí.",
        description: "Sacá un pouch de la lata. Discreto, sin ruido, sin desorden.",
      },
      {
        number: "02",
        title: "Colocá.",
        description:
          "Encajalo entre la encía superior y el labio. Sin saliva extra, sin masticar.",
      },
      {
        number: "03",
        title: "Enfocate.",
        description:
          "Sentí la activación en 5 minutos. Focus sostenido durante 60-90 min.",
      },
    ],
  },

  comparison: {
    eyebrow: "EL NUEVO ESTÁNDAR",
    headline: "Diseñado para reemplazar el ritual. No para sumar uno más.",
    subheadline:
      "MAGMA vs. los rituales clásicos de energía. Cada decisión pensada para el que rinde.",
    brandName: "MAGMA",
    competitors: ["Café", "Energéticas", "Pre-workouts"],
    rows: [
      {
        attribute: "Activación",
        brand: "5 min",
        competitors: ["20 min", "10 min", "30 min"],
      },
      {
        attribute: "Duración",
        brand: "90 min",
        competitors: ["60 min", "45 min", "120 min"],
      },
      {
        attribute: "Azúcar",
        brand: "0g",
        competitors: ["0-15g", "27g típico", "0-10g"],
      },
      {
        attribute: "Calorías",
        brand: "0",
        competitors: ["5", "110", "80+"],
      },
      { attribute: "Crash", brand: "no", competitors: ["partial", "yes", "yes"] },
      {
        attribute: "Portátil",
        brand: "yes",
        competitors: ["no", "partial", "no"],
      },
      {
        attribute: "Preparación",
        brand: "no",
        competitors: ["yes", "no", "yes"],
      },
    ],
  },

  socialProof: {
    eyebrow: "REAL PEOPLE · REAL FOCUS",
    headline: "Lo bancan los que rinden.",
    subheadline:
      "Más de 8,000 personas ya activaron su ritual. Estos son algunos de ellos.",
    testimonials: [
      {
        name: "Juani M.",
        handle: "@juanim.fit",
        role: "Crossfit · Caballito",
        text:
          "Literal el único focus que funciona en 5 min antes de entrenar. Sin pre-workout que te deja roto. Lo banco.",
        likes: 2340,
        replies: 89,
        timestamp: "hace 2d",
        verified: true,
      },
      {
        name: "Sofi R.",
        handle: "@sofirose",
        role: "Medicina · UBA",
        text:
          "Estoy en finales y cambió el game. Cero azúcar, cero temblequera, no necesito frenar a hacerme café cada dos horas.",
        likes: 5612,
        replies: 234,
        timestamp: "hace 5d",
      },
      {
        name: "Tomi K.",
        handle: "@tomik.gaming",
        role: "Twitch streamer · Belgrano",
        text:
          "Streams hasta las 5am sin que se me caiga el aim. Y no es como un Speed que te deja roto al otro día. Está fina.",
        likes: 1820,
        replies: 67,
        timestamp: "hace 1sem",
        verified: true,
      },
      {
        name: "Pancho V.",
        handle: "@panchovega",
        role: "Founder · CABA",
        text:
          "Las llamadas de 3hs con inversores ya no me cuestan. Activo uno antes y zafo perfecto. Discreto, profesional.",
        likes: 894,
        replies: 42,
        timestamp: "hace 3d",
      },
      {
        name: "Mai L.",
        handle: "@mailaurean",
        role: "Diseñadora · Palermo",
        text:
          "Probé en una entrega larga y zarpado. No es la euforia rara del café, es como destrabar el cerebro. Sigo.",
        likes: 1240,
        replies: 38,
        timestamp: "hace 4d",
      },
      {
        name: "Nacho F.",
        handle: "@nachofierro",
        role: "Trail runner · Bariloche",
        text:
          "Lo metí en mochila para una salida de 6hs. No pesa, no se moja, no se rompe. Activé en el km 25 y rendí hasta el final.",
        likes: 3105,
        replies: 156,
        timestamp: "hace 1sem",
        verified: true,
      },
    ],
  },

  offer: {
    eyebrow: "STARTER PACK",
    headline: "Empezá tu ritual.",
    subheadline: "Dos sabores. 40 pouches. Todo lo que necesitás para activar focus durante un mes.",
    productName: "MAGMA Starter",
    productDescription: "2 latas · 2 sabores · 40 pouches de 100mg",
    flavors: [
      { name: "Menta", description: "Menta fría, limpio", shopifyVariantId: "" },
      { name: "Cherry", description: "Cherry intenso, final fresco", shopifyVariantId: "" },
    ],
    price: "24.99",
    priceCurrency: "USD",
    priceOriginal: "29.99",
    cta: { label: "Pedir Starter Pack", href: "#" },
    reassurance: "Envío gratis en órdenes de $30+  ·  Garantía de satisfacción",
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Lo que todos preguntan.",
    items: [
      {
        question: "¿Qué es MAGMA exactamente?",
        answer:
          "Un pouch de cafeína para uso oral. Se coloca entre la encía superior y el labio, y libera 100mg de cafeína directo al torrente sanguíneo en minutos. Sin agua, sin azúcar, sin preparación.",
      },
      {
        question: "¿Cuánta cafeína tiene cada pouch?",
        answer:
          "100mg por pouch. Aproximadamente lo mismo que un espresso doble, pero sin la caída brusca ni el ritual de preparación.",
      },
      {
        question: "¿Tiene nicotina o tabaco?",
        answer:
          "No. MAGMA es exclusivamente cafeína. No es ni se parece a un producto de tabaco o nicotina. No genera dependencia química más allá de la tolerancia normal a la cafeína.",
      },
      {
        question: "¿En cuánto tiempo siento el efecto?",
        answer:
          "La activación llega entre 5 y 10 minutos. Es absorción sublingual directa — más rápida que un café, sin esperar la digestión.",
      },
      {
        question: "¿Cuánto dura?",
        answer:
          "El pico de focus se sostiene entre 60 y 90 minutos. La cafeína sigue activa hasta 3-4 horas, pero sin el crash brusco de las energéticas.",
      },
      {
        question: "¿Cuántos puedo usar por día?",
        answer:
          "Recomendamos no superar los 4 pouches diarios (400mg de cafeína), siguiendo las guías sanitarias estándar. Si sos sensible a la cafeína, empezá con 1 al día.",
      },
      {
        question: "¿Es seguro? ¿Tiene contraindicaciones?",
        answer:
          "Diseñado para adultos sanos. No recomendamos consumo en menores de 18, embarazadas, lactantes, o personas con condiciones cardíacas, hipertensión o trastornos de ansiedad. Si tomás medicación, consultá con tu médico antes.",
      },
      {
        question: "¿Cómo se hace el envío?",
        answer:
          "Envíos en CABA y GBA entre 24 y 48hs. Interior del país: 2 a 5 días hábiles según localidad. Envío gratis en pedidos mayores a $30 USD.",
      },
    ],
  },

  finalCta: {
    eyebrow: "PERFORMANCE STARTS HERE",
    headlinePart1: "Focus",
    headlinePart2: "Anywhere.",
    subheadline: "Activá tu próximo nivel. Empezá tu ritual.",
    cta: { label: "Pedir MAGMA", href: "#shop" },
  },

  footer: {
    tagline: "Focus Anywhere.",
    links: {
      product: [
        { label: "Comprar", href: "#shop" },
        { label: "Ritual", href: "#ritual" },
        { label: "FAQ", href: "#faq" },
      ],
      company: [
        { label: "Sobre MAGMA", href: "#" },
        { label: "Contacto", href: "mailto:hola@magma.ar" },
      ],
      legal: [
        { label: "Términos", href: "#" },
        { label: "Privacidad", href: "#" },
      ],
    },
    copyright: `© ${new Date().getFullYear()} MAGMA. Hecho en Argentina.`,
  },
} as const;
