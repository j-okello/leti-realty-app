import React from "react";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/app/hooks/cookieConsent";

const CookieSettingsButton = ({
  className = "",
  position = "bottom-right",
}) => {
  const { resetConsent } = useCookieConsent();

  const positionClasses = {
    "bottom-right": "fixed bottom-4 right-4",
    "bottom-left": "fixed bottom-4 left-4",
    "top-right": "fixed top-4 right-4",
    "top-left": "fixed top-4 left-4",
  };

  const handleOpenSettings = () => {
    resetConsent();
    // Trigger re-render of popup
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={handleOpenSettings}
      className={`${positionClasses[position]} p-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-100 transition-colors z-30 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${className}`}
      title="Cookie Settings"
    >
      <Cookie className="w-5 h-5" />
    </button>
  );
};

export default CookieSettingsButton;
