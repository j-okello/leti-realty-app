import React, { useState, useEffect } from "react";
import PropertySaleRequest from "./forms/PropertySale";
import Link from "next/link";
import Image from "next/image";
import buy from "@/public/buy-house.jpg";
import sell from "@/public/sell-house.jpg";
import rent from "@/public/rent-house.jpg";

const calloutItems = [
  {
    id: "buy",
    name: "Buy",
    image: buy,
    title: "Buy a property",
    description:
      "Find your dream home from a curated selection of premium listings tailored to your lifestyle, location, and budget.",
    path: "/sale",
    button: "Find a home",
  },
  {
    id: "sell",
    name: "Sell",
    image: sell,
    title: "Sell a property",
    description:
      "Reach motivated buyers fast with AI-powered marketing and expert listing support.",
    button: "Place an ad",
  },
  {
    id: "rent",
    name: "Rent",
    image: rent,
    title: "Rent a property",
    description:
      "Explore flexible rental options—from modern apartments to spacious homes—all verified and ready for move-in.",
    path: "/rent",
    button: "Find a rental",
  },
];

export default function ActionButtons() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
    isRateLimit: false,
    retryAfter: null,
  });

  const toggleModal = () => {
    setOpenDialog(!openDialog);
    setSubmitStatus({
      success: false,
      message: "",
      isRateLimit: false,
      retryAfter: null,
    }); // Reset status when modal is toggled
    if (!openDialog) {
      reset(); // Reset form when opening modal
    }
  };

  const handleDialogClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenDialog(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && openDialog) {
        setOpenDialog(false);
      }
    };

    if (openDialog) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openDialog]);

  return (
    <section id="cta">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl lg:text-4xl font-light text-blue-900 mb-8">
              Your Next Move Starts Here
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
              {calloutItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      alt={item.name}
                      src={item.image}
                      className="w-full rounded-lg bg-white object-cover group-hover:opacity-90 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                          {item.name}
                        </h3>
                        <p
                          className={`text-sm opacity-90 mb-4 transition-all duration-300 ${
                            hoveredCard === index
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          {item.description}
                        </p>
                        {item.id === "sell" ? (
                          <button
                            className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                              hoveredCard === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDialog(true);
                            }}
                          >
                            {item.button}
                          </button>
                        ) : (
                          <Link
                            href={item.path}
                            className={`inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                              hoveredCard === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                          >
                            {item.button}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Property Sale Form */}
      {openDialog && (
        <PropertySaleRequest
          handleDialogClick={handleDialogClick}
          toggleModal={toggleModal}
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
      )}
    </section>
  );
}
