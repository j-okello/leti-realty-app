import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrPrevious, GrNext } from "react-icons/gr";
import { LuBedDouble, LuBath } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";

export default function ImageSlider({ property }) {
   const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === property.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [property.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? property.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === property.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg mb-6"
      aria-label="Image Slider"
      aria-live="polite"
    >
      {/* Slide container */}
      <div
        className="flex h-96 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {property.map((p, index) => (
          <div key={p.id || index} className="min-w-full relative">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-96 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 text-white cursor-pointer group-hover:bg-opacity-40 transition-opacity duration-300" />
            
            {/* Caption overlay - only show for current slide */}
            {index === currentIndex && (
              <div>
                {/* Category and Price Badge */}
                <div className="absolute top-0 left-6 rounded-br-xl rounded-bl-xl text-center bg-red-500 shadow-2xl px-3 py-4 text-white">
                  <h2 className="text-xl font-bold">{p.category}</h2>
                  <span className="text-md font-semibold">{p.price}</span>
                </div>

                {/* Property Details */}
                <div className="absolute md:bottom-6 md:right-3 md:left-4 px-6 py-3 text-center bg-black/50 rounded-xl">
                  <a
                    href="#"
                    className="hover:underline underline-offset-8 text-white"
                  >
                    <h1 className="text-xl md:text-2xl font-semibold mb-5 font-sans text-white">
                      {p.title}
                    </h1>
                  </a>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1.5 md:gap-3 text-white">
                      <Bed className="text-2xl md:text-4xl" size={24} />
                      <span className="text-sm md:text-lg font-sans text-white">
                        {p.beds} beds
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-3 text-white">
                      <Bath className="text-2xl md:text-4xl" size={24} />
                      <span className="text-sm md:text-lg font-sans text-white">
                        {p.baths} baths
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-3 text-white">
                      <Ruler className="text-2xl md:text-4xl" size={24} />
                      <span className="text-sm md:text-lg font-sans text-white">
                        {p.sqft} sqft.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {property.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-0.5 w-8 rounded-full transition ${
              currentIndex === index ? "bg-red-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 p-2 cursor-pointer hover:text-white z-10 bg-black/20 rounded-full hover:bg-black/40 transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 p-2 cursor-pointer hover:text-white z-10 bg-black/20 rounded-full hover:bg-black/40 transition-all"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

export default function PropertySliderDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Property Image Slider</h1>
        <p className="text-gray-600">Interactive property showcase with auto-play functionality</p>
      </div>
      
      <ImageSlider />
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• Auto-play slides every 5 seconds</li>
          <li>• Manual navigation with arrow buttons</li>
          <li>• Dot indicators for direct slide access</li>
          <li>• Property details overlay with beds, baths, and square footage</li>
          <li>• Responsive design for mobile and desktop</li>
          <li>• Smooth transitions and hover effects</li>
        </ul>
      </div>
    </div>
  );
}
