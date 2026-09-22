"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = ["Shop", "Collections", "About", "Contact"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const hero = document.getElementById("home-hero");
      setIsScrolled(!hero || hero.getBoundingClientRect().bottom <= 96);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-20 flex h-20 items-center justify-between px-6 transition-colors duration-300 sm:h-24 sm:px-10 ${isScrolled ? "border-b border-olive/10 bg-paper shadow-sm" : "bg-linear-to-b from-black/35 to-transparent"}`}>
      <Link href="/">
        {isScrolled ? (
          <Image
            src="/rinea-transparent.png"
            alt="Rinea"
            width={702}
            height={449}
            className="h-32 w-auto sm:h-40"
          />
        ) : (
          <span
            role="img"
            aria-label="Rinea"
            className="block h-32 w-[200px] bg-gold sm:h-40 sm:w-[250px]"
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
        )}
      </Link>
      <nav className={`hidden gap-8 font-sans text-sm tracking-wide sm:flex ${isScrolled ? "text-olive" : "text-gold"}`}>
        {navItems.map((item) => (
          <span key={item} className="cursor-default">
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
}
