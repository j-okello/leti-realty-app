import React, { useState, useEffect } from "react";
import Image from "next/image";
import letiLogo from "@/public/letiLogo.svg";

const PageLoader = ({
  logoSrc = letiLogo,
  logoAlt = "Leti Realty Ltd",
  loadingText = [
    "Building your home experience",
    "Unlocking doors to new beginnings",
    "Welcome home — we’re here to guide every step",
  ],
  duration = 3000, //ms per messages
  size = "large", // "small", "medium", "large"
  onComplete,
  autoComplete = true,
}) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [progressKey, setProgressKey] = useState(0); // reset bar

  // Text cycling effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const nextIndex = (index + 1) % loadingText.length;
        setIndex(nextIndex);
        setFade(true);
        setProgressKey((prev) => prev + 1);

        // Call onComplete after last message
        if (autoComplete && nextIndex === loadingText.length - 1) {
          setTimeout(() => {
            onComplete?.();
          }, duration - 400);
        }
      }, 500); // Match fade-out duration
    }, duration);

    return () => clearInterval(textInterval);
  }, [index, duration, loadingText.length, onComplete, autoComplete]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Container with Pulse Animation */}
        <div className="relative mb-6">
          <div className="animate-pulse">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={128}
              height={128}
              className={`${sizeClasses[size]} object-contain mx-auto`}
              loading="lazy"
              priority={false}
            />
          </div>
        </div>

        {/* Loading Text with Fade */}
        <div
          className={`text-gray-700 text-lg font-medium mb-4 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {loadingText[index]}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mb-4">
          {[0, 1, 2].map((dotIndex) => (
            <div
              key={dotIndex}
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                backgroundColor:
                  dotIndex === 0
                    ? "#1e3a8a"
                    : dotIndex === 1
                      ? "#dc2626"
                      : "#2563eb",
                animationDelay: `${dotIndex * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Synced Progress Bar */}
        <div className="mt-6 w-64 bg-gray-200 rounded-full h-2 mx-auto overflow-hidden">
          <div
            key={progressKey}
            className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 h-2 rounded-full"
            style={{
              animation: `progressFill ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>
      {/* Keyframes for Progress Bar */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
