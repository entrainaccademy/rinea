import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { categories } from "@/lib/placeholder-data";

export default function CategoryTiles() {
  return (
    <section className="flex flex-col gap-10 bg-olive/[0.03] px-6 py-24 sm:px-10">
      <h2 className="text-center font-heading text-3xl text-olive">
        Shop by category
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/catalog?category=${category.slug}`}
            className="group flex flex-col gap-3"
          >
            <PlaceholderImage
              label={category.label}
              className="aspect-square w-full"
            />
            <span className="text-center font-sans text-sm tracking-wide text-olive">
              {category.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
