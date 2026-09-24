import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { products } from "@/lib/placeholder-data";

const qualities = ["Anti-tarnish", "Waterproof", "Hypoallergenic", "Made for daily wear"];

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <main className="post-hero min-h-screen bg-paper pt-24 sm:pt-28">
      <section className="px-4 py-10 sm:px-10 sm:py-24">
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#754C15] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              {product.category.replace("-", " ")}
            </p>
            <h1 className="text-4xl font-semibold leading-none text-olive sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-[#79531D] sm:mt-6 sm:text-3xl">{product.price}</p>

            <div className="mt-6 lg:hidden">
              <AddToCartButton productSlug={product.slug} />
            </div>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-olive/85 sm:mt-8 sm:text-xl">
              {product.description}
            </p>

            <ul className="mt-7 grid grid-cols-2 border-l border-t border-olive/15 sm:mt-10">
              {qualities.map((quality) => (
                <li key={quality} className="border-b border-r border-olive/15 p-3 text-base text-olive sm:p-4 sm:text-lg">
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
                className="border border-olive/25 px-8 py-4 text-center text-lg text-olive transition-colors hover:border-olive"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
