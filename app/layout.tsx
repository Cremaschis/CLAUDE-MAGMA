import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { CartProvider } from "@/lib/cart";

// Fallback si no se quiere instalar el package `geist`:
// import { Inter, JetBrains_Mono } from "next/font/google";
// const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
// const geistMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://magma.ar"),
  title: {
    default: "MAGMA — Focus Anywhere.",
    template: "%s · MAGMA",
  },
  description:
    "100mg de cafeína instantánea en un pouch de bolsillo. Sin azúcar. Sin nicotina. Sin preparación.",
  keywords: ["cafeína", "focus", "performance", "energía", "pouches", "MAGMA"],
  authors: [{ name: "MAGMA" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://magma.ar",
    siteName: "MAGMA",
    title: "MAGMA — Focus Anywhere.",
    description:
      "100mg de cafeína instantánea en un pouch de bolsillo. Sin azúcar. Sin nicotina. Sin preparación.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "MAGMA — Focus Anywhere.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGMA — Focus Anywhere.",
    description: "100mg de cafeína instantánea en un pouch de bolsillo.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-base text-primary antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
