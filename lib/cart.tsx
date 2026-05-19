"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  flavor: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  shopifyVariantId?: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, flavor: string) => void;
  updateQuantity: (id: string, flavor: string, quantity: number) => void;
  total: number;
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const raw = localStorage.getItem("magma-cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);
  useEffect(() => {
    localStorage.setItem("magma-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity">) => setItems((prev) => {
    const idx = prev.findIndex((p) => p.id === item.id && p.flavor === item.flavor);
    if (idx >= 0) {
      const next = [...prev];
      next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
      return next;
    }
    return [...prev, { ...item, quantity: 1 }];
  });
  const removeItem = (id: string, flavor: string) => setItems((p) => p.filter((i) => !(i.id===id && i.flavor===flavor)));
  const updateQuantity = (id: string, flavor: string, quantity: number) => setItems((p) => p.map((i)=>i.id===id&&i.flavor===flavor?{...i, quantity}:i).filter((i)=>i.quantity>0));

  const total = useMemo(() => items.reduce((acc, i) => acc + i.price * i.quantity, 0), [items]);
  const count = useMemo(() => items.reduce((acc, i) => acc + i.quantity, 0), [items]);

  return <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total, count, isOpen, openCart: ()=>setIsOpen(true), closeCart: ()=>setIsOpen(false) }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatARS(value: number): string {
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);
}

export async function checkoutItems(items: CartItem[]): Promise<string> {
  const { createShopifyCheckout } = await import("./shopify");
  const lines = items
    .filter((i) => i.shopifyVariantId)
    .map((i) => ({ merchandiseId: i.shopifyVariantId!, quantity: i.quantity }));
  return createShopifyCheckout(lines);
}
