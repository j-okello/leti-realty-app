"use client";
import { useState, useCallback, useEffect } from "react";
import properties from "@/app/lib/properties";
const useProperty = (catalogId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);

  const findProperty = useCallback((id) => {
    if (!id) {
      throw new Error("Property ID is missing");
    }

    // Convert to number if it's a string representation of a number
    const numericId = isNaN(id) ? id : Number(id);

    // Try to find property with different ID types
    return properties.find(
      (p) =>
        p.id === numericId || p.id === id || p.id?.toString() === id.toString()
    );
  }, []);

  const fetchProperty = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const foundProperty = findProperty(catalogId);

      if (!foundProperty) {
        throw new Error(
          `Property with ID "${catalogId}" not found. It may have been removed or you may have followed a broken link.`
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
    fetchProperty();
  }, [fetchProperty]);

  useEffect(() => {
    if (!catalogId) {
      setError("No property ID provided");
      setIsLoading(false);
      return;
    } else {
      fetchProperty();
    }
  }, [catalogId, fetchProperty]);

  return { property, isLoading, error, retryFetch };
};

export default useProperty;
