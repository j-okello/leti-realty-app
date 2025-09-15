import React from "react";
import { Check } from "lucide-react";
import CookieCategory from "./CookieCategory";

const COOKIE_CATEGORIES_CONFIG = [
  {
    key: "necessary",
    title: "Necessary Cookies",
    description:
      "Essential for the website to function properly. These cannot be disabled.",
    required: true,
  },
  {
    key: "functional",
    title: "Functional Cookies",
    description:
      "Enable enhanced functionality and personalization, such as remembering your preferences.",
  },
  {
    key: "analytics",
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors interact with our website to improve user experience.",
  },
  /* {
    key: "marketing",
    title: "Marketing Cookies",
    description:
      "Used to deliver relevant advertisements and track advertising campaign effectiveness.",
  }, */
];

const CookieSettingsView = ({
  preferences,
  onTogglePreference,
  onSavePreferences,
  onBack,
}) => {
  return (
    <>
      <div className="mb-6 max-h-80 overflow-y-auto">
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Choose which cookies you want to accept. You can change these settings
          at any time.
        </p>

        <div className="space-y-4">
          {COOKIE_CATEGORIES_CONFIG.map((category) => (
            <CookieCategory
              key={category.key}
              category={category}
              isEnabled={preferences[category.key]}
              onToggle={onTogglePreference}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onSavePreferences}
          className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Check className="w-4 h-4" />
          Save Preferences
        </button>
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default CookieSettingsView;
