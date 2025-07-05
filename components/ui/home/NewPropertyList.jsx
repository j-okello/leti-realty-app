"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentContainer from "../../shared/ContentSection";
import {
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  RulerDimensionLine,
} from "lucide-react";
import { GiFamilyHouse } from "react-icons/gi";
import { PiBuildingFill } from "react-icons/pi";
import { BsBuildingFillCheck } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { GrNext } from "react-icons/gr";

const section_heading = ["Exclusive New Listings"];
const categories = [
  { id: "all", label: "All", icon: TbCategory2 },
  { id: "house", label: "Houses", icon: GiFamilyHouse },
  { id: "apartment", label: "Apartments", icon: PiBuildingFill },
  { id: "commercial", label: "New Buildings", icon: BsBuildingFillCheck },
];

export default function NewPropertyCard({ property = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter and sort properties based on active category
  const filteredProperties = [...property]
    .filter((p) => {
      if (!p.status?.includes("New")) return false;
      if (activeCategory === "all") return true;
      return p.type?.toLowerCase() === activeCategory.toLowerCase();
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  const hasProperties = filteredProperties.length > 0;
  const isSingleProperty = filteredProperties.length === 1;
  const categoryName =
    categories.find((c) => c.id === activeCategory)?.label || "";

  return (
    <ContentContainer
      sub_title="Exclusive Collection"
      title={section_heading}
      description="Discover the latest premium properties to hit the market—curated for discerning buyers seeking elegance, comfort, and prime locations."
    >
      {/* Category buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6 px-4">
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
              onClick={() => setActiveCategory(category.id)}
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

      <div className="flex justify-end">
        <button className="bg-blue-50 px-3 py-1 rounded-lg border cursor-pointer hover:bg-blue-100">
          <Link href="#">
            <span className="text-pretty text-gray-600 ">view more</span>
          </Link>
        </button>
      </div>
      {!hasProperties && (
        <div className="text-center py-12 text-gray-500">
          No {activeCategory === "all" ? "" : categoryName + " "}properties
          found
        </div>
      )}

      {hasProperties && (
        <div
          className={`grid ${isSingleProperty ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"} gap-6 p-6 max-w-7xl mx-auto`}
        >
          {/* Main featured property - Takes full width when single */}
          <div
            className={`relative rounded-lg overflow-hidden ${isSingleProperty ? "h-[32rem]" : "h-96 lg:h-[32rem]"} group`}
          >
            <Image
              src={filteredProperties[0].image}
              alt={filteredProperties[0].title || "Property image"}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-sm font-medium px-2 py-1 bg-red-600 rounded-md">
                {filteredProperties[0].category || "Property"}
              </span>
              <h2 className="text-3xl font-bold mb-3 mt-2">
                {filteredProperties[0].title || "New Property"}
              </h2>
              <div className="flex items-center gap-4 mb-3">
                {filteredProperties[0].location && (
                  <span className="flex items-center gap-1 text-sm">
                    <MapPin size={16} />{" "}
                    {filteredProperties[0].location.split(",")[0]}
                  </span>
                )}
                {filteredProperties[0].price && (
                  <span className="text-lg font-semibold">
                    {filteredProperties[0].price}
                  </span>
                )}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-white border rounded-md hover:bg-white/20 transition-colors font-medium">
                Explore <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right column - Only shown when more than one property */}
          {!isSingleProperty && (
            <div className="space-y-6">
              {filteredProperties.slice(1).map((property, index) => (
                <div
                  key={index}
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
                          <RulerDimensionLine size={14} /> {property.sqft} sqft
                        </span>
                      )}
                    </div>
                    <button className="flex items-center gap-1 text-sm text-white hover:text-gray-200 transition-colors cursor-pointer">
                      View details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </ContentContainer>
  );
}
