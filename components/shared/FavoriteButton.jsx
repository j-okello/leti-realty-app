"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  return (
    <button
      onClick={handleFavoriteClick}
      data-favorite-button="true"
      className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 z-10 ${
        isFavorite
          ? "bg-red-500/90 text-white shadow-lg shadow-red-200"
          : "bg-white/90 text-gray-600 hover:bg-white hover:text-red-500"
      }`}
      aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
    >
      <Heart
        className={`w-5 h-5 transition-all duration-300 ${
          isFavorite ? "fill-current scale-110" : "hover:scale-110"
        }`}
      />
    </button>
  );
}
