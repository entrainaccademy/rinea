"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = ["Shop", "Collections", "About", "Contact"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-20 flex h-20 items-center justify-between px-6 transition-colors duration-300 sm:h-24 sm:px-10 ${isScrolled ? "border-b border-olive/10 bg-paper shadow-sm" : "bg-linear-to-b from-black/35 to-transparent"}`}>
      <Link href="/">
        <Image
          src="/rinea-transparent.png"
          alt="Rinea"
          width={702}
          height={449}
          priority
          className={`h-32 w-auto transition-[filter] duration-300 sm:h-40 ${isScrolled ? "" : "brightness-0 invert"}`}
        />
      </Link>
      <nav className="hidden gap-8 font-sans text-sm tracking-wide text-gold sm:flex">
        {navItems.map((item) => (
          <span key={item} className="cursor-default">
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
}
