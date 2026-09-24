import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/lib/placeholder-data";

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col gap-12 bg-paper px-4 py-24 sm:px-10 sm:py-28">
      <div className="text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#754C15]">
          Curated for you
        </p>
        <h2 className="text-4xl font-semibold text-olive sm:text-5xl">
          Featured pieces
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-14">
        {featuredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
