"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

export default function AddToCartButton({ productSlug }) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!isAdded) return undefined;
    const timer = window.setTimeout(() => setIsAdded(false), 1800);
    return () => window.clearTimeout(timer);
  }, [isAdded]);

  return (
    <button
      type="button"
      onClick={() => {
        addItem(productSlug);
        setIsAdded(true);
      }}
      className="border border-gold bg-gold px-6 py-3 text-center font-sans text-xs font-bold uppercase tracking-[0.14em] text-olive transition-colors hover:border-olive hover:bg-olive hover:text-paper sm:px-8 sm:py-4 sm:text-sm"
    >
      {isAdded ? "Added to cart ✓" : "Add to cart"}
    </button>
  );
}
