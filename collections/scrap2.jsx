"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalBooking from "@/components/ui/singlelist/BookingForm";
import Breadcrumb from "@/components/shared/Breadcrumb";
import {
  Heart,
  Share2,
  Play,
  Wifi,
  Car,
  Wind,
  Tv,
  Shield,
  Thermometer,
  MapPin,
  Bed,
  Bath,
  Dumbbell,
  WavesLadder,
  UsersRound,
  Shapes,
  Leaf,
  HousePlus,
  Fence,
  PawPrint,
  ThermometerSun,
  Cctv,
  Zap,
  Droplets,
  HousePlug,
  Globe,
  HouseWifi,
  Square,
  ArrowUp,
  WashingMachine,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GoQuestion } from "react-icons/go";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img4.jpg";

// Constants
const AMENITY_ICONS = {
  wifi: Wifi,
  heating: Thermometer,
  dishwasher: WashingMachine,
  parking: Car,
  ac: Wind,
  iron: Thermometer,
  tv: Tv,
  laundry: WashingMachine,
  security: Shield,
  "no-smoking": Shield,
  "24/7 security": Cctv,
  "electric fence": Zap,
  "water supply": Droplets,
  "backup generator": HousePlug,
  "internet ready": HouseWifi,
  "dstv/tv connections": Tv,
  balcony: Square,
  elevator: ArrowUp,
  "swimming pool": WavesLadder,
  "gym/fitness center": Dumbbell,
  clubhouse: UsersRound,
  "children's play area": Shapes,
  garden: Leaf,
  "laundry area": WashingMachine,
  "servant's quarters (dsq)": HousePlus,
  "gated community": Fence,
  "pet friendly": PawPrint,
  "solar water heating": ThermometerSun,
};

// Sample property data
const DEFAULT_PROPERTY = {
  id: 1,
  title: "Pine Apartments",
  address: "28 Jackson Ave Long Island City, NY 67234",
  price: 2000,
  currency: "$",
  priceUnit: "/month",
  type: "apartment",
  area: 56,
  areaUnit: "sq m",
  builtYear: 2015,
  bedrooms: 4,
  bathrooms: 2,
  parkingSpaces: 2,
  petsAllowed: "cats only",
  verified: true,
  isNew: true,
  publishedDate: "2024-01-15",
  adNumber: "AD123456",
  views: 1247,
  images: [
    {
      id: 1,
      url: img1,
      alt: "Main living area",
      isMain: true,
    },
    {
      id: 2,
      url: img2,
      alt: "Kitchen view",
    },
    {
      id: 3,
      url: img3,
      alt: "Bedroom",
    },
    {
      id: 4,
      url: img4,
      alt: "Bathroom",
    },
  ],
  hasVideo: true,
  description:
    "Fuisset mauris perspiciatis rutrum quis. Nulla tincidunt molestias suscipit esse rhoncus, sed orci eu donec sed. Nullam hac neque quis nec, fusce in blandit sem purus rhoncus. Proin potenti consequat diam nihil. Elementum placerat quis est dolor consequat blandit platea. Diam sit blandit nunc rutrum, facilisis commodo in tincidunt. Duis placerat quis molestie sapien quam. Diam aliquam at in ornare sed et pretium nulla. Elementum volutpat velit mauris ac nunc, rutrum nunc rhoncus tempor. Ut nunc, egestas.",
  amenities: [
    { id: 1, name: "Free WiFi", icon: "wifi", available: true },
    { id: 2, name: "Heating", icon: "heating", available: true },
    { id: 3, name: "Dishwasher", icon: "dishwasher", available: false },
    { id: 4, name: "Parking space", icon: "parking", available: true },
    { id: 5, name: "Air conditioning", icon: "ac", available: true },
    { id: 6, name: "Iron", icon: "iron", available: true },
    { id: 7, name: "TV", icon: "tv", available: true },
    { id: 8, name: "Laundry", icon: "laundry", available: true },
    { id: 9, name: "Security cameras", icon: "security", available: true },
    { id: 10, name: "No smoking", icon: "no-smoking", available: true },
  ],
  notIncluded: [
    { name: "Swimming pool", available: false },
    { name: "Restaurant", available: false },
    { name: "Spa lounge", available: false },
    { name: "Bar", available: false },
  ],
};

// Helper Components
const DetailRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const AmenityIcon = ({ iconName, className = "w-5 h-5 text-gray-600" }) => {
  const IconComponent = AMENITY_ICONS[iconName] || Shield;
  return <IconComponent className={className} />;
};

const PropertyBadges = ({ verified, isNew }) => (
  <div className="flex flex-wrap gap-2">
    {verified && (
      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
        Verified
      </span>
    )}
    {isNew && (
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
        New
      </span>
    )}
  </div>
);

const PropertyStats = ({ property }) => (
  <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
    <div className="flex items-center gap-1">
      <span className="font-semibold">{property.bedrooms}</span>
      <span role="img" aria-label="Bedrooms">
        🏠
      </span>
    </div>
    <div className="flex items-center gap-1">
      <span className="font-semibold">{property.bedrooms}</span>
      <span role="img" aria-label="Beds">
        🛏️
      </span>
    </div>
    <div className="flex items-center gap-1">
      <span className="font-semibold">{property.bathrooms}</span>
      <span role="img" aria-label="Bathrooms">
        🚿
      </span>
    </div>
    <div className="flex items-center gap-1">
      <span className="font-semibold">{property.area}</span>
      <span className="text-gray-600">{property.areaUnit}</span>
    </div>
  </div>
);

// Image Gallery Component
const ImageGallery = ({
  images,
  selectedImage,
  onImageSelect,
  onImagePreview,
  hasVideo,
}) => (
  <div className="space-y-4">
    <div className="relative rounded-lg overflow-hidden">
      <button
        onClick={() =>
          onImagePreview(images.findIndex((img) => img.id === selectedImage.id))
        }
        className="w-full h-[600px] relative"
      >
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt}
          fill
          className="object-cover"
          priority
        />
      </button>

      <div className="absolute top-4 right-4 flex gap-2">
        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Share property"
        >
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {hasVideo && (
        <button
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-md shadow-md hover:bg-gray-50 flex items-center gap-2 transition-colors"
          aria-label="Play property video"
        >
          <Play className="w-4 h-4" />
          <span className="text-sm">Play video</span>
        </button>
      )}
    </div>

    {/* Thumbnail Navigation */}
    <div className="flex gap-2 overflow-x-auto pb-2">
      {images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => onImageSelect(image, index)}
          className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
            selectedImage.id === image.id
              ? "border-red-500"
              : "border-gray-200 hover:border-gray-300"
          }`}
          aria-label={`View ${image.alt}`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={80}
            height={64}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  </div>
);

// Image Preview Modal Component
const ImagePreviewModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  property,
}) => {
  if (!isOpen) return null;

  const { availableAmenities } = useMemo(
    () => ({
      availableAmenities: property.amenities.filter(
        (amenity) => amenity.available
      ),
    }),
    [property.amenities]
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
        aria-label="Close preview"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Image Container */}
        <div className="relative flex-grow">
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
          />

          <button
            onClick={() => onNavigate("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={() => onNavigate("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Description and Amenities Panel */}
        <div className="bg-white rounded-lg p-4 mt-4 max-h-[30vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">
            {images[currentIndex].alt}
          </h3>
          <p className="text-gray-700 mb-4">{property.description}</p>

          <h4 className="font-medium mb-2">Featured Amenities:</h4>
          <div className="grid grid-cols-2 gap-2">
            {availableAmenities.slice(0, 6).map((amenity) => (
              <div key={amenity.id} className="flex items-center gap-2">
                <AmenityIcon iconName={amenity.icon} />
                <span className="text-sm">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Indicator Dots */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-white" : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Amenities Section Component
const AmenitiesSection = ({ amenities }) => {
  const { availableAmenities, unavailableAmenities } = useMemo(
    () => ({
      availableAmenities: amenities.filter((amenity) => amenity.available),
      unavailableAmenities: amenities.filter((amenity) => !amenity.available),
    }),
    [amenities]
  );

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm space-y-6">
      <h2 className="text-xl text-blue-900 font-semibold">Amenities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {availableAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-2">
            <AmenityIcon iconName={amenity.icon} />
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>

      {unavailableAmenities.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg text-blue-900 font-semibold">
            Not included in rent
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unavailableAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="flex items-center gap-2 text-gray-400"
              >
                <AmenityIcon iconName={amenity.icon} />
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Booking Card Component
const BookingCard = ({ property, onBookingClick }) => {
  const formatPrice = useCallback(
    (price) => {
      return `${property.currency}${price.toLocaleString()}`;
    },
    [property.currency]
  );

  const formatDate = useCallback(
    (dateString) => {
      if (!isMounted) return "";
      return new Date(dateString).toLocaleDateString();
    },
    [isMounted]
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6 space-y-6">
      <PropertyBadges verified={property.verified} isNew={property.isNew} />

      {/* Price */}
      <div>
        <span className="text-sm text-blue-900">Monthly rent:</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-red-600">
            {formatPrice(property.price)}
          </span>
          <span className="text-gray-600">{property.priceUnit}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="space-y-4">
        <h3 className="font-semibold text-blue-900">Property Details</h3>
        <div className="space-y-3 text-sm">
          <DetailRow label="Type:" value={property.type} />
          <DetailRow
            label="Apartment area:"
            value={`${property.area} ${property.areaUnit}`}
          />
          <DetailRow label="Built:" value={property.builtYear} />
          <DetailRow label="Bedrooms:" value={property.bedrooms} />
          <DetailRow label="Bathrooms:" value={property.bathrooms} />
          <DetailRow label="Parking places:" value={property.parkingSpaces} />
          <DetailRow label="Pets allowed:" value={property.petsAllowed} />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onBookingClick}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
      >
        Book a viewing
      </button>

      {/* FAQ Link */}
      <div className="text-center">
        <Link
          href="/about#faq"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <GoQuestion size={16} />
          <span>Frequently asked questions</span>
        </Link>
      </div>
    </div>
  );
};

// Main Component
export default function SinglePropertyPage({ property = DEFAULT_PROPERTY }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize after client-side hydration
  const [selectedImage, setSelectedImage] = useState(
    () => property.images.find((img) => img.isMain) || property.images[0]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const breadcrumbItems = useMemo(
    () => [
      { label: "Catalog", href: "/catalog" },
      { label: "catalogId", href: "/catalog/catalogId" },
    ],
    []
  );

  const formatDate = useCallback((dateString) => {
    return new Date(dateString).toLocaleDateString();
  }, []);

  const handleImageSelect = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  }, []);

  const handleImagePreview = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsPreviewOpen(true);
  }, []);

  const handleImageNavigation = useCallback(
    (direction) => {
      if (typeof direction === "number") {
        setCurrentImageIndex(direction);
      } else if (direction === "prev") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? property.images.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) =>
          prev === property.images.length - 1 ? 0 : prev + 1
        );
      }
    },
    [property.images.length]
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

  // Show loading state until mounted
  if (!isMounted) {
    return (
      <section className="bg-gray-50">
        <div className="w-full bg-blue-50 p-3 mt-6">
          <div className="animate-pulse h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="animate-pulse bg-gray-200 rounded-lg h-[600px]"></div>
                <div className="animate-pulse space-y-2">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="animate-pulse bg-gray-200 rounded-lg h-96"></div>
              </div>
            </div>
          </div>
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
              {/* Image Gallery */}
              <ImageGallery
                images={property.images}
                selectedImage={selectedImage}
                onImageSelect={handleImageSelect}
                onImagePreview={handleImagePreview}
                hasVideo={property.hasVideo}
              />

              {/* Property Header */}
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{property.address}</span>
                </div>
              </div>

              {/* Property Stats */}
              <PropertyStats property={property} />

              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-xl text-blue-900 font-semibold">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <AmenitiesSection amenities={property.amenities} />

              {/* Property Metadata */}
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

        {/* Image Preview Modal */}
        <ImagePreviewModal
          isOpen={isPreviewOpen}
          onClose={handleClosePreview}
          images={property.images}
          currentIndex={currentImageIndex}
          onNavigate={handleImageNavigation}
          property={property}
        />

        {/* Booking Modal */}
        {isModalOpen && (
          <ModalBooking setIsModalOpen={handleCloseModal} property={property} />
        )}
      </div>
    </section>
  );
}
