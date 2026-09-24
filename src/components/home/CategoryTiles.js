import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/placeholder-data";

function CategoryCard({ category, desktop = false }) {
  return (
    <Link
      href={`/catalog?category=${category.slug}`}
      className={`group flex flex-col gap-3 ${desktop ? "w-[280px] shrink-0 lg:w-[320px]" : "min-w-0"}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-sm border border-gold/20 bg-olive/10">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes={desktop ? "(max-width: 1024px) 280px, 320px" : "50vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <span className="text-center text-xl text-[#B18436] lg:text-2xl">
        {category.label}
      </span>
    </Link>
  );
}

export default function CategoryTiles() {
  const homeCategories = categories.filter((category) => category.showOnHome !== false);

  return (
    <section id="shop-by-category" className="flex scroll-mt-20 flex-col gap-10 overflow-hidden bg-olive/[0.03] pb-16 pt-24 sm:scroll-mt-24 sm:pb-20 sm:pt-28">
      <div className="px-6 text-center sm:px-10">
        <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#754C15]">
          Find your piece
        </p>
        <h2 className="text-4xl font-medium text-olive sm:text-5xl">
          Shop by category
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-8 px-4 sm:gap-x-5 sm:px-6 md:hidden">
        {homeCategories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      <div className="category-carousel hidden overflow-hidden md:block">
        <div className="category-track flex w-max">
          {[0, 1].map((group) => (
            <div key={group} aria-hidden={group === 1} className="flex shrink-0 gap-6 pr-6">
              {homeCategories.map((category) => (
                <CategoryCard key={`${group}-${category.slug}`} category={category} desktop />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
