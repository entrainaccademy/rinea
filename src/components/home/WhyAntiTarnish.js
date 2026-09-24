import Image from "next/image";
import Link from "next/link";

const benefits = [
  ["Stainless steel", "Durable, strong, and made to last."],
  ["Anti-tarnish", "Keeps its glow for longer."],
  ["Waterproof", "Splash and sweat ready."],
  ["Hypoallergenic", "Gentle on sensitive skin."],
  ["Everyday comfort", "Light enough for daily wear."],
  ["Fairly priced", "Beautiful style within reach."],
];

export default function WhyAntiTarnish() {
  return (
    <section className="grid bg-olive lg:grid-cols-2">
      <div className="relative aspect-[4/5] min-h-[480px] overflow-hidden lg:aspect-auto lg:min-h-[760px]">
        <Image
          src="/images/reference5.png"
          alt="Gold rings arranged beside spilled coffee"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center px-6 py-20 text-paper sm:px-12 lg:px-16 lg:py-24 xl:px-24">
        <div className="w-full max-w-xl">
          <h2 className="text-5xl font-semibold leading-[0.95] sm:text-6xl">
            Made to be worn, not stored
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
            Beautiful jewellery for real life—easy on your skin, your routine, and your budget.
          </p>

          <div className="mt-12 border-t border-paper/20">
            {benefits.map(([title, description]) => (
              <article
                key={title}
                className="grid gap-2 border-b border-paper/20 py-5 sm:grid-cols-[12rem_1fr] sm:items-center sm:gap-6"
              >
                <h3 className="flex items-center gap-3 text-2xl font-semibold text-paper">
                  <span className="h-2 w-2 rotate-45 bg-gold" />
                  {title}
                </h3>
                <p className="pl-5 text-base leading-relaxed text-paper/65 sm:pl-0">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/catalog"
            className="mt-10 inline-flex border-b border-gold pb-1 text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:border-paper hover:text-paper"
          >
            Explore the collection
          </Link>
        </div>
      </div>
    </section>
  );
}
