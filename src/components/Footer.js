import Link from "next/link";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "Rings", href: "/catalog?category=rings" },
      { label: "Necklaces", href: "/catalog?category=necklaces" },
      { label: "Earrings", href: "/catalog?category=earrings" },
      { label: "Bracelets", href: "/catalog?category=bracelets" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why anti-tarnish", href: "/why-anti-tarnish" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 border-t border-olive/10 bg-paper px-6 py-16 sm:px-10">
      <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
        <span className="font-heading text-xl text-olive">Rinea</span>
        <div className="flex flex-wrap gap-16">
          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <span className="font-sans text-xs uppercase tracking-wider text-olive/50">
                {column.heading}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-olive/70 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="font-sans text-xs text-olive/40">
        © {new Date().getFullYear()} Rinea. All rights reserved.
      </p>
    </footer>
  );
}
