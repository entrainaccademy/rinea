import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/lib/placeholder-data";

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col gap-10 px-6 py-24 sm:px-10">
      <h2 className="text-center font-heading text-3xl text-olive">
        Featured pieces
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
