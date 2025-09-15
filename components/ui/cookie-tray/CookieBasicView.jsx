import React from "react";
import { Settings, ExternalLink } from "lucide-react";
import Link from "next/link";

const CookieBasicView = ({
  onAcceptAll,
  onRejectAll,
  onShowSettings,
  cookiePolicyUrl = "/legal/cookie-policy",
}) => {
  return (
    <>
      <div className="mb-6">
        <p className="text-gray-700 text-sm leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalized
          content, and analyze our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onAcceptAll}
          className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Accept All
        </button>
        <button
          onClick={onRejectAll}
          className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Reject All
        </button>
        <button
          onClick={onShowSettings}
          className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>

      <div className="mt-4 text-center">
        <Link
          href={cookiePolicyUrl}
          className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 focus:outline-none focus:underline"
        >
          Learn more about our cookies
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </>
  );
};

export default CookieBasicView;
