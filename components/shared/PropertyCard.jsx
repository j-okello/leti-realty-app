import React, { useState, use } from "react";
import PropertyErrorBoundary from "@/app/utils/ErrorBoundary";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Heart,
  Bath,
  BedDouble,
  MapPin,
  Square,
  Calendar,
  Star,
} from "lucide-react";

// Enhanced Property Card Component
export default function PropertyCard({ property }) {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Early return if no property data
  if (!property) {
    return (
      <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 text-center">
        <p className="text-gray-500">No property data available</p>
      </div>
    );
  }

  // Ensure property.id exists and is valid
  const propertyId = property.id || property._id || "unknown";

  const formatPrice = (price) => {
    if (!price) return "$0";

    const numericPrice = Number(String(price).replace(/[^0-9.-]+/g, ""));
    if (isNaN(numericPrice)) return "$0";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(numericPrice);
  };

  const getStatusColor = (status) => {
    const colors = {
      Featured: "bg-gradient-to-r from-red-500 to-red-600 shadow-red-200",
      New: "bg-gradient-to-r from-green-500 to-green-600 shadow-green-200",
      Hot: "bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-200",
      Sale: "bg-gradient-to-r from-purple-500 to-purple-600 shadow-purple-200",
    };
    return (
      colors[status] ||
      "bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-200"
    );
  };

  const handleCardClick = (e) => {
    // Prevent navigation if clicking on favorite button
    if (e.target.closest("[data-favorite-button]")) {
      return;
    }
    // Only navigate if we have a valid property ID
    if (propertyId !== "unknown") {
      router.push(`/catalog/${propertyId}`);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback image component
  const FallbackImage = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-gray-500 text-sm">Property Image</p>
      </div>
    </div>
  );

  return (
    <PropertyErrorBoundary>
      <div
        onClick={handleCardClick}
        className={`max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group ${
          isHovered ? "scale-105" : "hover:scale-105"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
            {!imageError && property.image ? (
              <Image
                src={property.image}
                alt={property.title || "Property"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={handleImageError}
              />
            ) : (
              <FallbackImage />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Status Badges */}
          {property.status?.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {property.status.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={`text-xs px-3 py-1.5 rounded-full text-white font-medium shadow-lg ${getStatusColor(item)} transform transition-all duration-300 ${
                    isHovered ? "scale-110" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Enhanced Favorite Button */}
          <FavoriteButton />

          {/* Rating Badge */}
          {property.rating && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{property.rating}</span>
              </div>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {property?.category || "Property"}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {property?.title || "Untitled Property"}
              </h3>
            </div>
            <div className="text-right ml-4">
              <p className="text-2xl font-bold text-green-600">
                {formatPrice(property?.price)}
              </p>
              {property.sqft && (
                <p className="text-sm text-gray-500">{property.sqft}/sqft</p>
              )}
            </div>
          </div>

          {/* Location */}
          {property.location && (
            <div className="flex items-center gap-2 mb-4 text-gray-600">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium">{property.location}</span>
            </div>
          )}

          {/* Divider */}
          <hr className="border-gray-200 my-4" />

          {/* Property Features */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <BedDouble className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">
                  {property.beds || 0} bed{property.beds !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Bath className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">
                  {property.baths || 0} baths{property.baths !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Square className="w-4 h-4" />
              <span className="text-sm font-medium">
                {property.sqft ? property.sqft.toLocaleString() : "0"} sqft
              </span>
            </div>
          </div>

          {/* Additional Info */}
          {property.yearBuilt && (
            <div className="flex items-center gap-2 mt-3 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Built in {property.yearBuilt}</span>
            </div>
          )}
        </div>
      </div>
    </PropertyErrorBoundary>
  );
}
