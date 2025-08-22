"use client";
import ImageGallery from "@/components/ui/singlelist/Gallery";
import { useState, useEffect, useCallback } from "react";

const useImageGallery = (property) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Set initial selected image when property changes
  useEffect(() => {
    if (property?.images?.length > 0) {
      const mainImage = property.images.find((img) => img?.isMain);
      setSelectedImage(mainImage || property.images[0]);
    }
  }, [property]);

  const handleImageSelect = useCallback((image, index) => {
    if (image) {
      setSelectedImage(image);
      setCurrentImageIndex(index);
    }
  }, []);

  const handleImagePreview = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsPreviewOpen(true);
  }, []);

  const handleImageNavigation = useCallback(
    (direction) => {
      if (!property?.images?.length) return;

      let newIndex;
      if (typeof direction === "number") {
        newIndex = direction;
      } else if (direction === "prev") {
        newIndex =
          currentImageIndex === 0
            ? property.images.length - 1
            : currentImageIndex - 1;
      } else {
        newIndex =
          currentImageIndex === property.images.length - 1
            ? 0
            : currentImageIndex + 1;
      }

      setCurrentImageIndex(newIndex);
    },
    [property?.images, currentImageIndex]
  );

  const closePreview = useCallback(() => {
    setIsPreviewOpen(false);
  }, []);

  return {
    selectedImage,
    currentImageIndex,
    isPreviewOpen,
    handleImageSelect,
    handleImagePreview,
    handleImageNavigation,
    closePreview,
  };
};

export default useImageGallery;
