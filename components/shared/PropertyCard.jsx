"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Heart,
  Bath,
  BedDouble,
  Ruler,
  MapPin,
  ArrowLeftRight,
} from "lucide-react";

export default function CardUI({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    console.log("Navigate to property details:", property.id);
  };

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1">
      <div className="relative">
        <Image
          loading="lazy"
          priority={false}
          src={property.image}
          className="w-full  h-65 object-cover transition-transform duration-300 group-hover:scale-105 "
          alt={property.title}
        />
        {/* Status Badges */}
        <div className="absolute top-6 left-3 items-start flex flex-col gap-1 shadow-2xl">
          {property.status?.map((item, index) => (
            <span
              key={index}
              className={`rounded-md  px-2 py-1 text-xs font-medium text-white
                 ${
                   item === "Featured"
                     ? "bg-red-500"
                     : item === "New"
                       ? "bg-green-500"
                       : item === "Verified"
                         ? "bg-blue-500"
                         : ""
                 }`}
            >
              {item}
            </span>
          ))}
        </div>
        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              isFavorite
                ? "fill-red-500 text-red-500 scale-110"
                : "text-gray-600 hover:text-red-500"
            }`}
          />
        </button>

        {/* Property Details */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                {property.category}
              </span>
              <h3 className="text-lg font-bold text-blue-950 mt-1 line-clamp-2">
                {property.title}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-red-600">{property.price}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{property.location}</span>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-4" />

          {/* Property Features */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700 font-medium">
                  {property.beds} bed{property.beds !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700 font-medium">
                  {property.baths} bath{property.baths !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {property.sqft.toLocaleString()} sqft
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

*/
