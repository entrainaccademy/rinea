import Link from "next/link";
import Wordmark from "@/components/Wordmark";

const navItems = ["Shop", "Collections", "About", "Contact"];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-olive/10 bg-paper px-6 py-4 sm:px-10">
      <Link href="/">
        <Wordmark className="text-2xl" />
      </Link>
      <nav className="hidden gap-8 font-sans text-sm tracking-wide text-olive/70 sm:flex">
        {navItems.map((item) => (
          <span key={item} className="cursor-default">
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
}
