"use client";
import {
  DollarSign,
  Bed,
  Bath,
  Square,
  Eye,
  Calendar,
  MapPin,
  X,
  Check,
} from "lucide-react";
import Image from "next/image";
import house from "@/public/house.jpg";

const COMPARISON_FIELDS = [
  {
    label: "Price",
    key: "price",
    icon: DollarSign,
    format: (val) => `${val?.toLocaleString() || "N/A"}`,
  },
  {
    label: "Bedrooms",
    key: "beds",
    icon: Bed,
    format: (val) => val || 0,
  },
  {
    label: "Bathrooms",
    key: "baths",
    icon: Bath,
    format: (val) => val || 0,
  },
  {
    label: "Square Feet",
    key: "sqft",
    icon: Square,
    format: (val) => (val ? `${val.toLocaleString()} sq ft` : "N/A"),
  },
  {
    label: "Property Type",
    key: "type",
    icon: Eye,
    format: (val) => val || "N/A",
  },
  {
    label: "Year Built",
    key: "yearBuilt",
    icon: Calendar,
    format: (val) => val || "N/A",
  },
  {
    label: "Location",
    key: "location",
    icon: MapPin,
    format: (val, prop) => `${prop.location || "Unknown"}`,
  },
];

export default function CompareModal({ isOpen, onClose, properties }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70  z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-blue-900 border-b p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-white">
            Comparing {properties.length} Properties
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close comparison"
          >
            <X size={24} className="text-gray-300 hover:text-blue-900" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Property Images Only */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {properties.map((property) => (
                <div key={property.id} className="flex flex-col items-center">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
                    <Image
                      src={property.image || house}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center line-clamp-1">
                    {property.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mb-8">
              <h3 className="text-lg text-blue-900 font-semibold mb-4 px-2">
                Key Details
              </h3>
              <div className="border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead>
                      <tr className="bg-blue-300 border-b">
                        <th className="text-left p-3 font-semibold text-white w-48 sticky left-0 bg-blue-900 z-10">
                          Features
                        </th>
                        {properties.map((property) => (
                          <th
                            key={property.id}
                            className="text-left p-3 font-semibold text-blue-900 min-w-48 whitespace-nowrap"
                          >
                            {property.title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_FIELDS.map((item, index) => (
                        <tr
                          key={item.key}
                          className="border-b last:border-b-0 hover:bg-gray-50"
                        >
                          <td className="p-3 font-medium text-gray-700 flex items-center gap-2 sticky left-0 bg-white z-10 min-w-48">
                            <item.icon
                              size={16}
                              className="text-gray-500 flex-shrink-0"
                            />
                            <span className="truncate">{item.label}</span>
                          </td>
                          {properties.map((property) => (
                            <td
                              key={`${property.id}-${item.key}`}
                              className="p-3 text-gray-600 whitespace-nowrap"
                            >
                              {item.format(property[item.key], property)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="px-4 pb-8">
              <h3 className="text-lg text-blue-900 font-semibold mb-4">
                Features & Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-blue-50 rounded-lg p-4 h-full"
                  >
                    <h4 className="font-semibold mb-3 text-blue-900">
                      {property.title}
                    </h4>
                    <div className="space-y-2">
                      {property.features?.length ? (
                        property.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check
                              size={14}
                              className="text-green-500 flex-shrink-0"
                            />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))
                      ) : (
                        <div className="text-sm text-gray-500">
                          No features listed
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
