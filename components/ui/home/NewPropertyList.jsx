"use client";
import React from "react";
import Image from "next/image";
import ContentContainer from "../../shared/ContentSection";
import {
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  RulerDimensionLine,
} from "lucide-react";

const section_heading = ["Exclusive New Listings"];

export default function NewPropertyCard({ property }) {
  // Filter and sort properties
  const latestProperties = [...property]
    .filter((p) => p.status?.includes("New"))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  // If we don't have exactly 3 properties, adjust the layout
  const hasThreeProperties = latestProperties.length === 3;
  const mainProperty = hasThreeProperties
    ? latestProperties[0]
    : latestProperties[0];
  const secondaryProperties = hasThreeProperties
    ? latestProperties.slice(1)
    : latestProperties.slice(1);

  return (
    <ContentContainer
      sub_title="Exclusive Collection"
      title={section_heading}
      description="Discover the latest premium properties to hit the market—curated for discerning buyers seeking elegance, comfort, and prime locations."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
        {/* Main featured property - Large left card */}
        {mainProperty && (
          <div className="relative rounded-lg overflow-hidden h-96 lg:h-[32rem] group">
            <Image
              src={mainProperty.image}
              alt={mainProperty.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-sm font-medium px-2 py-1 bg-red-600 rounded-md">
                {mainProperty.category}
              </span>
              <h2 className="text-3xl font-bold mb-3 mt-2">
                {mainProperty.title}
              </h2>
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1 text-sm">
                  <MapPin size={16} /> {mainProperty.location.split(",")[0]}
                </span>
                <span className="text-lg font-semibold">
                  {mainProperty.price}
                </span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2  text-white border rounded-md hover:bg-white/20 transition-colors font-medium">
                Explore <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Right column - Smaller cards */}
        <div className="space-y-6">
          {secondaryProperties.map((property, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden h-60 group"
            >
              <Image
                src={property.image}
                alt={property.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-medium px-2 py-1 bg-red-600 rounded-md">
                  {property.category}
                </span>
                <h3 className="text-xl font-semibold mb-1 mt-1">
                  {property.title}
                </h3>
                <div className="flex items-center gap-3 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <BedDouble size={14} /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={14} /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <RulerDimensionLine size={14} /> {property.sqft} sqft
                  </span>
                </div>
                <button className="flex items-center gap-1 text-sm text-white hover:text-gray-200 transition-colors cursor-pointer">
                  View details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentContainer>
  );
}
