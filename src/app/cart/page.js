import Footer from "@/components/Footer";
import CartPageClient from "@/components/cart/CartPageClient";
import { getProducts } from "@/lib/products";

export const metadata = {
  title: "Shopping Cart | Rinea",
  description: "Review the jewellery pieces in your Rinea shopping cart.",
};

export default async function CartPage() {
  const products = await getProducts();
  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-24">
      <section className="px-4 py-8 sm:px-10 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <CartPageClient products={products} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
