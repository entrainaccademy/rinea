import Link from "next/link";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "New arrivals", href: "/catalog" },
      { label: "Rings", href: "/catalog?category=rings" },
      { label: "Necklaces", href: "/catalog?category=necklaces" },
      { label: "Earrings", href: "/catalog?category=earrings" },
      { label: "Watches", href: "/catalog?category=watches" },
    ],
  },
  {
    heading: "Need help?",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Shipping & delivery", href: "/shipping" },
      { label: "Returns & exchanges", href: "/returns" },
      { label: "Jewellery care", href: "/jewellery-care" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    heading: "Rinea",
    links: [
      { label: "Our materials", href: "/materials" },
      { label: "Why anti-tarnish", href: "/why-anti-tarnish" },
      { label: "Contact", href: "/contact" },
      { label: "Instagram", href: "/instagram" },
      { label: "Pinterest", href: "/pinterest" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-olive px-6 pb-8 pt-16 text-paper sm:px-10 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-paper/15 pb-16 lg:grid-cols-[1.2fr_1.8fr] lg:gap-24 lg:pb-20">
          <div>
            <Link href="/" aria-label="Rinea home" className="inline-block">
              <span
                aria-hidden="true"
                className="block h-36 w-60 bg-[#E2BE75] sm:h-44 sm:w-72"
                style={{
                  maskImage: "url('/rinea-transparent.png')",
                  WebkitMaskImage: "url('/rinea-transparent.png')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />
            </Link>
            <p className="max-w-sm text-2xl leading-relaxed text-paper/80">
              Jewellery made for real life, designed to stay beautiful through every day.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-12">
            {columns.map((column) => (
              <div key={column.heading}>
                <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-gold">
                  {column.heading}
                </h2>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-lg text-paper/70 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rinea. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
