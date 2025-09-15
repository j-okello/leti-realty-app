import React from "react";
import { Cookie, X } from "lucide-react";

const CookiePopupHeader = ({ onClose, showCloseButton = true }) => {
  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-full">
          <Cookie className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Cookie Settings</h2>
      </div>
      {showCloseButton && (
        <button
          onClick={onClose}
          className="p-1 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
export default CookiePopupHeader;
