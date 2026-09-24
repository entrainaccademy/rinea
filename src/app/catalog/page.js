import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { categories, products } from "@/lib/placeholder-data";

export const metadata = {
  title: "Collection | Rinea",
  description: "Explore the Rinea jewellery collection.",
};

export default async function CatalogPage({ searchParams }) {
  const { category } = await searchParams;
  const activeCategory = typeof category === "string" ? category : "all";
  const visibleProducts = activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory);

  const activeLabel = categories.find((item) => item.slug === activeCategory)?.label;

  return (
    <main className="post-hero min-h-screen bg-[#EFE8DC] pt-24 sm:pt-28">
      <section className="px-4 pb-24 pt-16 sm:px-10 sm:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-2xl sm:mb-16">
            <p className="mb-3 hidden text-sm font-semibold uppercase tracking-[0.25em] text-[#754C15] sm:block">
              The collection
            </p>
            <h1 className="text-5xl font-semibold leading-none text-olive sm:text-7xl">
              {activeLabel || "Find your next favourite"}
            </h1>
            <p className="mt-5 hidden text-lg leading-relaxed text-olive/85 sm:block">
              Everyday jewellery with thoughtful details, lasting shine, and prices made to feel good.
            </p>
          </div>

          {visibleProducts.length ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-olive/15 px-6 py-20 text-center">
              <h2 className="text-3xl font-semibold text-olive">More pieces are coming soon</h2>
              <Link href="/catalog" className="mt-5 inline-block border-b border-[#754C15] text-lg text-[#754C15]">
                View the full collection
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
