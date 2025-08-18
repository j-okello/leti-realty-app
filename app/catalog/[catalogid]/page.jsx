"use client";
import properties from "@/app/lib/properties";
import { useState, useMemo, useCallback, useEffect } from "react";
import ModalBooking from "@/components/ui/singlelist/BookingForm";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AmenitiesSection from "@/components/ui/singlelist/Amenities";
import ImageGallery from "@/components/ui/singlelist/Gallery";
import BookingCard from "@/components/ui/singlelist/BookingCard";
import ImagePreviewModal from "@/components/ui/singlelist/ImagePreview";
import { Heart, Share2, MapPin } from "lucide-react";

export default function SinglePropertyPage({ params }) {
  const { catalogId } = params;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    const foundProperty =
      properties.find((p) => p.id === params.catalogId) || null;
    setProperty(foundProperty);

    if (foundProperty?.images?.length > 0) {
      const mainImage = foundProperty.images.find((img) => img?.isMain);
      setSelectedImage(mainImage || foundProperty.images[0]);
    }
  }, [catalogId]);

  const breadcrumbItems = useMemo(
    () => [
      { label: "Catalog", href: "/catalog" },
      { label: property?.title || "Property", href: "#" },
    ],
    [property?.title]
  );

  const formatDate = useCallback((dateString) => {
    try {
      return dateString ? new Date(dateString).toLocaleDateString() : "N/A";
    } catch {
      return "N/A";
    }
  }, []);

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

      const newIndex =
        typeof direction === "number"
          ? direction
          : direction === "prev"
            ? currentImageIndex === 0
              ? property.images.length - 1
              : currentImageIndex - 1
            : currentImageIndex === property.images.length - 1
              ? 0
              : currentImageIndex + 1;

      setCurrentImageIndex(newIndex);
    },
    [property?.images, currentImageIndex]
  );

  const handleBookingClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClosePreview = useCallback(() => {
    setIsPreviewOpen(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (!isMounted) {
    return (
      <section className="bg-gray-50 min-h-screen">
        <div className="w-full bg-blue-50 p-3 mt-6">
          <div className="animate-pulse h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-pulse bg-gray-200 rounded-lg h-[600px]"></div>
              <div className="space-y-4">
                <div className="animate-pulse h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
                <div className="animate-pulse h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="animate-pulse bg-gray-200 rounded-lg h-96"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!property) {
    return (
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Property Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The property you're looking for doesn't exist or may have been
            removed.
          </p>
          <a
            href="/catalog"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Browse Properties
          </a>
        </div>
      </section>
    );
  }

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

              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{property.address}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl text-blue-900 font-semibold">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <AmenitiesSection amenities={property.amenities || []} />

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <span>Published: {formatDate(property.publishedDate)}</span>
                <span>Ad number: {property.adNumber}</span>
                <span>Views: {property.views?.toLocaleString() || 0}</span>
              </div>
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
          onClose={handleClosePreview}
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
