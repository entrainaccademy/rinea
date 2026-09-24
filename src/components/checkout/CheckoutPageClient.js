"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { products } from "@/lib/placeholder-data";

const RINEA_WHATSAPP_NUMBER = "919539637133";

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

const fields = [
  { name: "customerName", label: "Name", autoComplete: "name" },
  { name: "houseName", label: "House name", autoComplete: "address-line1" },
  { name: "landmark", label: "Landmark", autoComplete: "address-line2" },
  { name: "city", label: "City", autoComplete: "address-level2" },
  { name: "district", label: "District", autoComplete: "address-level1" },
  { name: "pincode", label: "Pincode", autoComplete: "postal-code", inputMode: "numeric", pattern: "[0-9]{6}", maxLength: 6 },
  { name: "contactNumber", label: "Contact number", autoComplete: "tel", inputMode: "tel", pattern: "[0-9]{10}", maxLength: 10 },
];

export default function CheckoutPageClient() {
  const { items, isReady } = useCart();
  const cartProducts = items.flatMap((item) => {
    const product = products.find((candidate) => candidate.slug === item.slug);
    return product ? [{ ...product, quantity: item.quantity }] : [];
  });
  const subtotal = cartProducts.reduce(
    (total, product) => total + priceAsNumber(product.price) * product.quantity,
    0,
  );

  function continueOnWhatsApp(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const orderLines = cartProducts.map((product, index) => {
      const lineTotal = priceAsNumber(product.price) * product.quantity;
      return `${index + 1}. ${product.name} × ${product.quantity} — ${formatPrice(lineTotal)}\nView product: ${window.location.origin}/product/${product.slug}`;
    });
    const message = [
      "Hello Rinea, I would like to place an order.",
      "",
      "CUSTOMER DETAILS",
      `Name: ${data.get("customerName")}`,
      `House name: ${data.get("houseName")}`,
      `Landmark: ${data.get("landmark")}`,
      `City: ${data.get("city")}`,
      `District: ${data.get("district")}`,
      `Pincode: ${data.get("pincode")}`,
      `Contact number: ${data.get("contactNumber")}`,
      "",
      "ORDER DETAILS",
      ...orderLines,
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      "Estimated delivery: 2–5 days",
    ].join("\n");
    const recipient = RINEA_WHATSAPP_NUMBER ? `${RINEA_WHATSAPP_NUMBER}/` : "";
    window.location.assign(`https://wa.me/${recipient}?text=${encodeURIComponent(message)}`);
  }

  if (!isReady) {
    return <div className="min-h-[420px] animate-pulse bg-olive/5" aria-label="Loading order details" />;
  }

  if (!cartProducts.length) {
    return (
      <div className="border border-olive/15 px-6 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#754C15]">Your order</p>
        <h1 className="mt-3 text-3xl font-semibold text-olive sm:text-5xl">Your cart is empty</h1>
        <Link href="/catalog" className="mt-7 inline-block bg-olive px-7 py-3 font-sans text-xs font-bold uppercase tracking-[0.14em] text-paper">
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#653700]">Delivery details</p>
        <h1 className="mt-2 text-2xl font-bold text-[#242B12] sm:text-5xl">Where should we deliver?</h1>
        <p className="mt-2 max-w-2xl text-sm font-bold leading-relaxed text-[#303618] sm:mt-3 sm:text-lg">
          Enter your address below. Your details and order will be prepared as a WhatsApp message.
        </p>

        <form onSubmit={continueOnWhatsApp} className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-5">
          {fields.map((field) => (
            <label key={field.name} className={field.name === "landmark" || field.name === "houseName" ? "sm:col-span-2" : ""}>
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-[#3A2A12] sm:mb-2 sm:text-sm">{field.label}</span>
              <input
                required
                name={field.name}
                type="text"
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                pattern={field.pattern}
                maxLength={field.maxLength}
                className="w-full border border-[#77795B] bg-[#FAF8F2] px-3 py-2 text-base font-bold text-[#20250F] outline-none transition-colors focus:border-[#6B3F09] focus:ring-1 focus:ring-[#6B3F09]/25 sm:px-4 sm:py-3 sm:text-lg"
              />
            </label>
          ))}

          <button type="submit" className="mt-1 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#1F260F] transition-colors hover:bg-olive hover:text-paper sm:col-span-2 sm:mt-2 sm:px-6 sm:py-4 sm:text-base">
            Continue on WhatsApp
          </button>
        </form>
      </div>

      <aside className="relative h-fit overflow-hidden border border-[#B99A62]/60 bg-[#E9DFCF] p-5 text-[#242B12] sm:p-8 lg:sticky lg:top-32">
        <Image
          src="/images/necklace_category.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-[#F0E8DA]/90" />
        <div className="relative z-10">
        <div className="flex items-end justify-between border-b border-olive/20 pb-5">
          <div>
            <p className="text-2xl font-bold uppercase tracking-[0.12em] text-[#303818] sm:text-3xl">Order summary</p>
            <h2 className="mt-1 text-xl font-bold text-[#20250F] sm:mt-2 sm:text-2xl">Your pieces</h2>
          </div>
          <Link href="/cart" className="border-b border-[#653700] text-xs font-bold uppercase tracking-[0.1em] text-[#653700]">Edit cart</Link>
        </div>

        <ul className="divide-y divide-olive/15">
          {cartProducts.map((product) => (
            <li key={product.slug} className="flex justify-between gap-3 py-3 sm:gap-5 sm:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-14 w-12 shrink-0 overflow-hidden border border-[#8D7A53]/30 bg-paper sm:h-16 sm:w-14">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-bold leading-tight text-[#20250F] sm:text-lg">{product.name}</p>
                  <p className="mt-1 text-xs font-bold text-[#434728] sm:text-sm">Quantity: {product.quantity}</p>
                </div>
              </div>
              <p className="shrink-0 text-base font-bold text-[#653700] sm:text-lg">
                {formatPrice(priceAsNumber(product.price) * product.quantity)}
              </p>
            </li>
          ))}
        </ul>

        <div className="-mx-2 flex justify-between border-t border-[#8D7A53]/35 bg-gold/20 px-2 pb-2 pt-4 text-lg font-bold text-[#20250F] sm:pt-5 sm:text-xl">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        </div>
      </aside>
    </div>
  );
}
