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
}) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [progressKey, setProgressKey] = useState(0); // reset bar

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % loadingText.length);
        setFade(true); // fade back in
        setProgressKey((prev) => prev + 1); // restart progress bar
      }, 400); // match fade duration
    }, duration);

    return () => clearInterval(interval);
  }, [loadingText.length, duration]);

  const LogoPlaceholder = () => (
    <div
      className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg`}
    >
      <div className="text-white font-bold text-2xl">LETI REALTY</div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo Container with Pulse Animation */}
        <div className="relative mb-6">
          <div className="animate-pulse">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={logoAlt}
                sizes={128}
                className={`${sizeClasses[size]} object-contain mx-auto`}
              />
            ) : (
              <LogoPlaceholder />
            )}
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
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        {/* Synced Progress Bar */}
        <div className="mt-6 w-64 bg-gray-200 rounded-full h-2 mx-auto overflow-hidden">
          <div
            key={progressKey} // force restart each cycle
            className="bg-gradient-to-r from-blue-600 to-red-500 h-2 rounded-full"
            style={{
              animation: `progressFill ${duration}ms linear forwards`,
            }}
          ></div>
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
