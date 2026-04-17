import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  id: string;
  product: Product;
  size: string | null;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, size: string | null) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "tcp-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string | null) => {
    const lineId = `${product.id}-${size ?? "one"}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === lineId);
      if (existing) {
        return prev.map((i) => (i.id === lineId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { id: lineId, product, size, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return removeItem(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const clear = () => setItems([]);

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear, subtotal, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
