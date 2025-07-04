"use client";
import React, { useState, useEffect } from "react";
import CardUI from "../../shared/PropertyCard";
import ContentContainer from "../../shared/ContentSection";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const heading = ["Curated Property Portfolio"];

export default function CardContainer({ property }) {
  // Animation controls for scroll effect
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // default to desktop

  // Handle scroll animation
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;

        if (width < 640) {
          setVisibleCards(1);
        } else if (width < 1024) {
          setVisibleCards(2);
        } else {
          setVisibleCards(3);
        }

        setCurrentIndex(0);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, property.length - visibleCards);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index <= maxIndex ? index : maxIndex);
  };

  // Cross-fade transition variants
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "linear" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: "circInOut" },
    },
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <ContentContainer
      sub_title="Explore"
      title={heading}
      description="Explore a handpicked selection of distinguished homes, tailored to meet the highest standards of luxury, lifestyle, and location."
    >
      {/* Wrap the slider container with motion.div */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeVariants}
        className="relative overflow-hidden"
      >
        {/* Original Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / property.length) * currentIndex}%)`,
            width: `${(100 / visibleCards) * property.length}%`,
          }}
        >
          {property.map((p, index) => (
            <div
              key={p.id || index}
              className="px-2"
              style={{ flex: `0 0 ${100 / property.length}%` }}
            >
              <CardUI property={p} />
            </div>
          ))}
        </div>

        {/* Controls - unchanged */}
        {property.length > visibleCards && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/3 left-4 transform -translate-y-1/3 bg-white/80 p-2 rounded-full z-30 shadow-lg cursor-pointer hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <GrPrevious className="text-blue-900 hover:text-red-600 text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/3 right-4 transform -translate-y-1/3 bg-white/80 p-2 rounded-full z-30 shadow-lg cursor-pointer hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <GrNext className="text-blue-900 hover:text-red-600" />
            </button>
          </>
        )}

        {/* Dots - unchanged */}
        {property.length > visibleCards && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "w-10 bg-blue-900"
                    : "w-3 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </ContentContainer>
  );
}
