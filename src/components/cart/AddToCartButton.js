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
      className="bg-olive px-8 py-4 text-center text-lg font-semibold text-paper transition-colors hover:bg-gold hover:text-olive"
    >
      {isAdded ? "Added to cart ✓" : "Add to cart"}
    </button>
  );
}
