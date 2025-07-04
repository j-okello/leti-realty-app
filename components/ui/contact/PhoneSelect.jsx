"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import countries from "@/app/lib/countries";

export default function PhoneInput({
  onPhoneChange,
  initialValue = { code: "", phoneCode: "", number: "" },
  errors,
}) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(initialValue.number || "");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const [countriesWithFlags, setCountriesWithFlags] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false); // Track initialization

  // Transform countries data to include flags
  useEffect(() => {
    const transformedCountries = countries.map((country) => ({
      ...country,
      flag: `https://flagsapi.com/${country.code}/flat/64.png`,
    }));
    setCountriesWithFlags(transformedCountries);
  }, []);

  // Set default to Kenya or initial value
  useEffect(() => {
    if (!selectedCountry && countriesWithFlags.length > 0) {
      let defaultCountry;

      // If initialValue has a code, use that
      if (initialValue.code) {
        defaultCountry = countriesWithFlags.find(
          (country) => country.code === initialValue.code
        );
      }

      // Otherwise default to Kenya
      if (!defaultCountry) {
        defaultCountry = countriesWithFlags.find(
          (country) => country.code === "KE"
        );
      }

      setSelectedCountry(defaultCountry);
      setIsInitialized(true);
    }
  }, [countriesWithFlags]);

  //  Call onPhoneChange whenever data changes
  useEffect(() => {
    if (selectedCountry && isInitialized && onPhoneChange) {
      const phoneData = {
        code: selectedCountry.code,
        phoneCode: selectedCountry.phoneCode,
        number: phoneNumber,
        fullNumber: `${selectedCountry.phoneCode}${phoneNumber}`,
      };

      console.log("PhoneInput sending data:", phoneData);
      onPhoneChange(phoneData);
    }
  }, [selectedCountry, phoneNumber]);

  // Update phone number when initialValue changes (for controlled component behavior)
  useEffect(() => {
    if (initialValue.number !== phoneNumber) {
      setPhoneNumber(initialValue.number || "");
    }
  }, [initialValue.number]);

  const filteredCountries = countriesWithFlags.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.phoneCode.includes(searchTerm) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    // Remove any non-numeric characters except spaces and dashes for display
    value = value.replace(/[^\d\s-]/g, "");
    setPhoneNumber(value);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="w-full  ">
      <label className="block text-sm font-medium text-blue-900 mb-2">
        Phone Number
      </label>

      <div className="flex">
        {/* Country Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-label="Select country"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center flex-1 min-w-0 verflow-hidden">
              {selectedCountry && (
                <img
                  src={selectedCountry.flag}
                  alt={`${selectedCountry.name} flag`}
                  className="w-5 h-4 mr-2 object-cover rounded-sm shrink-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
              <span className="text-sm font-medium text-gray-700 truncate">
                {selectedCountry?.phoneCode}
              </span>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-blue-900 transition-transform ml-2 shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div
              className="absolute top-full left-0 w-80 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-hidden"
              role="listbox"
              aria-label="Country selection"
            >
              {/* Search */}
              <div className="p-2 border-b border-gray-200">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-label="Search countries"
                  />
                </div>
              </div>

              {/* Country List */}
              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleSelect(country)}
                      className="w-full flex items-center px-3 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-left"
                      role="option"
                      aria-selected={selectedCountry?.code === country.code}
                    >
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-6 h-4 mr-3 object-cover rounded-sm"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {country.name}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        {country.phoneCode}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="0123 456 789"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className=" px-3 py-2 w-full border bg-white border-blue-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-0"
          aria-label="Phone number"
        />
      </div>
      {/* Error Display */}
      {errors?.phone && (
        <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
      )}
    </div>
  );
}
