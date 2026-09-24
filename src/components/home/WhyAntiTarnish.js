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
    <section id="materials" className="grid scroll-mt-20 bg-olive sm:scroll-mt-24 lg:grid-cols-2">
      <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden sm:aspect-[4/5] sm:min-h-[480px] lg:aspect-auto lg:min-h-[760px]">
        <Image
          src="/images/reference5.png"
          alt="Gold rings arranged beside spilled coffee"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center px-5 py-12 text-paper sm:px-12 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
        <div className="w-full max-w-xl">
          <h2 className="text-4xl font-semibold leading-[0.95] sm:text-6xl">
            Made to be worn, not stored
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/80 sm:mt-6 sm:text-lg">
            Beautiful jewellery for real life—easy on your skin, your routine, and your budget.
          </p>

          <div className="mt-8 border-t border-paper/20 sm:mt-12">
            {benefits.map(([title, description]) => (
              <article
                key={title}
                className="grid gap-1 border-b border-paper/20 py-3.5 sm:grid-cols-[12rem_1fr] sm:items-center sm:gap-6 sm:py-5"
              >
                <h3 className="flex items-center gap-3 text-xl font-semibold text-paper sm:text-2xl">
                  <span className="h-2 w-2 rotate-45 bg-gold" />
                  {title}
                </h3>
                <p className="pl-5 text-sm leading-relaxed text-paper/80 sm:pl-0 sm:text-base">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/catalog"
            className="mt-7 inline-flex border-b border-gold pb-1 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:border-paper hover:text-paper sm:mt-10 sm:text-sm"
          >
            Explore the collection
          </Link>
        </div>
      </div>
    </section>
  );
}
