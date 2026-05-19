"use client";

import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { checkoutItems, formatARS, useCart } from "@/lib/cart";

export function CartDrawer() {
  const { items, total, isOpen, closeCart, removeItem, updateQuantity } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  async function handleCheckout() {
    setCheckoutError(null);
    setIsCheckingOut(true);
    try {
      const checkoutUrl = await checkoutItems(items);
      window.location.href = checkoutUrl;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Algo salió mal. Probá de nuevo.");
      setIsCheckingOut(false);
    }
  }

  if (!isOpen) return null;

  return <div className="fixed inset-0 z-[70] bg-black/60" onClick={closeCart}>
    <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-base border-l border-white/10 p-6" onClick={(e)=>e.stopPropagation()}>
      <div className="flex items-center justify-between mb-6"><h3 className="text-xl font-semibold">Tu carrito</h3><button onClick={closeCart}><X className="size-5" /></button></div>
      <div className="space-y-4">
        {items.map((item) => <div key={`${item.id}-${item.flavor}`} className="border border-white/10 rounded-lg p-3">
          <p className="font-medium">{item.name}</p><p className="text-sm text-tertiary">{item.flavor}</p>
          <div className="mt-2 flex items-center justify-between"><p>{formatARS(item.price * item.quantity)}</p>
            <div className="flex items-center gap-2"><button onClick={()=>updateQuantity(item.id,item.flavor,item.quantity-1)}><Minus className="size-4"/></button><span>{item.quantity}</span><button onClick={()=>updateQuantity(item.id,item.flavor,item.quantity+1)}><Plus className="size-4"/></button><button onClick={()=>removeItem(item.id,item.flavor)} className="text-xs text-tertiary">Quitar</button></div></div>
        </div>)}
      </div>
      <div className="mt-6 border-t border-white/10 pt-4"><div className="flex justify-between mb-3"><span>Total</span><strong>{formatARS(total)}</strong></div>
        {checkoutError && <p className="text-xs text-brand bg-brand/10 border border-brand/20 rounded-lg px-3 py-2 mb-3">{checkoutError}</p>}
        <button onClick={handleCheckout} disabled={isCheckingOut} className="btn-primary w-full disabled:opacity-50 disabled:pointer-events-none">{isCheckingOut ? <><span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Procesando...</> : <>Ir al checkout<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></>}</button>
      </div>
    </aside>
  </div>;
}
