import React, { useMemo } from "react";
import Image from "next/image";
import AmenityIcon from "./Icons";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
export default function ImagePreviewModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  property,
}) {
  if (!isOpen) return null;

  const { availableAmenities } = useMemo(
    () => ({
      availableAmenities: property.amenities.filter(
        (amenity) => amenity.available
      ),
    }),
    [property.amenities]
  );
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
        aria-label="Close preview"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col ">
        {/* Image Container */}
        <div className="relative flex-grow ">
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
          />

          <button
            onClick={() => onNavigate("prev")}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/30  hover:bg-white/50 p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={() => onNavigate("next")}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/30  hover:bg-opacity-50 p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Description and Amenities Panel */}
        <div className=" rounded-lg p-4 mt-4 max-h-[30vh] overflow-y-auto">
          <h3 className="text-lg text-center text-white font-semibold mb-2">
            {images[currentIndex].alt}
          </h3>
        </div>

        {/* Image Indicator Dots */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-red-600" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
