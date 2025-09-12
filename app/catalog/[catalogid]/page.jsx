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
  // Properly unwrap params using React.use()
  const resolvedParams = use(params);
  const { catalogId } = resolvedParams;

  // Data fetching
  const { property, isLoading, error, retryFetch, debug } =
    useProperty(catalogId);

  // Image gallery state management
  const {
    selectedImage,
    currentImageIndex,
    isPreviewOpen,
    handleImageSelect,
    handleImagePreview,
    handleImageNavigation,
    closePreview,
  } = useImageGallery(property);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Keyboard event handler for modal
  const handleEscapeKey = useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (isPreviewOpen) {
          closePreview();
        } else if (isModalOpen) {
          setIsModalOpen(false);
        }
      }
    },
    [isModalOpen, isPreviewOpen, closePreview]
  );

  useEffect(() => {
    if (isModalOpen || isPreviewOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      return () => document.removeEventListener("keydown", handleEscapeKey);
    }
  }, [isModalOpen, isPreviewOpen, handleEscapeKey]);

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
    if (!dateString) return "N/A";

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "N/A";
      return date.toLocaleDateString();
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

  // Handle missing catalogId
  if (!catalogId) {
    console.error("Missing catalogId:", { resolvedParams, debug });
    return (
      <ErrorState
        error="Property ID is missing from the URL"
        onRetry={() => window.location.reload()}
      />
    );
  }

  // Loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Error state
  if (error) {
    return <ErrorState error={error} onRetry={retryFetch} />;
  }

  // Missing property data
  if (!property) {
    return <ErrorState error="Property not found" onRetry={retryFetch} />;
  }

  // Main render
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-blue-50 p-3 mt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Main Content */}
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

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        onClose={closePreview}
        images={property.images || []}
        currentIndex={currentImageIndex}
        onNavigate={handleImageNavigation}
        property={property}
      />

      {/* Booking Modal */}
      {isModalOpen && (
        <ModalBooking
          setIsModalOpen={handleCloseModal}
          property={property.title}
        />
      )}
    </section>
  );
}
