import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Rinea",
  description: "Contact Rinea for product, order, and jewellery care enquiries.",
};

export default function ContactPage() {
  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-24">
      <section className="px-5 py-10 sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-olive/15 bg-[#EEE9DD] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex flex-col justify-between overflow-hidden p-7 text-paper sm:p-10 lg:min-h-[580px] lg:p-12">
            <Image
              src="/images/reference4.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[58%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#252713]/80 to-[#252713]/95" />

            <div className="relative z-10">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-[#F6D58E]">
                Contact Rinea
              </p>
              <h1 className="max-w-md text-4xl font-semibold leading-[1] text-[#F7EEDC] sm:text-5xl">
                We would love to hear from you
              </h1>
              <p className="mt-5 max-w-md text-base font-semibold leading-relaxed text-white">
                Ask us about a piece, an order, delivery, returns, or caring for your jewellery.
              </p>
            </div>

            <div className="relative z-10 mt-12 border-t border-paper/30 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F6D58E]">Customer care</p>
              <p className="mt-3 max-w-sm text-lg font-semibold leading-relaxed text-white">
                Share as much detail as you can and our team will help you with the next step.
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#F6D58E]">Based in</p>
              <p className="mt-2 text-lg font-semibold text-white">Malappuram, Kerala</p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-paper p-7 sm:p-10 lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#633B0B]">Find us on Instagram</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#252713] sm:text-4xl">Message Rinea directly</h2>
            <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-[#252713]">
              Send us a direct message for product questions, order support, delivery help, or jewellery care.
            </p>

            <div className="mt-8 border-y border-olive/15 py-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#633B0B]">Instagram</p>
              <p className="mt-2 font-serif text-2xl font-semibold text-[#252713]">@rinea__com</p>
            </div>

            <a
              href="https://www.instagram.com/rinea__com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-between bg-olive px-6 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-[#79531D] sm:w-auto sm:min-w-72"
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
            <Link key={href} href={href} className="group border border-olive/15 bg-[#EEE9DD] p-5 transition-colors hover:border-[#79531D] sm:p-6">
              <h2 className="text-xl font-semibold text-olive">{title}</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#252713] sm:text-base">{description}</p>
              <span className="mt-5 inline-block border-b border-[#633B0B] text-xs font-bold uppercase tracking-[0.14em] text-[#633B0B]">Read more</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
