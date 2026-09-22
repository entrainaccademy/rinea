import Link from "next/link";

export default function WhyAntiTarnish() {
  return (
    <section className="flex flex-col items-center gap-4 bg-olive px-6 py-24 text-center">
      <h2 className="font-heading text-3xl text-paper">Why anti-tarnish?</h2>
      <p className="max-w-md font-sans text-paper/70">
        Our pieces are layered to resist water, sweat, and everyday wear —
        so the shine you fell for is the shine that stays.
      </p>
      <Link
        href="/why-anti-tarnish"
        className="font-sans text-sm tracking-wide text-gold underline underline-offset-4 hover:text-paper"
      >
        Learn more
      </Link>
    </section>
  );
}
