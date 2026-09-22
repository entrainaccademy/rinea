import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-12 px-6 py-16 sm:grid-cols-2 sm:gap-16 sm:px-10 sm:py-24">
      <div className="flex flex-col items-start gap-6 text-left">
        <Wordmark className="text-3xl sm:text-4xl" />
        <h1 className="max-w-md font-heading text-4xl leading-tight text-olive sm:text-5xl">
          Fine jewellery that never fades
        </h1>
        <Link
          href="/catalog"
          className="rounded-full bg-olive px-8 py-3 font-sans text-sm tracking-wide text-paper transition-colors hover:bg-gold hover:text-olive"
        >
          Shop the collection
        </Link>
      </div>
      <PlaceholderImage
        label="Hero image"
        className="aspect-4/5 w-full order-first sm:order-last"
      />
    </section>
  );
}
