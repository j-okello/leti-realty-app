import React from "react";

const CookieToggle = ({
  isEnabled,
  onChange,
  disabled = false,
  size = "default",
}) => {
  const sizeClasses = {
    small: "h-4 w-7",
    default: "h-6 w-11",
    large: "h-8 w-14",
  };

  const thumbSizeClasses = {
    small: "h-3 w-3",
    default: "h-4 w-4",
    large: "h-6 w-6",
  };

  const translateClasses = {
    small: isEnabled ? "translate-x-4" : "translate-x-0.5",
    default: isEnabled ? "translate-x-6" : "translate-x-1",
    large: isEnabled ? "translate-x-7" : "translate-x-1",
  };

  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={`relative inline-flex ${sizeClasses[size]} items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isEnabled ? "bg-blue-600" : "bg-gray-200"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block ${thumbSizeClasses[size]} transform rounded-full bg-white shadow transition-transform ${translateClasses[size]}`}
      />
    </button>
  );
};

export default CookieToggle;
