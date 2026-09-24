"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "rinea-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) setItems(parsedCart);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (isReady) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [isReady, items]);

  const value = useMemo(() => ({
    items,
    isReady,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    addItem(slug) {
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.slug === slug);
        if (existingItem) {
          return currentItems.map((item) => item.slug === slug
            ? { ...item, quantity: item.quantity + 1 }
            : item);
        }
        return [...currentItems, { slug, quantity: 1 }];
      });
    },
    updateQuantity(slug, quantity) {
      if (quantity < 1) {
        setItems((currentItems) => currentItems.filter((item) => item.slug !== slug));
        return;
      }
      setItems((currentItems) => currentItems.map((item) => item.slug === slug
        ? { ...item, quantity }
        : item));
    },
    removeItem(slug) {
      setItems((currentItems) => currentItems.filter((item) => item.slug !== slug));
    },
    clearCart() {
      setItems([]);
    },
  }), [isReady, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
