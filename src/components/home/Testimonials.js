const testimonials = [
  {
    quote: "The pieces feel light, look polished, and work with everything I wear. I keep reaching for them every morning.",
    name: "Ananya S.",
    product: "Everyday jewellery set",
  },
  {
    quote: "I love how easy the jewellery is to style. It gives a dressed-up finish without feeling too formal.",
    name: "Meera R.",
    product: "Layered necklace",
  },
  {
    quote: "Beautiful details, comfortable on my skin, and the pricing made it easy to choose more than one piece.",
    name: "Diya K.",
    product: "Bracelet collection",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper px-4 py-14 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#754C15]">
            Customer stories
          </p>
          <h2 className="text-4xl font-semibold text-[#303318] sm:text-5xl">
            Loved on repeat
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex min-h-0 flex-col justify-between border border-olive/15 bg-[#EEE9DD] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_45px_rgba(74,78,42,0.10)] sm:min-h-72 sm:p-8"
            >
              <div>
                <div className="mb-4 flex items-start justify-between sm:mb-6">
                  <span className="text-sm tracking-widest text-[#A8782D]" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  <span className="text-4xl leading-none text-gold/60 sm:text-5xl">“</span>
                </div>
                <blockquote className="text-lg leading-relaxed text-[#303318] sm:text-2xl">
                  {testimonial.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-olive/10 pt-4 sm:mt-10 sm:pt-5">
                <p className="text-base font-semibold text-[#303318] sm:text-lg">{testimonial.name}</p>
                <p className="mt-1 text-sm text-olive/75">{testimonial.product}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
