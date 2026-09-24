"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useEffect, useState } from "react";

const editorialFont = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const slides = [
  { desktop: "/images/herolandscape1.png", mobile: "/images/heroimg3.jpg", alt: "Gold rings styled with a rose" },
  { desktop: "/images/herolandscape4.png", mobile: "/images/heroimg2.jpg", alt: "Gold jewellery styled across several hands" },
  { desktop: "/images/herolandscape3.png", mobile: "/images/heroimg1.jpg", alt: "Layered gold necklaces, rings, and bracelets" },
  { desktop: "/images/herolandsacpe2.png", mobile: "/images/heroimg4.jpg", alt: "Statement rings and a pearl earring in warm light" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home-hero" aria-label="Rinea jewellery collection" className="relative mt-16 h-[calc(100svh-4rem)] min-h-[520px] overflow-hidden bg-olive sm:mt-24 sm:h-[calc(100svh-6rem)] sm:min-h-0 lg:mt-0 lg:h-auto lg:aspect-video">
      <div
        className="absolute inset-0 flex h-full w-full transition-transform duration-500 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={`${slide.desktop}-${index}`} className="relative h-full min-w-full">
            <Image
              src={slide.mobile}
              alt={slide.alt}
              fill
              priority={index === 0}
              unoptimized
              sizes="100vw"
              className="object-cover sm:hidden"
            />
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              priority={index === 0}
              unoptimized
              sizes="100vw"
              className="hidden object-cover sm:block"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent sm:bg-linear-to-r sm:from-black/25 sm:via-transparent" />

      <div className="pointer-events-none absolute inset-0 flex items-end px-6 pb-24 sm:items-center sm:px-12 sm:pb-0 lg:px-20">
        <div className="max-w-2xl text-[#E8D3A2]">
          <h1 className={`${editorialFont.className} text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[6rem]`}>
            <span className="block">Jewellery for</span>
            <span className="block whitespace-nowrap">every moment</span>
          </h1>
          <p className="mt-5 hidden max-w-sm font-sans text-sm leading-relaxed text-[#E8D3A2] sm:block sm:text-base">
            Thoughtful pieces made to shine with you, day after day.
          </p>
          <Link
            href="#shop-by-category"
            className="pointer-events-auto mt-7 inline-block border-b border-[#E8D3A2] pb-1 font-sans text-xs uppercase tracking-[0.2em] text-[#E8D3A2] transition-opacity hover:opacity-70"
          >
            Shop the collection
          </Link>
        </div>
      </div>

    </section>
  );
}
