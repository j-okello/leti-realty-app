"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContentContainer from "../../shared/ContentSection";
import {
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  RulerDimensionLine,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { GiFamilyHouse } from "react-icons/gi";
import { PiBuildingFill } from "react-icons/pi";
import { BsBuildingFillCheck } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const section_heading = ["Exclusive New Listings"];
const categories = [
  { id: "all", label: "All", icon: TbCategory2 },
  { id: "house", label: "Houses", icon: GiFamilyHouse },
  { id: "apartment", label: "Apartments", icon: PiBuildingFill },
  { id: "commercial", label: "New Buildings", icon: BsBuildingFillCheck },
];

const priceRanges = [
  { id: "any", label: "Any Price" },
  { id: "0-500", label: "Under $500k" },
  { id: "500-1000", label: "$500k-$1M" },
  { id: "1000-2000", label: "$1M-$2M" },
  { id: "2000+", label: "$2M+" },
];

const bedroomOptions = [
  { id: "any", label: "Any" },
  { id: "1", label: "1+" },
  { id: "2", label: "2+" },
  { id: "3", label: "3+" },
  { id: "4", label: "4+" },
  { id: "5", label: "5+" },
];

export default function NewPropertyCard({ property = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("any");
  const [bedroomFilter, setBedroomFilter] = useState("any");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort properties
  const filteredProperties = [...property]
    .filter((p) => {
      if (!p.status?.includes("New")) return false;

      // Category filter
      if (
        activeCategory !== "all" &&
        p.type?.toLowerCase() !== activeCategory.toLowerCase()
      ) {
        return false;
      }

      // Price filter
      if (priceFilter !== "any") {
        const price = parseInt(p.price?.replace(/[^0-9]/g, "") || "0");
        const [min, max] = priceFilter.split("-").map(Number);

        if (priceFilter.endsWith("+")) {
          if (price < parseInt(priceFilter)) return false;
        } else if (price < min || (max && price > max)) {
          return false;
        }
      }

      // Bedroom filter
      if (bedroomFilter !== "any" && p.beds < parseInt(bedroomFilter)) {
        return false;
      }

      return true;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const hasProperties = filteredProperties.length > 0;
  const isSingleProperty = filteredProperties.length === 1;
  const categoryName =
    categories.find((c) => c.id === activeCategory)?.label || "";
  const displayedProperties = filteredProperties.slice(0, 3);
  const showViewAll = filteredProperties.length > 3;

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) =>
        Math.min(prev + 1, displayedProperties.length - 1)
      ),
    onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Loading skeleton
  const PropertySkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
      <div className="relative rounded-lg overflow-hidden h-96 lg:h-[32rem] bg-gray-200 animate-pulse">
        <div className="absolute bottom-8 left-8 w-3/4 space-y-4">
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-10 w-1/3 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="space-y-6">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden h-60 bg-gray-200 animate-pulse"
          >
            <div className="absolute bottom-6 left-6 w-3/4 space-y-3">
              <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ContentContainer
      sub_title="Exclusive Collection"
      title={section_heading}
      description="Discover the latest premium properties to hit the market—curated for discerning buyers seeking elegance, comfort, and prime locations."
    >
      {isLoading ? (
        <PropertySkeleton />
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-6 px-4 max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`group flex flex-col items-center justify-center px-4 py-3 rounded-lg transition-all duration-200 ease-in-out min-w-[100px] cursor-pointer border ${
                      activeCategory === category.id
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-200"
                    }`}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setCurrentIndex(0);
                    }}
                    aria-label={`Select ${category.label} category`}
                  >
                    <Icon
                      className={`text-2xl mb-1 ${
                        activeCategory === category.id
                          ? "text-white"
                          : "text-blue-900 group-hover:text-blue-600"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${
                        activeCategory === category.id
                          ? "text-white"
                          : "text-gray-700 group-hover:text-blue-600"
                      }`}
                    >
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <SlidersHorizontal size={16} />
                {showFilters ? "Hide Filters" : "More Filters"}
              </button>

              {showViewAll && (
                <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                  View All {filteredProperties.length} Properties
                </button>
              )}
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white p-4 rounded-lg border border-gray-200 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Price Range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {priceRanges.map((range) => (
                          <button
                            key={range.id}
                            onClick={() => setPriceFilter(range.id)}
                            className={`px-3 py-1 text-sm rounded-full border ${
                              priceFilter === range.id
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Bedrooms
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {bedroomOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setBedroomFilter(option.id)}
                            className={`px-3 py-1 text-sm rounded-full border ${
                              bedroomFilter === option.id
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!hasProperties && (
            <div className="text-center py-12 text-gray-500">
              No {activeCategory === "all" ? "" : categoryName + " "}properties
              found matching your criteria
            </div>
          )}

          {hasProperties && (
            <div className="relative">
              {/* Mobile swipe area */}
              <div
                {...swipeHandlers}
                className="lg:hidden absolute inset-0 z-10"
              ></div>

              <div
                className={`grid ${isSingleProperty ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"} gap-6 p-6 max-w-7xl mx-auto`}
              >
                {/* Main featured property */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-lg overflow-hidden ${isSingleProperty ? "h-[32rem]" : "h-96 lg:h-[32rem]"} group`}
                >
                  <Image
                    src={displayedProperties[currentIndex].image}
                    alt={
                      displayedProperties[currentIndex].title ||
                      "Property image"
                    }
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    fill
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="text-sm font-medium px-2 py-1 bg-red-600 rounded-md">
                      {displayedProperties[currentIndex].category || "Property"}
                    </span>
                    <h2 className="text-3xl font-bold mb-3 mt-2">
                      {displayedProperties[currentIndex].title ||
                        "New Property"}
                    </h2>
                    <div className="flex items-center gap-4 mb-3">
                      {displayedProperties[currentIndex].location && (
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin size={16} />{" "}
                          {
                            displayedProperties[currentIndex].location.split(
                              ","
                            )[0]
                          }
                        </span>
                      )}
                      {displayedProperties[currentIndex].price && (
                        <span className="text-lg font-semibold">
                          {displayedProperties[currentIndex].price}
                        </span>
                      )}
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-white border rounded-md hover:bg-white/20 transition-colors font-medium">
                      Explore <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>

                {/* Right column - Only shown when more than one property */}
                {!isSingleProperty && (
                  <div className="space-y-6">
                    {displayedProperties
                      .filter((_, i) => i !== currentIndex)
                      .slice(0, 2)
                      .map((property, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="relative rounded-lg overflow-hidden h-60 group"
                        >
                          <Image
                            src={property.image}
                            alt={property.title || `Property ${index + 1}`}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            fill
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-6 left-6 text-white">
                            <span className="text-xs font-medium px-2 py-1 bg-red-600 rounded-md">
                              {property.category || "Property"}
                            </span>
                            <h3 className="text-xl font-semibold mb-1 mt-1">
                              {property.title || `Property ${index + 1}`}
                            </h3>
                            <div className="flex items-center gap-3 text-sm mb-2">
                              {property.beds && (
                                <span className="flex items-center gap-1">
                                  <BedDouble size={14} /> {property.beds}
                                </span>
                              )}
                              {property.baths && (
                                <span className="flex items-center gap-1">
                                  <Bath size={14} /> {property.baths}
                                </span>
                              )}
                              {property.sqft && (
                                <span className="flex items-center gap-1">
                                  <RulerDimensionLine size={14} />{" "}
                                  {property.sqft} sqft
                                </span>
                              )}
                            </div>
                            <button className="flex items-center gap-1 text-sm text-white hover:text-gray-200 transition-colors cursor-pointer">
                              View details <ChevronRight size={16} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                )}
              </div>

              {/* Mobile indicators */}
              {!isSingleProperty && (
                <div className="lg:hidden flex justify-center gap-2 mt-4">
                  {displayedProperties.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                      aria-label={`Go to property ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </ContentContainer>
  );
}
