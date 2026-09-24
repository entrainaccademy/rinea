import Footer from "@/components/Footer";
import CartPageClient from "@/components/cart/CartPageClient";

export const metadata = {
  title: "Shopping Cart | Rinea",
  description: "Review the jewellery pieces in your Rinea shopping cart.",
};

export default function CartPage() {
  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-24">
      <section className="px-4 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <CartPageClient />
        </div>
      </section>
      <Footer />
    </main>
  );
}
