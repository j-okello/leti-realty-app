"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import img1 from "@/public/hero-1.jpg";
import img2 from "@/public/hero-2.jpg";
import img3 from "@/public/hero-3.jpg";
import img4 from "@/public/default.jpg";

const billboard = [
  {
    title: "Find Your Perfect Home",
    image: img1,
    description:
      "Browse curated listings that match your lifestyle, budget, and location needs. Whether you're a first-time buyer or looking for your next dream home, we make the search seamless.",
    button: "Start your Journey",
    path: "#",
  },
  {
    title: "Buy, Rent, or Sell — All in One Place",
    image: img2,
    description:
      "From buying and renting to selling your property, we simplify every step. Trust our expert guidance, market insight, and personalized support to get the best value — whether you're moving in or moving on.",
    button: "Get Started",
    path: "#",
  },
  {
    title: "Make Smart Real Estate Moves",
    image: img3,
    description:
      "Whether you're buying, selling, or renting, we provide data-driven insights and expert guidance to help you make informed decisions with confidence.",
    button: "Talk to Us",
    path: "/contact",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const containerRef = useRef(null);

  // Auto slide every 5 seconds (pause on hover)
  useEffect(() => {
    if (billboard.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const scrollToSlide = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % billboard.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + billboard.length) % billboard.length;
    scrollToSlide(prevIndex);
  };

  // Handle scroll events to update currentIndex
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.clientWidth;
      const newIndex = Math.round(container.scrollLeft / slideWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => {
        setIsPaused(true);
        setShowNavButtons(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setShowNavButtons(false);
      }}
    >
      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto "
        style={{ scrollBehavior: "smooth" }}
      >
        {billboard.map((item, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0 snap-start relative"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70  to-black/30" />
            <div className="relative z-10 flex flex-col justify-center h-full text-white px-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {item.title}
              </h1>
              <p className="text-lg md:text-xl">{item.description}</p>

              <div className="mt-3">
                <Link href={item.path}>
                  <button className="px-8 py-4 rounded-lg bg-gradient-to-b from-blue-600 to to-blue-500 cursor-pointer text-pretty  font-sans hover:bg-blue-600">
                    {item.button}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {billboard.length > 1 && (
        <div
          className={`pointer-events-none absolute inset-0 transition-all duration-300 ${
            showNavButtons ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={prevSlide}
            className={`pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-blue-600 z-10 bg-blue-500/90 py-4 md:py-7 rounded-r-lg transition-all duration-300 transform 
                ${showNavButtons ? "translate-x-0" : "-translate-x-full"}`}
            aria-label="Previous property"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className={`pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-blue-600 z-10 bg-blue-500/90 py-4 md:py-7 rounded-l-lg transition-all duration-300 transform 
                ${showNavButtons ? "translate-x-0" : "translate-x-full"}`}
            aria-label="Next property"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Slide Indicators */}
      {billboard.length > 1 && (
        <nav aria-label="Property carousel navigation">
          <ul className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {billboard.map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSlide(index)}
                  className={`block w-5 h-5 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? "bg-gradient-to-b from-red-600 to to-red-500 w-5 h-5 transition-transform ease-linear duration-200 "
                      : "bg-white/50"
                  }`}
                  aria-current={index === currentIndex}
                  aria-label={`Go to property ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}
