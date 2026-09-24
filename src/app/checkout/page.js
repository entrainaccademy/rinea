import Footer from "@/components/Footer";
import CheckoutPageClient from "@/components/checkout/CheckoutPageClient";

export const metadata = {
  title: "Delivery Details | Rinea",
  description: "Enter your delivery details and continue your Rinea order on WhatsApp.",
};

export default function CheckoutPage() {
  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-24">
      <section className="px-4 py-6 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <CheckoutPageClient />
        </div>
      </section>
      <Footer />
    </main>
  );
}
