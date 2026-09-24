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
      <section className="px-4 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden border border-olive/15 bg-[#ebe5d9] lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden sm:min-h-[620px] lg:min-h-[720px]">
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
              className="absolute left-5 top-5 bg-paper/90 px-4 py-2 text-xs uppercase tracking-[0.16em] text-olive backdrop-blur-sm transition-colors hover:bg-olive hover:text-paper sm:left-7 sm:top-7"
            >
              ← Back to collection
            </Link>
          </div>

          <div className="flex flex-col justify-center bg-paper p-7 sm:p-12 lg:p-16">
            <p className="mb-4 font-semibold text-sm uppercase tracking-[0.2em] text-[#754C15]">
              {product.category.replace("-", " ")}
            </p>
            <h1 className="text-5xl font-semibold leading-none text-olive sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 text-3xl font-semibold text-[#79531D]">{product.price}</p>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-olive/85">
              {product.description}
            </p>

            <ul className="mt-10 grid grid-cols-2 border-l border-t border-olive/15">
              {qualities.map((quality) => (
                <li key={quality} className="border-b border-r border-olive/15 p-4 text-lg text-olive">
                  {quality}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton productSlug={product.slug} />
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
