"use client";
import { useState, useCallback, useEffect } from "react";
import properties from "@/app/lib/properties";

const useProperty = (catalogId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);

  // Add debugging
  console.log(
    "useProperty called with catalogId:",
    catalogId,
    "type:",
    typeof catalogId
  );

  const findProperty = useCallback((id) => {
    if (!id) {
      throw new Error("Property ID is missing");
    }

    console.log("Searching for property with ID:", id);
    console.log(
      "Available properties:",
      properties.map((p) => ({ id: p.id, title: p.title }))
    );

    // Convert to number if it's a string representation of a number
    const numericId = isNaN(id) ? id : Number(id);

    // Try to find property with different ID types
    const foundProperty = properties.find(
      (p) =>
        p.id === numericId ||
        p.id === id ||
        p.id?.toString() === id.toString() ||
        String(p.id) === String(id)
    );

    console.log(
      "Found property:",
      foundProperty
        ? { id: foundProperty.id, title: foundProperty.title }
        : "Not found"
    );

    return foundProperty;
  }, []);

  const fetchProperty = useCallback(async () => {
    try {
      console.log("fetchProperty called with catalogId:", catalogId);
      setIsLoading(true);
      setError(null);

      // Add a small delay to simulate async behavior in production
      await new Promise((resolve) => setTimeout(resolve, 100));

      const foundProperty = findProperty(catalogId);

      if (!foundProperty) {
        throw new Error(
          `Property with ID "${catalogId}" not found. Available IDs: ${properties.map((p) => p.id).join(", ")}`
        );
      }

      setProperty(foundProperty);
    } catch (err) {
      console.error("Error loading property:", err);
      setError(err.message);
      setProperty(null);
    } finally {
      setIsLoading(false);
    }
  }, [catalogId, findProperty]);

  const retryFetch = useCallback(() => {
    console.log("Retry fetch called");
    fetchProperty();
  }, [fetchProperty]);

  useEffect(() => {
    console.log("useProperty useEffect triggered, catalogId:", catalogId);

    if (!catalogId || catalogId === "undefined" || catalogId === "null") {
      console.error("Invalid catalogId provided:", catalogId);
      setError(`No valid property ID provided. Received: ${catalogId}`);
      setIsLoading(false);
      return;
    }

    fetchProperty();
  }, [catalogId, fetchProperty]);

  // Add cleanup effect
  useEffect(() => {
    return () => {
      console.log("useProperty cleanup");
      setProperty(null);
      setError(null);
      setIsLoading(true);
    };
  }, []);

  return {
    property,
    isLoading,
    error,
    retryFetch,
    // Add debugging info
    debug: {
      catalogId,
      catalogIdType: typeof catalogId,
      propertiesCount: properties.length,
    },
  };
};

export default useProperty;
