import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { products as fallbackProducts } from "@/lib/placeholder-data";
import { getProducts } from "@/lib/products";

const qualities = ["Anti-tarnish", "Waterproof", "Hypoallergenic", "Made for daily wear"];

export function generateStaticParams() {
  return fallbackProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const sameCategoryProducts = products.filter(
    (item) => item.slug !== product.slug && item.category === product.category,
  );
  const otherProducts = products.filter(
    (item) => item.slug !== product.slug && item.category !== product.category,
  );
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 4);

  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-28">
      <section className="px-4 pb-10 pt-4 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden sm:border sm:border-olive/15 sm:bg-[#ebe5d9] lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-[88%] overflow-hidden sm:min-h-[620px] sm:w-full lg:aspect-auto lg:min-h-[720px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <Link
              href={`/catalog?category=${product.category}`}
              className="absolute left-3 top-3 bg-paper/90 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-olive backdrop-blur-sm transition-colors hover:bg-olive hover:text-paper sm:left-7 sm:top-7 sm:px-4 sm:text-xs sm:tracking-[0.16em]"
            >
              ← Back to collection
            </Link>
          </div>

          <div className="flex flex-col justify-center bg-paper px-3 py-8 sm:p-12 lg:p-16">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#754C15] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              {product.category.replace("-", " ")}
            </p>
            <h1 className="text-2xl font-semibold leading-tight text-olive sm:text-5xl sm:leading-none">
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-[#79531D] sm:mt-6 sm:text-3xl">{product.price}</p>

            <div className="mt-6 lg:hidden">
              <AddToCartButton productSlug={product.slug} />
            </div>

            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-olive/90 sm:mt-8 sm:text-xl">
              {product.description}
            </p>

            <div className="mt-5 flex items-center gap-2.5 border-y border-olive/15 py-3 text-sm font-semibold text-olive sm:mt-6 sm:gap-3 sm:text-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 shrink-0 text-[#79531D]" aria-hidden="true">
                <path d="M3 7h11v10H3zM14 10h3l4 4v3h-7z" strokeWidth="1.4" strokeLinejoin="round" />
                <circle cx="7" cy="19" r="1.5" strokeWidth="1.4" />
                <circle cx="18" cy="19" r="1.5" strokeWidth="1.4" />
              </svg>
              <span>Estimated delivery: 2–5 days</span>
            </div>

            <ul className="mt-7 grid grid-cols-2 border-l border-t border-olive/15 sm:mt-10">
              {qualities.map((quality) => (
                <li key={quality} className="border-b border-r border-olive/15 p-3 text-sm font-medium text-olive sm:p-4 sm:text-lg">
                  {quality}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-10">
              <div className="hidden lg:block">
                <AddToCartButton productSlug={product.slug} />
              </div>
              <Link
                href="/catalog"
                className="self-start border border-olive bg-olive/[0.06] px-6 py-3 text-center font-sans text-xs font-bold uppercase tracking-[0.12em] text-olive transition-colors hover:bg-olive hover:text-paper sm:px-8 sm:py-4 sm:text-sm"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE8DC] px-4 py-14 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center sm:mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#754C15]">
              Complete your edit
            </p>
            <h2 className="text-4xl font-semibold text-olive sm:text-5xl">
              You may also like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 sm:gap-x-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
