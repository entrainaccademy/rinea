"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { products } from "@/lib/placeholder-data";

function priceAsNumber(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CartPageClient() {
  const { items, isReady, itemCount, updateQuantity, removeItem } = useCart();
  const cartProducts = items.flatMap((item) => {
    const product = products.find((candidate) => candidate.slug === item.slug);
    return product ? [{ ...product, quantity: item.quantity }] : [];
  });
  const subtotal = cartProducts.reduce(
    (total, product) => total + priceAsNumber(product.price) * product.quantity,
    0,
  );

  if (!isReady) {
    return <div className="min-h-[420px] animate-pulse bg-olive/5" aria-label="Loading cart" />;
  }

  if (!cartProducts.length) {
    return (
      <div className="border border-olive/15 px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#754C15]">Your cart</p>
        <h1 className="mt-4 text-5xl font-semibold text-olive sm:text-6xl">Your cart is empty</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-olive/80">
          Explore the collection and add the pieces you love.
        </p>
        <Link href="/catalog" className="mt-8 inline-block bg-olive px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-[#79531D]">
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr] lg:items-start">
      <div>
        <div className="mb-7 flex items-end justify-between border-b border-olive/15 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#754C15]">Your selection</p>
            <h1 className="mt-2 text-5xl font-semibold text-olive sm:text-6xl">Shopping cart</h1>
          </div>
          <p className="hidden text-lg font-semibold text-olive sm:block">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
        </div>

        <div className="divide-y divide-olive/15">
          {cartProducts.map((product) => (
            <article key={product.slug} className="grid grid-cols-[105px_1fr] gap-5 py-6 sm:grid-cols-[150px_1fr_auto] sm:gap-7">
              <Link href={`/product/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-olive/5">
                <Image src={product.image} alt={product.name} fill sizes="150px" className="object-cover transition-transform duration-500 hover:scale-105" />
              </Link>

              <div className="min-w-0 py-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#69400F]">{product.category.replace("-", " ")}</p>
                <Link href={`/product/${product.slug}`} className="mt-2 block font-serif text-2xl font-semibold text-olive hover:text-[#79531D]">
                  {product.name}
                </Link>
                <p className="mt-2 text-lg font-semibold text-[#79531D] sm:hidden">{product.price}</p>

                <div className="mt-5 flex items-center gap-4">
                  <div className="flex items-center border border-olive/45" aria-label={`Quantity for ${product.name}`}>
                    <button type="button" onClick={() => updateQuantity(product.slug, product.quantity - 1)} className="h-10 w-10 text-xl font-semibold text-olive transition-colors hover:bg-olive hover:text-paper" aria-label="Decrease quantity">−</button>
                    <span className="flex h-10 min-w-10 items-center justify-center border-x border-olive/35 text-base font-semibold text-olive">{product.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(product.slug, product.quantity + 1)} className="h-10 w-10 text-xl text-olive transition-colors hover:bg-olive hover:text-paper" aria-label="Increase quantity">+</button>
                  </div>
                  <button type="button" onClick={() => removeItem(product.slug)} className="border-b border-olive/60 text-base font-medium text-olive transition-colors hover:border-[#79531D] hover:text-[#79531D]">
                    Remove
                  </button>
                </div>
              </div>

              <p className="hidden py-1 text-xl font-semibold text-[#79531D] sm:block">
                {formatPrice(priceAsNumber(product.price) * product.quantity)}
              </p>
            </article>
          ))}
        </div>
      </div>

      <aside className="sticky top-32 bg-olive p-7 text-paper sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F0CB7F]">Order summary</p>
        <div className="mt-7 space-y-4 border-b border-paper/20 pb-7 text-lg">
          <div className="flex justify-between gap-5"><span className="font-medium text-paper">Subtotal</span><span className="font-semibold">{formatPrice(subtotal)}</span></div>
          <div className="flex justify-between gap-5"><span className="font-medium text-paper">Delivery</span><span className="font-medium">Calculated later</span></div>
        </div>
        <div className="flex justify-between gap-5 py-7 text-2xl font-semibold"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
        <p className="text-base font-medium leading-relaxed text-paper/90">Taxes and delivery charges are confirmed at checkout.</p>
        <button type="button" disabled className="mt-7 w-full cursor-not-allowed bg-[#E2BE75] px-6 py-4 text-lg font-semibold text-olive">
          Checkout coming soon
        </button>
        <Link href="/catalog" className="mt-5 block text-center text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:text-[#F0CB7F]">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
