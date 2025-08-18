import React, { useState } from "react";
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

// Error Boundary Component
class PropertyErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Property Card Error:", error, errorInfo);
  }

  handleRetry = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 text-center border border-red-200">
          <div className="text-red-500 mb-3">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="font-medium">Card Load Error</h3>
          </div>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced Property Card Component
export default function PropertyCard({ property }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Ensure property.id exists and is valid
  const propertyId = property?.id || property?._id || "unknown";

  const formatPrice = (price) => {
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
    // Navigate to property details
    router.push(`/catalog/${property.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

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
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EProperty Image%3C/text%3E%3C/svg%3E";
              }}
            />

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
          <button
            onClick={handleFavoriteClick}
            data-favorite-button="true"
            className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 z-10 ${
              isFavorite
                ? "bg-red-500/90 text-white shadow-lg shadow-red-200"
                : "bg-white/90 text-gray-600 hover:bg-white hover:text-red-500"
            }`}
            aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isFavorite ? "fill-current scale-110" : "hover:scale-110"
              }`}
            />
          </button>

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
                {property.category || "Property"}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {property.title}
              </h3>
            </div>
            <div className="text-right ml-4">
              <p className="text-2xl font-bold text-green-600">
                {formatPrice(property.price)}
              </p>
              {property.pricePerSqft && (
                <p className="text-sm text-gray-500">
                  {property.pricePerSqft}/sqft
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium">{property.location}</span>
          </div>

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
                  {property.baths || 0} bath{property.baths !== 1 ? "s" : ""}
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
