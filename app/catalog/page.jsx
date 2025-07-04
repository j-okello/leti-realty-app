"use client";
import SidePanel from "@/components/shared/SidePanel";
import React, { useState } from "react";
import { ChevronDown, RotateCcw } from "lucide-react";
export default function CatalogPage() {
  const [filters, setFilters] = useState({
    forRent: false,
    forSale: true,
    location: "New York",
    district: "",
    propertyTypes: {
      house: false,
      apartment: false,
      room: false,
      office: false,
      commercial: false,
      land: false,
    },
    priceRange: {
      min: 30000,
      max: 250000,
    },
    bedrooms: "Studio",
    bathrooms: 1,
    squareMeters: {
      min: "",
      max: "",
    },
    amenities: {
      airConditioning: false,
      balcony: false,
      garage: false,
      gym: false,
      parking: false,
      pool: false,
    },
    pets: {
      catsAllowed: false,
      dogsAllowed: false,
    },
    additionalOptions: {
      verified: false,
      featured: false,
    },
  });

  const [dropdowns, setDropdowns] = useState({
    location: false,
    district: false,
  });

  const handleFilterChange = (category, key, value) => {
    if (category) {
      setFilters((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [key]: value,
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  const resetFilters = () => {
    setFilters({
      forRent: false,
      forSale: true,
      location: "New York",
      district: "",
      propertyTypes: {
        house: false,
        apartment: false,
        room: false,
        office: false,
        commercial: false,
        land: false,
      },
      priceRange: {
        min: 30000,
        max: 250000,
      },
      bedrooms: "Studio",
      bathrooms: 1,
      squareMeters: {
        min: "",
        max: "",
      },
      amenities: {
        airConditioning: false,
        balcony: false,
        garage: false,
        gym: false,
        parking: false,
        pool: false,
      },
      pets: {
        catsAllowed: false,
        dogsAllowed: false,
      },
      additionalOptions: {
        verified: false,
        featured: false,
      },
    });
  };

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };
  return (
    <div>
      <section></section>
    </div>
  );
}
