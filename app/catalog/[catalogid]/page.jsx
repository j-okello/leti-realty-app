"use client";

import { useState, useMemo, useCallback, useEffect, use } from "react";
import useProperty from "@/app/hooks/dataManager";
import useImageGallery from "@/app/hooks/ImageManger";
import LoadingState from "@/components/ui/singlelist/Loading";
import ErrorState from "@/components/ui/singlelist/Error";
import PropertyDetails from "@/components/ui/singlelist/PropertyDetails";
import ModalBooking from "@/components/ui/singlelist/BookingForm";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ImageGallery from "@/components/ui/singlelist/Gallery";
import BookingCard from "@/components/ui/singlelist/BookingCard";
import ImagePreviewModal from "@/components/ui/singlelist/ImagePreview";
import { Home } from "lucide-react";

// Main component
export default function SinglePropertyPage({ params }) {
  const { catalogId } = use(params);
  const { property, isLoading, error, retryFetch } = useProperty(catalogId);
  const {
    selectedImage,
    currentImageIndex,
    isPreviewOpen,
    handleImageSelect,
    handleImagePreview,
    handleImageNavigation,
    closePreview,
  } = useImageGallery(property);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized breadcrumb items
  const breadcrumbItems = useMemo(
    () => [
      { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
      { label: "Catalog", href: "/catalog" },
      { label: property?.title || "Property", href: "#" },
    ],
    [property?.title]
  );

  // Date formatter
  const formatDate = useCallback((dateString) => {
    try {
      return dateString ? new Date(dateString).toLocaleDateString() : "N/A";
    } catch {
      return "N/A";
    }
  }, []);

  // Modal handlers
  const handleBookingClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Error state
  if (error || !property) {
    return <ErrorState error={error} onRetry={retryFetch} />;
  }

  // Main render
  return (
    <section className="bg-gray-50">
      <div className="w-full bg-blue-50 p-3 mt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              <ImageGallery
                images={property.images || []}
                selectedImage={selectedImage}
                onImageSelect={handleImageSelect}
                onImagePreview={handleImagePreview}
                hasVideo={property.hasVideo}
              />

              <PropertyDetails property={property} formatDate={formatDate} />
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <BookingCard
                property={property}
                onBookingClick={handleBookingClick}
              />
            </div>
          </div>
        </div>

        <ImagePreviewModal
          isOpen={isPreviewOpen}
          onClose={closePreview}
          images={property.images || []}
          currentIndex={currentImageIndex}
          onNavigate={handleImageNavigation}
          property={property}
        />

        {isModalOpen && (
          <ModalBooking setIsModalOpen={handleCloseModal} property={property} />
        )}
      </div>
    </section>
  );
}
