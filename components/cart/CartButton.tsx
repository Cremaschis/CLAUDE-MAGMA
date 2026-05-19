"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button onClick={openCart} className="relative inline-flex items-center justify-center size-10 rounded-lg hover:bg-white/5 transition-colors" aria-label="Abrir carrito">
      <ShoppingCart className="size-5" />
      {count > 0 && <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-brand text-[10px] font-bold text-white flex items-center justify-center">{count}</span>}
    </button>
  );
}
