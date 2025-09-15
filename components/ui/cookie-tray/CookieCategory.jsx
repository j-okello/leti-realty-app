import React from "react";
import CookieToggle from "./CookieToggle";

const CookieCategory = ({ category, isEnabled, onToggle, className = "" }) => {
  const { key, title, description, required = false } = category;

  return (
    <div className={`border border-gray-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <CookieToggle
          isEnabled={isEnabled}
          onChange={() => onToggle(key)}
          disabled={required}
        />
      </div>
      <p className="text-sm text-gray-600 mb-1">{description}</p>
      {required && <p className="text-xs text-blue-600">Always active</p>}
    </div>
  );
};

export default CookieCategory;
