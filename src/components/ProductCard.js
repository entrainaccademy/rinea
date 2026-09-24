import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex min-w-0 flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-olive/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 639px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute inset-x-4 bottom-4 translate-y-3 bg-olive/90 py-2.5 text-center text-sm text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View piece
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 border-b border-olive/10 pb-4">
        <div className="min-w-0">
          <h3 className="truncate text-xl font-semibold text-olive sm:text-2xl">
            {product.name}
          </h3>
        </div>
        <p className="shrink-0 text-lg font-semibold text-[#79531D]">
          {product.price}
        </p>
      </div>
    </Link>
  );
}
