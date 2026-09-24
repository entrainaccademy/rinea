import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Rinea",
  description: "Contact Rinea for product, order, and jewellery care enquiries.",
};

export default function ContactPage() {
  return (
    <main className="post-hero min-h-screen bg-paper pt-24">
      <section className="px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-olive/15 bg-[#EEE9DD] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between bg-olive p-8 text-paper sm:p-12 lg:min-h-[720px] lg:p-16">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#F0CB7F]">
                Contact Rinea
              </p>
              <h1 className="max-w-md text-5xl font-semibold leading-[0.95] text-[#F7EEDC] sm:text-6xl">
                We would love to hear from you
              </h1>
              <p className="mt-7 max-w-md text-lg font-medium leading-relaxed text-paper">
                Ask us about a piece, an order, delivery, returns, or caring for your jewellery.
              </p>
            </div>

            <div className="mt-16 border-t border-paper/20 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F0CB7F]">Customer care</p>
              <p className="mt-3 max-w-sm text-xl font-medium leading-relaxed text-paper">
                Share as much detail as you can and our team will help you with the next step.
              </p>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#F0CB7F]">Based in</p>
              <p className="mt-2 text-xl font-semibold text-paper">Malappuram, Kerala</p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-paper p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#754C15]">Find us on Instagram</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#303318] sm:text-5xl">Message Rinea directly</h2>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#303318]">
              Send us a direct message for product questions, order support, delivery help, or jewellery care.
            </p>

            <div className="mt-10 border-y border-olive/15 py-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#754C15]">Instagram</p>
              <p className="mt-2 font-serif text-3xl font-semibold text-[#303318]">@rinea__com</p>
            </div>

            <a
              href="https://www.instagram.com/rinea__com/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-between bg-olive px-6 py-4 text-lg font-semibold text-paper transition-colors hover:bg-[#79531D] sm:w-auto sm:min-w-72"
            >
              Open Instagram
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-3">
          {[
            ["Shipping & delivery", "Estimated delivery in 2–5 days.", "/shipping"],
            ["Returns & exchanges", "Read our final sale and order issue policy.", "/returns"],
            ["Jewellery care", "Simple ways to protect your jewellery.", "/jewellery-care"],
          ].map(([title, description, href]) => (
            <Link key={href} href={href} className="group border border-olive/15 bg-[#EEE9DD] p-6 transition-colors hover:border-[#79531D] sm:p-8">
              <h2 className="text-2xl font-semibold text-olive">{title}</h2>
              <p className="mt-3 text-base font-medium leading-relaxed text-[#303318]">{description}</p>
              <span className="mt-6 inline-block border-b border-[#79531D] text-sm font-semibold uppercase tracking-[0.14em] text-[#79531D]">Read more</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
