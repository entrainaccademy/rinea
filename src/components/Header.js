"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/placeholder-data";
import { useCart } from "@/components/cart/CartProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isDesktopCollectionOpen, setIsDesktopCollectionOpen] = useState(false);
  const { itemCount } = useCart();

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

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsCollectionOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const hasSolidHeader = isScrolled || isCollectionOpen || isDesktopCollectionOpen;

  return (
    <header className={`fixed inset-x-0 top-0 z-20 flex h-20 items-center justify-between border-b border-olive/10 bg-paper px-5 shadow-sm transition-colors duration-300 sm:h-24 sm:px-10 ${hasSolidHeader ? "lg:bg-paper" : "lg:border-transparent lg:bg-transparent lg:shadow-none"}`}>
      <Link href="/">
        <span className="relative ml-2 block h-[45px] w-[110px] overflow-hidden lg:hidden">
          <Image
            src="/rinea-transparent.png"
            alt="Rinea"
            width={702}
            height={449}
            className="absolute -left-[47px] -top-10 h-32 w-[200px] max-w-none"
          />
        </span>
        {hasSolidHeader ? (
          <Image
            src="/rinea-transparent.png"
            alt="Rinea"
            width={702}
            height={449}
            className="hidden h-40 w-auto lg:block"
          />
        ) : (
          <span
            role="img"
            aria-label="Rinea"
            className="hidden h-40 w-[250px] bg-gold lg:block"
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
      <nav className={`flex items-center gap-3 font-sans text-sm tracking-wide text-olive sm:gap-5 lg:gap-7 ${hasSolidHeader ? "lg:text-olive" : "lg:text-gold"}`}>
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="transition-opacity hover:opacity-65">Home</Link>
          <div
            className="py-9"
            onMouseEnter={() => setIsDesktopCollectionOpen(true)}
            onMouseLeave={() => setIsDesktopCollectionOpen(false)}
            onFocus={() => setIsDesktopCollectionOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsDesktopCollectionOpen(false);
              }
            }}
          >
            <Link href="/catalog" className="flex items-center gap-1.5 transition-opacity hover:opacity-65">
              Collection
              <svg viewBox="0 0 12 12" fill="none" className={`h-3 w-3 transition-transform ${isDesktopCollectionOpen ? "rotate-180" : ""}`}>
                <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div
              className={`fixed inset-x-0 top-24 border-y border-olive/10 bg-paper text-olive shadow-[0_18px_45px_rgba(37,40,21,0.12)] transition-all duration-300 ${isDesktopCollectionOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-[0.8fr_2.2fr] gap-14 px-10 py-10 xl:px-4">
                <div className="border-r border-olive/15 pr-12">
                  <p className="mb-3 font-semibold text-xs uppercase tracking-[0.24em] text-[#754C15]">Our collection</p>
                  <p className="font-serif text-4xl leading-tight">Find your everyday piece</p>
                  <Link
                    href="/catalog"
                    onClick={() => setIsDesktopCollectionOpen(false)}
                    className="mt-7 inline-block border-b border-[#754C15] pb-1 font-semibold text-xs uppercase tracking-[0.18em] text-[#754C15] transition-colors hover:border-olive hover:text-olive"
                  >
                    View all pieces
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-x-10">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/catalog?category=${category.slug}`}
                      onClick={() => setIsDesktopCollectionOpen(false)}
                      className="group/item flex items-center justify-between border-b border-olive/20 py-4 font-serif text-xl transition-colors hover:text-[#754C15]"
                    >
                      {category.label}
                      <span aria-hidden="true" className="translate-x-0 text-base opacity-45 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact" className="transition-opacity hover:opacity-65">Contact</Link>
        </div>

        <Link href="/cart" aria-label={`Cart with ${itemCount} items`} className="relative p-1 transition-opacity hover:opacity-65">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
            <path d="M3 4h2l2.2 10.2a2 2 0 002 1.6h7.9a2 2 0 001.9-1.4L21 8H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1" fill="currentColor" stroke="none" />
            <circle cx="18" cy="20" r="1" fill="currentColor" stroke="none" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9A6724] px-1 text-[10px] font-semibold leading-none text-paper">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </Link>

        <Link href="/account" aria-label="Profile" className="hidden p-1 transition-opacity hover:opacity-65 lg:block">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
            <circle cx="12" cy="8" r="3.5" strokeWidth="1.5" />
            <path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Link>

        <button
          type="button"
          aria-expanded={isCollectionOpen}
          aria-controls="mobile-navigation"
          aria-label={isCollectionOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsCollectionOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform ${isCollectionOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-6 bg-current transition-opacity ${isCollectionOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-px w-6 bg-current transition-transform ${isCollectionOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full flex h-[calc(100svh-5rem)] flex-col overflow-y-auto border-t border-olive/10 bg-paper px-5 text-olive shadow-xl transition-all duration-200 sm:h-[calc(100svh-6rem)] lg:hidden ${isCollectionOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
      >
        <div className="grid grid-cols-3 border-b border-olive/15 py-3 text-center">
          <Link href="/" onClick={() => setIsCollectionOpen(false)} className="py-2 font-serif text-lg">Home</Link>
          <Link href="/contact" onClick={() => setIsCollectionOpen(false)} className="border-x border-olive/15 py-2 font-serif text-lg">Contact</Link>
          <Link href="/account" onClick={() => setIsCollectionOpen(false)} className="py-2 font-serif text-lg">Profile</Link>
        </div>
        <div className="flex items-center justify-between border-b border-olive/15 py-4">
          <p className="font-serif text-2xl font-semibold">Collection</p>
          <Link href="/catalog" onClick={() => setIsCollectionOpen(false)} className="font-semibold text-xs uppercase tracking-[0.14em] text-[#754C15]">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-3 border-b border-olive/15 py-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/catalog?category=${category.slug}`}
              onClick={() => setIsCollectionOpen(false)}
              className="flex min-h-16 items-center justify-center border-b border-r border-olive/10 px-2 py-3 text-center font-serif text-base leading-tight [&:nth-child(3n)]:border-r-0"
            >
              {category.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto py-5">
          <Link href="/cart" onClick={() => setIsCollectionOpen(false)} className="flex items-center justify-between bg-olive px-5 py-4 font-serif text-xl text-paper">
            <span>Shopping cart</span>
            <span>{itemCount} {itemCount === 1 ? "item" : "items"}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
