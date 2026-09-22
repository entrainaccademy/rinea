import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col gap-3">
      <PlaceholderImage
        label={product.material}
        className="aspect-square w-full"
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-lg text-olive">{product.name}</h3>
        <p className="font-sans text-sm text-olive/60">{product.price}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-gold/40 px-2.5 py-0.5 font-sans text-xs text-olive/70"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
