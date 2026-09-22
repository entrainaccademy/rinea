import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 px-6 py-24 sm:grid-cols-2 sm:gap-16 sm:px-10">
      <PlaceholderImage label="Rinea" className="aspect-4/5 w-full" />
      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-3xl text-olive">Our story</h2>
        <p className="max-w-sm font-sans text-olive/70">
          Rinea was born from a simple idea: jewellery you can wear every day,
          without the upkeep.
        </p>
        <Link
          href="/about"
          className="font-sans text-sm tracking-wide text-olive underline underline-offset-4 hover:text-gold"
        >
          Read more
        </Link>
      </div>
    </section>
  );
}
