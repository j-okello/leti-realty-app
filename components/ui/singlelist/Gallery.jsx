import { useState } from "react";
import { Heart, Share2, Play } from "lucide-react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import FavoriteButton from "@/components/shared/FavoriteButton";

export default function ImageGallery({
  images = [],
  selectedImage,
  onImageSelect,
  onImagePreview,
  hasVideo = false,
}) {
  const [showSearch, setShowSearch] = useState(false);

  // Early return if no images
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // Use first image as fallback if selectedImage is null
  const currentImage = selectedImage || images[0];

  const handlePreviewClick = () => {
    if (currentImage && onImagePreview) {
      const selectedIndex = images.findIndex(
        (img) => img.id === currentImage.id
      );
      if (selectedIndex >= 0) {
        onImagePreview(selectedIndex);
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group rounded-lg overflow-hidden">
        <button
          onClick={handlePreviewClick}
          className="w-full h-[600px] relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label={`Preview ${currentImage?.alt || "Property Image"}`}
        >
          <Image
            src={currentImage?.url || "/placeholder-image.jpg"}
            alt={currentImage?.alt || "Property image"}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            onError={(e) => {
              // Handle Image component error differently
              console.log("Image failed to load:", currentImage?.url);
            }}
          />
        </button>

        {/* Search Icon (centered overlay) */}
        <div className="absolute inset-0 hover:bg-black/10 flex items-center justify-center ">
          <button
            onClick={handlePreviewClick}
            className="absolute inset-0 m-auto w-12 h-12  rounded-full flex items-center justify-center 
            opacity-0  group-hover:opacity-100 transition duration-300  hover:scale-110 cursor-pointer"
            aria-label="Search in image"
          >
            <BsSearch className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          {/*Favorite Button */}
          <FavoriteButton />
        </div>

        {hasVideo && (
          <button
            className="absolute bottom-4 right-4 bg-red-500 px-4 py-2 rounded-md shadow-md hover:bg-red-600 flex items-center gap-2 transition-all transform hover:scale-105 focus:outline-none "
            aria-label="Play property video"
          >
            <Play className="w-4 h-4 text-white" />
            <span className="text-sm text-white">Play video</span>
          </button>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {images.map((image, index) => (
          <button
            key={image?.id || index}
            onClick={() => onImageSelect?.(image, index)}
            className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
              currentImage?.id === image?.id
                ? "border-red-500 "
                : "border-gray-200 hover:border-gray-300"
            } focus:outline-none `}
            aria-label={`View ${image?.alt || `image ${index + 1}`}`}
            aria-current={currentImage?.id === image?.id ? "true" : "false"}
          >
            <Image
              src={image?.url || "/placeholder-image.jpg"}
              alt={image?.alt || `Property image ${index + 1}`}
              width={80}
              height={64}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                console.log("Thumbnail failed to load:", image?.url);
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
