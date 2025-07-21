"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import PropertyCard from "@/components/shared/PropertyCard";
import properties from "@/app/lib/properties";
import Breadcrumb from "@/components/shared/Breadcrumb";
import house from "@/public/house.jpg";
import {
  Search,
  Filter,
  ChevronDown,
  Loader2,
  Scale,
  X,
  Check,
  Eye,
  Bed,
  Bath,
  Square,
  MapPin,
  DollarSign,
  Calendar,
} from "lucide-react";

const breadcrumbItems = [{ label: "Catalog", href: "/catalog" }];

// Error Boundary Component
class PropertyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Property Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-500 mb-4">
            We're having trouble loading the properties. Please try again.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="text-center">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
      <p className="text-gray-600">Loading properties...</p>
    </div>
  </div>
);

// Compare Bar Component
const CompareBar = ({ compareList, onRemove, onCompare, onClear }) => {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-800">
                Compare Properties ({compareList.length}/4)
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {compareList.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg whitespace-nowrap"
                >
                  <span className="text-sm text-gray-700 truncate max-w-32">
                    {property.title}
                  </span>
                  <button
                    onClick={() => onRemove(property.id)}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onCompare}
              disabled={compareList.length < 2}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Compare ({compareList.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compare Modal Component
const CompareModal = ({ isOpen, onClose, properties }) => {
  if (!isOpen) return null;

  const comparisonData = [
    {
      label: "Price",
      key: "price",
      icon: DollarSign,
      format: (val) => `$${val?.toLocaleString() || "N/A"}`,
    },
    {
      label: "Bedrooms",
      key: "bedrooms",
      icon: Bed,
      format: (val) => val || 0,
    },
    {
      label: "Bathrooms",
      key: "bathrooms",
      icon: Bath,
      format: (val) => val || 0,
    },
    {
      label: "Square Feet",
      key: "squareFeet",
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
      format: (val, prop) =>
        `${prop.city || "Unknown"}, ${prop.state || "Unknown"}`,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            Compare Properties
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          {/* Property Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-gray-50 rounded-lg p-4">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={property.image || house}
                    alt={property.title || "Property image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={(e) => {
                      console.error("Image failed to load:", e);
                      // Fallback to default image
                      e.target.src = house;
                    }}
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin size={14} />
                  <span>
                    {property.city}, {property.state}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold text-gray-800 w-48">
                    Feature
                  </th>
                  {properties.map((property) => (
                    <th
                      key={property.id}
                      className="text-left p-3 font-semibold text-gray-800 min-w-48"
                    >
                      {property.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={item.key}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-3 font-medium text-gray-700 flex items-center gap-2">
                      <item.icon size={16} className="text-gray-500" />
                      {item.label}
                    </td>
                    {properties.map((property) => (
                      <td key={property.id} className="p-3 text-gray-600">
                        {item.format(property[item.key], property)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Features Comparison */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Features & Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {properties.map((property) => (
                <div key={property.id} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    {property.title}
                  </h4>
                  <div className="space-y-2">
                    {property.features?.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check size={14} className="text-green-500" />
                        <span>{feature}</span>
                      </div>
                    )) || (
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
  );
};

// Enhanced Property Card with Compare functionality
const PropertyCardWithCompare = ({
  property,
  isSelected,
  onToggleCompare,
  compareCount,
}) => {
  const canAdd = compareCount < 4;
  const canRemove = isSelected;

  return (
    <div className="relative">
      <PropertyCard property={property} />

      {/* Compare Button */}
      <button
        onClick={() => onToggleCompare(property)}
        disabled={!canAdd && !canRemove}
        className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
          isSelected
            ? "bg-blue-600 text-white shadow-lg"
            : canAdd
              ? "bg-white/90 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        title={
          isSelected
            ? "Remove from comparison"
            : canAdd
              ? "Add to comparison"
              : "Maximum 4 properties can be compared"
        }
      >
        {isSelected ? <Check size={20} /> : <Scale size={20} />}
      </button>
    </div>
  );
};

// Filter Component
const FilterPanel = ({ filters, onFilterChange, propertyTypes, locations }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 text-gray-600"
        >
          <Filter size={20} />
          <ChevronDown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            size={16}
          />
        </button>
      </div>

      <div className={`space-y-4 ${isOpen ? "block" : "hidden"} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search properties..."
              value={filters.search}
              onChange={(e) =>
                onFilterChange({ ...filters, search: e.target.value })
              }
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Property Type */}
          <select
            value={filters.type}
            onChange={(e) =>
              onFilterChange({ ...filters, type: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Location */}
          <select
            value={filters.location}
            onChange={(e) =>
              onFilterChange({ ...filters, location: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <select
            value={filters.priceRange}
            onChange={(e) =>
              onFilterChange({ ...filters, priceRange: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Prices</option>
            <option value="0-200000">Under $200k</option>
            <option value="200000-500000">$200k - $500k</option>
            <option value="500000-1000000">$500k - $1M</option>
            <option value="1000000-999999999">$1M+</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bedrooms */}
          <select
            value={filters.bedrooms}
            onChange={(e) =>
              onFilterChange({ ...filters, bedrooms: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any Bedrooms</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>

          {/* Bathrooms */}
          <select
            value={filters.bathrooms}
            onChange={(e) =>
              onFilterChange({ ...filters, bathrooms: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Any Bathrooms</option>
            <option value="1">1+ Bathrooms</option>
            <option value="2">2+ Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
          </select>

          {/* Clear Filters */}
          <button
            onClick={() =>
              onFilterChange({
                search: "",
                type: "",
                location: "",
                priceRange: "",
                bedrooms: "",
                bathrooms: "",
              })
            }
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.slice(
    Math.max(0, currentPage - 2),
    Math.min(totalPages, currentPage + 3)
  );

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Previous
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "border hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
};

export default function CatalogPage() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    location: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
  });

  const itemsPerPage = 9;

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Get unique property types and locations for filters
  const { propertyTypes, locations } = useMemo(() => {
    if (!properties || properties.length === 0)
      return { propertyTypes: [], locations: [] };

    const types = [...new Set(properties.map((p) => p.type).filter(Boolean))];
    const locs = [
      ...new Set(
        properties.map((p) => `${p.city}, ${p.state}`).filter(Boolean)
      ),
    ];

    return { propertyTypes: types, locations: locs };
  }, []);

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    if (!properties || properties.length === 0) return [];

    return properties.filter((property) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          property.title?.toLowerCase().includes(searchTerm) ||
          property.city?.toLowerCase().includes(searchTerm) ||
          property.state?.toLowerCase().includes(searchTerm) ||
          property.type?.toLowerCase().includes(searchTerm);

        if (!matchesSearch) return false;
      }

      // Type filter
      if (filters.type && property.type !== filters.type) return false;

      // Location filter
      if (
        filters.location &&
        `${property.city}, ${property.state}` !== filters.location
      )
        return false;

      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        const price = property.price || 0;
        if (price < min || price > max) return false;
      }

      // Bedrooms filter
      if (filters.bedrooms) {
        const minBedrooms = parseInt(filters.bedrooms);
        if ((property.bedrooms || 0) < minBedrooms) return false;
      }

      // Bathrooms filter
      if (filters.bathrooms) {
        const minBathrooms = parseInt(filters.bathrooms);
        if ((property.bathrooms || 0) < minBathrooms) return false;
      }

      return true;
    });
  }, [filters]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Compare functionality
  const handleToggleCompare = (property) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === property.id);
      if (exists) {
        return prev.filter((p) => p.id !== property.id);
      } else if (prev.length < 4) {
        return [...prev, property];
      }
      return prev;
    });
  };

  const handleRemoveFromCompare = (propertyId) => {
    setCompareList((prev) => prev.filter((p) => p.id !== propertyId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  const handleCompare = () => {
    if (compareList.length >= 2) {
      setShowCompareModal(true);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PropertyErrorBoundary>
      <section className="space-y-8 pb-24">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={house}
            className="object-cover"
            alt="Luxury property showcase"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Handpicked Homes
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
              Where Quality Meets Comfort
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-8 mt-2">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Filters */}
          <FilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
            propertyTypes={propertyTypes}
            locations={locations}
          />

          {/* Results Summary */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              {loading
                ? "Loading..."
                : `Showing ${currentProperties.length} of ${filteredProperties.length} properties`}
            </p>
            {compareList.length > 0 && (
              <div className="text-sm text-blue-600">
                {compareList.length} properties selected for comparison
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && <LoadingSpinner />}

          {/* Property Grid */}
          {!loading && (
            <>
              {currentProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {currentProperties.map((property) => (
                    <PropertyCardWithCompare
                      key={property.id}
                      property={{
                        id: property.id,
                        image: property.image,
                        status: property.status || [],
                        category: property.type || "Property",
                        title: property.title,
                        price:
                          property.priceFormatted ||
                          `$${property.price?.toLocaleString() || "N/A"}`,
                        location: `${property.city || "Unknown"}, ${property.state || "Unknown"}`,
                        beds: property.bedrooms || 0,
                        baths: property.bathrooms || 0,
                        sqft: property.squareFeet || 0,
                      }}
                      isSelected={compareList.some((p) => p.id === property.id)}
                      onToggleCompare={handleToggleCompare}
                      compareCount={compareList.length}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                    No Properties Found
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters or search terms to find more
                    properties.
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        search: "",
                        type: "",
                        location: "",
                        priceRange: "",
                        bedrooms: "",
                        bathrooms: "",
                      })
                    }
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>

        {/* Compare Bar */}
        <CompareBar
          compareList={compareList}
          onRemove={handleRemoveFromCompare}
          onCompare={handleCompare}
          onClear={handleClearCompare}
        />

        {/* Compare Modal */}
        <CompareModal
          isOpen={showCompareModal}
          onClose={() => setShowCompareModal(false)}
          properties={compareList}
        />
      </section>
    </PropertyErrorBoundary>
  );
}
