"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import CompareBar from "@/components/ui/properties/CompareBar";
import CompareModal from "@/components/ui/properties/CompareModal";
import PropertyErrorBoundary from "@/components/ui/properties/ErrorBoundary";
import FilterPanel from "@/components/ui/properties/FilterPanel";
import LoadingSpinner from "@/components/ui/properties/Loading";
import Pagination from "@/components/ui/properties/Pagination";
import PropertyCardWithCompare from "@/components/ui/properties/PropertyCompare";
import properties from "@/app/lib/properties";
import house from "@/public/house.jpg";

function CatalogContent() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [listingType, setListingType] = useState("buy");
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    location: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
  });

  const itemsPerPage = 9;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Get unique property types and locations
  const { propertyTypes, locations } = useMemo(() => {
    const types = [...new Set(properties.map((p) => p.type).filter(Boolean))];
    const locs = [
      ...new Set(properties.map((p) => `${p.location}`).filter(Boolean)),
    ];
    return { propertyTypes: types, locations: locs };
  }, []);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Skip properties that don't match listing type
      if (
        (listingType === "FOR RENT" && property.category) ||
        (listingType === "FOR SALE" && !property.category)
      ) {
        return false;
      }

      // Apply filters
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        if (
          !(
            property.title?.toLowerCase().includes(searchTerm) ||
            property.description?.toLowerCase().includes(searchTerm) ||
            `${property.location}`.toLowerCase().includes(searchTerm)
          )
        )
          return false;
      }

      if (filters.type && property.type !== filters.type) return false;
      if (filters.location && `${property.location}` !== filters.location)
        return false;

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        const price = property.price || 0;
        if (price < min || price > max) return false;
      }

      if (filters.bedrooms && (property.beds || 0) < parseInt(filters.bedrooms))
        return false;
      if (
        filters.bathrooms &&
        (property.baths || 0) < parseInt(filters.bathrooms)
      )
        return false;

      return true;
    });
  }, [filters, listingType]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => setCurrentPage(1), [filters, listingType]);

  // Comparison functions
  const handleToggleCompare = (property) => {
    setCompareList((prev) =>
      prev.some((p) => p.id === property.id)
        ? prev.filter((p) => p.id !== property.id)
        : prev.length < 4
          ? [...prev, property]
          : prev
    );
  };

  const handleCompare = () => {
    if (compareList.length >= 2) setShowCompareModal(true);
  };

  return (
    <section className="space-y-8 pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={house}
          className="object-cover"
          alt="Luxury property showcase"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {listingType === "buy" ? "Homes For Sale" : "Rental Properties"}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
            {listingType === "buy"
              ? "Find your dream home today"
              : "Discover your perfect rental"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6">
        {/* Filters */}
        <FilterPanel
          filters={filters}
          onFiltersChange={setFilters}
          propertyTypes={propertyTypes}
          locations={locations}
          listingType={listingType}
          onListingTypeChange={setListingType}
        />

        {/* Results Header */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {filteredProperties.length} Properties Found
            </h2>
            {filters.search && (
              <p className="text-sm text-gray-500 mt-1">
                Search results for: "{filters.search}"
              </p>
            )}
          </div>
          {compareList.length > 0 && (
            <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
              {compareList.length} selected for comparison
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Property Grid */}
            {currentProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {currentProperties.map((property) => (
                    <PropertyCardWithCompare
                      key={property.id}
                      property={{
                        ...property,
                        price:
                          property.priceFormatted ||
                          `${property.price?.toLocaleString()}`,
                        location: `${property.location}`,
                        beds: property.beds,
                        baths: property.baths,
                      }}
                      isSelected={compareList.some((p) => p.id === property.id)}
                      onToggleCompare={handleToggleCompare}
                      compareCount={compareList.length}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  No properties match your search
                </h3>
                <p className="text-gray-500 mb-5">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      search: "",
                      type: "",
                      location: "",
                      priceRange: "",
                      bedrooms: "",
                      bathrooms: "",
                    });
                  }}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Comparison Components */}
      <CompareBar
        compareList={compareList}
        onRemove={(id) =>
          setCompareList((prev) => prev.filter((p) => p.id !== id))
        }
        onCompare={handleCompare}
        onClear={() => setCompareList([])}
        disabled={compareList.length < 2}
      />

      <CompareModal
        isOpen={showCompareModal}
        onClose={() => setShowCompareModal(false)}
        properties={compareList}
      />
    </section>
  );
}

export default function CatalogPage() {
  return (
    <PropertyErrorBoundary>
      <CatalogContent />
    </PropertyErrorBoundary>
  );
}
