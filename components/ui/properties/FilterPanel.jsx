"use client";
import React, { useState, useEffect } from "react";
import SelectFilter from "./SelectFilter";
import { Search, Filter, ChevronDown, X, Home, Sliders } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// Filter configuration
const BUY_PRICE_RANGES = [
  { value: "", label: "All Prices" },
  { value: "0-200000", label: "Under $200k" },
  { value: "200000-500000", label: "$200k - $500k" },
  { value: "500000-1000000", label: "$500k - $1M" },
  { value: "1000000-999999999", label: "$1M+" },
];

const RENT_PRICE_RANGES = [
  { value: "", label: "All Prices" },
  { value: "0-1000", label: "Under $1k" },
  { value: "1000-2000", label: "$1k - $2k" },
  { value: "2000-3000", label: "$2k - $3k" },
  { value: "3000-5000", label: "$3k - $5k" },
  { value: "5000-999999", label: "$5k+" },
];

const BEDROOM_OPTIONS = [
  { value: "", label: "Any Bedrooms" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4+ Bedrooms" },
];

const BATHROOM_OPTIONS = [
  { value: "", label: "Any Bathrooms" },
  { value: "1", label: "1 Bathroom" },
  { value: "2", label: "2 Bathrooms" },
  { value: "3", label: "3+ Bathrooms" },
];

export default function FilterPanel({
  propertyTypes = [],
  locations = [],
  initialFilters = {},
  onFiltersChange,
  initialListingType = "buy",
  onListingTypeChange,
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [listingType, setListingType] = useState(initialListingType);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    location: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    ...initialFilters,
  });
  const [activeFilters, setActiveFilters] = useState([]);

  // Sync with URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const urlFilters = {
      search: params.get("search") || "",
      type: params.get("type") || "",
      location: params.get("location") || "",
      priceRange: params.get("price") || "",
      bedrooms: params.get("beds") || "",
      bathrooms: params.get("baths") || "",
    };
    setFilters(urlFilters);
    setListingType(params.get("listingType") || initialListingType);
  }, [searchParams, initialListingType]);

  // Update active filters
  useEffect(() => {
    const active = [];
    if (filters.search) active.push(`Search: "${filters.search}"`);
    if (filters.type) active.push(`Type: ${filters.type}`);
    if (filters.location) active.push(`Location: ${filters.location}`);
    if (filters.priceRange) {
      const range =
        listingType === "buy"
          ? BUY_PRICE_RANGES.find((r) => r.value === filters.price)?.label
          : RENT_PRICE_RANGES.find((r) => r.value === filters.price)?.label;
      if (range) active.push(`Price: ${range}`);
    }
    if (filters.bedrooms) active.push(`Bedrooms: ${filters.bedrooms}+`);
    if (filters.bathrooms) active.push(`Bathrooms: ${filters.bathrooms}+`);
    setActiveFilters(active);
  }, [filters, listingType]);

  const handleClearFilters = () => {
    const clearedFilters = {
      search: "",
      type: "",
      location: "",
      priceRange: "",
      bedrooms: "",
      bathrooms: "",
    };
    setFilters(clearedFilters);
    if (onFiltersChange) onFiltersChange(clearedFilters);
  };

  const handleFilterChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    if (onFiltersChange) onFiltersChange(newFilters);
  };

  const handleListingTypeChange = (type) => {
    setListingType(type);
    if (onListingTypeChange) onListingTypeChange(type);
    // Reset price range when switching types
    handleFilterChange("priceRange", "");
  };

  // Generate breadcrumbs from path
  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
      href: `/${paths.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  // Helper function to get filter name from display text
  const getFilterNameFromDisplay = (displayText) => {
    const filterName = displayText.split(":")[0].toLowerCase().trim();
    const filterMap = {
      search: "search",
      type: "type",
      location: "location",
      price: "priceRange",
      bedrooms: "beds",
      bathrooms: "baths",
    };
    return filterMap[filterName] || filterName;
  };

  return (
    <div className="mb-6">
      {/* Breadcrumb Navigation */}
      <nav
        className="flex items-center text-sm text-gray-600 mb-4 flex-wrap gap-2"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-blue-600 flex items-center">
          <Home size={16} className="mr-1" />
          Home
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span className="mx-1" aria-hidden="true">
              /
            </span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-800 font-medium" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-blue-600">
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="bg-white rounded-lg shadow-sm border p-4">
        {/* Listing Type Toggle */}
        <div
          className="flex border rounded-lg overflow-hidden mb-4 w-fit shadow-sm"
          role="group"
          aria-label="Listing type"
        >
          <button
            onClick={() => handleListingTypeChange("buy")}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              listingType === "buy"
                ? "bg-blue-600 text-white shadow-inner"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            aria-pressed={listingType === "FOR SALE"}
            type="button"
          >
            For Sale
          </button>
          <button
            onClick={() => handleListingTypeChange("rent")}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              listingType === "rent"
                ? "bg-blue-600 text-white shadow-inner"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            aria-pressed={listingType === "FOR RENT"}
            type="button"
          >
            For Rent
          </button>
        </div>

        {/* Active Filters Chips */}
        {activeFilters.length > 0 && (
          <div
            className="flex flex-wrap gap-2 mb-4"
            role="group"
            aria-label="Active filters"
          >
            {activeFilters.map((filter, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
              >
                {filter}
                <button
                  onClick={() => {
                    const filterName = getFilterNameFromDisplay(filter);
                    handleFilterChange(filterName, "");
                  }}
                  className="ml-1.5 rounded-full hover:bg-blue-100 p-0.5"
                  aria-label={`Remove ${filter} filter`}
                  type="button"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
            <button
              onClick={handleClearFilters}
              className="text-xs text-blue-600 hover:text-blue-800 flex items-center ml-2"
              type="button"
            >
              Clear all
              <X size={14} className="ml-0.5" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Sliders size={18} className="text-gray-500" />
            Filters
          </h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-2 text-gray-600"
            aria-expanded={isOpen}
            aria-controls="filter-content"
            type="button"
          >
            {isOpen ? "Hide" : "Show"} Filters
            <ChevronDown
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              size={16}
            />
          </button>
        </div>

        <div
          id="filter-content"
          className={`space-y-4 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search properties..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search properties"
              />
            </div>

            {/* Property Type */}
            <SelectFilter
              value={filters.type}
              onChange={(value) => handleFilterChange("type", value)}
              options={[
                { value: "", label: "All Types" },
                ...propertyTypes.map((type) => ({ value: type, label: type })),
              ]}
              aria-label="Filter by property type"
            />

            {/* Location */}
            <SelectFilter
              value={filters.location}
              onChange={(value) => handleFilterChange("location", value)}
              options={[
                { value: "", label: "All Locations" },
                ...locations.map((location) => ({
                  value: location,
                  label: location,
                })),
              ]}
              aria-label="Filter by location"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Price Range - Dynamic based on listing type */}
            <SelectFilter
              value={filters.priceRange}
              onChange={(value) => handleFilterChange("priceRange", value)}
              options={
                listingType === "buy" ? BUY_PRICE_RANGES : RENT_PRICE_RANGES
              }
              aria-label="Filter by price range"
            />

            {/* Bedrooms */}
            <SelectFilter
              value={filters.bedrooms}
              onChange={(value) => handleFilterChange("bedrooms", value)}
              options={BEDROOM_OPTIONS}
              aria-label="Filter by bedrooms"
            />

            {/* Bathrooms */}
            <SelectFilter
              value={filters.bathrooms}
              onChange={(value) => handleFilterChange("bathrooms", value)}
              options={BATHROOM_OPTIONS}
              aria-label="Filter by bathrooms"
            />

            {/* Clear Button */}
            <button
              onClick={handleClearFilters}
              className={`w-full px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                activeFilters.length > 0
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  : "bg-gray-50 text-gray-400 cursor-not-allowed"
              }`}
              disabled={activeFilters.length === 0}
              type="button"
            >
              <X size={16} />
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
