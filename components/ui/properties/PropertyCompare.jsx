"use client";
import PropertyCard from "@/components/shared/PropertyCard";
import { ArrowRightLeft, Check } from "lucide-react";

export default function PropertyCardWithCompare({
  property,
  isSelected,
  onToggleCompare,
  compareCount,
  className = "",
}) {
  const MAX_COMPARE = 4;
  const canAdd = compareCount < MAX_COMPARE;
  const isDisabled = !canAdd && !isSelected;

  const handleClick = () => {
    if (!isDisabled) {
      onToggleCompare(property);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <PropertyCard property={property} />

      {/* Compare Button */}
      <div className="absolute top-4 right-4 group">
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className={`p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isSelected
              ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
              : canAdd
                ? "bg-white/90 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:scale-105 active:scale-95"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          aria-label={
            isSelected
              ? "Remove property from comparison"
              : "Add property to comparison"
          }
          title={
            isSelected
              ? "Remove from comparison"
              : canAdd
                ? "Add to comparison"
                : `Maximum ${MAX_COMPARE} properties can be compared`
          }
        >
          <span className="block transition-transform duration-200">
            {isSelected ? (
              <Check size={20} aria-hidden="true" />
            ) : (
              <ArrowRightLeft size={20} aria-hidden="true" />
            )}
          </span>
        </button>

        {/* Badge showing comparison count when selected */}
        {isSelected && (
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform transition-all duration-300 scale-0 group-hover:scale-100">
            {compareCount}
          </span>
        )}
      </div>
    </div>
  );
}
