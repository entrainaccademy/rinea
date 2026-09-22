"use client";

import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { useEffect, useState } from "react";

const editorialFont = Cormorant_Garamond({ subsets: ["latin"], weight: "500" });

const slides = [
  { desktop: "/images/herolandscape3.png", mobile: "/images/heroimg1.jpg", alt: "Layered gold necklaces, rings, and bracelets" },
  { desktop: "/images/herolandscape4.png", mobile: "/images/heroimg2.jpg", alt: "Gold jewellery styled across several hands" },
  { desktop: "/images/herolandscape1.png", mobile: "/images/heroimg3.jpg", alt: "Gold rings styled with a rose" },
  { desktop: "/images/herolandsacpe2.png", mobile: "/images/heroimg4.jpg", alt: "Statement rings and a pearl earring in warm light" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => current + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeSlide]);

  function handleTransitionEnd() {
    if (activeSlide === slides.length) {
      setIsTransitioning(false);
      setActiveSlide(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  }

  function goToSlide(index) {
    setIsTransitioning(true);
    setActiveSlide(index);
  }

  return (
    <section aria-label="Rinea jewellery collection" className="relative aspect-[3/4] min-h-[520px] overflow-hidden bg-olive sm:aspect-video sm:min-h-0">
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out motion-reduce:transition-none" : ""}`}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[...slides, slides[0]].map((slide, index) => (
          <div key={`${slide.desktop}-${index}`} className="relative h-full min-w-full">
            <Image
              src={slide.mobile}
              alt={index === slides.length ? "" : slide.alt}
              fill
              priority={index === 0}
              unoptimized
              sizes="100vw"
              className="object-cover sm:hidden"
            />
            <Image
              src={slide.desktop}
              alt={index === slides.length ? "" : slide.alt}
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
        <div className="max-w-2xl text-paper">
          <h1 className={`${editorialFont.className} text-6xl leading-[0.9] tracking-[-0.04em] sm:text-8xl lg:text-[7rem]`}>
            Jewellery for every moment
          </h1>
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-paper/90 sm:text-base">
            Thoughtful pieces made to shine with you, day after day.
          </p>
          <Link
            href="/catalog"
            className="pointer-events-auto mt-7 inline-block border-b border-paper pb-1 font-sans text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-gold hover:text-gold"
          >
            Shop the collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 flex items-center gap-4 text-paper sm:bottom-10 sm:right-12 lg:right-20">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
          className="p-2 text-2xl leading-none hover:text-gold"
        >
          ←
        </button>
        <span className="font-sans text-xs tracking-[0.2em]">
          {String((activeSlide % slides.length) + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => goToSlide((activeSlide + 1) % slides.length)}
          className="p-2 text-2xl leading-none hover:text-gold"
        >
          →
        </button>
      </div>
    </section>
  );
}
